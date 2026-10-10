#!/usr/bin/env node
/* RefreshYourself — idempotent head/meta/accessibility pass over every .html page.
   Adds (only where missing): font <link>s (replacing the render-blocking CSS @import), <meta
   description>, Open Graph basics, theme-color, an inline SVG favicon, a "Skip to content" link +
   id="main" on <main>, and the brand logo as an <img> (assets/images/brand-mark.svg), and aria-hidden on the decorative search glyphs. See docs/rules/site-architecture.md.
   Usage: node scripts/add-head-meta.js [--dry]   (safe to re-run; new pages get covered too) */
const fs = require("fs"), path = require("path");
const ROOT = path.resolve(__dirname, "..");
const DRY = process.argv.includes("--dry");

const FONT_HREF = "https://fonts.googleapis.com/css2?family=Baloo+2:wght@600;700;800&amp;family=Poppins:wght@600;700;800&amp;family=Lexend:wght@400;500;600;700&amp;family=Fira+Code:wght@500&amp;display=swap";
const FAVICON = "data:image/svg+xml," + encodeURIComponent(
  "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><rect width='24' height='24' rx='6' fill='#6d5be0'/>" +
  "<g fill='none' stroke='white' stroke-width='2.2' stroke-linecap='round' stroke-linejoin='round'>" +
  "<path d='M5 12a7 7 0 0 1 11.5-5.3'/><path d='M16.5 3.5v3.2h-3.2'/><path d='M19 12a7 7 0 0 1-11.5 5.3'/><path d='M7.5 20.5v-3.2h3.2'/></g></svg>");

function walk(d, out = []) {
  for (const f of fs.readdirSync(d)) {
    if (f === ".git" || f === "node_modules") continue;
    if (d === ROOT && (process.env.SKIP_DIRS || "").split(",").includes(f)) continue; // e.g. SKIP_DIRS=angular while another editor is working there
    const p = path.join(d, f);
    fs.statSync(p).isDirectory() ? walk(p, out) : /\.html$/.test(f) && out.push(p);
  }
  return out;
}
const stripTags = (s) => s.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
function clip(s, n) {
  if (s.length <= n) return s;
  let c = s.slice(0, n).replace(/\s+\S*$/, "").replace(/&[#\w]*$/, "").replace(/[\s,;:—-]+$/, "");
  return c + "…";
}
const attr = (s) => s.replace(/"/g, "&quot;");

function descriptionFor(html) {
  const q = html.match(/<p class="interview-q">([\s\S]*?)<\/p>/);
  if (q) return clip(stripTags(q[1]).replace(/^["“]|["”]$/g, ""), 155);
  const h = html.match(/<section class="hero">[\s\S]*?<p[^>]*>([\s\S]*?)<\/p>/);
  if (h && stripTags(h[1]).length > 20) return clip(stripTags(h[1]), 155);
  const t = html.match(/<title>([^<]+)<\/title>/);
  return t ? t[1].replace(/ — RefreshYourself$/, "") + " — interview brush-up on RefreshYourself." : "RefreshYourself interview brush-up.";
}

let changed = 0, scanned = 0;
for (const file of walk(ROOT)) {
  scanned++;
  let html = fs.readFileSync(file, "utf8"), orig = html;
  const eol = html.includes("\r\n") ? "\r\n" : "\n";
  const title = (html.match(/<title>([^<]+)<\/title>/) || [])[1] || "RefreshYourself";

  // 1) fonts as <link> before the stylesheet link (and drop the CSS @import, done once in style.css)
  if (!html.includes("fonts.googleapis.com")) {
    html = html.replace(/(<link rel="stylesheet" href="[./]*assets\/style\.css">)/,
      `<link rel="preconnect" href="https://fonts.googleapis.com">${eol}<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>${eol}<link rel="stylesheet" href="${FONT_HREF}">${eol}$1`);
  }
  // 2) description / OG / theme-color / favicon after the viewport meta
  if (!/<meta name="description"/.test(html)) {
    const d = attr(descriptionFor(html)), tt = attr(title);
    const block = [
      `<meta name="description" content="${d}">`,
      `<meta name="theme-color" content="#6d5be0">`,
      `<meta property="og:type" content="website">`,
      `<meta property="og:site_name" content="RefreshYourself">`,
      `<meta property="og:title" content="${tt}">`,
      `<meta property="og:description" content="${d}">`,
      `<link rel="icon" href="${FAVICON}">`,
    ].join(eol);
    html = html.replace(/(<meta name="viewport"[^>]*>)/, `$1${eol}${block}`);
  }
  // 3) skip link + main id
  if (!html.includes('class="skip-link"')) {
    html = html.replace(/(<body[^>]*>)/, `$1${eol}<a class="skip-link" href="#main">Skip to content</a>`);
    html = html.replace('<main class="wrap">', '<main class="wrap" id="main">');
  }
  // 3b) the brand logo: an external image instead of ~1.5 KB of inline SVG copied into every page
  if (html.includes('<svg class="brand-mark"')) {
    const root = (html.match(/<body[^>]*data-root="([^"]*)"/) || [, ""])[1];
    html = html.replace(new RegExp('<svg class="brand-mark"[^]*?</svg>'), `<img class="brand-mark" src="${root}assets/images/brand-mark.svg" alt="" width="24" height="24">`);
  }
  // 4) decorative search glyphs
  html = html.replace('<span class="gicon">', '<span class="gicon" aria-hidden="true">')
             .replace('<span class="gkey">', '<span class="gkey" aria-hidden="true">');

  if (html !== orig) { changed++; if (!DRY) fs.writeFileSync(file, html); }
}
console.log(`${DRY ? "[dry] " : ""}scanned ${scanned} html files, ${changed} ${DRY ? "would change" : "changed"}`);
