# Rule: The "Why it matters" Box

Locked 2026-09-24, after direct feedback on the Web API CORS page (`webapi/basic/3.html`) that
the section wasn't earning its name: it read as a definition plus a bolded "Why?" aside, not an
actual answer to *why does this topic exist, what problem does it solve.* The fix isn't more
words — it's a different shape: **state the problem, then state the solution**, explicitly.

## Two shapes — pick by whether the topic has sub-concepts to differentiate

**Shape A — plain bullets.** Use for a normal, single-concept topic (the common case). `<details
class="topic-hook toggle">` with 2-3 short bullets: what real bug/situation this explains, when
it's actually useful to know, and (only if genuinely true) that it's a common interview opener.
Never a paragraph, never article prose. This is still the default — most topics don't need
Shape B.

**Shape B — the Problem → Solution why-grid.** Use only when the page itself differentiates
**multiple named sub-concepts** that readers genuinely confuse with each other (the CORS page has
four: Same-Origin Policy, CORS itself, wildcard vs. allow-list, and CORS-vs-Authentication). One
`.why-card` per sub-concept, laid out in a `.why-grid`, each card built around an explicit
Problem/Solution pair — never a flowing paragraph with a bolded aside.

```html
<details class="topic-hook toggle">
  <summary>Why it matters <span class="chev">▾</span></summary>
  <div class="toggle-body">
    <div class="why-grid">
      <div class="why-card" style="--why-color:#1d4ed8; --why-bg:#dbeafe">
        <div class="wc-head">🛡️ Same-Origin Policy</div>
        <div class="wc-ps">
          <div class="wc-row problem"><span class="wc-tag">❗ Problem</span><span>A malicious site open in another tab could quietly ride your browser's existing session on a sensitive site and read what comes back.</span></div>
          <div class="wc-row solution"><span class="wc-tag">✅ Solution</span><span>The browser blocks cross-origin JavaScript reads by default — that default is the Same-Origin Policy.</span></div>
        </div>
        <div class="wc-recall"><span class="wcr-tag">Recall</span><span class="wcr-text">Same-Origin Policy = browser blocks cross-origin reads by default.</span></div>
      </div>
      <!-- one .why-card per sub-concept -->
    </div>
  </div>
</details>
```

## What goes in each card

1. **`.wc-head`** — one emoji + the sub-concept's own short name. This is the label a reader
   scans first to know which card they're looking at.
2. **`.wc-row.problem`** — one sentence, tagged `❗ Problem`: the concrete situation that breaks,
   or the question that has to be answered, *before* this sub-concept exists. State a real
   consequence ("a malicious site could read what comes back"), never an abstract restatement of
   the sub-concept's own name.
3. **`.wc-row.solution`** — one sentence, tagged `✅ Solution`: what this sub-concept actually
   does about that problem. This is where the real definition lives — but framed as the fix, not
   a dictionary entry.
4. **`.wc-recall`** — the same one-line memory hook style as the main recall box (see
   [interview-recall.md](interview-recall.md)), scoped to just this card's sub-concept. Keep it
   to a single short sentence.

**One Problem sentence, one Solution sentence — never two-plus sentences per row.** If a row
needs more than one sentence to state, the problem or solution isn't crisp enough yet; tighten it
before adding a second sentence, don't let the card grow into a paragraph again.

**The Problem must name a real consequence, not just gesture at "confusion."** A row that reads
"Problem: people mix this up with X" hasn't said what actually breaks — rewrite it to name the
concrete bug, exposure, or wrong outcome, per [accuracy.md](accuracy.md) (never invent one that
isn't real — if you can't state a genuine concrete consequence, the topic may not need Shape B at
all).

## Column count is a judgment call, not a fixed default

`.why-grid`'s column count is never left to `auto-fit` guessing, and it is **not always "2
columns" either** — don't cargo-cult the CORS page's exact layout onto every future page without
thinking about it fresh. At this site's ~920px content width, `repeat(auto-fit,
minmax(240px,1fr))` fits 3 narrow cards per row, which orphans a leftover card alone on its own
row with a large empty gap beside it — that's the one thing to actually avoid. Three explicit
layouts exist (`.why-grid` default = 2 columns, `.cols-3`, `.cols-4`); pick between them by
actually looking at two things for the page in front of you, not by pattern-matching the last
page you wrote:

- **How many cards does this page have?** The grid must finish as a full rectangle — no card
  alone on a trailing row with dead space next to it. 2 cards → 2 columns (one full row). 3 cards
  → `cols-3` (one full row) is usually better than 2 columns (which leaves a lone 3rd card) —
  *unless* the content is long enough that 3-across would make every card cramped and tall, in
  which case a deliberate 1-per-row stack (or 2+1 accepted as the least-bad option) can beat a
  forced 3-across squeeze. 4 cards → 2×2 (default) reads well when the content is a few lines
  each; `cols-4` (4-across, single row) reads better when each card's Problem/Solution text is
  genuinely short — check both by eye before deciding.
- **How dense is each card's content?** A `cols-4` row of four cards each running 3+ lines of
  Problem text and 3+ lines of Solution text will look cramped and uneven in height even though
  it avoids an orphan — 2×2 usually reads better once content passes a couple lines per row. Short,
  punchy Problem/Solution lines (one line each) can support 3-or-4-across comfortably.

**Render it and look at it before deciding it's done** — per the verification note below, don't
ship a layout choice you haven't actually seen rendered at the real content length. If it looks
cramped, uneven, or leaves a lone orphan card, pick a different modifier and re-render, don't
argue yourself into accepting a bad-looking grid because the class name "should" work.

Below 720px, every variant collapses to a single column automatically — don't override that.

## Color per card, not per page

Each `.why-card` picks its own `--why-color`/`--why-bg` pair via inline `style=""` (see the
existing per-element CSS-variable pattern used site-wide, e.g. `--tier-color` on `<details>`).
Reuse the site's existing `.hl-*` palette hues so a new page never needs a brand-new color —
blue, teal, amber, and purple already cover four distinct sub-concepts; pick from the same family
for a fifth if one is ever needed.

## Markup discipline: the tag and its text are always two separate, dedicated spans

**Never write a tag and its following text as two bare adjacent inline elements with nothing
between them in the HTML source** — e.g. `<span class="wcr-tag">Recall:</span><span>...</span>`.
Two adjacent inline elements with zero whitespace between them in the markup render with zero
visible gap, regardless of any `gap`/`margin` CSS on a flex parent — this shipped as a real bug
on the CORS page (`Recall:Same-Origin Policy...` running together with no space) before being
caught and fixed. The fix that's now the standing pattern:

- The tag itself (`.wc-tag`, `.wcr-tag`, or the Use Cases page's `.uc-rtag` —see
  [use-cases.md](use-cases.md)) is a small colored **pill badge** (white text on the card's
  accent color, `border-radius:20px`, `font-family:'Fira Code'`, uppercase, no trailing colon —
  the pill shape itself is the visual separator, so the label text doesn't need its own colon).
- The text that follows always lives in its own dedicated span with its own class (`.wcr-text`,
  `.uc-rtext`) — never a bare unclassed `<span>` sitting flush against the tag.
- **Verify the fix landed, don't just eyeball a screenshot** — a screenshot can look fine while
  the underlying gap is still zero. Measure it: `tag.getBoundingClientRect().right` vs.
  `text.getBoundingClientRect().left` in a live browser check, and confirm the difference is a
  real positive number. See the verification section in
  [build-process.md](build-process.md#verification-is-mandatory-twice-once-by-the-subagent-once-by-you)
  for where this fits alongside the diagram checks.
