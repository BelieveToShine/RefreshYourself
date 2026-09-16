# SQL — Interview Question Taxonomy

**Phase 1 of the 7-phase pipeline** (see [`docs/superpowers/specs/README.md`](../README.md)).
No tier, no priority, no page grouping yet. Kept tightly to the user's original SQL section of
the interview-prep plan — organized around interview questions, not a SQL tutorial, per the
user's own explicit instruction for this track.

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

---

## 2. Advanced Querying

- **Core concept** — What is a CTE (Common Table Expression), and why use one over a subquery?
- **Core concept** — What are window functions?
- **Comparison** — `ROW_NUMBER()` vs. `RANK()` vs. `DENSE_RANK()` — how do they differ when
  there are ties?

---

## 3. Indexes

- **Comparison** — Clustered vs. non-clustered index — what's physically different about how
  the data is stored?
- **Core concept** — What is a covering index?
- **Core concept** — What is a composite index, and does column order in it matter?
- **Core concept** — What makes a query SARGable (able to actually use an index), and what
  breaks it (e.g. wrapping an indexed column in a function)?

---

## 4. Stored Procedures & Views

- **Core concept** — What is a stored procedure, and what's a real reason to use one?
- **Core concept** — What is a view, and how is it different from just saving a query as text?

---

## 5. Transactions & Concurrency

- **Core concept** — What does ACID actually stand for, and what does each letter guarantee?
- **Core concept** — What are isolation levels, and what problem does each one prevent
  (dirty read, non-repeatable read, phantom read)?
- **Comparison** — Deadlock vs. blocking — what's the actual difference?
- **Core concept** — What is locking, mechanically, and how does it lead to blocking?

---

## 6. Performance & Optimization

- **Core concept** — What is a query execution plan, and what does reading one actually tell
  you?
- **Understanding** — How does the query optimizer decide which index to use (or not use)?
- **Core concept** — What are common pagination strategies, and what goes wrong with a large
  `OFFSET` on a big table?
- **Scenario** — What would you check for a large table with degrading query performance?

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
above, regrouped by concept. Nothing was added beyond the source list for this track.
