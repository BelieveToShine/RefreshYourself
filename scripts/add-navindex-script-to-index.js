#!/usr/bin/env node
/* RefreshYourself — one-time authoring tool. Adds the assets/nav-index.js <script> tag to every
   tier index.html, in the standard order (search-index.js, nav-index.js, site.js). Tier index
   pages already carry data-tier-key (added by scripts/add-tier-key-to-index.js) but never loaded
   nav-index.js itself, so window.NAV_INDEX was undefined there — needed by the "My List" feature
   in assets/site.js to add a toggle icon to each .topic-row. Idempotent — skips files that
   already have the tag. */

const fs = require("fs");
const path = require("path");
const vm = require("vm");
const ROOT = path.resolve(__dirname, "..");

function loadNavIndex() {
  const src = fs.readFileSync(path.join(ROOT, "assets/nav-index.js"), "utf8");
  const sandbox = { window: {} };
  vm.createContext(sandbox);
  vm.runInContext(src, sandbox);
  return sandbox.window.NAV_INDEX;
}

function main() {
  const nav = loadNavIndex();
  let touched = 0, skipped = 0, missing = 0, noMatch = 0;
  Object.keys(nav).forEach((key) => {
    const file = path.join(ROOT, key, "index.html");
    if (!fs.existsSync(file)) { missing++; console.log("MISSING: " + key + "/index.html"); return; }
    let html = fs.readFileSync(file, "utf8");
    if (/assets\/nav-index\.js/.test(html)) { skipped++; return; }
    const before = html;
    html = html.replace(
      /(<script src="([^"]*assets\/search-index\.js)"><\/script>\s*\n)(<script src="[^"]*assets\/site\.js"><\/script>)/,
      (m, searchTag, searchSrc, siteTag) => {
        const navSrc = searchSrc.replace("search-index.js", "nav-index.js");
        return searchTag + `<script src="${navSrc}"></script>\n` + siteTag;
      }
    );
    if (html === before) { noMatch++; console.log("NO MATCH: " + key + "/index.html"); return; }
    fs.writeFileSync(file, html);
    touched++;
  });
  console.log(`Done. ${touched} updated, ${skipped} already had it, ${noMatch} no match, ${missing} missing index.html.`);
}

main();
