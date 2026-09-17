# SQL — Roadmap (Phases 2–6)

Phase 1 output: [`question-taxonomy.md`](question-taxonomy.md) — 8 concept groups, 28 raw
questions. This file is Phases 2–6: review, page grouping, tier, priority, and the final
roadmap — see [`specs/README.md`](../README.md) for what each phase means.

## Phase 2 — Review

One real duplicate found, everything else confirmed distinct:

- **Group 6's "large table with degrading query performance" and Group 8's "this query used to
  take 200ms and now takes 8 seconds" are the same investigation, framed two ways, not two
  distinct questions.** Both ask "how do you diagnose a query that got slower" — one from the
  angle of a table that's grown, the other from the angle of a specific regression. Merged into
  one page that answers both framings rather than shipping two pages that would repeat the same
  investigation checklist (check the execution plan, check for a stale/missing index, check
  parameter sniffing, check for blocking, check data growth) under different titles.
- **Aggregate functions (Group 1) and window functions (Group 2) are related but not
  overlapping** — the taxonomy already separates "what aggregate functions do to grouped rows"
  from "functions that see other rows without collapsing the result set," and that split holds up
  as two pages once actually written; window functions build on the aggregate-function vocabulary
  rather than repeating it.
- **Locking (Group 5) and Deadlock vs. Blocking (Group 5) are sequential, not overlapping** —
  locking is the mechanism, deadlock-vs-blocking is the specific comparison question that
  presumes the reader already has the locking mechanism in mind. Kept as two pages, cross-linked,
  same pattern as other tracks splitting a mechanism page from its own comparison follow-up.
- **Execution plans (Group 6) and how the optimizer picks an index (Group 6) are two angles on
  the same subsystem, not a duplicate** — one is "how do you read the plan," the other is "how
  did the optimizer decide what plan to produce." Kept separate; the second page's real-world
  section cross-links the first rather than re-explaining what a plan is.

No other gaps found against the user's original list; nothing added beyond the source
(`[new]`-free) — every one of the 28 source bullets is accounted for below, 27 of them becoming
their own page and 2 merging into 1.

**Boundary re-confirmed against `efcore/`**: this track owns raw SQL and database-engine
internals — indexing, execution plans, isolation levels/locking as a database feature, query
optimization. EF Core's own track owns the ORM layer on top of this (LINQ translation, change
tracking, migrations) and cross-links back here for the database-engine side wherever its own
explanation brushes against it (Connection Management, Bulk Operations). This track's pages
don't need to cross-link forward to EF Core — EF Core is already complete and any forward
reference belongs on that side, not this one.

## Phase 3 — Grouping into pages (27 pages)

One deliberate merge, from Phase 2 above:

- **"Performance Degraded Over Time"** bundles Group 6's "what would you check for a large table
  with degrading performance" with Group 8's "this query used to take 200ms and now takes 8
  seconds" — one scenario page answering the shared investigation checklist, framed to cover both
  the gradual-growth angle and the sudden-regression angle.

Everything else is one taxonomy bullet → one page, same default as every other completed track's
Phase 3 (a bullet only bundles with another when it has no independent depth on its own — every
remaining SQL bullet does).

## Phase 4 — Tier (by question type, not difficulty)

| Tier | Count | Pages |
|---|---|---|
| Basic | 11 | Primary Key vs. Foreign Key; WHERE vs. HAVING; INNER JOIN vs. LEFT JOIN; GROUP BY; NULL in Comparisons; Aggregate Functions; ACID; ORDER BY; DISTINCT; Stored Procedures; Views |
| Intermediate | 10 | Subqueries vs. Joins; CTEs; Window Functions; Clustered vs. Non-Clustered Index; Normalization vs. Denormalization; ROW_NUMBER() vs. RANK() vs. DENSE_RANK(); Covering Index; Composite Index; Pagination & OFFSET; SARGable Queries |
| Advanced | 6 | Isolation Levels; Deadlock vs. Blocking; Execution Plans; Performance Degraded Over Time; Locking; How the Optimizer Picks an Index |

Reasoning for the less-obvious calls:

- **Concurrency mechanics (Isolation Levels, Deadlock vs. Blocking, Locking) are all Advanced,
  not Intermediate** — [`interview-depth-and-priority.md`](../../rules/interview-depth-and-priority.md)
  names concurrency explicitly as Advanced-tier territory regardless of how often the terms get
  used day-to-day. **ACID stays Basic** even though it sits in the same taxonomy group, because it's
  pure definitional recall ("what does each letter guarantee") with no concurrency mechanics in
  the question itself — the mechanics live in the three Advanced pages above it.
- **Clustered vs. Non-Clustered Index is Intermediate, not Basic** — despite being one of the
  most commonly asked SQL questions, "what's physically different about how the data is stored"
  is a real comparison requiring you to know how a B-tree and a heap/leaf structure differ, not
  bare terminology recall.
- **Normalization vs. Denormalization is Intermediate, not Advanced** — it's a genuine trade-off
  comparison ("when does denormalizing make sense"), which places it above bare "what is X"
  recall, but the trade-off itself is standard data-modeling vocabulary every mid-level developer
  is expected to reason about, not an internals/architecture-depth question.
- **Execution Plans and How the Optimizer Picks an Index are both Advanced** — reading a plan and
  reasoning about the optimizer's own decision-making are internals/performance questions by the
  rule's own definition, even though "run an execution plan" is a very common ask.
- **Performance Degraded Over Time is Advanced** — a complex real-world scenario question by
  definition, and it's the one page in this track that deliberately pulls together the site's
  execution-plan, index, and locking vocabulary from the other Advanced pages into one
  investigation.
- **Stored Procedures and Views stay Basic** — "what is one, and what's a real reason to use it"
  / "how is it different from saving a query as text" are core-knowledge "what is X" questions at
  heart, matching how EF Core's "What Is EF Core" (also a what-is-it-plus-one-reason question)
  was kept Basic rather than Intermediate.

## Phase 5 — Priority (🔥 Must Know / ⭐ Should Know / 🧠 Deep Dive — independent of tier)

| Priority | Pages |
|---|---|
| 🔥 Must Know | Primary Key vs. Foreign Key; WHERE vs. HAVING; INNER JOIN vs. LEFT JOIN; GROUP BY; NULL in Comparisons; Aggregate Functions; ACID; Subqueries vs. Joins; CTEs; Window Functions; Clustered vs. Non-Clustered Index; Normalization vs. Denormalization; Isolation Levels; Deadlock vs. Blocking; Execution Plans; Performance Degraded Over Time |
| ⭐ Should Know | ORDER BY; DISTINCT; Stored Procedures; Views; ROW_NUMBER() vs. RANK() vs. DENSE_RANK(); Covering Index; Composite Index; Pagination & OFFSET; Locking |
| 🧠 Deep Dive | SARGable Queries; How the Optimizer Picks an Index |

SARGable Queries and How the Optimizer Picks an Index are this track's two 🧠 pages — both go
genuinely deep (what specifically defeats index usage at the predicate level, how the optimizer's
own cost-based decision-making works) but are rarely the literal opening question, matching the
one-or-two-🧠-page pattern on every other completed track.

## Phase 6 — Final roadmap

`sql/roadmap.html` groups by the same 8 concept categories as the Phase 1 taxonomy (concept
category, not tier — the site-wide convention). Numbering below is the tier-folder page number
(`sql/<tier>/<n>.html`).

| # | Concept | Tier | Priority | Page |
|---|---|---|---|---|
| 1.1 | Primary Key vs. Foreign Key | Basic | 🔥 | basic/1.html |
| 1.2 | WHERE vs. HAVING | Basic | 🔥 | basic/2.html |
| 1.3 | INNER JOIN vs. LEFT JOIN | Basic | 🔥 | basic/3.html |
| 1.4 | GROUP BY | Basic | 🔥 | basic/4.html |
| 1.5 | ORDER BY | Basic | ⭐ | basic/8.html |
| 1.6 | DISTINCT | Basic | ⭐ | basic/9.html |
| 1.7 | NULL in Comparisons | Basic | 🔥 | basic/5.html |
| 1.8 | Aggregate Functions | Basic | 🔥 | basic/6.html |
| 1.9 | Subqueries vs. Joins | Intermediate | 🔥 | intermediate/1.html |
| 2.1 | CTEs | Intermediate | 🔥 | intermediate/2.html |
| 2.2 | Window Functions | Intermediate | 🔥 | intermediate/3.html |
| 2.3 | ROW_NUMBER() vs. RANK() vs. DENSE_RANK() | Intermediate | ⭐ | intermediate/6.html |
| 3.1 | Clustered vs. Non-Clustered Index | Intermediate | 🔥 | intermediate/4.html |
| 3.2 | Covering Index | Intermediate | ⭐ | intermediate/7.html |
| 3.3 | Composite Index | Intermediate | ⭐ | intermediate/8.html |
| 3.4 | SARGable Queries | Intermediate | 🧠 | intermediate/10.html |
| 4.1 | Stored Procedures | Basic | ⭐ | basic/10.html |
| 4.2 | Views | Basic | ⭐ | basic/11.html |
| 5.1 | ACID | Basic | 🔥 | basic/7.html |
| 5.2 | Isolation Levels | Advanced | 🔥 | advanced/1.html |
| 5.3 | Deadlock vs. Blocking | Advanced | 🔥 | advanced/2.html |
| 5.4 | Locking | Advanced | ⭐ | advanced/5.html |
| 6.1 | Execution Plans | Advanced | 🔥 | advanced/3.html |
| 6.2 | How the Optimizer Picks an Index | Advanced | 🧠 | advanced/6.html |
| 6.3 | Pagination & OFFSET | Intermediate | ⭐ | intermediate/9.html |
| 7.1 | Normalization vs. Denormalization | Intermediate | 🔥 | intermediate/5.html |
| 8.1 | Performance Degraded Over Time | Advanced | 🔥 | advanced/4.html |

## Track-specific decisions and boundaries

- **This track owns raw SQL/database-engine internals** — indexing, execution plans, isolation
  levels and locking as a database feature, query optimization. `efcore/` owns the ORM layer on
  top of this (LINQ translation, change tracking, migrations) and already cross-links back here
  for the database-engine side (Connection Management, Bulk Operations) — this track doesn't need
  matching forward-links since `efcore/` is already complete.
- **Code examples are plain SQL** (T-SQL-flavored syntax, e.g. `TOP`, `OFFSET/FETCH`,
  `NEWID()` where a dialect choice is unavoidable) rather than any one vendor's dialect
  exclusively — same spirit as every other track picking one concrete syntax to show while the
  explanation stays conceptual. Called out per-page only where a dialect difference would
  actually mislead (e.g. `LIMIT` vs. `OFFSET/FETCH`).
- Icon is 🗃️, track color slate (`#334155` ink on `#e2e8f0` bg) — a new, previously-unused pick
  per [build-process.md](../../rules/build-process.md)'s reserved-colors list (🗄️ teal is already
  EF Core's).

## Known gaps

None — Phase 7 (writing the 27 pages) is the next and only remaining phase for this track.
