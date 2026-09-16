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

## Phase 3 — Grouping into pages (21 pages)

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
| Basic | 7 | What Is EF Core; `DbContext` & `DbSet`; Migrations & `SaveChanges()` — the Basics; Primary Keys & Relationships by Convention; The N+1 Problem; Projection — Selecting into a DTO; Configuring Relationships |
| Intermediate | 8 | LINQ → SQL Translation & Inspecting Generated SQL; Tracking vs. `AsNoTracking()`; The Change Tracker & `SaveChanges()`; Eager vs. Explicit vs. Lazy Loading; `IQueryable<T>` vs. `IEnumerable<T>`; Fluent API vs. Data Annotations; Migrations, Mechanically; Transactions Around `SaveChanges()` |
| Advanced | 6 | Compiled Queries; Query Splitting; Optimistic Concurrency & Row Versioning; Beyond N+1 — Common Performance Pitfalls; Bulk Operations; Connection Management |

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

None — Phase 7 (writing the 21 pages) is the next and only remaining phase for this track.
