# SQL — Interview Question Taxonomy

**Phase 1 of the 7-phase pipeline** (see [`docs/superpowers/specs/README.md`](../README.md)).
Kept tightly to the user's original SQL section of the interview-prep plan — organized around
interview questions, not a SQL tutorial, per the user's own explicit instruction for this track.
**`[new]` marks the 12 questions added by a Phase 2 gap-hunt** (see
[`gap-hunting.md`](../../rules/gap-hunting.md) and this file's own "Gap-hunt log" at the bottom)
— this track had already gone through all 7 phases and was fully written (27 pages) before that
hunt happened; those 12 additions are now going through Phases 3–7 of their own.

---

## 1. Core Query Fundamentals

- **Comparison** — Primary key vs. foreign key — what does each actually enforce?
- **Comparison** — `WHERE` vs. `HAVING` — why can't you filter on an aggregate in `WHERE`?
- **Comparison** — `INNER JOIN` vs. `LEFT JOIN` — what changes about unmatched rows?
- **Core concept** — What does `GROUP BY` actually do to the rows returned?
- **Core concept** — What does `ORDER BY` guarantee that a plain `SELECT` doesn't?
- **Core concept** — What does `DISTINCT` do, and what's its cost on a large result set?
- **Core concept** — How does SQL handle `NULL` in comparisons — why does `= NULL` never match?
- **Core concept** — What do the common aggregate functions do (`COUNT`, `SUM`, `AVG`, `MIN`,
  `MAX`), and how do they interact with `NULL`?
- **Core concept** — What is a subquery, and when would you use one instead of a join?
- **[new] Comparison** — `UNION` vs. `UNION ALL` — what does `UNION` actually do that `UNION
  ALL` skips, and what does that cost?
- **[new] Understanding** — What is the logical order a SQL query actually executes in
  (`FROM` → `WHERE` → `GROUP BY` → `HAVING` → `SELECT` → `ORDER BY`), and why does that explain
  why you can't reference a `SELECT` alias in a `WHERE` clause?
- **[new] Core concept** — A foreign key can specify `ON DELETE`/`ON UPDATE` behavior — what do
  `CASCADE`, `SET NULL`, and `RESTRICT`/`NO ACTION` each actually do, and what's the risk of
  reaching for `CASCADE` without thinking it through?
- **[new] Comparison** — `EXISTS` vs. `IN` vs. a `JOIN` for filtering on a related table — how do
  they differ once `NULL` values are involved, and does it matter for performance?

---

## 2. Advanced Querying

- **Core concept** — What is a CTE (Common Table Expression), and why use one over a subquery?
- **Core concept** — What are window functions?
- **Comparison** — `ROW_NUMBER()` vs. `RANK()` vs. `DENSE_RANK()` — how do they differ when
  there are ties?
- **[new] Core concept** — What is a recursive CTE, and what does it let you do (hierarchy
  traversal — an org chart, a category tree) that a non-recursive query structurally can't?
- **[new] Comparison** — Temp tables vs. table variables vs. CTEs — when would you actually
  reach for each, and what differs (scope, whether statistics get kept, whether it can be
  indexed)?

---

## 3. Indexes

- **Comparison** — Clustered vs. non-clustered index — what's physically different about how
  the data is stored?
- **Core concept** — What is a covering index?
- **Core concept** — What is a composite index, and does column order in it matter?
- **Core concept** — What makes a query SARGable (able to actually use an index), and what
  breaks it (e.g. wrapping an indexed column in a function)?
- **[new] Comparison** — Index seek vs. index scan vs. table scan — what does each actually mean
  in an execution plan, and is a table scan always a bad sign (it isn't, on a small table)?

---

## 4. Stored Procedures & Views

- **Core concept** — What is a stored procedure, and what's a real reason to use one?
- **Core concept** — What is a view, and how is it different from just saving a query as text?
- **[new] Comparison** — A materialized/indexed view vs. a regular view — what's the actual
  trade-off (query speed vs. staleness and refresh cost), and when does a regular view stop
  being good enough?
- **[new] Core concept** — What is a trigger, and why are they often discouraged even though
  they're a real, working tool for enforcing behavior on data changes?

---

## 5. Transactions & Concurrency

- **Core concept** — What does ACID actually stand for, and what does each letter guarantee?
- **Core concept** — What are isolation levels, and what problem does each one prevent
  (dirty read, non-repeatable read, phantom read)?
- **Comparison** — Deadlock vs. blocking — what's the actual difference?
- **Core concept** — What is locking, mechanically, and how does it lead to blocking?
- **[new] Core concept** — What do `BEGIN TRANSACTION`, `COMMIT`, `ROLLBACK`, and a `SAVEPOINT`
  actually do, mechanically — and what's the difference between autocommit and an explicit
  transaction?

---

## 6. Performance & Optimization

- **Core concept** — What is a query execution plan, and what does reading one actually tell
  you?
- **Understanding** — How does the query optimizer decide which index to use (or not use)?
- **Core concept** — What are common pagination strategies, and what goes wrong with a large
  `OFFSET` on a big table?
- **Scenario** — What would you check for a large table with degrading query performance?
- **[new] Understanding** — What makes a bulk insert/update fast at the database's own level
  (minimal logging, batch size, the cost of maintaining indexes during a large load), separate
  from anything an ORM does on top of it?
- **[new] Core concept** — What is table partitioning, and what problem does it actually solve
  for a very large table that a good index alone doesn't?

---

## 7. Data Modeling

- **Comparison** — Normalization vs. denormalization — what's the actual trade-off, and when
  does denormalizing make sense?

---

## 8. Scenario Questions

- **Scenario** — This query used to take 200ms and now takes 8 seconds. How would you
  investigate?

---

## Coverage note for Phase 2

Every bullet from the user's original SQL Basic/Intermediate/Advanced lists is represented
above, regrouped by concept — 28 questions, none altered or dropped.

## Gap-hunt log (Phase 2, run after this track was already fully built)

Per [`gap-hunting.md`](../../rules/gap-hunting.md): this track's original Phase 2 was a re-read
of the source list for internal consistency, not an active check against outside SQL knowledge
for what the source list never mentioned at all. Run properly, once, after the fact — this is
what should happen *during* Phase 2 on every track from here on, not a one-off correction.

**Added (12), each placed in whichever existing concept group it actually belongs to** — no new
groups needed, everything fit:

| Added | Group | Why it's a real gap |
|---|---|---|
| `UNION` vs. `UNION ALL` | 1. Core Query Fundamentals | Extremely common comparison, no equivalent existed |
| Logical query execution order | 1. Core Query Fundamentals | Foundational, explains a real everyday confusion (alias in `WHERE`) |
| FK referential actions (`CASCADE`/`SET NULL`/`RESTRICT`) | 1. Core Query Fundamentals | PK vs. FK covered what a key enforces, not what it *does* on delete/update |
| `EXISTS` vs. `IN` vs. `JOIN` | 1. Core Query Fundamentals | "Subquery vs. join" doesn't cover `EXISTS`'s distinct `NULL` behavior |
| Recursive CTEs | 2. Advanced Querying | Natural, commonly-asked follow-up to the existing CTE question |
| Temp tables vs. table variables vs. CTEs | 2. Advanced Querying | Real 3-way trade-off, fits this track's own T-SQL-flavored choice |
| Index seek vs. scan vs. table scan | 3. Indexes | Distinct from "how the optimizer picks an index" — the concrete plan-reading vocabulary |
| Materialized/indexed views vs. regular views | 4. Stored Procedures & Views | Natural follow-up to "what is a view" |
| Triggers | 4. Stored Procedures & Views | Classic topic, no mention anywhere |
| Transaction control mechanics (`BEGIN`/`COMMIT`/`ROLLBACK`/`SAVEPOINT`) | 5. Transactions & Concurrency | ACID covers the guarantees, not how you actually control one |
| Bulk operations from the database's own side | 6. Performance & Optimization | Real senior topic in its own right, independent of any ORM |
| Table partitioning | 6. Performance & Optimization | Fits this site's stated architect-level audience |

**Considered and explicitly excluded**, same discipline as what got added:

- **The numbered normal forms (1NF/2NF/3NF) themselves** — the existing "normalization vs.
  denormalization" question already covers the practically-relevant trade-off; rattling off the
  numbered-form definitions is closer to textbook recall than an interview differentiator.
- **Basic constraint types** (`CHECK`, `UNIQUE`, `NOT NULL`, `DEFAULT`) — genuinely more
  syntax-tutorial than interview depth once PK/FK and `NULL` handling are already covered; this
  site is explicitly not a tutorial (see `product-principle.md`).
- **Replication and sharding** — real senior topics, but cloud/infrastructure-scaling territory
  that belongs to the `azure/` track's own scope, not core SQL's.
- **Vendor-specific JSON functions** (`JSON_VALUE`, `OPENJSON`, etc.) — a real modern feature,
  but more a syntax/version detail than a genuine interview differentiator at this track's depth.

**This extends an already-fully-built, live track.** Per `gap-hunting.md`, that means the 12
additions get their own new pages through Phases 3–7 (see [`roadmap.md`](roadmap.md)'s own
addendum), not edits to the 27 already-verified pages — safer, and consistent with how every
other addition on every other track has been handled.
