# SQL — Track Spec

**Start here for anything SQL-related.** See
[`docs/superpowers/specs/README.md`](../README.md) for what this file is and the process for
keeping it in sync with the live pages.

## Status — Phases 1–7 complete, all 39 pages written

- **Phase 1** — [`question-taxonomy.md`](question-taxonomy.md): raw questions, grouped by concept
  across 8 subsections, kept tightly to the user's own original SQL section of the interview-prep
  plan — organized around interview questions, not a SQL tutorial.
- **Phases 2–6** — [`roadmap.md`](roadmap.md): reviewed (one real duplicate found — the "large
  table degrading" and "200ms → 8 seconds" scenario questions were the same investigation framed
  two ways, merged into one page), grouped into 27 final pages, tiered by **interview depth**
  (concurrency mechanics — isolation levels, deadlock vs. blocking, locking — placed in Advanced
  per the depth rule's explicit "concurrency" tag, even though the vocabulary itself is common),
  and given an interview-priority tag.
- **Phase 7 — all 27 pages written**, using the same template as every other completed track's
  Phase 7 (❓ Interview Question line → 🔥 Recall → 🧠 Visual → ⚠️ Trap → 🔄 Follow-up → 🎯
  Say-this → 📖 Explanation → 💻 Code → 🌍 Real-world/Scenario — see
  [content-writing.md](../../rules/content-writing.md)). Every page's diagram(s) — including the
  two pages with two diagrams each — passed the mandatory automated verification script (see
  [diagram-style.md](../../rules/diagram-style.md#mandatory-automated-verification--hand-computed-coordinates-are-not-verification))
  with `issueCount: 0`, run independently by the orchestrating session against every single page
  before this track was considered done, per [build-process.md](../../rules/build-process.md).
- **Gap-hunt addendum (post Phase 7)** — an active gap-hunt against outside domain knowledge, per
  [gap-hunting.md](../../../rules/gap-hunting.md), surfaced 12 real gaps not present anywhere in
  the original source list. All 12 were added, taken through Phases 3–7 as their own mini-pass
  (grouped, tiered, prioritized, added to the roadmap, and written), and independently
  re-verified with `issueCount: 0`, including the 3 pages no subagent could get a live browser
  check on. See [`roadmap.md`](roadmap.md)'s "Phase 2 addendum" section and this file's
  per-tier tables below for the full list.

## Basic (15 topics) — 15 written

| # | Topic | Priority | Written? |
|---|---|---|---|
| 1 | Primary Key vs. Foreign Key | 🔥 | ✅ |
| 2 | WHERE vs. HAVING | 🔥 | ✅ |
| 3 | INNER JOIN vs. LEFT JOIN | 🔥 | ✅ |
| 4 | GROUP BY | 🔥 | ✅ |
| 5 | NULL in Comparisons | 🔥 | ✅ |
| 6 | Aggregate Functions | 🔥 | ✅ |
| 7 | ACID | 🔥 | ✅ |
| 8 | ORDER BY | ⭐ | ✅ |
| 9 | DISTINCT | ⭐ | ✅ |
| 10 | Stored Procedures | ⭐ | ✅ |
| 11 | Views | ⭐ | ✅ |
| 12 | UNION vs. UNION ALL **[gap-hunt]** | 🔥 | ✅ |
| 13 | Logical Query Execution Order **[gap-hunt]** | 🔥 | ✅ |
| 14 | Foreign Key Referential Actions **[gap-hunt]** | ⭐ | ✅ |
| 15 | Transaction Control Mechanics **[gap-hunt]** | ⭐ | ✅ |

## Intermediate (16 topics) — 16 written

| # | Topic | Priority | Written? |
|---|---|---|---|
| 1 | Subqueries vs. Joins | 🔥 | ✅ |
| 2 | CTEs | 🔥 | ✅ |
| 3 | Window Functions | 🔥 | ✅ |
| 4 | Clustered vs. Non-Clustered Index | 🔥 | ✅ |
| 5 | Normalization vs. Denormalization | 🔥 | ✅ |
| 6 | ROW_NUMBER() vs. RANK() vs. DENSE_RANK() | ⭐ | ✅ |
| 7 | Covering Index | ⭐ | ✅ |
| 8 | Composite Index | ⭐ | ✅ |
| 9 | Pagination Strategies | ⭐ | ✅ |
| 10 | SARGable Queries | 🧠 | ✅ |
| 11 | EXISTS vs. IN vs. JOIN **[gap-hunt]** | ⭐ | ✅ |
| 12 | Recursive CTEs **[gap-hunt]** | ⭐ | ✅ |
| 13 | Temp Tables vs. Table Variables vs. CTEs **[gap-hunt]** | ⭐ | ✅ |
| 14 | Index Seek vs. Scan vs. Table Scan **[gap-hunt]** | 🔥 | ✅ |
| 15 | Materialized/Indexed Views vs. Regular Views **[gap-hunt]** | ⭐ | ✅ |
| 16 | Triggers **[gap-hunt]** | ⭐ | ✅ |

## Advanced (8 topics) — 8 written

| # | Topic | Priority | Written? |
|---|---|---|---|
| 1 | Isolation Levels | 🔥 | ✅ |
| 2 | Deadlock vs. Blocking | 🔥 | ✅ |
| 3 | Execution Plans | 🔥 | ✅ |
| 4 | Performance Degraded Over Time | 🔥 | ✅ |
| 5 | Locking | ⭐ | ✅ |
| 6 | How the Optimizer Picks an Index | 🧠 | ✅ |
| 7 | Bulk Operations from the Database's Own Side **[gap-hunt]** | ⭐ | ✅ |
| 8 | Table Partitioning **[gap-hunt]** | 🧠 | ✅ |

## Where the roadmap came from

Sourced from the user's own original SQL section of the interview-prep plan, regrouped by concept
per [`question-taxonomy.md`](question-taxonomy.md) — see that file's coverage note. Nothing was
added beyond the source list for this track; the only Phase 2 change was merging two scenario
questions that turned out to be the same investigation framed two ways (see
[`roadmap.md`](roadmap.md)'s Phase 2 note).

## Track-specific decisions and boundaries

- **This track owns raw SQL/database-engine internals** — indexing, execution plans, isolation
  levels and locking as a database feature, query optimization. `efcore/` owns the ORM layer on
  top of this (LINQ translation, change tracking, migrations) and already cross-links back here
  for the database-engine side (Connection Management, Bulk Operations) — this track doesn't need
  matching forward-links since `efcore/` is already complete.
- **Concurrency mechanics (Isolation Levels, Deadlock vs. Blocking, Locking) are Advanced, not
  Intermediate** — despite being commonly-used vocabulary, per
  [interview-depth-and-priority.md](../../rules/interview-depth-and-priority.md)'s explicit
  concurrency tag. ACID itself stays Basic — it's pure definitional recall with no concurrency
  mechanics in the question.
- **Code examples are plain SQL**, T-SQL-flavored where a dialect choice is unavoidable (`TOP`,
  `OFFSET/FETCH`, `CREATE PROCEDURE`/`EXEC`), matching every other track picking one concrete
  syntax while the explanation stays conceptual.
- Icon is 🗃️, track color slate (`#334155` ink on `#e2e8f0` bg) — a new pick, since EF Core
  already uses 🗄️/teal.

## Known gaps

None currently known. The original 27-page pass went through the full 7-phase pipeline in one
sitting and every page passed the mandatory independent diagram-verification sweep; a
subsequent active gap-hunt (see the addendum above and [`roadmap.md`](roadmap.md)) found and
closed 12 more, also independently verified. Expect a review/feedback pass once the user goes
through it, same as every other completed track.
