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
  this one, as a grouped subsection, not its own track) → Web API → EF Core → SQL → Azure → AWS.
- **Other tracks**, not part of the ordered path: React, Angular, Python, and AI (all 7 phases
  complete, see below); DSA has a Phase 1–6 roadmap, awaiting Phase 7.

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

**Core backend path — C#, OOP, .NET/ASP.NET Core, Web API, EF Core, SQL, Azure, and AWS are all
through all 7 phases:**

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
- **Azure** — **all 7 phases complete, 44/44 pages written** (2026-09-17):
  [`question-taxonomy.md`](superpowers/specs/azure/question-taxonomy.md) →
  [`roadmap.md`](superpowers/specs/azure/roadmap.md) → 44 tiered/prioritized pages, live on the
  site and on [`azure/roadmap.html`](../azure/roadmap.html). Deliberately simplified/
  scenario-first per the user's later plan, not a full Azure-service encyclopedia — a Phase-2
  active [gap-hunt](rules/gap-hunting.md) still found 16 real gaps (Entra ID, RBAC, containers,
  Cosmos DB, IaC, Well-Architected Framework, and more) folded into the initial pass rather than
  needing a later addendum. Every diagram passed the mandatory automated verification script,
  run independently against every single page. The old, frozen three-tier roadmap (0 written) is
  fully superseded. See [`specs/azure/overview.md`](superpowers/specs/azure/overview.md).
- **AWS** — **all 7 phases complete, 44/44 pages written** (2026-09-17):
  [`question-taxonomy.md`](superpowers/specs/aws/question-taxonomy.md) (44 concept groups, incl.
  a Phase 2 gap-hunt that added 6 items, one a whole new group) →
  [`roadmap.md`](superpowers/specs/aws/roadmap.md) → 44 tiered/prioritized pages, live on the
  site and on [`aws/roadmap.html`](../aws/roadmap.html). Single track (not split by concern) per
  the user's own instruction — IAM/security, networking, serverless, and containers live as
  subsections inside Basic/Intermediate/Advanced. Two deliberate post-feedback fixes carried
  through Phase 7 unchanged: a burnt-orange accent color (`#c2410c`, not AWS's own navy) and a
  `roadmap.html` grouped by 11 cross-tier concept clusters rather than by tier. Every diagram
  passed the mandatory automated verification script, run independently against every single
  page (48 diagrams across 44 pages). See
  [`specs/aws/overview.md`](superpowers/specs/aws/overview.md).

**Other tracks, outside the core backend path:**

- **React** — **all 7 phases complete, 43/43 pages written** (41 original + 2 from a post-Phase-7
  [gap-hunt](rules/gap-hunting.md), 2026-09-17):
  [`question-taxonomy.md`](superpowers/specs/react/question-taxonomy.md) →
  [`roadmap.md`](superpowers/specs/react/roadmap.md) → 43 tiered/prioritized pages, live on the
  site and on [`react/roadmap.html`](../react/roadmap.html). Sourced from the user's own
  detailed, already tier-organized outline rather than a short bullet list like every other
  track's seed — unusually large (37 concept groups, 43 pages) as a direct result. Every diagram
  passed the mandatory automated verification script, run independently against every single
  page, including the 2 gap-hunt additions (`forwardRef`/`useImperativeHandle`; automatic
  batching & `flushSync`). See [`specs/react/overview.md`](superpowers/specs/react/overview.md).
- **Angular** — **all 7 phases complete, 43/43 pages written** (2026-09-17), a brand-new track
  built from zero: [`question-taxonomy.md`](superpowers/specs/angular/question-taxonomy.md) →
  [`roadmap.md`](superpowers/specs/angular/roadmap.md) → 43 tiered/prioritized pages, live on the
  site and on [`angular/roadmap.html`](../angular/roadmap.html). Sourced from the user's own
  detailed, already tier-organized outline, with a Phase-2 gap-hunt folded into the initial pass
  (7 additions, incl. a new standalone Accessibility section). Deliberately covers both modern
  Angular (Standalone, Signals, the new control flow, zoneless, SSR/hydration) and existing
  enterprise Angular (`NgModule`s, Zone.js, RxJS, Reactive Forms) side by side, treating RxJS/
  Signals/change detection as the track's conceptual spine rather than three ordinary topics.
  `angular/roadmap.html` and the root tile's badge were wired at Phase 1, per the mandate this
  track was the first to follow correctly. Every diagram passed the mandatory automated
  verification script, run independently against every single page. See
  [`specs/angular/overview.md`](superpowers/specs/angular/overview.md).
- **Python** — **all 7 phases complete, 43/43 pages written** (2026-09-18):
  [`question-taxonomy.md`](superpowers/specs/python/question-taxonomy.md) (43 concept groups,
  incl. a Phase 2 gap-hunt that added 8 items — `enum`, `collections`, walrus/`match`-`case`,
  positional-only/keyword-only params, exception chaining, `itertools`, `pathlib` vs. `os.path`,
  `__slots__`, free-threaded CPython) → [`roadmap.md`](superpowers/specs/python/roadmap.md) → 43
  tiered/prioritized pages, live on the site and on
  [`python/roadmap.html`](../python/roadmap.html), grouped by 11 cross-tier concept clusters
  rather than by tier. Unique to this track: "predict the output" is a sixth question-variant
  type (a short code snippet + "what does this print, and why?") used wherever behavior matters
  more than definition — confirmed rendered as real code blocks on every `[predict]`-tagged page,
  not reworded into plain definitional questions. Every diagram passed the mandatory automated
  verification script, run independently against every single page (43 pages, 45 diagrams).
  Not part of the ordered core-backend path — grouped with React/Angular/DSA/AI. See
  [`specs/python/overview.md`](superpowers/specs/python/overview.md).
- **AI** — **all 7 phases complete, 48/48 pages written** (2026-09-18):
  [`question-taxonomy.md`](superpowers/specs/ai/question-taxonomy.md) (48 concept groups,
  incl. a Phase 2 gap-hunt that added 3 items folded into existing pages — provider-native
  prompt caching, speculative decoding, constrained/grammar-based decoding) →
  [`roadmap.md`](superpowers/specs/ai/roadmap.md) → 48 tiered/prioritized pages, live on the site
  and on [`ai/roadmap.html`](../ai/roadmap.html), grouped by tier rather than cross-tier concept
  clusters. RAG is the track's single most-asked area per the source material, and the .NET/
  Azure AI angle (Semantic Kernel, `IChatClient`, Azure OpenAI & Azure AI Search) is this site's
  own differentiator. Every diagram passed the mandatory automated verification script, run
  independently against every single page. Not part of the ordered core-backend path — grouped
  with React/Angular/DSA/Python. See [`specs/ai/overview.md`](superpowers/specs/ai/overview.md).
- **DSA** — **Phases 1–6 complete, roadmap-only (0/30 written)** (2026-09-18):
  [`question-taxonomy.md`](superpowers/specs/dsa/question-taxonomy.md) (30 concept groups: this
  session's own 19-group draft, expanded to 30 after the user independently cross-checked it
  against another vendor's DSA curriculum, plus a Phase 2 gap-hunt that added 2 items folded into
  an existing page — reservoir sampling and Bloom filters) →
  [`roadmap.md`](superpowers/specs/dsa/roadmap.md) → 30 tiered/prioritized pages, roadmap-listed
  on the site and on [`dsa/roadmap.html`](../dsa/roadmap.html). Organized around reusable
  interview patterns and trade-off judgment (its own "Pattern Recognition" and "Data Structure
  Trade-offs" pages) rather than an algorithm encyclopedia — explicitly excludes suffix trees,
  max flow, computational geometry, and similar research-depth topics. Not part of the ordered
  core-backend path — grouped with React/Angular/Python/AI. See
  [`specs/dsa/overview.md`](superpowers/specs/dsa/overview.md).

## Adding a new track's spec

The moment a track's roadmap gets planned — even before any page in it is written — give it a
folder under `docs/superpowers/specs/<track>/overview.md` and add it to that folder's index
table. See [`docs/superpowers/specs/README.md`](superpowers/specs/README.md) for the exact
format and process.
