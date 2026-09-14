# RefreshYourself — Start Here (auto-loaded every session)

A personal interview-prep and brush-up website. Plain HTML/CSS/JS, no build step, meant to be
opened straight from a browser or hosted on GitHub Pages. Follow the rules below before adding or
editing any page — details live in the linked files, read the relevant one for the task at hand.

## What this project is

A set of "tracks" (C#, OOP's, .NET Framework, SQL, React, DSA — more can be added later). Each
track has three tiers — **Basic → Intermediate → Advanced**. Each tier is a list of interview
topics. Each topic is one page: a **diagram**, a **simple-words explanation**, and a **key points
to remember** box. Built for quick brush-up before an interview, not for deep study — see
[`docs/rules/content-writing.md`](docs/rules/content-writing.md) for exactly what that means.

## Mandatory workflow

1. **Know the structure** — [`docs/rules/content-structure.md`](docs/rules/content-structure.md).
   Folder layout, URL/file naming, `data-root`, what an index page contains vs. a topic page.
2. **List the topic roadmap before writing any page** — [`docs/rules/content-writing.md`](docs/rules/content-writing.md).
   A tier index shows every planned topic (written or not) grouped in tens, hot-first. Decide the
   full list for that tier first; implement pages one at a time after.
3. **Know the writing rules** — same file. Simple words, the "why it matters" bullets, the
   real-world example, the exact topic-page template.
4. **Know the diagram style** — [`docs/rules/diagram-style.md`](docs/rules/diagram-style.md).
   Hand-authored inline SVG, small and crisp, no overlap, purposeful animation.
5. **Know the visual style** — [`docs/rules/visual-style.md`](docs/rules/visual-style.md). Fonts,
   `.hl` highlight spans, logos, colourful breadcrumb pills, eyebrow badges.
6. **Do the work** — add/edit pages following those docs.
7. **Update the tier index row** (flip `planned` → a real link) **and** add the page to
   [`assets/search-index.js`](assets/search-index.js) — see
   [`docs/rules/search.md`](docs/rules/search.md). A topic page is not done until both happen.

## Rules

- **Structure:** [`docs/rules/content-structure.md`](docs/rules/content-structure.md)
- **Writing & ordering:** [`docs/rules/content-writing.md`](docs/rules/content-writing.md)
- **Diagrams:** [`docs/rules/diagram-style.md`](docs/rules/diagram-style.md)
- **Visual style (fonts, highlights, logos, breadcrumb):** [`docs/rules/visual-style.md`](docs/rules/visual-style.md)
- **Global search:** [`docs/rules/search.md`](docs/rules/search.md)
- **"Say this in the interview" box:** [`docs/rules/keypoints.md`](docs/rules/keypoints.md)

## Quick reminders

- **Hot topics before normal topics, in every tier, in every track.** No exceptions.
- **List the full roadmap on the tier index before writing pages** — planned-but-unwritten rows
  are shown, muted, unlinked, tagged 📝. Numbering is permanent from the moment a topic is listed.
- **Every topic page needs at least one diagram**, inline in that page's own HTML (never a
  separate `.svg` file), placed right next to the part of the explanation it supports.
- **Very simple words only**, and genuinely short — 2-3 tight paragraphs. "Why it matters" is
  2-3 bullets, not a paragraph. One real-world example, one breath long.
- **Every new written page needs an entry in `assets/search-index.js`** — the site-wide search
  box depends on it.
- **Never commit, push, or open a PR without being asked that turn** — same rule as every other
  repo this user works in. Ask once the requested pages are done.
- Plain HTML/CSS/JS only — no framework, no build step. One shared stylesheet
  (`assets/style.css`), one shared script (`assets/site.js`, global search).

## Adding rules

When a new convention comes up mid-session, add it to the right file above — never leave it only
in chat. This file (and `docs/`) exists so a future session never has to ask "how do we structure
this" again.
