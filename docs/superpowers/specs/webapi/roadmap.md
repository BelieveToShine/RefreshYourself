# Web API — Roadmap (Phases 2–6)

Phase 1 output: [`question-taxonomy.md`](question-taxonomy.md) — 7 concept groups, 25 concepts.
This file is Phases 2–6: review, page grouping, tier, priority, and the final roadmap — see
[`specs/README.md`](../README.md) for what each phase means.

## Phase 2 — Review

No dedupe needed. The taxonomy's own coverage note already flagged its one `[new]` addition (the
"500 errors in production" scenario, mirroring the user's own Azure-section example applied to
this layer) as low-risk and non-duplicative of the existing "10x traffic" scenario — confirmed
distinct: one is a load/scale scenario, the other is a debugging/investigation scenario. No gaps
found against the user's original list.

**Boundary re-confirmed**: general ASP.NET Core pipeline mechanics (middleware, routing, model
binding internals, DI, generic exception-handling middleware) stay in the `dotnet/` track, per
the taxonomy's own stated boundary. This track's "Model Validation" page, for example, covers
validation *from the API-contract perspective* (what a client sees when validation fails), not
the pipeline mechanics of how `ModelState` gets populated — that's `dotnet/intermediate/7.html`.

## Phase 3 — Grouping into pages (25 pages)

The taxonomy's own draft roadmap already reflects the grouping decisions — kept as-is:
- **"Model Validation & Swagger/OpenAPI"** bundled onto one page — both are "what tooling/
  mechanism exists" questions with no deep individual scenario, read naturally together as
  contract-design tooling.
- **"JWT & Refresh Tokens"** bundled onto one page — a refresh token only makes sense in the
  context of JWT/access-token expiry, so splitting them would force one page to constantly
  reference the other.
- **"Async APIs & API Security"** bundled onto one page — both are "what else matters beyond the
  obvious" catch-all concerns for a Basic/Intermediate-level API design conversation; neither has
  enough individual depth in the source material to carry its own page.
- The "change response shape without breaking clients" scenario folds into **"Backward
  Compatibility"** — it's the same question asked two ways (what backward compatibility means,
  and a concrete case of applying it).

## Phase 4 — Tier (by question type, not difficulty)

| Tier | Count | Pages |
|---|---|---|
| Basic | 5 | What Is REST; Idempotency; CORS (API-consumer angle); Versioning Strategies; Rate Limiting |
| Intermediate | 14 | HTTP Verbs & Idempotency/Safety; HTTP Status Codes; Route vs. Query Parameters; Request Body vs. Headers; DTOs; IActionResult vs. ActionResult\<T\>; Model Validation & Swagger/OpenAPI; DTO vs. Entity Mapping; JWT & Refresh Tokens; Backward Compatibility; Caching Strategies; Async APIs & API Security; Pagination; Sorting & Filtering |
| Advanced | 6 | Designing for Multiple Client Types; Retry vs. Resilience; Distributed Systems Considerations; Large Payloads; Traffic Spike Scenario; 500-Errors-in-Production Scenario |

Reasoning for the less-obvious calls:
- **"What Is REST" and "Idempotency" are Basic** — pure "what is X" recall, the entry points to
  the whole track.
- **The HTTP-verbs page is Intermediate, not Basic**, even though "know your HTTP verbs" sounds
  junior — the taxonomy's actual angle is idempotency/safety *guarantees per verb*, a
  comparison, not bare vocabulary.
- **"Versioning Strategies" and "Rate Limiting" are Basic** — both are "name the common
  approaches" enumeration questions in the source material, with the deeper comparison/scenario
  content (backward compatibility, resilience patterns) living on their own separate pages.
- **"Retry vs. Resilience" and "Distributed Systems Considerations" are Advanced** — circuit
  breaking, timeouts/fallback, and "what changes once there's more than one instance behind a
  load balancer" are architecture/trade-off questions by definition, not practical how-tos.
- **Both operational scenario pages (traffic spike, 500-errors-investigation) are Advanced** —
  they're exactly the "complex scenario" shape the depth rule names for that tier.
- **"Designing for Multiple Client Types" is Advanced** — a multi-stakeholder API-shape design
  question, architecture-depth by nature.

## Phase 5 — Priority (🔥 Must Know / ⭐ Should Know / 🧠 Deep Dive — independent of tier)

| Priority | Pages |
|---|---|
| 🔥 Must Know | What Is REST; HTTP Verbs & Idempotency/Safety; HTTP Status Codes; Idempotency; DTOs; JWT & Refresh Tokens; Versioning Strategies; Backward Compatibility; Retry vs. Resilience; Distributed Systems Considerations; Pagination; Traffic Spike Scenario |
| ⭐ Should Know | Route vs. Query Parameters; Request Body vs. Headers; IActionResult vs. ActionResult\<T\>; Model Validation & Swagger/OpenAPI; DTO vs. Entity Mapping; CORS; Designing for Multiple Client Types; Caching Strategies; Rate Limiting; Async APIs & API Security; Sorting & Filtering; 500-Errors-in-Production Scenario |
| 🧠 Deep Dive | Large Payloads (streaming without blocking) |

Large Payloads is the track's one 🧠 — rarely the literal asked question, but goes genuinely deep
(streaming I/O, backpressure, memory) when it comes up, matching the same pattern as the one 🧠
page on each of the previously-built tracks.

## Phase 6 — Final roadmap

`webapi/roadmap.html` groups by the same 7 concept categories as the Phase 1 taxonomy (concept
category, not tier — the site-wide convention). Numbering below is the tier-folder page number
(`webapi/<tier>/<n>.html`):

| # | Concept | Tier | Page |
|---|---|---|---|
| 1.1 | What Is REST | Basic | basic/1.html |
| 1.2 | HTTP Verbs — Idempotency & Safety | Intermediate | intermediate/1.html |
| 1.3 | HTTP Status Codes | Intermediate | intermediate/2.html |
| 1.4 | Route Parameters vs. Query Parameters | Intermediate | intermediate/3.html |
| 1.5 | Request Body vs. Headers | Intermediate | intermediate/4.html |
| 1.6 | Idempotency | Basic | basic/2.html |
| 2.1 | DTOs — Why Not Return the Entity | Intermediate | intermediate/5.html |
| 2.2 | IActionResult vs. ActionResult\<T\> | Intermediate | intermediate/6.html |
| 2.3 | Model Validation & Swagger/OpenAPI | Intermediate | intermediate/7.html |
| 2.4 | DTO vs. Entity Mapping | Intermediate | intermediate/8.html |
| 3.1 | JWT & Refresh Tokens | Intermediate | intermediate/9.html |
| 3.2 | CORS (API-Consumer Angle) | Basic | basic/3.html |
| 4.1 | Versioning Strategies | Basic | basic/4.html |
| 4.2 | Backward Compatibility | Intermediate | intermediate/10.html |
| 4.3 | Designing for Multiple Client Types | Advanced | advanced/1.html |
| 5.1 | Caching Strategies | Intermediate | intermediate/11.html |
| 5.2 | Rate Limiting | Basic | basic/5.html |
| 5.3 | Retry vs. Resilience | Advanced | advanced/2.html |
| 5.4 | Distributed Systems Considerations | Advanced | advanced/3.html |
| 5.5 | Large Payloads | Advanced | advanced/4.html |
| 5.6 | Async APIs & API Security | Intermediate | intermediate/12.html |
| 6.1 | Pagination — Offset vs. Cursor | Intermediate | intermediate/13.html |
| 6.2 | Sorting & Filtering Conventions | Intermediate | intermediate/14.html |
| 7.1 | Traffic Spike Scenario | Advanced | advanced/5.html |
| 7.2 | 500-Errors-in-Production Scenario | Advanced | advanced/6.html |

## Track-specific decisions and boundaries

- **General ASP.NET Core pipeline mechanics stay entirely out of this track** — middleware,
  routing internals, DI, generic exception-handling middleware are the `dotnet/` track's job;
  this track only covers what's specific to designing/operating an HTTP API contract itself.
  Where a page's natural explanation brushes against pipeline mechanics (e.g. Model Validation),
  cross-link to `dotnet/` rather than re-teaching it.
- **Code examples are C#**, matching every other track on this site.
- Icon is 🔌, track color red (`#b91c1c`) — matches the existing home-page tile.

## Known gaps

None — Phase 7 (writing the 25 pages) is the next and only remaining phase for this track.
