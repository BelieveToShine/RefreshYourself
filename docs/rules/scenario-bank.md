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
that:

1. **Add one row** to `scenarios/index.html`, inside the `<details class="roadmap-tier toggle">`
   block for that page's track (create a new track block if that track has none yet — alphabetize
   by whatever order reads cleanest, there's no fixed order rule here). The row is the same
   `<li class="topic-row"><a href="../<track>/advanced/<n>.html">Title</a><span class="badge ...">...</span></li>`
   shape every other roadmap-style listing on this site already uses.
2. **Add the small back-link pill** to the scenario page itself, right after its `.crumbbar`
   `<div>` closes and before `<main>` opens:
   ```html
   <div class="wrap" style="margin:10px 0 0;"><a class="crumb" href="../../scenarios/index.html" style="--crumb-bg:#ffe4e6;--crumb-ink:#9f1239;">🎯 Also in the Scenario Bank</a></div>
   ```
   This reuses the existing `.crumb` pill class verbatim (proven spacing/padding, no new CSS
   needed) rather than inventing a new badge component — deliberately not nested inside the
   `<nav class="crumbs">` itself, since a breadcrumb implies upward hierarchy and this is a
   same-level cross-link, not a parent. The `../../` depth assumes the page sits at
   `<track>/advanced/<n>.html` (two levels deep) — adjust the relative path if a future scenario
   page ever lives somewhere else.
3. **Nothing else changes.** `assets/search-index.js` already has (or needs) its own entry for the
   page as normal — Scenario Bank membership doesn't add a second search entry, the page only
   exists once in the index regardless of how many places link to it.

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

## Current coverage (as of the first Scenario Bank pass, 2026-10-13)

58 pages across 17 tracks: java (10), linq (11), react (5), angular (6), vuejs (6), nextjs (6),
webapi (2), aws (2), azure (1), sql (1), csharp (1), oops (2), dotnet (1), python (1, a
multi-question bundle page), javascript (1, bundle), htmlcss (1, bundle), dsa (1, bundle).

**efcore and ai have no dedicated scenario page yet** — real gaps, not an oversight in the index.
A future scenario question for either track should get its own normal page first (per this
track's existing tier/pager rules), then a row added here.

## Adding a new scenario question later

When the user supplies a new scenario question to add:
1. Decide which existing track it belongs to (or confirm it's for `efcore`/`ai`, the two gaps).
2. Build it as a completely normal page in that track — follow that track's own next free
   `advanced/<n>.html` slot, pager chain, tier-index row, diagram verification, and
   `search-index.js`/`nav-index.js` entries exactly like any other new page addition.
3. Do the two Scenario Bank steps above: one new `<li>` row in `scenarios/index.html` under that
   track's group (bump its `<span class="rtcount">`), one back-link pill on the new page.
4. Re-run `node scripts/check-site.js` to confirm the new link resolves and nothing broke.
