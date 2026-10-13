# Rule: The Scenario Bank — a cross-track index, never a second copy

`scenarios/index.html` is a single page that lists every dedicated "Scenario:" question already
written across every track, grouped by the track each one belongs to. It exists because a real
scenario question is interesting on two axes at once — "which technology" and "this is an applied
diagnose-it/design-it question, not a definition" — and a reader sometimes wants to browse the
second axis directly instead of hunting through 19 separate tier indexes.

**The Scenario Bank never duplicates a page.** Every row in it is a plain link to the real page,
which still lives exactly where it always did — `<track>/advanced/<n>.html`, following that
track's own numbering, pager, tier-index, and diagram rules like any other page. Nothing about a
scenario page's own home track changes because it's also listed here.

## How a page ends up in both places

A scenario page is always built the normal way first — written in its own track following
[`content-writing.md`](content-writing.md)'s full template, [`diagram-style.md`](diagram-style.md)'s
mandatory verification, and that track's own tier-index/roadmap.html wiring, exactly like every
other page on this site. "Scenario Bank membership" is a second, lightweight step added after
that — four pieces of wiring, all data-driven, **zero hand-written sidebar/menu markup on the
page itself** (same discipline as [`tier-navigation.md`](tier-navigation.md)):

1. **Add one card** to `scenarios/index.html`, inside the `<div class="scenario-grid">` for that
   page's track (create a new `<details class="roadmap-tier toggle">` track block if that track
   has none yet). The card shows the **real quoted interview question** as its headline (copy
   verbatim from that page's own `.interview-q`, lightly trimmed for length only — never
   reworded into a new claim), the former/short title as a small muted `.sc-label` underneath,
   and the priority badge:
   ```html
   <a class="scenario-card" href="../<track>/advanced/<n>.html"><span class="sc-badge badge hot">🔥 Must Know</span><span class="sc-q">"…the real interview question…"</span><span class="sc-label">Short Label <span class="sc-arrow">→</span></span></a>
   ```
   Bump that track's `<span class="rtcount">` and the page's footer/meta total.
2. **Flag the item `scenario: true`** on its existing entry in `assets/nav-index.js` (the same
   per-tier data file that drives the left [tier-nav sidebar](tier-navigation.md)) — just one
   extra key on the item object, nothing structural:
   ```js
   { n: 12, file: "12.html", short: "...", title: "...", tail: "...", priority: "⭐", scenario: true }
   ```
3. **Nothing else on the page itself changes** — no back-link pill, no extra markup. The
   **"🎯 Scenario Bank" sidebar menu** (see next section) is built entirely from this flag by the
   same script that builds the tier-nav sidebar; a scenario page needs no wiring beyond step 2
   because it already carries `data-tier-key` and loads `nav-index.js` like every topic page.
4. `assets/search-index.js` already has (or needs) its own entry for the page as normal —
   Scenario Bank membership doesn't add a second search entry, the page only exists once in the
   index regardless of how many places link to it.

## The "🎯 Scenario Bank" sidebar menu (added 2026-10-13)

Before this, the only navigation on a scenario page was the tier's own full topic list — correct
for someone browsing that tier normally, but irrelevant clutter for someone who just clicked in
from `scenarios/index.html` wanting more scenario questions, not the other 60–90% of that tier's
topics that aren't scenarios. The fix mirrors [tier-navigation.md](tier-navigation.md)'s own
architecture exactly — a second, pink-accented group **inside the same sidebar**, built by the
same builder IIFE in `assets/site.js` (search for `tn-group-scenario`), from the `scenario: true`
flags already in `nav-index.js`. No new per-page attribute, no new script include:

- The builder gathers every item flagged `scenario: true` across **all** of the current tier's
  `nav-index.js` groups into one combined list.
- That list is shown as a **leading** `"🎯 Scenario Bank"` group, above the tier's normal numbered
  groups — but **only when the page the reader is actually on is itself one of those scenario
  items**. A non-scenario page in the same tier (e.g. `webapi/advanced/7.html`, "API Gateway &
  BFF") never shows it — showing it everywhere in a scenario-containing tier would be clutter for
  readers who didn't come from the bank; showing it nowhere would recreate the exact "irrelevant
  listing" complaint this fixed.
- The group's last row is always a `"🎯 See all 75 in the Scenario Bank →"` link to
  `scenarios/index.html` (built from `data-root`, not hand-written per page) — local in-track
  jumps plus one click to the full cross-track hub, so both "stay in this track" and "browse
  everything" are one click away.
- The existing tier groups stay exactly as they were below it — this is additive, not a
  replacement, so normal tier-by-tier browsing is unaffected for every reader who didn't arrive
  via the bank.
- Styling: `.tn-group-scenario` (rose `#9f1239`/`#ffe4e6`, matching the bank's own brand color)
  and `.tn-item-all` for the "see all" row, both in `assets/style.css`. The existing mobile
  `"☰ Topics in this tier"` toggle button relabels itself to
  `"☰ 🎯 Scenario Bank + topics in this tier"` whenever the group is present, so narrow-screen
  readers know it's there before they even open the panel.
- **Adding a new scenario page never touches `site.js` or `style.css`** — only the `scenario: true`
  flag in step 2 above. The builder is already fully generic across every tier/track.

## What counts as a Scenario Bank page

A page earns a place here when it's framed as one bounded, applied problem to diagnose or design
— "a production incident happened, work through it" or "design X under these constraints" — not
a plain "what is X" or "X vs. Y" comparison that merely *mentions* a real-world example in passing
(the common `<details class="realworld toggle">` one-paragraph illustration embedded in an
ordinary topic page does **not** qualify on its own — that's a feature of nearly every topic page
on this site, not a dedicated scenario page).

Two title conventions both qualify and both appear on this site — don't require one specific
wording:
- **Literal `Scenario: ...` prefix** (java, linq, vuejs, nextjs) — the title tag says it outright.
- **A punchier hook title with "Scenario" only in the `<title>`/index listing, not the `<h1>`**
  (react, angular, webapi, azure, sql, csharp, oops, dotnet, aws, python, javascript, htmlcss,
  dsa) — the page is still a bounded applied problem, it just doesn't repeat the word "Scenario"
  in its own hook.

## Current coverage (as of the 2026-10-13 client-question addendum)

75 pages across 17 tracks: java (10), linq (11), webapi (10), angular (6), vuejs (6), nextjs (6),
react (5), dotnet (5), aws (2), azure (3), sql (3), oops (3), csharp (1), python (1, a
multi-question bundle page), javascript (1, bundle), htmlcss (1, bundle), dsa (1, bundle).

**efcore and ai have no dedicated scenario page yet** — real gaps, not an oversight in the index.
A future scenario question for either track should get its own normal page first (per this
track's existing tier/pager rules), then a card added here.

## Adding a new scenario question later

When the user supplies a new scenario question to add:
1. Decide which existing track it belongs to (or confirm it's for `efcore`/`ai`, the two gaps).
2. Build it as a completely normal page in that track — follow that track's own next free
   `advanced/<n>.html` slot, pager chain, tier-index row, diagram verification, and
   `search-index.js`/`nav-index.js` entries exactly like any other new page addition.
3. Do the three Scenario Bank steps above: one new `.scenario-card` in `scenarios/index.html`
   under that track's group (bump its `<span class="rtcount">` and the footer/hero total), and
   `scenario: true` on the matching `nav-index.js` item — the sidebar menu picks it up
   automatically, no further wiring.
4. Re-run `node scripts/check-site.js` to confirm the new link resolves and nothing broke; open
   the new page in a browser and confirm the "🎯 Scenario Bank" sidebar group appears with the
   new item included.
