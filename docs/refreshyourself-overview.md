# RefreshYourself — Overview (read this second, after `CLAUDE.md`)

The whole-project picture in one screen: what the site is, who it's for, how a page is shaped, and
where everything lives. It deliberately holds **no page counts and no per-track history** — those
live in one place each, so they can't drift:

- Current counts per track → [`status.md`](status.md) (generated from the files on disk)
- Why each track exists and what was added when → [`track-history.md`](track-history.md)
- Per-track topic catalog (taxonomy, roadmap, tiers, priorities) →
  [`superpowers/specs/README.md`](superpowers/specs/README.md), one folder per track

## What this is

A quick-refresh **interview question bank** (not a tutorial site) for **experienced
professionals — roughly 3+ years through senior, lead, architect and principal**. Never write as
if the reader is a beginner; never cap depth at a junior/mid-level interview. It is built for a
fast brush-up before an interview, not for deep study. Plain HTML/CSS/JS, no build step, hosted
on GitHub Pages.

## The tracks

Twenty tracks in three homepage groups (the exact list and counts are in [`status.md`](status.md)):

- **Core backend path**, in order: C# → LINQ → OOP → Design Patterns → .NET/ASP.NET Core (MVC is
  a subsection of this track, not its own) → Web API → EF Core → SQL → Azure → AWS.
- **Frontend**: HTML & CSS → JavaScript → React → Angular → Vue.js → Next.js. Rule for when a
  technology gets its own track: *keep it separate when it has enough independent interview depth
  and its own distinct mental model; combine technologies only when interviewers naturally
  evaluate them together and splitting would make small, fragmented roadmaps.*
- **Other tracks**: Python, Java, DSA, AI.

Every track follows the same **7-phase pipeline** before any page is built (taxonomy → review &
gap-hunt → group into pages → tier → priority → roadmap → build + verify) — defined in
[`superpowers/specs/README.md`](superpowers/specs/README.md) and executed per
[`rules/build-process.md`](rules/build-process.md).

## The two independent axes on every page

- **Tier — Basic / Intermediate / Advanced** = the *type of question* (core knowledge →
  practical usage, comparison, troubleshooting → internals, performance, concurrency, security,
  trade-offs, architecture, scenarios). Never difficulty, never a years-of-experience cutoff.
  There is deliberately **no "Architect" tier** — architecture-depth questions live in Advanced.
  Exception: Design Patterns is tiered Creational / Structural / Behavioral.
- **Priority — 🔥 Must Know / ⭐ Should Know / 🧠 Deep Dive** = interview *likelihood*, never
  seniority.

Full definition: [`rules/interview-depth-and-priority.md`](rules/interview-depth-and-priority.md).

## What a topic page contains

❓ Interview question → 🔥 Recall → 🧠 Visual (inline SVG diagram) → ⚠️ Trap → 🔄 Follow-up →
🎯 Say-this → 📖 Explanation → 💻 Code → 🌍 Real-world / Scenario. The exact template is in
[`rules/content-writing.md`](rules/content-writing.md); every page, including C# Basic 1–14
(migrated 2026-10-07), uses it.

## The Scenario Bank

`scenarios/index.html` is not a track and not part of the pipeline: one cross-track index of every
dedicated "Scenario:"-style applied-question page, grouped by the track it lives in. Rows link to
the real pages — nothing is duplicated. Convention (one roadmap-style row + one back-link pill per
scenario page, known gaps) in [`rules/scenario-bank.md`](rules/scenario-bank.md).

## Where things live

| Question | Answer |
|---|---|
| How many pages does each track have right now? | [`status.md`](status.md) |
| What's in a track — taxonomy, roadmap, tiers, priorities? | [`superpowers/specs/<track>/`](superpowers/specs/README.md) |
| Why does a track look the way it does? | [`track-history.md`](track-history.md) |
| How do I write / structure / wire a page? | [`rules/README.md`](rules/README.md) — action → rule table |
| I changed X — what else must change? | [`rules/site-architecture.md`](rules/site-architecture.md) |
| Step-by-step recipes for common jobs | [`guides/common-tasks.md`](guides/common-tasks.md) |
| What are the known open problems? | [`TODO.md`](TODO.md) |

## Adding a new track

Give it a folder under `docs/superpowers/specs/<track>/` the moment its roadmap is planned — see
[`superpowers/specs/README.md`](superpowers/specs/README.md) — then follow
[`guides/common-tasks.md`](guides/common-tasks.md#add-a-new-track) for the code/homepage wiring.
