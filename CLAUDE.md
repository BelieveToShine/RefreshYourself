# RefreshYourself — Start Here (auto-loaded every session)

A personal interview-prep and brush-up website. Plain HTML/CSS/JS, no build step, meant to be
opened straight from a browser or hosted on GitHub Pages. Follow the rules below before adding or
editing any page — details live in the linked files, read the relevant one for the task at hand.

## What this project is

A set of "tracks" — as of 2026-10-10 **all 17 tracks are through all 7 phases, 796 pages written** (541 original + 108 gap pages added 2026-10-07 + 59 LINQ pages added 2026-10-10 + 88 Java pages added 2026-10-10):
C# (60), LINQ (59), OOP (26), .NET/ASP.NET Core (38), Web API (36), EF Core (35), SQL (50), Azure (49), AWS
(49), React (47), Angular (46), Python (47), AI (52), DSA (33), JavaScript (42), HTML & CSS (39), Java (88).
Per-track detail: [`docs/superpowers/specs/README.md`](docs/superpowers/specs/README.md). More
tracks can be added later. (This line is machine-checked against the overview by
`scripts/check-site.js` — keep it current.) Each track has three tiers — **Basic →
Intermediate → Advanced** (question *type*, not difficulty or seniority — see
[`docs/rules/interview-depth-and-priority.md`](docs/rules/interview-depth-and-priority.md)).
Each topic is one page: a **diagram**, a **simple-words explanation**, and a **key points to
remember** box. Built for quick brush-up before an interview, not for deep study — see
[`docs/rules/content-writing.md`](docs/rules/content-writing.md) for exactly what that means.

## New to the repo? Read in this order

1. This file → 2. [`docs/rules/product-principle.md`](docs/rules/product-principle.md) (the lens
for every rule — read first, always) → 3. [`docs/rules/site-architecture.md`](docs/rules/site-architecture.md)
(folder map, page anatomy, "I changed X — what else must change?" table) → 4.
[`docs/refreshyourself-overview.md`](docs/refreshyourself-overview.md) (what's built) → 5. the
rule file for the action you're about to take ([`docs/rules/README.md`](docs/rules/README.md)).

## Run, deploy, verify, commit

- **Run locally:** `npx serve -l 5847 .` (the `refresh-yourself` entry in `.claude/launch.json`),
  or open `index.html` directly — works over `file://` too. Use another port if a different
  session is serving.
- **Deploy:** GitHub Pages, automatically on every push to `main` (`.github/workflows/static.yml`
  uploads the repo root). `main` is the only live branch; `v1` and the `claude/*` remote branches
  are older snapshots/pipeline branches — don't build on them without checking.
- **Verify before any commit:** `node scripts/check-site.js` (zero `ERROR`s) — checks page
  wiring (search/nav indexes, tier index, roadmap), links, doc counts, rule-file indexing.
  Diagrams still need the live-browser script in [`docs/rules/diagram-style.md`](docs/rules/diagram-style.md).
- **Docs must be updated in the same commit as the change** — a git hook
  (`node scripts/install-hooks.js`, once per clone) and a Claude Code hook in
  `.claude/settings.json` block commits that skip it. See
  [`docs/rules/pre-commit-docs-sync.md`](docs/rules/pre-commit-docs-sync.md).

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
- **"Why it matters" box (plain bullets or the Problem→Solution why-grid):** [`docs/rules/why-it-matters.md`](docs/rules/why-it-matters.md)
- **"🧭 Use Cases" panel (optional, multi-scenario topics only):** [`docs/rules/use-cases.md`](docs/rules/use-cases.md)
- **Tier/priority assignment (Phase 4/5):** [`docs/rules/interview-depth-and-priority.md`](docs/rules/interview-depth-and-priority.md)
- **Running Phase 7 itself (subagents, safety, verification, wiring):** [`docs/rules/build-process.md`](docs/rules/build-process.md)
- **Product lens (read first):** [`docs/rules/product-principle.md`](docs/rules/product-principle.md)
- **Site map & change → files table:** [`docs/rules/site-architecture.md`](docs/rules/site-architecture.md)
- **Docs-before-commit enforcement:** [`docs/rules/pre-commit-docs-sync.md`](docs/rules/pre-commit-docs-sync.md)
- **"🔥 Easy interview recall" / "⚠️ Common Trap" boxes:** [`docs/rules/interview-recall.md`](docs/rules/interview-recall.md), [`docs/rules/common-trap.md`](docs/rules/common-trap.md)
- **Link hover / chips / pills:** [`docs/rules/link-hover.md`](docs/rules/link-hover.md) · **Back button:** [`docs/rules/back-navigation.md`](docs/rules/back-navigation.md) · **Tier sidebar:** [`docs/rules/tier-navigation.md`](docs/rules/tier-navigation.md)
- **Gap-hunting (Phase 2):** [`docs/rules/gap-hunting.md`](docs/rules/gap-hunting.md) · **Retrofitting Why/Use Cases:** [`docs/rules/retrofit-why-usecases.md`](docs/rules/retrofit-why-usecases.md)
- **Reporting commits in chat (name branch + hash):** [`docs/rules/reporting.md`](docs/rules/reporting.md)

## Quick reminders

- **Never write a technical claim you're not actually confident is true** — no invented specifics
  to sound authoritative. See [`docs/rules/accuracy.md`](docs/rules/accuracy.md). This outranks
  every other content rule.
- **Teaching order within a tier, most-asked (🔥) topics as early as dependencies allow; every row carries its 🔥/⭐/🧠 badge** (rule amended 2026-10-06 — see [`docs/rules/content-writing.md`](docs/rules/content-writing.md#ordering-priority-badge--teaching-order-amended-2026-10-06)). Numbering is permanent.
- **List the full roadmap on the tier index before writing pages** — planned-but-unwritten rows
  are shown, muted, unlinked, tagged 📝. Numbering is permanent from the moment a topic is listed.
- **Every topic page needs at least one diagram**, inline in that page's own HTML (never a
  separate `.svg` file), placed right next to the part of the explanation it supports.
- **Very simple words only**, and genuinely short — 2-3 tight paragraphs. "Why it matters" is
  2-3 bullets for a single-concept topic, or a Problem→Solution why-grid (one card per
  differentiated sub-concept) for a topic that's really comparing several named things — see
  [`docs/rules/why-it-matters.md`](docs/rules/why-it-matters.md); never a flowing paragraph
  either way. One real-world example, one breath long.
- **Any new small inline label+text pattern (a badge, a tag) must render with an actual visible
  gap** — verify by measuring the rendered pixel gap in a live browser check, not by eyeballing a
  screenshot; two bare adjacent inline elements with no whitespace between them in the HTML
  source render with zero gap regardless of CSS `gap`/`margin`. See
  [`docs/rules/why-it-matters.md`](docs/rules/why-it-matters.md#markup-discipline-the-tag-and-its-text-are-always-two-separate-dedicated-spans).
- **A grid/multi-card layout's column count is a judgment call made by actually rendering it at
  real content length** — never a fixed default applied without looking, and never left to
  `auto-fit` guessing either (it can silently orphan a trailing card). See
  [`docs/rules/why-it-matters.md`](docs/rules/why-it-matters.md#column-count-is-a-judgment-call-not-a-fixed-default).
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
