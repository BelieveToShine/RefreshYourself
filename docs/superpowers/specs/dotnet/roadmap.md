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

## Phase 3 — Grouping into pages (23 pages)

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
| Basic | 5 | .NET vs. .NET Framework; CLR, BCL & Managed Code; SDK vs. Runtime/.csproj/NuGet; What Is MVC; Filters, CORS, HTTPS & Logging |
| Intermediate | 16 | What Happens When a .NET App Starts; The Built-in DI Container; Service Lifetimes; Middleware; Authentication vs. Authorization (Pipeline Stages); Routing; Model Binding & Validation; ViewBag vs. ViewData vs. TempData; Razor & Routing (MVC); MVC-Specific Filters; Views, Layouts & Organization; Configuration Sources; Authentication Schemes; Authorization Policies & Claims; Global Exception Handling; The Generic Host & Application Lifetime |
| Advanced | 2 | Kestrel & Reverse Proxies; Model Binding Internals & MVC vs. Web API vs. Razor Pages |

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

## Known gaps

None — Phase 7 (writing the 23 pages) is the next and only remaining phase for this track.
