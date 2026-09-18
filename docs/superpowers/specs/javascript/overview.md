# JavaScript — Track Spec

**Start here for anything JavaScript-related.** See
[`docs/superpowers/specs/README.md`](../README.md) for what this file is and the process for
keeping it in sync with the live pages.

## Status — Phases 1–7 complete, all 38 pages written

- **Phase 1** — the user personally checked current interview-prep material and recent developer
  discussions before shaping this track's plan, then shared a fully detailed 37-group structure
  (compact ASCII tree + a fully sub-bulleted breakdown with inline priority markers) directly —
  this session transcribed it faithfully into
  [`question-taxonomy.md`](question-taxonomy.md) rather than drafting an independent first pass,
  since the user had already done the vendor cross-check themselves.
- **Phase 2** — reconciled two small mismatches between the user's own compact overview tree and
  detailed breakdown (neither "Event Loop Internals" nor "Advanced Functional Patterns" got a
  separate page — both fold into existing pages, since the detailed breakdown never gave either
  one distinct sub-bullets); resolved "Predict the Output" as a cross-cutting question *format*
  folded into the pages that already own each example, not a 38th page; found and filled one real
  gap the user's own priority summary implied but never actually covered — Testing Fundamentals
  (Jest/Vitest basics, mocking, testing async code) — added as its own page rather than left
  uncovered. See `question-taxonomy.md`'s Coverage note and `roadmap.md`'s Phase 2 section for the
  full reasoning.
- **Phases 3–6** — [`roadmap.md`](roadmap.md): all 38 groups mapped 1:1 to pages — including the
  six topics (Closures, `this`/`call`/`apply`/`bind`, Prototypes, Promises, `async`/`await`, Event
  Loop) the user flagged as needing "multiple question pages" — kept as one page each per this
  site's own "one topic, one page" rule, but given this track's deepest per-page treatment (2
  diagrams, 2-3 code cards) instead of a second page. Tiered directly from the user's own
  Basic/Intermediate/Advanced split (already question-type-based, not a difficulty ladder); the
  user's own 🔥/🔥🔥/🔥🔥🔥/⭐/○ priority markers translated cleanly onto this site's 🔥/⭐/🧠
  three-state system with no conflicts.
- **Phase 7 — all 38 pages written**, dispatched via parallel subagents (in waves, respecting the
  20-concurrent-subagent limit — this was the first track built while ANOTHER session was
  simultaneously building the exact same track on this shared machine, discovered mid-build via
  duplicate/overlapping subagent reports; every resulting duplicate was independently
  reconciled — kept whichever version verified clean, re-verified after any merge, added any
  missing `search-index.js` entry a duplicate rewrite dropped, and removed the handful of
  resulting duplicate search-index lines). Every subagent was given the site's "don't invent
  specifics" instruction and the track's own governing rule verbatim: *"Do not make JavaScript a
  syntax-reference roadmap. Prioritize mental models and behavior. Every major concept should
  include at least one 'What happens?', 'Predict the output', 'Compare these two', or 'How would
  you solve this in production?' question."*
  **Diagram verification, with the actual evidence:** every subagent ran the mandatory script
  from [diagram-style.md](../../rules/diagram-style.md#mandatory-automated-verification--hand-computed-coordinates-are-not-verification)
  against its own page and reported `issueCount: 0` before finishing — several caught and
  self-fixed real defects before their own report (an HTML `<code>` tag invalidly nested inside
  an SVG `<text>` element on 3 separate pages, breaking everything after it in the SVG; a
  text-text overlap; text-overflow issues). The orchestrating session then ran its own
  **independent full sweep, one command, all 38 pages, 45 diagrams total** — every single
  `svg.topic-diagram` came back `{"issueCount":0,"issues":[]}` — and found and fixed 2 more real
  defects the self-reports missed: `advanced/6.html` had a text-text overlap between its trap
  heading and a nearby label; `advanced/9.html`'s `postMessage` diagram had two arrows floating
  disconnected in empty space between the two boxes they were supposed to connect (a duplicate
  rewrite of that same page later reproduced a near-identical defect, caught and fixed the same
  way on re-verification).
- **Every page that compares 2+ named options shows the actual runtime behavior of at least one,
  not just a classification table** — this session's own cross-track diagram-behavior-gap rule,
  written into every JS content brief up front: Promise Combinators traces the same 3 promises
  settling through all four combinators and shows each one's actual resulting verdict, not a
  static labeled-boxes repeat of its own comparison table; Debounce vs. Throttle traces real
  call-timelines showing which calls actually execute under each strategy; the `var`/`let` and
  reference-vs-value "predict the output" examples the user's own plan called for are real worked
  code cards with actual printed output, not just definitions.
- **Pager-consistency fix-up**: pages were dispatched with each subagent instructed to fall back
  to a muted "(coming soon)" link whenever a sibling page didn't yet exist on disk — 30 of 38
  files needed at least one fix once every sibling existed. Rebuilt every pager from the canonical
  page-title table, forming one clean chain across all three tiers (Basic `1 → 11` →
  Intermediate `1 → 15` → Advanced `1 → 12`, each tier's first page with no prev, each tier's
  last page with no next, no cross-tier links).
- **Sidebar-navigation wiring done correctly from the start of Phase 7** — every JS Phase 7
  content brief required `data-tier-key="javascript/<tier>"` on `<body>` and the `nav-index.js`
  script include in the fixed script order from the first dispatch — confirmed all 38 pages
  already had both before any site-wiring pass was needed. Only `assets/nav-index.js` itself (the
  three `javascript/basic`, `javascript/intermediate`, `javascript/advanced` entries) needed
  adding.
- **`assets/search-index.js` completion**: the 5 index/roadmap pages got entries during Phase 1-6
  scaffolding; the 38 topic-page entries were added by each page's own writing subagent, with a
  handful of duplicates found and removed (and one missing entry added back) during the
  concurrent-session reconciliation described above.
- **Site wiring finished**: all three tier `index.html` pages flipped from 📝 planned rows to real
  linked rows with accurate written-counts (11/11, 15/15, 12/12); `javascript/roadmap.html`
  flipped the same way; the root `index.html` JavaScript tile flipped from `class="tile soon"`
  with a "Coming soon" ribbon to the active-tile pattern every other completed track uses, with
  all three tier pills linked — icon 🟨 and color `#eab308` (both set when the tile was first
  added to the new "🎨 Frontend" homepage section) preserved.

## Basic (11 topics) — 11 written

| # | Topic | Priority | Written? |
|---|---|---|---|
| 1 | JavaScript Fundamentals | 🔥 | ✅ |
| 2 | `var` vs. `let` vs. `const` | 🔥 | ✅ |
| 3 | Data Types & Type Coercion | 🔥 | ✅ |
| 4 | `==` vs. `===` | 🔥 | ✅ |
| 5 | Functions | 🔥 | ✅ |
| 6 | Scope & Hoisting | 🔥 | ✅ |
| 7 | Arrays & Objects | 🔥 | ✅ |
| 8 | Destructuring / Spread / Rest | 🔥 | ✅ |
| 9 | Array Methods | 🔥 | ✅ |
| 10 | Modern JavaScript / ES6+ | 🔥 | ✅ |
| 11 | Error Handling | ⭐ | ✅ |

## Intermediate (15 topics) — 15 written

| # | Topic | Priority | Written? |
|---|---|---|---|
| 1 | Closures | 🔥 | ✅ |
| 2 | `this` / `call` / `apply` / `bind` | 🔥 | ✅ |
| 3 | Prototypes & Prototype Chain | 🔥 | ✅ |
| 4 | Modules | 🔥 | ✅ |
| 5 | Promises | 🔥 | ✅ |
| 6 | `async` / `await` | 🔥 | ✅ |
| 7 | Event Loop | 🔥 | ✅ |
| 8 | DOM & Browser Events | 🔥 | ✅ |
| 9 | Event Delegation | 🔥 | ✅ |
| 10 | Fetch / HTTP / `AbortController` | 🔥 | ✅ |
| 11 | Classes & Inheritance | ⭐ | ✅ |
| 12 | Higher-Order & Functional JavaScript | ⭐ | ✅ |
| 13 | Iterators & Generators | ⭐ | ✅ |
| 14 | Browser Storage | ⭐ | ✅ |
| 15 | Testing Fundamentals | ⭐ | ✅ |

## Advanced (12 topics) — 12 written

| # | Topic | Priority | Written? |
|---|---|---|---|
| 1 | JavaScript Runtime & Execution Model | 🔥 | ✅ |
| 2 | Advanced Async Concurrency | 🔥 | ✅ |
| 3 | Promise Combinators | 🔥 | ✅ |
| 4 | Debounce vs. Throttle | 🔥 | ✅ |
| 5 | Memory & Garbage Collection | 🔥 | ✅ |
| 6 | Performance & Rendering | 🔥 | ✅ |
| 7 | Security | 🔥 | ✅ |
| 8 | Production JavaScript Scenarios | 🔥 | ✅ |
| 9 | Web Workers | ⭐ | ✅ |
| 10 | Service Workers | ⭐ | ✅ |
| 11 | Polyfills & Transpilation | ⭐ | ✅ |
| 12 | Proxy & Reflect | 🧠 | ✅ |

## Where the roadmap came from

The user personally checked current interview-prep material and recent developer discussions
before sharing this track's 37-group structure directly with this session — not drafted
independently the way most other tracks' Phase 1 taxonomies were. This session's own Phase 2
review found and folded in one real gap (Testing Fundamentals) and reconciled two small
overview-tree-vs-detailed-breakdown mismatches (see Status above). Nothing else was invented
independently of that exchange or well-established, textbook-standard JavaScript/browser
knowledge — see [`question-taxonomy.md`](question-taxonomy.md) for the full group-by-group
provenance and [accuracy.md](../../rules/accuracy.md).

## Track-specific decisions and boundaries

- Icon 🟨, track color amber/yellow (`#eab308`) — set when the homepage tile was first added
  (2026-09-18), as part of the new "🎨 Frontend" homepage section alongside HTML & CSS, React,
  and Angular.
- **Deliberately organized around mental models and behavior, not a syntax reference** — the
  track's own governing rule, carried forward verbatim from the user's own instruction: *"Do not
  make JavaScript a syntax-reference roadmap. Prioritize mental models and behavior. Every major
  concept should include at least one 'What happens?', 'Predict the output', 'Compare these two',
  or 'How would you solve this in production?' question."*
- **Six pages carry this track's deepest per-page treatment** (2 diagrams, 2-3 code cards each)
  rather than being split into two pages: Closures, `this`/`call`/`apply`/`bind`, Prototypes &
  Prototype Chain, Promises, `async`/`await`, and Event Loop — see `roadmap.md`'s Phase 3 section
  for why splitting them would have violated this site's own "one topic, one page" rule.
- **"Predict the Output" is not its own page** — it's a cross-cutting question format folded into
  whichever page already owns the underlying concept (the `var`/`let`/`const` loop example on
  `basic/2.html`, the reference-vs-value copy example on `basic/7.html`, the classic
  `console.log`/`setTimeout`/`Promise.then` ordering example on `intermediate/7.html`).
- **Not part of the ordered core-backend path** — sits in the "🎨 Frontend" homepage section
  alongside HTML & CSS, React, and Angular, per the user's own restructuring request.

## Known gaps

None — this track went through the full 7-phase pipeline, and every page passed the mandatory
independent diagram-verification sweep (38/38 pages, 45/45 diagrams, `issueCount: 0` on the final
sweep, re-confirmed clean after the pager-consistency and site-wiring edits — see the Status
section above for the real defects found and fixed along the way, not glossed over, including the
ones caused by a second concurrent session building this same track on the shared machine).
