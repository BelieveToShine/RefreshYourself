# Web API — Interview Question Taxonomy

**Phase 1 of the 7-phase pipeline** (see [`docs/superpowers/specs/README.md`](../README.md)).
No tier, no priority, no page grouping yet. Kept tightly to the user's original Web API section
of the interview-prep plan — `[new]` additions are minimal and only used where noted.

**Boundary with the .NET/ASP.NET Core track:** general request-pipeline mechanics (middleware,
routing, model binding, filters, DI, generic exception-handling middleware) live in the
`dotnet/` track. This track covers questions specific to *designing and operating an HTTP API*
— contract shape, versioning, auth as an API concern (stateless tokens, not the pipeline
mechanics), and production-scale concerns.

---

## 1. REST Fundamentals

- **Core concept** — What is REST?
- **Comparison** — GET vs. POST vs. PUT vs. PATCH vs. DELETE — what does each actually promise
  (idempotency, safety)?
- **Understanding** — What do the common HTTP status codes actually communicate (2xx/4xx/5xx
  families, and specifically 200 vs. 201 vs. 204, 400 vs. 422, 401 vs. 403)?
- **Comparison** — Route parameters vs. query parameters — when does a value belong in each?
- **Understanding** — What goes in the request body vs. headers?
- **Core concept** — What is idempotency, and which verbs are supposed to guarantee it?

---

## 2. Contracts & Response Design

- **Core concept** — What is a DTO, and why not just return your entity directly from an API?
- **Comparison** — `IActionResult` vs. `ActionResult<T>` — what's the practical difference?
- **Core concept** — How does model validation work for an incoming request?
- **Core concept** — What is Swagger/OpenAPI for, and what does it generate from your code?
- **Comparison** — DTO vs. entity — what's the mapping responsibility, and where should it live?

---

## 3. Authentication & Authorization for APIs

- **Core concept** — What is JWT, and what's actually inside one?
- **Understanding** — What is a refresh token, and why not just issue long-lived access tokens
  instead?
- **Core concept** — What is CORS, specifically in the context of a browser-based client calling
  this API from a different origin?

---

## 4. API Versioning & Evolution

- **Core concept** — What are the common ways to version an API (URL segment, header, query
  string)?
- **Scenario** — You need to change a response shape for new clients without breaking existing
  ones — what's the strategy?
- **Core concept** — What does backward compatibility mean concretely for an API contract?
- **Scenario** — How would you design an API that needs to serve multiple different client
  types (web, mobile, a partner integration) well?

---

## 5. Performance, Resilience & Scale

- **Core concept** — What are the common caching strategies for an API (response caching,
  distributed cache)?
- **Core concept** — What is rate limiting, and what's it protecting against?
- **Comparison** — Retry handling vs. resilience more broadly — what's the difference between
  "retry on failure" and genuine resilience (circuit breaking, timeouts, fallback)?
- **Understanding** — What do "distributed systems considerations" actually mean for a single
  API — e.g. what changes once there's more than one instance behind a load balancer?
- **Scenario** — How do you handle a large payload (upload/download) without blocking a request
  thread or exhausting memory?
- **Core concept** — What makes an API "async" beyond just using `async`/`await` in the
  controller — e.g. long-running operations returning a status/polling endpoint?
- **Core concept** — What is API security beyond authentication — what else should an API guard
  against?

---

## 6. Pagination, Sorting & Filtering

- **Core concept** — What are the common approaches to pagination (offset vs. cursor-based)?
- **Comparison** — Sorting and filtering as query parameters — what conventions make an API
  predictable to consume?

---

## 7. Scenario & Operational Questions

- **Scenario** — Your API is suddenly receiving 10x traffic. What would you look at first?
- **Scenario** — Your API is deployed and suddenly starts returning 500 errors — how would you
  investigate? **[new, mirrors the user's own Azure-section example applied to the API layer]**

---

## Coverage note for Phase 2

Every bullet from the user's original Web API Basic/Intermediate/Advanced lists is represented
above, regrouped by concept. Only one scenario question was added beyond the source list, and
it directly mirrors a scenario style the user already demonstrated elsewhere in their own plan
(the Azure "500 errors" example) applied to this track's own layer — flagged for easy removal
in Phase 2 if it's considered redundant with the traffic-spike scenario already given.
