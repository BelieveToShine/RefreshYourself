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

## Phase 2 addendum — gap-hunt, run after Phase 7 had already completed

Per [`gap-hunting.md`](../../rules/gap-hunting.md): the original Phase 2 above was a re-read of
the source list for internal consistency, not an active check against outside SQL knowledge —
it never had a step that could catch a topic the source list simply never mentioned. A proper
gap-hunt, run once this was written down as a rule, found **12 real, commonly-asked SQL
questions** with no source-list mention at all. Full list, reasoning per item, and what was
considered and explicitly excluded is in
[`question-taxonomy.md`](question-taxonomy.md#gap-hunt-log-phase-2-run-after-this-track-was-already-fully-built) —
not duplicated here.

Because this track had already gone through Phases 3–7 and was live, these 12 additions get
their **own new pages** rather than edits to the 27 already-verified ones (see
`gap-hunting.md`'s own note on why: safer, and consistent with how additions are handled on
every other track). Phases 3–6 below are extended for exactly these 12; the original 27 rows
are unchanged.

## Phase 3 — Grouping into pages (27 + 12 = 39 pages)

One deliberate merge, from Phase 2 above:

- **"Performance Degraded Over Time"** bundles Group 6's "what would you check for a large table
  with degrading performance" with Group 8's "this query used to take 200ms and now takes 8
  seconds" — one scenario page answering the shared investigation checklist, framed to cover both
  the gradual-growth angle and the sudden-regression angle.

Everything else is one taxonomy bullet → one page, same default as every other completed track's
Phase 3 (a bullet only bundles with another when it has no independent depth on its own — every
remaining SQL bullet does). **This holds for all 12 gap-hunt additions too** — each earns its
own page rather than bundling with a neighbor; none of the 12 were thin enough to need it (see
the taxonomy's gap-hunt log for why each was judged real enough to stand alone).

## Phase 4 — Tier (by question type, not difficulty)

| Tier | Count | Pages |
|---|---|---|
| Basic | 15 | Primary Key vs. Foreign Key; WHERE vs. HAVING; INNER JOIN vs. LEFT JOIN; GROUP BY; NULL in Comparisons; Aggregate Functions; ACID; ORDER BY; DISTINCT; Stored Procedures; Views; **UNION vs. UNION ALL; Logical Query Execution Order; Foreign Key Referential Actions; Transaction Control Mechanics** |
| Intermediate | 16 | Subqueries vs. Joins; CTEs; Window Functions; Clustered vs. Non-Clustered Index; Normalization vs. Denormalization; ROW_NUMBER() vs. RANK() vs. DENSE_RANK(); Covering Index; Composite Index; Pagination & OFFSET; SARGable Queries; **EXISTS vs. IN vs. JOIN; Recursive CTEs; Temp Tables vs. Table Variables vs. CTEs; Index Seek vs. Scan vs. Table Scan; Materialized/Indexed Views vs. Regular Views; Triggers** |
| Advanced | 8 | Isolation Levels; Deadlock vs. Blocking; Execution Plans; Performance Degraded Over Time; Locking; How the Optimizer Picks an Index; **Bulk Operations from the Database's Own Side; Table Partitioning** |

Bold entries are the 12 gap-hunt additions. Tier reasoning for them:

- **UNION vs. UNION ALL, Logical Query Execution Order** are Basic — pure "what does this
  guarantee"/"how does this work" recall, same footing as WHERE vs. HAVING and GROUP BY already
  on this tier.
- **Foreign Key Referential Actions and Transaction Control Mechanics** are Basic, not
  Intermediate — both are "what does this actually do" questions about mechanisms already named
  at Basic (PK/FK, ACID), not a comparison or troubleshooting question in their own right.
- **EXISTS vs. IN vs. JOIN, Recursive CTEs, Temp Tables vs. Table Variables vs. CTEs,
  Materialized/Indexed Views, and Triggers** are Intermediate — each is a genuine
  comparison/practical-usage question, one level past bare recall.
- **Index Seek vs. Scan vs. Table Scan** is Intermediate, not Advanced — it's the concrete
  vocabulary for reading a plan, the same depth as Clustered vs. Non-Clustered already on this
  tier, not the internals-of-the-optimizer question that Execution Plans/optimizer-choice
  (Advanced) actually ask.
- **Bulk Operations from the Database's Own Side** is Advanced — a genuine performance-internals
  question (minimal logging, index-maintenance cost during a load), matching Execution Plans'
  depth on the same tier.
- **Table Partitioning** is Advanced — architecture/scalability territory by the depth rule's
  own definition, matching this site's stated architect-level audience.

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
| 🔥 Must Know | Primary Key vs. Foreign Key; WHERE vs. HAVING; INNER JOIN vs. LEFT JOIN; GROUP BY; NULL in Comparisons; Aggregate Functions; ACID; Subqueries vs. Joins; CTEs; Window Functions; Clustered vs. Non-Clustered Index; Normalization vs. Denormalization; Isolation Levels; Deadlock vs. Blocking; Execution Plans; Performance Degraded Over Time; **UNION vs. UNION ALL; Logical Query Execution Order; Index Seek vs. Scan vs. Table Scan** |
| ⭐ Should Know | ORDER BY; DISTINCT; Stored Procedures; Views; ROW_NUMBER() vs. RANK() vs. DENSE_RANK(); Covering Index; Composite Index; Pagination & OFFSET; Locking; **Foreign Key Referential Actions; EXISTS vs. IN vs. JOIN; Recursive CTEs; Temp Tables vs. Table Variables vs. CTEs; Materialized/Indexed Views vs. Regular Views; Triggers; Transaction Control Mechanics; Bulk Operations from the Database's Own Side** |
| 🧠 Deep Dive | SARGable Queries; How the Optimizer Picks an Index; **Table Partitioning** |

SARGable Queries and How the Optimizer Picks an Index are this track's original two 🧠 pages —
both go genuinely deep (what specifically defeats index usage at the predicate level, how the
optimizer's own cost-based decision-making works) but are rarely the literal opening question,
matching the one-or-two-🧠-page pattern on every other completed track. **Table Partitioning**
joins them as a third — genuinely architecture-depth, not something most interviews open with.
**Index Seek vs. Scan vs. Table Scan is 🔥, not 🧠**, despite reading like plan-internals —
reading a plan and naming what you see is a routine, expected skill at this track's audience
level, not a rare deep-cut; the actual internals-of-the-optimizer question stays its own,
separate 🧠 page.

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

**Gap-hunt additions (12) — Phases 3–7 of their own, see the taxonomy's gap-hunt log:**

| # | Concept | Tier | Priority | Page |
|---|---|---|---|---|
| 1.10 | UNION vs. UNION ALL | Basic | 🔥 | basic/12.html |
| 1.11 | Logical Query Execution Order | Basic | 🔥 | basic/13.html |
| 1.12 | Foreign Key Referential Actions | Basic | ⭐ | basic/14.html |
| 1.13 | EXISTS vs. IN vs. JOIN | Intermediate | ⭐ | intermediate/11.html |
| 2.4 | Recursive CTEs | Intermediate | ⭐ | intermediate/12.html |
| 2.5 | Temp Tables vs. Table Variables vs. CTEs | Intermediate | ⭐ | intermediate/13.html |
| 3.5 | Index Seek vs. Scan vs. Table Scan | Intermediate | 🔥 | intermediate/14.html |
| 4.3 | Materialized/Indexed Views vs. Regular Views | Intermediate | ⭐ | intermediate/15.html |
| 4.4 | Triggers | Intermediate | ⭐ | intermediate/16.html |
| 5.5 | Transaction Control Mechanics | Basic | ⭐ | basic/15.html |
| 6.4 | Bulk Operations from the Database's Own Side | Advanced | ⭐ | advanced/7.html |
| 6.5 | Table Partitioning | Advanced | 🧠 | advanced/8.html |

New totals: **Basic 15, Intermediate 16, Advanced 8 — 39 pages.**

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

None in the 27 original pages, already written and live. The 12 gap-hunt additions above are
the next and only remaining Phase 7 work for this track.
