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
2. Review — dedupe, **and actively hunt for gaps against outside domain knowledge, not just a
   re-read of the source list** — see [`rules/gap-hunting.md`](../../rules/gap-hunting.md) for
   the concrete method and why "identify gaps" silently degraded into "re-read what you were
   given" on every track before this was written down
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

**Whenever reporting any of the above as "committed" or "pushed" in chat, name the exact branch
and commit hash it landed on** — see [`rules/reporting.md`](../../rules/reporting.md) for the
incident (an Angular Phase-7 report that said "pushed" without naming the non-`main` branch it
was pinned to, which an outside reviewer checking `main` reasonably read as the work never having
happened) that made this mandatory.

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
| [oops/](oops/overview.md) | **All 7 phases complete — 15/15 pages written.** [question-taxonomy.md](oops/question-taxonomy.md) → [roadmap.md](oops/roadmap.md) → 15 tiered/prioritized pages, live on the site and on [`oops/roadmap.html`](../../../oops/roadmap.html). |
| [dotnet/](dotnet/overview.md) | **All 7 phases complete — 23/23 pages written.** [question-taxonomy.md](dotnet/question-taxonomy.md) → [roadmap.md](dotnet/roadmap.md) → 23 tiered/prioritized pages, live on the site and on [`dotnet/roadmap.html`](../../../dotnet/roadmap.html). MVC lives as a grouped subsection, not a separate track — rescoped from the old, never-written ".NET Framework" slot. |
| [webapi/](webapi/overview.md) | **All 7 phases complete — 25/25 pages written.** [question-taxonomy.md](webapi/question-taxonomy.md) → [roadmap.md](webapi/roadmap.md) → 25 tiered/prioritized pages, live on the site and on [`webapi/roadmap.html`](../../../webapi/roadmap.html). |
| [efcore/](efcore/overview.md) | **All 7 phases complete — 21/21 pages written.** [question-taxonomy.md](efcore/question-taxonomy.md) → [roadmap.md](efcore/roadmap.md) → 21 tiered/prioritized pages, live on the site and on [`efcore/roadmap.html`](../../../efcore/roadmap.html). Scoped to EF Core as the ORM layer — raw SQL/database internals stay in `sql/`. |
| [sql/](sql/overview.md) | **All 7 phases complete — 39/39 pages written** (27 original + 12 from a post-Phase-7 [gap-hunt](../../rules/gap-hunting.md)). [question-taxonomy.md](sql/question-taxonomy.md) → [roadmap.md](sql/roadmap.md) → 39 tiered/prioritized pages, live on the site and on [`sql/roadmap.html`](../../../sql/roadmap.html). Owns raw SQL/database-engine internals — the ORM layer stays in `efcore/`. |
| [azure/](azure/overview.md) | **All 7 phases complete — 44/44 pages written.** [question-taxonomy.md](azure/question-taxonomy.md) (12 concept groups, including this track's own Phase-2 gap-hunt: 16 real additions, 7 candidates excluded) → [roadmap.md](azure/roadmap.md) → 44 tiered/prioritized pages, live on the site and on [`azure/roadmap.html`](../../../azure/roadmap.html). Deliberately scoped away from a full Azure-service encyclopedia — see the taxonomy's own "Considered and excluded" list. |
| [aws/](aws/overview.md) | **All 7 phases complete — 44/44 pages written.** [question-taxonomy.md](aws/question-taxonomy.md) (44 concept groups, incl. this track's own Phase-2 gap-hunt) → [roadmap.md](aws/roadmap.md) → 44 tiered/prioritized pages, live on the site and on [`aws/roadmap.html`](../../../aws/roadmap.html), grouped by 11 cross-tier concept clusters rather than by tier. Sits in the ordered core-backend path right after Azure, per the user's own structural instruction. Track accent color is a deliberate burnt-orange (`#c2410c`), not AWS's own navy. |
| [ai/](ai/overview.md) | The AI/GenAI track — Basic (16)/Intermediate (18)/Advanced (14), all roadmap-only (0 written), sourced from `AI-Interview-Topics.md`. **Not part of the interview-question-bank rebuild** — untouched, along with DSA. |
| [react/](react/overview.md) | **All 7 phases complete — 43/43 pages written** (41 original + 2 from a post-Phase-7 [gap-hunt](../../rules/gap-hunting.md)). [question-taxonomy.md](react/question-taxonomy.md) → [roadmap.md](react/roadmap.md) → 43 tiered/prioritized pages, live on the site and on [`react/roadmap.html`](../../../react/roadmap.html). Unusually large (37 concept groups, 43 pages) reflecting the outline's own depth. |
| [angular/](angular/overview.md) | **All 7 phases complete — 43/43 pages written.** [question-taxonomy.md](angular/question-taxonomy.md) (37 content groups, including this track's own Phase-2 gap-hunt) → [roadmap.md](angular/roadmap.md) → 43 tiered/prioritized pages, live on the site and on [`angular/roadmap.html`](../../../angular/roadmap.html). `angular/roadmap.html` and the root tile's badge were wired at Phase 1, per the mandate this table's own process section (below) documents. |

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
2. Write the track's `overview.md` (or, before Phase 4/5, `roadmap.md`) with that roadmap
   immediately — don't let it exist only in the tier `index.html` files. The spec doc and the
   live pages are two views of the same roadmap and must be updated together.
3. Add a row to the category table above.
4. **Build the live `<track>/roadmap.html` and wire the root `index.html` tile's
   `roadmap-badge` to it — the same moment the spec doc is written, not deferred to Phase 7.**
   This is easy to forget precisely *because* it happens before any topic page exists (there's
   no "finish the page, then wire it" reflex yet) — it was missed for the React track the first
   time for exactly that reason, caught only when the user screenshotted the still-disabled
   badge. SQL, Azure, and AI all already do this correctly (`sql/roadmap.html`,
   `azure/roadmap.html`, `ai/roadmap.html`, each with a real `<a class="roadmap-badge">` on its
   root tile) — match that pattern for every new track, at Phase 1 already if that's as far as
   it's gotten, updated again in place as later phases complete. The tile itself stays
   `soon`/"Coming soon" until Phase 7 actually finishes; only the badge and its `href`/`title`
   change before then.
5. As topics get written, flip their `written?` column here at the same time the tier index row
   flips from `planned` to a real link — same moment, not a follow-up task.

## When to create a new category

The moment a track's full roadmap gets planned — even before the first topic page is written
(Azure is the working example: roadmap-only, spec written, zero pages built). Don't wait until a
track is finished to document it. This includes step 4 above — the live roadmap page and the
root tile's badge link are part of "documenting it," not part of "building it."
