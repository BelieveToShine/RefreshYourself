#!/usr/bin/env node
/* RefreshYourself — adds new pages (and applies retitles) to assets/nav-index.js and
   assets/search-index.js from wiring manifests (JSON). Idempotent.
   Manifest = array of page objects, or { pages: [...], retitles: [...] }:
     page:    { track, tier, n, file, title, short, tail, priority, keywords }
     retitle: { track?, tier, n, title, short, tail }   (track inferred from the file name when absent)
   Usage: node scripts/wire-indexes.js <manifest.json> [more.json ...]   (default: every file in the folder passed via --dir) */
const fs = require("fs"), path = require("path");
const ROOT = path.resolve(__dirname, "..");
const TRACK = { csharp: "C#", oops: "OOP", dotnet: ".NET", webapi: "Web API", efcore: "EF Core", sql: "SQL", azure: "Azure", aws: "AWS", react: "React", angular: "Angular", python: "Python", ai: "AI", dsa: "DSA", javascript: "JavaScript", htmlcss: "HTML & CSS" };
const TIER = { basic: "Basic", intermediate: "Intermediate", advanced: "Advanced" };
const decode = (s) => String(s || "").split("&amp;").join("&").split("&quot;").join('"').split("&lt;").join("<").split("&gt;").join(">");
const q = (s) => JSON.stringify(decode(s));

let files = process.argv.slice(2).filter((a) => !a.startsWith("--dir"));
const di = process.argv.indexOf("--dir");
if (di > -1) { const d = process.argv[di + 1]; files = fs.readdirSync(d).filter((f) => f.endsWith(".json")).map((f) => path.join(d, f)); }
const pages = [], retitles = [];
for (const f of files) {
  let j = JSON.parse(fs.readFileSync(f, "utf8").replace(/^﻿/, ""));
  const base = path.basename(f, ".json");
  const track = (j.track) || base.split("-")[0];
  const P = Array.isArray(j) ? j : j.pages || [];
  P.forEach((p) => pages.push(Object.assign({ track: track }, p)));
  (j.retitles || []).forEach((r) => retitles.push(Object.assign({ track: track }, r)));
}
pages.sort((a, b) => (a.track + TIER_ORDER(a.tier)).localeCompare(b.track + TIER_ORDER(b.tier)) || a.n - b.n);
function TIER_ORDER(t) { return { basic: "1", intermediate: "2", advanced: "3" }[t]; }

// ---------- nav-index.js ----------
const navFile = path.join(ROOT, "assets/nav-index.js");
let nav = fs.readFileSync(navFile, "utf8");
const nl = nav.includes("\r\n") ? "\r\n" : "\n";
nav = nav.split("\r\n").join("\n");
function itemLine(p) {
  return `          { n: ${p.n}, file: ${q(p.file || p.n + ".html")}, short: ${q(p.short)}, title: ${q(p.title)}, tail: ${q(p.tail)}, priority: ${q(p.priority)} }`;
}
function blockRange(key) {
  const start = nav.indexOf(`  "${key}": {`);
  if (start < 0) return null;
  const end = nav.indexOf("\n  }", start);
  return [start, end + 4];
}
let navAdded = 0;
for (const p of pages) {
  const key = `${p.track}/${p.tier}`;
  const r = blockRange(key);
  if (!r) { console.log("nav: no block for " + key); continue; }
  let block = nav.slice(r[0], r[1]);
  if (block.includes(`file: ${q(p.file || p.n + ".html")},`)) continue; // already wired
  // find last group
  const lastGroupStart = block.lastIndexOf("\n      {\n        label:");
  const itemsEnd = block.lastIndexOf("\n        ]\n      }");
  const lastGroup = block.slice(lastGroupStart, itemsEnd);
  const count = lastGroup.split("{ n: ").length - 1;
  const newItem = itemLine(p);
  if (count < 10) {
    // extend the last group
    let g = lastGroup + ",\n" + newItem;
    const labelM = g.match(/label: "Questions (\d+)(?:[ ]*–[ ]*(\d+))?"/);
    const from = parseInt(labelM[1]);
    const spaced = labelM[0].includes(" – ");
    g = g.replace(labelM[0], `label: "Questions ${from}${spaced ? " – " : "–"}${p.n}"`);
    const hotN = g.split('priority: "🔥"').length - 1;
    if (g.includes("hot: ")) g = g.replace(/hot: \d+/, `hot: ${hotN}`);
    else if (hotN > 0) g = g.replace(/(label: "[^"]*",)/, `$1\n        hot: ${hotN},`);
    block = block.slice(0, lastGroupStart) + g + block.slice(itemsEnd);
  } else {
    const hotN = p.priority === "🔥" ? 1 : 0;
    const grp = `,\n      {\n        label: "Questions ${p.n}",\n${hotN ? `        hot: ${hotN},\n` : ""}        items: [\n${newItem}\n        ]\n      }`;
    const closeIdx = block.lastIndexOf("\n    ]\n  }");
    block = block.slice(0, closeIdx) + grp + block.slice(closeIdx);
  }
  nav = nav.slice(0, r[0]) + block + nav.slice(r[1]);
  navAdded++;
}
// retitles
let navRetitled = 0;
for (const t of retitles) {
  const key = `${t.track}/${t.tier}`;
  const r = blockRange(key); if (!r) continue;
  let block = nav.slice(r[0], r[1]);
  const marker = `{ n: ${t.n}, file: `;
  const i = block.indexOf(marker); if (i < 0) continue;
  const e = block.indexOf("}", i) + 1;
  const line = block.slice(i, e);
  const pri = line.match(/priority: "([^"]*)"/)[1];
  const fresh = `{ n: ${t.n}, file: ${q(t.n + ".html")}, short: ${q(t.short)}, title: ${q(t.title)}, tail: ${q(t.tail)}, priority: ${q(pri)} }`;
  if (line === fresh) continue;
  block = block.slice(0, i) + fresh + block.slice(e);
  nav = nav.slice(0, r[0]) + block + nav.slice(r[1]);
  navRetitled++;
}
fs.writeFileSync(navFile, nav.split("\n").join(nl));

// ---------- search-index.js ----------
const sFile = path.join(ROOT, "assets/search-index.js");
let s = fs.readFileSync(sFile, "utf8");
const snl = s.includes("\r\n") ? "\r\n" : "\n";
let lines = s.split("\r\n").join("\n").split("\n");
let sAdded = 0;
for (const p of pages) {
  const pth = `${p.track}/${p.tier}/${p.n}.html`;
  if (lines.some((l) => l.includes(`path: "${pth}"`))) continue;
  const prefix = `path: "${p.track}/${p.tier}/`;
  let at = -1;
  lines.forEach((l, i) => { if (l.includes(prefix)) at = i; });
  if (at < 0) at = lines.map((l, i) => (l.includes(`path: "${p.track}/`) ? i : -1)).filter((i) => i > -1).pop();
  const kw = (p.keywords || "").toLowerCase() + " " + p.track;
  const entry = `  { title: ${q(p.title)}, track: ${q(TRACK[p.track])}, tier: ${q(TIER[p.tier])}, path: ${q(pth)}, keywords: ${q(kw)} }`;
  if (!lines[at].trim().endsWith(",")) lines[at] = lines[at] + ",";
  lines.splice(at + 1, 0, entry + ",");
  sAdded++;
}
// the last entry in the array must not end with a comma issue — normalise: ensure every entry line ends with a comma except the final one
for (const t of retitles) {
  const pth = `${t.track}/${t.tier}/${t.n}.html`;
  const i = lines.findIndex((l) => l.includes(`path: "${pth}"`));
  if (i < 0) continue;
  lines[i] = lines[i].replace(/title: "(?:[^"\\]|\\.)*"/, `title: ${q(t.title)}`);
}
fs.writeFileSync(sFile, lines.join("\n").split("\n").join(snl));
console.log(`wire-indexes: nav +${navAdded} items (${navRetitled} retitled), search +${sAdded} entries`);
