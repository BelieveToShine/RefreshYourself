# Rule: Retrofitting an Existing Page's "Why it matters" + "Use Cases"

This is a **different job from Phase 7 page-authoring** in [build-process.md](build-process.md):
the page already exists, already shipped, and is already good — a diagram, an Explanation, a
`.cmp-table`, code, keypoints, a trap, a follow-up. The retrofit touches exactly two sections and
leaves everything else on the page untouched. Written after the CORS page
(`webapi/basic/3.html`) needed three separate feedback rounds to reach the bar this file now
states up front — the goal of writing it down is that the next 24 pages need zero rounds, not
three.

## Scope fence — read this before touching anything

**Touch only:**
1. The existing `<details class="topic-hook toggle">` ("Why it matters") — rewrite its inside per
   [why-it-matters.md](why-it-matters.md).
2. If (and only if) instructed to add one, a new `<details class="usecase toggle">` ("Use Cases")
   inserted right after "💻 See the code" and right before "🌍 Real-world example" — per
   [use-cases.md](use-cases.md).
3. If (and only if) instructed to add one, one new small differentiation diagram (see below) —
   inline `<svg>`, placed right after the existing main diagram, same pattern as the CORS page's
   "Don't mix these three" diagram.

**Never touch:** the H1, the interview-question line, the existing Visual Mental Model diagram
(unless explicitly told to add a *second*, separate one), the recall box, the trap, the
follow-up, the keypoints box, the Explanation section or its `.cmp-table`, the code cards, the
real-world example, or the pager. If something outside the scope fence looks wrong while you're
in there, do not fix it — note it in your report instead and move on.

## Source the concept list from the page itself — never invent one

The page you're retrofitting almost always **already contains** the exact concept list you need,
usually as a `.cmp-table`'s column headers or the Explanation's own named terms (e.g. Versioning's
existing table already has three columns: URL segment, Header, Query string). Read the existing
Explanation and `.cmp-table` first. Your job is to take concepts the page has *already*
established as real and technically accurate, and give them the Problem→Solution /
Situation→Remember treatment — not to research or invent new distinctions the page didn't already
make. If you genuinely can't find a clean multi-concept list on the page, that's a signal this
page should stay Shape A (plain bullets) for Why it matters and/or skip the Use Cases panel
entirely — see the decision rule in each linked file. Per [accuracy.md](accuracy.md): every
Problem/Solution sentence and every Use-Case "what happens" sentence must be something you're
actually confident is true, at the same bar as the rest of the page.

## The two decisions, made for you — don't re-derive them per page

Whoever dispatched you already decided, for this specific page: (1) Why-it-matters Shape A or
Shape B, and if B, exactly which named concepts become cards and roughly how many columns; (2)
whether this page gets a Use Cases panel at all, and if so, which scenarios. **Follow the decision
you were given — don't second-guess it into a different shape.** If while writing you find the
given shape genuinely doesn't fit the actual page content, say so plainly in your report rather
than silently picking a different one.

## Diagram: only add one if the differentiation isn't already visible

[diagram-style.md](diagram-style.md) already requires two diagrams for a multi-dimensional
concept. Check the page's *existing* main diagram first — if it already visually shows the
distinction your why-grid cards are making, you don't need a new one. Add a small second
diagram (CORS's "Don't mix these three" is the model to copy the *shape* of, not the content)
only when:
- The page differentiates 2-4 named things that get confused with each other, AND
- The existing main diagram doesn't already show them side by side.

Keep it small (a `viewBox` similar in scale to CORS's `0 0 640 270`), give it its own unique
`filter`/`marker` ids (never reuse an id from the page's existing diagram), and run the mandatory
verification script from [diagram-style.md](diagram-style.md#mandatory-automated-verification--hand-computed-coordinates-are-not-verification)
against it before reporting done.

## Mandatory verification before you report this page done

Render the live page in a browser and check every one of these — reporting "done" without having
actually run these against a live render is a failed check, not a passed one, same standard as
[build-process.md](build-process.md#verification-is-mandatory-twice-once-by-the-subagent-once-by-you):

1. **Zero console errors** on load and after opening every `<details>` toggle you touched.
2. **Diagram overlap script** (if you added a diagram) — `issueCount: 0`.
3. **Pixel-gap check on every Recall/Remember tag you wrote** —
   `tagEl.getBoundingClientRect().right` vs. `textEl.getBoundingClientRect().left`, confirm a real
   positive number, for every `.wc-recall` and every `.uc-remember` on the page (existing ones you
   didn't touch don't need re-checking, but any new one you added does).
4. **Screenshot the why-grid and the Use Cases panel and actually look at them** — no orphaned
   card on its own row with dead space beside it (pick the right `.why-grid` column count per
   [why-it-matters.md](why-it-matters.md#column-count-is-a-judgment-call-not-a-fixed-default)),
   no monotone single-color scenario list (per
   [use-cases.md](use-cases.md#color-one-accent-per-scenario-never-one-blue-theme-for-the-whole-panel)
   each `.uc-scenario` needs its own `--uc-color`, ideally matching its own mini-diagram's
   palette), text that reads sharp against its card background.
5. **Re-read your own Problem/Solution and Situation/Remember sentences once, out loud in your
   head, checking for accuracy** — no invented specifics, nothing that overstates what's true.

## Report format

State plainly, for this one page: which shape you used and why, how many cards/scenarios and
their names, whether you added a diagram and why/why not, and the literal result of every check
in the verification list above (not "looks good" — the actual numbers/booleans). If anything in
the scope fence tempted you to touch something out of scope, say so instead of doing it.
