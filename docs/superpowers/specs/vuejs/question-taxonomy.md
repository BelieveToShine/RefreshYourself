# Vue.js — Interview Question Taxonomy

**Phase 1 of the 7-phase pipeline** (see [`docs/superpowers/specs/README.md`](../README.md)).
No tier lock-in, no priority, no page grouping yet. This track's own groupings below already sit
in Basic/Intermediate/Advanced order (same convention as `react/question-taxonomy.md`) since the
natural concept clusters already land where
[`interview-depth-and-priority.md`](../../rules/interview-depth-and-priority.md)'s question-type
rule would put them anyway — Phase 4 still re-checks this rather than taking it on faith.

Every bullet is tagged by question type, same vocabulary as every other track: **Core concept**
("what is it"), **Comparison** ("X vs. Y"), **Understanding** (mechanism/why, including
common-mistake framing), **Scenario** (a real problem to diagnose or design through).

## Scope boundary

**This track owns Vue 3 — the framework itself: templates/reactivity, the Composition API,
Vue Router, and Pinia as the official state-management companion.** Deliberately excluded, with
reasons:

- **Nuxt.js** (Vue's meta-framework — file-based routing, SSR/SSG out of the box, server
  routes) — real and commonly asked about, but a distinct framework layered on top of Vue, the
  same relationship Next.js has to React. It gets touched only as a *name-check* on the SSR page
  (Advanced §11) pointing to it as "the tool that makes this easy," never its own API surface.
  A deliberate deferral, not a gap — a future session can give it its own track once this one is
  live, same pattern as Java deferring Spring Boot.
- **Vuex** — the pre-Pinia state-management library. Vue's own docs now recommend Pinia as the
  default; Vuex shows up only as the *comparison* half of "Pinia vs. Vuex" (Intermediate §5), not
  as its own API surface, since very few new projects start on it.
- **General JavaScript/TypeScript fundamentals** (closures, `this`, async/await, generics) — same
  exclusion React's own taxonomy makes, for the same reason: assumed adjacent knowledge, touched
  only from Vue's own side of it (e.g. why an arrow-function `methods` entry breaks `this`).
- **Build-tool internals** (Vite's own config/plugin system) — Vite is mentioned once, as the
  now-standard scaffolding tool (Basic, folded into SFC/tooling), never its own deep-dive page.

## BASIC — Core interview recall

### 1. What Vue Is
- **Core concept** — What is Vue.js, and what problem does it solve?
- **Comparison** — "Progressive framework" — what does that actually mean, and how does it
  differ from a framework like Angular that expects everything up front?
- **Core concept** — Creating and mounting an app (`createApp`, `.mount()`).
- **Understanding** — What does Vue actually do to the DOM once mounted?

### 2. Template Syntax and Directives
- **Core concept** — Template syntax and interpolation (`{{ }}`).
- **Core concept** — What are directives? (`v-bind`, `v-on`, `v-if`, `v-show`, `v-for`, overview)
- **Comparison** — `v-if` vs. `v-show` — when each actually removes/hides the element.
- **Understanding** — `v-for` and why it needs `:key` — what breaks without one.
- **Core concept** — Class and style bindings (`:class`, `:style` with objects/arrays).
- **Understanding** — Event modifiers (`.prevent`, `.stop`, `.once`) and key modifiers.

### 3. Data Binding and Forms
- **Core concept** — `v-model` — two-way data binding.
- **Understanding** — What `v-model` actually expands to (event + prop pair) under the hood.
- **Understanding** — `v-model` modifiers (`.lazy`, `.number`, `.trim`).

### 4. Computed, Methods, and Watchers (basic level)
- **Comparison** — Computed properties vs. methods — why computed properties cache.
- **Comparison** — Computed vs. watch — "derive a value" vs. "react to a change."

### 5. Lifecycle
- **Core concept** — The component lifecycle (creation → mount → update → unmount) and its hooks.
- **Understanding** — Why `mounted` is where DOM-dependent code belongs, not `created`.

### 6. Component Communication
- **Core concept** — Props — passing data parent → child.
- **Understanding** — Why props are one-way, and why mutating a prop inside the child is a
  mistake.
- **Core concept** — Custom events (`$emit`) — child → parent communication.
- **Core concept** — Slots — default slot and named slots.

### 7. Single File Components
- **Core concept** — SFC structure — `<template>` / `<script>` / `<style>` in one `.vue` file.
- **Understanding** — Scoped styles (`<style scoped>`) — how Vue avoids CSS leaking between
  components.

### 8. Composition API vs. Options API
- **Comparison** — Options API vs. Composition API — same component, two ways to write it.
- **Core concept** — `ref()` vs. `reactive()` — the two reactivity primitives.
- **Understanding** — Why a `ref` needs `.value` in script but not in the template.
- **Core concept** — `<script setup>` — the compiler-sugar shorthand for Composition API SFCs.

### 9. Vue 2 vs. Vue 3
- **Comparison** — What actually changed between Vue 2 and Vue 3 (high-level: Composition API,
  multiple root elements/Fragments, Teleport/Suspense, the reactivity rewrite).

## INTERMEDIATE — Practical usage, comparisons, troubleshooting

### 10. Vue Router Basics
- **Core concept** — Setting up routes, `<router-view>`, `<router-link>`.
- **Core concept** — Dynamic route segments and reading route params.
- **Core concept** — Nested routes.
- **Understanding** — Navigation guards (`beforeEach`, `beforeEnter`, per-component guards) —
  where each runs and what it's for.
- **Understanding** — Programmatic navigation (`router.push` vs. `router.replace`).

### 11. State Management
- **Comparison** — Pinia vs. Vuex — why Pinia is now the recommended default.
- **Core concept** — A Pinia store's shape — state, getters, actions.
- **Understanding** — `provide`/`inject` — when it's enough and when a real store is needed
  instead.

### 12. Reactivity in Practice
- **Comparison** — `watch` vs. `watchEffect` — explicit dependency list + old/new values vs.
  automatic dependency tracking.
- **Understanding** — Reactivity loss on destructuring a `reactive()` object, and the
  `toRefs()`/`toRef()` fix.
- **Scenario** — A watcher that never fires because the destructured variable it's watching
  isn't actually reactive anymore — diagnosing why.

### 13. Reusable Logic
- **Core concept** — Composables — pulling Composition API logic into a reusable function.
- **Comparison** — Composables vs. Options API mixins — why mixins fell out of favor (implicit,
  name-colliding merges vs. explicit imports).
- **Core concept** — Custom directives — when template logic belongs in a directive instead of a
  component.

### 14. Dynamic and Async Components
- **Core concept** — Dynamic components (`<component :is="...">`).
- **Core concept** — Async components (`defineAsyncComponent`) — code-splitting at the component
  level.
- **Core concept** — `<Teleport>` — rendering a component's markup outside its parent's DOM
  position (modals, toasts).
- **Core concept** — `<Suspense>` — coordinating loading state around an async `setup()` or async
  component.

### 15. Transitions and Caching
- **Core concept** — `<Transition>` and `<TransitionGroup>` — animating enter/leave.
- **Core concept** — `<KeepAlive>` — caching an inactive component's state instead of destroying
  it.
- **Understanding** — The `activated`/`deactivated` lifecycle hooks `<KeepAlive>` introduces.

### 16. DOM Access and Forms in Practice
- **Core concept** — Template refs — reaching a real DOM node or child component instance.
- **Understanding** — `v-model` on a custom component — what the child must implement to support
  it.

### 17. Testing, Errors, and Plugins
- **Core concept** — Testing a Vue component (Vue Test Utils / Vitest) — mount, find, trigger,
  assert.
- **Core concept** — Error handling — `errorCaptured` and the global `app.config.errorHandler`.
- **Core concept** — Plugins — `app.use()` and what a plugin is actually allowed to do.

## ADVANCED — Internals, performance, architecture, scenarios

### 18. Reactivity Internals
- **Understanding** — How Vue 3's reactivity system actually works — `Proxy`-based tracking
  (`reactive`), replacing Vue 2's `Object.defineProperty` approach.
- **Understanding** — Dependency tracking — the `track`/`trigger` mechanism behind `effect()`,
  and why a plain destructured value can't be tracked.

### 19. Render Pipeline and Compiler
- **Understanding** — The render pipeline — template compiles to a render function, which
  produces VNodes, which get mounted/patched into real DOM.
- **Understanding** — Compiler optimizations — static hoisting and patch flags, and why Vue 3's
  virtual DOM diffing is cheaper than Vue 2's on the same template.
- **Understanding** — `v-once` and `v-memo` — manually skipping re-render work the compiler can't
  infer on its own.
- **Core concept** — Writing a component with a manual render function / the `h()` helper
  instead of a template.

### 20. Performance
- **Understanding** — Performance tuning in a real app — lazy-loading routes/components, code
  splitting, and recognizing an unnecessarily re-rendering subtree.
- **Scenario** — A large list renders slowly — diagnosing whether it's a missing/unstable `:key`,
  a missing `v-memo`, or genuinely needs virtualization.

### 21. Pinia and Router, Deeper
- **Understanding** — Pinia's plugin system — extending every store with shared behavior
  (persistence, logging).
- **Understanding** — Vue Router at scale — route `meta` fields, lazy-loaded route components,
  and scroll-behavior restoration.

### 22. Server-Side Rendering
- **Core concept** — What SSR means for a Vue app, and hydration — the client "taking over" HTML
  the server already rendered.
- **Understanding** — Why Nuxt.js exists — SSR, routing, and data-fetching conventions Vue itself
  doesn't prescribe.
- **Scenario** — A hydration mismatch in production — client-rendered markup doesn't match what
  the server sent, and why.

### 23. Security, Testing, and Migration
- **Understanding** — `v-html` and XSS — why raw HTML interpolation is dangerous, and what a CSP
  does and doesn't protect against.
- **Understanding** — Testing strategy at scale — unit tests for composables, component tests for
  behavior, e2e for real flows — what each layer should and shouldn't cover.
- **Understanding** — Migrating a real app from Vue 2 to Vue 3 — the breaking changes that matter
  most and the official migration build's role.

### 24. Scenarios (dedicated sub-block)
- **Scenario** — Debugging a component that re-renders far more often than expected.
- **Scenario** — A `v-for` list loses its input focus/state when reordered — root cause and fix.
- **Scenario** — Designing a Pinia store architecture for a large multi-module app.
- **Scenario** — Diagnosing a memory leak traced back to a watcher or event listener that was
  never torn down.
- **Scenario** — A dashboard with hundreds of reactive bindings is sluggish — where to look first.
- **Scenario** — Choosing a rendering strategy (CSR vs. reaching for Nuxt's SSR/SSG) for a new
  Vue project, and what drives that call.

## Gap-hunt log

Checked against outside Vue 3 knowledge (not just the groups above, re-read): no additional
concept group was found missing at this pass. Two items were deliberately scoped out rather than
added — see **Scope boundary** above (Nuxt.js's own API surface, Vuex as anything beyond a named
comparison). The result is Phase 2's actual finding for this track, logged in
[`roadmap.md`](roadmap.md).
