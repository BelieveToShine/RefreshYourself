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

In this exact order:

1. **Breadcrumb** — `Home / <Track> / <Tier> / <Topic title>`, each part a link except the last.
2. **Title** — short and punchy, the interview question in as few words as possible (e.g. "Value
   or Reference? What's really being copied" rather than a textbook heading). Highlight the one
   or two contrasting words with `.hl` (see [visual-style.md](visual-style.md)).
3. **"Why it matters" — 2-3 short bullets, never a paragraph.** Never open by restating the
   mechanic (that's what the diagram is for) and never write it as article prose — a bullet list
   under a `Why it matters` label (see `.topic-hook` in `assets/style.css`), each bullet a
   fragment, not a full sentence with a subordinate clause. Cover: what real bug/situation this
   explains, when it's actually useful to know, and (only if genuinely true) that it's a common
   interview opener — don't stretch that last one into every topic's bullet list if it isn't
   actually one of the most-asked questions.
4. **Diagram(s), inline, placed right next to the part of the explanation they support** — see
   [diagram-style.md](diagram-style.md). Not collected separately at the top or bottom of the
   page. A topic with two distinct halves (e.g. boxing vs. unboxing) gets two small diagrams, each
   beside its own half of the text.
5. **Explanation in simple words, and genuinely short — 2-3 tight paragraphs, max.** This was
   called out directly: early drafts were too long and "didn't give interest to read anything."
   Every sentence should either add a fact or land a memorable phrase — never both restate the
   diagram AND explain it in full prose. Prefer one vivid comparison (a copy vs. a set of
   directions to the same house, a road vs. an off-ramp, …) over a dry definition — it's what
   makes the concept stick. If a paragraph is fighting to stay short, that's the diagram's job to
   carry instead, not a reason to keep the paragraph long.
6. **"🌍 Real-world example"** — one short callout (see `.realworld` in `assets/style.css`),
   between the explanation and the key-points box. One relatable, everyday analogy (a photocopy
   vs. a shared doc link, a locker vs. a mailbox, …) that makes the concept click — 2-3 sentences,
   never a story or a worked scenario. If you can't state the analogy in one breath, it's too
   elaborate — simplify it, don't explain it further.
7. **"Key Points to Remember" box** — always the last thing on the page, 3–6 bullets max, styled
   as small chip-cards (see `.keypoints` in `assets/style.css`), not a plain sentence list.
   - **Each bullet is a line you'd actually say out loud in the interview** — 5-12 words, not a
     full explanatory sentence. Compress, don't repeat the explanation in other words.
   - **Highlight the one keyword per bullet an interviewer is listening for**, using the same
     `.hl` colour that matched it in the diagram/explanation (see
     [visual-style.md](visual-style.md)) — e.g. `<span class="hl hl-blue">Value = copy.</span>`
   - Heading reads "🎯 Say this in the interview," not a generic "Key Points" label — it's a
     cue for what to say, not a study summary.
   - **A bullet with two distinct clauses (two lists, two outcomes) goes on two lines inside the
     card** — wrap each half in `<span class="kp-line">...</span>` rather than letting it run on
     and wrap mid-sentence. Real example: `int/bool/double/struct → value` and
     `class/array/string → reference` are two `.kp-line`s in one `<li>`, not one long line.
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
