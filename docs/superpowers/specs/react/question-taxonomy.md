# React — Interview Question Taxonomy

**Phase 1 of the 7-phase pipeline** (see [`docs/superpowers/specs/README.md`](../README.md)).
No tier lock-in, no priority, no page grouping yet. **[new]** marks anything added beyond the
user's own detailed source outline for this track.

## Where this came from, and how it differs from every other track's Phase 1

Every other track so far started from a short bullet list and got grouped by concept from
scratch. React started from a **complete, already-tier-organized outline** the user wrote
themselves — 32 subsections already sorted into Basic/Intermediate/Advanced, most subsections
already carrying a full question list and several already carrying priority hints, plus an
explicit "important additions" checklist of concepts to evaluate for gaps, and an explicit
instruction to actively hunt for anything still missing rather than just organize what was
given.

Because of that, this file keeps the user's own Basic → Intermediate → Advanced grouping as its
top-level structure instead of the usual flat concept-group list — that grouping is a strong,
already-considered hypothesis, not something to re-derive from nothing. **It is still only a
hypothesis, not a locked Phase 4 tier assignment**: Phase 4 will re-check every subsection
against [`interview-depth-and-priority.md`](../../rules/interview-depth-and-priority.md)'s actual
rule (question *type*, not where it happened to sit in the source outline) before treating the
grouping as final. In practice every subsection here already lands where that rule would put it
anyway (fundamentals/terminology → Basic, practical/comparison/troubleshooting → Intermediate,
internals/performance/architecture/scenario → Advanced) — Phase 4 should mostly be confirming
this outline, not overturning it.

Every bullet below is tagged by question type using this track's own vocabulary, same as every
other track: **Core concept** ("what is it"), **Comparison** ("X vs. Y"), **Understanding**
(mechanism/why, including common-mistake framing), **Scenario** (a real problem to diagnose or
design through).

## Scope boundary

**General JavaScript fundamentals are out of scope** — closures, prototypes, the event loop,
`async`/`await` mechanics, `this` binding, and so on are assumed knowledge, not this track's
job. Where React's own behavior specifically depends on one of those (e.g. a *stale closure*
inside `useEffect`, or *why* `useRef` mutating `.current` doesn't trigger a re-render), that
shows up here **from React's side of it only** — the taxonomy asks "what does this mean for a
React component," never "explain closures from scratch." Plain HTML/CSS, general browser APIs,
and TypeScript itself are the same kind of assumed-adjacent-knowledge, touched only where a
question is genuinely React-specific (e.g. typing props) rather than a TypeScript tutorial.

**Deliberately excluded, with reasons** (per the user's own "don't add everything, decide
whether it's worth it" instruction):
- **Bundler/build-tool internals** (Webpack vs. Vite vs. Turbopack config, tree-shaking
  mechanics) — real topics, but front-end tooling, not React itself; diluting this track with
  them would blur its focus. `useBundlePerformance`-adjacent *outcomes* (bundle size, code
  splitting) stay in scope under Performance; the tools that produce those outcomes don't.
- **Any specific state-management or data-fetching library's exact API** (Redux, Zustand,
  Recoil, Jotai, TanStack Query, SWR) — the *conceptual* questions ("when should a dedicated
  state library be introduced," "caching vs. refetching") are already in scope under State
  Management Architecture and Data Fetching; a specific library's own API surface is that
  library's own interview territory, not React's.
- **CSS-in-JS library specifics** — `useInsertionEffect` (in scope below, since it's a React
  primitive) exists *because of* this category of library, but the libraries themselves aren't.

## BASIC — Core interview recall

### 1. React Fundamentals
- **Core concept** — What is React?
- **Comparison** — Why is React called a library rather than a framework?
- **Core concept** — What problem does React solve?
- **Core concept** — What are the main characteristics of React?
- **Core concept** — What is declarative UI?
- **Comparison** — Imperative vs. declarative UI?
- **Understanding** — Why is React component-based?
- **Core concept** — What is the virtual DOM?
- **Comparison** — Virtual DOM vs. real DOM?
- **Understanding** — Is the virtual DOM always faster than manipulating the DOM directly?
- **Understanding** — What happens when React state changes?
- **Understanding** — What causes a React component to render?

### 2. Components & JSX
- **Core concept** — What is a React component?
- **Comparison** — Functional component vs. class component?
- **Understanding** — Why are functional components preferred today?
- **Core concept** — What is JSX?
- **Understanding** — Is JSX HTML?
- **Understanding** — How does JSX get converted into JavaScript?
- **Understanding** — Why must components return a single root?
- **Comparison** — Fragment vs. `<div>`?
- **Understanding** — Can a component return `null`?
- **Core concept** — What makes a component reusable?
- **Core concept** — What makes a component pure?

### 3. Props
- **Core concept** — What are props?
- **Comparison** — Props vs. state?
- **Understanding** — Are props mutable?
- **Understanding** — How does data flow between parent and child?
- **Understanding** — How do you pass data from child to parent?
- **Core concept** — What is prop drilling?
- **Understanding** — How do you avoid excessive prop drilling?
- **Understanding** — Props spreading — when is it useful, and when can it become dangerous?
- **Understanding** — What happens when a parent passes a new object/function as a prop?
- **[new] Comparison** — PropTypes vs. TypeScript for prop validation — why has TypeScript
  become the default over runtime `PropTypes` checks? (A real, common practical question this
  outline didn't have a spot for — belongs here, not a standalone page.)

### 4. State
- **Core concept** — What is state?
- **Understanding** — Why shouldn't state be mutated directly?
- **[new] Understanding** — Why does React rely on immutable updates specifically — what
  actually breaks (beyond "it's a rule") if a mutation happens to "work" once? Ties directly
  into how `React.memo`/`PureComponent` and the Fiber diff assume shallow-comparable state — a
  natural bridge from this section to Performance (§19) and Reconciliation (§23) later, so it
  belongs here rather than as its own page.
- **Understanding** — Why does React provide a setter instead of modifying state directly?
- **Understanding** — What happens after calling a state setter?
- **Understanding** — Why may state updates appear asynchronous?
- **Core concept** — What is batching?
- **Understanding** — How do functional state updates work?
- **Scenario** — When should state be lifted?
- **Comparison** — Local state vs. shared state?
- **Understanding** — What should and shouldn't be stored in state?
- **Understanding** — Derived state — should you store it?

### 5. Events
- **Core concept** — How are events handled in React?
- **Comparison** — React event handlers vs. DOM event handlers?
- **Core concept** — What is an event handler?
- **Understanding** — Why do we pass a function rather than call it?
- **Understanding** — How do you pass arguments to an event handler?
- **Core concept** — What is event propagation?
- **Comparison** — `stopPropagation()` vs. `preventDefault()`?
- **Comparison** — Controlled vs. uncontrolled form inputs?

### 6. Conditional Rendering
- **Core concept** — How do you conditionally render in React?
- **Comparison** — `if` vs. ternary vs. `&&`?
- **Understanding** — What is the common problem with `condition && <Component />`?
- **Understanding** — How do you render fallback content?
- **Understanding** — When should conditional logic be extracted into a component?

### 7. Lists & Keys
- **Understanding** — Why does React need keys?
- **Understanding** — Why shouldn't array indexes normally be used as keys?
- **Understanding** — What happens when keys are unstable?
- **Core concept** — What makes a good key?
- **Understanding** — What happens when list items are reordered?
- **Understanding** — How do keys affect component state?
- **[new] Understanding** — How can changing a key be used *deliberately* to force a component
  to remount (reset all its internal state) instead of update? A real, sometimes-asked "trick
  question" that flips §7's usual "don't destabilize your keys" framing on its head.
- **[new] Understanding** — Why can't a component read its own `key` via `props.key`? React
  reserves `key` (and `ref`) as special, stripping them out of the props object a component
  actually receives — a small but genuine gotcha for anyone who's tried to pass `key` through as
  an ordinary value.

### 8. Basic Hooks
- **Core concept** — What are Hooks?
- **Understanding** — Why were Hooks introduced?
- **Core concept** — Rules of Hooks?
- **Core concept** — `useState`?
- **Core concept** — `useEffect`?
- **Core concept** — `useRef`?
- **Core concept** — `useMemo`?
- **Core concept** — `useCallback`?
- **Core concept** — What makes a custom Hook?
- **Understanding** — Can Hooks be called conditionally?

## INTERMEDIATE — Practical React

### 9. useEffect
- **Core concept** — What is `useEffect` actually used for?
- **Understanding** — When does `useEffect` run?
- **Understanding** — What does the dependency array mean?
- **Comparison** — Empty dependency array vs. no dependency array?
- **Understanding** — Why does an effect run again?
- **Core concept** — What is effect cleanup?
- **Understanding** — When does cleanup execute?
- **Understanding** — How do you prevent stale effects?
- **Core concept** — What is a stale closure?
- **Understanding** — Why shouldn't every piece of logic go inside `useEffect`?
- **Understanding** — How do you handle subscriptions/timers inside effects?
- **Understanding** — How do you avoid infinite effect loops?
- **Understanding** — Why can an object/function dependency cause repeated effects?
- **[new] Comparison** — `useEffect` vs. `useLayoutEffect` — the timing difference (after paint
  vs. before paint) and a concrete case where the synchronous one is actually needed (e.g.
  measuring and repositioning a DOM node before the user sees a flicker). A very commonly asked
  comparison this outline didn't have a slot for.
- **[new] Understanding** — Where does the rarer third variant, `useInsertionEffect`, fit — and
  why is it almost never something an application author reaches for directly (it exists for
  CSS-in-JS library authors to inject styles before layout is read)? One line of real awareness
  is worth having; it doesn't need more than that.
- **[new] Understanding** — What does React's `StrictMode` actually do in development — why do
  effects (and in React 18+, some renders) run twice, and what is that double-invocation trying
  to surface? A genuinely common "why does my effect fire twice in dev" confusion that belongs
  right next to effects, not buried in Fundamentals.

### 10. useRef
- **Core concept** — What is `useRef`?
- **Comparison** — `useRef` vs. `useState`?
- **Understanding** — Why doesn't changing `ref.current` cause a render?
- **Scenario** — When should you use refs?
- **Understanding** — How do you access a DOM element with a ref?
- **Understanding** — Can refs store previous values?
- **Understanding** — When is using a ref instead of state a design smell?
- **[new] Comparison** — Ref objects (`useRef`) vs. ref callback functions — when does the
  callback form matter (e.g. running logic exactly when a node mounts/unmounts), and what's new
  in React 19 (a ref callback can now return its own cleanup function, mirroring `useEffect`)?

### 11. useMemo & useCallback
- **Core concept** — What is `useMemo`?
- **Core concept** — What is `useCallback`?
- **Comparison** — `useMemo` vs. `useCallback`?
- **Understanding** — Do they automatically improve performance?
- **Understanding** — When can memoization make performance worse?
- **Understanding** — How do they relate to referential equality?
- **Scenario** — When would you use `React.memo`?
- **Comparison** — `React.memo` vs. `useMemo` vs. `useCallback`?
- **[new] Understanding** — What is the React Compiler, and does it change any of the above? At
  a high level: it can automatically insert this exact category of memoization at build time,
  which is why "do I still need to sprinkle `useMemo`/`useCallback` everywhere by hand" is
  becoming a live interview question rather than a settled one — worth being aware of the
  direction React is heading in, without needing its own page (this section is exactly where an
  interviewer would ask it as a natural follow-up).

### 12. Custom Hooks
- **Core concept** — What is a custom Hook?
- **Understanding** — Why create custom Hooks?
- **Comparison** — Custom Hook vs. utility function?
- **Understanding** — How do custom Hooks share logic?
- **Understanding** — Do custom Hooks share state?
- **Scenario** — How would you design a reusable data-fetching Hook?
- **Understanding** — What makes a custom Hook difficult to maintain?

### 13. Context API
- **Core concept** — What problem does Context solve?
- **Comparison** — Context vs. props?
- **Comparison** — Context vs. global state management?
- **Understanding** — Does Context cause unnecessary re-renders?
- **Understanding** — How can you optimize Context?
- **Understanding** — When should Context not be used?
- **Understanding** — Can you have multiple contexts?
- **Scenario** — How would you structure Context in a large application?

### 14. Component Communication & Composition
- **Understanding** — Parent → child communication?
- **Understanding** — Child → parent communication?
- **Understanding** — Sibling communication?
- **Comparison** — Context vs. callbacks?
- **Core concept** — What is component composition?
- **Comparison** — Composition vs. inheritance?
- **Core concept** — What are compound components?
- **Core concept** — What are render props?
- **Core concept** — What are higher-order components?
- **Understanding** — Are HOCs still commonly needed with Hooks?
- **Scenario** — When would you create a wrapper component?
- **[new] Core concept** — What is a Portal, and why would you reach for one (a modal or
  tooltip that needs to escape a parent's `overflow: hidden`/`z-index` stacking context while
  still behaving like a normal child in the React tree)? A genuinely common, entirely absent
  topic — belongs here since it's fundamentally a composition/rendering-target tool, not deep
  internals.
- **[new] Understanding** — `props.children` is just a prop, but a component that needs to
  inspect, filter, or augment *arbitrary* children without knowing their shape (a library
  author's problem, not an everyday one) reaches for `React.Children` utilities or
  `cloneElement` — worth knowing these exist even if rarely reached for directly.

### 15. Forms
- **Comparison** — Controlled vs. uncontrolled components?
- **Scenario** — When would you choose uncontrolled inputs?
- **Scenario** — How do you handle large forms?
- **Understanding** — How do you validate forms?
- **Scenario** — How do you prevent unnecessary re-renders in large forms?
- **Scenario** — How do you handle async form submission?
- **Understanding** — How do you display server-side validation errors?

### 16. Data Fetching
- **Understanding** — Where should API calls happen in a React application?
- **Understanding** — How do you handle loading/error/success states?
- **Understanding** — How do you cancel an API request?
- **Understanding** — How do you avoid race conditions?
- **Understanding** — What happens if a component unmounts while a request is running?
- **Comparison** — Client-side fetching vs. server-side fetching?
- **Understanding** — How should API state be separated from UI state?
- **Scenario** — When should a data-fetching library be introduced?
- **Comparison** — Caching vs. refetching?
- **Comparison** — Pagination vs. infinite scrolling?

### 17. Routing
- **Core concept** — What is client-side routing?
- **Understanding** — How does React routing work?
- **Comparison** — Route parameters vs. query parameters?
- **Core concept** — Nested routes?
- **Core concept** — Protected routes?
- **Core concept** — Lazy-loaded routes?
- **Understanding** — How do you handle 404 pages?
- **Understanding** — How do you preserve route state?
- **Understanding** — What happens when a user refreshes a client-side route?

### 18. Rendering Behaviour
- **Understanding** — What causes a component to re-render?
- **Understanding** — Does a parent re-render cause its children to re-render?
- **Core concept** — What is reconciliation?
- **Understanding** — How does React decide what to update?
- **Comparison** — Render phase vs. commit phase?
- **Understanding** — What happens when state changes?
- **Understanding** — What happens when props change?
- **Understanding** — What happens when context changes?
- **Understanding** — Does changing a ref cause a render?

### 19. Performance
- **Understanding** — How do you identify unnecessary re-renders?
- **Scenario** — How do you optimize a React application?
- **Scenario** — When should you use `React.memo`?
- **Scenario** — How do you optimize large lists?
- **Core concept** — What is virtualization?
- **Understanding** — How do code splitting and lazy loading help?
- **Core concept** — What is bundle size?
- **Scenario** — How do you analyze a slow React page?
- **[new] Understanding** — What tool would you actually name here — the React DevTools
  Profiler — and what does it show you (a flamegraph of what rendered, how long it took, and
  *why* it rendered)? Folded in here rather than a standalone page: "how do you analyze a slow
  page" already implies this tool by name in a real answer.
- **Understanding** — What causes expensive renders?
- **Understanding** — How do you avoid unnecessary state updates?
- **Understanding** — Why can excessive memoization hurt performance?

### 20. Error Handling
- **Understanding** — How do you handle errors in React?
- **Core concept** — What is an Error Boundary?
- **Understanding** — What errors do Error Boundaries catch?
- **Understanding** — What errors don't Error Boundaries catch?
- **Understanding** — How do you handle API errors?
- **Understanding** — How do you show a global error UI?
- **Understanding** — How should errors be logged in production?

### 21. Testing
- **Understanding** — What should you test in a React component?
- **Comparison** — Unit vs. integration vs. end-to-end testing?
- **Understanding** — What should you avoid testing?
- **Understanding** — How do you test user interactions?
- **Understanding** — How do you test asynchronous UI?
- **Understanding** — How do you mock API calls?
- **Understanding** — Why is testing implementation details problematic?
- **Understanding** — What makes a React test resilient?
- **[new] Understanding** — Why does React Testing Library specifically push you to query by
  role/label/text (the same way an assistive-technology user or a sighted user would find
  something) instead of by CSS class or test-id? A natural, genuinely asked bridge from testing
  philosophy straight into the new Accessibility section below.
- **[new] Understanding** — What does the "not wrapped in `act(...)`" warning actually mean, and
  why does it usually show up when a state update happens *after* a test already moved on (an
  unresolved promise resolving late, a timer firing after assertions ran)? One of the single
  most commonly hit real-world React testing gotchas — genuinely missing from the original list.

### 22. Accessibility **[new section]**
Completely absent from the original outline despite being a real, increasingly standard part of
a senior/staff React interview — not a "nice to have" add-on. Practical/comparison/scenario
depth, so Intermediate, not Advanced.
- **[new] Core concept** — What does "accessible" actually mean for a React application beyond
  "add some `aria-*` attributes"?
- **[new] Understanding** — How do dynamic content updates (a toast, a live search-result
  count) need to be announced to a screen reader — what is `aria-live` actually for?
- **[new] Scenario** — How do you manage focus correctly after a route change, or when a modal
  opens and closes (focus trap, returning focus to the trigger element on close)?
- **[new] Core concept** — What is `useId` for, and why does it exist specifically to keep
  generated ids for `aria-*` attributes stable and consistent between server and client render
  (i.e. it's also an SSR-hydration-safety tool, not just an accessibility one)?
- **[new] Understanding** — Does JSX or React give you any accessibility guarantees for free?
  (No — semantic HTML and correct ARIA usage are still entirely the author's job; React changes
  nothing about that baseline.)
- **[new] Scenario** — How would you actually verify a component is accessible — automated
  tooling (axe/lint rules) vs. what only manual keyboard/screen-reader testing catches?

## ADVANCED — Internals, architecture & senior/architect questions

### 23. Reconciliation & Rendering Internals
- **Understanding** — How does React reconciliation work?
- **Understanding** — How does React compare elements?
- **Understanding** — How do keys influence reconciliation?
- **Core concept** — What is the render phase?
- **Core concept** — What is the commit phase?
- **Core concept** — What is Fiber?
- **Understanding** — Why was Fiber introduced?
- **Understanding** — How does React prioritize rendering work?
- **Understanding** — What can be interrupted during rendering?
- **Understanding** — Why must render logic be pure?

### 24. Concurrent Rendering
- **Core concept** — What does concurrent rendering mean?
- **Understanding** — Does concurrent React mean multiple threads?
- **Understanding** — What problem does concurrency solve?
- **Core concept** — What is interruptible rendering?
- **Core concept** — What is `startTransition`?
- **Core concept** — What is `useTransition`?
- **Core concept** — What is `useDeferredValue`?
- **Comparison** — Urgent vs. non-urgent updates?
- **Scenario** — When should transitions be used?
- **Understanding** — What problems can occur if transitions are misunderstood?

### 25. Suspense
- **Core concept** — What is Suspense?
- **Understanding** — What problem does Suspense solve?
- **Understanding** — Suspense for code splitting?
- **Understanding** — Suspense for data?
- **Understanding** — How do Suspense boundaries work?
- **Scenario** — Where should Suspense boundaries be placed?
- **Understanding** — What happens when a component suspends?
- **Comparison** — Suspense vs. loading state?
- **[new] Understanding** — What is a "request waterfall," and how does naive Suspense-for-data
  usage (fetching sequentially, one component at a time, each waiting on the one above it to
  render before it even starts) accidentally create one instead of preventing it? The
  "render-as-you-fetch" pattern (start every fetch before rendering, let Suspense coordinate the
  waiting) is the real answer a senior interview is listening for here — a genuinely important
  gotcha this outline didn't have room for.
- **[new] Understanding** — Suspense only handles the *pending* half of a data request — if the
  underlying promise rejects, that's a thrown error during render like any other, and needs an
  Error Boundary (§20) wrapped around the Suspense boundary to be caught gracefully. A real,
  easy-to-forget pairing that connects two sections the original outline never linked.

### 26. Server Rendering
- **Comparison** — CSR vs. SSR?
- **Core concept** — What is hydration?
- **Understanding** — Why does hydration exist?
- **Understanding** — What happens during hydration?
- **Understanding** — What causes hydration mismatch?
- **Comparison** — SSR vs. SSG?
- **Scenario** — When would you choose SSR?
- **Understanding** — What are the performance trade-offs?
- **Understanding** — What are the caching implications?
- **Understanding** — How does server rendering affect SEO?
- **[new] Core concept** — What is streaming SSR, and what problem does it solve that
  traditional (buffer-the-whole-page-then-send) SSR can't — sending the shell immediately and
  streaming slower parts in as they become ready, instead of blocking the entire response on the
  slowest piece of data.

### 27. Server Components
- **Core concept** — What are React Server Components?
- **Comparison** — Server Components vs. Client Components?
- **Understanding** — What code belongs on the server?
- **Understanding** — Why can't Server Components use browser-only APIs?
- **Understanding** — Why can't every component simply be a Server Component?
- **Core concept** — What does `"use client"` mean?
- **Understanding** — What are the performance benefits?
- **Understanding** — What are the architectural trade-offs?
- **Understanding** — How does server/client component composition work?

### 28. Modern Data Mutations & the `use()` Hook **[new section]**
React 19 introduced a genuinely new mental model for *writing* data (not just reading it) that
has no slot anywhere in the original outline — Actions, `useActionState`, and `useOptimistic`
answer questions ("how do you show an instant UI update before the server confirms it," "how do
you wire a `<form>` up to a server mutation without hand-rolling submit/loading/error state
every time") that are becoming standard at the senior/staff level for anyone working in a
modern (Next.js/Remix-era) React codebase. Advanced tier — this is squarely internals/trade-off
territory, not a beginner topic.
- **[new] Core concept** — What is an Action in React 19 (a function passed to a `<form>`'s
  `action` prop, or called via `useActionState`), and what does it give you over a hand-written
  submit handler (automatic pending state, built-in error handling, works with progressive
  enhancement)?
- **[new] Core concept** — What does `useActionState` do, and how does it relate to a reducer
  (previous state + form data in, next state out)?
- **[new] Core concept** — What is `useOptimistic` for — showing a predicted next state
  immediately while the real mutation is still in flight, then reconciling once the server
  actually responds?
- **[new] Understanding** — What is a Server Action (or a framework's own server function), and
  how does it relate to Server Components — a client can call straight into server-only code
  without the author hand-writing an API route for it?
- **[new] Core concept** — What is the `use()` API, and how is it different from every other
  Hook — it can be called conditionally, and it's the mechanism Suspense uses to read a promise
  or read Context inside a conditional/loop, which every other Hook explicitly forbids.
- **[new] Core concept** — What is `useFormStatus` for — reading the pending/data/method state
  of the *nearest ancestor* `<form>` from inside a child component, without prop-drilling the
  submitting state down to it? Must be called from a component that's a descendant of the
  `<form>`, never the same component that renders the `<form>` itself — a real, specific gotcha.

### 29. State Management Architecture
- **Scenario** — When is local state enough?
- **Scenario** — When should state be lifted?
- **Scenario** — When should Context be used?
- **Scenario** — When should a dedicated state library be introduced?
- **Comparison** — UI state vs. server state?
- **Comparison** — Global state vs. shared state?
- **Understanding** — How do you avoid global-state overuse?
- **Scenario** — How would you design state management for a large application?
- **Scenario** — How do you prevent unrelated components from re-rendering?
- **[new] Core concept** — What is `useSyncExternalStore` for, and why does React need a
  dedicated Hook just to subscribe to something outside React (a browser API, or a state
  library's own store) instead of `useEffect` + `useState` — it's specifically built to avoid
  "tearing" under concurrent rendering (different parts of the UI briefly showing different
  values from the same external store mid-render). This is genuinely the mechanism most external
  state libraries are built on internally — a strong "how do these libraries actually work"
  architecture-level answer.

### 30. React Architecture
- **Scenario** — How would you structure a large React application?
- **Comparison** — Feature-based vs. layer-based folder structure?
- **Understanding** — How do you separate UI from business logic?
- **Understanding** — Where should API logic live?
- **Understanding** — Where should validation live?
- **Understanding** — How do you design reusable components?
- **Scenario** — How do you avoid a "god component"?
- **Understanding** — How do you decide component boundaries?
- **Understanding** — How do you manage shared components?
- **Understanding** — How do you prevent circular dependencies?
- **Scenario** — How do you scale a React codebase across multiple teams?
- **[new] Understanding** — What is a micro-frontend, and what real approaches exist to compose
  multiple independently-deployed React apps into one (Module Federation, build-time package
  composition, iframes/web components as a last resort)? A natural extension of "scale across
  multiple teams" that the original question doesn't quite reach.
- **[new] Comparison** — Monorepo vs. polyrepo for a large React codebase — what does a monorepo
  actually buy you (shared tooling/versioning, atomic cross-package changes) versus its own
  costs (build/CI complexity at scale)?
- **[new] Understanding** — How does React interoperate with Web Components, and when would an
  architecture actually need that boundary (embedding a design-system component into a
  non-React host app, or vice versa)?
- **[new] Understanding** — How much of React's own mental model (components, props, state,
  hooks, the reconciler) carries over to React Native, and what's fundamentally different (no
  DOM — a different rendering host entirely, different styling model, different navigation
  primitives)? A common way senior interviews probe whether someone actually understands what
  part of "React" is DOM-specific versus core to the model.
- **[new] Understanding** — How do you structure a React application to support
  internationalization (locale-aware routing/URLs, where translated strings live, formatting
  dates/numbers/currency per locale)? One line, not a deep dive — this is more a
  library/pattern-choice question than a place React itself goes deep.

### 31. Design Patterns
- **Comparison** — Composition vs. inheritance in React?
- **Comparison** — Container vs. presentational components?
- **Core concept** — Custom Hook pattern?
- **Core concept** — Compound component pattern?
- **Core concept** — Render props?
- **Core concept** — Higher-order components?
- **Core concept** — Provider pattern?
- **Core concept** — Controlled component pattern?
- **Core concept** — State reducer pattern?
- **Understanding** — When should a pattern *not* be used?

### 32. Testing at Scale **[new section]**
Your own "Recommended structure" tree names "Testing Strategy" as an Advanced subsection, but no
detailed question list for it existed — Testing (§21) only went to Intermediate depth.
Closing that real gap between the outline's shape and its content.
- **[new] Scenario** — What does a testing strategy/pyramid look like for a large React
  application (unit-heavy, a thinner layer of integration tests, minimal true end-to-end)?
- **[new] Understanding** — How do you test a component that suspends, or a Server Component's
  server-rendered output — what changes about testing once Suspense/RSC are involved?
- **[new] Core concept** — What is visual regression testing, and where does it sit alongside
  functional tests (catching *unintended* visual change, not behavior)?
- **[new] Scenario** — How do you decide test-coverage priorities across a large team — critical
  user paths first, versus chasing exhaustive coverage?

### 33. Security
- **Understanding** — How does XSS affect React applications?
- **Understanding** — Does JSX automatically prevent XSS?
- **Understanding** — What makes `dangerouslySetInnerHTML` dangerous?
- **Understanding** — How should user-generated HTML be handled?
- **Scenario** — Where should authentication tokens be stored?
- **Comparison** — Cookie vs. local storage?
- **Comparison** — CSRF vs. XSS?
- **Understanding** — How should authorization be enforced?
- **Understanding** — Why is hiding a UI element not authorization?

### 34. Production Performance
- **Scenario** — A React application became slow after adding a feature — how do you
  investigate?
- **Understanding** — How do you identify unnecessary renders?
- **Understanding** — How do you analyze or investigate a significant increase in bundle size?
  **[merged]** — was asked twice (once here, once as a Real-world Scenario below); one question,
  kept once.
- **Scenario** — How do you optimize initial page load? **[merged]** — same merge as above; "how
  do you optimize" and "it's slow, how do you investigate" are the same underlying question.
- **Scenario** — How do you optimize large tables?
- **Scenario** — How do you handle thousands of components?
- **Scenario** — How would you diagnose memory leaks?
- **Scenario** — How would you improve Core Web Vitals?
- **Understanding** — How do caching and CDN affect React performance?
- **Understanding** — How do you decide whether optimization is actually necessary?

### 35. Real-world Scenarios
Particularly important for senior/architect interviews — every bullet is already Scenario type
by nature. Two items that duplicated Production Performance (§34) verbatim — "initial page load
is slow" and "bundle size increased" — were merged into that section instead of kept twice; see
the Phase 2 coverage note below.
- A page renders 5000 rows and is slow. What do you do?
- A component keeps rendering indefinitely. How do you diagnose it?
- An API request fires repeatedly. What would you check?
- A search box makes an API call on every keystroke. How would you improve it?
- Two API requests return out of order. How do you prevent stale data?
- A large application has excessive prop drilling. How would you redesign it?
- Context changes are causing the entire application to re-render. What would you do?
- Users report a blank page in production. How would you diagnose it?
- A React page has hydration errors. What would you investigate?
- A component has become 1000+ lines long. How would you refactor it?
- Multiple teams are developing the same React application. How would you structure ownership
  and shared components?
- How would you design a scalable React frontend for a large enterprise application?
- How would you decide between CSR, SSR, and Server Components?
- How would you design frontend error handling and observability?
- How would you design authentication and authorization across a React application?

## Coverage note for Phase 2

**Every question from the user's own outline is represented above**, unchanged in substance
(light rewording only where needed to fit the Core concept/Comparison/Understanding/Scenario
vocabulary this site's taxonomies use). Nothing from the original list was cut to make room for
additions, per the user's explicit instruction.

**This track is unusually large — 35 concept groups versus 5–8 for every other track** — a
direct, deliberate reflection of how much more interview surface area experienced-level React
actually has (and of how much more detailed the user's own source outline was) than the other
tracks built so far. Expect Phase 3 to bundle several of these 35 groups onto shared pages
(e.g. `useMemo`/`useCallback`/React-Compiler-awareness as one page, or Portals folded onto the
Component Communication page rather than standing alone) rather than producing 35 separate
pages — that bundling decision is Phase 3's job, not this one's.

**Two adversarial-pass findings, fixed in place per the "edit Phase 1–2 directly" rule:**
- The outline's own "Recommended structure" tree named an Advanced "Testing Strategy"
  subsection that no detailed question list ever existed for — added as **§32 Testing at
  Scale [new section]**, closing the gap between the outline's shape and its written content.
- §34 (Production Performance) and §35 (Real-world Scenarios) each separately asked "initial
  page load is slow" and "bundle size increased" — genuine duplicates, not two distinct question
  types. Merged into one instance each, kept in §34, noted `[merged]` in place.

### Additions evaluated and included (with placement + rationale)

| Addition | Section | Standalone or fold-in? | Why it matters |
|---|---|---|---|
| PropTypes vs. TypeScript | §3 Props | Fold-in | Common practical question, no room elsewhere |
| Immutability rationale | §4 State | Fold-in | Bridges State → memoization → reconciliation |
| Key-based forced remount | §7 Lists & Keys | Fold-in | Real "trick question," flips the usual framing |
| `useLayoutEffect` comparison | §9 useEffect | Fold-in | Very commonly asked, was entirely absent |
| `useInsertionEffect` | §9 useEffect | Fold-in (one line) | Rare in practice; awareness only |
| `StrictMode` double-invoke | §9 useEffect | Fold-in | Common real-world dev-mode confusion |
| Ref callbacks + React 19 cleanup | §10 useRef | Fold-in | Real nuance beyond the ref object form |
| React Compiler | §11 useMemo/useCallback | Fold-in | Directly changes how this section gets answered |
| Portals | §14 Component Comm. | Fold-in | Real, classic, was entirely absent |
| RTL query-by-role philosophy | §21 Testing | Fold-in | Natural bridge into Accessibility |
| **Accessibility** | **new §22** | **Standalone section** | Entirely absent; now a standard senior/staff topic |
| **Testing at Scale** | **new §32** | **Standalone section** | Outline's own tree named it; no content existed yet |
| Request waterfalls | §25 Suspense | Fold-in | Important Suspense-for-data gotcha |
| Streaming SSR | §26 Server Rendering | Fold-in | Natural extension of hydration/SSR content |
| **Actions / `useActionState` / `useOptimistic` / Server Actions / `use()`** | **new §28** | **Standalone section** | Genuinely new React 19 mental model, no existing slot fit it |
| `useSyncExternalStore` | §29 State Architecture | Fold-in | How external state libraries work internally |
| Micro-frontends | §30 React Architecture | Fold-in | Natural extension of "scale across teams" |
| Monorepo vs. polyrepo | §30 React Architecture | Fold-in | Real architecture trade-off, one line |
| Web Components interop | §30 React Architecture | Fold-in | Real but narrow; awareness-level |
| React Native boundary | §30 React Architecture | Fold-in | Tests whether "React" knowledge is DOM-specific |
| i18n structuring | §30 React Architecture | Fold-in | More a library-choice question than deep React |
| Portal-adjacent `React.Children`/`cloneElement` | §14 Component Comm. | Fold-in | Real, part of the same "composition" topic |
| `key` not readable via `props.key` | §7 Lists & Keys | Fold-in | Small, real, commonly-hit gotcha |
| React Testing Library `act()` warning | §21 Testing | Fold-in | One of the single most common real-world testing gotchas |
| Suspense needs an Error Boundary for rejections | §25 Suspense | Fold-in | Real pairing the outline never connected |
| `useFormStatus` | §28 Modern Data Mutations | Fold-in | Companion hook to Actions/useActionState, was missing |

**A second, adversarial pass** (completeness + accuracy re-check, plus a fresh gap hunt) added
the last five rows above — found by re-reading the whole taxonomy specifically looking for
common real-world gotchas rather than textbook concepts (the `act()` warning, the `key`/`props`
gotcha, the Suspense/Error-Boundary pairing, `React.Children`/`cloneElement`) and one
still-missing React 19 companion hook (`useFormStatus`, alongside
`useActionState`/`useOptimistic`). **Mechanically recounted with a script, not estimated: 300
questions in the original outline, 2 genuine duplicates merged out, 34 + 5 = 39 questions added,
332 + 5 = 337 total across the 35 sections.**

**Nothing from the "important additions" checklist was given a standalone page except
Accessibility and the Actions/`use()` cluster** — every other item earned, at most, one or two
bullets folded into an existing section. This matches the user's own instruction: most of these
are real and worth *a* question, not a whole page's worth of independent visual recall.

### Deliberately not added, with reasons

- **Bundler/build-tool internals**, **CSS-in-JS library internals**, **any specific
  state/data-fetching library's own API**, and **any specific meta-framework's own conventions**
  (Next.js App Router file conventions, Remix's own data APIs, etc. — Server Components and
  Actions are covered as React's own primitives; a specific framework's opinions on top of them
  are that framework's interview territory, not React's) — see "Scope boundary" above; these are
  adjacent tooling/library territory, not React itself, and the conceptual question each would
  motivate is already in scope somewhere else in this taxonomy.
- **`useDebugValue`** — a real Hook, but purely a DevTools-label helper for custom-Hook authors
  building their own dev tooling; not a realistic interview differentiator at any level, and
  adding it would be padding for padding's sake.
