# LINQ — Roadmap (Phases 2–6)

Phase 1 output: [`question-taxonomy.md`](question-taxonomy.md) — 8 concept groups (7 LINQ-concept
groups + 1 scenario group), sourced from the user's own detailed proposed roadmap, lightly
gap-hunted. This file is Phases 2–6: review, page grouping, tier, priority, and the final
roadmap — see [`specs/README.md`](../README.md) for what each phase means.

## Phase 2 — Review (merges, exclusions, and why)

The user's own raw list (54 comparison/concept topics + 10 scenarios = 64 items) needed four
real adjustments before it was ready to become 1-topic-per-page. Nothing was cut for being a bad
question — every adjustment below is either a genuine duplicate-angle merge or a boundary call
already implied by the user's own instruction ("link to the existing EF Core category for deeper
database-specific material" / "don't force every page...").

1. **Merged the four `First`/`FirstOrDefault`/`Single`/`SingleOrDefault` pairwise comparisons
   (user's items 4–7) into one page.** The user's own visual recommendation for this topic — "show
   the zero-match, one-match, and multiple-match cases" — is the exact structure that makes one
   unified 4-method decision page clearer than four separate 2-way pages that'd each re-draw the
   same three cases with one method swapped out. This matches the site's own established pattern
   (e.g. `csharp/`'s `IEnumerable` vs. `ICollection` vs. `IList` is one page, not three) of grouping
   a whole decision family onto one page rather than fragmenting it.
2. **Moved "Query Syntax vs. Method Syntax: When to Use Each" (user's item 18) out of Basic and
   into Intermediate**, keeping it as its own page rather than merging it into item 1 ("What Is
   LINQ?"). Per
   [`interview-depth-and-priority.md`](../../rules/interview-depth-and-priority.md), "what is it"
   (item 1) is Basic by definition; "which should I actually reach for, and why" (item 18) is a
   practical-usage/comparison question — Intermediate by the same rule, not Basic just because the
   underlying syntax is simple.
3. **Merged "Inner Join vs. Left Outer Join" (user's item 24) with "`DefaultIfEmpty` and Left-Join
   Behavior" (user's item 31) into one page.** These are the same mechanism described from two
   ends — "LINQ has no `LEFT JOIN` keyword, how do you fake one" and "what does
   `DefaultIfEmpty()` actually do" are one interview answer, not two; splitting them would force
   each half to restate the other's setup.
4. **Merged "How LINQ Expressions Become SQL" (user's item 39) with "Generated SQL, Query Plans
   and Indexes" (user's item 49) into one page, narrowed in scope.** Query-plan reading and index
   design are explicitly `sql/`'s territory already (see `efcore/roadmap.md`'s own boundary note:
   "indexing internals, execution plans... stay in the `sql/` track"); keeping item 49 as its own
   LINQ page would have meant either duplicating that content or shipping a thin page that's
   mostly a pointer elsewhere. The merged page covers the *LINQ-side* half (provider translation
   mechanism, how to actually look at the SQL LINQ produced) and cross-links `sql/` for
   plan/index depth — one substantive page instead of two thin ones.
5. **Excluded "Tracking vs. `AsNoTracking`" (user's item 47) as a standalone LINQ page.** This is
   already `efcore/intermediate/2.html`, built and live, almost title-for-title. Re-building it
   under `linq/` would be a straight duplicate, not a different angle (unlike the `Include`/N+1
   pages below, which do have a genuine LINQ-side angle distinct from EF Core's own page).
   Cross-linked instead, from the pages where tracking naturally comes up (Premature
   Materialization, N+1).

**Addendum (2026-10-10)** — after this roadmap was first drafted, the user asked for one more
Scenario page: writing a custom LINQ-style extension method (a `Where`-style filter built from
scratch, applied in a query chain like a built-in operator) — testing whether a candidate
actually understands `Where`'s own deferred-execution mechanism (an iterator block using `yield
return`) well enough to reproduce it, not just use it. Added as Scenario 11 / Advanced #28
throughout this document and the live site; every count below (58→59 pages, 27→28 Advanced,
10→11 scenarios) reflects this addition.

Three pages do sit close to existing EF Core pages but earn their own LINQ-side page rather than
being excluded, because they ask a genuinely different question from the LINQ-authoring side
(see each page's own "cross-link, not duplicate" note in the taxonomy): **`Include` vs.
Projection Using `Select`**, **N+1 Queries and Navigation Properties**, and **How LINQ
Expressions Become SQL**. Each one cross-links its EF Core-track counterpart instead of
re-teaching it.

No other gaps found beyond the 3 **[new]** additions already logged in the taxonomy (query
syntax's missing keywords, the `FirstOrDefault`/`SingleOrDefault` value-type-default trap,
`ThenBy`'s `IOrderedEnumerable<T>` requirement) — all three are narrow additions folded into an
existing page, not new pages of their own.

**Version-accuracy check performed, not assumed**, per the user's explicit instruction to verify
framework availability before documenting modern operators:

| Operators | Minimum .NET version |
|---|---|
| `Chunk`, `MinBy`, `MaxBy`, `DistinctBy`, `UnionBy`, `IntersectBy`, `ExceptBy` | .NET 6 |
| `CountBy`, `AggregateBy`, `Index()` | .NET 9 |
| `LeftJoin`, `RightJoin` | .NET 10 |

(Cross-checked via web search against multiple current sources; the Advanced "Modern LINQ
Operators" page itself will cite this table and note it should be re-checked against
learn.microsoft.com's own LINQ API reference at write-time, since this site's own accuracy rule
never lets a version claim ride on memory alone.)

## Phase 3 — Grouping into pages (59 pages)

Everything not already addressed by a Phase 2 merge/exclusion is one taxonomy concept → one page,
same as every other track. The 11 scenarios (10 from the user's original list, plus the
custom-extension-method scenario added per the Phase 2 addendum) each keep their own page —
Phase 3 considered folding 1–2 of them into their closest comparison page (e.g. scenario 7,
"Distinct vs. DistinctBy vs. GroupBy vs. a custom comparer," sounds adjacent to the Basic
`Distinct`/`DistinctBy` page) but kept all 11 separate: the user asked for scenario questions to
be "a separate subsection so developers can practise applying LINQ under interview pressure" —
collapsing any of them back into a comparison page would undercut exactly that distinction
between "know the difference" and "solve the problem live."

## Phase 4 — Tier (by question type, not difficulty)

| Tier | Count | Pages |
|---|---|---|
| Basic | 14 | What Is LINQ?; Select vs. SelectMany; Where vs. First(predicate); First vs. FirstOrDefault vs. Single vs. SingleOrDefault; Any vs. Count() > 0; Any vs. All vs. Contains; Where vs. OfType; OrderBy vs. OrderByDescending vs. ThenBy; Skip vs. Take; Distinct vs. DistinctBy; ToList vs. ToArray vs. ToDictionary; Cast vs. OfType; Min vs. Max vs. Sum vs. Average vs. Count; Anonymous Types and Projection |
| Intermediate | 17 | Query Syntax vs. Method Syntax — When to Use Each; Deferred vs. Immediate Execution; Lazy Evaluation vs. Materialization; IEnumerable vs. IQueryable; GroupBy vs. ToLookup; Join vs. GroupJoin; Inner Join vs. Left Outer Join; SelectMany vs. Join; Zip vs. Join; Aggregate vs. Sum/Count; Append/Prepend vs. Collection Modification; Concat vs. Union vs. Intersect vs. Except; SequenceEqual vs. Set Equality; ToDictionary vs. ToLookup; Equality Comparers and Custom Equality; let/into and Grouping in Query Syntax; Multiple Enumeration and Side Effects |
| Advanced | 28 (17 core + 11 scenario) | Func vs. Expression\<Func\>; How LINQ Providers Work; LINQ-to-Objects vs. LINQ-to-Entities; How LINQ Expressions Become SQL; Client-Side vs. Server-Side Evaluation; AsEnumerable vs. AsQueryable; Why EF Core Cannot Translate Certain C# Methods; Premature Materialization and ToList() Placement; Query Execution and Database Round Trips; Include vs. Projection Using Select; N+1 Queries and Navigation Properties; Offset Pagination vs. Keyset Pagination; Async LINQ (ToListAsync/AnyAsync/CountAsync); IAsyncEnumerable vs. IEnumerable; Streaming vs. Buffering Large Results; PLINQ (AsParallel, Ordering, Trade-offs); Modern LINQ Operators; + 11 Scenario pages (see Phase 6) |

Reasoning for the less-obvious calls:

- **`Any` vs. `Count() > 0` is Basic, not Intermediate** — despite being "about performance," this
  is treated the same way EF Core's N+1 page is: a piece of core vocabulary every LINQ user is
  expected to already know on sight, not a comparison requiring real usage experience to reason
  about.
- **Deferred vs. Immediate Execution and `IEnumerable` vs. `IQueryable` are Intermediate, not
  Advanced** — they're foundational to using LINQ correctly day-to-day (practical usage/
  troubleshooting, the Intermediate definition), not internals/architecture. The *provider
  mechanism* that makes `IQueryable` possible (expression trees, `Func` vs. `Expression<Func>`,
  how a provider translates) is genuinely Advanced — that's where it sits.
- **Multiple Enumeration and Side Effects is Intermediate** — it's a practical troubleshooting
  trap any LINQ user can hit, not an internals question; the equivalent *EF Core-flavored* version
  of this same mistake ("why did my query run twice against the database") is the Advanced
  scenario page instead, matching the depth split used throughout this roadmap (practical mistake
  = Intermediate, "diagnose a specific production symptom" = Advanced scenario).
- **`Include` vs. Projection, N+1, and Pagination are Advanced, not Intermediate** — all three
  require EF Core/database-performance context layered on top of the pure-LINQ mechanics already
  covered earlier, matching `interview-depth-and-priority.md`'s explicit call-out that
  performance/scalability questions belong in Advanced regardless of how simple the triggering
  code looks.
- **All 11 Scenario pages are Advanced** — "a real problem that requires using the knowledge, not
  just stating it" is this site's own definition of the Scenario question layer
  (`interview-depth-and-priority.md`), and every completed track before this one (React, Angular,
  AWS, DSA) places its scenario pages in Advanced for exactly that reason — no exception made
  here despite a couple of the scenarios (e.g. scenario 2, First/FirstOrDefault/Single/
  SingleOrDefault) drawing on Basic-tier knowledge. Tier is about the *question type* (an applied
  scenario), not how basic the underlying fact is. The 11th scenario (writing a custom LINQ
  extension method) is Advanced for the same reason even though the end result is a short method
  — *writing* an iterator block that reproduces `Where`'s own deferred-execution contract is a
  provider/mechanism-level task, squarely alongside the rest of this tier.

## Phase 5 — Priority (🔥 Must Know / ⭐ Should Know / 🧠 Deep Dive — independent of tier)

| Priority | Pages |
|---|---|
| 🔥 Must Know | What Is LINQ?; Select vs. SelectMany; First vs. FirstOrDefault vs. Single vs. SingleOrDefault; Any vs. Count() > 0; OrderBy vs. OrderByDescending vs. ThenBy; Min vs. Max vs. Sum vs. Average vs. Count; Deferred vs. Immediate Execution; Lazy Evaluation vs. Materialization; IEnumerable vs. IQueryable; Inner Join vs. Left Outer Join; Multiple Enumeration and Side Effects; Func vs. Expression\<Func\>; LINQ-to-Objects vs. LINQ-to-Entities; Client-Side vs. Server-Side Evaluation; Why EF Core Cannot Translate Certain C# Methods; Premature Materialization and ToList() Placement; N+1 Queries and Navigation Properties; Async LINQ; Scenario: First/FirstOrDefault/Single/SingleOrDefault When Records May Be Missing or Duplicated; Scenario: Diagnosing Repeated Queries; Scenario: Fast In-Memory, Slow Against the Database; Scenario: Diagnosing an N+1 Query Problem; Scenario: Fixing an Untranslatable EF Core Query |
| ⭐ Should Know | Where vs. First(predicate); Any vs. All vs. Contains; Where vs. OfType; Skip vs. Take; Distinct vs. DistinctBy; ToList vs. ToArray vs. ToDictionary; Anonymous Types and Projection; Query Syntax vs. Method Syntax — When to Use Each; GroupBy vs. ToLookup; Join vs. GroupJoin; SelectMany vs. Join; Aggregate vs. Sum/Count; Concat vs. Union vs. Intersect vs. Except; ToDictionary vs. ToLookup; Equality Comparers and Custom Equality; How LINQ Providers Work; How LINQ Expressions Become SQL; AsEnumerable vs. AsQueryable; Query Execution and Database Round Trips; Include vs. Projection Using Select; Offset Pagination vs. Keyset Pagination; Streaming vs. Buffering Large Results; Modern LINQ Operators; Scenario: Flattening Customers and Orders with SelectMany; Scenario: Predicting Output When Operator Order Changes; Scenario: Distinct vs. DistinctBy vs. GroupBy vs. a Custom Comparer; Scenario: Finding the Highest-Paid Employee Per Department; Scenario: Processing Millions of Records; Scenario: Writing Your Own Custom LINQ Extension Method |
| 🧠 Deep Dive | Cast vs. OfType; Zip vs. Join; Append/Prepend vs. Collection Modification; SequenceEqual vs. Set Equality; let/into and Grouping in Query Syntax; IAsyncEnumerable vs. IEnumerable; PLINQ (AsParallel, Ordering, Trade-offs) |

🔥 is intentionally the largest bucket on this track — LINQ interview questions skew toward "must
know cold" more than most tracks, since correctness bugs (wrong `First`/`Single` choice, N+1,
multiple enumeration) are both extremely common in real code review *and* extremely common
interview material. 🧠 stays the smallest bucket, same one-or-two-per-tier pattern as every
other completed track, reserved for genuinely niche-but-real topics (`Zip`'s positional-pairing
footgun, PLINQ's narrow applicability, query-syntax-only `let`/`into` mechanics).

## Phase 6 — Final roadmap

`linq/roadmap.html` will group by the same 8 concept categories as the Phase 1 taxonomy (concept
category, not tier — the site-wide convention). Numbering below is the tier-folder page number
(`linq/<tier>/<n>.html`).

### Basic (14)

| # | Topic | Priority | Page |
|---|---|---|---|
| 1 | What Is LINQ? Query Syntax vs. Method Syntax | 🔥 | basic/1.html |
| 2 | Select vs. SelectMany | 🔥 | basic/2.html |
| 3 | Where vs. First(predicate) | ⭐ | basic/3.html |
| 4 | First vs. FirstOrDefault vs. Single vs. SingleOrDefault | 🔥 | basic/4.html |
| 5 | Any vs. Count() > 0 | 🔥 | basic/5.html |
| 6 | Any vs. All vs. Contains | ⭐ | basic/6.html |
| 7 | Where vs. OfType | ⭐ | basic/7.html |
| 8 | OrderBy vs. OrderByDescending vs. ThenBy | 🔥 | basic/8.html |
| 9 | Skip vs. Take | ⭐ | basic/9.html |
| 10 | Distinct vs. DistinctBy | ⭐ | basic/10.html |
| 11 | ToList vs. ToArray vs. ToDictionary | ⭐ | basic/11.html |
| 12 | Cast vs. OfType | 🧠 | basic/12.html |
| 13 | Min vs. Max vs. Sum vs. Average vs. Count | 🔥 | basic/13.html |
| 14 | Anonymous Types and Projection | ⭐ | basic/14.html |

### Intermediate (17)

| # | Topic | Priority | Page |
|---|---|---|---|
| 1 | Query Syntax vs. Method Syntax — When to Use Each | ⭐ | intermediate/1.html |
| 2 | Deferred vs. Immediate Execution | 🔥 | intermediate/2.html |
| 3 | Lazy Evaluation vs. Materialization | 🔥 | intermediate/3.html |
| 4 | IEnumerable vs. IQueryable | 🔥 | intermediate/4.html |
| 5 | GroupBy vs. ToLookup | ⭐ | intermediate/5.html |
| 6 | Join vs. GroupJoin | ⭐ | intermediate/6.html |
| 7 | Inner Join vs. Left Outer Join — DefaultIfEmpty() and the GroupJoin Pattern | 🔥 | intermediate/7.html |
| 8 | SelectMany vs. Join | ⭐ | intermediate/8.html |
| 9 | Zip vs. Join | 🧠 | intermediate/9.html |
| 10 | Aggregate vs. Sum/Count | ⭐ | intermediate/10.html |
| 11 | Append/Prepend vs. Collection Modification | 🧠 | intermediate/11.html |
| 12 | Concat vs. Union vs. Intersect vs. Except | ⭐ | intermediate/12.html |
| 13 | SequenceEqual vs. Set Equality | 🧠 | intermediate/13.html |
| 14 | ToDictionary vs. ToLookup | ⭐ | intermediate/14.html |
| 15 | Equality Comparers and Custom Equality | ⭐ | intermediate/15.html |
| 16 | let, into and Grouping in Query Syntax | 🧠 | intermediate/16.html |
| 17 | Multiple Enumeration and Side Effects | 🔥 | intermediate/17.html |

### Advanced (28)

| # | Topic | Priority | Page |
|---|---|---|---|
| 1 | Func vs. Expression\<Func\> | 🔥 | advanced/1.html |
| 2 | How LINQ Providers Work | ⭐ | advanced/2.html |
| 3 | LINQ-to-Objects vs. LINQ-to-Entities | 🔥 | advanced/3.html |
| 4 | How LINQ Expressions Become SQL | ⭐ | advanced/4.html |
| 5 | Client-Side vs. Server-Side Evaluation | 🔥 | advanced/5.html |
| 6 | AsEnumerable vs. AsQueryable | ⭐ | advanced/6.html |
| 7 | Why EF Core Cannot Translate Certain C# Methods | 🔥 | advanced/7.html |
| 8 | Premature Materialization and ToList() Placement | 🔥 | advanced/8.html |
| 9 | Query Execution and Database Round Trips | ⭐ | advanced/9.html |
| 10 | Include vs. Projection Using Select | ⭐ | advanced/10.html |
| 11 | N+1 Queries and Navigation Properties | 🔥 | advanced/11.html |
| 12 | Offset Pagination vs. Keyset Pagination | ⭐ | advanced/12.html |
| 13 | Async LINQ: ToListAsync, AnyAsync, CountAsync | 🔥 | advanced/13.html |
| 14 | IAsyncEnumerable vs. IEnumerable | 🧠 | advanced/14.html |
| 15 | Streaming vs. Buffering Large Results | ⭐ | advanced/15.html |
| 16 | PLINQ: AsParallel, Ordering, and Trade-offs | 🧠 | advanced/16.html |
| 17 | Modern LINQ Operators: Chunk, MaxBy, MinBy, CountBy, AggregateBy, and the New Join Operators | ⭐ | advanced/17.html |
| 18 | Scenario: Flattening Customers and Orders with SelectMany | ⭐ | advanced/18.html |
| 19 | Scenario: Choosing First/FirstOrDefault/Single/SingleOrDefault When Records May Be Missing or Duplicated | 🔥 | advanced/19.html |
| 20 | Scenario: Diagnosing Repeated Queries from Deferred Execution and Multiple Enumeration | 🔥 | advanced/20.html |
| 21 | Scenario: Fast In-Memory, Slow Against the Database | 🔥 | advanced/21.html |
| 22 | Scenario: Diagnosing an N+1 Query Problem in an EF Core API | 🔥 | advanced/22.html |
| 23 | Scenario: Predicting Output When Where/Select/OrderBy/Take/ToList Change Order | ⭐ | advanced/23.html |
| 24 | Scenario: Distinct vs. DistinctBy vs. GroupBy vs. a Custom Equality Comparer | ⭐ | advanced/24.html |
| 25 | Scenario: Finding the Highest-Paid Employee in Each Department | ⭐ | advanced/25.html |
| 26 | Scenario: Fixing an EF Core Query That Can't Translate a Custom C# Method | 🔥 | advanced/26.html |
| 27 | Scenario: Processing Millions of Records — Buffering, Streaming, Batching, and Database-Side Aggregation | ⭐ | advanced/27.html |
| 28 | Scenario: Writing Your Own Custom LINQ Extension Method — Building a Where-Style Filter from Scratch | ⭐ | advanced/28.html |

## Track-specific decisions and boundaries

- **This track owns LINQ the language feature — operators, execution model, `IEnumerable`/
  `IQueryable`, query providers, and the general LINQ→SQL translation mechanism.** It explicitly
  does **not** own: EF Core's own machinery (`DbContext`/`DbSet`, migrations, the change tracker,
  compiled queries, query splitting, connection management — all `efcore/`'s job) or raw
  SQL/database-engine internals (index design, reading a query plan, isolation levels — all
  `sql/`'s job). Every page that brushes against either boundary cross-links the existing page
  instead of re-teaching it — see each affected page's own note in `question-taxonomy.md`.
- **Scenario questions are a distinct, clearly-labelled sub-block inside Advanced** (pages 18–28,
  all titled `Scenario: ...`), matching the exact convention already used on `react/advanced/
  14–18.html` and `angular/advanced/11–16.html` — not a fourth tier, not a separate top-level
  site section. This satisfies the user's own request for "a distinct group... so developers can
  practise applying LINQ under interview pressure" without inventing new site structure.
- **Comparison pages that have a genuine input→output visual (zero/one/many-match counts, a
  small before/after table) use that instead of a diagram** — per the user's own explicit
  recommendation and this site's existing rule that a diagram is only added where it clarifies
  something a table/example can't (see [`diagram-style.md`](../../rules/diagram-style.md)).
  `First`/`FirstOrDefault`/`Single`/`SingleOrDefault` (Basic #4) and `Select`/`SelectMany`
  (Basic #2) are the two pages this applies to most directly, per the user's own worked
  examples — both get a small input/output table rather than a forced diagram.
- **Every comparison page states, explicitly, the difference, when to use each option, and a
  realistic example** — already this site's standing `content-writing.md` template
  (`.cmp-table` + recall + say-this), reconfirmed here because the user asked for it directly.
- **Every Scenario page uses the 7-part shape the user specified** (Scenario → Problem/code →
  Expected output/behavior → Explanation → Recommended solution → Trade-offs → Follow-up), mapped
  onto this site's existing template sections rather than inventing a new one: the Interview
  Question line carries "Scenario," the Code box carries "Problem/code," Recall + Explanation
  carry "Expected output/behavior + Explanation," the Say-this box carries "Recommended
  solution," the Why-it-matters card carries "Trade-offs," and the Likely Follow-up box carries
  "Follow-up" — same template, same six always-visible sections, no new page shape introduced.
- **Technical-accuracy commitments locked in before Phase 7 starts** (each one directly from the
  user's own requirements, restated here so a future session enforcing `accuracy.md` on this
  track doesn't have to re-derive them):
  - Never claim `Select` before `Where` is categorically slower — EF Core can translate
    equivalent expressions to equivalent SQL; the real trap is forcing materialization too early
    (`ToList()` placement), not operator order by itself.
  - `First` vs. `Single` is framed as different *correctness expectations*, never just "one's
    faster."
  - `SingleOrDefault` returns the type default on zero matches but still throws on 2+ matches —
    never state it as a universal "safe" alternative to `Single`.
  - `Include` does not always produce a single SQL query — behavior depends on configuration and
    query shape (split queries, multiple collection includes); never state it as "always one
    query."
  - `.ToList()` is never recommended as a blanket fix for a translation error — the Advanced
    "Premature Materialization" and "Why EF Core Cannot Translate" pages both state this
    explicitly as a correctness-preserving-but-performance-destroying move, not a real fix.
  - Code examples use modern, idiomatic C# (current collection/LINQ syntax, `async`/`await`
    terminal operators where EF Core's async API applies) and stay short enough to run/trace in
    your head — same discipline as every other track's code cards.
  - The custom-extension-method scenario (Advanced #28) builds its example as a `yield return`
    iterator block over `IEnumerable<T>`, exactly like the real `Where` — never as a method that
    eagerly builds and returns a `List<T>`, which would silently break the deferred-execution
    contract every other built-in operator honors.
- **Code examples are C#**, matching every other track on this site.
- Icon 🔗, track color indigo (`#4f46e5` ink on a light indigo background, e.g. `#e0e7ff`) —
  distinct from every track color already in use (closest neighbor is .NET's violet `#7c3aed`,
  far enough apart on the wheel to read as a different color at tile size). 🔗 reads naturally as
  "Language **Integrated** Query" — connecting/linking data — without duplicating any emoji
  already in use on another tile.
- **Homepage placement: inside the existing "🛤️ Core backend interview path" tile row, directly
  after C# and before OOP.** LINQ is a C# language feature used throughout the rest of that path
  (OOP's collection examples, `.NET`, Web API, and especially EF Core all lean on it) — sitting
  immediately after C# and before everything that assumes it reads as the natural prerequisite
  order. This is a design call, not a locked site rule — flagged explicitly for the user's
  verification pass alongside the roadmap itself.

## Known gaps

None — Phase 7 (scaffolding the site structure and writing the 59 pages) is complete (see
[`overview.md`](overview.md)'s Status section). No independent diagram-verification sweep found
any genuine defect across the 59 pages (all confirmed `issueCount: 0`).
