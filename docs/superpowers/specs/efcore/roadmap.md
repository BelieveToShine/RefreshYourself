# EF Core — Roadmap (Phases 2–6)

Phase 1 output: [`question-taxonomy.md`](question-taxonomy.md) — 7 concept groups, 24 raw
questions. This file is Phases 2–6: review, page grouping, tier, priority, and the final
roadmap — see [`specs/README.md`](../README.md) for what each phase means.

## Phase 2 — Review

No dedupe needed, but two things worth flagging:

- **"Migration" shows up in two groups at two different depths, not as a duplicate.** Group 1's
  bullet ("What is a migration, and what does `SaveChanges()` actually do?") is a Basic-level
  "what/why" pairing of two day-1 fundamentals. Group 5's bullet ("what files does `dotnet ef
  migrations add` actually produce, and what does applying one do?") is the Intermediate-level
  mechanical follow-up. Kept as two separate pages at two tiers rather than merged — this mirrors
  how other tracks split an intro-level "what is X" from its own later "how does X actually work"
  page.
- **`SaveChanges()` is touched from three angles across three different pages** (Group 1's
  intro, Group 2's Change Tracker mechanism, Group 6's transaction behavior) — not a duplicate;
  each page answers a different question about the same method (what/why, how via tracking,
  transactional guarantees), and each cross-links the others rather than re-explaining.
- **N+1 (Group 3) and "beyond N+1" (Group 7) are sequential, not overlapping** — the taxonomy's
  own "beyond" wording confirms the Group 7 page builds on Group 3's rather than re-covering it;
  kept as two pages, cross-linked.

No gaps found against the user's original list; nothing added beyond the source (`[new]`-free).

**Boundary re-confirmed**: raw SQL/database-engine concepts (indexing internals, execution
plans, isolation levels as a database feature) stay in the `sql/` track. This track only covers
EF Core's own side of things — what SQL it generates, how it tracks/loads/migrates — never how
the database itself executes that SQL.

## Phase 3 — Grouping into pages (21 pages at Phase 3; track total is now 35 after the 2026-10-07 gap pages — see the addendum at the end)

Two deliberate bundles, both because the source bullets don't carry enough independent depth to
justify their own page:

- **"LINQ → SQL Translation & Inspecting Generated SQL"** bundles Group 1's "how does EF Core
  turn a LINQ query into SQL" with Group 7's "how would you inspect the actual SQL generated" —
  the second question is the practical follow-up to the first (once you know translation
  happens, the natural next question is how to go look at it), and splitting them would force
  one page to send the reader to the other before it could say anything concrete.
- **"Eager vs. Explicit vs. Lazy Loading"** absorbs `Include`/`ThenInclude` as the concrete
  syntax for the eager-loading branch of the comparison, rather than giving `Include` its own
  page — it has no independent life outside that comparison.
- The Group 2 "read-only reporting endpoint" scenario folds into the **Tracking vs.
  `AsNoTracking()`** page's real-world section rather than becoming its own page — it's the
  comparison's own textbook use case, not a distinct concept.

Everything else is one taxonomy bullet → one page.

## Phase 4 — Tier (by question type, not difficulty)

| Tier | Count | Pages |
|---|---|---|
| Basic | 7 (9 after the 2026-10-07 addendum) | What Is EF Core; `DbContext` & `DbSet`; Migrations & `SaveChanges()` — the Basics; Primary Keys & Relationships by Convention; The N+1 Problem; Projection — Selecting into a DTO; Configuring Relationships |
| Intermediate | 8 (17 after the 2026-10-07 addendum) | LINQ → SQL Translation & Inspecting Generated SQL; Tracking vs. `AsNoTracking()`; The Change Tracker & `SaveChanges()`; Eager vs. Explicit vs. Lazy Loading; `IQueryable<T>` vs. `IEnumerable<T>`; Fluent API vs. Data Annotations; Migrations, Mechanically; Transactions Around `SaveChanges()` |
| Advanced | 6 (9 after the 2026-10-07 addendum) | Compiled Queries; Query Splitting; Optimistic Concurrency & Row Versioning; Beyond N+1 — Common Performance Pitfalls; Bulk Operations; Connection Management |

Reasoning for the less-obvious calls:

- **"The N+1 Problem" is Basic, not Intermediate** — despite being a real trap, "what N+1 is and
  how it shows up with EF Core" is treated here as the entry-level vocabulary every EF Core
  developer is expected to recognize on sight, same footing as "what is `DbContext`." The
  troubleshooting-depth follow-up ("beyond N+1, what else causes performance problems") is where
  the real comparison/practical-usage depth lives, and that one is Advanced.
- **"Fluent API vs. Data Annotations" is Intermediate, not Basic** — it's a genuine trade-off
  comparison ("when would you reach for one over the other"), which the depth rule places above
  bare "what is X" recall even though the underlying APIs themselves are basic-level syntax.
- **"Migrations, Mechanically" is Intermediate while "Migrations & `SaveChanges()` — the Basics"
  is Basic** — same topic, two depths (see Phase 2's note above); the file-level "what does
  `dotnet ef migrations add` actually produce" question requires having touched a real project,
  which is a step past pure definitional recall.
- **"Optimistic Concurrency & Row Versioning" is Advanced** — concurrency questions are named
  explicitly as Advanced-tier territory in
  [`interview-depth-and-priority.md`](../../rules/interview-depth-and-priority.md), regardless of
  how "basic" a row-version column looks in code.
- **"Compiled Queries" and "Query Splitting" are Advanced** — both are performance-tuning
  techniques reached for only after a real measured problem, not day-to-day usage.
- **"Connection Management" is Advanced** — "does it open one connection per query, per
  `DbContext`, or something else" is an internals question about EF Core's own runtime behavior,
  not a practical how-to.

## Phase 5 — Priority (🔥 Must Know / ⭐ Should Know / 🧠 Deep Dive — independent of tier)

| Priority | Pages |
|---|---|
| 🔥 Must Know | What Is EF Core; `DbContext` & `DbSet`; Migrations & `SaveChanges()` — the Basics; The N+1 Problem; Projection; Tracking vs. `AsNoTracking()`; Eager vs. Explicit vs. Lazy Loading; `IQueryable<T>` vs. `IEnumerable<T>`; Optimistic Concurrency & Row Versioning; Beyond N+1 — Common Performance Pitfalls |
| ⭐ Should Know | Primary Keys & Relationships by Convention; Configuring Relationships; LINQ → SQL Translation & Inspecting Generated SQL; The Change Tracker & `SaveChanges()`; Fluent API vs. Data Annotations; Migrations, Mechanically; Transactions Around `SaveChanges()`; Bulk Operations; Connection Management |
| 🧠 Deep Dive | Compiled Queries; Query Splitting |

Compiled Queries and Query Splitting are this track's two 🧠 pages — both go genuinely deep
(query-plan caching, `AsSplitQuery()`'s cartesian-explosion trade-off) but are rarely the literal
opening question, matching the one-or-two-🧠-page pattern on every other completed track.

## Phase 6 — Final roadmap

`efcore/roadmap.html` groups by the same 7 concept categories as the Phase 1 taxonomy (concept
category, not tier — the site-wide convention). Numbering below is the tier-folder page number
(`efcore/<tier>/<n>.html`):

| # | Concept | Tier | Page |
|---|---|---|---|
| 1.1 | What Is EF Core | Basic | basic/1.html |
| 1.2 | `DbContext` & `DbSet` | Basic | basic/2.html |
| 1.3 | Migrations & `SaveChanges()` — the Basics | Basic | basic/3.html |
| 1.4 | LINQ → SQL Translation & Inspecting Generated SQL | Intermediate | intermediate/1.html |
| 1.5 | Primary Keys & Relationships by Convention | Basic | basic/4.html |
| 2.1 | Tracking vs. `AsNoTracking()` | Intermediate | intermediate/2.html |
| 2.2 | The Change Tracker & `SaveChanges()` | Intermediate | intermediate/3.html |
| 3.1 | Eager vs. Explicit vs. Lazy Loading | Intermediate | intermediate/4.html |
| 3.2 | The N+1 Problem | Basic | basic/5.html |
| 4.1 | `IQueryable<T>` vs. `IEnumerable<T>` | Intermediate | intermediate/5.html |
| 4.2 | Projection — Selecting into a DTO | Basic | basic/6.html |
| 4.3 | Compiled Queries | Advanced | advanced/1.html |
| 4.4 | Query Splitting | Advanced | advanced/2.html |
| 5.1 | Fluent API vs. Data Annotations | Intermediate | intermediate/6.html |
| 5.2 | Migrations, Mechanically | Intermediate | intermediate/7.html |
| 5.3 | Configuring Relationships | Basic | basic/7.html |
| 6.1 | Transactions Around `SaveChanges()` | Intermediate | intermediate/8.html |
| 6.2 | Optimistic Concurrency & Row Versioning | Advanced | advanced/3.html |
| 7.1 | Beyond N+1 — Common Performance Pitfalls | Advanced | advanced/4.html |
| 7.2 | Bulk Operations | Advanced | advanced/5.html |
| 7.3 | Connection Management | Advanced | advanced/6.html |

## Track-specific decisions and boundaries

- **Raw SQL/database-engine internals stay entirely out of this track** — indexing internals,
  execution plans, isolation levels as a database feature are the `sql/` track's job; this track
  only covers EF Core's own side (what SQL it generates, how it tracks/loads/migrates). Where a
  page's natural explanation brushes against the database side (e.g. Connection Management,
  Bulk Operations), cross-link to `sql/` rather than re-teaching it — `sql/` is still Phase 1 as
  of this writing, so those links point forward to not-yet-written pages, matching the
  established site convention for forward-linking within a track already used in `webapi/`.
- **Code examples are C#**, matching every other track on this site.
- Icon is 🗄️, track color teal (`#0f766e` ink on `#ccfbf1` bg).

## Known gaps

None among the original 21 pages (all written); the 14 gap pages found afterwards were written 2026-10-07 — see the addendum below.

## Addendum 2026-10-06 — gap pages (Phases 2–6)

Source: [`review-2026-10-06.md`](../../../review-2026-10-06.md) §5 candidate list, checked against the
21 live pages (grep of `efcore/*`) per [`gap-hunting.md`](../../../rules/gap-hunting.md). Existing pages are
**not edited**; each gap gets a new page taking the next free number in its tier (numbering is
permanent — recounted from disk: Basic 7, Intermediate 8, Advanced 6 before this addendum). Tier =
question type; priority = interview likelihood; rows within a tier are ordered hot-first by number.
**Status: all pages in this addendum were written and wired on 2026-10-07.** Total after: 21 + 14 = **35** (Basic 9,
Intermediate 17, Advanced 9).

| Page | Tier | Pri | Title | Interview question | Scope (one sentence) | Diagram idea | Cross-links |
|---|---|---|---|---|---|---|---|
| basic/8 | Basic | ⭐ | Cascade Delete Behaviours | "What happens to child rows when you delete the parent?" | Required vs. optional FK defaults (`Cascade`, `ClientSetNull`), and `Restrict`/`SetNull`/`NoAction` set via `OnDelete`. | Parent with 3 children, four panels showing each behaviour's outcome. | basic/7, sql/basic/14 |
| basic/9 | Basic | ⭐ | Code-First vs. Database-First | "Code-first or database-first — and how do you reverse-engineer an existing DB?" | Model-drives-schema (migrations) vs. `dotnet ef dbcontext scaffold` from an existing schema, and when each fits. | Two arrows: C# model → migration → DB, and DB → scaffold → C# model. | basic/3, intermediate/7 |
| intermediate/9 | Intermediate | 🔥 | Raw SQL in EF Core & Injection | "How do you run raw SQL or a stored procedure in EF Core, and is it safe?" | `FromSql` (interpolated = parameterized) vs. `FromSqlRaw` concatenation trap, `ExecuteSql`, composability limits, stored-proc calls. | Same user input flowing through concatenation (breaks out) vs. parameter (stays data). | sql/advanced/10, sql/basic/10, advanced/5 |
| intermediate/10 | Intermediate | 🔥 | Repository & Unit of Work over EF Core | "Do you need a repository pattern on top of EF Core?" | `DbSet` is already a repository and `DbContext` a unit of work; when a thin wrapper still earns its place (testing seam, query reuse) and when it only hides features. | Layer stack: controller → repo → DbContext, with the redundant layer highlighted. | basic/2, intermediate/3, intermediate/17 |
| intermediate/11 | Intermediate | ⭐ | Global Query Filters & Soft Delete | "How would you implement soft delete or multi-tenancy once, for every query?" | `HasQueryFilter`, `IsDeleted` flag via interceptor/override, `IgnoreQueryFilters()`, and the required-navigation filter gotcha. | Query pipeline with an automatic WHERE injected; bypass arrow for `IgnoreQueryFilters`. | intermediate/1, advanced/8 |
| intermediate/12 | Intermediate | ⭐ | Find vs. FirstOrDefault vs. SingleOrDefault | "What's the difference between `Find` and `FirstOrDefault`?" | `Find` checks the tracker first and is key-only (no DB hit if tracked); `First*`/`Single*` always query, differ on duplicates. | Flow: tracker hit short-circuits vs. query always going to DB. | intermediate/2, intermediate/3 |
| intermediate/13 | Intermediate | ⭐ | Disconnected Entities: Attach vs. Update | "A detached entity comes in from an API — how do you save it?" | `Attach`, `Update` (marks all columns), setting `EntityState`, vs. load-then-patch; what each emits as SQL. | Detached object entering context; three branches to different UPDATE shapes. | intermediate/3, advanced/3 |
| intermediate/14 | Intermediate | ⭐ | Inheritance Mapping: TPH, TPT & TPC | "How does EF Core map a class hierarchy to tables?" | Table-per-hierarchy (default, discriminator), per-type, per-concrete-type: join cost vs. nullable columns trade-off. | Three table layouts of the same Animal/Dog/Cat hierarchy side by side. | intermediate/6, sql/basic/3 |
| intermediate/15 | Intermediate | ⭐ | Owned Types & Value Converters | "How do you map a value object or store an enum as a string?" | `OwnsOne` (same-table value objects) and `HasConversion` for enum/strongly-typed-id/JSON mapping, and the comparer caveat. | Object with nested Address mapped to columns; converter box between C# and DB type. | intermediate/6, basic/4 |
| intermediate/16 | Intermediate | ⭐ | Indexes, Unique Constraints & Composite Keys in the Model | "How do you add an index or unique constraint in EF Core?" | `HasIndex` (unique, composite, filtered, included columns), `HasAlternateKey`, composite PKs, and why key order matters. | Model snippet → CREATE INDEX output with column-order arrow. | intermediate/6, advanced/4, sql/intermediate/8 |
| intermediate/17 | Intermediate | ⭐ | Testing EF Core Code: SQLite vs. InMemory vs. Real DB | "How do you unit-test code that uses EF Core?" | InMemory ignores relational behaviour (constraints, transactions), SQLite in-memory is closer, a real DB container is most faithful; pick by what you must prove. | Fidelity ladder: InMemory → SQLite → real DB against speed. | intermediate/1, intermediate/10 |
| advanced/7 | Advanced | ⭐ | Connection Resiliency & Execution Strategies | "How do you handle transient database failures in EF Core?" | `EnableRetryOnFailure`, execution strategy, why user-initiated transactions must run inside `strategy.ExecuteAsync`, idempotency risk. | Timeline of failed attempt → backoff → retry, with a transaction wrapped around the retry unit. | advanced/6, intermediate/8 |
| advanced/8 | Advanced | ⭐ | Interceptors & Audit Trails | "How would you add audit fields (CreatedAt/ModifiedBy) automatically?" | `SaveChangesInterceptor` vs. overriding `SaveChanges`, reading `ChangeTracker.Entries()`, and what bulk `ExecuteUpdate` bypasses. | SaveChanges pipeline with an interceptor hook stamping entities. | intermediate/3, intermediate/11, advanced/5 |
| advanced/9 | Advanced | 🧠 | Keyless Entities & Views | "How do you map a SQL view or query result with no primary key?" | `HasNoKey` / `ToView`, read-only and untracked, vs. `FromSql` projections for reporting. | Table-backed entity vs. view-backed keyless entity, with the tracker bypassed. | intermediate/9, sql/basic/11 |

### Dropped / merged (with reasons)

- **Seeding (`HasData`)** — dropped: tutorial-level, rarely a standalone interview question; a one-line fact about migrations.
- **Raw SQL + injection** merged into one page (injection is the "so what" of raw SQL).
- **Owned types + value converters** merged (both are "map a non-entity C# shape to columns").
- **Repository + Unit of Work** merged (one question: "is the wrapper worth it?").
- Own gap-hunt additions: **Code-First vs. Database-First**, **Indexes/Unique/Composite Keys**. Considered and rejected: shadow properties, JSON columns, temporal tables (niche); DbContext pooling/thread-safety (already in basic/2 and advanced/6).
