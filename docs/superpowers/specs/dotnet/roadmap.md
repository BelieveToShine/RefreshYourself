# .NET / ASP.NET Core — Roadmap (Phases 2–6)

Phase 1 output: [`question-taxonomy.md`](question-taxonomy.md) — 8 concept groups. This file is
Phases 2–6: review, page grouping, tier, priority, and the final roadmap — see
[`specs/README.md`](../README.md) for what each phase means.

## Phase 2 — Review (one real overlap found and resolved)

One genuine duplicate surfaced between two sections: **Section 3's bundled bullet "Filters,
Global Exception Handling, CORS, HTTPS, Logging" and Section 7's dedicated "Global Exception
Handling" page both covered the same "standard pattern for handling unhandled exceptions
globally" content.** Resolution: Section 7's dedicated page is the deeper, authoritative one (it
adds the dev-exception-page-vs-production comparison); Section 3's bundle keeps only Filters,
CORS, HTTPS, and Logging, and is renamed accordingly (**"Filters, CORS, HTTPS & Logging"**, not
"...Global Exception Handling, CORS..."). No content is lost — Section 7 owns the fuller version.

Two more near-neighbors checked and confirmed as genuinely distinct (not merged):
- **"Authentication vs. Authorization" (Section 3, pipeline stages)** asks *where in the request
  pipeline* each check happens and why order matters — a routing/middleware-sequencing question.
  **"Authentication Schemes" / "Authorization Policies & Claims" (Section 6)** cover the actual
  *mechanisms* (cookie vs. JWT, role- vs. claims-based). Different angle, kept separate.
- **"What Happens When a .NET App Starts" (Section 1)** names the application-lifetime *stages*
  as one stop on a broader startup walkthrough. **"The Generic Host & Application Lifetime"
  (Section 8)** owns the practical "when do you actually hook into
  `IHostApplicationLifetime.ApplicationStarted/Stopping/Stopped`" content. Kept separate; Section
  1's page stays brief on this point rather than re-teaching it.

No other dedupe or gaps — all 8 subsections from the user's original breakdown are represented,
and the coverage note in the taxonomy doc already confirmed nothing was invented beyond it.

## Phase 3 — Grouping into pages (23 pages at Phase 3; track total is now 38 after the 2026-10-07 split/gap pages — see the addendum at the end)

Mostly one concept per page, with two deliberate bundles kept from how the taxonomy already
grouped thin, definition-only sub-topics:
- **"Filters, CORS, HTTPS & Logging"** (Section 3) — four small, core-knowledge-only sub-topics
  with no individual worked scenario; bundled as one reference-style page rather than four
  thin pages.
- **"Model Binding Internals, and MVC vs. Web API vs. Razor Pages"** (Section 4) — the taxonomy
  itself paired these two under one bullet; kept as one page since both are the deepest, most
  architecture-flavored content in the MVC group and naturally read together (how binding
  actually resolves, and which framework choice suits which shape of app).

## Phase 4 — Tier (by question type, not difficulty)

| Tier | Count | Pages |
|---|---|---|
| Basic | 5 (6 final, +1 testing page 2026-09-18) | .NET vs. .NET Framework; CLR, BCL & Managed Code; SDK vs. Runtime/.csproj/NuGet; What Is MVC; Filters, CORS, HTTPS & Logging |
| Intermediate | 16 (17 final, +1 testing page 2026-09-18) | What Happens When a .NET App Starts; The Built-in DI Container; Service Lifetimes; Middleware; Authentication vs. Authorization (Pipeline Stages); Routing; Model Binding & Validation; ViewBag vs. ViewData vs. TempData; Razor & Routing (MVC); MVC-Specific Filters; Views, Layouts & Organization; Configuration Sources; Authentication Schemes; Authorization Policies & Claims; Global Exception Handling; The Generic Host & Application Lifetime |
| Advanced | 2 (4 after the 2026-10-07 addendum) | Kestrel & Reverse Proxies; Model Binding Internals & MVC vs. Web API vs. Razor Pages |

Reasoning for the less-obvious calls:
- **"What Is MVC" is Basic**, unlike most of the rest of the MVC group — it's the classic
  definitional entry point ("what are Model/View/Controller") that every other MVC page assumes
  the reader already has, matching how "what is X" openers are tiered Basic elsewhere on this
  site (e.g. C#'s "what is polymorphism").
- **Most of this track lands Intermediate, not Basic or Advanced — an honest reflection of the
  source material, not a forced distribution.** The user's original plan for this track is
  practical framework-usage knowledge (how DI lifetimes work, how middleware chains, how config
  sources layer) rather than deep internals/performance/concurrency content — that's genuinely
  what ASP.NET Core interview prep at this depth looks like, and the depth rule's Intermediate
  bucket ("practical usage, implementation, comparisons, troubleshooting") is exactly where that
  content sits. Per [`interview-depth-and-priority.md`](../../rules/interview-depth-and-priority.md),
  Advanced questions aren't invented just to round out a tier distribution.
- **"Kestrel & Reverse Proxies" is Advanced** — "why shouldn't Kestrel be exposed directly to the
  internet" is a production-architecture/trade-off question, not a practical how-to.
- **"Model Binding Internals & MVC vs. Web API vs. Razor Pages" is Advanced** — binder-resolution
  internals, a custom-model-binder scenario, and a framework-choice architecture comparison, all
  on one page.

## Phase 5 — Priority (🔥 Must Know / ⭐ Should Know / 🧠 Deep Dive — independent of tier)

| Priority | Pages |
|---|---|
| 🔥 Must Know | .NET vs. .NET Framework; CLR, BCL & Managed Code; What Is MVC; What Happens When a .NET App Starts; The Built-in DI Container; Service Lifetimes; Middleware; Authentication vs. Authorization (Pipeline Stages); Configuration Sources; Authentication Schemes; Global Exception Handling |
| ⭐ Should Know | SDK vs. Runtime/.csproj/NuGet; Filters, CORS, HTTPS & Logging; Routing; Model Binding & Validation; ViewBag vs. ViewData vs. TempData; Razor & Routing (MVC); MVC-Specific Filters; Views, Layouts & Organization; Authorization Policies & Claims; The Generic Host & Application Lifetime; Kestrel & Reverse Proxies |
| 🧠 Deep Dive | Model Binding Internals & MVC vs. Web API vs. Razor Pages |

Service Lifetimes (Singleton/Scoped/Transient) and Middleware ordering are two of the single
most commonly asked ASP.NET Core interview questions at any level — both 🔥. Model binding
internals is the one page in this track least likely to be the literal question asked, but goes
genuinely deep when it is — the track's only 🧠.

## Phase 6 — Final roadmap

`dotnet/roadmap.html` groups by the same 8 concept categories as the Phase 1 taxonomy (concept
category, not tier — see C#'s and OOP's roadmap pages for the same site-wide convention).
Numbering below is the tier-folder page number (`dotnet/<tier>/<n>.html`):

| # | Concept | Tier | Page |
|---|---|---|---|
| 1.1 | .NET vs. .NET Framework | Basic | basic/1.html |
| 1.2 | CLR, BCL & Managed Code | Basic | basic/2.html |
| 1.3 | SDK vs. Runtime, .csproj & NuGet | Basic | basic/3.html |
| 1.4 | What Happens When a .NET App Starts | Intermediate | intermediate/1.html |
| 2.1 | The Built-in DI Container | Intermediate | intermediate/2.html |
| 2.2 | Service Lifetimes | Intermediate | intermediate/3.html |
| 3.1 | Middleware | Intermediate | intermediate/4.html |
| 3.2 | Authentication vs. Authorization (Pipeline Stages) | Intermediate | intermediate/5.html |
| 3.3 | Routing | Intermediate | intermediate/6.html |
| 3.4 | Model Binding & Validation | Intermediate | intermediate/7.html |
| 3.5 | Filters, CORS, HTTPS & Logging | Basic | basic/5.html |
| 4.1 | What Is MVC | Basic | basic/4.html |
| 4.2 | ViewBag vs. ViewData vs. TempData | Intermediate | intermediate/8.html |
| 4.3 | Razor & Routing (MVC) | Intermediate | intermediate/9.html |
| 4.4 | MVC-Specific Filters | Intermediate | intermediate/10.html |
| 4.5 | Views, Layouts & Organization | Intermediate | intermediate/11.html |
| 4.6 | Model Binding Internals & MVC vs. Web API vs. Razor Pages | Advanced | advanced/2.html |
| 5.1 | Configuration Sources | Intermediate | intermediate/12.html |
| 6.1 | Authentication Schemes | Intermediate | intermediate/13.html |
| 6.2 | Authorization Policies & Claims | Intermediate | intermediate/14.html |
| 7.1 | Global Exception Handling | Intermediate | intermediate/15.html |
| 8.1 | Kestrel & Reverse Proxies | Advanced | advanced/1.html |
| 8.2 | The Generic Host & Application Lifetime | Intermediate | intermediate/16.html |

## Track-specific decisions and boundaries

- **MVC is a content subsection here, not a separate track/folder** — per the locked decision
  carried over from Phase 1, its 6 pages live in the normal tier folders (`basic/4.html`,
  `intermediate/8-11.html`, `advanced/2.html`) exactly like every other subsection's pages;
  nothing about MVC gets its own folder depth.
- **Code examples are C#** — matches every other track on this site.
- **".NET Framework" (the legacy Windows-only technology) is explicitly out of scope** — this
  whole track is about modern, cross-platform .NET/ASP.NET Core; the `dotnet/` folder slug is
  kept only because it already existed, not because it still means the old Framework.
- Icon is 🧱, track color purple (`#7c3aed`) — matches the existing home-page tile.

## Post-launch addition — Testing (2026-09-18)

The user reported that unit testing was missing from this track after all 23 original pages were
written. Confirmed as a genuine gap (see `question-taxonomy.md`'s new Section 9) and added as 2
more pages, following the same tier/priority logic as the rest of the track:

| # | Concept | Tier | Priority | Page |
|---|---|---|---|---|
| 24 | Unit Testing Fundamentals | Basic | 🔥 Must Know | basic/6.html |
| 25 | Mocking & Testing ASP.NET Core Components | Intermediate | 🔥 Must Know | intermediate/17.html |

- **Unit Testing Fundamentals is Basic** — definitional/recall (AAA, framework attribute names,
  what makes a test a "unit" test), matching how other "what is X" openers are tiered Basic on
  this track (e.g. "What Is MVC").
- **Mocking & Testing ASP.NET Core Components is Intermediate** — applied technique and a
  comparison (mocking a class vs. `WebApplicationFactory`), not a bare definition; it also
  depends on DI (Section 2) already being understood, which only exists once Intermediate's DI
  pages are in place.
- Both are 🔥 Must Know — testing is asked in nearly every .NET interview at some depth, and
  mocking a dependency is one of the most common practical follow-ups after any DI question.
- `dotnet/roadmap.html` gets a 9th concept-category section ("9. Testing") alongside the
  existing 8 — concept category, not tier, matching this file's own Phase 6 convention.

## Known gaps

None — every subsection from the user's original breakdown, plus the Testing gap the user
reported afterward, now has a written page.

## Addendum 2026-10-06 — splits & gap pages (Phases 2–6)

**Status: all pages in this addendum were written and wired on 2026-10-07** (track total 25 -> 38: Basic 9, Intermediate 25, Advanced 4; basic/5 and advanced/2 were retitled/split as described below). Source: `docs/review-2026-10-06.md` §4 (grab-bag pages) and §5
(candidate gaps), plus a fresh gap hunt. Numbers are the **next free number in the tier**, counted
from the real files on disk (dotnet: basic 6, intermediate 17, advanced 2 — re-counted after this edit).
Existing pages keep their numbers; nothing is renumbered or deleted. New pages are appended in the tier
folders and, as with the post-launch Testing addition, get a row in the matching concept category on
`dotnet/roadmap.html` (splits go in the category of the page they came out of).

### New pages

| Page | Tier | Pri | Title | Quoted interview question | Scope (one sentence) | Diagram idea | Cross-links |
|---|---|---|---|---|---|---|---|
| basic/7 *(split of basic/5)* | Basic | ⭐ | HTTPS Redirection & HSTS | "What's the difference between `UseHttpsRedirection` and HSTS, and why can't redirection alone protect the first request?" | Redirect-vs-HSTS roles, middleware position (early), dev cert vs prod TLS terminated at the proxy, `UseForwardedHeaders` caveat. | Browser → HTTP request → 307/308 → HTTPS, with HSTS header caching "never try HTTP again" for max-age. | basic/5, intermediate/4, advanced/1 (Kestrel & proxies) |
| basic/8 *(split of basic/5)* | Basic | 🔥 | Logging — ILogger, Levels & Providers | "How does logging work in ASP.NET Core, and what is structured logging?" | `ILogger<T>` via DI, log levels + `appsettings` filtering, message templates (not string interpolation), providers/sinks (Serilog named as a replacement provider). | `ILogger<T>` fan-out to console / file / App Insights provider boxes, with a level-filter gate in front. | intermediate/2, intermediate/12, webapi/advanced/6 |
| basic/9 | Basic | ⭐ | LTS vs. STS & .NET Standard | "What's the difference between LTS and STS releases, and what is .NET Standard — do you still use it?" | Release cadence/support windows (verify against Microsoft's current support policy before writing — never guess dates), what .NET Standard was for and why modern targeting replaced it. | Timeline of yearly releases with LTS/STS support-length bars; second mini-diagram: one netstandard lib consumed by Framework + .NET. | basic/1, basic/3 |
| intermediate/18 *(split of advanced/2)* | Intermediate | ⭐ | MVC vs. Web API vs. Razor Pages | "When would you reach for MVC, a Web API controller, or Razor Pages?" | The three shapes on one endpoint-routing base, what each returns, auto-400 vs manual `ModelState`, mixing all three in one project. | The existing "one request, three pipelines" trio condensed to one side-by-side flow. | basic/4, intermediate/7, intermediate/9, advanced/2, webapi/basic/1 |
| intermediate/19 | Intermediate | 🔥 | Minimal APIs | "What are minimal APIs, and when would you pick them over controllers?" | `MapGet`/`MapGroup`, parameter binding without attributes, endpoint filters instead of MVC filters, no automatic `[ApiController]` 400 behaviour, trade-offs vs controllers. | Same request through a controller pipeline vs a minimal-API pipeline (fewer boxes), lost/kept features labelled. | intermediate/6, intermediate/10, intermediate/7, webapi/intermediate/6 |
| intermediate/20 | Intermediate | 🔥 | IHttpClientFactory | "Why not `new HttpClient()` per request, and what does `IHttpClientFactory` fix?" | Socket exhaustion + stale-DNS problem, handler pooling/rotation, named vs typed clients, `DelegatingHandler` pipeline; resilience handlers cross-linked, not taught here. | Left: `new HttpClient()` per call leaking sockets; right: factory pool of handlers reused, rotated on a timer. | intermediate/2, intermediate/3, webapi/advanced/8 (resilience) |
| intermediate/21 | Intermediate | ⭐ | BackgroundService Patterns | "How do you run recurring background work in ASP.NET Core — and how do you use a scoped service from it?" | `ExecuteAsync` loop, `PeriodicTimer`, a DI scope per iteration (scoped-in-singleton trap), unhandled-exception host behaviour, graceful stop via token. Partly overlaps the code on intermediate/16 — this page owns *how to write one*; 16 keeps lifecycle/shutdown. | Host start → `ExecuteAsync` loop; each tick opens/disposes a DI scope; stop token cancels the loop. | intermediate/16, intermediate/3, webapi/intermediate/12 |
| intermediate/22 | Intermediate | ⭐ | Health Checks | "How do you expose liveness and readiness for an ASP.NET Core app?" | `AddHealthChecks`/`MapHealthChecks`, liveness vs readiness (tag filtering), dependency checks (DB, downstream), how Kubernetes/load balancers consume them. | Orchestrator probing `/health/live` and `/health/ready`; ready fans out to DB/cache checks. | intermediate/16, webapi/advanced/3, webapi/advanced/6 |
| intermediate/23 | Intermediate | ⭐ | Options Pattern Validation | "How do you make the app fail at startup if a config section is invalid?" | `AddOptions<T>().Bind().ValidateDataAnnotations().ValidateOnStart()`, `IValidateOptions<T>`; the lifetime comparison stays on intermediate/12. | appsettings → bound options → validator gate → app starts / startup throws. | intermediate/12, intermediate/1 |
| intermediate/24 | Intermediate | ⭐ | HttpContext & IHttpContextAccessor *(own gap-hunt)* | "How do you get the current user or request outside a controller, and what's wrong with `IHttpContextAccessor`?" | What `HttpContext` carries, per-request lifetime, accessor use (`AsyncLocal`), why not to read it in singletons/background threads. | One request's `HttpContext` shared by middleware → controller → service via accessor; dashed "background thread = null" branch. | intermediate/4, intermediate/3, intermediate/16 |
| intermediate/25 | Intermediate | ⭐ | SignalR vs. WebSockets vs. SSE *(own gap-hunt)* | "How would you push real-time updates to browsers from ASP.NET Core?" | Transports + fallback, hubs, groups, scale-out needs a backplane; when plain polling or SSE is enough. | Client ↔ hub with transport negotiation arrows; second instance needing a backplane. | intermediate/4, webapi/intermediate/12 |
| advanced/3 *(split of advanced/2)* | Advanced | ⭐ | Slow MVC App Under Load — Triage | "You inherit a slow MVC app — what's your first diagnostic step?" | Profile/APM first, then the usual suspects (sync-over-async, N+1, chatty calls, missing caching, large views); never a blind checklist. | Funnel: symptom → measure (APM/trace) → hot path → fix class, no code before measurement. | advanced/1, webapi/advanced/5, webapi/advanced/6, efcore N+1 pages |
| advanced/4 | Advanced | 🔥 | Identity, OAuth2 & OpenID Connect | "What's the difference between OAuth2 and OIDC, and where does ASP.NET Core Identity fit?" | OAuth2 = delegated authorisation, OIDC = identity layer (ID token), auth-code + PKCE flow, external IdP vs ASP.NET Core Identity as the local user store, scope/claims mapping. | Auth-code + PKCE sequence: browser → app → IdP → code → token exchange. | intermediate/13, intermediate/14, intermediate/5, webapi/intermediate/9, webapi/intermediate/20 |

### Retitles / scope changes to existing pages

| Page | Old title | New title | What moves out |
|---|---|---|---|
| basic/5 | Filters, CORS, HTTPS & Logging | Filters — Hooks Around an Action *(nav short: "Filters")* | CORS is **dropped from this page** (fully covered by webapi/basic/3 — leave a one-line cross-link); HTTPS → new basic/7; Logging → new basic/8. Page keeps the umbrella filter concept (action/exception/authorization filters, filter vs middleware); the existing Common Trap becomes a pointer to webapi/basic/3. Stays ⭐; add filter-vs-middleware only if it does not duplicate intermediate/10. |
| advanced/2 | Model Binding Internals & MVC vs. Web API vs. Razor Pages | Model Binding Internals | MVC/Web API/Razor comparison + its three-pipeline diagrams → new intermediate/18; the "slow MVC app" follow-up → new advanced/3. Keeps binder source priority (form > body > route > query), `[FromHeader]`/`[FromServices]` outside the race, custom `IModelBinder`. Stays 🧠. |
| intermediate/16 | The Generic Host & Application Lifetime | *(unchanged)* | Scope note only: how to *write* a `BackgroundService` is owned by new intermediate/21; 16 keeps host lifecycle/shutdown. |

### Gap-hunt log (this addendum)

- **Added:** Minimal APIs, IHttpClientFactory, BackgroundService patterns, Health Checks, Options validation, Identity/OAuth2/OIDC, LTS vs STS & .NET Standard; own hunt: HttpContext/`IHttpContextAccessor`, SignalR.
- **Dropped:** IExceptionHandler/ProblemDetails — dotnet/intermediate/15 already covers global handling and names RFC 7807; the dedicated ProblemDetails page belongs to the Web API track (webapi/intermediate/16). CORS as a .NET page — webapi/basic/3 owns it. Serilog/log-sink setup as its own page — folded into basic/8. Output caching / rate limiting — webapi intermediate/11 and basic/5 own them.
- **Open check before Phase 7:** exact LTS/STS support windows must be verified against Microsoft's current policy (accuracy.md).
