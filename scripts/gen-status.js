#!/usr/bin/env node
/* RefreshYourself — regenerates docs/status.md, the single source of truth for "how many pages
   does each track have". Counts come from the page files on disk, never typed by hand.
   Usage: node scripts/gen-status.js           (rewrite docs/status.md)
          node scripts/gen-status.js --check   (exit 1 if docs/status.md is stale; used by check-site.js) */
const fs = require("fs"), path = require("path");
const ROOT = path.resolve(__dirname, "..");
const OUT = path.join(ROOT, "docs/status.md");

const TIERS = ["basic", "intermediate", "advanced"];
const TRACK_TIERS = { patterns: ["creational", "structural", "behavioral"] };
// Same order as the homepage / overview: ordered core-backend path, then frontend, then other tracks.
const GROUPS = [
  ["Core backend path", [["csharp", "C#"], ["linq", "LINQ"], ["oops", "OOP"], ["patterns", "Design Patterns"], ["dotnet", ".NET / ASP.NET Core"], ["webapi", "Web API"], ["efcore", "EF Core"], ["sql", "SQL"], ["azure", "Azure"], ["aws", "AWS"]]],
  ["Frontend", [["htmlcss", "HTML & CSS"], ["javascript", "JavaScript"], ["react", "React"], ["angular", "Angular"], ["vuejs", "Vue.js"], ["nextjs", "Next.js"]]],
  ["Other tracks", [["python", "Python"], ["java", "Java"], ["dsa", "DSA"], ["ai", "AI"]]],
];

const countDir = (d) => fs.existsSync(d) ? fs.readdirSync(d).filter((f) => /^\d+\.html$/.test(f)).length : 0;
let total = 0, rows = [];
for (const [group, tracks] of GROUPS) {
  rows.push(`\n### ${group}\n\n| Track | Pages | Per tier | Spec | Roadmap page |\n|---|---:|---|---|---|`);
  for (const [t, label] of tracks) {
    const tiers = TRACK_TIERS[t] || TIERS;
    const per = tiers.map((x) => countDir(path.join(ROOT, t, x)));
    const n = per.reduce((a, b) => a + b, 0); total += n;
    const names = tiers.map((x) => x[0].toUpperCase()).join("/");
    rows.push(`| ${label} | ${n} | ${names} = ${per.join(" / ")} | [spec](superpowers/specs/${t}/overview.md) | [\`${t}/roadmap.html\`](../${t}/roadmap.html) |`);
  }
}
const nTracks = GROUPS.reduce((a, g) => a + g[1].length, 0);
const doc = `# Build status — single source of truth

> **Generated file — do not edit by hand.** Run \`node scripts/gen-status.js\` to refresh it;
> \`node scripts/check-site.js\` fails if it is stale. Page counts are read from the files on disk.
> Every other doc should link here instead of repeating these numbers.

**${nTracks} tracks · ${total} topic pages.** Every track has been through all 7 phases of the
pipeline (see [\`superpowers/specs/README.md\`](superpowers/specs/README.md)). Tier letters: B/I/A =
Basic / Intermediate / Advanced (question *type*, not difficulty); Design Patterns is tiered
Creational / Structural / Behavioral instead.
${rows.join("\n")}

Per-track history — why each track exists, what was added when, decisions made:
[\`track-history.md\`](track-history.md).
`;

if (process.argv.includes("--check")) {
  const cur = fs.existsSync(OUT) ? fs.readFileSync(OUT, "utf8") : "";
  if (cur !== doc) { console.error("docs/status.md is stale — run: node scripts/gen-status.js"); process.exit(1); }
  process.exit(0);
}
fs.writeFileSync(OUT, doc);
console.log(`wrote docs/status.md (${nTracks} tracks, ${total} pages)`);
