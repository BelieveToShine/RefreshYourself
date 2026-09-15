# Rule: The "Easy interview recall" Box

Added after direct feedback that the site's explanations read as dense and duller than a good
chat assistant's answer to the same question. This box exists to give the punchy, memorable
takeaway *before* anyone reads a single word of explanation — it's the thing that actually sticks.

## Where it goes

Right after "Why it matters" and right **before** the diagram — see the template order in
[content-writing.md](content-writing.md). It is `<div class="recall">` (see `.recall` in
`assets/style.css`), **always visible, never a toggle.** The diagram and this box are the only
two things on the page nobody has to click to see, besides the keypoints box at the bottom.

## What goes inside it

For a single-concept topic (no X-vs-Y comparison), one quoted line is enough:

```html
<div class="recall">
  <div class="rhead">🔥 Easy interview recall</div>
  <p class="rline">Enum = <b>"a fixed list of meaningful choices."</b></p>
  <p class="rthink">Think: <code>Status</code> → Pending | Active | Closed</p>
</div>
```

For a topic that's a genuine X-vs-Y(-vs-Z) comparison, use the two-layer arrow format instead —
one instant line per option, then a "Think:" sentence underneath:

```html
<div class="recall">
  <div class="rhead">🔥 Easy interview recall</div>
  <div class="rgrid">
    <p class="rrow"><code>var</code> <span class="rarrow">→</span> <b>compiler</b> decides</p>
    <p class="rrow"><code>object</code> <span class="rarrow">→</span> <b>general</b> container</p>
    <p class="rrow"><code>dynamic</code> <span class="rarrow">→</span> <b>runtime</b> decides</p>
  </div>
  <p class="rthink">Think: <code>var</code> is strict. <code>dynamic</code> waits.
  <code>object</code> needs casting.</p>
</div>
```

1. **`.rhead`** — always `🔥 Easy interview recall`. Same wording every time; it's a landmark,
   not a place to be clever.
2. **Layer 1 — instant.** Either `.rline` (one quoted sentence, shape `Term = "the crispest
   possible definition."`) for a single concept, or `.rgrid`/`.rrow` (one `concept → meaning`
   line per option, arrow-first, bold the one distinguishing word) for a comparison of 2-3
   named options. Pick whichever shape actually fits the topic — don't force a comparison topic
   into a single quoted sentence, or a single-concept topic into an arrow grid.
3. **Layer 2 — `.rthink`, slightly deeper.** A short sentence building on Layer 1 — either a
   `Think: X → A | B | C` memory hook tied to a concrete example (an enum's actual values), or,
   for a comparison, a compressed contrast sentence (`"var is strict. dynamic waits. object
   needs casting."`). Skip it only if there's genuinely nothing to add beyond Layer 1 — don't
   pad it.
   - **If Layer 2 pairs two or more contrasting clauses, put each clause on its own line —
     never join them with a middot into one run-on line.** A real gap this caught: `Think:
     int, bool, struct → copy · class, array, string → shared` packed two full lists plus their
     contrast into a single dense line — exactly the kind of thing this box exists to prevent
     someone from having to untangle mid-recall. Wrap each clause in
     `<span class="tc-line">...</span>` (see `.tc-line` in `assets/style.css`) so they stack:
     ```html
     <p class="rthink">Think:
       <span class="tc-line"><code>int, bool, struct</code> → copy</span>
       <span class="tc-line"><code>class, array, string</code> → shared</span>
     </p>
     ```
     This applies any time a clause itself contains a list (multiple comma-separated items), or
     any time there are 3 or more `X → Y` clauses (e.g. a `try`/`catch`/`finally`-style Think
     line) — stacking reads more attractively and is easier to scan than a run of arrows in one
     paragraph. A Think line of just 2 short single-word clauses (`"var is strict. dynamic
     waits."`) can stay on one line.
   - **Bold the key term in each clause — lightly, not the whole clause — no matter which shape
     Layer 2 takes.** Wrap just the keyword/term itself in `<b><code>...</code></b>` (e.g.
     `<b><code>try</code></b> → watch`), not the arrow or the answer after it. This gives the eye
     a scannable anchor per line without making the line shout — bold the question, not the
     whole sentence. **This applies equally to the one-line prose form** — a real gap this
     caught: `Think: var is strict. dynamic waits. object needs casting.` shipped with none of
     `var`/`dynamic`/`object` bolded, because the bold-the-keyword rule had only been written
     down next to the stacked `tc-line` example and got skipped for the plain-sentence case. The
     fix: `Think: <b><code>var</code></b> is strict. <b><code>dynamic</code></b> waits.
     <b><code>object</code></b> needs casting.` — every named concept in a Think line gets
     bolded, whether the line is stacked or a single sentence.
   - **The "Think:" label itself is always `<b class="tc-label">Think:</b>`** — bold and blue
     (see `.tc-label` in `assets/style.css`), on every recall box, single-line or stacked. It's a
     small fixed landmark, same treatment every time, so the eye learns to find it instantly.
4. **This box is the canonical statement of the memory trick for this topic — state it here
   once, nowhere else.** Per "Content discipline" in [product-principle.md](product-principle.md),
   the Explanation section must not restate the same trick as its own "Memory trick:" line; it
   should build on this box (add the *why*), not repeat it.

## What makes a good one line

- It must survive being read out loud in under 3 seconds.
- Prefer the shape that's actually asked in interviews — "What is an enum?" gets answered by
  "Enum = a fixed list of meaningful choices," not by a mechanism description.
- Never repeat the diagram's caption word-for-word — the recall line is the spoken answer, the
  diagram is the visual one. They should reinforce, not duplicate.
- No hedging, no "it depends" — this box is the confident, compressed answer. Nuance belongs in
  Explanation, not here.

## Relationship to the keypoints box

The keypoints box at the bottom ("Say this in the interview," see [keypoints.md](keypoints.md))
is the full set of talking points for the topic. This box is a single, upfront hook — one line,
read before anything else. They can restate the same fact in different words; they should never
feel like the same sentence copy-pasted twice.
