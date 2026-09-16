# Track Specs — Format and Process

**Read this before adding or touching anything under `docs/superpowers/specs/`.** It applies to
every session working on this site — this session finishing C#, a future session starting Azure
or OOP's. Following the same format everywhere is the entire point: a session that has never
worked on a given track should be able to open its folder and know exactly what's built, what's
planned, and why, without re-deriving any of it from the live pages.

## The site is mid-rebuild — read this before starting a new track's roadmap

Locked with the user on 2026-09-15 (audience/depth definition refined 2026-09-16): RefreshYourself
is moving from a topic-tutorial site to an **interview question bank for experienced
professionals — roughly 3+ years through senior, lead, architect, and principal** — across a new
track pipeline (C# → OOP → .NET/ASP.NET Core → Web API → EF Core → SQL → Azure, plus React/DSA/AI
unaffected). Every track now goes through 7 phases **before** any page gets built:

1. **Question taxonomy** — what could an interviewer ask, grouped by concept, no tier/priority yet
2. Review — dedupe, identify gaps
3. Group questions into actual pages
4. Assign Basic / Intermediate / Advanced — **by question type, not difficulty or seniority.**
   See [`rules/interview-depth-and-priority.md`](../../rules/interview-depth-and-priority.md)
   for the full definition — Advanced explicitly includes architecture/trade-off/scenario
   questions, with **no separate "Architect" tier.**
5. Assign interview priority — 🔥 Must Know / ⭐ Should Know / 🧠 Deep Dive (independent of
   tier — never a seniority signal; see the same rule file)
6. Build the roadmap/index
7. Build or update the actual topic pages — **including a mandatory full-coverage automated
   diagram-verification sweep before the phase counts as done**, whether pages were built by the
   orchestrating session directly or by delegated subagents. See
   [`rules/diagram-style.md`](../../rules/diagram-style.md#mandatory-automated-verification--hand-computed-coordinates-are-not-verification)
   for the incident that made this mandatory (2026-09-16, C#'s 35 new pages: 5 real defects
   slipped past every subagent's own "verified by computing coordinates" self-report) and the
   exact script/process to run against every page — not a sample — before handing the batch to
   the user for manual review.

**[`csharp/question-taxonomy.md`](csharp/question-taxonomy.md) is the Phase-1 reference
implementation** — its format (concept groups → Core concept/Understanding/Comparison/Pitfall/
Scenario variants, `[new]`-tagging anything added beyond the original source lists) is the
template every other track's Phase 1 should follow. C# Basic's existing 14 written pages are
**frozen** through this rebuild — they get their own deliberate migration pass later, not folded
into this process. The rest of this file (below) still governs the *eventual* `overview.md` a
track ends up with once it reaches Phase 6 — just know that for any track still mid-rebuild, a
`question-taxonomy.md` (or later, a grouped-but-untiered Phase 3 doc) may exist well before its
`overview.md` looks "final."

## Existing categories

| Track | Covers |
|---|---|
| [csharp/](csharp/overview.md) | **All 7 phases complete — 49/49 pages written.** [question-taxonomy.md](csharp/question-taxonomy.md) → [roadmap.md](csharp/roadmap.md). Original 14 Basic pages frozen; the other 35 are new, awaiting page-by-page review. |
| [oops/](oops/question-taxonomy.md) | OOP — no old roadmap existed. [question-taxonomy.md](oops/question-taxonomy.md) (Phase 1, awaiting review) is the only doc so far. |
| [dotnet/](dotnet/question-taxonomy.md) | .NET / ASP.NET Core (incl. MVC as a grouped subsection) — rescoped from the old, never-written ".NET Framework" slot. [question-taxonomy.md](dotnet/question-taxonomy.md) (Phase 1, awaiting review) is the only doc so far. |
| [webapi/](webapi/question-taxonomy.md) | Web API — brand-new track, no site folder yet (Phase 6/7 work). [question-taxonomy.md](webapi/question-taxonomy.md) (Phase 1, awaiting review) is the only doc so far. |
| [efcore/](efcore/question-taxonomy.md) | EF Core — brand-new track, no site folder yet (Phase 6/7 work). [question-taxonomy.md](efcore/question-taxonomy.md) (Phase 1, awaiting review) is the only doc so far. |
| [sql/](sql/question-taxonomy.md) | SQL — no old roadmap existed. [question-taxonomy.md](sql/question-taxonomy.md) (Phase 1, awaiting review) is the only doc so far. |
| [azure/](azure/overview.md) | Old three-tier roadmap (0 written, frozen) superseded by the simplified, scenario-first [question-taxonomy.md](azure/question-taxonomy.md) (Phase 1, awaiting review). |
| [ai/](ai/overview.md) | The AI/GenAI track — Basic (16)/Intermediate (18)/Advanced (14), all roadmap-only (0 written), sourced from `AI-Interview-Topics.md`. **Not part of the interview-question-bank rebuild** — untouched, along with React and DSA. |

Add a row here whenever a new track's roadmap is first planned — even before any page in it is
written. This table is the map — a session should be able to tell from this file alone whether a
track already has a spec before starting one.

**While a `question-taxonomy.md` is still under review (Phase 1–2), edit it directly in place —
don't track additions/removals separately.** If a topic gets added, cut, or reworded during
review, that change overwrites the file itself immediately; the taxonomy file is the current
draft, not a frozen snapshot, until the user approves it and Phase 3 begins.

## Folder and file convention

- One folder per track: `docs/superpowers/specs/<track-slug>/` (same slug as the track's URL
  folder, e.g. `csharp/` here matches `/csharp/` on the site).
- **No date prefixes, anywhere.** This is current-state reference documentation, not a dated
  changelog — git history already carries the timeline.
- Every track folder has exactly one `overview.md` — the mandatory entry point, and for most
  tracks the *only* file needed (see below).
- Split into an additional file only if a track grows a genuinely distinct sub-topic worth its
  own doc (rare at this site's scale) — don't split a track that fits comfortably in one
  `overview.md`.

## What a track's `overview.md` must contain

Use `csharp/overview.md` as the working example.

1. **Status line** — one sentence: how many tiers/topics are written vs. roadmap-only, right now.
2. **The full roadmap, tier by tier** — a table per tier (# / topic / hot-or-normal / written?),
   matching exactly what's on the tier's actual `index.html` (see
   [content-structure.md](../../rules/content-structure.md)) — this file is the planning
   reference, the HTML page is the live artifact; they must never drift out of sync.
3. **Where the roadmap came from** — if sourced from an existing document (like Azure's
   `Azure-Interview-Topics.md`) or reasoned from scratch, say so and name the source. This is
   what [accuracy.md](../../rules/accuracy.md) requires when a whole roadmap gets asserted at
   once.
4. **Track-specific decisions and boundaries** — anything a future session would otherwise have
   to re-derive, e.g. "interfaces/inheritance live in OOP's, not here, even though they're a C#
   keyword" or a tiering call that could reasonably be argued either way.
5. **Known gaps** — tiers not written yet, topics that might be mis-tiered once actually
   written, anything deliberately deferred.

General site-wide rules (diagram style, writing template, highlight rules) stay in
[`docs/rules/`](../../rules/README.md) — they apply to every track and don't belong copied into
each track's spec. A track's `overview.md` is only what's specific to *that* track.

## Process to follow when writing one

1. **List the full roadmap before writing a single topic page** — same rule as
   [content-writing.md](../../rules/content-writing.md), just written down here instead of only
   living in chat.
2. Write the track's `overview.md` with that roadmap immediately — don't let it exist only in
   the tier `index.html` files. The spec doc and the live pages are two views of the same roadmap
   and must be updated together.
3. Add a row to the category table above.
4. As topics get written, flip their `written?` column here at the same time the tier index row
   flips from `planned` to a real link — same moment, not a follow-up task.

## When to create a new category

The moment a track's full roadmap gets planned — even before the first topic page is written
(Azure is the working example: roadmap-only, spec written, zero pages built). Don't wait until a
track is finished to document it.
