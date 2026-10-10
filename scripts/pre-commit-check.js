#!/usr/bin/env node
/* RefreshYourself — pre-commit docs-sync guard. See docs/rules/pre-commit-docs-sync.md.
   Runs scripts/check-site.js, then checks that the staged change also updated the md files the
   rule table says it must. Override (rarely, say why in the commit message): SKIP_DOCS_CHECK=1 */
const { execSync, spawnSync } = require("child_process");
const path = require("path");
const ROOT = path.resolve(__dirname, "..");
if (process.env.SKIP_DOCS_CHECK) { console.log("pre-commit-check: SKIP_DOCS_CHECK set, skipped."); process.exit(0); }

const out = execSync("git diff --cached --name-status -M", { cwd: ROOT, encoding: "utf8" }).trim();
if (!out) process.exit(0);
const changes = out.split("\n").map((l) => { const p = l.split("\t"); return { s: p[0][0], f: p[p.length - 1].split(String.fromCharCode(92)).join("/"), old: p[1] }; });
const staged = new Set(changes.map((c) => c.f));
const problems = [];
const need = (why, ...files) => {
  const missing = files.filter((f) => !staged.has(f));
  if (missing.length) problems.push(`${why}\n     stage/update: ${missing.join(", ")}`);
};
const needAny = (why, files) => { if (!files.some((f) => staged.has(f))) problems.push(`${why}\n     update at least one of: ${files.join(", ")}`); };

const pageRe = /^(csharp|oops|dotnet|webapi|efcore|sql|azure|aws|react|angular|python|ai|dsa|javascript|htmlcss)\/(basic|intermediate|advanced)\/(\d+)\.html$/;
const structural = changes.filter((c) => (c.s === "A" || c.s === "D" || c.s === "R") && (pageRe.test(c.f) || (c.old && pageRe.test(c.old))));
for (const track of new Set(structural.map((c) => (c.f.match(pageRe) || c.old.match(pageRe))[1]))) {
  need(`[${track}] a topic page was added/removed/renamed → track spec + whole-project counts must be updated`,
    `docs/superpowers/specs/${track}/overview.md`, `docs/superpowers/specs/${track}/roadmap.md`, "docs/refreshyourself-overview.md");
  need(`[${track}] topic page added/removed → site wiring`, "assets/search-index.js", `${track}/roadmap.html`);
}
if (structural.length) needAny("topic page count changed → CLAUDE.md / specs README status line may be stale", ["CLAUDE.md", "docs/superpowers/specs/README.md"]);
if (staged.has("assets/site.js")) needAny("assets/site.js changed → the matching behaviour rule must be updated", ["docs/rules/search.md", "docs/rules/back-navigation.md", "docs/rules/tier-navigation.md", "docs/rules/link-hover.md"]);
if (staged.has("assets/nav-index.js")) needAny("assets/nav-index.js changed → check tier-navigation rule is still accurate", ["docs/rules/tier-navigation.md", "docs/superpowers/specs/README.md"].concat(structural.length ? [] : []));
if (staged.has("assets/style.css")) needAny("assets/style.css changed → the matching visual rule must be updated (or note why no rule changes)", ["docs/rules/visual-style.md", "docs/rules/link-hover.md", "docs/rules/why-it-matters.md", "docs/rules/use-cases.md", "docs/rules/keypoints.md", "docs/rules/diagram-style.md", "docs/rules/interview-recall.md", "docs/rules/common-trap.md"]);
for (const c of changes.filter((c) => c.s === "A" && /^docs\/rules\/[^/]+\.md$/.test(c.f) && c.f !== "docs/rules/README.md"))
  need(`new rule file ${c.f} → must be indexed`, "docs/rules/README.md", "docs/README.md", "CLAUDE.md");
for (const c of changes.filter((c) => c.s === "A" && /^docs\/superpowers\/specs\/[^/]+\/overview\.md$/.test(c.f)))
  need(`new track spec ${c.f} → must be in the specs index`, "docs/superpowers/specs/README.md", "docs/refreshyourself-overview.md");

const r = spawnSync(process.execPath, [path.join(__dirname, "check-site.js")], { cwd: ROOT, encoding: "utf8" });
const siteErrors = (r.stdout || "").split("\n").filter((l) => l.startsWith("ERROR"));

if (siteErrors.length || problems.length) {
  console.error("\n✖ pre-commit-check: commit blocked.\n");
  siteErrors.forEach((e) => console.error("  " + e));
  problems.forEach((p) => console.error("  DOCS: " + p));
  console.error("\nFix the above (the md files are the memory future sessions rely on), or, if truly nothing in the docs");
  console.error("changes, re-run with SKIP_DOCS_CHECK=1 and say why in the commit message. See docs/rules/pre-commit-docs-sync.md.\n");
  process.exit(1);
}
console.log("✔ pre-commit-check: site wiring consistent, docs in sync with staged changes.");
