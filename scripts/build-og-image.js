#!/usr/bin/env node
/* RefreshYourself — one-time authoring tool. Renders the sitewide OG share image
   (assets/images/og-share.png, 1200x630, inserted into every page's <head> by
   scripts/add-og-tags.js) from an inline HTML template via Playwright, the same
   render-then-screenshot approach already used by scripts/verify-diagrams.js. The template
   lives here as a JS string rather than a separate tracked .html file so check-site.js's
   site-wide page-boilerplate walk never mistakes it for a real site page. */

const fs = require("fs");
const path = require("path");
const ROOT = path.resolve(__dirname, "..");

const HTML = `<!DOCTYPE html>
<html><head><meta charset="UTF-8">
<style>
  @import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@700;800&family=Fira+Code:wght@500&display=swap');
  *{ margin:0; padding:0; box-sizing:border-box; }
  body{ width:1200px; height:630px; overflow:hidden; position:relative;
    background:linear-gradient(135deg, #eef2ff 0%, #f6f8fb 55%, #fdf2f8 100%); font-family:'Baloo 2', sans-serif; }
  .card{ position:absolute; inset:0; display:flex; flex-direction:column; justify-content:center; padding:0 90px; }
  .brand{ display:flex; align-items:center; gap:16px; margin-bottom:34px; }
  .brand .mark{ width:56px; height:56px; border-radius:14px; background:#6d5be0; display:flex; align-items:center; justify-content:center; }
  .brand .mark svg{ width:34px; height:34px; }
  .brand .word{ font-size:34px; font-weight:800; color:#111827; }
  .brand .word .dot{ color:#6d5be0; }
  h1{ font-size:56px; font-weight:800; color:#111827; line-height:1.18; max-width:920px; }
  h1 .hl{ color:#3730a3; }
  p.tag{ margin-top:22px; font-size:24px; color:#5b6472; font-weight:400; max-width:820px; font-family:'Fira Code', monospace; }
  .stats{ margin-top:36px; display:flex; gap:28px; }
  .stat{ font-family:'Fira Code', monospace; font-size:18px; color:#3730a3; font-weight:500; background:#e9e7fd; border-radius:20px; padding:10px 22px; }
  .stat b{ font-weight:700; }
  .deco{ position:absolute; right:70px; top:50%; transform:translateY(-50%); opacity:.9; }
</style></head>
<body>
  <div class="card">
    <div class="brand">
      <div class="mark"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M5 12a7 7 0 0 1 11.5-5.3"/><path d="M16.5 3.5v3.2h-3.2"/><path d="M19 12a7 7 0 0 1-11.5 5.3"/><path d="M7.5 20.5v-3.2h3.2"/>
      </svg></div>
      <div class="word">Refresh<span class="dot">Yourself</span></div>
    </div>
    <h1>Pick a track. See the picture.<br><span class="hl">Remember it.</span></h1>
    <p class="tag">One diagram, one simple explanation, and the exact line to say out loud.</p>
    <div class="stats">
      <div class="stat"><b>952</b> pages</div>
      <div class="stat"><b>20</b> tracks</div>
      <div class="stat">every page has <b>a diagram</b></div>
    </div>
  </div>
  <svg class="deco" width="260" height="260" viewBox="0 0 260 260">
    <rect x="20" y="30" width="110" height="50" rx="12" fill="#dbeafe" stroke="#3b82f6" stroke-width="2"/>
    <rect x="150" y="110" width="110" height="50" rx="12" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/>
    <rect x="20" y="190" width="110" height="50" rx="12" fill="#fef3c7" stroke="#d97706" stroke-width="2"/>
    <path d="M130,55 H150 V135 H150" fill="none" stroke="#94a3b8" stroke-width="2.4"/>
    <path d="M75,80 V190" fill="none" stroke="#94a3b8" stroke-width="2.4"/>
  </svg>
</body></html>`;

async function main() {
  let chromium;
  try {
    chromium = require("/opt/node22/lib/node_modules/playwright").chromium;
  } catch (e) {
    chromium = require("playwright").chromium;
  }
  const browser = await chromium.launch({ executablePath: fs.existsSync("/opt/pw-browsers/chromium") ? "/opt/pw-browsers/chromium" : undefined });
  const page = await browser.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 });
  await page.setContent(HTML, { waitUntil: "networkidle" });
  try { await page.evaluate(() => document.fonts.ready); } catch (e) {}
  await page.waitForTimeout(500);
  const outPath = path.join(ROOT, "assets/images/og-share.png");
  await page.screenshot({ path: outPath });
  await browser.close();
  console.log("Written: " + outPath);
}

main().catch((e) => { console.error(e); process.exit(1); });
