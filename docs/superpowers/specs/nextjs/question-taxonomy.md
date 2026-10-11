# Next.js — Interview Question Taxonomy

**Phase 1 of the 7-phase pipeline** (see [`docs/superpowers/specs/README.md`](../README.md)).
No tier lock-in, no priority, no page grouping yet. This track's own groupings below already sit
in Basic/Intermediate/Advanced order (same convention as `react/question-taxonomy.md` and this
session's own `vuejs/question-taxonomy.md`), re-checked rather than taken on faith at Phase 4.

Every bullet is tagged by question type, same vocabulary as every other track: **Core concept**
("what is it"), **Comparison** ("X vs. Y"), **Understanding** (mechanism/why, including
common-mistake framing), **Scenario** (a real problem to diagnose or design through).

## Scope boundary

**This track owns Next.js — the React framework: its routing systems, rendering strategies,
caching layers, and the App Router's server/client model.** Deliberately excluded, with reasons:

- **React itself** (hooks, component model, JSX, state) — that's `react/`'s job. This track
  assumes the reader already knows React and asks only "what does *Next.js* add on top of it."
- **Deployment-platform specifics beyond Vercel-vs-self-host at a conceptual level** — exact
  Vercel dashboard/pricing mechanics are product knowledge, not an interview topic; the
  *architectural* question ("standalone output for self-hosting vs. the platform-specific
  optimizations you give up") stays in scope under Advanced.
- **A specific data-fetching library's own API** (SWR, TanStack Query) — same exclusion React's
  own taxonomy makes for state-management libraries. Only the *conceptual* question of when
  you'd reach for one over Next's own `fetch()` caching is in scope (Intermediate).
- **CSS/styling library specifics** (Tailwind config, styled-components setup) — "CSS support
  exists and Next.js auto-configures it" is in scope at Basic; a styling library's own API isn't.

## BASIC — Core interview recall

### 1. What Next.js Is
- **Core concept** — What is Next.js, and what does it add on top of plain React?
- **Core concept** — `create-next-app` and the default project structure.
- **Comparison** — Pages Router vs. App Router — the two routing systems Next.js ships with.

### 2. File-Based Routing
- **Core concept** — File-based routing — how a file's path becomes a URL.
- **Core concept** — Pages and layouts in the App Router — `page.js`, `layout.js`, `template.js`.
- **Understanding** — Why a `layout.js` doesn't re-render on navigation between its own child
  pages.
- **Core concept** — Dynamic routes — `[slug]`, `[...catchAll]`, `[[...optionalCatchAll]]`.

### 3. Navigation and Assets
- **Core concept** — Client-side navigation with `<Link>` vs. a plain `<a>` tag.
- **Core concept** — The `public` folder and static assets.
- **Core concept** — `next/image` — automatic image optimization (resizing, lazy loading, format
  conversion).
- **Core concept** — `next/font` — self-hosted, layout-shift-free font loading.

### 4. CSS and Metadata
- **Core concept** — CSS support out of the box — global CSS, CSS Modules, and Tailwind/Sass
  integration.
- **Core concept** — The Metadata API — the static `metadata` export and `generateMetadata()`
  for SEO tags.
- **Core concept** — Environment variables — `.env.local` and the `NEXT_PUBLIC_` prefix for
  exposing a value to the browser.

### 5. Server and Client Components
- **Core concept** — Server Components vs. Client Components — the fundamental split the App
  Router introduces.
- **Understanding** — Why Server Components can't use `useState`/`useEffect`/browser-only APIs.
- **Core concept** — The `'use client'` directive — what it actually marks, and where the
  boundary it creates lives in the component tree.

### 6. Rendering Strategies (Overview)
- **Core concept** — The four rendering strategies — CSR, SSR, SSG, ISR — at a plain-language
  level, before any caching-mechanism detail.

## INTERMEDIATE — Practical usage, comparisons, troubleshooting

### 7. Data Fetching in the App Router
- **Core concept** — Fetching data directly in a Server Component with `fetch()`.
- **Understanding** — The `cache` and `revalidate` options on `fetch()`, and how they map onto
  SSG/ISR/SSR.
- **Comparison** — `getStaticProps`/`getServerSideProps` (Pages Router) vs. the App Router's
  `fetch()`-based model — what replaced what.

### 8. Static and Incremental Rendering
- **Core concept** — Static Site Generation and `generateStaticParams()` for dynamic routes.
- **Core concept** — Incremental Static Regeneration (ISR) via `revalidate`.
- **Understanding** — Server-Side Rendering — what makes a route dynamic instead of static.

### 9. Server-Side Logic
- **Comparison** — Route Handlers (`app/api/.../route.js`) vs. the Pages Router's API Routes
  (`pages/api`).
- **Core concept** — Server Actions — mutating data directly from a form/Client Component
  without a separate API endpoint.
- **Core concept** — Middleware — running code before a request completes (auth checks,
  rewrites, redirects).

### 10. Loading, Error, and Route Organization
- **Core concept** — `loading.js` and streaming with `<Suspense>`.
- **Core concept** — `error.js` and `not-found.js`.
- **Core concept** — Route Groups — organizing routes with `(folder)` without affecting the URL.

### 11. Advanced Routing Patterns
- **Core concept** — Parallel Routes — rendering more than one page in the same layout
  simultaneously.
- **Core concept** — Intercepting Routes — showing a route in a modal while preserving the URL
  of the route behind it.

### 12. Configuration and Integration
- **Core concept** — Redirects and rewrites via `next.config.js`.
- **Understanding** — Authentication patterns — checking a session in Middleware vs. in a
  Server Component.
- **Comparison** — Next's own `fetch()` caching vs. reaching for SWR/TanStack Query — when a
  client-side data library earns its place.
- **Core concept** — Internationalized (i18n) routing.
- **Core concept** — `next/script` — loading third-party scripts without blocking rendering.

### 13. Deployment and Testing
- **Comparison** — Deploying to Vercel vs. self-hosting (standalone Node server / Docker).
- **Core concept** — Testing a Next.js app — what differs from testing plain React (mocking
  Server Components, route handlers).

## ADVANCED — Internals, performance, architecture, scenarios

### 14. The Caching System
- **Core concept** — The four caching layers in the App Router — Request Memoization, the Data
  Cache, the Full Route Cache, and the Router Cache — what each one stores and where it lives
  (server vs. client).
- **Understanding** — Cache invalidation — `revalidateTag()` vs. `revalidatePath()` vs. the
  client-side `router.refresh()`.
- **Understanding** — Next.js 15's caching default change — `fetch()` requests are no longer
  cached by default (a reversal of the Next.js 14-era "cache everything by default" behavior).

### 15. Rendering Internals
- **Core concept** — Partial Prerendering (PPR) — a static shell with dynamic "holes" streamed
  in, shipped as an experimental opt-in as of Next.js 15.
- **Understanding** — Streaming SSR and how `<Suspense>` boundaries control what streams in
  first.
- **Understanding** — React Server Components internals — the RSC payload, and what can/can't
  cross the server→client serialization boundary (functions, class instances, etc. can't).
- **Understanding** — Hydration — how static SSR HTML becomes an interactive page, and what a
  hydration mismatch actually is.

### 16. Runtime and Build
- **Comparison** — Edge Runtime vs. Node.js Runtime — what each can and can't do.
- **Comparison** — Turbopack vs. Webpack — Turbopack's current status (stable for `next dev`,
  not yet the production-build default as of Next.js 15).
- **Understanding** — Next.js 15's async request APIs — `cookies()`, `headers()`, `draftMode()`,
  and the `params`/`searchParams` props all became `Promise`-based (`await`-required) in
  Next.js 15, with the old synchronous access deprecated and removed in Next.js 16.

### 17. Production Concerns
- **Understanding** — Securing Server Actions — why a Server Action is a real, publicly
  reachable HTTP endpoint under the hood, not a safely-hidden server-only function.
- **Understanding** — Bundle analysis and code-splitting strategy in a large Next.js app.
- **Understanding** — Why `next/image`/`next/font` specifically improve Core Web Vitals (LCP,
  CLS) rather than just being convenience wrappers.
- **Core concept** — Monorepo and multi-zone Next.js setups — running several Next.js apps under
  one domain.
- **Core concept** — Self-hosting with the `standalone` output mode / Docker.

### 18. Migration
- **Understanding** — Migrating an app from the Pages Router to the App Router — the
  recommended incremental, route-by-route adoption strategy rather than a rewrite.

### 19. Scenarios (dedicated sub-block)
- **Scenario** — Data looks stale despite a `revalidate` value being set — diagnosing which
  cache layer is actually holding the old value.
- **Scenario** — A Server Action accidentally exposes logic that should have stayed server-only.
- **Scenario** — Slow Time-to-First-Byte on a large page — working out whether it's the render,
  a slow fetch, or a cache miss.
- **Scenario** — Choosing a rendering strategy for a page that's mostly static with one
  personalized section.
- **Scenario** — A hydration-mismatch error shows up in production but not locally.
- **Scenario** — Designing the route structure for a large multi-tenant application.

## Gap-hunt log

Checked against outside Next.js knowledge, focused specifically on the Next.js 15 changes (since
this is the area most likely to have shifted since training data): confirmed via live web search
that **(a)** Server Actions went stable in Next.js 14 (after an alpha in 13.4), **(b)** Partial
Prerendering was still experimental as of the Next.js 15 release (third-party sources claiming
"stable" were not corroborated by the official Next.js 15 RC announcement), **(c)** Turbopack's
Next.js 15 stability claim is scoped to `next dev` only, not production builds, and **(d)** the
async request-API change (`cookies`/`headers`/`params`/`searchParams`) is confirmed directly from
the official Next.js blog. No additional concept group was found missing beyond these
version-accuracy corrections — logged in [`roadmap.md`](roadmap.md)'s Phase 2 section.
