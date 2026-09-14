# Rule: The "Say This in the Interview" Box

Every topic page's key-points box (`.keypoints` in `assets/style.css`) — always visible, never a
toggle (see [content-writing.md](content-writing.md) for where it sits in the page). This file
is the complete, standalone rule for what goes in it — read this before writing or editing one.

## What it is, and isn't

- Heading reads **"🎯 Say this in the interview,"** not a generic "Key Points" label — it's a cue
  for what to say out loud, not a study summary to re-read.
- **3–6 bullets max**, styled as small chip-cards, not a plain sentence list.
- **Each bullet is a line you'd actually say out loud in the interview** — 5-12 words, a fragment
  or a short claim, not a full explanatory sentence with subordinate clauses. Compress; never
  just repeat the Explanation section in slightly different words.

## Every single bullet highlights its own main point — no exceptions

**Every `<li>` gets at least one `<span class="hl hl-*">` on the word or phrase that IS the
point of that bullet.** This was checked across the whole site and found missing on roughly half
the bullets on multiple pages — it's easy to write a correct bullet and forget the highlight,
so treat it as a mandatory last pass, not something that happens naturally while drafting:

1. Write all your bullets first.
2. Then go back through them one at a time and ask "which word or phrase, alone, tells someone
   what this bullet says?" — highlight exactly that (rarely more than 2-4 words).
3. If a bullet has two distinct halves that each deserve their own highlight (e.g. "X → do this"
   / "Y → do that"), that's a sign it should be two `.kp-line`s (see below), each with its own
   highlight, not one bullet with two unrelated highlighted spans.

Use the same `.hl` colour that matched the concept in the diagram/explanation (see
[visual-style.md](visual-style.md)) — e.g. `<span class="hl hl-blue">Value = copy.</span>` — so
the colour means the same thing everywhere on the page, not just in the box.

## Words: plain and professional — never casual dev-slang

This is content someone repeats out loud in a real interview, so it has to sound like something
a professional would actually say. Concretely:
- **No slang shorthand for technical concepts** — a real instance: `using` was described as
  "sugar for try/finally," which reads casually and doesn't actually explain anything on its
  own. Say what it plainly does instead: `using` is **built on try/finally** — it disposes the
  object automatically.
- Simple words throughout (same rule as the rest of the page — see
  [content-writing.md](content-writing.md)), but specifically avoid internet/forum-speak
  ("syntactic sugar," "gotcha," "footgun," and similar) — say the plain, professional version of
  the same idea.

## "When do I use X vs. Y vs. Z" — the catchiest, most useful pattern available

When a topic is fundamentally "which of these do I reach for," lead the key-points box with one
short "use this when…" bullet **per option**, not a single bullet trying to cover all of them at
once. A real example that worked well (`==` / `.Equals()` / `ReferenceEquals()`):

```
<li><code>==</code> → everyday default. Identity for classes, value for numbers/strings.</li>
<li><code>.Equals()</code> → use for value equality — two strings, two records, dictionary keys.</li>
<li><code>ReferenceEquals()</code> → use when it MUST be the same object — cache hits, singletons.</li>
```

Each line: the keyword, an arrow, then the concrete situation that makes it the right choice —
never a vague "use this when appropriate." If a topic has 2-3 named options being compared, this
pattern is very likely the right shape for at least the first few bullets.

## Multi-clause bullets: one `.kp-line` per clause

A bullet with two distinct halves (two lists, two outcomes, a before/after) goes on two lines
inside the card — wrap each half in `<span class="kp-line">...</span>` rather than letting it
run on and wrap mid-sentence inside the card. Real example:
```html
<li>
  <span class="kp-line"><code>int/bool/double/struct</code> → value</span>
  <span class="kp-line"><code>class/array/string</code> → reference</span>
</li>
```
