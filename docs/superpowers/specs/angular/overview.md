# Angular — Track Spec

**Start here for anything Angular-related.** See
[`docs/superpowers/specs/README.md`](../README.md) for what this file is and the process for
keeping it in sync with the live pages.

## Status — Phases 1–7 complete, all 43 pages written

- **Phase 1** — [`question-taxonomy.md`](question-taxonomy.md): built from the user's own
  detailed, already Basic/Intermediate/Advanced-organized outline (36 content groups), kept as
  the top-level structure and reorganized into this site's concept-group/Core-concept/
  Comparison/Understanding/Scenario format. A few currency details (Signal Forms' stable status,
  `provideZonelessChangeDetection()`'s default status, Angular v22's `OnPush`-by-default change)
  were verified against Angular's own current documentation before being written in, per
  [accuracy.md](../../rules/accuracy.md).
- **Phase 2 gap-hunt** — done in the same initial pass (per
  [gap-hunting.md](../../rules/gap-hunting.md)): actively checked against outside Angular
  knowledge rather than re-reading the source. Added 7 real gaps — content projection,
  `@HostBinding`/`@HostListener`, `@ViewChild`/`@ContentChild` timing, `NgOptimizedImage`,
  `ng update` strategy, the `resource()`/`httpResource()`/`rxResource()` API family, and a new
  standalone Accessibility section — logged with full reasoning (including what was considered
  and excluded: i18n, WebSockets, Angular Material/CDK's own API surface) in the taxonomy's own
  "Gap-hunt log."
- **Phases 3–6** — [`roadmap.md`](roadmap.md): grouped into 43 final pages (a 2-way RxJS
  Fundamentals split, a 6-way Production Scenarios fan-out, everything else one taxonomy group
  → one page), tiered by **question type** (not difficulty), and given an interview-priority tag.
- **Phase 6 wiring done at Phase 1**, per [specs/README.md](../README.md)'s mandate —
  `angular/roadmap.html` and the root `index.html` tile's `roadmap-badge` were built and wired
  the moment the roadmap existed, not deferred to Phase 7.
- **Phase 7 — all 43 pages written**, using the same template as every other completed track's
  Phase 7 (❓ Interview Question line → 🔥 Recall → 🧠 Visual → ⚠️ Trap → 🔄 Follow-up → 🎯
  Say-this → 📖 Explanation → 💻 Code → 🌍 Real-world/Scenario — see
  [content-writing.md](../../rules/content-writing.md)), by dispatched subagents referencing
  `csharp/basic/15.html` / `csharp/intermediate/8.html` / `csharp/advanced/3.html` as structural
  templates. Every page's diagram passed the mandatory automated verification script (see
  [diagram-style.md](../../rules/diagram-style.md#mandatory-automated-verification--hand-computed-coordinates-are-not-verification))
  with `issueCount: 0`, run independently by the orchestrating session against every single page
  before this track was considered done.

## Basic (10 topics) — 10 written

| # | Topic | Priority | Written? |
|---|---|---|---|
| 1 | Angular Fundamentals | 🔥 | ✅ |
| 2 | Components | 🔥 | ✅ |
| 3 | Templates & Data Binding | 🔥 | ✅ |
| 4 | Directives | 🔥 | ✅ |
| 5 | Pipes | ⭐ | ✅ |
| 6 | Lifecycle | 🔥 | ✅ |
| 7 | Services & Dependency Injection | 🔥 | ✅ |
| 8 | Routing Fundamentals | 🔥 | ✅ |
| 9 | Forms Fundamentals | 🔥 | ✅ |
| 10 | HTTP Fundamentals | 🔥 | ✅ |

## Intermediate (17 topics) — 17 written

| # | Topic | Priority | Written? |
|---|---|---|---|
| 1 | Standalone Components | 🔥 | ✅ |
| 2 | RxJS — Core Concepts | 🔥 | ✅ |
| 3 | RxJS — Common Operators | 🔥 | ✅ |
| 4 | RxJS Higher-Order Mapping | 🔥 | ✅ |
| 5 | RxJS Error Handling & Subscription Lifetime | 🔥 | ✅ |
| 6 | Signals | 🔥 | ✅ |
| 7 | Change Detection | 🔥 | ✅ |
| 8 | HTTP Interceptors | 🔥 | ✅ |
| 9 | State Management | 🔥 | ✅ |
| 10 | Performance | 🔥 | ✅ |
| 11 | Dependency Injection — Advanced Usage | ⭐ | ✅ |
| 12 | Subjects | ⭐ | ✅ |
| 13 | Signals + RxJS | ⭐ | ✅ |
| 14 | Routing — Advanced | ⭐ | ✅ |
| 15 | Forms — Advanced | ⭐ | ✅ |
| 16 | Accessibility | ⭐ | ✅ |
| 17 | Testing | ⭐ | ✅ |

## Advanced (16 topics) — 16 written

| # | Topic | Priority | Written? |
|---|---|---|---|
| 1 | Angular Rendering Internals | 🧠 | ✅ |
| 2 | Change Detection Internals | 🧠 | ✅ |
| 3 | Zoneless Angular | 🧠 | ✅ |
| 4 | Advanced RxJS Architecture | 🧠 | ✅ |
| 5 | Signal Architecture | 🧠 | ✅ |
| 6 | SSR & Hydration | 🔥 | ✅ |
| 7 | Deferrable Views | ⭐ | ✅ |
| 8 | Angular Security | 🔥 | ✅ |
| 9 | Large Application Architecture | 🧠 | ✅ |
| 10 | Micro Frontends | 🧠 | ✅ |
| 11 | Scenario: Performance Under Load | 🔥 | ✅ |
| 12 | Scenario: RxJS in Production | 🔥 | ✅ |
| 13 | Scenario: Change Detection Gone Wrong | 🔥 | ✅ |
| 14 | Scenario: State Management at Scale | ⭐ | ✅ |
| 15 | Scenario: Modernizing a Legacy Angular App | 🔥 | ✅ |
| 16 | Scenario: SSR & Hydration Issues | ⭐ | ✅ |

## Where the roadmap came from

Sourced from the user's own detailed Angular interview roadmap outline — already organized into
Basic/Intermediate/Advanced with 36 content groups, an explicit "don't cap the count" instruction,
and an explicit audit instruction to cover both modern Angular (Standalone, Signals, the new
control flow, `@defer`, functional providers/guards/interceptors, `inject()`, zoneless,
SSR/hydration) and existing enterprise Angular (`NgModule`s, Zone.js, `OnPush`, RxJS, Reactive
Forms, class-based guards/interceptors). See
[`question-taxonomy.md`](question-taxonomy.md)'s own "Coverage note for Phase 1" and "Gap-hunt
log" for exactly what was reorganized, what was verified/updated for currency, and what was added
by this track's own gap-hunt.

## Track-specific decisions and boundaries

- **This track owns Angular-the-framework** — components, templates, DI, RxJS as Angular uses
  it, Signals, change detection, rendering, and Angular-specific architecture/security/
  performance. It does not own general TypeScript/JavaScript fundamentals, Angular Material/
  CDK's own component API surface, or NgRx's exact reducer/effect syntax — see the taxonomy's
  own "Scope boundary" section for the full reasoning on each exclusion.
- **Both modern Angular and existing enterprise Angular are explicitly in scope, on purpose** —
  per the source outline's own instruction, a candidate may be interviewing for a modern-stack
  role while maintaining a 5–10-year-old enterprise codebase, and this site's audience spans
  both realities. Pages name which era's API they're teaching (e.g. `@Input`/`@Output` vs.
  `input()`/`output()`) rather than picking one blanket house style.
- **RxJS, Signals, and Change Detection are treated as the conceptual spine of this track, not
  three ordinary topics among many** — reflected in page count (RxJS gets 5 dedicated
  Intermediate pages plus its own Advanced architecture page; Signals gets 3; Change Detection
  gets 2) and in priority (all three have at least one 🔥 page), per the source outline's own
  explicit instruction.
- **HTTP Interceptors is 🔥, not a hedge** — auth-token injection and the refresh-token-flow
  question are two of the most commonly asked practical Angular questions once a candidate is
  past pure fundamentals.
- **SSR & Hydration is 🔥 despite being an Advanced page** — priority and tier are independent
  axes; SSR has become a routine, expected topic in current Angular interviews even though the
  content of the answer is genuinely Advanced-depth.
- **Code examples are TypeScript**, using Angular's actual current syntax per what a given page
  is specifically teaching (standalone `imports`, the new `@if`/`@for` control flow,
  `input()`/`output()`/`model()` on signal-focused pages, `@Input`/`@Output` on decorator-focused
  ones).
- Icon and track color: 🅰️, Angular's own brand red (`#dd0031`) — distinct from every track
  color already in use (see [`roadmap.md`](roadmap.md)'s own track-color list); checked directly
  against the root tile grid before committing to the pick (Web API's `#b91c1c` is a darker,
  brick-toned red; Angular's `#dd0031` reads as a distinctly brighter red-pink beside it).

## Known gaps

None — this track went through the full 7-phase pipeline (including its own Phase 2 gap-hunt,
folded into the initial pass rather than needing a later addendum) in one build, and every page
passed the mandatory independent diagram-verification sweep (43/43, `issueCount: 0`, run one
page at a time, not sampled). Expect a review/feedback pass once the user goes through it, same
as every other completed track.
