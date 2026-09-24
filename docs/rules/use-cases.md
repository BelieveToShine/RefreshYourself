# Rule: The "🧭 Use Cases" Panel

Added on the CORS page rework (locked 2026-09-24): a topic that has several genuinely distinct
real-world situations — not just one analogy — deserves a place to walk through each situation
separately, before the single Real-world/Scenario example at the bottom. This is optional, not
mandatory on every page: only add it when a topic actually has 3+ recognizable, practically
different scenarios worth telling apart (CORS: same-origin, cross-origin, cross-origin with
credentials, public multi-frontend, server-to-server). A topic with only one real scenario should
just use the existing Real-world/Scenario section (see [content-writing.md](content-writing.md))
— don't manufacture a Use Cases panel for a topic that doesn't have enough distinct situations to
fill it.

## Where it goes

Right after "💻 See the code" and right **before** the "🌍 Real-world example" — same slot as
`.trap` conceptually, but collapsed (unlike the always-visible boxes, this one goes deep enough
per-scenario that it earns being a toggle). `<details class="usecase toggle">` with
`<summary>🧭 Use Cases — recognize these when they happen to you</summary>`.

## Structure: Situation → mini-diagram → What happens → Remember, per scenario

```html
<details class="usecase toggle">
  <summary>🧭 Use Cases — recognize these when they happen to you <span class="chev">▾</span></summary>
  <div class="toggle-body">
    <div class="uc-scenarios">

      <div class="uc-scenario">
        <div class="uc-sit"><span class="uc-flag">1</span> Your frontend and API live on the exact same origin</div>
        <div class="uc-mini">
          <svg viewBox="0 0 480 66" xmlns="http://www.w3.org/2000/svg">
            <!-- small, self-contained flow diagram — own unique marker ids per scenario -->
          </svg>
        </div>
        <p class="uc-what">The browser sees the exact same origin on both sides, so the
        Same-Origin Policy was never blocking anything here.</p>
        <div class="uc-remember"><span class="uc-rtag">Remember</span><span class="uc-rtext">Same origin → CORS isn't the problem.</span></div>
      </div>
      <!-- one .uc-scenario per recognizable situation -->

    </div>
  </div>
</details>
```

1. **`.uc-sit`** — the situation, named as something the reader would recognize happening to
   *them*, not a documentation heading. Prefer "Your frontend calls an API on a different origin"
   over "Cross-origin requests" — second person, concrete, immediately recognizable. Numbered
   with `.uc-flag` in hot-to-normal or logical-progression order (simplest/most common scenario
   first).
2. **`.uc-mini`** — a small inline SVG specific to this one scenario, not a repeat of the page's
   main Visual Mental Model diagram. Keep it tiny and simple (a `viewBox` around `0 0 480 66` for
   a 2-box flow, taller only if the scenario genuinely needs 3+ stacked elements — see the public
   multi-frontend scenario for that shape). **Every scenario's marker/filter ids must be unique
   site-wide within the page** (`arUc1`, `arUc2`, …) — copying a marker id from another scenario
   or the main diagram silently breaks whichever one rendered second. No drop-shadow filter needed
   at this size; keep these mini-diagrams flat and light.
3. **`.uc-what`** — one short paragraph, plain words, stating what actually happens in this
   situation and why. This is where the real explanation lives — the mini-diagram shows it, this
   sentence says it. If a scenario is the single most common one a reader will actually hit,
   say so directly (e.g. "This is the #1 scenario you'll actually run into") — don't bury that
   signal in the diagram alone.
4. **`.uc-remember`** — same one-line memory-hook discipline as the main recall box (see
   [interview-recall.md](interview-recall.md)), scoped to just this scenario. One short sentence,
   not a restatement of `.uc-what`.
5. **A scenario that's a common interview trap gets `.uc-scenario.uc-trap`** — this swaps the
   scenario's flag/remember-tag color to the site's hot/danger red, and is the right place for
   "candidates often assume X is true here, but it isn't" — see [common-trap.md](common-trap.md)
   for what makes a real trap vs. manufactured trivia; the same bar applies here.

## Markup discipline: same as `.wc-recall`

`.uc-remember`'s tag (`.uc-rtag`) and its following text (`.uc-rtext`) must be two separate,
dedicated spans, never two bare adjacent inline elements — see the markup-discipline section in
[why-it-matters.md](why-it-matters.md#markup-discipline-the-tag-and-its-text-are-always-two-separate-dedicated-spans)
for the exact bug this prevents and how to verify the fix actually landed (measure the rendered
pixel gap, don't just eyeball a screenshot).

## What makes a good scenario list

- Each scenario must be **practically distinct** — a genuinely different decision or outcome, not
  the same situation renamed. If two scenarios would get the same `.uc-what` and `.uc-remember`
  with different nouns swapped in, merge them.
- Order by what a reader is actually likely to hit, most-common first — not alphabetical, not by
  technical complexity.
- Per [accuracy.md](accuracy.md): every "what happens" claim must be something you're actually
  confident is true. A use-case panel inventing a plausible-sounding but wrong mechanism is worse
  than not having the panel at all.
- **Column/layout note:** unlike `.why-grid`, `.uc-scenarios` is always a single vertical stack
  (`flex-direction:column`), never a grid — scenarios are read in order, one at a time, not
  scanned side-by-side.
