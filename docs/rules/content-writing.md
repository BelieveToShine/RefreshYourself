# Rule: Writing a Topic Page

## Workflow: list the full topic roadmap first, implement pages one at a time

For any tier, **write out the full set of topic titles before building a single page.** The tier
index (`<track>/<tier>/index.html`) always shows the *complete* planned list — 14, 40, 100
questions, however many real interview topics that tier actually has — not just the ones that
already have a finished page. This is deliberate: the roadmap has to be visible up front so
progress is obvious and nothing gets forgotten.

- A topic with a finished page is a normal linked row (its file exists, hot-first order, numbered
  to match position — see [content-structure.md](content-structure.md)).
- A topic that's listed but not yet written is a **`.topic-row.planned`** row: no link (it's a
  `<span class="ttitle">`, not an `<a>`), muted, tagged `<span class="badge planned">📝 Coming
  soon</span>` instead of Hot/Normal. It still occupies its real numbered slot in hot-first order
  — a planned Hot topic still sits above a written Normal one.
- Numbering never gets reshuffled just because a topic isn't written yet — the number is the
  topic's permanent position in the hot-first list, written or not.
- Group every 10 topics (written + planned together) into one `.qgroup` accordion — see
  [content-structure.md](content-structure.md). The first group defaults `open`, later groups
  default closed.
- Once a page is written, flip that row from `planned` to a real link — nothing else about the
  list's order or grouping changes.

Locked decisions from the working session that set this project up. Don't re-derive them.

## Ordering: hot topics before normal topics — everywhere

- On **every** tier index page, in **every** track: list the hot/most-asked topics first, then
  the normal ones after. This was called out twice by the user as a rule for the whole site, not
  just one track.
- "Hot" = commonly asked in real interviews / comes up again and again. "Normal" = good to know,
  less likely to be the actual question asked.
- Mark each row on the tier index with a badge: `🔥 Hot` or `Normal`. The file number
  (`1.html`, `2.html`, …) always matches its position in this hot-first order — see
  [content-structure.md](content-structure.md).
- Within Basic specifically, this matters most — the original note says basic/hot topics have to
  be covered before moving on to intermediate/advanced content at all.

## Words: very simple, no jargon left unexplained

- Write like you're explaining it to someone on their first week, not to another senior
  engineer. Short sentences. Common words.
- If a technical term is genuinely unavoidable (heap, stack, virtual, override, …), it must
  appear **inside the diagram**, labelled plainly — don't just drop the term into a sentence and
  move on.
- No filler, no "in the world of software engineering…" throat-clearing. Get to the point in the
  first sentence.

## The topic page template (every `.html` under `<track>/<tier>/`)

**Read [product-principle.md](product-principle.md) first.** This site is a visual
interview-recall system, not a documentation site — SCAN → SEE → RECALL → SPEAK, not
READ → STUDY → MEMORIZE. This is the template for **new pages under the interview-question-bank
rebuild** (locked 2026-09-15/16); the 14 live C# Basic pages were written under the previous
version and are frozen, not retrofitted — see [tier-navigation.md](tier-navigation.md)'s note on
what "frozen" means in practice.

Six things earn a permanent, always-visible spot: the "❓ Interview Question" line, the "🔥 Easy
interview recall" line, the "🧠 Visual Mental Model" diagram, the "⚠️ Common Trap" warning, the
"🔄 Likely Follow-up" box, and the "🎯 say this in the interview" box — together they should let
someone refresh the concept in 30-60 seconds without opening a single toggle. Everything else
that adds depth — why it matters, the prose explanation, the code, the real-world/scenario
material — is genuinely useful but is not what someone glances at for a 5-minute brush-up, so
it's collapsed by default behind a `<details class="… toggle">` (see `assets/style.css`) and
opened only if they want more. Don't make any of the always-visible pieces a toggle, and don't
leave the collapsed ones permanently expanded — the collapse is the point.

**The interview answer sits early, not at the bottom.** Recall → Visual Model → Trap →
Follow-up → Interview line is the fast path — all five always visible, in that order, before a
single collapsed section. Explanation, Code, and Real-world/Scenario come after; they're for
whoever wants to go deeper, not part of the 30-second pass.

**Audience note for every new page:** written for an experienced professional anywhere from 3+
years through senior/lead/architect/principal — never framed as a beginner tutorial, and never
capped at junior/mid-level depth just because a topic is "basic." See
[interview-depth-and-priority.md](interview-depth-and-priority.md) for the full tier/priority
definition this applies against.

**No section repeats a fact another section already owns** — see "Content discipline" in
[product-principle.md](product-principle.md). The recall line states the memory trick once; the
Explanation should build on it (add the *why*), never restate it as its own "Memory trick:" line.

In this exact order:

1. **Breadcrumb** — `Home / <Track> / <Tier> / <Topic title>`, each part a link except the last.
2. **Title — must contain a hook or tension, never a flat descriptive label.** A title fails this
   test if you could prefix it with "Understanding" and it would read exactly the same way —
   that's the tell for a weak title. Compare:
   - Weak: *"Understanding nullable types"* → Strong: `int?` — what happens when an `int` can
     be nothing?
   - Weak: *"Understanding enums"* → Strong: `enum` — turn magic numbers into named choices.
   - Weak: *"Giving a fixed set of options real names"* (a real title this project shipped,
     just as weak as "Understanding enums" despite not using that word) → same fix as above.

   Two ways to build the hook, pick whichever fits the topic:
   - **Lead with the actual keyword/type**, in code font, then a tension clause — the keyword
     itself becomes part of the hook (`int?`, `enum`, `namespace`). This works best for a
     single-concept topic.
   - **Pose it as the literal question an interviewer would ask**, or name the specific
     misconception/consequence the topic resolves (`"Same object, or just same content?"`,
     `"Why one slows a loop and the other doesn't"`). This works best for a comparison topic.

   Never a claim that overstates the actual comparison (e.g. don't title a page "only one is
   risky" when more than one option genuinely carries risk — see [accuracy.md](accuracy.md)).
   Prefer a framing tied to what an interviewer is actually probing for (e.g. "know who checks
   your code" for a compile-time-vs-runtime topic) over a vaguer contrast. Highlight the one or
   two contrasting words with `.hl` (see [visual-style.md](visual-style.md)).

   **This rule was written once, applied to the one page being fixed at the time, and then
   silently skipped on every other page written afterward** — a real gap, caught only when
   several pages were reviewed side by side later. When a rule like this lands, sweep every
   existing page against it in the same pass, not just the page that prompted it — see the
   verification step in [product-principle.md](product-principle.md).
3. **"❓ Interview Question" — always visible, never a toggle, new for the rebuild.** A single
   compact line right under the H1, `<p class="interview-q">`, stating the literal question an
   interviewer would ask out loud — plain sentence, no hook/wordplay (that's the H1's job). For
   `var` vs. `dynamic` vs. `object`, the H1 stays the existing hook title
   ("`var` vs. `dynamic` vs. `object` — know who checks your code") and this line reads *"What is
   the difference between `var`, `dynamic`, and `object`?"* — the two aren't the same sentence
   and shouldn't be; the H1 hooks attention, this line states the actual thing to answer. Skip
   this line only if the H1 already *is* essentially the literal question verbatim (rare — most
   hook titles are punchier than the literal phrasing on purpose).
4. **"Why it matters" — collapsed toggle, closed by default.** `<details class="topic-hook
   toggle">` with a `<summary>` (not a plain label — the summary IS the clickable toggle). Full
   rules for both shapes (plain bullets for a single-concept topic vs. the Problem → Solution
   why-grid for a topic differentiating multiple named sub-concepts) live in their own dedicated
   file: [why-it-matters.md](why-it-matters.md) — read it before writing or editing this box,
   including its rule on picking the why-grid's column count deliberately rather than defaulting
   to one layout every time.
5. **"🔥 Easy interview recall" — always visible, never a toggle.** `<div class="recall">` sitting
   right after "Why it matters." Full rules for what goes inside it live in
   [interview-recall.md](interview-recall.md) — read it before writing or editing this box.
6. **"🧠 Visual Mental Model" — always visible, never a toggle.** A `<div class="viz-label">🧠
   Visual Mental Model</div>` sits right above the diagram(s), naming the section so the goal is
   explicit: *can someone understand the concept just from looking at the picture for 5 seconds?*
   Inline, placed right next to the part of the explanation it supports — see
   [diagram-style.md](diagram-style.md). Not collected separately at the top or bottom of the
   page. A topic with two distinct halves (e.g. boxing vs. unboxing) gets two small diagrams,
   each beside its own half of the text.
   - **Don't stop at "here's the mechanic" or "here's where it breaks" — also show "here's when
     you'd actually reach for this."** A real gap from this project: the `==` /
     `.Equals()` / `ReferenceEquals()` page's first diagram only showed the *default*, everything-
     returns-false case — it never showed a case where each one is genuinely the right tool, or
     said which to reach for. If a topic has a real practical-use angle (a lot of them do), give
     it its own small diagram/panel, not just a line buried in prose.
   - **The 5-second test:** hide everything except the label and the diagram. If the main idea
     still comes through, the diagram works. If not, simplify or redesign it — don't compensate
     with more surrounding prose.
7. **"⚠️ Common Trap" — always visible, never a toggle, compact.** `<div class="trap">` sitting
   right after the diagram and before the follow-up box. One misconception or interview
   mistake, stated as a single memorable line — never a list. This moved up from the bottom of
   the page: the single wrong-turn a candidate is likely to make is exactly as urgent as the
   recall line and the diagram, not a footnote. Full rules live in
   [common-trap.md](common-trap.md) — read it before writing or editing this box.
8. **"🔄 Likely Follow-up" — always visible, never a toggle, compact, new for the rebuild.**
   `<div class="followup">` sitting right after the Trap. Different job from the Trap: the Trap
   is a misconception the *candidate* might state; the Follow-up is the question the
   *interviewer* is likely to ask right after hearing a correct first answer. One question, one
   short answer — same "single memorable line" discipline as the Trap, not a list, not a
   paragraph.
   - Structure: `<p class="ftline">` holding a bolded question, then a short plain-sentence
     answer — e.g. for `var`: *"So is `var` strongly typed?"* → *"Yes — the compiler still locks
     in a concrete type at compile time; only the keyword is inferred, not the type-safety."*
   - Pull this from the concept's own **Comparison** or **Pitfall** question in the taxonomy/
     roadmap where one exists — don't invent a generic "tell me more" follow-up; it should be a
     question a real interviewer plausibly asks next, specific to this concept.
   - Skip this box only if the concept genuinely has no natural follow-up beyond the Trap
     (rare) — don't pad it with a restated version of the Trap or the Say-this line.
9. **"🎯 Say this in the interview" box — always visible, never a toggle.** `<div class="keypoints">`
   sitting right after the Follow-up — moved up from the very bottom of the page for the same
   reason: the spoken answer is core, always-visible content, not a wrap-up. Full rules for what
   goes inside it (lead with one primary spoken sentence, then supporting bullets, every bullet
   highlighting its own main point, plain professional wording, the "when do I use X vs. Y vs. Z"
   pattern) live in their own dedicated file: [keypoints.md](keypoints.md) — read it before
   writing or editing this box.
10. **Explanation — collapsed toggle, closed by default.** `<details class="explain toggle">`
   with `<summary>📖 Explanation</summary>`. Genuinely short even so — 2-3 tight paragraphs, max.
   This was called out directly: early drafts were too long and "didn't give interest to read
   anything." Every sentence should either add a fact or land a memorable phrase — never both
   restate the diagram AND explain it in full prose, and never restate the recall box's memory
   trick as its own line (see "Content discipline" above). Prefer one vivid comparison (a copy
   vs. a set of directions to the same house, a road vs. an off-ramp, …) over a dry definition —
   it's what makes the concept stick. If a paragraph is fighting to stay short, that's the
   diagram's job to carry instead, not a reason to keep the paragraph long.
   - **If the topic is genuinely an X-vs-Y(-vs-Z) question, add a `.cmp-table` comparison
     table** (see `assets/style.css`) — one row per dimension that actually differs (when it's
     decided, who/what checks it, casting cost, the main idea, the risk if you get it wrong),
     one column per option. This was called out directly: "difference table where ever possible
     is needed" — a table someone can scan in three seconds beats a paragraph making the same
     three points in prose. Tie the table's rows back to whatever the title is asking (e.g. a
     "who checks your code" title should have a "member checking" row) so the table pays off the
     title's framing, not just a generic feature list.
   - **If the topic has combined/composite variants (a variant built by combining two simpler
     rules with AND/OR), give each one its own column too — don't stop at the base options.**
     A real gap this caught: the Access Modifiers table only had `private`/`protected`/
     `internal`/`public` — it left out `protected internal` and `private protected` entirely,
     even though the whole point of those two is showing how the base rules combine (one is an
     OR of two boundaries, the other is an AND of the same two). Omitting a composite variant
     from the table hides the exact thing it exists to teach.
   - **Never include a row whose real rule doesn't actually match the column header's framing.**
     A real gap this caught: a table asked "crosses the class hierarchy?" and answered "✅ yes,
     any class" for `internal` — but `internal`'s actual rule has nothing to do with class
     hierarchy at all (it's purely an assembly-boundary check, independent of inheritance); the
     row happened to produce a true-ish answer while testing the wrong axis. Before writing a
     row, state the option's *actual* rule in one sentence and check the row's question is
     really asking about that rule — not a related-sounding but different one.
   - **Write like the crispest possible answer, not a textbook paragraph.** Bold the term being
     defined, keep sentences short, and prefer "X does A. Y does B." over "Whereas X does A, Y on
     the other hand does B." This was called out directly against a real complaint: the site's
     prose read as dense and duller than what a good chat assistant produces off the same
     question — the fix is tighter sentences and more scannable structure (bold, short lines,
     tables), not more words.
11. **"💻 See the code" — collapsed toggle, closed by default.** `<details class="codebox toggle">`
   with `<summary>💻 See the code</summary>`, containing one or more `.code-card` blocks (see
   `.code-card` in `assets/style.css` — a **light** card, never a dark console: a `C#` language
   chip, a copy button, `Fira Code`, syntax-colored spans `.kw`/`.ty`/`.str`/`.num` and comment
   spans `.cx-ok`/`.cx-err`/`.cx-cmt`). A small, minimal, realistic snippet showing the actual
   syntax for this topic — the thing someone skims to double-check "is that the right keyword/
   shape" without leaving the page. Sits right after Explanation, before the real-world example.
   - **When a topic has 2-3 distinct points (a comparison, a before/after), use 2-3 small
     `.code-card` blocks instead of one long annotated block — each followed by its own one-line
     `<p class="cx-note">` explanation right underneath it.** This was called out directly against
     a real complaint: a wall of code with everything explained through inline comments reads
     worse than a short worked example per point, each with a plain-English takeaway line right
     after it. One card, one point, one sentence — not a single snippet trying to prove three
     things at once.
   - **Every line that's doing something worth noticing still gets its own short inline
     comment** even inside a small card — not just one comment somewhere in the block. Crisp
     means a few words, not a sentence — `// ❌ Compile-time error`, not "this line fails because
     the compiler already locked in the type."
   - **Code must earn its spot: it has to demonstrate the specific distinction this page exists
     to teach, not just be valid syntax.** A real gap this caught: a `dynamic` example that just
     showed `dynamic b = 10; b = "Hello";` is technically correct but only teaches "dynamic can
     hold different types" — `object` can hold different runtime values too, so it doesn't
     demonstrate what's actually dangerous about `dynamic`. The fix that actually teaches the
     point: `dynamic user = "Sam"; user.Length;` (works) vs. `user.Lenght;` (a typo — compiles
     fine, throws a runtime exception) — now the example proves the exact claim the page is
     making. Before shipping a code card, ask "does running this in my head prove the page's one
     idea, or would it look identical for a different concept?" — if the latter, redesign the
     example.
12. **"🧭 Use Cases" — collapsed toggle, closed by default, optional.** `<details class="usecase
   toggle">`. Only add this when a topic genuinely has 3+ practically distinct real-world
   scenarios worth walking through separately (a single-scenario topic just uses the
   Real-world/Scenario section below instead). Full rules — the Situation → mini-diagram → What
   happens → Remember structure per scenario, the trap-scenario variant, mini-diagram id-safety —
   live in their own dedicated file: [use-cases.md](use-cases.md) — read it before writing or
   editing this panel.
13. **"🌍 Real-world / Scenario" — collapsed toggle, closed by default.** `<details
   class="realworld toggle">` with `<summary>🌍 Real-world example</summary>` (keep the same
   summary text/emoji unless the page is scenario-led — see below). Two shapes, pick whichever
   the concept actually earns, per
   [interview-depth-and-priority.md](interview-depth-and-priority.md):
   - **Everyday analogy** (the original shape) — one relatable comparison (a photocopy vs. a
     shared doc link, a locker vs. a mailbox, …) that makes the concept click. 2-3 sentences,
     never a story. If you can't state it in one breath, it's too elaborate.
   - **Operational scenario** (new — use when the roadmap already gave the concept a Scenario or
     Architecture question, e.g. "your service is leaking database connections under load") —
     state the situation in one line, then the short, direct answer. Still not a worked-through
     story with steps; it's the same recall-first discipline as everything else on the page,
     just applied to a real-world problem instead of an analogy.
   - A page can use either shape or both (analogy first, scenario after) — never neither; every
     page still ends with something in this section.
14. **Prev / Next** — links to the previous and next topic in this tier's hot-first order, plus a
   link back up to the tier index. First topic has no "prev", last has no "next." **If the
   neighbouring topic is still `planned` (not written), don't link to its not-yet-existing file**
   — show its title muted, pointing at the tier index instead, labelled "(coming soon)."

## What a topic page is *not*

- Not a full tutorial or a textbook chapter — this is a brush-up site. If an explanation is
  running long, that's a sign to lean harder on the diagram and trim the prose, not to add more
  prose.
- Not multiple topics on one page, even closely related ones — one topic, one page, one entry on
  the tier index (see [content-structure.md](content-structure.md)).

## Tier index page wording

- Tier meaning is written specific to the track, not a generic label. E.g. for C#, "Basic" might
  read "the questions that come up in almost every interview"; for OOP's, "Basic" might read "the
  four pillars and the everyday keywords." Say what the tier actually means for *this* track.
