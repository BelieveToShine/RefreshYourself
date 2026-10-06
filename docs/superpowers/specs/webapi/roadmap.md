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

## Phase 3 — Grouping into pages (25 pages at Phase 3; track total is now 36 after the 2026-10-07 split/gap pages — see the addendum at the end)

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
| Intermediate | 14 (21 after the 2026-10-07 addendum) | HTTP Verbs & Idempotency/Safety; HTTP Status Codes; Route vs. Query Parameters; Request Body vs. Headers; DTOs; IActionResult vs. ActionResult\<T\>; Model Validation & Swagger/OpenAPI; DTO vs. Entity Mapping; JWT & Refresh Tokens; Backward Compatibility; Caching Strategies; Async APIs & API Security; Pagination; Sorting & Filtering |
| Advanced | 6 (10 after the 2026-10-07 addendum) | Designing for Multiple Client Types; Retry vs. Resilience; Distributed Systems Considerations; Large Payloads; Traffic Spike Scenario; 500-Errors-in-Production Scenario |

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

None among the original 25 pages (all written); the 11 split/gap pages found afterwards were written 2026-10-07 — see the addendum below.

## Addendum 2026-10-06 — splits & gap pages (Phases 2–6)

**Status: all pages in this addendum were written and wired on 2026-10-07** (track total 25 -> 36: Basic 5, Intermediate 21, Advanced 10; intermediate/12 was retitled "Async APIs — 202 Accepted & Polling"). Source: `docs/review-2026-10-06.md` §4–§5 plus a fresh gap hunt.
Numbers are the **next free number in the tier**, from the real files on disk (webapi: basic 5,
intermediate 14, advanced 6 — re-counted after this edit). Existing pages keep their numbers; no
renumbering or deletion. New pages get rows in the matching concept category on `webapi/roadmap.html`.
Pipeline mechanics stay in the `dotnet/` track — cross-link, never re-teach.

### New pages

| Page | Tier | Pri | Title | Quoted interview question | Scope (one sentence) | Diagram idea | Cross-links |
|---|---|---|---|---|---|---|---|
| intermediate/15 *(split of intermediate/12)* | Intermediate | 🔥 | API Security Beyond Authentication | "Your API has JWT auth — is it secure? What else do you guard against?" | Input validation, output exposure, BOLA/IDOR (broken object-level authorization), rate limiting, HTTPS, least privilege, secret hygiene; includes the 404-vs-403 information-leakage choice (hide existence vs. admit it). | An authenticated request passing guard layers; red path "valid token, someone else's object id" blocked at the object check. | intermediate/12, intermediate/9, intermediate/2, basic/5, dotnet/intermediate/14 |
| intermediate/16 | Intermediate | 🔥 | ProblemDetails (RFC 7807) | "What should an API error response look like?" | `application/problem+json` fields, `AddProblemDetails`, `IExceptionHandler`, validation problem details with `errors`, never leaking stack traces. | Exception → handler → problem+json body with type/title/status/detail/instance labelled. | intermediate/2, intermediate/7, dotnet/intermediate/15 |
| intermediate/17 | Intermediate | ⭐ | Content Negotiation & Formatters | "How does an API decide between JSON and XML, and what happens on an unsupported `Accept`?" | `Accept` vs `Content-Type`, output/input formatters, `ReturnHttpNotAcceptable`, 406 vs 415, custom formatter. | Accept header → formatter selection → body, with 406/415 exits. | intermediate/4, intermediate/6, dotnet/intermediate/19 |
| intermediate/18 | Intermediate | ⭐ | ETag & If-Match — Optimistic Concurrency | "Two clients update the same resource — how do you stop a lost update over HTTP?" | Strong ETag on read, `If-Match` on write, 412 Precondition Failed / 428 Precondition Required; write-side counterpart of intermediate/11's `If-None-Match` caching. | Two clients read v1; first PUT succeeds (v2); second PUT with stale If-Match → 412. | intermediate/11, intermediate/1, efcore/advanced/3 |
| intermediate/19 | Intermediate | ⭐ | Richardson Maturity Model & HATEOAS | "What are the Richardson maturity levels, and does your API need HATEOAS?" | Levels 0–3, what each adds, why level 3 is rarely built, an honest "when links help"; basic/1 only names HATEOAS. | Four-step staircase, each step labelled with what it adds. | basic/1, intermediate/1, intermediate/13 |
| intermediate/20 | Intermediate | ⭐ | Token Storage — HttpOnly Cookie vs. localStorage | "Where should a SPA store its JWT/refresh token?" | XSS vs CSRF trade-off, HttpOnly + Secure + SameSite cookies, BFF alternative; goes beyond the single trap on intermediate/9. | Two-column attacker view: XSS reads localStorage; cookie blocks JS but needs CSRF defence. | intermediate/9, basic/3, advanced/7, dotnet/advanced/4 |
| intermediate/21 | Intermediate | ⭐ | gRPC vs. REST | "When would you choose gRPC over a REST API?" | HTTP/2 + protobuf, streaming, contract-first; browser/caching limits (gRPC-Web); service-to-service vs public API. | Browser → REST/JSON edge, services ↔ gRPC internally. | basic/1, advanced/3, dotnet/intermediate/6 |
| advanced/7 | Advanced | ⭐ | API Gateway & BFF | "What does an API gateway do, and how is a BFF different?" | Routing, auth offload, rate limit, aggregation; gateway vs BFF vs reverse proxy; single-point-of-failure caveat. | Clients → gateway → services, with a BFF variant per client type. | advanced/1, advanced/3, dotnet/advanced/1, intermediate/20 |
| advanced/8 | Advanced | ⭐ | Resilience in .NET — Polly & Http.Resilience | "How do you implement retry, circuit breaker and timeout on outgoing calls in .NET?" | Resilience pipelines (`Microsoft.Extensions.Http.Resilience`, Polly v8): retry with jitter, circuit breaker, timeout, hedging, attached to `HttpClient`; the concepts stay on advanced/2. Verify current API names before writing. | Pipeline of strategy boxes around one outgoing call. | advanced/2, dotnet/intermediate/20 |
| advanced/9 | Advanced | ⭐ | Webhooks *(own gap-hunt)* | "How would you design an API that calls the client back? How do you secure and retry webhooks?" | Signed payloads (HMAC), retries with backoff, idempotent receivers, replay protection; the 202-plus-callback option from intermediate/12 in depth. | Provider → signed POST → receiver 2xx / retry loop with dead-letter. | intermediate/12, basic/2, advanced/2, intermediate/1 |
| advanced/10 | Advanced | ⭐ | Cancellation, Timeouts & Client Disconnects *(own gap-hunt)* | "What happens to a request when the client disconnects, and how do you stop wasted work?" | `HttpContext.RequestAborted` / `CancellationToken` action parameter, passing it to EF/HttpClient, server vs client timeouts. | Client drops → token cancels → DB call aborted vs left running. | advanced/2, advanced/6, dotnet/intermediate/16 |

### Retitles / scope changes to existing pages

| Page | Old title | New title | What moves out |
|---|---|---|---|
| intermediate/12 | Async APIs & API Security | Async APIs — 202 Accepted & Polling | The "five things a secure API still needs" section, the SQL-injection code and the security diagram → new intermediate/15. Page keeps async/await vs genuinely-async (202 + Location + polling/webhook) and a one-line "async ≠ secure" pointer. Stays ⭐; update nav short name and tier-index row. |
| basic/1 | What Is REST | *(unchanged)* | Scope note only: Richardson/HATEOAS depth lives on intermediate/19. |

### Gap-hunt log (this addendum)

- **Added:** ProblemDetails, content negotiation, ETag/If-Match, Richardson/HATEOAS, token storage, gRPC vs REST, API gateway/BFF, Polly/Http.Resilience; own hunt: webhooks, cancellation/client disconnects.
- **Dropped:** Minimal APIs vs controllers — dotnet/intermediate/19 owns it (it carries the vs-controllers section); this track only cross-links. File upload/streaming — advanced/4 already covers `IFormFile`, multipart and streaming. JSON Patch as its own page — PUT vs PATCH sits on intermediate/1 and JSON Patch is rarely the literal question (rejected as niche). 409/404-vs-403 as a standalone page — 409/403 are on intermediate/2; the info-leakage point is folded into intermediate/15.
