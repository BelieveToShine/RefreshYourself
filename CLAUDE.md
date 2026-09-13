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
   Folder layout, URL/file naming, what an index page contains vs. a topic page.
2. **Know the writing rules** — [`docs/rules/content-writing.md`](docs/rules/content-writing.md).
   Simple words only, hot-topics-first ordering, the exact template every topic page follows.
3. **Know the diagram style** — [`docs/rules/diagram-style.md`](docs/rules/diagram-style.md).
   Hand-authored inline SVG, small and crisp, matches the visual language of the LeadHunter
   architecture diagrams but scoped to one concept per page.
4. **Do the work** — add/edit pages following those three docs.
5. **Update the tier index** — a new topic page is not done until it's linked from its tier's
   `index.html`, in the correct hot-vs-normal position.

## Rules

- **Structure:** [`docs/rules/content-structure.md`](docs/rules/content-structure.md)
- **Writing & ordering:** [`docs/rules/content-writing.md`](docs/rules/content-writing.md)
- **Diagrams:** [`docs/rules/diagram-style.md`](docs/rules/diagram-style.md)

## Quick reminders

- **Hot topics before normal topics, in every tier, in every track.** No exceptions — this was
  called out twice by the user.
- **Every topic page needs at least one diagram**, and the diagram alone should be enough to
  recall the concept — the diagram is the brush-up, the text is backup.
- **Very simple words only.** No jargon that needs its own explanation. If a term is unavoidable
  (e.g. "heap"), the diagram shows it, don't just name-drop it in prose.
- **Small, elegant diagrams** — 2 to 5 small boxes/zones, not a full architecture diagram. If a
  concept needs more than that to show clearly, split it into two small diagrams rather than one
  crowded one.
- **Never commit, push, or open a PR without being asked that turn** — same rule as every other
  repo this user works in. Ask once the requested pages are done.
- Plain HTML/CSS/JS only — no framework, no build step. One shared stylesheet
  (`assets/style.css`), one shared script (`assets/site.js`) for the mobile nav toggle only.

## Adding rules

When a new convention comes up mid-session, add it to the right file above — never leave it only
in chat. This file (and `docs/`) exists so a future session never has to ask "how do we structure
this" again.
