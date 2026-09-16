# EF Core — Track Spec

**Start here for anything EF-Core-related.** See
[`docs/superpowers/specs/README.md`](../README.md) for what this file is and the process for
keeping it in sync with the live pages.

## Status — Phases 1–7 complete, all 21 pages written

- **Phase 1** — [`question-taxonomy.md`](question-taxonomy.md): raw questions, grouped by
  concept across 7 subsections, deliberately scoped to EF Core as the *ORM layer* — LINQ
  translation, tracking, loading, migrations — leaving raw SQL/database-engine internals to the
  `sql/` track.
- **Phases 2–6** — [`roadmap.md`](roadmap.md): reviewed (no dedupe needed — two apparent
  "migration"/`SaveChanges()` repeats confirmed as intentional multi-angle coverage, not
  duplicates), grouped into 21 final pages (two small bundles: LINQ→SQL translation with how to
  inspect it, and eager loading with `Include`/`ThenInclude`), tiered by **interview depth**, and
  given an interview-priority tag.
- **Phase 7 — all 21 pages written**, using the same template as every other completed track's
  Phase 7 (❓ Interview Question line → 🔥 Recall → 🧠 Visual → ⚠️ Trap → 🔄 Follow-up → 🎯
  Say-this → 📖 Explanation → 💻 Code → 🌍 Real-world/Scenario — see
  [content-writing.md](../../rules/content-writing.md)). Every page's diagram was run through the
  mandatory automated verification script (see
  [diagram-style.md](../../rules/diagram-style.md#mandatory-automated-verification--hand-computed-coordinates-are-not-verification))
  before this track was considered done.

## Basic (7 topics) — 7 written

| # | Topic | Priority | Written? |
|---|---|---|---|
| 1 | What Is EF Core | 🔥 | ✅ |
| 2 | DbContext & DbSet | 🔥 | ✅ |
| 3 | Migrations & SaveChanges() — the Basics | 🔥 | ✅ |
| 4 | Primary Keys & Relationships by Convention | ⭐ | ✅ |
| 5 | The N+1 Problem | 🔥 | ✅ |
| 6 | Projection — Selecting into a DTO | 🔥 | ✅ |
| 7 | Configuring Relationships | ⭐ | ✅ |

## Intermediate (8 topics) — 8 written

| # | Topic | Priority | Written? |
|---|---|---|---|
| 1 | LINQ → SQL Translation & Inspecting Generated SQL | ⭐ | ✅ |
| 2 | Tracking vs. AsNoTracking() | 🔥 | ✅ |
| 3 | The Change Tracker & SaveChanges() | ⭐ | ✅ |
| 4 | Eager vs. Explicit vs. Lazy Loading | 🔥 | ✅ |
| 5 | IQueryable\<T\> vs. IEnumerable\<T\> | 🔥 | ✅ |
| 6 | Fluent API vs. Data Annotations | ⭐ | ✅ |
| 7 | Migrations, Mechanically | ⭐ | ✅ |
| 8 | Transactions Around SaveChanges() | ⭐ | ✅ |

## Advanced (6 topics) — 6 written

| # | Topic | Priority | Written? |
|---|---|---|---|
| 1 | Compiled Queries | 🧠 | ✅ |
| 2 | Query Splitting | 🧠 | ✅ |
| 3 | Optimistic Concurrency & Row Versioning | 🔥 | ✅ |
| 4 | Beyond N+1 — Common Performance Pitfalls | 🔥 | ✅ |
| 5 | Bulk Operations | ⭐ | ✅ |
| 6 | Connection Management | ⭐ | ✅ |

## Where the roadmap came from

Sourced from the user's own original EF Core section of the interview-prep plan, regrouped by
concept per [`question-taxonomy.md`](question-taxonomy.md) — see that file's coverage note.
Nothing was added beyond the source list for this track.

## Track-specific decisions and boundaries

- **Raw SQL/database-engine internals stay entirely in the `sql/` track** — indexing internals,
  execution plans, isolation levels as a database feature. This track only covers EF Core's own
  side: what SQL it generates, how it tracks/loads/migrates. Where a page's natural explanation
  brushes against the database side (Connection Management, Bulk Operations), it cross-links to
  `sql/` rather than re-teaching it — `sql/` is still Phase 1, so those are forward links, same
  convention already used within `webapi/`.
- **Code examples are C#**, matching every other track on this site.
- Icon is 🗄️, track color teal (`#0f766e`).

## Known gaps

None — this is the first pass through the full 7-phase pipeline for this track, built and
verified in one sitting. Expect a review/feedback pass once the user goes through it.
