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

**The goal of this page is quick refreshment, not study.** Two things earn a permanent, always-
visible spot: the diagram and the "say this in the interview" box. Everything else that adds
depth — why it matters, the prose explanation, the real-world example — is genuinely useful but
is not what someone glances at for a 5-minute brush-up, so it's collapsed by default behind a
`<details class="… toggle">` (see `assets/style.css`) and opened only if they want more. Don't
make the diagram or the keypoints box a toggle, and don't leave the other three permanently
expanded — the collapse is the point.

In this exact order:

1. **Breadcrumb** — `Home / <Track> / <Tier> / <Topic title>`, each part a link except the last.
2. **Title** — short and punchy, the interview question in as few words as possible (e.g. "Value
   or Reference? What's really being copied" rather than a textbook heading). Highlight the one
   or two contrasting words with `.hl` (see [visual-style.md](visual-style.md)).
3. **"Why it matters" — collapsed toggle, closed by default.** `<details class="topic-hook
   toggle">` with a `<summary>` (not a plain label — the summary IS the clickable toggle).
   2-3 short bullets inside, never a paragraph, never article prose: what real bug/situation this
   explains, when it's actually useful to know, and (only if genuinely true) that it's a common
   interview opener.
4. **Diagram(s) — always visible, never a toggle.** Inline, placed right next to the part of the
   explanation they support — see [diagram-style.md](diagram-style.md). Not collected separately
   at the top or bottom of the page. A topic with two distinct halves (e.g. boxing vs. unboxing)
   gets two small diagrams, each beside its own half of the text.
   - **Don't stop at "here's the mechanic" or "here's where it breaks" — also show "here's when
     you'd actually reach for this."** A real gap from this project: the `==` /
     `.Equals()` / `ReferenceEquals()` page's first diagram only showed the *default*, everything-
     returns-false case — it never showed a case where each one is genuinely the right tool, or
     said which to reach for. If a topic has a real practical-use angle (a lot of them do), give
     it its own small diagram/panel, not just a line buried in prose.
5. **Explanation — collapsed toggle, closed by default.** `<details class="explain toggle">`
   with `<summary>📖 Explanation</summary>`. Genuinely short even so — 2-3 tight paragraphs, max.
   This was called out directly: early drafts were too long and "didn't give interest to read
   anything." Every sentence should either add a fact or land a memorable phrase — never both
   restate the diagram AND explain it in full prose. Prefer one vivid comparison (a copy vs. a
   set of directions to the same house, a road vs. an off-ramp, …) over a dry definition — it's
   what makes the concept stick. If a paragraph is fighting to stay short, that's the diagram's
   job to carry instead, not a reason to keep the paragraph long.
6. **"🌍 Real-world example" — collapsed toggle, closed by default.** `<details class="realworld
   toggle">` with `<summary>🌍 Real-world example</summary>`. One relatable, everyday analogy (a
   photocopy vs. a shared doc link, a locker vs. a mailbox, …) that makes the concept click — 2-3
   sentences, never a story or a worked scenario. If you can't state the analogy in one breath,
   it's too elaborate — simplify it, don't explain it further.
7. **"Key Points to Remember" box — always visible, never a toggle.** Always the last thing on
   the page, right before Prev/Next. Full rules for what goes inside it (every bullet must
   highlight its own main point, plain professional wording, the "when do I use X vs. Y vs. Z"
   pattern, multi-clause bullets) live in their own dedicated file:
   [keypoints.md](keypoints.md) — read it before writing or editing this box.
7. **Prev / Next** — links to the previous and next topic in this tier's hot-first order, plus a
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
