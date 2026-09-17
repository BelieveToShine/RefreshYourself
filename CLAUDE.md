# RefreshYourself — Start Here (auto-loaded every session)

A personal interview-prep and brush-up website. Plain HTML/CSS/JS, no build step, meant to be
opened straight from a browser or hosted on GitHub Pages. Follow the rules below before adding or
editing any page — details live in the linked files, read the relevant one for the task at hand.

## What this project is

A set of "tracks" — as of 2026-09-16: C#, OOP, .NET/ASP.NET Core, Web API, and EF Core are
through all 7 rebuild phases (see below); SQL and Azure have a Phase 1 taxonomy awaiting Phase
2+; AI/React/DSA are untouched. More can be added later. Each track has three tiers — **Basic →
Intermediate → Advanced** (question *type*, not difficulty or seniority — see
[`docs/rules/interview-depth-and-priority.md`](docs/rules/interview-depth-and-priority.md)).
Each topic is one page: a **diagram**, a **simple-words explanation**, and a **key points to
remember** box. Built for quick brush-up before an interview, not for deep study — see
[`docs/rules/content-writing.md`](docs/rules/content-writing.md) for exactly what that means.

## Mandatory workflow — the 7-phase pipeline

**Every track goes through 7 phases before any page is built** — see
[`docs/superpowers/specs/README.md`](docs/superpowers/specs/README.md) for the full definition
of each phase, and [`docs/rules/build-process.md`](docs/rules/build-process.md) for exactly how
Phase 7 gets executed (subagent dispatch, machine-sharing safety rules, mandatory two-pass
diagram verification, site-wiring checklist). This supersedes any older, simpler per-page
workflow this file may have described in the past — the 7-phase pipeline is the only current
process, locked with the user 2026-09-15/16.

0. **Read the whole-project picture first** — [`docs/refreshyourself-overview.md`](docs/refreshyourself-overview.md).
   What's built vs. planned, every track/tier, and which phase each track is currently at.
1. **Know the structure** — [`docs/rules/content-structure.md`](docs/rules/content-structure.md).
   Folder layout, URL/file naming, `data-root`, what an index page contains vs. a topic page.
2. **Phases 1–6 are the orchestrating session's own work** (taxonomy → review/dedupe → group
   into pages → tier → priority → final roadmap), written to
   `docs/superpowers/specs/<track>/roadmap.md` *before* any page gets built — see
   [`docs/rules/build-process.md`](docs/rules/build-process.md) for the exact shape to follow
   and which files to scaffold first.
3. **Know the writing rules** — [`docs/rules/content-writing.md`](docs/rules/content-writing.md).
   Simple words, the "why it matters" bullets, the real-world example, the exact topic-page
   template.
4. **Know the diagram style** — [`docs/rules/diagram-style.md`](docs/rules/diagram-style.md).
   Hand-authored inline SVG, small and crisp, no overlap, purposeful animation, and the
   **mandatory automated verification script** — a page is not done until that exact script has
   been run against the live rendered page with `issueCount: 0`.
5. **Know the visual style** — [`docs/rules/visual-style.md`](docs/rules/visual-style.md). Fonts,
   `.hl` highlight spans, logos, colourful breadcrumb pills, eyebrow badges.
6. **Never write a claim you're not actually sure is true** — [`docs/rules/accuracy.md`](docs/rules/accuracy.md).
   Outranks every other writing rule. Read it before writing any diagram, explanation, code
   snippet, or key point.
7. **Do the work (Phase 7)** — [`docs/rules/build-process.md`](docs/rules/build-process.md) is
   the step-by-step for this phase specifically: dispatching page-writing subagents, the safety
   rules for a machine other sessions are also using, the independent verification sweep, and
   the site-wiring checklist (nav-index.js, search-index.js, roadmap.html, tier/track index
   pages, root tile, spec docs) that a page/track isn't done without.

## Rules

Full action → rule lookup table: [`docs/rules/README.md`](docs/rules/README.md). Quick list:

- **Track roadmaps/catalog (what's built vs. planned):** [`docs/superpowers/specs/README.md`](docs/superpowers/specs/README.md)
- **Structure:** [`docs/rules/content-structure.md`](docs/rules/content-structure.md)
- **Writing & ordering:** [`docs/rules/content-writing.md`](docs/rules/content-writing.md)
- **Accuracy (never guess):** [`docs/rules/accuracy.md`](docs/rules/accuracy.md)
- **Diagrams:** [`docs/rules/diagram-style.md`](docs/rules/diagram-style.md)
- **Visual style (fonts, highlights, logos, breadcrumb):** [`docs/rules/visual-style.md`](docs/rules/visual-style.md)
- **Global search:** [`docs/rules/search.md`](docs/rules/search.md)
- **"Say this in the interview" box:** [`docs/rules/keypoints.md`](docs/rules/keypoints.md)
- **Tier/priority assignment (Phase 4/5):** [`docs/rules/interview-depth-and-priority.md`](docs/rules/interview-depth-and-priority.md)
- **Running Phase 7 itself (subagents, safety, verification, wiring):** [`docs/rules/build-process.md`](docs/rules/build-process.md)

## Quick reminders

- **Never write a technical claim you're not actually confident is true** — no invented specifics
  to sound authoritative. See [`docs/rules/accuracy.md`](docs/rules/accuracy.md). This outranks
  every other content rule.
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
