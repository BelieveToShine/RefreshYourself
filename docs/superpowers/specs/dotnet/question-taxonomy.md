# .NET / ASP.NET Core — Interview Question Taxonomy

**Phase 1 of the 7-phase pipeline** (see [`docs/superpowers/specs/README.md`](../README.md)).
No tier, no priority, no page grouping yet. **[new]** marks anything added beyond the user's
original `.NET / ASP.NET Core` section of the interview-prep plan.

## Naming and scope note

This track supersedes the old ".NET Framework" track that already existed in this repo's
folder (`dotnet/`) but was never written. **".NET Framework" and "modern .NET / ASP.NET Core"
are different technologies** (legacy Windows-only framework vs. the current cross-platform
runtime) — this taxonomy is entirely about the latter. The `dotnet/` folder slug is kept as-is;
only the scope and display name change, and only when Phase 6/7 actually rebuild the live pages.

## MVC is a content subsection here, not a separate file or folder

Per the locked decision: MVC has its own Basic/Intermediate/Advanced questions and its own
grouped section below, but it is **not** a separate taxonomy file, folder, or top-level track.
Same for every other subsection (.NET Fundamentals, DI, Pipeline, Configuration, Auth, Error
Handling, Hosting) — they're all just named groups within this one track, exactly the mechanism
already used for "grouped in tens" on a tier index. This is deliberate so future subsections
(Minimal APIs, SignalR, Background Services, Observability, Caching) can be added later as more
groups, without ever inventing a new folder-depth rule.

---

## 1. .NET Fundamentals

### .NET vs. .NET Framework
- **Core concept** — What's the actual relationship between modern .NET (Core) and the older
  .NET Framework?
- **Understanding** — What does the .NET runtime actually do?

### CLR, BCL & Managed Code
- **Core concept** — What is the CLR, and what does "managed code" actually mean?
- **Understanding** — What does the BCL (Base Class Library) give you that you don't have to
  write yourself?
- **Comparison** — Managed vs. unmanaged code — what changes about memory and safety guarantees?

### SDK vs. Runtime, `.csproj` & NuGet
- **Core concept** — What's the difference between installing the .NET *SDK* and the .NET
  *runtime*?
- **Understanding** — What does a `.csproj` file actually describe, and what does NuGet resolve
  from it?

### What Happens When a .NET App Starts
- **Core concept** — Walk through what happens from `dotnet run` (or launching the exe) to your
  first line of code executing.
- **Understanding** — What is Kestrel, and where does it sit relative to your app code?
- **Understanding** — What is the Generic Host, and what does it give an app beyond "just run my
  code" (configuration, DI, logging, lifetime, all wired up consistently)?
- **Understanding** — What is the application lifetime, and what stages does it go through?

---

## 2. Dependency Injection

### The Built-in DI Container
- **Core concept** — What problem does the built-in DI container solve, and why does ASP.NET
  Core ship with one instead of leaving it to a third-party library?
- **Comparison** — Constructor injection vs. service-locator style resolution — why is the
  former strongly preferred?

### Service Lifetimes
- **Core concept** — Singleton vs. Scoped vs. Transient — what does each actually mean in terms
  of when a new instance is created?
- **Comparison** — In a web request, what does "scoped" actually scope to (the HTTP request)?
- **Scenario** — Your service is holding state between requests that it shouldn't be — which DI
  lifetime would you investigate first, and why?

---

## 3. ASP.NET Core Request Pipeline

### Middleware
- **Core concept** — What is middleware, and how does it actually work (the "chain of
  responsibility" shape — each one calling `next()`)?
- **Understanding** — `Use` vs. `Run` vs. `Map` — what's different about each when registering
  middleware?
- **Pitfall** — Middleware order matters — give a concrete example of two middlewares whose
  order changes behavior (e.g. exception handling registered *after* something that can throw
  won't catch it).
- **Scenario** — Write a custom middleware that logs request duration — what does it need to do
  before and after calling `next()`?

### Authentication vs. Authorization (as pipeline stages)
- **Core concept** — What's the actual difference between the two?
- **Understanding** — Where do they sit in the pipeline relative to routing, and why does that
  order matter?

### Routing
- **Core concept** — What is endpoint routing, and how is it different from the older
  routing-inside-MVC model?
- **Comparison** — Conventional routing vs. attribute routing.

### Model Binding & Validation
- **Core concept** — What is model binding — how does a raw HTTP request become a strongly
  typed C# parameter?
- **Understanding** — How does model validation (`[Required]`, `ModelState.IsValid`) actually
  get triggered, and what happens if you forget to check it?

### Filters
- **Core concept** — What is a filter in ASP.NET Core?

### Global Exception Handling, CORS, HTTPS, Logging
- **Core concept** — What's the standard way to handle unhandled exceptions globally instead of
  per-controller try/catch?
- **Core concept** — What is CORS actually protecting against, and what does enabling it do?
- **Understanding** — Where does HTTPS redirection/enforcement fit in the pipeline?
- **Core concept** — How does logging plug into the pipeline?

---

## 4. MVC

### What Is MVC
- **Core concept** — What are Model, View, and Controller, and what's each one's actual job?
- **Understanding** — Walk through what happens end-to-end when an MVC request comes in
  (routing → controller → action → view).
- **Comparison** — Controller vs. ViewModel — why do you usually need both?

### `ViewBag` vs. `ViewData` vs. `TempData`
- **Core concept** — What's the difference between the three?
- **Pitfall** — `TempData` surviving exactly one redirect and then being gone — a common source
  of "why did this disappear" bugs.

### Razor & Routing
- **Core concept** — What is Razor syntax actually doing (mixing C# and HTML)?
- **Comparison** — Attribute routing vs. conventional routing in an MVC controller.

### MVC-Specific Filters
- **Comparison** — Action filters vs. authorization filters vs. exception filters — what's each
  one's job?
- **Understanding** — What is the filter execution order in the MVC pipeline?
- **Understanding** — What's a global filter, vs. one applied to a single controller/action?

### Views, Layouts & Organization
- **Core concept** — What's a partial view for, vs. a full view with a layout?
- **Understanding** — What are Areas, and when does a project actually need them?

### Model Binding Internals
- **Understanding** — How does model binding actually work — what sources does it pull from
  (route values, query string, form body, headers), and in what priority?
- **Scenario** — You need a custom model binder — what's a real case where the default binder
  can't do what you need?

### MVC vs. Web API vs. Razor Pages
- **Comparison** — When would you reach for MVC vs. a pure Web API controller vs. Razor Pages?
- **Scenario** — Performance considerations for an MVC app under load — where would you look
  first?

---

## 5. Configuration & Options

### Configuration Sources
- **Core concept** — Where does ASP.NET Core configuration actually come from (appsettings.json,
  environment variables, command line, user secrets), and what's the override order?
- **Understanding** — What does the `IOptions<T>` pattern give you over just reading
  `IConfiguration` directly everywhere?

---

## 6. Authentication & Authorization

### Authentication Schemes
- **Core concept** — What's a cookie-based auth flow vs. a token-based (JWT) flow, at a high
  level?
- **Understanding** — What does `[Authorize]` actually check, and where does that check happen
  in the pipeline?

### Authorization Policies & Claims
- **Core concept** — What's the difference between role-based and policy-based (claims-based)
  authorization?

---

## 7. Error Handling

### Global Exception Handling
- **Core concept** — What's the standard pattern for turning an unhandled exception into a
  clean API/HTTP response instead of a stack trace?
- **Comparison** — Developer exception page vs. production error handling — what changes, and
  why must that differ by environment?

---

## 8. Hosting

### Kestrel & Reverse Proxies
- **Core concept** — Is Kestrel meant to be exposed directly to the internet, or sit behind
  something (IIS, Nginx, a cloud load balancer)?
- **Understanding** — What does a reverse proxy add that Kestrel alone doesn't handle well?

### The Generic Host & Application Lifetime
- **Understanding** — What are the app lifetime events, and when would you hook into each?

---

## Coverage note for Phase 2

All eight subsections from the user's original breakdown are represented, with MVC given the
same treatment as the rest — grouped, not foldered. Kept close to the source list; no invented
topics beyond it.
