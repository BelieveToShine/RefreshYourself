# Topic page template (copy-paste skeleton)

A skeleton of a **current-format** topic page, taken from `csharp/intermediate/1.html` and with the
content replaced by `{{PLACEHOLDERS}}`. It shows *structure and class names only* — the rules for
what goes inside each box live in the files linked in the comments, and a page isn't done until it
passes `node scripts/check-site.js` and `node scripts/verify-diagrams.js --only <path>`.

Practical tip: the quickest start is to copy a finished page of the **same tier** (same sidebar
key, same breadcrumb colours) and replace its content; use this file to check you kept every
section and the order. Order is fixed: **Hero → Why it matters (toggle) → Recall → Diagram →
Trap → Follow-up → Say-this → Explanation (toggle) → Code (toggle) → Use Cases (toggle, optional) →
Real-world (toggle) → Pager.**

Placeholders: `{{track}}` folder (e.g. `csharp`), `{{Track}}` display name, `{{tier}}` folder
(`basic`/`intermediate`/`advanced`; Design Patterns uses `creational`/`structural`/`behavioral`),
`{{n}}` page number, `{{PRIORITY}}` 🔥 Must Know / ⭐ Should Know / 🧠 Deep Dive.

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>{{Topic}} — {{Track}} {{Tier}} — RefreshYourself</title>
<link rel="stylesheet" href="../../assets/style.css">
<!-- Everything else in <head> (meta description, theme-color, Open Graph, favicon, font <link>s)
     is added by `node scripts/add-head-meta.js` (+ `add-og-tags.js` for og:image/og:url) — run it
     after writing the page; check-site.js errors if it is missing. -->
</head>
<!-- data-root = path back to the repo root; data-tier-key = "<track>/<tier>" (keys in assets/nav-index.js) -->
<body data-root="../../" data-tier-key="{{track}}/{{tier}}">
<a class="skip-link" href="#main">Skip to content</a>

<header class="topbar"> … identical on every page: brand link + <div class="gsearch"> search box … </header>

<div class="crumbbar">
  <nav class="crumbs wrap">
    <a class="crumb" href="../../index.html" style="--crumb-bg:#f1f5f9;--crumb-ink:#475569;">🏠 Home</a>
    <span class="sep">›</span>
    <a class="crumb" href="../index.html" style="--crumb-bg:{{track bg}};--crumb-ink:{{track colour}};">{{icon}} {{Track}}</a>
    <span class="sep">›</span>
    <a class="crumb" href="index.html" style="--crumb-bg:{{tier bg}};--crumb-ink:{{tier ink}};">{{Tier}}</a>
    <span class="sep">›</span>
    <span class="crumb current">{{Topic}}</span>
  </nav>
</div>
<!-- colours: copy from a finished page of the same track/tier — see rules/visual-style.md -->

<main class="wrap" id="main">
  <section class="hero">
    <!-- eyebrow colour follows the priority badge (rules/visual-style.md) -->
    <div class="eyebrow" style="--eyebrow-bg:…; --eyebrow-ink:…;">{{PRIORITY emoji}} {{Track}} · {{Tier}} · {{Must Know|Should Know|Deep Dive}}</div>
    <!-- H1 needs a hook or tension, never a flat label; highlight 1–2 words with .hl (rules/content-writing.md, rules/visual-style.md) -->
    <h1>{{Hook title with <span class="hl hl-inter">highlighted words</span>}}</h1>
    <!-- the literal question an interviewer would ask, in plain words -->
    <p class="interview-q">"{{literal interview question}}"</p>
  </section>

  <!-- WHY IT MATTERS — collapsed. Always Problem→Solution cards: one why-card for a single concept (no .why-grid
       wrapper), a .why-grid of cards for several named sub-concepts. Rules + column-count judgment: rules/why-it-matters.md -->
  <details class="topic-hook toggle">
    <summary>Why it matters <span class="chev">▾</span></summary>
    <div class="toggle-body">
      <div class="why-card" style="--why-color:…; --why-bg:…">
        <div class="wc-head">{{icon}} {{concept}}</div>
        <div class="wc-ps">
          <div class="wc-row problem"><span class="wc-tag">❗ Problem</span><span>{{problem}}</span></div>
          <div class="wc-row solution"><span class="wc-tag">✅ Solution</span><span>{{solution}}</span></div>
        </div>
        <div class="wc-recall"><span class="wcr-tag">Recall</span><span class="wcr-text">{{one-line memory hook}}</span></div>
      </div>
    </div>
  </details>

  <!-- ALWAYS VISIBLE from here to the Say-this box — never turn these into toggles -->
  <div class="recall">                                   <!-- rules/interview-recall.md -->
    <div class="rhead">🔥 Easy interview recall</div>
    <p class="rline">{{Concept}} = <b>"{{one-breath memory line}}"</b></p>
    <p class="rthink"><b class="tc-label">Think:</b> {{concrete picture}}</p>
  </div>

  <div class="viz-label">🧠 Visual Mental Model <span class="viz-sub">— understand it in 5 seconds</span></div>
  <figure class="diagram-card">                          <!-- rules/diagram-style.md: inline SVG, no overlap, verify live -->
    <svg class="topic-diagram" …>…</svg>
    <figcaption>{{one sentence}}</figcaption>
  </figure>

  <div class="trap">                                     <!-- rules/common-trap.md -->
    <div class="thead">⚠️ Common Trap</div>
    <p class="tline"><b>{{the misconception}}.</b> {{the correction}}</p>
  </div>

  <div class="followup">
    <div class="fhead">🔄 Likely Follow-up</div>
    <p class="ftline"><b>"{{follow-up question}}"</b> {{short answer}}</p>
  </div>

  <div class="keypoints">                                <!-- rules/keypoints.md: 3–6 bullets, ~8–20 words, .hl on the key words -->
    <h2>🎯 Say this in the interview <span class="sub">— the exact lines to land</span></h2>
    <p class="kp-primary">"{{the spoken answer in one breath}}"</p>
    <ul>
      <li><span class="hl hl-blue">{{key phrase}}</span> → {{what to say}}</li>
    </ul>
  </div>

  <!-- COLLAPSED depth — for whoever wants more than the 30-second pass -->
  <details class="explain toggle">
    <summary>📖 Explanation <span class="chev">▾</span></summary>
    <div class="toggle-body">
      <p>{{2–3 tight paragraphs, very simple words — rules/content-writing.md}}</p>
      <!-- optional comparison: <table class="cmp-table"> … -->
    </div>
  </details>

  <!-- Code box is optional (omit it rather than invent filler); check-site.js only warns when missing -->
  <details class="codebox toggle">
    <summary>💻 See the code <span class="chev">▾</span></summary>
    <div class="toggle-body">
      <div class="code-card">
        <div class="cc-head">
          <span class="cc-lang"><svg>…</svg> {{Language}}</span>
          <button class="cc-copy" type="button" aria-label="Copy code"><svg>…</svg></button>
        </div>
        <pre><code>{{code with <span class="kw|ty|num"> tokens; comments as <span class="cx-cmt">; ✅ <span class="cx-ok">, ❌ <span class="cx-err">}}</code></pre>
      </div>
      <p class="cx-note">{{one-line takeaway}}</p>
    </div>
  </details>

  <!-- OPTIONAL: only for topics with several real-life scenarios. If present it must be complete
       (check-site.js validates it) — rules/use-cases.md -->
  <details class="usecase toggle">
    <summary>🧭 Use Cases — recognize these when they happen to you <span class="chev">▾</span></summary>
    <div class="toggle-body">
      <div class="uc-scenarios">
        <div class="uc-scenario" style="--uc-color:…">
          <div class="uc-sit"><span class="uc-flag">1</span> {{situation}}</div>
          <div class="uc-mini"><svg>…</svg></div>
          <p class="uc-what">{{what happens}}</p>
          <div class="uc-remember"><span class="uc-rtag">Remember</span><span class="uc-rtext">{{one line}}</span></div>
        </div>
      </div>
    </div>
  </details>

  <details class="realworld toggle">
    <summary>🌍 Real-world example <span class="chev">▾</span></summary>
    <div class="toggle-body">
      <p><b>{{the situation}}.</b> {{one breath of what happens}}</p>
    </div>
  </details>

  <!-- pager links are generated/repaired by `node scripts/fix-pagers.js --fix` -->
  <div class="pager">
    <a class="to-index" href="index.html">↑ Back to {{Track}} {{Tier}}</a>
    <div class="side next"><span class="label">Next</span><a href="{{n+1}}.html">{{next title}} →</a></div>
  </div>
</main>

<footer class="wrap">RefreshYourself · {{Track}} · {{Tier}}</footer>

<script src="../../assets/search-index.js"></script>
<script src="../../assets/nav-index.js"></script>
<script src="../../assets/site.js"></script>
</body>
</html>
```

After the file exists: wire it (search index, nav index, tier index, roadmap — see
[`common-tasks.md`](common-tasks.md#add-one-topic-page-to-an-existing-track)).
