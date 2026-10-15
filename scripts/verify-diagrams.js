#!/usr/bin/env node
/* RefreshYourself — permanent site-wide diagram verification sweep. See
   docs/rules/diagram-style.md ("mandatory automated verification script" and the two
   follow-up incidents) for what this checks and why it exists as a real tool instead of a
   script improvised per incident.

   Finds every *.html page anywhere in the repo that has at least one <svg class="topic-diagram">
   (the per-scenario `.uc-mini svg` diagrams on the same page are checked too),
   loads each one on a live local server (not static markup — getBBox()/getPointAtLength() need
   an actual render), and runs the exact checkDiagram() function from diagram-style.md against
   it. A page passes when every topic-diagram svg on it reports issueCount: 0.

   Usage:
     node scripts/verify-diagrams.js                  # every diagram-bearing page on the site
     node scripts/verify-diagrams.js --only linq/      # only pages whose path contains this substring
     node scripts/verify-diagrams.js --port 47777      # use a specific port instead of a random high one

   Keep this script's checkDiagram()/helpers byte-for-byte in sync with the canonical copy in
   docs/rules/diagram-style.md — that file is the spec, this is the runnable form of it. If you
   add a new check to one, add it to the other in the same change. */

const fs = require("fs");
const path = require("path");
const { spawn } = require("child_process");
const ROOT = path.resolve(__dirname, "..");
const SKIP_DIRS = new Set([".git", "node_modules", "assets", "docs", ".claude", ".github"]);

const args = process.argv.slice(2);
const onlyIdx = args.indexOf("--only");
const only = onlyIdx >= 0 ? args[onlyIdx + 1] : null;
const portIdx = args.indexOf("--port");
const PORT = portIdx >= 0 ? parseInt(args[portIdx + 1], 10) : 40000 + Math.floor(Math.random() * 10000);

function findHtmlPages(dir, out) {
  for (const f of fs.readdirSync(dir)) {
    if (SKIP_DIRS.has(f)) continue;
    const full = path.join(dir, f);
    const st = fs.statSync(full);
    if (st.isDirectory()) { findHtmlPages(full, out); continue; }
    if (!f.endsWith(".html")) continue;
    const rel = path.relative(ROOT, full);
    if (only && !rel.includes(only)) continue;
    const content = fs.readFileSync(full, "utf8");
    if (content.includes('class="topic-diagram"')) out.push(rel);
  }
  return out;
}

// Exact copy of the canonical script body from docs/rules/diagram-style.md — see the comment above.
const CHECK_SCRIPT = `(function(){
function ptSegDist(px,py,x1,y1,x2,y2){const dx=x2-x1,dy=y2-y1,len2=dx*dx+dy*dy;if(len2===0)return Math.hypot(px-x1,py-y1);let t=((px-x1)*dx+(py-y1)*dy)/len2;t=Math.max(0,Math.min(1,t));return Math.hypot(px-(x1+t*dx),py-(y1+t*dy));}
function pathSegments(d){const segs=[];if(!d)return segs;const toks=d.trim().split(/(?=[MLHVCQAmlhvcqa])/).map(s=>s.trim()).filter(Boolean);let cx=0,cy=0;toks.forEach(tok=>{const cmd=tok[0];const nums=tok.slice(1).trim().split(/[\\s,]+/).filter(Boolean).map(Number);if(cmd==='M'){cx=nums[0];cy=nums[1];}else if(cmd==='L'){segs.push([cx,cy,nums[0],nums[1]]);cx=nums[0];cy=nums[1];}else if(cmd==='H'){segs.push([cx,cy,nums[0],cy]);cx=nums[0];}else if(cmd==='V'){segs.push([cx,cy,cx,nums[0]]);cy=nums[0];}});return segs;}
function pointNearGeometry(px,py,rects,texts,paths,excludePath,tol){for(const r of rects){if(px>=r.box.x-tol&&px<=r.box.x+r.box.w+tol&&py>=r.box.y-tol&&py<=r.box.y+r.box.h+tol)return'rect';}for(const t of texts){if(px>=t.box.x-tol&&px<=t.box.x+t.box.width+tol&&py>=t.box.y-tol&&py<=t.box.y+t.box.height+tol)return'text';}for(const p of paths){if(p===excludePath)continue;for(const seg of p.segs){if(ptSegDist(px,py,seg[0],seg[1],seg[2],seg[3])<=tol)return'path';}}return null;}
function markerReach(svg, markerId){const el=svg.querySelector('#'+markerId);if(!el)return 5.5;const inner=el.querySelector('path,polygon');if(!inner)return 5.5;const d=inner.getAttribute('d')||inner.getAttribute('points')||'';const nums=(d.match(/-?\\d+\\.?\\d*/g)||[]).map(Number);let maxX=0;for(let i=0;i<nums.length;i+=2){if(nums[i]>maxX)maxX=nums[i];}return maxX||5.5;}
function rectsOverlapPartially(a,b){const ox=Math.max(0,Math.min(a.x+a.w,b.x+b.w)-Math.max(a.x,b.x));const oy=Math.max(0,Math.min(a.y+a.h,b.y+b.h)-Math.max(a.y,b.y));if(ox<=0||oy<=0)return false;const aContainsB=a.x<=b.x+0.5&&a.y<=b.y+0.5&&a.x+a.w>=b.x+b.w-0.5&&a.y+a.h>=b.y+b.h-0.5;const bContainsA=b.x<=a.x+0.5&&b.y<=a.y+0.5&&b.x+b.w>=a.x+a.w-0.5&&b.y+b.h>=a.y+a.h-0.5;if(aContainsB||bContainsA)return false;return{ox,oy};}
function checkDiagram(){const svgs=Array.from(document.querySelectorAll('svg.topic-diagram, .uc-mini svg'));if(!svgs.length)return{error:'no svg'};const all=[];svgs.forEach((svg,idx)=>{const texts=Array.from(svg.querySelectorAll('text')).map(t=>({text:t.textContent.trim(),box:t.getBBox()}));const rects=Array.from(svg.querySelectorAll('rect')).filter(r=>!r.closest('defs')).map(r=>({box:{x:+r.getAttribute('x'),y:+r.getAttribute('y'),w:+r.getAttribute('width'),h:+r.getAttribute('height')},fill:r.getAttribute('fill')}));const pathEls=Array.from(svg.querySelectorAll('path')).filter(p=>!p.closest('defs'));const paths=pathEls.map(p=>{const d=p.getAttribute('d');let start=null,end=null;try{const len=p.getTotalLength();start=p.getPointAtLength(0);end=p.getPointAtLength(len);}catch(e){}return{el:p,hasMarker:p.hasAttribute('marker-end'),d,start,end,segs:pathSegments(d)};});const TOL=9;const issues=[];for(let i=0;i<texts.length;i++)for(let j=i+1;j<texts.length;j++){const a=texts[i].box,b=texts[j].box;const ox=Math.max(0,Math.min(a.x+a.width,b.x+b.width)-Math.max(a.x,b.x));const oy=Math.max(0,Math.min(a.y+a.height,b.y+b.height)-Math.max(a.y,b.y));if(ox>4&&oy>4)issues.push('TEXT-TEXT OVERLAP: "'+texts[i].text+'" vs "'+texts[j].text+'"');}rects.forEach(r=>{texts.forEach(t=>{const cx=t.box.x+t.box.width/2,cy=t.box.y+t.box.height/2;if(cx>=r.box.x&&cx<=r.box.x+r.box.w&&cy>=r.box.y&&cy<=r.box.y+r.box.h){if(t.box.x<r.box.x-3||t.box.x+t.box.width>r.box.x+r.box.w+3)issues.push('TEXT OVERFLOW: "'+t.text+'" w='+t.box.width.toFixed(0)+' boxw='+r.box.w);}});});for(let i=0;i<rects.length;i++)for(let j=i+1;j<rects.length;j++){const ov=rectsOverlapPartially(rects[i].box,rects[j].box);if(ov)issues.push('RECT-RECT OVERLAP: fill='+rects[i].fill+' box=('+rects[i].box.x+','+rects[i].box.y+','+rects[i].box.w+','+rects[i].box.h+') vs fill='+rects[j].fill+' box=('+rects[j].box.x+','+rects[j].box.y+','+rects[j].box.w+','+rects[j].box.h+') overlap='+ov.ox.toFixed(0)+'x'+ov.oy.toFixed(0));}paths.filter(p=>p.hasMarker&&p.end).forEach(p=>{if(!pointNearGeometry(p.end.x,p.end.y,rects,texts,paths,p,TOL))issues.push('ARROW END disconnected at ('+p.end.x.toFixed(0)+','+p.end.y.toFixed(0)+') d="'+p.d+'"');});paths.filter(p=>p.hasMarker&&p.start).forEach(p=>{if(!pointNearGeometry(p.start.x,p.start.y,rects,texts,paths,p,TOL))issues.push('ARROW START disconnected at ('+p.start.x.toFixed(0)+','+p.start.y.toFixed(0)+') d="'+p.d+'"');});paths.filter(p=>p.hasMarker).forEach(p=>{const me=p.el.getAttribute('marker-end');const m=me.match(/#([\\w-]+)/);if(!m)return;const sw=parseFloat(p.el.getAttribute('stroke-width'))||1.5;const reach=markerReach(svg,m[1])*sw;if(!p.segs.length)return;const last=p.segs[p.segs.length-1];const segLen=Math.hypot(last[2]-last[0],last[3]-last[1]);if(segLen<reach*1.2)issues.push('SHORT SEGMENT vs marker reach: segLen='+segLen.toFixed(1)+' reach='+reach.toFixed(1)+' d="'+p.d+'"');});all.push({svgIndex:idx,issueCount:issues.length,issues});});return all;}
return checkDiagram();
})();`;

async function main() {
  const pages = findHtmlPages(ROOT, []);
  console.log(`Found ${pages.length} diagram-bearing pages.`);

  const server = spawn("npx", ["serve", "-l", String(PORT), ROOT], { stdio: "ignore" });
  await new Promise((resolve, reject) => {
    const start = Date.now();
    const tryConnect = () => {
      require("http").get(`http://localhost:${PORT}/index.html`, (res) => { res.resume(); resolve(); })
        .on("error", () => {
          if (Date.now() - start > 15000) return reject(new Error("server did not start in time"));
          setTimeout(tryConnect, 300);
        });
    };
    tryConnect();
  });

  let chromium;
  try {
    chromium = require("/opt/node22/lib/node_modules/playwright").chromium;
  } catch (e) {
    chromium = require("playwright").chromium;
  }
  const browser = await chromium.launch({ executablePath: fs.existsSync("/opt/pw-browsers/chromium") ? "/opt/pw-browsers/chromium" : undefined });
  const page = await browser.newPage({ viewport: { width: 1280, height: 1000 } });

  let totalIssues = 0;
  const failures = [];
  for (const rel of pages) {
    const url = `http://localhost:${PORT}/${rel}`;
    try {
      await page.goto(url, { waitUntil: "networkidle", timeout: 20000 });
      const result = await page.evaluate(CHECK_SCRIPT);
      if (!Array.isArray(result)) { failures.push({ rel, issues: ["no svg.topic-diagram found despite grep match"] }); totalIssues++; continue; }
      const pageIssues = result.flatMap((r) => r.issues);
      if (pageIssues.length) { failures.push({ rel, issues: pageIssues }); totalIssues += pageIssues.length; }
    } catch (e) {
      failures.push({ rel, issues: ["LOAD ERROR: " + e.message] });
      totalIssues++;
    }
  }

  await browser.close();
  server.kill();

  if (failures.length) {
    console.log(`\n${failures.length} page(s) with findings:\n`);
    for (const f of failures) {
      console.log(f.rel + ":");
      f.issues.forEach((i) => console.log("  - " + i));
    }
  }
  console.log(`\n${pages.length} pages checked, ${failures.length} with findings, ${totalIssues} total issue(s).`);
  process.exit(totalIssues ? 1 : 0);
}

main().catch((e) => { console.error(e); process.exit(1); });
