# RefreshYourself — Read This First

Read this before working on any content. This file is the whole-project picture: what the site
is and where everything lives. It does **not** hold the topic catalogs — those live in
[`docs/superpowers/specs/`](superpowers/specs/README.md), one folder per track, so each track's
roadmap can grow and get maintained on its own instead of one page getting unwieldy.

## What this is

A quick-refresh **interview question bank** (not a tutorial site) for **experienced
professionals — roughly 3+ years through senior, lead, architect, and principal** — locked with
the user on 2026-09-15, audience/depth definition refined 2026-09-16, superseding the earlier
"topic tutorial" framing. Never write as if the reader is a beginner; never cap depth to a
junior/mid-level interview. Two groups of tracks:

- **Core backend interview path**, in this order: C# → OOP → .NET/ASP.NET Core (MVC lives inside
  this one, as a grouped subsection, not its own track) → Web API → EF Core → SQL → Azure.
- **Other tracks**, not part of the ordered path: React (Phase 1 started, see below), DSA and AI
  still fully untouched.

Every track goes through 7 phases before any page is built — see
[`specs/README.md`](superpowers/specs/README.md) for the full pipeline, and
[`rules/interview-depth-and-priority.md`](rules/interview-depth-and-priority.md) for the full
definition of the two independent axes: Basic/Intermediate/Advanced mean **the type of question**
(core knowledge → practical usage/comparison/troubleshooting → internals/performance/
concurrency/security/scalability/trade-offs/architecture/scenarios) — never difficulty, and
never a year-of-experience cutoff. There's deliberately **no separate "Architect" tier** —
architecture-depth questions live inside Advanced. Every page also gets an independent priority
tag (🔥 Must Know / ⭐ Should Know / 🧠 Deep Dive, Phase 5) that means **interview likelihood,
never seniority** — an architect can still need a 🔥 Basic refresher, and a 3-year developer can
run into a 🧠 Deep Dive question.

[content-writing.md](rules/content-writing.md) now documents two templates: the **old** one,
which is exactly what's live on C#'s original 14 Basic pages — **frozen**, not touched by this
rebuild until a deliberate later migration pass — and the **new** one (❓ Interview Question →
🔥 Recall → 🧠 Visual → ⚠️ Trap → 🔄 Follow-up → 🎯 Say-this → 📖 Explanation → 💻 Code → 🌍
Real-world/Scenario), which C# has already used to write its other 35 pages (Basic 15–18, all
of Intermediate, all of Advanced) — the reference example for every other track's eventual
Phase 7.

## Where things live

| Question | Answer |
|---|---|
| What's built vs. planned, per track? | [`docs/superpowers/specs/README.md`](superpowers/specs/README.md) → each track's `overview.md` |
| How do I write/structure a page? | [`docs/rules/README.md`](rules/README.md) — the full action → rule table |
| What's the current build order? | The status line at the top of each track's `overview.md` under `specs/` |

## Current build status (one line each — see the track's own spec for detail)

**Core backend path — C#, OOP, .NET/ASP.NET Core, Web API, EF Core, and SQL are through all 7
phases; Azure is still at Phase 1 (question taxonomy), awaiting the user's review before Phase 2
(dedupe/gaps) starts on it:**

- **C#** — **all 7 phases complete, 49/49 pages written** (2026-09-16):
  [`question-taxonomy.md`](superpowers/specs/csharp/question-taxonomy.md) →
  [`roadmap.md`](superpowers/specs/csharp/roadmap.md) → 49 tiered/prioritized pages, live on the
  site and on [`csharp/roadmap.html`](../csharp/roadmap.html). The 14 *original* Basic pages
  (incl. the tier-navigation sidebar — see [`rules/tier-navigation.md`](rules/tier-navigation.md))
  stay exactly as they were, **frozen**; the other 35 (Basic 15–18, all Intermediate, all
  Advanced) are new and built to the same rules but not yet through the user's page-by-page
  review the original 14 had. This track is the reference example for how every other track
  goes through the pipeline. See
  [`specs/csharp/overview.md`](superpowers/specs/csharp/overview.md).
- **OOP** — **all 7 phases complete, 15/15 pages written** (2026-09-16):
  [`question-taxonomy.md`](superpowers/specs/oops/question-taxonomy.md) →
  [`roadmap.md`](superpowers/specs/oops/roadmap.md) → 15 tiered/prioritized pages, live on the
  site and on [`oops/roadmap.html`](../oops/roadmap.html). Deliberately scenario-heavy per the
  user's instruction (design/scenario questions, not "what is polymorphism" from zero). Every
  diagram passed the mandatory automated verification script before this track was marked done —
  see [`specs/oops/overview.md`](superpowers/specs/oops/overview.md).
- **.NET / ASP.NET Core** — **all 7 phases complete, 23/23 pages written** (2026-09-16):
  [`question-taxonomy.md`](superpowers/specs/dotnet/question-taxonomy.md) →
  [`roadmap.md`](superpowers/specs/dotnet/roadmap.md) → 23 tiered/prioritized pages, live on the
  site and on [`dotnet/roadmap.html`](../dotnet/roadmap.html). MVC included as a grouped
  subsection (not a separate track/folder), per the locked decision. Rescopes the old,
  never-written ".NET Framework" slot — different technology, same folder slug (`dotnet/`). Every
  diagram passed the mandatory automated verification script. See
  [`specs/dotnet/overview.md`](superpowers/specs/dotnet/overview.md).
- **Web API** — **all 7 phases complete, 25/25 pages written** (2026-09-16):
  [`question-taxonomy.md`](superpowers/specs/webapi/question-taxonomy.md) →
  [`roadmap.md`](superpowers/specs/webapi/roadmap.md) → 25 tiered/prioritized pages, live on the
  site and on [`webapi/roadmap.html`](../webapi/roadmap.html). Deliberately scoped away from
  general ASP.NET Core pipeline mechanics (that's the `dotnet/` track's job) — this track covers
  only what's specific to designing/operating an HTTP API contract. Every diagram passed the
  mandatory automated verification script. See
  [`specs/webapi/overview.md`](superpowers/specs/webapi/overview.md).
- **EF Core** — **all 7 phases complete, 21/21 pages written** (2026-09-16):
  [`question-taxonomy.md`](superpowers/specs/efcore/question-taxonomy.md) →
  [`roadmap.md`](superpowers/specs/efcore/roadmap.md) → 21 tiered/prioritized pages, live on the
  site and on [`efcore/roadmap.html`](../efcore/roadmap.html). Scoped to EF Core as the ORM
  layer — LINQ translation, tracking, loading, migrations — leaving raw SQL/database-engine
  internals to the `sql/` track. Every diagram passed the mandatory automated verification
  script. See [`specs/efcore/overview.md`](superpowers/specs/efcore/overview.md).
- **SQL** — **all 7 phases complete, 39/39 pages written** (2026-09-17; 27 original + 12 added
  from a post-Phase-7 active [gap-hunt](rules/gap-hunting.md)):
  [`question-taxonomy.md`](superpowers/specs/sql/question-taxonomy.md) →
  [`roadmap.md`](superpowers/specs/sql/roadmap.md) → 39 tiered/prioritized pages, live on the
  site and on [`sql/roadmap.html`](../sql/roadmap.html). Owns raw SQL/database-engine internals
  — indexing, execution plans, isolation levels/locking, query optimization — leaving the ORM
  layer to `efcore/`. Every diagram passed the mandatory automated verification script,
  including a full independent re-sweep of the 12 gap-hunt additions. See
  [`specs/sql/overview.md`](superpowers/specs/sql/overview.md).
- **Azure** — [`question-taxonomy.md`](superpowers/specs/azure/question-taxonomy.md) written,
  deliberately simplified/scenario-first per the user's later plan. Old three-tier roadmap (0
  written) is **frozen**, superseded by this taxonomy. See
  [`specs/azure/overview.md`](superpowers/specs/azure/overview.md).

**Other tracks, outside the core backend path:**

- **React** — **Phases 1–6 complete, Phase 7 not started** (2026-09-17):
  [`question-taxonomy.md`](superpowers/specs/react/question-taxonomy.md) →
  [`roadmap.md`](superpowers/specs/react/roadmap.md) → 41 planned pages, awaiting the user's
  review before any page gets written. Sourced from the user's own detailed, already
  tier-organized outline rather than a short bullet list like every other track's seed —
  unusually large (35 concept groups, 41 pages) as a direct result. See the taxonomy's own
  Phase-2 coverage note for the full list of gaps identified and added, and what was
  deliberately excluded (bundler internals, CSS-in-JS/state-library specifics, general JS
  fundamentals); see the roadmap for the two adversarial-pass fixes (a missing "Testing
  Strategy" section, two near-duplicate scenario questions) and the page-grouping/tier/priority
  decisions.
- **AI** — roadmap-only skeleton across all three tiers, sourced from `AI-Interview-Topics.md`.
  **Do not write AI content until told to.** See
  [`specs/ai/overview.md`](superpowers/specs/ai/overview.md).
- **DSA** — not started, no roadmap planned yet.

## Adding a new track's spec

The moment a track's roadmap gets planned — even before any page in it is written — give it a
folder under `docs/superpowers/specs/<track>/overview.md` and add it to that folder's index
table. See [`docs/superpowers/specs/README.md`](superpowers/specs/README.md) for the exact
format and process.
