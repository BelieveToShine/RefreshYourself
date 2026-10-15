# Next.js — Overview

## Status

**All 7 phases complete — 58/58 pages written.** [`question-taxonomy.md`](question-taxonomy.md)
(19 concept groups) → [`roadmap.md`](roadmap.md) (tier/priority/final 58-page table) → 58
tiered/prioritized pages (Basic 15 / Intermediate 21 / Advanced 22, the last 6 of which are a
labeled "Next.js Scenarios" sub-block), live on the site and on
[`nextjs/roadmap.html`](../../../../nextjs/roadmap.html). Every page's diagram was independently
re-verified with the mandatory automated script — all 58 confirmed `issueCount: 0`; the sweep
itself found and fixed 3 genuine pager-text mismatches (Basic+Intermediate) and 2 stale "coming
soon" pager placeholders (Advanced) before re-verifying clean. Fully wired into the shared site
files: `assets/nav-index.js`, `assets/search-index.js`, the three tier index pages,
[`nextjs/roadmap.html`](../../../../nextjs/roadmap.html), `nextjs/index.html`'s tier cards, and the
root `index.html` tile (no longer "Coming soon").

## The full roadmap, tier by tier

Live on each tier's own index page: [`nextjs/basic/index.html`](../../../../nextjs/basic/index.html)
(15, all written), [`nextjs/intermediate/index.html`](../../../../nextjs/intermediate/index.html)
(21, all written), [`nextjs/advanced/index.html`](../../../../nextjs/advanced/index.html) (22, all
written — the last 6 are the "Next.js Scenarios" sub-block). See
[`roadmap.md`](roadmap.md#phase-6--final-roadmap) for the complete numbered table (topic, priority,
page path) for all 58 pages, and [`nextjs/roadmap.html`](../../../../nextjs/roadmap.html) for the
same 58 pages grouped by concept cluster instead of by tier. Not duplicated here; this file points
to the one source of truth rather than risking drift between two copies of the same table.

## Where the roadmap came from

Reasoned from scratch by this session, grounded in live web research specifically targeting
Next.js's own version-history risk — the App Router/Server Actions stabilization timeline, and
the Next.js 15 changes (the `fetch()` caching-default reversal, Partial Prerendering's
experimental status, Turbopack's dev-only stability, and the async request-API change for
`cookies()`/`headers()`/`params`/`searchParams`) — cross-checked against the official Next.js
blog and release posts, not recalled from memory alone. See
[`roadmap.md`](roadmap.md#phase-2--review-merges-exclusions-gap-hunt) for the full
version-accuracy table and sourcing detail.

## Track-specific decisions and boundaries

See [`roadmap.md`](roadmap.md#track-specific-decisions-and-boundaries) for the full list —
summarized: owns Next.js the React framework layer (routing/rendering/caching/server-client
model); does **not** own React itself (that's `react/`'s job, assumed knowledge here); icon ⏭️
(a plain-emoji pun on the framework's own name), track color Next.js's own near-black brand
identity `#171717`; sits in the "🎨 Frontend" section right after React.

## Known gaps

- **React fundamentals** — deliberately out of scope; this track assumes that knowledge.
- **A specific data-fetching library's own API** (SWR, TanStack Query) — stays conceptual only.
- Otherwise none — all 58 pages are written and independently diagram-verified (all confirmed
  `issueCount: 0` after fixing the 3 pager-text mismatches and 2 stale "coming soon" pager
  placeholders this session's own sweep found). Expect a review/feedback pass once the user goes
  through it, same as every other track's first full pass.
