# Rule: Technical Accuracy — Never Guess

This site exists so someone can repeat what it says out loud in a real interview. A wrong
technical claim doesn't just look bad on a page — it actively damages the person using it. This
rule outranks every other writing rule (simple words, crisp bullets, catchy phrasing): **correct
first, then simple, then catchy — never the other order.**

## The standing rule

- **Only write a technical claim you are actually confident is correct C#/.NET behavior** —
  never one that merely sounds plausible or fills a gap in a paragraph. If you're not sure
  whether something is true, that is the signal to stop and check, not to phrase it vaguely and
  move on.
- **Don't invent specifics to sound authoritative** — no invented version numbers, no invented
  "under the hood" mechanics, no invented benchmark numbers, no invented historical/etymology
  claims stated as hard fact. If a detail isn't something you actually know, leave it out rather
  than filling the sentence with something that sounds right.
- **When a behavior is version-specific or edge-case-dependent, say so or leave it out** — don't
  state a C# 9+ behavior (records, pattern matching, etc.) as if it always applied, and don't
  bury a "only in this specific case" caveat that changes whether the claim is true.
- **Prefer the well-established, boring-but-correct statement over the interesting-but-uncertain
  one.** A simpler true claim beats a punchier claim you can't fully vouch for.
- **Before marking a topic page "done," re-read every factual sentence on it and ask "do I
  actually know this is true, or does it just sound right?"** — treat this as a mandatory last
  pass, the same way [keypoints.md](keypoints.md) requires a highlight pass. Diagrams count too:
  a diagram is a claim about behavior, not just a picture.
- If a real correction surfaces later (the user catches something wrong), fix the content AND
  treat it as a signal to re-check nearby claims on that same page — a mistake is rarely isolated
  to one sentence.

## How this interacts with the simple-words rule

Simple words describe something correctly in plain language — they never mean rounding a claim
down to something technically wrong because the true version felt too complicated. If the
accurate version can't be said simply, find a simpler *true* way to say it (a better analogy, a
narrower claim) rather than a simpler *false* one. See [content-writing.md](content-writing.md)
for the words rule itself.

## Scope

This applies everywhere content makes a factual claim: the diagram, the explanation, the
real-world analogy (an analogy can still be factually wrong about what it's illustrating), the
code snippet, and every key-points bullet. It applies to every track this site ever covers, not
just C#.
