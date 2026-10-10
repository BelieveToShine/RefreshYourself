#!/usr/bin/env node
/* RefreshYourself — site/docs consistency checker. See docs/rules/pre-commit-docs-sync.md.
   Usage: node scripts/check-site.js        (exit 1 if any error)
   Checks, per track: written pages exist, are in search-index.js + nav-index.js, linked from the
   tier index + roadmap.html, have correct data-root / data-tier-key, a diagram, the required
   sections, and that every local href/src resolves. Also compares page counts to the docs. */
const fs = require("fs"), path = require("path"), vm = require("vm");
const ROOT = path.resolve(__dirname, "..");
const TRACKS = ["csharp","linq","oops","dotnet","webapi","efcore","sql","azure","aws","react","angular","python","ai","dsa","javascript","htmlcss","java"];
const TIERS = ["basic","intermediate","advanced"];
const errors = [], warns = [];
const err = (m) => errors.push(m), warn = (m) => warns.push(m);
const read = (p) => fs.readFileSync(path.join(ROOT, p), "utf8");
const exists = (p) => fs.existsSync(path.join(ROOT, p));

function load(file, key) {
  const ctx = { window: {} }; vm.createContext(ctx);
  vm.runInContext(read(file), ctx); return ctx.window[key];
}
const SEARCH = load("assets/search-index.js", "SEARCH_INDEX");
const NAV = load("assets/nav-index.js", "NAV_INDEX");
const searchPaths = new Set(SEARCH.map((e) => e.path));
const rootIndex = read("index.html");
const counts = {}, useCases = {};

for (const t of TRACKS) {
  counts[t] = 0;
  if (!exists(`${t}/index.html`)) err(`${t}: missing index.html`);
  if (!exists(`${t}/roadmap.html`)) err(`${t}: missing roadmap.html`);
  if (!rootIndex.includes(`${t}/index.html`)) err(`root index.html has no tile for ${t}`);
  const roadmap = exists(`${t}/roadmap.html`) ? read(`${t}/roadmap.html`) : "";
  for (const tier of TIERS) {
    const dir = path.join(ROOT, t, tier);
    if (!fs.existsSync(dir)) { err(`${t}/${tier}: folder missing`); continue; }
    const pages = fs.readdirSync(dir).filter((f) => /^\d+\.html$/.test(f)).sort((a, b) => parseInt(a) - parseInt(b));
    counts[t] += pages.length;
    const tierIdx = exists(`${t}/${tier}/index.html`) ? read(`${t}/${tier}/index.html`) : "";
    if (!tierIdx) err(`${t}/${tier}: missing index.html`);
    const nums = pages.map((f) => parseInt(f));
    nums.forEach((n, i) => { if (n !== i + 1) warn(`${t}/${tier}: numbering gap/jump near ${n}`); });
    const navKey = `${t}/${tier}`, nav = NAV[navKey];
    if (!nav) warn(`${navKey}: no nav-index.js entry (no sidebar)`);
    const navFiles = new Set(nav ? nav.groups.flatMap((g) => g.items.map((i) => i.file)) : []);
    for (const f of pages) {
      const rel = `${t}/${tier}/${f}`, html = read(rel);
      if (!searchPaths.has(rel)) err(`${rel}: missing from search-index.js`);
      if (nav && !navFiles.has(f)) err(`${rel}: missing from nav-index.js`);
      if (!tierIdx.includes(`href="${f}"`)) err(`${rel}: not linked from ${t}/${tier}/index.html`);
      if (!roadmap.includes(`${tier}/${f}`)) err(`${rel}: not linked from ${t}/roadmap.html`);
      if (!html.includes('data-root="../../"')) err(`${rel}: bad/missing data-root`);
      if (nav && !html.includes(`data-tier-key="${navKey}"`)) err(`${rel}: bad/missing data-tier-key`);
      if (!/<svg[^>]*class="topic-diagram"/.test(html)) err(`${rel}: no topic-diagram SVG`);
      if (!/<title>[^<]+<\/title>/.test(html)) err(`${rel}: no <title>`);
      { // an optional "🧭 Use Cases" panel, when present, must be complete (docs/rules/use-cases.md)
        const uc = (html.match(/<details class="usecase[^]*?<\/details>/) || [""])[0];
        if (uc) {
          const sc = (uc.match(/class="uc-scenario( uc-trap)?"/g) || []).length;
          if (sc < 2) err(`${rel}: Use Cases panel needs at least 2 scenarios (has ${sc})`);
          if ((uc.match(/class="uc-mini"/g) || []).length !== sc) err(`${rel}: every Use Cases scenario needs a .uc-mini diagram`);
          if ((uc.match(/--uc-color:/g) || []).length < sc) err(`${rel}: every Use Cases scenario needs its own --uc-color`);
          if ((uc.match(/class="uc-rtag"/g) || []).length !== sc || (uc.match(/class="uc-rtext"/g) || []).length !== sc) err(`${rel}: every Use Cases scenario needs a .uc-remember with separate .uc-rtag and .uc-rtext spans`);
          useCases[t] = (useCases[t] || 0) + 1;
        }
      }
      { // "Why it matters" must be the Problem -> Solution -> Recall card format (docs/rules/why-it-matters.md)
        const why = (html.match(/<details class="topic-hook[^]*?<\/details>/) || [""])[0];
        if (!why) err(`${rel}: no "Why it matters" box`);
        else if (!why.includes("wc-row problem") || !why.includes("wc-row solution") || !why.includes("wcr-tag"))
          err(`${rel}: "Why it matters" must be Problem, Solution and Recall cards (docs/rules/why-it-matters.md)`);
      }
      for (const [name, re] of [["interview-q", /class="interview-q"/], ["recall", /class="recall"/], ["keypoints", /class="keypoints"/], ["explanation", /class="explain/], ["code", /class="codebox/]])
        if (!re.test(html)) warn(`${rel}: missing section ${name}`);
      const linkScan = html.split("<pre").map((s, i) => (i ? s.slice(s.indexOf("</pre>") + 6) : s)).join(" ").split("<text").map((s, i) => (i ? s.slice(s.indexOf("</text>") + 7) : s)).join(" "); // ignore sample markup in code blocks / diagram text
      for (const m of linkScan.matchAll(/(?:href|src)="([^"#:]+?)(?:#[^"]*)?"/g)) {
        if (m[1].startsWith("/")) continue; // escaped sample markup inside diagram text, not a real link
        const target = path.normalize(path.join(path.dirname(rel), m[1]));
        if (m[1] && !fs.existsSync(path.join(ROOT, target))) err(`${rel}: broken local link ${m[1]}`);
      }
    }
    for (const m of tierIdx.matchAll(/href="(\d+\.html)"/g))
      if (!pages.includes(m[1])) err(`${t}/${tier}/index.html links to missing ${m[1]}`);
    if (nav) for (const f of navFiles) if (!pages.includes(f)) err(`nav-index ${navKey}: lists missing page ${f}`);
  }
}
for (const e of SEARCH) if (!exists(e.path)) err(`search-index.js: dead path ${e.path}`);

// every html page must carry the head/a11y boilerplate (run: node scripts/add-head-meta.js)
(function walk(d){for(const f of fs.readdirSync(path.join(ROOT,d))){if(f===".git"||f==="node_modules")continue;const rel=d?d+"/"+f:f;const st=fs.statSync(path.join(ROOT,rel));if(st.isDirectory()){walk(rel);continue;}if(!f.endsWith(".html"))continue;const h=read(rel);const miss=[];if(!h.includes("name=\"description\""))miss.push("meta description");if(!h.includes("rel=\"icon\""))miss.push("favicon");if(!h.includes("fonts.googleapis.com"))miss.push("font links");if(!h.includes("class=\"skip-link\""))miss.push("skip link");if(h.includes("<svg class=\"brand-mark\""))miss.push("brand logo as <img>");if(miss.length)err(rel+": missing "+miss.join(", ")+" — run node scripts/add-head-meta.js");}})("");

// docs: page counts mentioned in overview vs reality
const overview = read("docs/refreshyourself-overview.md");
const labels = { csharp: "C#", linq: "LINQ", oops: "OOP", dotnet: ".NET / ASP.NET Core", webapi: "Web API", efcore: "EF Core", sql: "SQL", azure: "Azure", aws: "AWS", react: "React", angular: "Angular", python: "Python", ai: "AI", dsa: "DSA", javascript: "JavaScript", htmlcss: "HTML & CSS", java: "Java" };
for (const t of TRACKS) {
  const at = overview.indexOf("**" + labels[t] + "** — **all 7 phases complete, ");
  const m = at < 0 ? null : overview.slice(at).match(/complete, (\d+)\/(\d+) pages/);
  if (!m) warn(`overview.md: no "all 7 phases complete, N/N pages" line for ${t}`);
  else if (parseInt(m[1]) !== counts[t]) err(`overview.md says ${t} has ${m[1]} pages; disk has ${counts[t]}`);
}
const claude = read("CLAUDE.md");
if (/AI\/DSA are untouched|Azure has a Phase 1/.test(claude)) err("CLAUDE.md status line is stale (still says Azure Phase 1 / AI,DSA untouched)");

// every rule file must be indexed in docs/rules/README.md and docs/README.md
const rulesReadme = read("docs/rules/README.md"), docsReadme = read("docs/README.md");
for (const f of fs.readdirSync(path.join(ROOT, "docs/rules")).filter((f) => f.endsWith(".md") && f !== "README.md")) {
  if (!rulesReadme.includes(f)) err(`docs/rules/README.md does not list ${f}`);
  if (!docsReadme.includes(f)) warn(`docs/README.md does not list rules/${f}`);
  if (!claude.includes(f)) warn(`CLAUDE.md does not list rules/${f}`);
}
for (const t of TRACKS) for (const f of ["overview.md", "roadmap.md", "question-taxonomy.md"])
  if (!exists(`docs/superpowers/specs/${t}/${f}`)) err(`missing docs/superpowers/specs/${t}/${f}`);

// pagers must link the neighbouring pages (node scripts/fix-pagers.js --fix repairs them)
{ const pr = require("child_process").spawnSync(process.execPath, [path.join(__dirname, "fix-pagers.js")], { encoding: "utf8" }); if (pr.status !== 0) pr.stdout.split(String.fromCharCode(10)).filter((l) => l.includes(": prev") || l.includes(": next") || l.includes("unexpected")).forEach((l) => err("pager: " + l + " — run node scripts/fix-pagers.js --fix")); }

for (const t of TRACKS) if (counts[t] && (useCases[t] || 0) / counts[t] < 0.5) warn(`${t}: only ${useCases[t] || 0}/${counts[t]} pages have a Use Cases panel (other tracks have 58–93%)`);
console.log("Pages on disk:", JSON.stringify(counts), "total", Object.values(counts).reduce((a, b) => a + b, 0));
warns.forEach((w) => console.log("WARN ", w));
errors.forEach((e) => console.log("ERROR", e));
console.log(`\n${errors.length} error(s), ${warns.length} warning(s)`);
process.exit(errors.length ? 1 : 0);
