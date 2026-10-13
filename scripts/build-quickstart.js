#!/usr/bin/env node
/* RefreshYourself — one-time generator for quickstart.html ("Interview tomorrow? Start here").
   Reads every 🔥 Must Know item out of assets/nav-index.js (the same data the tier-nav sidebar
   uses) and renders one page, grouped by track, so someone with an interview tomorrow has a
   single curated "most-asked across everything" path instead of guessing which of 20 tracks to
   drill. This is an authoring-time tool (like scripts/check-site.js) — its OUTPUT is a plain
   static HTML file, never fetched or built at runtime; the site itself still has no build step.

   Usage: node scripts/build-quickstart.js   (overwrites quickstart.html at the repo root) */

const fs = require("fs");
const path = require("path");
const ROOT = path.resolve(__dirname, "..");

// Track meta (icon + accent color), matching index.html's own tile colors exactly.
const TRACK_META = {
  "csharp":    { label: "C#",                 icon: "🎵", color: "#3b82f6" },
  "linq":      { label: "LINQ",               icon: "🔗", color: "#4f46e5" },
  "oops":      { label: "OOP",                icon: "🧩", color: "#16a34a" },
  "dotnet":    { label: ".NET / ASP.NET Core",icon: "🧱", color: "#7c3aed" },
  "webapi":    { label: "Web API",            icon: "🔌", color: "#b91c1c" },
  "efcore":    { label: "EF Core",            icon: "🗄️", color: "#0f766e" },
  "sql":       { label: "SQL",                icon: "🗃️", color: "#334155" },
  "azure":     { label: "Azure",              icon: "☁️", color: "#0078D4" },
  "aws":       { label: "AWS",                icon: "📦", color: "#c2410c" },
  "htmlcss":   { label: "HTML & CSS",         icon: "🎨", color: "#e11d48" },
  "javascript":{ label: "JavaScript",         icon: "⚡", color: "#eab308" },
  "react":     { label: "React",              icon: "⚛️", color: "#0891b2" },
  "angular":   { label: "Angular",            icon: "🅰️", color: "#dd0031" },
  "vuejs":     { label: "Vue.js",             icon: "💚", color: "#42b883" },
  "nextjs":    { label: "Next.js",            icon: "⏭️", color: "#171717" },
  "python":    { label: "Python",             icon: "🐍", color: "#306998" },
  "java":      { label: "Java",               icon: "☕", color: "#78350f" },
  "dsa":       { label: "DSA",                icon: "🧠", color: "#f59e0b" },
  "ai":        { label: "AI",                 icon: "🤖", color: "#c026d3" },
  "patterns":  { label: "Design Patterns",    icon: "🏗️", color: "#44403c" },
};
// Fixed display order: the homepage's own "Core backend path -> Frontend -> Other" grouping.
const TRACK_ORDER = ["csharp","linq","oops","dotnet","webapi","efcore","sql","azure","aws",
  "htmlcss","javascript","react","angular","vuejs","nextjs","python","java","dsa","ai","patterns"];

function esc(s) {
  return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

function loadNavIndex() {
  const src = fs.readFileSync(path.join(ROOT, "assets/nav-index.js"), "utf8");
  const sandbox = { window: {} };
  const vm = require("vm");
  vm.createContext(sandbox);
  vm.runInContext(src, sandbox);
  return sandbox.window.NAV_INDEX;
}

function main() {
  const nav = loadNavIndex();
  const byTrack = {}; // track -> [{tier, file, title, tail}]

  Object.keys(nav).forEach((key) => {
    const [track, tier] = key.split("/");
    const data = nav[key];
    data.groups.forEach((g) => {
      g.items.forEach((item) => {
        if (item.priority !== "🔥") return;
        if (!byTrack[track]) byTrack[track] = [];
        byTrack[track].push({ tier, file: item.file, title: item.title, tail: item.tail });
      });
    });
  });

  let totalCount = 0;
  const sections = TRACK_ORDER.filter((t) => byTrack[t] && byTrack[t].length).map((track, idx) => {
    const meta = TRACK_META[track];
    const items = byTrack[track];
    totalCount += items.length;
    const rows = items.map((it, i) => (
      '        <li class="topic-row">\n' +
      '          <span class="num">' + (i + 1) + '</span>\n' +
      '          <a href="' + esc(track) + '/' + esc(it.tier) + '/' + esc(it.file) + '">' +
      '<strong>' + esc(it.title) + '</strong><span class="ttail"> — ' + esc(it.tail) + '</span></a>\n' +
      '          <span class="badge hot">🔥 Hot</span>\n' +
      '        </li>'
    )).join("\n");
    return (
      '  <details class="roadmap-tier toggle"' + (idx === 0 ? " open" : "") + ' style="--tier-color:' + meta.color + '">\n' +
      '    <summary style="--tier-color:' + meta.color + '">\n' +
      '      <span class="rttitle">' + meta.icon + ' ' + esc(meta.label) + '</span>\n' +
      '      <span class="rtcount">' + items.length + ' must-know</span>\n' +
      '      <span class="chev">▾</span>\n' +
      '    </summary>\n' +
      '    <div class="toggle-body">\n' +
      '      <ol class="topic-list">\n' + rows + '\n      </ol>\n' +
      '    </div>\n' +
      '  </details>'
    );
  }).join("\n\n");

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="Every 🔥 Must Know question across all 20 tracks, in one place — the fastest path through this site if your interview is tomorrow.">
<meta name="theme-color" content="#6d5be0">
<meta property="og:type" content="website">
<meta property="og:site_name" content="RefreshYourself">
<meta property="og:title" content="Quick Start — RefreshYourself">
<meta property="og:description" content="Every 🔥 Must Know question across all 20 tracks, in one place — the fastest path through this site if your interview is tomorrow.">
<link rel="icon" href="data:image/svg+xml,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2024%2024'%3E%3Crect%20width%3D'24'%20height%3D'24'%20rx%3D'6'%20fill%3D'%236d5be0'%2F%3E%3Cg%20fill%3D'none'%20stroke%3D'white'%20stroke-width%3D'2.2'%20stroke-linecap%3D'round'%20stroke-linejoin%3D'round'%3E%3Cpath%20d%3D'M5%2012a7%207%200%200%201%2011.5-5.3'%2F%3E%3Cpath%20d%3D'M16.5%203.5v3.2h-3.2'%2F%3E%3Cpath%20d%3D'M19%2012a7%207%200%200%201-11.5%205.3'%2F%3E%3Cpath%20d%3D'M7.5%2020.5v-3.2h3.2'%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E">
<title>Quick Start — RefreshYourself</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@600;700;800&amp;family=Poppins:wght@600;700;800&amp;family=Lexend:wght@400;500;600;700&amp;family=Fira+Code:wght@500&amp;display=swap">
<link rel="stylesheet" href="assets/style.css">
</head>
<body data-root="">
<a class="skip-link" href="#main">Skip to content</a>

<header class="topbar">
  <div class="bar wrap">
    <a class="brand" href="index.html">
      <img class="brand-mark" src="assets/images/brand-mark.svg" alt="" width="24" height="24">
      Refresh<span class="dot">Yourself</span>
    </a>
    <div class="gsearch">
      <span class="gicon" aria-hidden="true">🔎</span>
      <input type="text" placeholder="Search any topic… (C#, SQL, React…)" autocomplete="off" aria-label="Search topics">
      <span class="gkey" aria-hidden="true">/</span>
      <div class="gsearch-results" role="listbox"></div>
    </div>
  </div>
</header>

<div class="crumbbar">
  <nav class="crumbs wrap">
    <a class="crumb" href="index.html" style="--crumb-bg:#f1f5f9;--crumb-ink:#475569;">🏠 Home</a>
    <span class="sep">›</span>
    <span class="crumb current" style="--crumb-bg:#e9e7fd; color:#3730a3;">🕐 Quick Start</span>
  </nav>
</div>

<main class="wrap" id="main">
  <section class="hero">
    <div class="eyebrow" style="--eyebrow-bg:#e9e7fd; --eyebrow-ink:#3730a3;">🕐 Quick Start</div>
    <h1>Interview tomorrow? <span class="hl hl-blue">Start here.</span></h1>
    <p>${totalCount} 🔥 Must Know questions, pulled straight from every track's own tier
    listing — nothing new written, nothing duplicated, every row links to the real page in its
    own track. This is the fastest path through the whole site when there isn't time for all of
    it; if there's time for more, the Scenario Bank below covers the "diagnose it / design it"
    side the same way.</p>
  </section>

${sections}
</main>

<footer class="wrap">
  RefreshYourself · a personal brush-up site · content added track by track, tier by tier.
</footer>

<script src="assets/search-index.js"></script>
<script src="assets/site.js"></script>
</body>
</html>
`;

  fs.writeFileSync(path.join(ROOT, "quickstart.html"), html);
  console.log(`quickstart.html written: ${sections.split("roadmap-tier").length - 1} tracks, ${totalCount} must-know items.`);
}

main();
