# Vue.js — Roadmap (Phases 2–6)

Phase 1 output: [`question-taxonomy.md`](question-taxonomy.md) — 24 concept groups. This file is
Phases 2–6: review, page grouping, tier, priority, and the final roadmap — see
[`specs/README.md`](../README.md) for what each phase means.

## Phase 2 — Review (merges, exclusions, gap-hunt)

Checked every taxonomy group against outside Vue 3 knowledge, not just re-read against itself
(per [`gap-hunting.md`](../../../rules/gap-hunting.md)). Finding: the 24 groups already cover the
real shape of a Vue interview — fundamentals/directives/reactivity primitives (Basic), router/
state-management/composables/built-in components (Intermediate), and internals/performance/SSR/
scenarios (Advanced) — no group needed merging or splitting.

**Two scope decisions, not merges/exclusions of a listed topic** (both already stated in the
taxonomy's own Scope boundary, restated here since Phase 2 is where a deferral gets formally
logged):

1. **Nuxt.js is out of scope for this track.** It is Vue's meta-framework (file-based routing,
   SSR/SSG, server routes) — the same relationship Next.js has to React, which this session is
   also building as its own separate track right now. Nuxt gets a one-line name-check on the SSR
   page (Advanced #10), never its own API surface. A future session can give it a dedicated
   track once Vue itself is live, same deferral pattern as Java's Spring Boot section.
2. **Vuex is only the comparison half of "Pinia vs. Vuex" (Intermediate #5)**, not its own API
   surface — Vue's own docs recommend Pinia as the default for new projects, and very little
   real interview material still centers on Vuex's own store-module syntax.

**Version-accuracy check performed via live web search, not recalled from memory alone**, per
this site's own accuracy rule:

| Fact | Detail |
|---|---|
| Vue 3.0 release | 18 September 2020 |
| Vue 2 end of life | 31 December 2023 (Vue 2.7 was the final 2.x minor, LTS from July 2022) |
| Composition API | Built into Vue 3; also back-ported to Vue 2.7 |
| `<script setup>` | SFC compiler-sugar for the Composition API, available since Vue 2.7 / all of Vue 3 |
| Teleport, Suspense, Fragments | New in Vue 3 (Suspense remains an experimental feature) |
| Reactivity system | Vue 3 uses ES `Proxy`-based reactivity; Vue 2 used `Object.defineProperty` (this is *why* Vue 2 couldn't track new/deleted object keys or array index assignment without `Vue.set`) |
| State management | Pinia is Vue's current officially-recommended store library, superseding Vuex |

(Cross-checked against the official `v3-migration.vuejs.org` guide and Vue's own docs via web
search — re-verify against vuejs.org directly at write-time if this ever needs re-confirming,
same caveat as every other track's version table.)

## Phase 3 — Grouping into pages (62 pages)

Taxonomy groups don't map 1:1 to pages here the way Java's did — several groups bundle multiple
closely-related sub-bullets onto one page (e.g. Basic's directive group folds `v-bind`/`v-on`/
`v-if`/`v-show`/`v-for` overview, class/style bindings, *and* event/key modifiers into one
"Directives overview" page, since they're all "the basic toolbox," not individually
interview-distinct). Two deliberate single-bullet-to-scenario folds:

- The "watcher never fires because reactivity was lost on destructure" **Scenario** bullet
  (taxonomy group 12) folds into the Intermediate "Reactivity caveats" page as a worked example,
  rather than becoming its own page — one concept, one root cause, doesn't need a second page.
- The "large list renders slowly" **Scenario** bullet (taxonomy group 20) becomes its own
  dedicated Advanced Scenario page (#21) instead, since it's a genuinely distinct diagnostic
  question from the Performance concept page it's attached to in the taxonomy.

| Tier | Pages |
|---|---|
| Basic | 18 |
| Intermediate | 22 |
| Advanced | 22 (16 core + 6 scenario) |
| **Total** | **62** |

## Phase 4 — Tier (by question type, not difficulty)

| Tier | Scope |
|---|---|
| Basic | What Vue is, template syntax/directives, data binding, computed/watch (the quick distinction), lifecycle, prop/event/slot communication, SFC structure, Options vs. Composition API, `ref`/`reactive`, Vue 2 vs. 3 |
| Intermediate | Vue Router in practice, Pinia, reactivity in practice (`watch`/`watchEffect`, reactivity caveats), composables, built-in components (`Teleport`/`Suspense`/`Transition`/`KeepAlive`), testing, plugins |
| Advanced | Reactivity internals, the render/compiler pipeline, performance, Pinia/Router at scale, SSR/hydration, security, migration, + 6 dedicated Scenario pages |

No topic needed re-tiering — the natural grouping already matches question type (fundamentals →
Basic, practical/comparison/troubleshooting → Intermediate, internals/performance/architecture/
scenario → Advanced), same outcome React's own Phase 4 reached.

## Phase 5 — Priority (🔥 Must Know / ⭐ Should Know / 🧠 Deep Dive)

| Priority | Basic | Intermediate | Advanced (core) | Advanced (scenario) |
|---|---|---|---|---|
| 🔥 Must Know | 13 | 8 | 5 | 4 |
| ⭐ Should Know | 5 | 11 | 6 | 2 |
| 🧠 Deep Dive | 0 | 3 | 5 | 0 |

🔥 dominates Basic the same way it does on every fundamentals-heavy track — `v-if`/`v-show`,
`v-for`/`:key`, `v-model`, computed-vs-methods/watch, props/emit, and Options-vs-Composition are
all both extremely common in real Vue code *and* extremely common interview material. Advanced
skews more evenly across all three than most tracks' Advanced tiers — Vue's own internals
questions (reactivity internals, compiler optimizations, render functions) are genuinely 🧠-level
niche even though they come up, while the scenario sub-block stays mostly 🔥 the same way every
other track's scenario block does (a real production problem is exactly what a senior interview
reaches for). Full per-page assignment is in the Phase 6 tables below.

## Phase 6 — Final roadmap

`vuejs/roadmap.html` groups by the 24 taxonomy concept clusters, not tier — the site-wide
convention for a newly-planned track's roadmap page. Numbering below is the tier-folder page
number (`vuejs/<tier>/<n>.html`).

### Basic (18)

| # | Topic | Priority | Page |
|---|---|---|---|
| 1 | What is Vue.js? | 🔥 | basic/1.html |
| 2 | Creating and Mounting a Vue App | ⭐ | basic/2.html |
| 3 | Template Syntax and Interpolation | 🔥 | basic/3.html |
| 4 | Directives Overview — `v-bind`, `v-on`, `v-if`, `v-show`, `v-for`, Class/Style Bindings, Modifiers | 🔥 | basic/4.html |
| 5 | `v-if` vs. `v-show` | 🔥 | basic/5.html |
| 6 | `v-for` and the Role of `:key` | 🔥 | basic/6.html |
| 7 | `v-model` — Two-Way Data Binding | 🔥 | basic/7.html |
| 8 | Computed Properties vs. Methods | 🔥 | basic/8.html |
| 9 | Computed vs. Watch | 🔥 | basic/9.html |
| 10 | Lifecycle Hooks | 🔥 | basic/10.html |
| 11 | Props — Parent to Child | 🔥 | basic/11.html |
| 12 | Custom Events (`$emit`) — Child to Parent | 🔥 | basic/12.html |
| 13 | Slots — Default and Named | ⭐ | basic/13.html |
| 14 | Single File Components and Scoped Styles | ⭐ | basic/14.html |
| 15 | Options API vs. Composition API | 🔥 | basic/15.html |
| 16 | `ref()` vs. `reactive()` | 🔥 | basic/16.html |
| 17 | `<script setup>` | ⭐ | basic/17.html |
| 18 | Vue 2 vs. Vue 3 — What Changed | ⭐ | basic/18.html |

### Intermediate (22)

| # | Topic | Priority | Page |
|---|---|---|---|
| 1 | Vue Router — Routes, `<router-view>`, `<router-link>` | 🔥 | intermediate/1.html |
| 2 | Dynamic Routes and Route Params | 🔥 | intermediate/2.html |
| 3 | Nested Routes | ⭐ | intermediate/3.html |
| 4 | Navigation Guards and Programmatic Navigation | 🔥 | intermediate/4.html |
| 5 | Pinia vs. Vuex | 🔥 | intermediate/5.html |
| 6 | Pinia Store Basics — State, Getters, Actions | 🔥 | intermediate/6.html |
| 7 | `provide`/`inject` | ⭐ | intermediate/7.html |
| 8 | `watch` vs. `watchEffect` | 🔥 | intermediate/8.html |
| 9 | Reactivity Caveats — Losing Reactivity on Destructure | 🔥 | intermediate/9.html |
| 10 | Composables — Reusable Composition API Logic | 🔥 | intermediate/10.html |
| 11 | Composables vs. Mixins | ⭐ | intermediate/11.html |
| 12 | Custom Directives | 🧠 | intermediate/12.html |
| 13 | Dynamic Components (`<component :is>`) | ⭐ | intermediate/13.html |
| 14 | Async Components and `defineAsyncComponent` | ⭐ | intermediate/14.html |
| 15 | `<Teleport>` | ⭐ | intermediate/15.html |
| 16 | `<Suspense>` and Async `setup()` | 🧠 | intermediate/16.html |
| 17 | `<Transition>` and `<TransitionGroup>` | ⭐ | intermediate/17.html |
| 18 | `<KeepAlive>` | ⭐ | intermediate/18.html |
| 19 | Template Refs and `v-model` on Custom Components | 🔥 | intermediate/19.html |
| 20 | Testing Vue Components | ⭐ | intermediate/20.html |
| 21 | Error Handling — `errorCaptured` and the Global Handler | 🧠 | intermediate/21.html |
| 22 | Plugins and `app.use()` | ⭐ | intermediate/22.html |

### Advanced (22)

| # | Topic | Priority | Page |
|---|---|---|---|
| 1 | Reactivity Internals — Proxy-Based Tracking | 🔥 | advanced/1.html |
| 2 | Dependency Tracking — `track()`/`trigger()` | 🧠 | advanced/2.html |
| 3 | The Render Pipeline — Compiler, Render Function, VNodes | 🔥 | advanced/3.html |
| 4 | Compiler Optimizations — Static Hoisting and Patch Flags | ⭐ | advanced/4.html |
| 5 | `v-once` and `v-memo` | ⭐ | advanced/5.html |
| 6 | Custom Render Functions and `h()` | 🧠 | advanced/6.html |
| 7 | Performance Tuning — Lazy Loading, Code Splitting | 🔥 | advanced/7.html |
| 8 | Pinia Plugin System | 🧠 | advanced/8.html |
| 9 | Vue Router at Scale — Meta Fields, Lazy Routes, Scroll Behavior | ⭐ | advanced/9.html |
| 10 | Server-Side Rendering and Hydration (and Nuxt's Role) | 🔥 | advanced/10.html |
| 11 | `v-html` and XSS | 🔥 | advanced/11.html |
| 12 | Testing Strategy at Scale — Unit vs. Component vs. E2E | ⭐ | advanced/12.html |
| 13 | Migrating from Vue 2 to Vue 3 | ⭐ | advanced/13.html |
| 14 | Micro-Frontends with Vue | 🧠 | advanced/14.html |
| 15 | Advanced App-Level API — Plugins, Multiple App Instances | 🧠 | advanced/15.html |
| 16 | Vue DevTools and Debugging Reactivity | ⭐ | advanced/16.html |
| 17 | Scenario: Debugging Unexpected Re-Renders | 🔥 | advanced/17.html |
| 18 | Scenario: A `v-for` List Loses State on Reorder | 🔥 | advanced/18.html |
| 19 | Scenario: Designing a Large-Scale Pinia Store Architecture | ⭐ | advanced/19.html |
| 20 | Scenario: Diagnosing a Memory Leak from an Unremoved Watcher | 🔥 | advanced/20.html |
| 21 | Scenario: A Large List Renders Slowly | ⭐ | advanced/21.html |
| 22 | Scenario: SSR Hydration Mismatch in Production | 🔥 | advanced/22.html |

## Track-specific decisions and boundaries

- **This track owns Vue 3 the framework — templates/reactivity, the Composition API, Vue Router,
  and Pinia.** It explicitly does not own Nuxt.js's own API surface or Vuex's own store syntax —
  see Phase 2's deferral notes.
- **Scenario questions are a distinct, clearly-labelled sub-block inside Advanced** (pages
  17–22, all titled `Scenario: ...`), matching the convention already used on
  `react/advanced/14–18.html`, `angular/advanced/11–16.html`, `linq/advanced/18–28.html`, and
  `java/advanced/27–36.html` — not a fourth tier.
- **Code examples are Vue SFC syntax** (`<template>`/`<script setup>`/`<style>`), matching every
  other framework track's "code examples match the track's own syntax" convention (JSX for
  React, TypeScript decorators for Angular).
- **Technical-accuracy commitments locked in before Phase 7 starts:**
  - Vue 3's reactivity is Proxy-based; Vue 2's was `Object.defineProperty`-based — never describe
    Vue 3 reactivity using Vue 2's mechanism or vice versa.
  - Pinia, not Vuex, is the current officially-recommended state-management library — Vuex is
    legacy-maintained, not the default recommendation for a new project.
  - `<Suspense>` remains an experimental Vue feature — never present it as a finished, stable
    API without that caveat.
  - Every version-specific claim (Composition API, `<script setup>`, Teleport, Fragments,
    reactivity rewrite) states Vue 3 vs. Vue 2 explicitly per the Phase 2 table above.
- **Icon 💚** (Vue's own real-world branding motif — the green-heart "I ❤ Vue" mark — a plain
  emoji, per [`visual-style.md`](../../../rules/visual-style.md)'s "no hand-drawn logos" rule), track
  color Vue's own official brand green `#42b883` — distinct from every track color already in
  use (closest neighbors, OOP's `#16a34a` and EF Core's `#0f766e`, are a true green and a teal
  respectively; `#42b883` is a visibly lighter, mintier green between them, chosen for
  authenticity to Vue's real brand rather than maximum hue separation — the same trade-off this
  site already accepts for its three existing reds).
- **Homepage placement: the "🎨 Frontend" section, alongside HTML & CSS, JavaScript, React, and
  Angular** — Vue is a UI framework like React/Angular, not a general-purpose language track.

## Known gaps

- **Nuxt.js** — real interview material (file-based routing, server routes, SSR/SSG conventions),
  deliberately deferred as its own future track/subsection, same pattern as Java's Spring Boot
  deferral. Not taxonomized here beyond the one-line name-check on Advanced #10.
- **Vuex's own store-module API** — deliberately out of scope beyond the Pinia-vs-Vuex
  comparison page; a candidate only if a future gap-hunt finds real demand for it.
- Phase 7 (writing all 62 pages) has **not started** — this roadmap, the taxonomy, and the
  site-wiring stubs (`vuejs/roadmap.html`, tier index stubs, the root tile's roadmap badge) are
  what exist as of this pass. See [`overview.md`](overview.md)'s Status section.
