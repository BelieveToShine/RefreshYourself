#!/usr/bin/env node
/* RefreshYourself — one-time authoring tool. Adds a sitewide <meta property="og:image"> (one
   branded share image, assets/images/og-share.png — see scripts/og-image-source.html) and a
   per-page <meta property="og:url"> to every HTML page's <head>, right after its existing
   og:description line. Every page already had og:title/og:description (written at authoring
   time); og:image/og:url were the two still missing, and og:image in particular needs an
   ABSOLUTE url per the OG spec, which a relative asset path can't reliably give every crawler.
   Idempotent — skips any file that already has an og:image tag. */

const fs = require("fs");
const path = require("path");
const ROOT = path.resolve(__dirname, "..");
const BASE_URL = "https://believetoshine.github.io/RefreshYourself/";
const SKIP_DIRS = new Set([".git", "node_modules", "assets", "docs", ".claude", ".github", "scripts"]);

function findHtmlPages(dir, out) {
  for (const f of fs.readdirSync(dir)) {
    if (SKIP_DIRS.has(f)) continue;
    const full = path.join(dir, f);
    const st = fs.statSync(full);
    if (st.isDirectory()) { findHtmlPages(full, out); continue; }
    if (f.endsWith(".html")) out.push(full);
  }
  return out;
}

function main() {
  const pages = findHtmlPages(ROOT, []);
  let touched = 0, skipped = 0, noMatch = 0;
  pages.forEach((file) => {
    let html = fs.readFileSync(file, "utf8");
    if (html.includes('property="og:image"')) { skipped++; return; }
    const rel = path.relative(ROOT, file).split(path.sep).join("/");
    const pageUrl = rel === "index.html" ? BASE_URL : BASE_URL + rel;
    const insert =
      `\n<meta property="og:image" content="${BASE_URL}assets/images/og-share.png">` +
      `\n<meta property="og:url" content="${pageUrl}">`;
    const before = html;
    html = html.replace(
      /(<meta property="og:description" content="[^"]*">)/,
      `$1${insert}`
    );
    if (html === before) { noMatch++; console.log("NO MATCH: " + rel); return; }
    fs.writeFileSync(file, html);
    touched++;
  });
  console.log(`Done. ${touched} updated, ${skipped} already had og:image, ${noMatch} no og:description match. ${pages.length} total HTML files scanned.`);
}

main();
