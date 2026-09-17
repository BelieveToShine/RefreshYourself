# React — Track Spec

**Start here for anything React-related.** See
[`docs/superpowers/specs/README.md`](../README.md) for what this file is and the process for
keeping it in sync with the live pages.

## Status — Phases 1–7 complete, all 41 pages written

- **Phase 1** — [`question-taxonomy.md`](question-taxonomy.md): 337 raw questions across 35
  concept sections, through two independent adversarial passes (most recently commit `4831f58`).
- **Phases 2–6** — [`roadmap.md`](roadmap.md): reviewed, deduped, grouped into 41 final pages
  (8 Basic, 15 Intermediate, 18 Advanced), tiered by **interview depth** (question *type*, not
  difficulty — see [interview-depth-and-priority.md](../../rules/interview-depth-and-priority.md)),
  and given an interview-priority tag. This orchestrating session read both documents as final
  and did not re-derive them, per the user's explicit instruction.
- **Phase 7 — all 41 pages written**, using the same template as every other completed track's
  Phase 7 (❓ Interview Question line → 🔥 Recall → 🧠 Visual → ⚠️ Trap → 🔄 Follow-up → 🎯
  Say-this → 📖 Explanation → 💻 Code → 🌍 Real-world/Scenario — see
  [content-writing.md](../../rules/content-writing.md)), by dedicated subagents referencing
  `csharp/basic/15.html`, `csharp/intermediate/8.html`, and `csharp/advanced/3.html` as structural
  templates. Every page's diagram(s) passed the mandatory automated verification script (see
  [diagram-style.md](../../rules/diagram-style.md#mandatory-automated-verification--hand-computed-coordinates-are-not-verification))
  with `issueCount: 0`, run independently by the orchestrating session against every single page
  (not sampled) before this track was considered done, per
  [build-process.md](../../rules/build-process.md).

## Basic (8 topics) — 8 written

| # | Topic | Priority | Written? |
|---|---|---|---|
| 1 | What Is React | 🔥 | ✅ |
| 2 | Components & JSX | 🔥 | ✅ |
| 3 | Props | 🔥 | ✅ |
| 4 | State | 🔥 | ✅ |
| 5 | Events | ⭐ | ✅ |
| 6 | Conditional Rendering | ⭐ | ✅ |
| 7 | Lists & Keys | 🔥 | ✅ |
| 8 | Hooks — Rules & Overview | 🔥 | ✅ |

## Intermediate (15 topics) — 15 written

| # | Topic | Priority | Written? |
|---|---|---|---|
| 1 | useEffect — Fundamentals & Cleanup | 🔥 | ✅ |
| 2 | Effect Timing Variants & StrictMode | ⭐ | ✅ |
| 3 | useRef & Ref Callbacks | ⭐ | ✅ |
| 4 | useMemo, useCallback & React.memo | ⭐ | ✅ |
| 5 | Custom Hooks | 🔥 | ✅ |
| 6 | Context API | 🔥 | ✅ |
| 7 | Component Communication & Composition | ⭐ | ✅ |
| 8 | Forms | ⭐ | ✅ |
| 9 | Data Fetching | 🔥 | ✅ |
| 10 | Routing | ⭐ | ✅ |
| 11 | Rendering Behaviour | 🔥 | ✅ |
| 12 | Performance Optimization Basics | 🔥 | ✅ |
| 13 | Error Handling & Error Boundaries | 🔥 | ✅ |
| 14 | Testing React Components | ⭐ | ✅ |
| 15 | Accessibility | ⭐ | ✅ |

## Advanced (18 topics) — 18 written

| # | Topic | Priority | Written? |
|---|---|---|---|
| 1 | Reconciliation & Fiber | 🧠 | ✅ |
| 2 | Concurrent Rendering | 🧠 | ✅ |
| 3 | Suspense | ⭐ | ✅ |
| 4 | Server-Side Rendering & Hydration | 🔥 | ✅ |
| 5 | Server Components | 🧠 | ✅ |
| 6 | Actions, useOptimistic & the use() Hook | 🧠 | ✅ |
| 7 | State Management Architecture | 🔥 | ✅ |
| 8 | React Architecture — Structure Within One App | 🔥 | ✅ |
| 9 | React Architecture — Beyond One App | 🧠 | ✅ |
| 10 | Design Patterns | ⭐ | ✅ |
| 11 | Testing at Scale | ⭐ | ✅ |
| 12 | Security | 🔥 | ✅ |
| 13 | Production Performance | 🔥 | ✅ |
| 14 | Scenario: Runaway Rendering & Requests | 🔥 | ✅ |
| 15 | Scenario: Scaling Under Load | 🔥 | ✅ |
| 16 | Scenario: Production Incident Response | 🔥 | ✅ |
| 17 | Scenario: Codebase & Team Growing Pains | ⭐ | ✅ |
| 18 | Scenario: Architecture Decisions | 🔥 | ✅ |

## Where the roadmap came from

Sourced from the user's own React interview-prep outline, taken through two independent
adversarial passes before this track's Phase 7 began — see
[`question-taxonomy.md`](question-taxonomy.md)'s own coverage note and
[`roadmap.md`](roadmap.md)'s Phase 2–6 notes for exactly how the 337 raw questions became these
41 pages. This orchestrating session treated both documents as final inputs, not drafts to
re-review.

## Track-specific decisions and boundaries

- **This track owns the client-rendering/component-model layer** — JSX, hooks, the rendering
  model (Fiber, concurrency, Suspense, Server Components), and React-specific architecture,
  testing, security, and performance. It does not own general web-performance or HTTP topics
  already covered elsewhere (Web API, .NET) — those are only referenced where a React-specific
  angle exists (e.g. hydration mismatches, not HTTP caching in general).
- **Code examples are JSX**, using `//` comments (not JSDoc blocks), matching the site's
  "code shows the substance, not a tutorial" rule.
- **Reconciliation & Fiber and Concurrent Rendering are tagged 🧠 Deep Dive, not 🔥 Must Know**,
  despite being conceptually central to modern React — per
  [interview-depth-and-priority.md](../../rules/interview-depth-and-priority.md), priority tracks
  how often an interviewer actually leads with a question, not how conceptually important the
  topic is; most interviews probe *usage* of concurrent features (Suspense, transitions) before
  asking about Fiber internals directly.
- Icon is ⚛️, track color cyan (`#0891b2` ink on `#cffafe` bg) — chosen and wired by the prior
  session that built `react/roadmap.html` and the root tile's original placeholder; this session
  kept that choice for consistency and only added the missing cyan crumb color to the four index
  pages it created.

## Known gaps

None — every page passed the mandatory independent diagram-verification sweep (41/41,
`issueCount: 0`, run one page at a time, not sampled). Expect a review/feedback pass once the
user goes through it, same as every other completed track.
