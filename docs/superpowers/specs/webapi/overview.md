# Web API — Track Spec

**Start here for anything Web-API-related.** See
[`docs/superpowers/specs/README.md`](../README.md) for what this file is and the process for
keeping it in sync with the live pages.

## Status — Phases 1–7 complete, all 25 pages written

- **Phase 1** — [`question-taxonomy.md`](question-taxonomy.md): raw questions, grouped by
  concept across 7 subsections, deliberately scoped away from general ASP.NET Core pipeline
  mechanics (the `dotnet/` track's job) to only what's specific to designing/operating an HTTP
  API contract.
- **Phases 2–6** — [`roadmap.md`](roadmap.md): reviewed (no dedupe needed — the taxonomy's own
  single `[new]` addition confirmed non-duplicative), grouped into 25 final pages (matching the
  bundling decisions already reflected in the Phase 1 draft), tiered by **interview depth**, and
  given an interview-priority tag.
- **Phase 7 — all 25 pages written**, using the same template as every other completed track's
  Phase 7 (❓ Interview Question line → 🔥 Recall → 🧠 Visual → ⚠️ Trap → 🔄 Follow-up → 🎯
  Say-this → 📖 Explanation → 💻 Code → 🌍 Real-world/Scenario — see
  [content-writing.md](../../rules/content-writing.md)). Every page's diagram was run through the
  mandatory automated verification script (see
  [diagram-style.md](../../rules/diagram-style.md#mandatory-automated-verification--hand-computed-coordinates-are-not-verification))
  before this track was considered done.

## Basic (5 topics) — 5 written

| # | Topic | Priority | Written? |
|---|---|---|---|
| 1 | What Is REST | 🔥 | ✅ |
| 2 | Idempotency | 🔥 | ✅ |
| 3 | CORS (API-Consumer Angle) | ⭐ | ✅ |
| 4 | Versioning Strategies | 🔥 | ✅ |
| 5 | Rate Limiting | ⭐ | ✅ |

## Intermediate (14 topics) — 14 written

| # | Topic | Priority | Written? |
|---|---|---|---|
| 1 | HTTP Verbs — Idempotency & Safety | 🔥 | ✅ |
| 2 | HTTP Status Codes | 🔥 | ✅ |
| 3 | Route Parameters vs. Query Parameters | ⭐ | ✅ |
| 4 | Request Body vs. Headers | ⭐ | ✅ |
| 5 | DTOs | 🔥 | ✅ |
| 6 | IActionResult vs. ActionResult\<T\> | ⭐ | ✅ |
| 7 | Model Validation & Swagger/OpenAPI | ⭐ | ✅ |
| 8 | DTO vs. Entity Mapping | ⭐ | ✅ |
| 9 | JWT & Refresh Tokens | 🔥 | ✅ |
| 10 | Backward Compatibility | 🔥 | ✅ |
| 11 | Caching Strategies | ⭐ | ✅ |
| 12 | Async APIs & API Security | ⭐ | ✅ |
| 13 | Pagination | 🔥 | ✅ |
| 14 | Sorting & Filtering Conventions | ⭐ | ✅ |

## Advanced (6 topics) — 6 written

| # | Topic | Priority | Written? |
|---|---|---|---|
| 1 | Designing for Multiple Client Types | ⭐ | ✅ |
| 2 | Retry vs. Resilience | 🔥 | ✅ |
| 3 | Distributed Systems Considerations | 🔥 | ✅ |
| 4 | Large Payloads | 🧠 | ✅ |
| 5 | Traffic Spike Scenario | 🔥 | ✅ |
| 6 | 500-Errors-in-Production Scenario | ⭐ | ✅ |

## Where the roadmap came from

Sourced from the user's own original Web API section of the interview-prep plan, regrouped by
concept per [`question-taxonomy.md`](question-taxonomy.md) — see that file's coverage note. Only
one scenario question was added beyond the source list (mirroring the user's own Azure-section
"500 errors" example applied to this layer), confirmed non-duplicative during Phase 2.

## Track-specific decisions and boundaries

- **General ASP.NET Core pipeline mechanics stay entirely in the `dotnet/` track** — middleware,
  routing internals, DI, generic exception-handling middleware. This track only covers what's
  specific to the API contract/design/operations layer. Where a page's natural explanation
  brushes against pipeline mechanics (e.g. Model Validation), it cross-links to `dotnet/` rather
  than re-teaching it.
- **Code examples are C#**, matching every other track on this site.
- Icon is 🔌, track color red (`#b91c1c`).

## Known gaps

None — this is the first pass through the full 7-phase pipeline for this track, built and
verified in one sitting. Expect a review/feedback pass once the user goes through it.
