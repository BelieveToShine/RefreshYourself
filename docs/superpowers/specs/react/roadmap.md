# React — Roadmap (Phases 2–6)

Phase 1 output: [`question-taxonomy.md`](question-taxonomy.md) — 35 concept groups (unusually
many, see that file's own note on why). This file is Phases 2–6: review, page grouping, tier,
priority, and the final roadmap — see [`specs/README.md`](../README.md) for what each phase
means.

## Phase 2 — Review

Two genuine issues found on an adversarial re-read of the taxonomy, both already fixed in place
in `question-taxonomy.md` per the "edit Phase 1–2 directly" rule, not just noted here:

- The source outline's own "Recommended structure" tree named an Advanced **"Testing
  Strategy"** subsection that no detailed question list ever existed for. Added as a new
  section (**Testing at Scale**) rather than left as a silent gap between the outline's shape
  and its content.
- **Production Performance** and **Real-world Scenarios** each separately asked "initial page
  load is slow" and "bundle size increased" — genuine duplicates (identical underlying
  question, not two distinct question types), not the deliberate multi-angle coverage seen
  elsewhere in this taxonomy (e.g. `SaveChanges()` legitimately asked three different ways in
  the EF Core track). Merged into one instance each.

No other duplication found. Everywhere the same concept is asked twice across sections (e.g.
`React.memo` in both the useMemo/useCallback section and Performance; Context in both its own
section and the State Architecture section; hydration in both Server Rendering and as a
Real-world Scenario) is the deliberate Direct → Comparison → Scenario layering this taxonomy
(and every other track's) is built on — a different angle on different pages, not a repeat, and
each such pair gets cross-linked rather than re-taught.

**Scope boundary re-confirmed**: general JavaScript fundamentals, plain HTML/CSS, and any
specific third-party library's own API (Redux, TanStack Query, etc.) stay out — see the
taxonomy's own "Scope boundary" section.

## Phase 3 — Grouping into pages (41 pages)

Default is one taxonomy section → one page, same as every other track. Three sections were
large or broad enough after Phase 1's additions to need a split, and one was split into five
scenario pages instead of one unreadable 15-item page:

- **useEffect (§9, 16 bullets after additions)** splits into **useEffect — Fundamentals &
  Cleanup** (the original 13) and **Effect Timing Variants & StrictMode** (the 3 additions —
  `useLayoutEffect`, `useInsertionEffect`, `StrictMode` double-invoke — a genuinely distinct
  "when exactly does this run" cluster, not padding).
- **React Architecture (§30, 16 bullets after additions)** splits into **React Architecture —
  Structure Within One App** (the original 11 — folder structure, boundaries, god components)
  and **React Architecture — Beyond One App** (the 5 additions — micro-frontends, monorepo,
  Web Components, React Native, i18n — all genuinely about a different question: composing or
  scaling *past* a single app's own structure).
- **Modern Data Mutations & the `use()` Hook (§28, 5 bullets)** stays as **one** page despite
  covering several React 19 primitives (Actions, `useActionState`, `useOptimistic`, a Server
  Actions mention, `use()`) — at 5 bullets total, splitting further would produce two
  under-filled pages; they share one real theme ("React 19's new toolkit for mutations and
  reading data conditionally") tightly enough to earn one page together.
- **Real-world Scenarios (§35, 15 bullets after the Phase 2 merge)** splits into **five**
  themed scenario pages instead of one page (unreadably dense) or fifteen (far too granular for
  how thin some of them are alone):
  - *Runaway Rendering & Requests* — infinite render loop, repeated API calls, out-of-order
    responses, Context-triggered full-app re-render (4) — shared lesson: a dependency-array or
    referential-equality mistake.
  - *Scaling Under Load* — 5,000-row table, search-box-per-keystroke (2) — shared lesson:
    designing for a known-heavy interaction pattern (virtualization, debouncing).
  - *Production Incident Response* — blank page in prod, hydration errors (2) — shared lesson:
    triage a live, already-broken app.
  - *Codebase & Team Growing Pains* — excessive prop drilling, a 1000+-line component, multiple
    teams on one app (3) — shared lesson: the codebase's own structure has outgrown it.
  - *Architecture Decisions* — scalable enterprise frontend, CSR/SSR/RSC choice, error handling
    & observability design, auth/authz design (4) — the track's capstone "design this for real"
    page, deliberately last.

Every other section (30 of 35) stays exactly one page — most were already single-concept-sized
even after Phase 1's additions.

## Phase 4 — Tier (by question type, not difficulty)

The source outline's own Basic/Intermediate/Advanced placement is kept as-is for every section —
it was checked against
[`interview-depth-and-priority.md`](../../rules/interview-depth-and-priority.md)'s actual rule
(core knowledge → practical/comparison/troubleshooting → internals/performance/architecture/
scenario) during Phase 1 and already matches it; nothing needed to move tiers.

| Tier | Count | Pages |
|---|---|---|
| Basic | 8 | What Is React; Components & JSX; Props; State; Events; Conditional Rendering; Lists & Keys; Hooks — Rules & Overview |
| Intermediate | 15 | useEffect — Fundamentals & Cleanup; Effect Timing Variants & StrictMode; useRef & Ref Callbacks; useMemo, useCallback & React.memo; Custom Hooks; Context API; Component Communication & Composition; Forms; Data Fetching; Routing; Rendering Behaviour; Performance Optimization Basics; Error Handling & Error Boundaries; Testing React Components; Accessibility |
| Advanced | 18 | Reconciliation & Fiber; Concurrent Rendering; Suspense; Server-Side Rendering & Hydration; Server Components; Actions, useOptimistic & the use() Hook; State Management Architecture; React Architecture — Structure Within One App; React Architecture — Beyond One App; Design Patterns; Testing at Scale; Security; Production Performance; and the 5 Real-world Scenario pages |

## Phase 5 — Priority (🔥 Must Know / ⭐ Should Know / 🧠 Deep Dive — independent of tier)

The source outline already carried priority hints on roughly a third of its sections — used as
a strong starting signal, cross-checked against "priority = likelihood, never depth" rather than
copied blindly.

**One deliberate override, flagged rather than silently applied**: the source hinted "🧠 Deep
Dive" for React Architecture. Per
[`interview-depth-and-priority.md`](../../rules/interview-depth-and-priority.md)'s own explicit
warning against conflating priority with how deep an answer goes, "how would you structure a
large React app" is asked routinely at senior level — that's a 🔥 likelihood question with a
🧠-deep answer, not a 🧠-priority question. Tagged 🔥 here for the Structure page; the "Beyond
One App" half (micro-frontends, React Native boundary, etc.) is genuinely less likely to come up
and stays 🧠.

| Priority | Pages |
|---|---|
| 🔥 Must Know | What Is React; Components & JSX; Props; State; Lists & Keys; Hooks — Rules & Overview; useEffect — Fundamentals & Cleanup; Custom Hooks; Context API; Data Fetching; Rendering Behaviour; Performance Optimization Basics; Error Handling & Error Boundaries; Server-Side Rendering & Hydration; State Management Architecture; React Architecture — Structure Within One App; Security; Production Performance; Scenario: Runaway Rendering & Requests; Scenario: Scaling Under Load; Scenario: Production Incident Response; Scenario: Architecture Decisions |
| ⭐ Should Know | Events; Conditional Rendering; Effect Timing Variants & StrictMode; useRef & Ref Callbacks; useMemo, useCallback & React.memo; Component Communication & Composition; Forms; Routing; Testing React Components; Accessibility; Suspense; Design Patterns; Testing at Scale; Scenario: Codebase & Team Growing Pains |
| 🧠 Deep Dive | Reconciliation & Fiber; Concurrent Rendering; Server Components; Actions, useOptimistic & the use() Hook; React Architecture — Beyond One App |

22 🔥 / 14 ⭐ / 5 🧠 across 41 pages — more 🔥-heavy than other tracks, proportionally, which
tracks reality: a much larger share of experienced-level React interview content is genuinely
"expect this," not a rare deep-cut, especially through Basic and Intermediate.

## Phase 6 — Final roadmap

`react/roadmap.html` groups by the same 35 concept sections as the Phase 1 taxonomy (concept
section, not tier — the site-wide convention). Numbering below is the tier-folder page number
(`react/<tier>/<n>.html`):

| # | Concept section | Tier | Page(s) |
|---|---|---|---|
| 1 | React Fundamentals | Basic | basic/1.html |
| 2 | Components & JSX | Basic | basic/2.html |
| 3 | Props | Basic | basic/3.html |
| 4 | State | Basic | basic/4.html |
| 5 | Events | Basic | basic/5.html |
| 6 | Conditional Rendering | Basic | basic/6.html |
| 7 | Lists & Keys | Basic | basic/7.html |
| 8 | Basic Hooks | Basic | basic/8.html |
| 9 | useEffect | Intermediate | intermediate/1.html (Fundamentals & Cleanup), intermediate/2.html (Timing Variants & StrictMode) |
| 10 | useRef | Intermediate | intermediate/3.html |
| 11 | useMemo & useCallback | Intermediate | intermediate/4.html |
| 12 | Custom Hooks | Intermediate | intermediate/5.html |
| 13 | Context API | Intermediate | intermediate/6.html |
| 14 | Component Communication & Composition | Intermediate | intermediate/7.html |
| 15 | Forms | Intermediate | intermediate/8.html |
| 16 | Data Fetching | Intermediate | intermediate/9.html |
| 17 | Routing | Intermediate | intermediate/10.html |
| 18 | Rendering Behaviour | Intermediate | intermediate/11.html |
| 19 | Performance | Intermediate | intermediate/12.html |
| 20 | Error Handling | Intermediate | intermediate/13.html |
| 21 | Testing | Intermediate | intermediate/14.html |
| 22 | Accessibility | Intermediate | intermediate/15.html |
| 23 | Reconciliation & Rendering Internals | Advanced | advanced/1.html |
| 24 | Concurrent Rendering | Advanced | advanced/2.html |
| 25 | Suspense | Advanced | advanced/3.html |
| 26 | Server Rendering | Advanced | advanced/4.html |
| 27 | Server Components | Advanced | advanced/5.html |
| 28 | Modern Data Mutations & the use() Hook | Advanced | advanced/6.html |
| 29 | State Management Architecture | Advanced | advanced/7.html |
| 30 | React Architecture | Advanced | advanced/8.html (Structure Within One App), advanced/9.html (Beyond One App) |
| 31 | Design Patterns | Advanced | advanced/10.html |
| 32 | Testing at Scale | Advanced | advanced/11.html |
| 33 | Security | Advanced | advanced/12.html |
| 34 | Production Performance | Advanced | advanced/13.html |
| 35 | Real-world Scenarios | Advanced | advanced/14.html (Runaway Rendering & Requests), advanced/15.html (Scaling Under Load), advanced/16.html (Production Incident Response), advanced/17.html (Codebase & Team Growing Pains), advanced/18.html (Architecture Decisions) |

## Track-specific decisions and boundaries

- **General JavaScript fundamentals, plain HTML/CSS, and any specific third-party library's own
  API stay entirely out of this track** — see the taxonomy's "Scope boundary" section for the
  full reasoning and what's explicitly excluded (bundler internals, CSS-in-JS library
  specifics, `useDebugValue`).
- **This track's Basic/Intermediate/Advanced grouping came from the user's own outline**, not
  derived from scratch the way every other track's was — see the taxonomy file's own opening
  note. It was checked against, not just copied from, the site's actual tier rule.
- **41 pages is the largest page count of any track so far** (C# is next at 49, but built up
  from an original 14 rather than starting this size) — a direct, proportionate reflection of
  how much broader experienced-level React's interview surface is, not scope creep.
- Code examples are JSX/TSX, matching how React is actually written; this is the one track on
  the site where that's the native example language rather than C#.
- Icon and track color: not yet chosen — pick something unused by the time Phase 7 scaffolds
  the site (used so far: C# 🎵 `#3b82f6`, OOP 🧩 `#16a34a`, .NET 🧱 `#7c3aed`, Web API 🔌
  `#b91c1c`, EF Core 🗄️ `#0f766e`).

## Known gaps

None for Phases 1–6. Phase 7 (writing the 41 pages) has not started — awaiting the user's
review of this roadmap first, per the standing rule that a track's full roadmap is listed and
reviewable before a single page gets built.
