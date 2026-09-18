# JavaScript — Roadmap (Phases 2-6)

Phase 1 output: [`question-taxonomy.md`](question-taxonomy.md) — 38 concept groups (37 from the
user's own vendor-cross-checked plan, plus 1 gap-hunt addition, Testing Fundamentals). This file
is Phases 2-6: review, page grouping, tier, priority, and the final roadmap — see
[`specs/README.md`](../README.md) for what each phase means.

## Phase 2 — Review, reconciliation, and this track's own gap-hunt

**ASCII-tree vs. detailed-list reconciliation (not a real gap, just two views of the same plan):**
the user's compact overview tree named "Event Loop Internals" and "Advanced Functional Patterns"
as their own Advanced-tier leaves, but the user's own detailed, sub-bulleted breakdown (groups
26-37, the one actually carrying interview questions) never gave either one a distinct
sub-bullet list. Resolution: neither becomes its own page.
- "Event Loop Internals" content already lives inside group 27/Advanced#1 (JavaScript Runtime &
  Execution Model)'s execution-context/call-stack/heap questions — the Intermediate Event Loop
  page (task/microtask queue ordering) and this Advanced Runtime page (what the engine is doing
  underneath) are the two genuinely distinct angles: one is "what order does code run in," the
  other is "what structure makes that ordering possible." Splitting a third "Event Loop
  Internals" page out from either would restate one of the two, not add a new angle.
- "Advanced Functional Patterns" has no Advanced-specific content distinct from group 23/
  Intermediate#12 (Higher-Order & Functional JavaScript) — composition/currying/partial
  application/memoization are exactly as deep as the user's own sub-bullets for that
  Intermediate page already go. No separate Advanced page invented to fill a slot the source
  material didn't actually ask for.

**"Predict the Output" is a cross-cutting question format, not a 39th page** — per the user's
own explicit instruction. Its example snippets get folded into the page that already owns the
underlying concept: the `var`/`let`/`const` loop-and-`setTimeout` example lives on Basic#2; the
reference-vs-value copy example lives on Basic#7 (Arrays & Objects); the event-loop ordering
example lives on Intermediate#7 (Event Loop). No content from these examples is lost — they just
don't get a standalone page with no underlying concept of their own.

**This track's own gap-hunt finding, folded in as a new group rather than left uncovered:** the
user's own priority summary lists "Testing" under ⭐ Should Know, but no numbered group (1-37) in
either the ASCII tree or the detailed breakdown actually covers it — checked directly against
the full 37-group list before concluding this, not assumed from the summary table alone. This is
a genuine interview topic for a JavaScript track independent of any specific framework (Jest/
Vitest basics, mocking, testing async code) — real gap, not manufactured, added as group 26,
Testing Fundamentals, per [`gap-hunting.md`](../../rules/gap-hunting.md)'s standard for what
counts as a real finding vs. padding.

**No other dedupe found.** All 37 of the user's numbered groups are distinct concepts with no
real overlap — even closely related pairs (Promises vs. Promise Combinators; Event Loop vs.
Runtime & Execution Model; this/call/apply/bind vs. Prototypes) were checked and kept separate,
per the reconciliation notes above.

## Phase 3 — Grouping into pages: 1 concept = 1 page, including the six "deep" topics

The user's own note flagged six topics as needing "multiple question pages because the
interview depth is much greater": Closures, `this`/`call`/`apply`/`bind`, Prototypes, Promises,
`async`/`await`, and Event Loop (plus "concurrency" generally).

**Decision: every one of the 38 groups maps 1:1 to a single page, including all six of those.**
Two things resolve the tension with the user's own note rather than ignore it:
1. **This site's own locked structural rule** (`content-writing.md`, "What a topic page is
   not"): *"Not multiple topics on one page, even closely related ones — one topic, one page."*
   Closures, `this`, Prototypes, Promises, `async`/`await`, and Event Loop are each genuinely
   *one* topic — deep, not compound. Splitting "Closures" into e.g. "Closures: Mechanics" +
   "Closures: Practical Patterns" would be one topic wearing two page numbers, not two
   topics — exactly what that rule exists to prevent.
2. **Established precedent on this exact site, already load-tested at this depth**: DSA's
   Pattern Recognition page covers 15 named technique-routing signals in one page; DSA's Dynamic
   Programming page covers state-machine DP, 1D/2D DP, and the knapsack family in one page;
   .NET's Service Lifetimes page covers Singleton/Scoped/Transient plus the "what does scoped
   actually scope to" comparison in one page. The page template itself (always-visible Recall/
   Diagram/Trap/Follow-up/Say-this, *then* a collapsed Explanation with a comparison table, *then*
   multiple `.code-card` blocks, one per distinct point) is built to carry exactly this kind of
   density without becoming two pages — multiple diagrams and multiple code cards inside one
   page are the mechanism, not a second page.

**What the user's "deserves multiple pages" note is honored by instead:** the six deep topics
each get 2 diagrams where the concept genuinely has two distinct angles (e.g. Prototypes gets
the chain-lookup diagram *and* a `Object.create()`-vs-constructor-function diagram; Event Loop
gets the call-stack/queue-structure diagram *and* a step-by-step trace of the classic
`console.log`/`setTimeout`/`Promise.then` ordering example), 2-3 `.code-card` blocks instead of
one, and the deepest Explanation/comparison-table treatment on the site — not a second page.
**Concurrency specifically already gets two adjacent pages** because the user's own detailed
breakdown already listed it as two distinct groups (28: Advanced Async Concurrency — the
technique; 29: Promise Combinators — the quick-recall comparison table) — that split was already
in the source material, not something Phase 3 needed to invent.

## Phase 4 — Tier (by question type, not difficulty)

Tiers come directly from the user's own BASIC/INTERMEDIATE/ADVANCED structure — no re-tiering
needed, since the user's own split already follows this site's rule (core-knowledge/definitional
→ Basic; applied technique/comparison → Intermediate; internals/performance/security/
architecture/scenario → Advanced), not a difficulty ladder. One placement double-checked:

- **Testing Fundamentals (the gap-hunt addition) is Intermediate, not Basic** — it's an applied
  technique (mocking, testing async code) that assumes Functions, Promises, and `async`/`await`
  are already understood, not a bare definition a total newcomer needs first.

| Tier | Count | Groups |
|---|---|---|
| Basic | 11 | JavaScript Fundamentals; `var`/`let`/`const`; Data Types & Coercion; `==` vs. `===`; Functions; Scope & Hoisting; Arrays & Objects; Destructuring/Spread/Rest; Array Methods; Modern JavaScript/ES6+; Error Handling |
| Intermediate | 15 | Closures; `this`/`call`/`apply`/`bind`; Prototypes & Prototype Chain; Modules; Promises; `async`/`await`; Event Loop; DOM & Browser Events; Event Delegation; Fetch/HTTP/`AbortController`; Classes & Inheritance; Higher-Order & Functional JavaScript; Iterators & Generators; Browser Storage; Testing Fundamentals |
| Advanced | 12 | JavaScript Runtime & Execution Model; Advanced Async Concurrency; Promise Combinators; Debounce vs. Throttle; Memory & Garbage Collection; Performance & Rendering; Security; Production JavaScript Scenarios; Web Workers; Service Workers; Polyfills & Transpilation; Proxy & Reflect |

## Phase 5 — Priority translation

The user's own inline markers per group (🔥 / 🔥🔥 / 🔥🔥🔥 / ⭐ / ○) translate cleanly onto this
site's three-state system — any level of 🔥 collapses to this site's single 🔥 Must Know (the
double/triple flame was the user's own way of ranking *within* Must Know, which this site
doesn't separately track), ⭐ stays ⭐ Should Know, ○ becomes 🧠 Deep Dive. Same clean translation
already used for DSA's 4-level user scheme onto this site's 3-level one — no conflicts.

| Priority | Groups |
|---|---|
| 🔥 Must Know | JavaScript Fundamentals; `var`/`let`/`const`; Data Types & Coercion; `==` vs. `===`; Functions; Scope & Hoisting; Arrays & Objects; Destructuring/Spread/Rest; Array Methods; Modern JavaScript/ES6+; Closures; `this`/`call`/`apply`/`bind`; Prototypes & Prototype Chain; Modules; Promises; `async`/`await`; Event Loop; DOM & Browser Events; Event Delegation; Fetch/HTTP/`AbortController`; JavaScript Runtime & Execution Model; Advanced Async Concurrency; Promise Combinators; Debounce vs. Throttle; Memory & Garbage Collection; Performance & Rendering; Security; Production JavaScript Scenarios |
| ⭐ Should Know | Error Handling; Classes & Inheritance; Higher-Order & Functional JavaScript; Iterators & Generators; Browser Storage; Testing Fundamentals; Web Workers; Service Workers; Polyfills & Transpilation |
| 🧠 Deep Dive | Proxy & Reflect |

Closures, `this`/`call`/`apply`/`bind`, Prototypes, Promises, `async`/`await`, and Event Loop
carried the user's own triple-flame emphasis — these six get this track's deepest per-page
treatment (2 diagrams, 2-3 code cards each) per Phase 3 above, even though priority-wise they
sit alongside the rest of 🔥 Must Know.

## Phase 6 — Final roadmap: 38 pages

Hot-first ordering within each tier (site-wide rule, every tier, every track) — 🔥 pages first in
roughly the source material's own thematic order, then ⭐, then 🧠 last.

| # | Concept | Tier | Priority | Page |
|---|---|---|---|---|
| 1 | JavaScript Fundamentals | Basic | 🔥 | basic/1.html |
| 2 | `var` vs. `let` vs. `const` | Basic | 🔥 | basic/2.html |
| 3 | Data Types & Type Coercion | Basic | 🔥 | basic/3.html |
| 4 | `==` vs. `===` | Basic | 🔥 | basic/4.html |
| 5 | Functions | Basic | 🔥 | basic/5.html |
| 6 | Scope & Hoisting | Basic | 🔥 | basic/6.html |
| 7 | Arrays & Objects | Basic | 🔥 | basic/7.html |
| 8 | Destructuring / Spread / Rest | Basic | 🔥 | basic/8.html |
| 9 | Array Methods | Basic | 🔥 | basic/9.html |
| 10 | Modern JavaScript / ES6+ | Basic | 🔥 | basic/10.html |
| 11 | Error Handling | Basic | ⭐ | basic/11.html |
| 1 | Closures | Intermediate | 🔥 | intermediate/1.html |
| 2 | `this` / `call` / `apply` / `bind` | Intermediate | 🔥 | intermediate/2.html |
| 3 | Prototypes & Prototype Chain | Intermediate | 🔥 | intermediate/3.html |
| 4 | Modules | Intermediate | 🔥 | intermediate/4.html |
| 5 | Promises | Intermediate | 🔥 | intermediate/5.html |
| 6 | `async` / `await` | Intermediate | 🔥 | intermediate/6.html |
| 7 | Event Loop | Intermediate | 🔥 | intermediate/7.html |
| 8 | DOM & Browser Events | Intermediate | 🔥 | intermediate/8.html |
| 9 | Event Delegation | Intermediate | 🔥 | intermediate/9.html |
| 10 | Fetch / HTTP / `AbortController` | Intermediate | 🔥 | intermediate/10.html |
| 11 | Classes & Inheritance | Intermediate | ⭐ | intermediate/11.html |
| 12 | Higher-Order & Functional JavaScript | Intermediate | ⭐ | intermediate/12.html |
| 13 | Iterators & Generators | Intermediate | ⭐ | intermediate/13.html |
| 14 | Browser Storage | Intermediate | ⭐ | intermediate/14.html |
| 15 | Testing Fundamentals | Intermediate | ⭐ | intermediate/15.html |
| 1 | JavaScript Runtime & Execution Model | Advanced | 🔥 | advanced/1.html |
| 2 | Advanced Async Concurrency | Advanced | 🔥 | advanced/2.html |
| 3 | Promise Combinators | Advanced | 🔥 | advanced/3.html |
| 4 | Debounce vs. Throttle | Advanced | 🔥 | advanced/4.html |
| 5 | Memory & Garbage Collection | Advanced | 🔥 | advanced/5.html |
| 6 | Performance & Rendering | Advanced | 🔥 | advanced/6.html |
| 7 | Security | Advanced | 🔥 | advanced/7.html |
| 8 | Production JavaScript Scenarios | Advanced | 🔥 | advanced/8.html |
| 9 | Web Workers | Advanced | ⭐ | advanced/9.html |
| 10 | Service Workers | Advanced | ⭐ | advanced/10.html |
| 11 | Polyfills & Transpilation | Advanced | ⭐ | advanced/11.html |
| 12 | Proxy & Reflect | Advanced | 🧠 | advanced/12.html |

## Track-specific decisions and boundaries

- **Code examples are JavaScript** (not C#) — the one track on this site where that's true by
  definition; every other rule (diagram style, page template, verification) still applies as-is.
- Icon 🟨, track color amber/yellow (`#eab308`) — set when the homepage tile was first added
  (2026-09-18), distinct from DSA's `#f59e0b` amber and Python's blue.
- **Not part of the ordered core-backend path** — sits in the new "🎨 Frontend" homepage section
  alongside HTML & CSS, React, and Angular, per the user's own restructuring request.
- Explicitly excludes a standalone "Predict the Output" page and a standalone "Advanced
  Functional Patterns"/"Event Loop Internals" page — see Phase 2 above for the reasoning per
  item.

## Post-launch: `javascript/roadmap.html` regrouped by concept cluster (2026-09-18)

The live roadmap page originally grouped its 38 rows by tier. Per the user's request to match
SQL/AWS/.NET's cross-tier concept-cluster presentation, `javascript/roadmap.html` was rebuilt
into 10 clusters (Core Language Fundamentals; Arrays/Objects & Modern Syntax; Error Handling &
Testing; Closures/this/Prototypes; Modules & Functional Patterns; Async & the Event Loop;
Browser/DOM & Storage; Performance & Production; Security & Platform APIs; Deep Dive) — a
presentational grouping invented at this step, not part of the original Phase 1 taxonomy. Tier
tables above are unchanged; only the live roadmap page's grouping changed.

## Known gaps

None — every one of the user's 37 groups is represented, plus the one gap-hunt addition
(Testing Fundamentals) this track's own Phase 2 found and folded in as its own page rather than
leaving it uncovered.
