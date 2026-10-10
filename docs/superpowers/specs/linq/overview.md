# LINQ — Track Spec

**Start here for anything LINQ-related.** See [`docs/superpowers/specs/README.md`](../README.md)
for what this file is and the process for keeping it in sync with the live pages.

## Status — Phases 1–6 complete, roadmap-only, 0/59 pages written

- **Phase 1** — [`question-taxonomy.md`](question-taxonomy.md): 8 concept groups, sourced from
  the user's own detailed proposed roadmap (already organized into 3 tiers + a scenario section),
  plus this track's own light Phase-2 gap-hunt (3 small additions, each folded into an existing
  page rather than added as a new one).
- **Phases 2–6** — [`roadmap.md`](roadmap.md): reviewed (4 merges, 1 exclusion — see its own
  Phase 2 section for the reasoning on each), grouped into 58 final pages, tiered by **interview
  depth** (not difficulty), and given an interview-priority tag.
- **Phase 6 wiring done at Phase 1**, per [specs/README.md](../README.md)'s mandate —
  `linq/roadmap.html` and the root `index.html` tile's `roadmap-badge` exist and resolve, plus a
  minimal `linq/index.html` and the three tier `index.html` pages (all rows `planned`, none
  written) so every link from the homepage tile actually resolves rather than 404ing. The root
  tile itself stays `tile soon`/"Coming soon" until Phase 7 actually finishes — only the badge and
  the tier-stub pages exist so far.
- **Phase 7 — not started.** Awaiting the user's review of `roadmap.md` before any topic page
  gets written.

## The full roadmap, tier by tier

See [`roadmap.md`](roadmap.md)'s Phase 6 tables for the complete, numbered list (59 rows: Basic
14 / Intermediate 17 / Advanced 28, the last 11 of which are the "LINQ Scenarios" sub-block) — not
re-duplicated here to avoid the two documents drifting out of sync while the roadmap is still
under review. Once Phase 7 starts, this section will carry the same tier-by-tier table every
other track's `overview.md` carries, mirrored from the live tier `index.html` pages.

## Where the roadmap came from

The entire raw list (54 comparison/concept topics + 10 scenarios) is the user's own proposed
roadmap, handed over already split into Basic/Intermediate/Advanced plus a dedicated scenario
section, with explicit technical-accuracy requirements and two worked visual examples (the
zero/one/many-match table for `First`/`Single`-family methods, and a same-input/different-output
table for `Select`/`SelectMany`). This session's job was Phases 2–6: review/merge/exclude, group
into pages, tier, prioritize, and produce the final numbered roadmap — see
[`roadmap.md`](roadmap.md)'s own Phase 2 section for exactly what was merged/excluded and why.

## Track-specific decisions and boundaries

- **This track owns LINQ the language feature** — operators, execution model,
  `IEnumerable`/`IQueryable`, query providers, and the general LINQ→SQL translation mechanism. It
  does **not** own EF Core's own machinery (`DbContext`/`DbSet`, migrations, the change tracker,
  compiled queries, query splitting, connection management — all `efcore/`'s job) or raw
  SQL/database-engine internals (index design, reading a query plan, isolation levels —
  `sql/`'s job). Every page that brushes against either boundary cross-links the existing page
  instead of re-teaching it.
- **Scenario questions are a distinct, labeled sub-block inside Advanced** (pages 18–27, each
  titled `Scenario: ...`), matching the exact convention already used on
  `react/advanced/14–18.html` and `angular/advanced/11–16.html` — not a fourth tier, not a
  separate top-level site section.
- **Homepage placement: inside the "🛤️ Core backend interview path" row, directly after C# and
  before OOP** — LINQ is a C# language feature the rest of that path (OOP, .NET, Web API, and
  especially EF Core) leans on, so it reads as the natural prerequisite ordering. Flagged
  explicitly for the user's own review, not a locked site rule.
- **Code examples are C#**, matching every other track on this site.
- Icon 🔗, track color indigo (`#4f46e5` ink on `#e0e7ff` bg) — distinct from every track color
  already in use; closest neighbor is .NET's violet `#7c3aed`.

## Known gaps

- **All 59 pages** — Phase 7 hasn't started. Pending the user's review of `roadmap.md`'s merge/
  exclusion/tier/priority decisions before any page gets written.
- No independent diagram-verification sweep has run yet (nothing to verify — no pages written).
