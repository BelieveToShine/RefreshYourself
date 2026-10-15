# Vue.js — Overview

## Status

**All 7 phases complete — 62/62 pages written.** [`question-taxonomy.md`](question-taxonomy.md)
(24 concept groups) → [`roadmap.md`](roadmap.md) (tier/priority/final 62-page table) → 62
tiered/prioritized pages (Basic 18 / Intermediate 22 / Advanced 22, the last 6 of which are a
labeled "Vue.js Scenarios" sub-block), live on the site and on
[`vuejs/roadmap.html`](../../../../vuejs/roadmap.html). Every page's diagram was independently
re-verified with the mandatory automated script — all 62 confirmed `issueCount: 0`; the sweep
itself found and fixed 9 genuine pager-text mismatches (Basic+Intermediate) and 1 text-overflow
diagram defect (Advanced) before re-verifying clean. Fully wired into the shared site files:
`assets/nav-index.js`, `assets/search-index.js`, the three tier index pages,
[`vuejs/roadmap.html`](../../../../vuejs/roadmap.html), `vuejs/index.html`'s tier cards, and the root
`index.html` tile (no longer "Coming soon").

## The full roadmap, tier by tier

Live on each tier's own index page: [`vuejs/basic/index.html`](../../../../vuejs/basic/index.html)
(18, all written), [`vuejs/intermediate/index.html`](../../../../vuejs/intermediate/index.html) (22,
all written), [`vuejs/advanced/index.html`](../../../../vuejs/advanced/index.html) (22, all
written — the last 6 are the "Vue.js Scenarios" sub-block). See
[`roadmap.md`](roadmap.md#phase-6--final-roadmap) for the complete numbered table (topic, priority,
page path) for all 62 pages, and [`vuejs/roadmap.html`](../../../../vuejs/roadmap.html) for the same
62 pages grouped by concept cluster instead of by tier. Not duplicated here; this file points to
the one source of truth rather than risking drift between two copies of the same table.

## Where the roadmap came from

Reasoned from scratch by this session, the same way most of this site's tracks were built
(React and Java are the exceptions, sourced from the user's own detailed outlines) — grounded in
live web research into current Vue 3 interview material and version-specific facts (Vue 3's
Proxy-based reactivity vs. Vue 2's `Object.defineProperty`, the Vue 2 EOL date, Pinia's status as
the current recommended store library), not recalled from memory alone. See
[`roadmap.md`](roadmap.md#phase-2--review-merges-exclusions-gap-hunt) for the full
version-accuracy table and sourcing detail.

## Track-specific decisions and boundaries

See [`roadmap.md`](roadmap.md#track-specific-decisions-and-boundaries) for the full list —
summarized: owns Vue 3 the framework (templates/reactivity/Composition API/Router/Pinia); does
**not** own Nuxt.js's own API surface or Vuex's own store syntax beyond a named comparison; icon
💚 (Vue's own green-heart brand motif), track color Vue's official brand green `#42b883`; sits in
the "🎨 Frontend" homepage section alongside HTML & CSS, JavaScript, React, and Angular.

## Known gaps

- **Nuxt.js** — deliberately deferred as its own future track/subsection, same pattern as Java's
  Spring Boot deferral.
- **Vuex's own store-module API** — deliberately scoped to a named comparison only.
- Otherwise none — all 62 pages are written and independently diagram-verified (all confirmed
  `issueCount: 0` after fixing the 9 pager-text mismatches and 1 text-overflow diagram defect this
  session's own sweep found). Expect a review/feedback pass once the user goes through it, same as
  every other track's first full pass.
