# Rule: The "⚠️ Common Trap" Box

Added on the same round of feedback as [interview-recall.md](interview-recall.md): the site
should surface the exact misconception an interviewer is likely to probe, not bury it inside the
Explanation prose where it's easy to skim past.

## Where it goes

Right after "💻 See the code" and right **before** the "🌍 Real-world example" — see the template
order in [content-writing.md](content-writing.md). It is `<div class="trap">` (see `.trap` in
`assets/style.css`), **always visible, never a toggle** — a trap you only see if you click for it
isn't doing its job.

## What goes inside it

```html
<div class="trap">
  <div class="thead">⚠️ Common Trap</div>
  <p class="tline"><b>var is not dynamic.</b> var still needs a value it can infer a fixed type
  from at compile time — it can never change type after that.</p>
</div>
```

1. **`.thead`** — always `⚠️ Common Trap`. Same wording every time, same as the recall box's
   fixed `🔥 Easy interview recall` heading — it's a landmark.
2. **`.tline`** — **one sentence, never a list.** Lead with the bolded misconception itself (the
   thing a candidate might wrongly say), then one short clause correcting it. If it takes more
   than one sentence to state, the trap is too broad — narrow it to the single sharpest mistake.

## What makes a good one

- It has to be a mistake people **actually make**, not a hypothetical edge case. If you can't
  picture a candidate saying the wrong thing out loud, it's not a trap, it's trivia — leave it
  out rather than force one.
- Prefer the exact wrong sentence a candidate might say, corrected in the same breath — "`X` is
  not `Y`. [why]" reads better than a neutral warning like "be careful not to confuse X and Y."
- Don't restate the recall line or the keypoints — a trap is the *specific wrong turn*, not
  another phrasing of the right answer. If the content of a draft trap is just the recall line
  with "not" in it, dig for a sharper, more specific mistake instead.
- Not every topic needs an invented trap. If there's no real, common misconception for a topic,
  it's fine to point the trap at the closest thing to one (an easy-to-miss edge case, a
  one-letter typo that changes behavior) rather than manufacture drama.
- **When a topic has a combined/composite variant (built from two simpler rules with AND/OR),
  the trap is very often exactly which one it is.** People default-assume a combination of two
  modifiers/flags means "both required" — it often means "either is enough" instead, or vice
  versa. Worked example, Access Modifiers: `protected internal` ≠ "protected and internal at the
  same time" — it's an **OR** (either boundary satisfies it); `private protected` is the
  **AND** (both boundaries required). Stating which one is OR and which is AND, explicitly, is
  one of the highest-value traps you can write, because it's a detail that sounds like it could
  go either way and is exactly what an interviewer probes to separate memorized syntax from real
  understanding.

## Technical accuracy inside the trap

The correction half of the sentence must be held to the same bar as everything else on the site
— see [accuracy.md](accuracy.md). A catchy trap that overstates the fix (e.g. claiming a keyword
"does nothing" when it does something narrower) is worse than no trap at all, because it teaches
a new wrong idea in the middle of trying to fix one.
