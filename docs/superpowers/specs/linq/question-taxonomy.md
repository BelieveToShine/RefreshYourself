# LINQ — Interview Question Taxonomy

**Phase 1 of the 7-phase pipeline** (see
[`specs/README.md`](../README.md)). Answers one question only: **what could an interviewer ask
about LINQ, for an experienced professional anywhere from 3+ years through senior/lead/architect/
principal?** Does not decide tier, priority, page grouping, or file names — that's
[`roadmap.md`](roadmap.md) (Phases 2–6).

## Source

The entire raw list below is the user's own proposed roadmap, handed over already organized into
3 tiers + a scenario section. This session's Phase 1 job was to format it into the site's
concept-group taxonomy shape (matching
[`csharp/question-taxonomy.md`](../csharp/question-taxonomy.md)'s reference format) and run a
light gap-hunt against outside LINQ/EF Core knowledge — see
[`gap-hunting.md`](../../rules/gap-hunting.md). Additions beyond the user's own list are marked
**[new]**. Nothing from the user's list was dropped at this phase — exclusions/merges are a Phase
2–3 decision and live in `roadmap.md`, not here.

**Scope boundary (confirmed before writing a single question):** this track owns LINQ **the
language feature** — operators, execution model, `IEnumerable`/`IQueryable`, query providers, and
the general mechanics of how a LINQ expression becomes SQL. It does **not** own EF Core's own
machinery (`DbContext` lifecycle, migrations, change tracking, compiled queries, query splitting,
connection pooling) or raw SQL/database-engine internals (index design, query-plan reading,
isolation levels) — those stay in `efcore/` and `sql/` respectively. Where a LINQ question
genuinely needs that context, the taxonomy says "cross-link, don't duplicate."

## How to read each concept

Same five variant types as every other track's Phase 1 (skip whichever don't apply):
**Core concept** (what is it) · **Understanding** (what happens under the hood) · **Comparison**
(X vs. Y, when to use which) · **Pitfall** (the mistake/misconception) · **Scenario** (a real
situation that requires using the knowledge).

---

## Group 1 — What LINQ Is, Syntax, and Projection

### What Is LINQ? Query Syntax vs. Method Syntax
- **Core concept** — What is LINQ, and what problem does it solve over hand-written loops?
- **Understanding** — What do the two syntaxes (query `from...select` vs. method `.Where().Select()`)
  actually compile down to — are they really different things, or the same thing twice?
- **Comparison** — Query syntax vs. method syntax — which operators have no query-syntax
  equivalent at all (e.g. `Sum`, `Count`, `Any`)? **[new]**

### Select vs. SelectMany
- **Core concept** — What's the difference between `Select` and `SelectMany`?
- **Understanding** — Why does `Select` over a nested collection give you a sequence of
  sequences, and what does `SelectMany` actually do to flatten it?
- **Scenario** — Flatten a list of customers, each with a nested list of orders, into one flat
  list of orders.

### Anonymous Types and Projection
- **Core concept** — What is an anonymous type, and why does `Select(x => new { ... })` need one?
- **Pitfall** — Anonymous types can't cross method boundaries by their real type — what are the
  actual workarounds (`var`, a named DTO, `dynamic`, tuples)?

---

## Group 2 — Element and Existence Operators

### `Where` vs. `First(predicate)`
- **Core concept** — `list.Where(x => ...).First()` vs. `list.First(x => ...)` — same result,
  so why would it matter which you write?
- **Understanding** — Does `First(predicate)` really skip building an intermediate filtered
  sequence, or is that only true for certain source types?

### `First` vs. `FirstOrDefault` vs. `Single` vs. `SingleOrDefault`
- **Core concept** — What does each of the four do on zero matches, one match, and multiple
  matches?
- **Comparison** — `First` vs. `Single` — this isn't just "one throws more," it's a different
  *correctness claim*: `First` says "I expect at least one, I don't care if there's more,"
  `Single` says "I expect exactly one, and more than one is a bug."
- **Comparison** — `FirstOrDefault` vs. `SingleOrDefault` — both return the default type value on
  zero matches, but `SingleOrDefault` still throws on 2+ matches; it only tolerates the
  *zero* case, not the *many* case.
- **Pitfall** — Using `FirstOrDefault` out of habit everywhere, even where the data model
  guarantees uniqueness (e.g. a lookup by primary key) — this silently hides a real bug (two rows
  with the same "unique" key) that `Single`/`SingleOrDefault` would have caught.
- **Pitfall** — Checking the result of `FirstOrDefault`/`SingleOrDefault` against `null` on a
  value-type sequence (e.g. `int`) — the "not found" default is `0`, not `null`, so the null
  check never fires. **[new]**

### `Any` vs. `Count() > 0`
- **Core concept** — Why is `Any()` preferred over `Count() > 0` to check for existence?
- **Understanding** — `Any()` short-circuits on the first match; `Count()` on `IEnumerable<T>`
  (without a fast-path like `ICollection.Count`) has to walk the entire sequence even though the
  caller only wanted a yes/no answer.

### `Any` vs. `All` vs. `Contains`
- **Core concept** — What does each one actually check, and what's the right one for "does at
  least one match," "do all match," and "is this exact value present"?
- **Pitfall** — `All()` on an empty sequence returns `true` (vacuous truth) — a common
  interview gotcha.

### `Where` vs. `OfType`
- **Core concept** — `list.Where(x => x is Cat)` vs. `list.OfType<Cat>()` — same filter, so why
  does `OfType` exist?
- **Understanding** — `OfType<T>()` filters *and* casts in one step, and skips `null` entries
  automatically, where a `Where` + manual cast does not.

---

## Group 3 — Ordering, Partitioning, Set and Aggregate Operators

### `OrderBy` vs. `OrderByDescending` vs. `ThenBy`
- **Core concept** — How do you sort by one key, then a tiebreaker key?
- **Pitfall** — Calling `OrderBy` twice instead of `OrderBy().ThenBy()` — the second `OrderBy`
  re-sorts from scratch and throws away the first sort instead of refining it.
- **Understanding** — `ThenBy`/`ThenByDescending` only exist on `IOrderedEnumerable<T>` — why
  does chaining a second plain `OrderBy` compile at all, and why is that the bug? **[new]**

### `Skip` vs. `Take`
- **Core concept** — What's the difference, and how do they combine for paging?
- **Pitfall** — `Skip`/`Take` paging without a stable `OrderBy` first — the page boundaries aren't
  guaranteed consistent between calls.

### `Distinct` vs. `DistinctBy`
- **Core concept** — What's the difference, and when did `DistinctBy` become available?
  *(`DistinctBy` — .NET 6+.)*
- **Comparison** — `Distinct()` with a custom `IEqualityComparer<T>` vs. `DistinctBy(keySelector)`
  — same end result for a single-key case, but `DistinctBy` needs no comparer class at all.

### `Cast` vs. `OfType`
- **Core concept** — Both work on non-generic/object-typed sequences — what's the actual
  difference in behavior?
- **Pitfall** — `Cast<T>()` throws `InvalidCastException` on the first element that doesn't match
  `T`; `OfType<T>()` just silently skips it. Picking the wrong one hides or crashes on bad data
  for the wrong reason.

### `Min` vs. `Max` vs. `Sum` vs. `Average` vs. `Count`
- **Core concept** — The five basic aggregates — what does each need (a selector? a comparable
  type?) and what does each return on an empty sequence?
- **Pitfall** — `Min`/`Max`/`Average` throw `InvalidOperationException` on an empty sequence;
  `Sum` returns `0`; `Count` returns `0`. Three different "empty" behaviors from five similar-
  looking methods.

### `Concat` vs. `Union` vs. `Intersect` vs. `Except`
- **Core concept** — Four ways to combine two sequences — which ones dedupe, and which keep
  duplicates?
- **Comparison** — `Concat` (keeps everything, including dupes) vs. `Union` (concat + dedupe) —
  the most commonly confused pair.

### `SequenceEqual` vs. Set Equality
- **Core concept** — Why can two sequences with identical elements still fail `SequenceEqual`?
- **Understanding** — `SequenceEqual` compares order-sensitively, element-by-element; checking
  "same elements, any order" needs `Except`/`Intersect`/a multiset comparison instead.

### `Aggregate` vs. `Sum`/`Count`
- **Core concept** — What can `Aggregate` do that the named aggregates can't?
- **Scenario** — Build a running total, or concatenate a sequence of strings with a custom
  separator, using `Aggregate` with a seed.

### `Append`/`Prepend` vs. Collection Modification
- **Core concept** — What do `Append`/`Prepend` actually do to the original sequence?
- **Pitfall** — Assuming `Append`/`Prepend` mutate the source — they return a *new* sequence;
  the original is untouched, same immutability contract as every other LINQ operator.

---

## Group 4 — Grouping, Joining, and Keyed Lookups

### `GroupBy` vs. `ToLookup`
- **Core concept** — Both group by a key — what's the real difference?
- **Comparison** — `GroupBy` is deferred and re-groups on every enumeration; `ToLookup` is
  immediate, builds the whole structure once, and behaves like a read-only, multi-value
  dictionary you can index into directly (`lookup[key]`, never throws on a missing key).

### `ToList`/`ToArray`/`ToDictionary` — Materializing a Sequence
- **Core concept** — All three force immediate execution — what's the actual difference between
  them, and when does `ToDictionary` throw at materialization time that the other two don't?
- **Pitfall** — `ToDictionary` throws `ArgumentException` immediately if the key selector produces
  a duplicate key — a materialization-time crash that `ToList`/`ToArray` would never hit.

### `ToDictionary` vs. `ToLookup` — One Key, One vs. Many Values
- **Core concept** — Same key selector, different contract: what happens when two elements share
  a key?
- **Comparison** — `ToDictionary` demands a unique key per element (throws otherwise);
  `ToLookup` is built for the many-values-per-key case from the start — this is the real decision
  point, not "which one is faster."

### `Join` vs. `GroupJoin`
- **Core concept** — What does each actually produce — a flat sequence, or a sequence of groups?
- **Understanding** — `Join` is LINQ's inner-join equivalent (flattened, one row per match pair);
  `GroupJoin` keeps each left-side element paired with *all* its matches as a nested sequence,
  which is also the building block for a left-outer join.

### Inner Join vs. Left Outer Join — `DefaultIfEmpty()` and the `GroupJoin` Pattern
- **Core concept** — LINQ has no `LEFT JOIN` keyword — how do you actually express one?
- **Understanding** — The standard pattern is `GroupJoin` followed by a `SelectMany` that calls
  `.DefaultIfEmpty()` on each inner group — `DefaultIfEmpty()` is what turns "no match" into one
  row with a default value instead of dropping the left-side element entirely.
- **Pitfall** — Writing a plain `Join` and expecting unmatched left-side rows to still appear —
  `Join` drops them; that's the whole difference from a left join.

### `SelectMany` vs. `Join`
- **Core concept** — Both can flatten/combine two sequences — when does each apply?
- **Comparison** — `SelectMany` flattens a one-to-many *navigation* already shaped as nested
  collections (e.g. `customer.Orders`); `Join` correlates two *independent* sequences by a key
  that isn't already a navigation property.

### `Zip` vs. `Join`
- **Core concept** — Both combine two sequences into pairs — what's the actual difference?
- **Pitfall** — `Zip` correlates by **position**, not by any key — pairing two sequences that
  happen to be the same length but aren't actually aligned produces silently wrong pairs, no
  exception, no warning.

### `let`, `into`, and Grouping in Query Syntax
- **Core concept** — What do `let` and `into` do in query syntax, and what do they look like
  translated to method syntax?
- **Understanding** — `let` introduces an intermediate named value (avoids recomputing an
  expression); `into` re-binds a query's result as a new range variable to continue querying it
  (used after a `group by` to keep filtering/ordering the groups).

---

## Group 5 — Execution Model: Deferred, Immediate, and `IEnumerable` vs. `IQueryable`

### Deferred vs. Immediate Execution
- **Core concept** — What does "deferred execution" actually mean — when does the query really
  run?
- **Understanding** — A query variable holding `Where`/`Select`/`OrderBy` etc. is not a result,
  it's a *plan* — nothing runs until something enumerates it (`foreach`, `ToList`, `Count()`,
  `First()`, …). Terminal operators (`ToList`, `Count`, `First`, `Sum`, …) force execution now;
  sequence-producing operators (`Where`, `Select`, `OrderBy`, …) just extend the plan.
- **Pitfall** — Assuming every LINQ operator is evaluated "the same lazy way" — `OrderBy` has to
  pull the *entire* source before it can yield the first element (it can't sort what it hasn't
  seen yet), unlike `Where`/`Select` which yield one element at a time, fully streaming.

### Lazy Evaluation vs. Materialization
- **Core concept** — What's the practical difference between keeping a query "live" vs. calling
  `ToList()`?
- **Pitfall** — **Multiple enumeration**: enumerating the same un-materialized query twice
  (e.g. once to check `Any()`, once in a `foreach`) re-runs the entire pipeline twice — against a
  database, that's two round trips, not one.

### `IEnumerable<T>` vs. `IQueryable<T>`
- **Core concept** — Both are "a sequence you can LINQ over" — what's the actual difference?
- **Understanding** — `IQueryable<T>` builds an **expression tree** instead of running code
  immediately; a provider (e.g. EF Core) walks that tree and translates it into something else
  entirely (SQL) before anything executes. `IEnumerable<T>`'s LINQ-to-Objects operators just run
  as compiled C# delegates over whatever's already in memory.
- **Comparison** — `Func<T,bool>` vs. `Expression<Func<T,bool>>` — this is the actual mechanism
  that makes the difference above possible; see Group 6.

### Multiple Enumeration and Side Effects
- **Core concept** — Why is a `Select` with a side effect (incrementing a counter, logging,
  calling an API) dangerous inside a deferred query?
- **Pitfall** — If the query gets enumerated more than once, the side effect runs more than
  once — a counter meant to run once silently runs N times, once per enumeration.

### Equality Comparers and Custom Equality
- **Core concept** — How do `Distinct`, `GroupBy`, `Join`, and the set operators decide two
  elements are "equal"?
- **Understanding** — They all default to `EqualityComparer<T>.Default` (which falls back to
  `Equals`/`GetHashCode`) unless an explicit `IEqualityComparer<T>` is passed — for a reference
  type with no overridden `Equals`, that means *reference* equality, not "same data," unless you
  supply a comparer or use a `*By` key-selector overload instead.

---

## Group 6 — Providers, Expression Trees, and SQL Translation

### `Func<T>` vs. `Expression<Func<T>>`
- **Core concept** — Both can represent `x => x.Age > 30` — what's the real difference?
- **Understanding** — A `Func<T>` is already-compiled, callable code. An `Expression<Func<T>>`
  is *data* — a tree describing the code's structure — that a provider can inspect, rewrite, and
  translate into something else (SQL) instead of ever running it as C#.

### How LINQ Providers Work
- **Core concept** — What is a "LINQ provider," and what's actually happening between writing a
  LINQ query and the database receiving SQL?
- **Understanding** — The provider implements `IQueryProvider`, receives the accumulated
  expression tree when a terminal operator is finally called, and only then translates/executes
  it — this is why the expression tree, not the "query," is the real unit of work a provider
  deals with.

### LINQ-to-Objects vs. LINQ-to-Entities
- **Core concept** — Same `Where`/`Select` syntax — why does it behave completely differently
  over a `List<T>` than over a `DbSet<T>`?
- **Comparison** — LINQ-to-Objects (`IEnumerable<T>`) runs real C# delegates against in-memory
  data. LINQ-to-Entities (`IQueryable<T>` via EF Core) never runs your lambda as C# at all — it
  translates the expression tree into SQL and runs *that* against the database instead.

### How LINQ Expressions Become SQL — Providers, Generated SQL, and Why You'd Still Look at the Query Plan
- **Core concept** — Walk through, end to end, what happens from `context.Users.Where(...)` to
  a `SELECT` statement hitting the database.
- **Understanding** — The provider's expression-tree visitor matches recognized .NET
  method/operator patterns to SQL constructs; only patterns the provider's translator explicitly
  understands make it into SQL — see "Why EF Core Cannot Translate Certain C# Methods" below for
  what happens when a pattern isn't recognized.
- **Cross-link, not duplicate** — EF Core-specific tooling for *inspecting* the generated SQL
  (`ToQueryString()`, EF Core logging, `IDbCommandInterceptor`) already has a home:
  `efcore/intermediate/1.html` ("LINQ → SQL Translation & Inspecting Generated SQL"). This page
  owns the general provider mechanism; it cross-links there for the EF Core-specific how-to
  rather than re-teaching it. Likewise, reading an actual query plan or reasoning about indexes
  is `sql/`'s territory, not re-covered here.

### Client-Side vs. Server-Side Evaluation
- **Core concept** — What does "this can't run on the server" actually mean for an `IQueryable`
  query?
- **Pitfall** — Calling a plain C# method/property the provider can't translate (e.g. a custom
  instance method, `string.IsNullOrWhiteSpace` on older EF Core versions, a computed C# property
  with real logic) anywhere inside a still-`IQueryable` expression either throws at translation
  time or — more dangerously, on older EF Core versions without strict client-eval blocking —
  silently pulls far more data to the client than intended and finishes the filter in memory.

### `AsEnumerable` vs. `AsQueryable`
- **Core concept** — What does switching between these two actually change about where the rest
  of the query runs?
- **Understanding** — `AsEnumerable()` on an `IQueryable` "freezes" everything written *before*
  it into server-side SQL, then everything *after* it runs as LINQ-to-Objects in memory —
  useful for deliberately finishing a query with a method the provider can't translate.
  `AsQueryable()` on an in-memory `IEnumerable` just wraps it so it *looks* queryable; nothing
  actually gets translated since there's no real database provider underneath.

### Why EF Core Cannot Translate Certain C# Methods
- **Core concept** — Why does a LINQ query that compiles fine sometimes throw at runtime with a
  translation error?
- **Understanding** — The provider's translator only recognizes a specific, documented set of
  .NET APIs/patterns it knows how to map to SQL. An arbitrary instance method, a custom
  extension method, or a call into unsupported string/date logic has no SQL equivalent the
  provider knows about — there is nothing to fall back to translate it with.
- **Pitfall** — "Just slap `.ToList()` in front of it" is not a fix, it's a different bug: it
  materializes the *entire unfiltered table* into memory before applying the untranslatable
  logic client-side — correct results, catastrophic performance on anything but a tiny table.

### Premature Materialization and `ToList()` Placement
- **Core concept** — Why does *where* you call `ToList()` in a LINQ chain change what actually
  runs in the database?
- **Pitfall** — Calling `ToList()`/`ToArray()` too early (before `Where`/`OrderBy`/`Take` that
  could have been pushed to the database) forces the entire unfiltered table into memory, then
  runs the rest of the pipeline in-process — same failure shape as the previous page's pitfall,
  but self-inflicted rather than translation-forced.

---

## Group 7 — EF Core Query Shape: N+1, Projection, Pagination, Async, Scale

### `Include` vs. Projection Using `Select`
- **Core concept** — Both can get you related data — what's the actual trade-off?
- **Comparison** — `Include` loads the *entire* related entity graph (every column, tracked by
  default); a `Select` projection fetches only the named fields into a shaped DTO — narrower,
  usually faster, and untracked by construction.
- **Cross-link, not duplicate** — the eager/explicit/lazy loading mechanics themselves
  (`Include`/`ThenInclude` syntax, lazy-loading proxies) are already `efcore/intermediate/4.html`
  ("Eager vs. Explicit vs. Lazy Loading"); this page owns the LINQ-shape decision (whole graph vs.
  projected shape), not the loading-strategy taxonomy.

### N+1 Queries and Navigation Properties
- **Core concept** — How does an innocent-looking `foreach` over navigation properties turn into
  hundreds of queries?
- **Understanding** — Accessing a lazy-loaded (or un-included) navigation property inside a loop
  triggers one new round trip *per iteration* — the query count scales with the outer result
  set's size, not with anything the developer wrote as a loop count.
- **Cross-link, not duplicate** — `efcore/basic/5.html` ("The N+1 Problem") and
  `efcore/advanced/4.html` ("Beyond N+1 — Common Performance Pitfalls") already own this from
  EF Core's own angle; this page's job is specifically the *LINQ query-shape* habits that cause
  or avoid it (projecting vs. navigating, `Select` vs. `Include`).

### Offset Pagination vs. Keyset Pagination
- **Core concept** — `Skip(n).Take(pageSize)` vs. keyset ("seek") pagination — what's the actual
  difference, expressed in LINQ?
- **Understanding** — Offset pagination (`OrderBy(...).Skip(n).Take(m)`) re-scans and discards
  the first `n` rows every single page; keyset pagination instead filters
  `Where(x => x.Id > lastSeenId).OrderBy(x => x.Id).Take(m)`, so the database can seek directly
  to the right spot instead of scanning from the start every time.
- **Pitfall** — Offset pagination's page contents can shift between requests if rows are
  inserted/deleted between page loads (the classic "skipped or duplicated row" bug) — keyset
  pagination, anchored to a real column value instead of a row count, doesn't have this problem.

### Async LINQ: `ToListAsync`, `AnyAsync`, `CountAsync`
- **Core concept** — Why do these async terminal operators exist instead of just awaiting a
  `Task`-wrapped `ToList()`?
- **Understanding** — These are EF Core's own async terminal operators (`Microsoft.EntityFrameworkCore`
  namespace, not LINQ-to-Objects) — they exist because `IQueryable<T>`'s standard LINQ terminal
  operators are synchronous by design; calling the sync version against a database blocks a
  thread for the entire round trip instead of freeing it.
- **Pitfall** — Calling `.ToList()` then awaiting elsewhere, or mixing sync terminal operators
  into an otherwise-async pipeline, defeats the entire purpose and can deadlock in certain
  synchronization-context setups (classic ASP.NET, not ASP.NET Core).

### Query Execution and Database Round Trips
- **Core concept** — For a single LINQ query against `IQueryable`, how many times does the
  database actually get hit?
- **Understanding** — One terminal operator call = one round trip, by default — the risk is
  always a LINQ *authoring* pattern (a loop triggering lazy loads, multiple enumeration of the
  same unmaterialized query) accidentally turning "one query" into many, not the terminal
  operator itself doing something hidden.

### `IAsyncEnumerable<T>` vs. `IEnumerable<T>`
- **Core concept** — What does `IAsyncEnumerable<T>` add over `IEnumerable<T>`?
- **Understanding** — `await foreach` over an `IAsyncEnumerable<T>` can `await` *between*
  elements as they stream in (e.g. from the database or network), instead of blocking until the
  entire sequence materializes first — this is what EF Core's `AsAsyncEnumerable()` returns.

### Streaming vs. Buffering Large Results
- **Core concept** — What's the real difference between streaming a large result set and
  buffering it?
- **Understanding** — Streaming (`await foreach` over `IAsyncEnumerable<T>`, or a plain
  `foreach` over a still-deferred `IEnumerable<T>`) processes one row at a time with roughly
  constant memory; buffering (`ToListAsync()`/`ToList()`) holds the *entire* result set in memory
  before anything can process it — fine for thousands of rows, a real problem at millions.

### PLINQ: `AsParallel`, Ordering, and Trade-offs
- **Core concept** — What does `.AsParallel()` actually change about how a LINQ-to-Objects query
  runs?
- **Understanding** — PLINQ partitions the in-memory source across multiple threads and merges
  results back — real CPU-bound work on a large in-memory collection can speed up, but ordering
  isn't preserved by default (`AsOrdered()` opts back in, at a real cost) and small/cheap-per-item
  workloads can get *slower* from partitioning/merge overhead.
- **Pitfall** — `.AsParallel()` is LINQ-to-Objects only — it has no meaning over an `IQueryable`
  database query, and the database, not PLINQ, is already doing its own query-level parallelism
  if any.

### Modern LINQ Operators: `Chunk`, `MaxBy`, `MinBy`, `CountBy`, `AggregateBy`, and the New Join Operators
- **Core concept** — What do these newer operators add, and which .NET version does each
  actually require? *(Verified against current .NET release notes, not assumed — see
  `roadmap.md`'s Phase 2 note for the version table and sources.)*
- **Understanding** — `Chunk(size)`, `MinBy`/`MaxBy` (.NET 6+); `CountBy`/`AggregateBy` (.NET
  9+, both reduce a "GroupBy then aggregate" into one streaming pass without materializing the
  intermediate groups); `LeftJoin`/`RightJoin` (.NET 10+, first-class outer-join operators that
  replace the `GroupJoin` + `SelectMany` + `DefaultIfEmpty()` pattern from Group 4 for the common
  case). `DistinctBy`/`UnionBy`/`IntersectBy`/`ExceptBy` (.NET 6+) are cross-referenced back to
  their own pages (Group 3/Group 3) rather than re-explained here.
- **Pitfall** — Writing any of these into code targeting an older TFM than they require — this
  is a compile-time failure, not a runtime one, but a common "why won't this build" interview
  tangent.

---

## Group 8 — LINQ Scenarios (interview-pressure, applied)

Each of these was supplied by the user as a distinct practical interview problem. Phase 3 keeps
them as their own pages (tagged `Scenario:` in the title, same convention already used on
`react/advanced/14–18.html`, `angular/advanced/11–16.html`) rather than folding them into the
comparison pages above — see `roadmap.md`.

1. Flatten customers and their nested orders using `SelectMany`.
2. Decide between `First`, `FirstOrDefault`, `Single`, and `SingleOrDefault` when records may be
   missing or duplicated.
3. Diagnose repeated database queries caused by deferred execution and multiple enumeration.
4. Investigate an API that's fast against an in-memory list but slow against a database.
5. Diagnose an N+1 query problem in an EF Core API.
6. Predict results and performance when the order of `Where`, `Select`, `OrderBy`, `Take`, and
   `ToList` changes.
7. Choose between `Distinct`, `DistinctBy`, `GroupBy`, and a custom equality comparer.
8. Find the highest-paid employee in each department.
9. Fix an EF Core query that can't translate a custom C# method, without loading the entire
   table.
10. Process millions of records, comparing buffering, streaming, batching, and database-side
    aggregation.

## Gap-hunt log (additions beyond the user's own list, marked **[new]** above)

- Query syntax operators with no method-syntax equivalent keyword (Group 1) — a real "wait, why
  can't I write `sum` in query syntax" interview tangent.
- `FirstOrDefault`/`SingleOrDefault` returning `0` (not `null`) for a value-type sequence (Group
  2) — one of the most commonly-missed real gotchas with these operators.
- `ThenBy` requiring `IOrderedEnumerable<T>`, and why a second bare `OrderBy` compiles but is
  wrong (Group 3) — explains a compile-succeeds-but-behavior-is-wrong trap directly adjacent to
  a topic the user already listed.

**Considered and excluded** (checked against outside LINQ knowledge, deliberately left out):
- Full custom `IQueryProvider`/`IQueryable<T>` *implementation* (writing your own provider from
  scratch) — real, but a niche library-author topic, not a mainstream interview question even at
  architect depth; the site covers *using*/*reasoning about* providers, not authoring one.
- `System.Linq.Dynamic.Core` / dynamic LINQ string-based queries — a third-party library, not
  part of LINQ itself.
- NHibernate/Dapper LINQ-adjacent query mechanics — out of scope; this site's ORM coverage is
  EF Core only (see `efcore/overview.md`).
