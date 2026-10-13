#!/usr/bin/env node
/* RefreshYourself — one-time authoring tool. Adds data-tier-key="<track>/<tier>" to every tier
   index.html's <body> tag, using the exact same keys assets/nav-index.js already uses. Topic
   pages already carry this attribute (for the tier-nav sidebar); index pages didn't need it
   until the visited-tracking feature in assets/site.js needed a reliable track/tier identity on
   an index page too, without depending on location.pathname (unreliable under a dev server's
   "clean URL" rewriting — see the comment in assets/site.js). Safe to re-run: skipped if the
   attribute is already present. */

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
  let touched = 0, skipped = 0, missing = 0;
  Object.keys(nav).forEach((key) => {
    const file = path.join(ROOT, key, "index.html");
    if (!fs.existsSync(file)) { missing++; console.log("MISSING: " + key + "/index.html"); return; }
    let html = fs.readFileSync(file, "utf8");
    if (html.includes('data-tier-key="')) { skipped++; return; }
    const before = html;
    html = html.replace(/<body data-root="([^"]*)">/, `<body data-root="$1" data-tier-key="${key}">`);
    if (html === before) { console.log("NO MATCH: " + key + "/index.html"); return; }
    fs.writeFileSync(file, html);
    touched++;
  });
  console.log(`Done. ${touched} updated, ${skipped} already had it, ${missing} missing index.html.`);
}

main();
