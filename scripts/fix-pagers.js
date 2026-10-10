#!/usr/bin/env node
/* RefreshYourself — pager consistency check/fixer. See docs/rules/site-architecture.md.
   Every topic page's bottom pager must link Prev/Next to the neighbouring page in the track's
   order (Basic -> Intermediate -> Advanced). Link text for a changed link comes from
   assets/nav-index.js (`title`); links already pointing at the right page are left alone.
   Usage: node scripts/fix-pagers.js          (report mismatches, exit 1 if any)
          node scripts/fix-pagers.js --fix    (rewrite the mismatched links) */
const fs = require("fs"), path = require("path"), vm = require("vm");
const ROOT = path.resolve(__dirname, "..");
const FIX = process.argv.includes("--fix");
const TRACKS = ["csharp","oops","dotnet","webapi","efcore","sql","azure","aws","react","angular","python","ai","dsa","javascript","htmlcss"];
const TIERS = ["basic", "intermediate", "advanced"];
const LABEL = { basic: "Basic", intermediate: "Intermediate", advanced: "Advanced" };
const ctx = { window: {} }; vm.createContext(ctx);
vm.runInContext(fs.readFileSync(path.join(ROOT, "assets/nav-index.js"), "utf8"), ctx);
const NAV = ctx.window.NAV_INDEX;
const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

function titleOf(track, tier, n) {
  const d = NAV[track + "/" + tier];
  if (!d) return null;
  for (const g of d.groups) for (const i of g.items) if (i.n === n) return i.title;
  return null;
}
let problems = 0, fixed = 0;
for (const t of TRACKS) {
  const order = [];
  for (const tier of TIERS) {
    const dir = path.join(ROOT, t, tier);
    if (!fs.existsSync(dir)) continue;
    fs.readdirSync(dir).filter((f) => /^\d+\.html$/.test(f)).map((f) => parseInt(f)).sort((a, b) => a - b)
      .forEach((n) => order.push({ tier, n }));
  }
  order.forEach((cur, idx) => {
    const prev = order[idx - 1], next = order[idx + 1];
    const rel = (to) => (to.tier === cur.tier ? `${to.n}.html` : `../${to.tier}/${to.n}.html`);
    const exp = {
      prev: prev ? { href: rel(prev), text: "← " + esc(titleOf(t, prev.tier, prev.n) || "") } : null,
      next: next
        ? next.tier === cur.tier
          ? { href: rel(next), text: esc(titleOf(t, next.tier, next.n) || "") + " →" }
          : { href: `../${next.tier}/1.html`, text: `Continue to ${LABEL[next.tier]} →` }
        : null,
    };
    const file = path.join(ROOT, t, cur.tier, cur.n + ".html");
    let html = fs.readFileSync(file, "utf8"), changed = false;
    for (const side of ["prev", "next"]) {
      const re = new RegExp('(<div class="side ' + side + '">)([\\s\\S]*?)(</div>)');
      const m = html.match(re);
      if (!m) continue; // some tracks use different pager markup — not enforced
      const a = m[2].match(/<a href="([^"]*)">([\s\S]*?)<\/a>/);
      const eol = html.includes("\r\n") ? "\r\n" : "\n";
      if (!exp[side]) { if (a) { problems++; console.log(`${t}/${cur.tier}/${cur.n}: unexpected ${side} link -> ${a[1]}`); } continue; }
      const cross = (side === "prev" ? prev : next) && (side === "prev" ? prev : next).tier !== cur.tier;
      if (cross && !(a && /[0-9]+[.]html$/.test(a[1]))) continue; // cross-tier links only enforced where a numbered link already exists
      if (a && a[1] === exp[side].href) continue;
      problems++;
      console.log(`${t}/${cur.tier}/${cur.n}: ${side} -> ${a ? a[1] : "(none)"}  expected ${exp[side].href}`);
      if (FIX) {
        const block = `${eol}      <span class="label">${side === "prev" ? "Prev" : "Next"}</span>${eol}      <a href="${exp[side].href}">${exp[side].text}</a>${eol}    `;
        html = html.replace(re, (_, o, _i, c) => o + block + c); changed = true; fixed++;
      }
    }
    if (changed) fs.writeFileSync(file, html);
  });
}
console.log(FIX ? `fixed ${fixed} of ${problems} pager link(s)` : `${problems} pager problem(s)`);
process.exit(problems && !FIX ? 1 : 0);
