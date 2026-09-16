# The Master Product Principle

**Read this before any other rule file — it's the lens every other rule gets judged through.**
Added after a second external design review confirmed and sharpened the direction the site was
already heading in.

## The principle

**RefreshYourself is a visual interview-recall system, not a documentation site.**

The user should be able to open any topic on a phone immediately before an interview and
recover the core concept in 5-30 seconds. Every page must optimize for:

**SCAN → SEE → RECALL → SPEAK**

not:

**READ → STUDY → MEMORIZE**

When a rule in another file (content-writing, diagram-style, keypoints, …) seems to conflict
with this, this principle wins. When in doubt about a wording, layout, or ordering choice, ask:
*does this help someone scan-see-recall-speak faster, or does it just add more to read?*

## One central idea per page

Don't try to teach everything about a topic. Every page needs exactly one primary mental model,
and everything on the page reinforces that one idea instead of branching into other facts about
the type/keyword that don't serve it. Examples of a page's one idea: `var` → the compiler infers
the type; `dynamic` → binding is deferred to runtime; `??` → a fallback for null. If a paragraph,
example, or bullet doesn't serve the page's one idea, it's a candidate for a different page (or
for cutting), not a reason to make this one longer.

## Required information hierarchy

**Updated 2026-09-16 for the interview-question-bank rebuild** — this order applies to every
*new* page (Phase 7 of a track's rebuild); the 14 live C# Basic pages are frozen under the
previous version of this hierarchy and are not retrofitted. Full spec in
[content-writing.md](content-writing.md), this is the summary:

1. Title / hook, **plus a compact "❓ Interview Question" line right under it** stating the
   literal phrasing an interviewer would use — the hook title stays (it's already proven across
   14 pages and earns its own spot), the literal question is new and sits alongside it, not a
   replacement for it.
2. Why it matters — collapsed
3. 🔥 5-Second Recall — always visible
4. 🧠 Visual Mental Model — always visible
5. ⚠️ Common Trap — always visible, compact card
6. 🔄 Likely Follow-up — always visible, compact card, **new.** A different thing from the Trap:
   Trap is a misconception the candidate might state; Follow-up is the next question the
   interviewer is likely to ask right after the first answer. Keep both compact so the two don't
   make the page feel heavier — see [content-writing.md](content-writing.md) for the exact box
   spec and a worked example.
7. 🎯 Say this in the interview — always visible
8. 📖 Explanation — collapsed by default
9. 💻 Code — collapsed by default
10. 🌍 Real-world / Scenario — collapsed by default. Broadened from "real-world example": for a
    topic where a scenario/architecture-depth question is real (see
    [interview-depth-and-priority.md](interview-depth-and-priority.md)), this section leads with
    that scenario instead of (or alongside) a generic analogy.

**The interview answer moved up.** It used to sit at the very bottom of the page, after every
collapsed section. It's now the seventh always-visible thing, right after Trap and Follow-up —
because "what do I actually say out loud" is exactly as urgent as the recall line, the trap, and
the follow-up, not a wrap-up someone only reaches after reading everything else.

## Content discipline — each section owns one job, nothing is repeated

- The recall section owns the memory trick.
- The visual owns the mental model.
- The trap owns the one misconception.
- The follow-up owns the next question an interviewer would actually ask.
- The interview answer owns the spoken sentence.
- The explanation owns the technical accuracy / depth.
- The code owns the demonstration.
- The real-world/scenario section owns the everyday analogy or the operational scenario.

**Don't restate the same fact across sections just because it's true in more than one place.** A
real gap this caught: an early draft repeated the exact same "compiler decides / runtime
decides / everything can fit" memory trick in the recall box AND again inside the Explanation
prose as a labelled "Memory trick:" line. One canonical statement of a given fact, in the section
that owns it — every other section either builds on it or is silent about it, never restates it.

## Two learning modes, one page

- **⚡ Interview mode (5-30 seconds)** — the always-visible sections only: Recall, Visual, Trap,
  Follow-up, Interview answer. This is the mode most visits are actually in.
- **📚 Understand mode (2-10 minutes)** — opening Explanation, Code, and Real-world for whoever
  wants the depth. This mode exists for the first time someone learns a topic, or the rare deep
  dive — never assume it's the default mode a visit is in.

## Visual hierarchy — not every element competes for attention

Priority order, strongest visual weight to quietest:

1. 🔥 Recall
2. 🧠 Visual Mental Model
3. ⚠️ Common Trap
4. 🔄 Likely Follow-up — same weight class as Trap, both compact
5. 🎯 Interview answer
6. 📖 Explanation / 💻 Code / 🌍 Real-world/Scenario (once opened) — neutral, quiet cards;
   they're already opted into by the reader, they don't need to compete for attention the way
   the always-visible ones do.

## The 5-second test

Before calling any topic page done: hide the Explanation, Code, and Real-world sections (the
three collapsed ones). Ask — **can someone understand the core idea from just the title, the
recall line, the visual, and the trap?** If not, that's a signal to fix the always-visible four,
not to add more collapsed prose to compensate.

## Color semantics — one meaning per color, site-wide

Use the same color meaning everywhere a diagram, table, or highlight needs one, so the palette
itself becomes a second language the user learns once:

| Color | Means | Typical uses |
|---|---|---|
| Blue (`hl-blue` / `--basic` in diagrams) | compile-time / known / strongly typed | `var`, "compiler decides," compile-time checks |
| Amber (`hl-inter`) | conversion / container / caution / warning | `object`, boxing, casting, the Common Trap box |
| Red (`hl-hot`) | runtime / risk / failure | `dynamic`, runtime exceptions, deferred checks |
| Green (`hl-basic` used sparingly, ✅ in tables) | success / correct result / recommended practice | a correct outcome, a recommended default |
| Purple/indigo (`--accent`, the keypoints box's existing color) | interview / key takeaway / speaking | the "🎯 Say this in the interview" box — already this color site-wide, now named as part of the system |
| Teal (`hl-followup`, new 2026-09-16) | the interviewer's next move | the "🔄 Likely Follow-up" box only — kept visually distinct from the trap's amber so the two compact cards don't blur together |
| Neutral (plain surface, no accent) | explanation / supporting content | Explanation, Code, Real-world — deliberately quiet, see "Visual hierarchy" above |

**Never rely on color alone, and never use color just because a section "needs" one.** Every
colored box in a diagram already carries a text label (see [diagram-style.md](diagram-style.md))
— a color-blind reader must be able to get the same information from the words alone. Color has
to communicate meaning, not decorate.

## Diagrams show a relationship, and the shape changes with the concept

**Don't default to "three boxes" for every topic — choose the diagram type the concept actually
calls for.** Full catalog and worked examples live in [diagram-style.md](diagram-style.md). The
underlying test never changes: the diagram shows a *relationship*, not a re-illustration of the
paragraph next to it.

## Code must demonstrate the distinction, not just the syntax

A code example that's merely *valid* isn't good enough if it doesn't demonstrate the specific
thing this page exists to teach. See "Code must earn its spot" in
[content-writing.md](content-writing.md) for the full rule and a worked before/after example.

## Final quality checklist

Before calling a page finished, all of these should pass:

- **5-second test** — can I recover the concept from Recall + Visual alone?
- **30-second test** — can I explain it using the Interview-answer section alone?
- **2-minute test** — does Explanation + Code hold up to someone actually reading them?
- **Interview test** — would a developer actually say the provided answer out loud, unedited?
- **Mobile test** — readable and usable on a narrow screen, no horizontal scroll, nothing
  shrunk to illegible?
- **Accuracy test** — would a knowledgeable engineer accept the explanation as technically
  sound? (see [accuracy.md](accuracy.md))
- **Noise test** — is anything present that doesn't improve understanding or recall? If yes,
  cut it rather than justify it.
- **Diagram integrity test** — has the automated geometric check in [diagram-style.md](diagram-style.md#mandatory-automated-verification--hand-computed-coordinates-are-not-verification)
  actually been run against the *rendered* page (not just reasoned about from the markup) for
  every `<svg class="topic-diagram">` on it, with zero remaining genuine findings? A page — built
  by the orchestrating session or by any delegated subagent — is not done without this, and a
  subagent's "verified by computing coordinates, couldn't reach a live browser" is not a pass;
  see that section for the incident that made this mandatory rather than advisory.

If any of these fails, fix the page before adding more content to it — more text is almost never
the fix for a failed test above.

## The one-line summary

**Don't make every page look identical. Make every page *think* identically.** Same hierarchy,
same recall system, same color meanings, same two-mode structure — but the visual mental model
itself is chosen per concept, never copy-pasted as a template shape.

## Mobile is a first-class experience, not an afterthought

Never "solve" mobile by shrinking desktop content until it's technically visible but hard to
read. When a diagram or comparison table is authored, check (or at least reason through) how it
degrades on a narrow screen — the fixes are the standard responsive techniques already in
`assets/style.css` (`overflow-x:auto` wrappers on wide tables, `flex-wrap` on multi-box diagrams),
not a special mobile-only rewrite of the content.
