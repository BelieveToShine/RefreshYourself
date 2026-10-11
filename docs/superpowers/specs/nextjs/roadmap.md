# Next.js — Roadmap (Phases 2–6)

Phase 1 output: [`question-taxonomy.md`](question-taxonomy.md) — 19 concept groups. This file is
Phases 2–6: review, page grouping, tier, priority, and the final roadmap — see
[`specs/README.md`](../README.md) for what each phase means.

## Phase 2 — Review (merges, exclusions, gap-hunt)

Checked every taxonomy group against outside Next.js knowledge. Finding: the 19 groups already
cover the real shape of a Next.js interview — routing/rendering fundamentals and the Server/
Client Component split (Basic), data-fetching/routing patterns and production integration
(Intermediate), and the caching system/rendering internals/scenarios (Advanced) — no group
needed merging or splitting.

**One scope decision, not a merge/exclusion of a listed topic:** React itself (hooks, component
model, JSX, state) is explicitly out of scope — this track assumes the reader already knows
React (this site's own `react/` track covers that) and asks only what Next.js adds on top of it.
Same boundary this site already draws between `efcore/` (the ORM) and `sql/` (the database
engine), or between `linq/` (the language feature) and `csharp/` (the language).

**Version-accuracy check performed via live web search against official and near-official
sources, not recalled from memory alone**, per this site's own accuracy rule — this table is the
single most important part of this track's Phase 2, since Next.js's own caching/rendering
defaults changed meaningfully between major versions and a stale claim here would be exactly the
kind of error [`accuracy.md`](../../rules/accuracy.md) exists to prevent:

| Fact | Detail |
|---|---|
| App Router | Reached stable in Next.js 13.4 (alongside Server Actions as alpha) |
| Server Actions | Alpha in 13.4 → **stable in Next.js 14** |
| Next.js 15 release | October 21, 2024 |
| `fetch()` caching default | **Reversed in Next.js 15** — `fetch()` requests are no longer cached by default (the Next.js 14-era "cache everything by default" behavior is gone). A route relying on the old default is now fully dynamic unless it opts back in. |
| Partial Prerendering (PPR) | Listed as **Experimental** in the official Next.js 15 release post — third-party sources calling it "stable" at that point are not corroborated by the official announcement and should not be repeated as fact |
| Turbopack | **Stable for `next dev` only** as of Next.js 15 — not yet the default for production builds |
| Async request APIs | `cookies()`, `headers()`, `draftMode()`, and the `params`/`searchParams` props became `Promise`-based (`await`-required) **starting in Next.js 15** — the old synchronous access still works with a deprecation warning through Next.js 15, and is removed starting in Next.js 16 |

(Cross-checked against `nextjs.org/blog/next-15`, the Next.js 15 RC announcement, and the
official caching-guide docs via web search — re-verify against nextjs.org directly at write-time
if this ever needs re-confirming, same caveat as every other track's version table. The 15→16
async-API removal timeline in particular should be re-checked once Next.js 16 actually ships, in
case the deprecation window changed.)

## Phase 3 — Grouping into pages (58 pages)

Most taxonomy groups map close to 1:1 with pages; a few multi-bullet groups bundle tightly
related sub-points onto one page (e.g. Basic's "What is Next.js" page folds in `create-next-app`
project structure, since that's "how you start," not a separately interview-distinct question).

| Tier | Pages |
|---|---|
| Basic | 15 |
| Intermediate | 21 |
| Advanced | 22 (16 core + 6 scenario) |
| **Total** | **58** |

## Phase 4 — Tier (by question type, not difficulty)

| Tier | Scope |
|---|---|
| Basic | What Next.js is, file-based routing/layouts, navigation, built-in optimization (image/font), CSS/metadata/env vars, the Server/Client Component split, rendering strategies at a plain-language level |
| Intermediate | Data fetching in practice (`fetch()` caching options, SSG/ISR/SSR), Route Handlers/Server Actions/Middleware, loading/error states, Parallel/Intercepting Routes, config/integration, deployment, testing |
| Advanced | The 4-layer caching system, rendering internals (PPR, streaming, RSC payload, hydration), runtime/build internals, production concerns (security, bundling, self-hosting), migration, + 6 dedicated Scenario pages |

No topic needed re-tiering — fundamentals land in Basic, practical/comparison/troubleshooting
material lands in Intermediate, and internals/performance/architecture/scenario material lands
in Advanced, the same outcome this site's other framework tracks reach.

## Phase 5 — Priority (🔥 Must Know / ⭐ Should Know / 🧠 Deep Dive)

| Priority | Basic | Intermediate | Advanced (core) | Advanced (scenario) |
|---|---|---|---|---|
| 🔥 Must Know | 8 | 7 | 6 | 4 |
| ⭐ Should Know | 7 | 11 | 7 | 2 |
| 🧠 Deep Dive | 0 | 3 | 3 | 0 |

The App Router vs. Pages Router distinction, the Server/Client Component split, and the
rendering-strategy vocabulary (CSR/SSR/SSG/ISR) are 🔥 across the board — they're the questions
almost every Next.js interview opens with. The caching system (Advanced #1–3) is also weighted
🔥 despite being genuinely hard material, because it's become one of *the* differentiator topics
in current Next.js interviews precisely because the Next.js 15 default change catches people who
learned on 14. Full per-page assignment is in the Phase 6 tables below.

## Phase 6 — Final roadmap

`nextjs/roadmap.html` groups by the 19 taxonomy concept clusters, not tier — the site-wide
convention for a newly-planned track's roadmap page. Numbering below is the tier-folder page
number (`nextjs/<tier>/<n>.html`).

### Basic (15)

| # | Topic | Priority | Page |
|---|---|---|---|
| 1 | What is Next.js? | 🔥 | basic/1.html |
| 2 | Pages Router vs. App Router | 🔥 | basic/2.html |
| 3 | File-Based Routing Basics | 🔥 | basic/3.html |
| 4 | Layouts — `layout.js`, `template.js`, and Why They Don't Re-Render | ⭐ | basic/4.html |
| 5 | Dynamic Routes — `[slug]` and Catch-All Segments | 🔥 | basic/5.html |
| 6 | Navigation with `<Link>` vs. a Plain `<a>` Tag | 🔥 | basic/6.html |
| 7 | Static Assets and the `public` Folder | ⭐ | basic/7.html |
| 8 | `next/image` — Automatic Image Optimization | 🔥 | basic/8.html |
| 9 | `next/font` — Font Optimization | ⭐ | basic/9.html |
| 10 | CSS Support — Global CSS, CSS Modules, Tailwind | ⭐ | basic/10.html |
| 11 | The Metadata API — SEO Tags | ⭐ | basic/11.html |
| 12 | Environment Variables and `NEXT_PUBLIC_` | ⭐ | basic/12.html |
| 13 | Server Components vs. Client Components | 🔥 | basic/13.html |
| 14 | The `'use client'` Directive | 🔥 | basic/14.html |
| 15 | Rendering Strategies Overview — CSR, SSR, SSG, ISR | 🔥 | basic/15.html |

### Intermediate (21)

| # | Topic | Priority | Page |
|---|---|---|---|
| 1 | Data Fetching in Server Components | 🔥 | intermediate/1.html |
| 2 | `fetch()` Cache and Revalidate Options | 🔥 | intermediate/2.html |
| 3 | `getStaticProps`/`getServerSideProps` vs. App Router Fetching | ⭐ | intermediate/3.html |
| 4 | Static Site Generation and `generateStaticParams()` | 🔥 | intermediate/4.html |
| 5 | Incremental Static Regeneration (ISR) | 🔥 | intermediate/5.html |
| 6 | Server-Side Rendering in the App Router | 🔥 | intermediate/6.html |
| 7 | Route Handlers vs. API Routes | 🔥 | intermediate/7.html |
| 8 | Server Actions | 🔥 | intermediate/8.html |
| 9 | Middleware | 🔥 | intermediate/9.html |
| 10 | `loading.js` and Streaming with `<Suspense>` | ⭐ | intermediate/10.html |
| 11 | `error.js` and `not-found.js` | ⭐ | intermediate/11.html |
| 12 | Route Groups | ⭐ | intermediate/12.html |
| 13 | Parallel Routes | 🧠 | intermediate/13.html |
| 14 | Intercepting Routes | 🧠 | intermediate/14.html |
| 15 | Redirects and Rewrites (`next.config.js`) | ⭐ | intermediate/15.html |
| 16 | Authentication Patterns — Middleware vs. Server Component Checks | 🔥 | intermediate/16.html |
| 17 | `fetch()` Caching vs. SWR/TanStack Query | ⭐ | intermediate/17.html |
| 18 | Internationalized (i18n) Routing | 🧠 | intermediate/18.html |
| 19 | `next/script` — Third-Party Scripts | ⭐ | intermediate/19.html |
| 20 | Deploying to Vercel vs. Self-Hosting | ⭐ | intermediate/20.html |
| 21 | Testing a Next.js App | ⭐ | intermediate/21.html |

### Advanced (22)

| # | Topic | Priority | Page |
|---|---|---|---|
| 1 | The Four Caching Layers — Request Memoization, Data Cache, Full Route Cache, Router Cache | 🔥 | advanced/1.html |
| 2 | Cache Invalidation — `revalidateTag` vs. `revalidatePath` vs. `router.refresh()` | 🔥 | advanced/2.html |
| 3 | Next.js 15's Caching Default Change | 🔥 | advanced/3.html |
| 4 | Partial Prerendering (PPR) | ⭐ | advanced/4.html |
| 5 | Streaming SSR and `<Suspense>` Boundaries | ⭐ | advanced/5.html |
| 6 | React Server Components Internals — the RSC Payload | 🧠 | advanced/6.html |
| 7 | Hydration and Hydration Mismatches | 🔥 | advanced/7.html |
| 8 | Edge Runtime vs. Node.js Runtime | ⭐ | advanced/8.html |
| 9 | Turbopack vs. Webpack | 🧠 | advanced/9.html |
| 10 | Next.js 15's Async Request APIs | 🔥 | advanced/10.html |
| 11 | Securing Server Actions | 🔥 | advanced/11.html |
| 12 | Bundle Analysis and Code-Splitting Strategy | ⭐ | advanced/12.html |
| 13 | Image/Font Optimization and Core Web Vitals | ⭐ | advanced/13.html |
| 14 | Monorepo and Multi-Zone Next.js Apps | 🧠 | advanced/14.html |
| 15 | Self-Hosting — Standalone Output and Docker | ⭐ | advanced/15.html |
| 16 | Migrating from the Pages Router to the App Router | ⭐ | advanced/16.html |
| 17 | Scenario: Stale Data Despite a `revalidate` Value | 🔥 | advanced/17.html |
| 18 | Scenario: A Server Action Exposes Sensitive Logic | 🔥 | advanced/18.html |
| 19 | Scenario: Diagnosing Slow Time-to-First-Byte | 🔥 | advanced/19.html |
| 20 | Scenario: Choosing a Rendering Strategy for a Mixed Static/Dynamic Page | ⭐ | advanced/20.html |
| 21 | Scenario: Hydration Mismatch in Production | 🔥 | advanced/21.html |
| 22 | Scenario: Designing Route Structure for a Multi-Tenant App | ⭐ | advanced/22.html |

## Track-specific decisions and boundaries

- **This track owns Next.js — the React framework layer: routing, rendering, caching, and the
  server/client model.** It explicitly does not own React itself (hooks, component model, JSX) —
  that's `react/`'s job, cross-linked rather than duplicated, same boundary this site already
  draws for `efcore/`↔`sql/` and `linq/`↔`csharp/`.
- **Scenario questions are a distinct, clearly-labelled sub-block inside Advanced** (pages
  17–22, all titled `Scenario: ...`), matching the convention already used on
  `react/advanced/14–18.html`, `vuejs/advanced/17–22.html` (this session's own other new track),
  and `java/advanced/27–36.html`.
- **Code examples are Next.js App Router syntax by default** (Server Components, `fetch()` with
  cache options, Server Actions) since the App Router is the current default per the Phase 2
  table — Pages Router syntax (`getStaticProps`/`getServerSideProps`) appears only where a page
  is explicitly comparing the two.
- **Technical-accuracy commitments locked in before Phase 7 starts:**
  - Every caching/rendering claim states which Next.js major version it's true for — this
    track's single biggest accuracy risk is describing Next.js 14's defaults as if they still
    hold in 15+ (or vice versa). The Phase 2 table above is the canonical reference; re-verify
    against `nextjs.org` directly at write-time rather than trusting this table's memory once
    enough time has passed for another major version to ship.
  - Partial Prerendering is stated as experimental (its status at the Next.js 15 release),
    never presented as a finished, stable API without checking the current docs first.
  - Turbopack's stability claim is scoped to `next dev` — never stated as "Turbopack is now
    the default production bundler" without re-checking.
  - The async request-API change (`cookies`/`headers`/`params`/`searchParams`) is attributed to
    Next.js 15 specifically, with the Next.js 16 removal of sync access stated as the actual
    forcing deadline, not an assumption that it's already gone.
  - Server Actions are described as real HTTP endpoints under the hood (POST requests to an
    action ID) — never implied to be a safely-hidden, un-callable server-only function.
- **Icon ⏭️** (the "next" media-control emoji — a direct, plain-emoji pun on the framework's own
  name, per [`visual-style.md`](../../rules/visual-style.md)'s "no hand-drawn logos" rule), track
  color a near-black `#171717` — Next.js's own real brand identity is black-and-white
  minimalism, and this is genuinely distinct from every saturated-hue track color already in use
  (the closest existing neighbor, SQL's slate `#334155`, is a lighter blue-gray, not a true
  near-black).
- **Homepage placement: the "🎨 Frontend" section, alongside HTML & CSS, JavaScript, React,
  Angular, and this session's own new Vue.js track** — Next.js sits right after React, the same
  "framework built on the language/library right above it" adjacency this site already uses for
  LINQ-after-C# and EF-Core-after-SQL.

## Known gaps

- **React fundamentals** are deliberately out of scope — see Phase 2. A reader without React
  background should go through `react/` first; this track assumes that knowledge.
- **A specific data-fetching library's own API** (SWR, TanStack Query) stays at the conceptual
  "when would you reach for one" level — see the taxonomy's own Scope boundary.
- Phase 7 (writing all 58 pages) has **not started** — this roadmap, the taxonomy, and the
  site-wiring stubs (`nextjs/roadmap.html`, tier index stubs, the root tile's roadmap badge) are
  what exist as of this pass. See [`overview.md`](overview.md)'s Status section.
