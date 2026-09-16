# EF Core — Interview Question Taxonomy

**Phase 1 of the 7-phase pipeline** (see [`docs/superpowers/specs/README.md`](../README.md)).
No tier, no priority, no page grouping yet. Kept tightly to the user's original EF Core section
of the interview-prep plan.

**Boundary with the SQL track:** this track covers EF Core as the *ORM layer* — how LINQ
translates to SQL, tracking, loading strategies, migrations. Raw SQL concepts (indexing
internals, execution plans, isolation levels as a database feature) live in the `sql/` track;
here they only show up from EF Core's side (e.g. "what SQL does EF Core generate for this
query," not "how does the database engine choose an index").

---

## 1. EF Core Fundamentals

- **Core concept** — What is EF Core, and what problem does it solve over writing raw SQL by
  hand?
- **Core concept** — What is `DbContext`, and what is `DbSet<T>`?
- **Core concept** — What is a migration, and what does `SaveChanges()` actually do?
- **Understanding** — How does EF Core turn a LINQ query into SQL?
- **Core concept** — How does EF Core map primary keys and relationships by convention?

---

## 2. Tracking & Change Management

- **Comparison** — Tracking vs. `AsNoTracking()` — what does each actually cost/save?
- **Core concept** — What is the Change Tracker, and how does `SaveChanges()` use it to know
  what to write?
- **Scenario** — You're building a read-only reporting endpoint — which tracking mode, and why?

---

## 3. Loading Strategies

- **Comparison** — Eager loading vs. explicit loading vs. lazy loading — what triggers each, and
  when does the actual query run for each?
- **Core concept** — What do `Include` and `ThenInclude` do?
- **Core concept** — What is the N+1 problem, and how does it show up with EF Core specifically?

---

## 4. Querying & Translation

- **Comparison** — `IQueryable<T>` vs. `IEnumerable<T>` — where does the query actually execute
  for each, and what's the practical consequence of switching between them mid-query?
- **Core concept** — What is projection (`Select`ing into a DTO), and why does it help query
  performance?
- **Core concept** — What is a compiled query, and when would you reach for one?
- **Core concept** — What is query splitting, and what problem does it solve?

---

## 5. Modeling

- **Comparison** — Fluent API vs. data annotations for configuring a model — when would you
  reach for one over the other?
- **Core concept** — What is a migration, mechanically — what files does `dotnet ef migrations
  add` actually produce, and what does applying one do?
- **Core concept** — How does EF Core configure relationships (one-to-many, many-to-many)?

---

## 6. Transactions & Concurrency

- **Core concept** — How does EF Core handle transactions by default around `SaveChanges()`?
- **Core concept** — What is optimistic concurrency, and how does EF Core implement it (a
  concurrency token / row version)?

---

## 7. Performance

- **Core concept** — Beyond N+1, what else commonly causes EF Core performance problems (over-
  fetching without projection, tracking overhead, missing indexes on filtered columns)?
- **Core concept** — What are bulk operations, and why doesn't EF Core's default `SaveChanges()`
  behave well for a large batch update/delete?
- **Understanding** — How would you inspect the actual SQL EF Core generates for a given LINQ
  query?
- **Understanding** — What does connection management look like with EF Core — does it open one
  connection per query, per `DbContext`, or something else?

---

## Coverage note for Phase 2

Every bullet from the user's original EF Core Basic/Intermediate/Advanced lists is represented
above, regrouped by concept — including the "LINQ → IQueryable → EF Core → SQL translation →
database → materialization → .NET objects" pipeline the user specifically called out, which sits
behind the Querying & Translation group's `IQueryable` vs. `IEnumerable` question. Nothing was
added beyond the source list for this track.
