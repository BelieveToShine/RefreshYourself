/* RefreshYourself — tier side-navigation data. See docs/rules/tier-navigation.md.
   One entry per WRITTEN tier, keyed "<track-folder>/<tier-folder>" (matches each topic page's
   data-tier-key attribute). Loaded as a plain <script src> (not fetch()), same reason as
   assets/search-index.js: works from file:// and https:// alike.

   Update this file whenever a topic is added/renamed/reordered in a tier that already has a
   sidebar — it is the single source of truth the sidebar is built from. Keep "short" labels
   short (fits one line in a 232px rail); the full title still shows on hover via "title"+"tail".

   Each item's `priority` is one of "🔥" (Must Know) / "⭐" (Should Know) / "🧠" (Deep Dive) — see
   docs/rules/interview-depth-and-priority.md. This replaced the old boolean `hot` flag
   2026-09-16 so the sidebar's dot matches the same 3-state system used everywhere else on the
   site, instead of being stuck on a binary hot/normal distinction. */
window.NAV_INDEX = {
  "csharp/basic": {
    track: "C#",
    trackIcon: "🎵",
    tier: "Basic",
    groups: [
      {
        label: "Questions 1–10",
        items: [
          { n: 1,  file: "1.html",  short: "Value vs. Reference",     title: "Value Types vs. Reference Types",       tail: "what's actually being copied?", priority: "🔥" },
          { n: 2,  file: "2.html",  short: "Boxing & Unboxing",        title: "Boxing & Unboxing",                     tail: "what happens when a value type becomes an object.", priority: "🔥" },
          { n: 3,  file: "3.html",  short: "== vs. Equals()",          title: "== vs. .Equals() vs. ReferenceEquals()", tail: "three ways to compare.", priority: "🔥" },
          { n: 4,  file: "4.html",  short: "try/catch/finally",        title: "try / catch / finally",                 tail: "how exception handling actually flows.", priority: "🔥" },
          { n: 5,  file: "5.html",  short: "const/readonly/static",    title: "const vs. readonly vs. static",         tail: "three ways to \"fix\" a value.", priority: "🔥" },
          { n: 6,  file: "6.html",  short: "Access Modifiers",         title: "Access Modifiers",                      tail: "public, private, protected, internal.", priority: "🔥" },
          { n: 7,  file: "7.html",  short: "Array vs. List<T>",        title: "Array vs. List<T>",                     tail: "a fixed shelf vs. a growable box.", priority: "🔥" },
          { n: 8,  file: "8.html",  short: "ref/out/in",               title: "ref vs. out vs. in",                    tail: "passing by reference, three ways.", priority: "🔥" },
          { n: 9,  file: "9.html",  short: "String vs. StringBuilder", title: "String vs. StringBuilder",              tail: "why one is slow in a loop.", priority: "⭐" },
          { n: 10, file: "10.html", short: "Nullable Types",           title: "Nullable Types (int?)",                 tail: "letting a value type be \"nothing.\"", priority: "⭐" }
        ]
      },
      {
        label: "Questions 11–18",
        items: [
          { n: 11, file: "11.html", short: "var/dynamic/object",      title: "var vs. dynamic vs. object",       tail: "three ways to not name the type.", priority: "⭐" },
          { n: 12, file: "12.html", short: "Enums",                   title: "Enums",                            tail: "naming a fixed set of options.", priority: "⭐" },
          { n: 13, file: "13.html", short: "?: and ??",               title: "?: and ??",                        tail: "the shorthand operators everyone uses, few explain.", priority: "⭐" },
          { n: 14, file: "14.html", short: "Namespaces & using",      title: "Namespaces & using",               tail: "organizing and importing code.", priority: "⭐" },
          { n: 15, file: "15.html", short: "is / as / casting",       title: "is / as / Explicit Casting",       tail: "safe conversion vs. an exception waiting to happen.", priority: "🔥" },
          { n: 16, file: "16.html", short: "params & named args",     title: "params, Optional & Named Parameters", tail: "three ways to make a method call easier to write.", priority: "⭐" },
          { n: 17, file: "17.html", short: "Tuples & deconstruction", title: "Tuples & Deconstruction",          tail: "a quick, private grouping of values.", priority: "⭐" },
          { n: 18, file: "18.html", short: "Indexers",                title: "Indexers",                         tail: "letting a type support obj[i] syntax.", priority: "🧠" }
        ]
      }
    ]
  },
  "csharp/intermediate": {
    track: "C#",
    trackIcon: "🎵",
    tier: "Intermediate",
    groups: [
      {
        label: "Questions 1–10",
        items: [
          { n: 1,  file: "1.html",  short: "Generics",                title: "Generics",                          tail: "why they exist, and what a constraint actually does.", priority: "🔥" },
          { n: 2,  file: "2.html",  short: "IEnumerable/ICollection/IList", title: "IEnumerable<T> vs. ICollection<T> vs. IList<T>", tail: "what each interface adds over the last.", priority: "⭐" },
          { n: 3,  file: "3.html",  short: "Extension methods",       title: "Extension Methods",                 tail: "how the compiler resolves x.Foo() into Class.Foo(x).", priority: "⭐" },
          { n: 4,  file: "4.html",  short: "Operator overloading",    title: "Operator Overloading",              tail: "a realistic case for it, and what breaks if you do it wrong.", priority: "🧠" },
          { n: 5,  file: "5.html",  short: "Exception filters",       title: "Exception Filters & Custom Exceptions", tail: "catch (Ex e) when (...), and when a custom type earns its place.", priority: "⭐" },
          { n: 6,  file: "6.html",  short: "Equals()/GetHashCode()",  title: "Implementing Equals() and GetHashCode() Correctly", tail: "the contract that breaks silently if you get it wrong.", priority: "🔥" },
          { n: 7,  file: "7.html",  short: "IEquatable<T>",           title: "IEquatable<T>",                     tail: "the typed Equals() that skips boxing and casting.", priority: "⭐" },
          { n: 8,  file: "8.html",  short: "Records vs. classes",     title: "Records vs. Classes",               tail: "value-based equality, without writing any code for it.", priority: "🔥" },
          { n: 9,  file: "9.html",  short: "Pattern matching",        title: "Pattern Matching",                  tail: "switch statement vs. switch expression.", priority: "⭐" },
          { n: 10, file: "10.html", short: "Nullable reference types", title: "Nullable Reference Types (C# 8+)", tail: "a compile-time hint, not a runtime check.", priority: "⭐" }
        ]
      },
      {
        label: "Questions 11–18",
        items: [
          { n: 11, file: "11.html", short: "init / required",         title: "init / required Members",           tail: "set once at construction, enforced how and when.", priority: "⭐" },
          { n: 12, file: "12.html", short: "Immutable objects",       title: "Immutable Objects",                 tail: "what actually makes an object immutable.", priority: "⭐" },
          { n: 13, file: "13.html", short: "LINQ deferred execution", title: "LINQ — Deferred vs. Immediate Execution", tail: "when does a LINQ query actually run?", priority: "🔥" },
          { n: 14, file: "14.html", short: "yield return & iterators", title: "yield return & Custom Iterators",  tail: "the compiler rewrites this into a state machine.", priority: "⭐" },
          { n: 15, file: "15.html", short: "async/await — basics",    title: "async / await — the Basics",        tail: "what it actually does, and does it create a thread?", priority: "🔥" },
          { n: 16, file: "16.html", short: "Task/Thread/ThreadPool",  title: "Task vs. Thread vs. ThreadPool",    tail: "the actual relationship between the three.", priority: "🔥" },
          { n: 17, file: "17.html", short: "CancellationToken",       title: "Cancellation (CancellationToken)",  tail: "cooperative cancellation — nothing forces it to stop.", priority: "⭐" },
          { n: 18, file: "18.html", short: "IDisposable & using",     title: "IDisposable & using — the Basics",  tail: "a reliable way to release a resource, even on an exception.", priority: "🔥" }
        ]
      }
    ]
  },
  "csharp/advanced": {
    track: "C#",
    trackIcon: "🎵",
    tier: "Advanced",
    groups: [
      {
        label: "Questions 1–10",
        items: [
          { n: 1,  file: "1.html",  short: "async/await internals",   title: "async/await Internals",             tail: "SynchronizationContext, ConfigureAwait, and sync-over-async deadlocks.", priority: "🔥" },
          { n: 2,  file: "2.html",  short: "lock/Monitor & races",    title: "lock / Monitor & Race Conditions",  tail: "what lock actually does under the hood.", priority: "🔥" },
          { n: 3,  file: "3.html",  short: "Dispose pattern",         title: "The Dispose Pattern & Finalizers",  tail: "deterministic cleanup vs. the GC's last-resort safety net.", priority: "⭐" },
          { n: 4,  file: "4.html",  short: "IEnumerable vs IQueryable", title: "IEnumerable<T> vs. IQueryable<T>", tail: "where a LINQ query actually executes.", priority: "⭐" },
          { n: 5,  file: "5.html",  short: "GC generations & LOH",    title: "Garbage Collection — Generations & the Large Object Heap", tail: "why the GC checks gen 0 far more often than gen 2.", priority: "🔥" },
          { n: 6,  file: "6.html",  short: "Span<T> & Memory<T>",     title: "Span<T> & Memory<T>",               tail: "a zero-allocation view over existing memory.", priority: "⭐" },
          { n: 7,  file: "7.html",  short: "volatile & Interlocked",  title: "volatile & Interlocked",            tail: "what volatile actually guarantees (and doesn't).", priority: "⭐" },
          { n: 8,  file: "8.html",  short: "Concurrent collections",  title: "Concurrent Collections",            tail: "why ConcurrentDictionary beats locking a regular one.", priority: "⭐" },
          { n: 9,  file: "9.html",  short: "Unsafe code & pointers",  title: "Unsafe Code & Pointers",            tail: "what the unsafe keyword actually unlocks.", priority: "🧠" },
          { n: 10, file: "10.html", short: "Reflection",              title: "Reflection",                        tail: "inspecting types and members at runtime.", priority: "⭐" }
        ]
      },
      {
        label: "Questions 11–13",
        items: [
          { n: 11, file: "11.html", short: "Attributes",              title: "Attributes",                        tail: "declarative metadata, read back via reflection.", priority: "🧠" },
          { n: 12, file: "12.html", short: "Expression Trees",        title: "Expression Trees",                  tail: "code as data — why EF Core needs this, not a Func.", priority: "🧠" },
          { n: 13, file: "13.html", short: "Performance checklist",   title: "C# Performance Checklist",          tail: "a hot path is under GC pressure — what do you check first?", priority: "⭐" }
        ]
      }
    ]
  },
  "oops/basic": {
    track: "OOP",
    trackIcon: "🧩",
    tier: "Basic",
    groups: [
      {
        label: "Questions 1–4",
        items: [
          { n: 1, file: "1.html", short: "Encapsulation vs. Abstraction", title: "Encapsulation vs. Abstraction", tail: "hides state vs. hides complexity.", priority: "🔥" },
          { n: 2, file: "2.html", short: "Inheritance vs. Composition",   title: "Inheritance vs. Composition",   tail: "is-a vs. has-a — how do you decide?", priority: "🔥" },
          { n: 3, file: "3.html", short: "Polymorphism",                  title: "Polymorphism",                  tail: "compile-time vs. runtime, overload vs. override.", priority: "🔥" },
          { n: 4, file: "4.html", short: "Single Responsibility",         title: "Single Responsibility Principle", tail: "\"one reason to change,\" not \"one method.\"", priority: "🔥" }
        ]
      }
    ]
  },
  "oops/intermediate": {
    track: "OOP",
    trackIcon: "🧩",
    tier: "Intermediate",
    groups: [
      {
        label: "Questions 1–8",
        items: [
          { n: 1, file: "1.html", short: "Interface vs. Abstract Class", title: "Interface vs. Abstract Class",   tail: "when to reach for each.", priority: "🔥" },
          { n: 2, file: "2.html", short: "Open/Closed Principle",        title: "Open/Closed Principle",          tail: "the switch statement that keeps growing.", priority: "🔥" },
          { n: 3, file: "3.html", short: "Liskov Substitution",          title: "Liskov Substitution Principle",  tail: "the square-extends-rectangle trap.", priority: "🔥" },
          { n: 4, file: "4.html", short: "Interface Segregation",        title: "Interface Segregation Principle", tail: "what a \"fat interface\" costs its implementers.", priority: "🔥" },
          { n: 5, file: "5.html", short: "Dependency Inversion",         title: "Dependency Inversion Principle", tail: "depend on abstractions, not concretions.", priority: "🔥" },
          { n: 6, file: "6.html", short: "Strategy vs. Conditional",     title: "Strategy Pattern vs. Conditional Logic", tail: "the payment-processor example.", priority: "⭐" },
          { n: 7, file: "7.html", short: "Factory vs. DI",               title: "Factory vs. Dependency Injection", tail: "when you need one in addition to the other.", priority: "⭐" },
          { n: 8, file: "8.html", short: "Coupling vs. Cohesion",        title: "Coupling vs. Cohesion",          tail: "and what actually makes code maintainable.", priority: "⭐" }
        ]
      }
    ]
  },
  "oops/advanced": {
    track: "OOP",
    trackIcon: "🧩",
    tier: "Advanced",
    groups: [
      {
        label: "Questions 1–3",
        items: [
          { n: 1, file: "1.html", short: "SOLID as a Whole",         title: "SOLID as a Whole",                tail: "applying all five to one real service.", priority: "⭐" },
          { n: 2, file: "2.html", short: "Composition over Inheritance", title: "Why Prefer Composition Over Inheritance", tail: "the fragile base class problem.", priority: "⭐" },
          { n: 3, file: "3.html", short: "Refactoring a Coupled Service", title: "Refactoring a Tightly Coupled Service", tail: "one method, three hidden dependencies.", priority: "🧠" }
        ]
      }
    ]
  },
  "dotnet/basic": {
    track: ".NET",
    trackIcon: "🧱",
    tier: "Basic",
    groups: [
      {
        label: "Questions 1–6",
        items: [
          { n: 1, file: "1.html", short: ".NET vs. .NET Framework", title: ".NET vs. .NET Framework", tail: "the actual relationship between the two.", priority: "🔥" },
          { n: 2, file: "2.html", short: "CLR, BCL & Managed Code", title: "CLR, BCL & Managed Code", tail: "what \"managed\" actually means.", priority: "🔥" },
          { n: 3, file: "3.html", short: "SDK vs. Runtime & NuGet", title: "SDK vs. Runtime, .csproj & NuGet", tail: "what each piece of tooling actually does.", priority: "⭐" },
          { n: 4, file: "4.html", short: "What Is MVC",             title: "What Is MVC",             tail: "Model, View, Controller — and why you usually need a ViewModel too.", priority: "🔥" },
          { n: 5, file: "5.html", short: "Filters, CORS & Logging", title: "Filters, CORS, HTTPS & Logging", tail: "four pipeline concerns worth knowing by name.", priority: "⭐" },
          { n: 6, file: "6.html", short: "Unit Testing Fundamentals", title: "Unit Testing Fundamentals", tail: "AAA, xUnit/NUnit/MSTest, and what actually makes it a \"unit\" test.", priority: "🔥" }
        ]
      }
    ]
  },
  "dotnet/intermediate": {
    track: ".NET",
    trackIcon: "🧱",
    tier: "Intermediate",
    groups: [
      {
        label: "Questions 1–10",
        items: [
          { n: 1,  file: "1.html",  short: "What Happens at Startup",  title: "What Happens When a .NET App Starts", tail: "Kestrel, the Generic Host, and your first line of code.", priority: "🔥" },
          { n: 2,  file: "2.html",  short: "The Built-in DI Container", title: "The Built-in DI Container", tail: "why ASP.NET Core ships with one.", priority: "🔥" },
          { n: 3,  file: "3.html",  short: "Service Lifetimes",         title: "Service Lifetimes", tail: "Singleton vs. Scoped vs. Transient.", priority: "🔥" },
          { n: 4,  file: "4.html",  short: "Middleware",                title: "Middleware", tail: "Use/Run/Map, and why order matters.", priority: "🔥" },
          { n: 5,  file: "5.html",  short: "AuthN vs. AuthZ (pipeline)", title: "Authentication vs. Authorization", tail: "as pipeline stages — where each check happens.", priority: "🔥" },
          { n: 6,  file: "6.html",  short: "Routing",                   title: "Routing", tail: "endpoint routing, conventional vs. attribute.", priority: "⭐" },
          { n: 7,  file: "7.html",  short: "Model Binding & Validation", title: "Model Binding & Validation", tail: "turning a raw request into a typed parameter.", priority: "⭐" },
          { n: 8,  file: "8.html",  short: "ViewBag/ViewData/TempData",  title: "ViewBag vs. ViewData vs. TempData", tail: "and why TempData disappears after one redirect.", priority: "⭐" },
          { n: 9,  file: "9.html",  short: "Razor & Routing",            title: "Razor & Routing", tail: "mixing C# and HTML, attribute vs. conventional routing.", priority: "⭐" },
          { n: 10, file: "10.html", short: "MVC-Specific Filters",       title: "MVC-Specific Filters", tail: "action vs. authorization vs. exception, and execution order.", priority: "⭐" }
        ]
      },
      {
        label: "Questions 11–17",
        items: [
          { n: 11, file: "11.html", short: "Views, Layouts & Areas",    title: "Views, Layouts & Organization", tail: "partials, and when a project needs Areas.", priority: "⭐" },
          { n: 12, file: "12.html", short: "Configuration Sources",     title: "Configuration Sources", tail: "appsettings, env vars, and the override order.", priority: "🔥" },
          { n: 13, file: "13.html", short: "Authentication Schemes",    title: "Authentication Schemes", tail: "cookie-based vs. token-based, at a high level.", priority: "🔥" },
          { n: 14, file: "14.html", short: "AuthZ Policies & Claims",   title: "Authorization Policies & Claims", tail: "role-based vs. policy-based.", priority: "⭐" },
          { n: 15, file: "15.html", short: "Global Exception Handling", title: "Global Exception Handling", tail: "the standard pattern, and why dev vs. prod must differ.", priority: "🔥" },
          { n: 16, file: "16.html", short: "Generic Host & Lifetime",   title: "The Generic Host & Application Lifetime", tail: "the lifecycle events, and when to hook into each.", priority: "⭐" },
          { n: 17, file: "17.html", short: "Mocking & Testing ASP.NET Core", title: "Mocking & Testing ASP.NET Core Components", tail: "Moq, testing a controller, and WebApplicationFactory.", priority: "🔥" }
        ]
      }
    ]
  },
  "dotnet/advanced": {
    track: ".NET",
    trackIcon: "🧱",
    tier: "Advanced",
    groups: [
      {
        label: "Questions 1–2",
        items: [
          { n: 1, file: "1.html", short: "Kestrel & Reverse Proxies", title: "Kestrel & Reverse Proxies", tail: "why Kestrel isn't meant to face the internet alone.", priority: "⭐" },
          { n: 2, file: "2.html", short: "Model Binding Internals",   title: "Model Binding Internals & MVC vs. Web API vs. Razor Pages", tail: "binder resolution order, and picking the right framework.", priority: "🧠" }
        ]
      }
    ]
  },
  "webapi/basic": {
    track: "Web API",
    trackIcon: "🔌",
    tier: "Basic",
    groups: [
      {
        label: "Questions 1–5",
        items: [
          { n: 1, file: "1.html", short: "What Is REST",        title: "What Is REST", tail: "the constraints that actually define it.", priority: "🔥" },
          { n: 2, file: "2.html", short: "Idempotency",          title: "Idempotency", tail: "and which verbs are supposed to guarantee it.", priority: "🔥" },
          { n: 3, file: "3.html", short: "CORS",                  title: "CORS", tail: "the API-consumer angle.", priority: "⭐" },
          { n: 4, file: "4.html", short: "Versioning Strategies", title: "Versioning Strategies", tail: "URL segment, header, or query string.", priority: "🔥" },
          { n: 5, file: "5.html", short: "Rate Limiting",         title: "Rate Limiting", tail: "what it's actually protecting against.", priority: "⭐" }
        ]
      }
    ]
  },
  "webapi/intermediate": {
    track: "Web API",
    trackIcon: "🔌",
    tier: "Intermediate",
    groups: [
      {
        label: "Questions 1–10",
        items: [
          { n: 1,  file: "1.html",  short: "HTTP Verbs",              title: "HTTP Verbs — Idempotency & Safety", tail: "idempotency & safety, verb by verb.", priority: "🔥" },
          { n: 2,  file: "2.html",  short: "HTTP Status Codes",       title: "HTTP Status Codes", tail: "200 vs. 201 vs. 204, 400 vs. 422, 401 vs. 403.", priority: "🔥" },
          { n: 3,  file: "3.html",  short: "Route vs. Query Params",  title: "Route Parameters vs. Query Parameters", tail: "when a value belongs in each.", priority: "⭐" },
          { n: 4,  file: "4.html",  short: "Body vs. Headers",        title: "Request Body vs. Headers", tail: "what goes where.", priority: "⭐" },
          { n: 5,  file: "5.html",  short: "DTOs",                    title: "DTOs", tail: "why not just return your entity.", priority: "🔥" },
          { n: 6,  file: "6.html",  short: "IActionResult vs. AR<T>", title: "IActionResult vs. ActionResult<T>", tail: "the practical difference.", priority: "⭐" },
          { n: 7,  file: "7.html",  short: "Validation & Swagger",    title: "Model Validation & Swagger/OpenAPI", tail: "what each actually gives you.", priority: "⭐" },
          { n: 8,  file: "8.html",  short: "DTO vs. Entity Mapping",  title: "DTO vs. Entity Mapping", tail: "whose job is it, and where should it live.", priority: "⭐" },
          { n: 9,  file: "9.html",  short: "JWT & Refresh Tokens",    title: "JWT & Refresh Tokens", tail: "what's actually inside one, and why not just make it long-lived.", priority: "🔥" },
          { n: 10, file: "10.html", short: "Backward Compatibility",  title: "Backward Compatibility", tail: "evolving a response shape without breaking existing clients.", priority: "🔥" }
        ]
      },
      {
        label: "Questions 11–14",
        items: [
          { n: 11, file: "11.html", short: "Caching Strategies",      title: "Caching Strategies", tail: "response caching vs. a distributed cache.", priority: "⭐" },
          { n: 12, file: "12.html", short: "Async APIs & Security",   title: "Async APIs & API Security", tail: "beyond async/await, and beyond authentication.", priority: "⭐" },
          { n: 13, file: "13.html", short: "Pagination",              title: "Pagination", tail: "offset vs. cursor-based.", priority: "🔥" },
          { n: 14, file: "14.html", short: "Sorting & Filtering",     title: "Sorting & Filtering Conventions", tail: "what makes an API predictable to consume.", priority: "⭐" }
        ]
      }
    ]
  },
  "webapi/advanced": {
    track: "Web API",
    trackIcon: "🔌",
    tier: "Advanced",
    groups: [
      {
        label: "Questions 1–6",
        items: [
          { n: 1, file: "1.html", short: "Multiple Client Types", title: "Designing for Multiple Client Types", tail: "web, mobile, and a partner integration, all well-served.", priority: "⭐" },
          { n: 2, file: "2.html", short: "Retry vs. Resilience",  title: "Retry vs. Resilience", tail: "circuit breaking, timeouts, and fallback.", priority: "🔥" },
          { n: 3, file: "3.html", short: "Distributed Systems",   title: "Distributed Systems Considerations", tail: "what changes once there's more than one instance.", priority: "🔥" },
          { n: 4, file: "4.html", short: "Large Payloads",        title: "Large Payloads", tail: "streaming without blocking a thread or exhausting memory.", priority: "🧠" },
          { n: 5, file: "5.html", short: "Traffic Spike Scenario", title: "Traffic Spike Scenario", tail: "10x traffic, what do you check first?", priority: "🔥" },
          { n: 6, file: "6.html", short: "500 Errors in Prod",    title: "500-Errors-in-Production Scenario", tail: "how you'd actually investigate.", priority: "⭐" }
        ]
      }
    ]
  },
  "efcore/basic": {
    track: "EF Core",
    trackIcon: "🗄️",
    tier: "Basic",
    groups: [
      {
        label: "Questions 1–7",
        items: [
          { n: 1, file: "1.html", short: "What Is EF Core",   title: "What Is EF Core", tail: "and what it saves you over raw SQL.", priority: "🔥" },
          { n: 2, file: "2.html", short: "DbContext & DbSet",  title: "DbContext & DbSet", tail: "what each one actually is.", priority: "🔥" },
          { n: 3, file: "3.html", short: "Migrations Basics",  title: "Migrations & SaveChanges() — the Basics", tail: "what a migration is, what SaveChanges() does.", priority: "🔥" },
          { n: 4, file: "4.html", short: "Keys & Relationships", title: "Primary Keys & Relationships by Convention", tail: "what EF Core infers without being told.", priority: "⭐" },
          { n: 5, file: "5.html", short: "The N+1 Problem",   title: "The N+1 Problem", tail: "how it shows up with EF Core specifically.", priority: "🔥" },
          { n: 6, file: "6.html", short: "Projection",         title: "Projection — Selecting into a DTO", tail: "instead of the entity.", priority: "🔥" },
          { n: 7, file: "7.html", short: "Configuring Relationships", title: "Configuring Relationships", tail: "one-to-many and many-to-many.", priority: "⭐" }
        ]
      }
    ]
  },
  "efcore/intermediate": {
    track: "EF Core",
    trackIcon: "🗄️",
    tier: "Intermediate",
    groups: [
      {
        label: "Questions 1–8",
        items: [
          { n: 1, file: "1.html", short: "LINQ → SQL Translation", title: "LINQ → SQL Translation & Inspecting Generated SQL", tail: "and how to inspect the SQL it actually generates.", priority: "⭐" },
          { n: 2, file: "2.html", short: "Tracking vs. AsNoTracking", title: "Tracking vs. AsNoTracking()", tail: "what each costs and saves.", priority: "🔥" },
          { n: 3, file: "3.html", short: "Change Tracker",   title: "The Change Tracker & SaveChanges()", tail: "how it knows what to write.", priority: "⭐" },
          { n: 4, file: "4.html", short: "Eager/Explicit/Lazy", title: "Eager vs. Explicit vs. Lazy Loading", tail: "what triggers each, and when the query actually runs.", priority: "🔥" },
          { n: 5, file: "5.html", short: "IQueryable vs. IEnumerable", title: "IQueryable<T> vs. IEnumerable<T>", tail: "where the query actually executes.", priority: "🔥" },
          { n: 6, file: "6.html", short: "Fluent API vs. Annotations", title: "Fluent API vs. Data Annotations", tail: "when you'd reach for one over the other.", priority: "⭐" },
          { n: 7, file: "7.html", short: "Migrations, Mechanically", title: "Migrations, Mechanically", tail: "what files dotnet ef migrations add actually produces.", priority: "⭐" },
          { n: 8, file: "8.html", short: "Transactions & SaveChanges", title: "Transactions Around SaveChanges()", tail: "what EF Core wraps by default.", priority: "⭐" }
        ]
      }
    ]
  },
  "efcore/advanced": {
    track: "EF Core",
    trackIcon: "🗄️",
    tier: "Advanced",
    groups: [
      {
        label: "Questions 1–6",
        items: [
          { n: 1, file: "1.html", short: "Compiled Queries",  title: "Compiled Queries", tail: "caching the query plan itself.", priority: "🧠" },
          { n: 2, file: "2.html", short: "Query Splitting",   title: "Query Splitting", tail: "avoiding the cartesian explosion from multiple Includes.", priority: "🧠" },
          { n: 3, file: "3.html", short: "Optimistic Concurrency", title: "Optimistic Concurrency & Row Versioning", tail: "how EF Core detects a conflicting update.", priority: "🔥" },
          { n: 4, file: "4.html", short: "Beyond N+1",        title: "Beyond N+1 — Common Performance Pitfalls", tail: "over-fetching, tracking overhead, missing indexes.", priority: "🔥" },
          { n: 5, file: "5.html", short: "Bulk Operations",   title: "Bulk Operations", tail: "why SaveChanges() doesn't scale to a big batch.", priority: "⭐" },
          { n: 6, file: "6.html", short: "Connection Management", title: "Connection Management", tail: "one connection per query, per DbContext, or something else.", priority: "⭐" }
        ]
      }
    ]
  },
  "sql/basic": {
    track: "SQL",
    trackIcon: "🗃️",
    tier: "Basic",
    groups: [
      {
        label: "Questions 1–10",
        hot: 7,
        items: [
          { n: 1, file: "1.html", short: "PK vs FK", title: "Primary Key vs. Foreign Key", tail: "what each one actually enforces.", priority: "🔥" },
          { n: 2, file: "2.html", short: "WHERE vs HAVING", title: "WHERE vs. HAVING", tail: "why one can filter aggregates and the other can't.", priority: "🔥" },
          { n: 3, file: "3.html", short: "INNER vs LEFT JOIN", title: "INNER JOIN vs. LEFT JOIN", tail: "what changes about unmatched rows.", priority: "🔥" },
          { n: 4, file: "4.html", short: "GROUP BY", title: "GROUP BY", tail: "what it actually does to the rows returned.", priority: "🔥" },
          { n: 5, file: "5.html", short: "NULL Comparisons", title: "NULL in Comparisons", tail: "why = NULL never matches.", priority: "🔥" },
          { n: 6, file: "6.html", short: "Aggregate Functions", title: "Aggregate Functions", tail: "and how each one treats NULL.", priority: "🔥" },
          { n: 7, file: "7.html", short: "ACID", title: "ACID", tail: "the four promises a transaction makes.", priority: "🔥" },
          { n: 8, file: "8.html", short: "ORDER BY", title: "ORDER BY", tail: "the one guarantee a plain SELECT doesn't give.", priority: "⭐" },
          { n: 9, file: "9.html", short: "DISTINCT", title: "DISTINCT", tail: "what it actually costs on a large result set.", priority: "⭐" },
          { n: 10, file: "10.html", short: "Stored Procedures", title: "Stored Procedures", tail: "and a real reason to reach for one.", priority: "⭐" }
        ]
      },
      {
        label: "Questions 11–11",
        items: [
          { n: 11, file: "11.html", short: "Views", title: "Views", tail: "how it differs from just saving a query as text.", priority: "⭐" }
        ]
      },
      {
        label: "Questions 12–15",
        hot: 2,
        items: [
          { n: 12, file: "12.html", short: "UNION vs UNION ALL", title: "UNION vs. UNION ALL", tail: "and why one of them is slower.", priority: "🔥" },
          { n: 13, file: "13.html", short: "Logical Query Order", title: "Logical Query Execution Order", tail: "the order clauses actually run in, not the order you type them.", priority: "🔥" },
          { n: 14, file: "14.html", short: "FK Referential Actions", title: "Foreign Key Referential Actions", tail: "CASCADE, SET NULL, and RESTRICT.", priority: "⭐" },
          { n: 15, file: "15.html", short: "Transaction Control", title: "Transaction Control Mechanics", tail: "what BEGIN/COMMIT/ROLLBACK actually do.", priority: "⭐" }
        ]
      }
    ]
  },
  "sql/intermediate": {
    track: "SQL",
    trackIcon: "🗃️",
    tier: "Intermediate",
    groups: [
      {
        label: "Questions 1–10",
        hot: 5,
        items: [
          { n: 1, file: "1.html", short: "Subqueries vs Joins", title: "Subqueries vs. Joins", tail: "and when to reach for one instead of a join.", priority: "🔥" },
          { n: 2, file: "2.html", short: "CTEs", title: "CTEs (Common Table Expressions)", tail: "why use one over a subquery.", priority: "🔥" },
          { n: 3, file: "3.html", short: "Window Functions", title: "Window Functions", tail: "seeing other rows without collapsing the result.", priority: "🔥" },
          { n: 4, file: "4.html", short: "Clustered vs Non-Clustered", title: "Clustered vs. Non-Clustered Index", tail: "what's physically different.", priority: "🔥" },
          { n: 5, file: "5.html", short: "Normalization", title: "Normalization vs. Denormalization", tail: "the actual trade-off.", priority: "🔥" },
          { n: 6, file: "6.html", short: "Ranking Functions", title: "ROW_NUMBER() vs. RANK() vs. DENSE_RANK()", tail: "how ties are handled.", priority: "⭐" },
          { n: 7, file: "7.html", short: "Covering Index", title: "Covering Index", tail: "what makes an index \"covering\".", priority: "⭐" },
          { n: 8, file: "8.html", short: "Composite Index", title: "Composite Index", tail: "and why column order matters.", priority: "⭐" },
          { n: 9, file: "9.html", short: "Pagination & OFFSET", title: "Pagination Strategies", tail: "and what breaks with a large OFFSET.", priority: "⭐" },
          { n: 10, file: "10.html", short: "SARGable Queries", title: "SARGable Queries", tail: "what makes a predicate able to use an index.", priority: "🧠" }
        ]
      },
      {
        label: "Questions 11–16",
        hot: 1,
        items: [
          { n: 11, file: "11.html", short: "EXISTS vs IN vs JOIN", title: "EXISTS vs. IN vs. JOIN", tail: "how NULLs and duplicates change which one is safe.", priority: "⭐" },
          { n: 12, file: "12.html", short: "Recursive CTEs", title: "Recursive CTEs", tail: "walking a hierarchy without a loop in application code.", priority: "⭐" },
          { n: 13, file: "13.html", short: "Temp Tables vs Table Vars vs CTEs", title: "Temp Tables vs. Table Variables vs. CTEs", tail: "scope, statistics, and when each one is the right call.", priority: "⭐" },
          { n: 14, file: "14.html", short: "Index Seek vs Scan", title: "Index Seek vs. Scan vs. Table Scan", tail: "what the execution plan is actually telling you.", priority: "🔥" },
          { n: 15, file: "15.html", short: "Materialized/Indexed Views", title: "Materialized/Indexed Views vs. Regular Views", tail: "and the staleness trade-off you're accepting.", priority: "⭐" },
          { n: 16, file: "16.html", short: "Triggers", title: "Triggers", tail: "and why they're a common source of hidden side effects.", priority: "⭐" }
        ]
      }
    ]
  },
  "sql/advanced": {
    track: "SQL",
    trackIcon: "🗃️",
    tier: "Advanced",
    groups: [
      {
        label: "Questions 1–6",
        hot: 4,
        items: [
          { n: 1, file: "1.html", short: "Isolation Levels", title: "Isolation Levels", tail: "dirty read, non-repeatable read, phantom read.", priority: "🔥" },
          { n: 2, file: "2.html", short: "Deadlock vs Blocking", title: "Deadlock vs. Blocking", tail: "the actual difference.", priority: "🔥" },
          { n: 3, file: "3.html", short: "Execution Plans", title: "Execution Plans", tail: "what reading one actually tells you.", priority: "🔥" },
          { n: 4, file: "4.html", short: "Perf Regression", title: "Performance Degraded Over Time", tail: "how you'd investigate.", priority: "🔥" },
          { n: 5, file: "5.html", short: "Locking", title: "Locking", tail: "mechanically, and how it leads to blocking.", priority: "⭐" },
          { n: 6, file: "6.html", short: "Optimizer & Indexes", title: "How the Optimizer Picks an Index", tail: "or decides not to.", priority: "🧠" }
        ]
      },
      {
        label: "Questions 7–8",
        items: [
          { n: 7, file: "7.html", short: "Bulk Operations", title: "Bulk Operations from the Database's Own Side", tail: "minimal logging and why batch size matters.", priority: "⭐" },
          { n: 8, file: "8.html", short: "Table Partitioning", title: "Table Partitioning", tail: "partition elimination and when it actually pays off.", priority: "🧠" }
        ]
      }
    ]
  },
  "react/basic": {
    track: "React",
    trackIcon: "⚛️",
    tier: "Basic",
    groups: [
      {
        label: "Questions 1–8",
        hot: 6,
        items: [
          { n: 1, file: "1.html", short: "What Is React",           title: "What Is React",                  tail: "a library that lets you describe UI, not command it.", priority: "🔥" },
          { n: 2, file: "2.html", short: "Components & JSX",        title: "Components & JSX",               tail: "what JSX actually compiles into.", priority: "🔥" },
          { n: 3, file: "3.html", short: "Props",                    title: "Props",                          tail: "one-way data flow, and how a child talks back.", priority: "🔥" },
          { n: 4, file: "4.html", short: "State",                    title: "State",                          tail: "why you can't mutate it directly.", priority: "🔥" },
          { n: 5, file: "5.html", short: "Events",                   title: "Events",                         tail: "synthetic events, propagation, and passing handlers correctly.", priority: "⭐" },
          { n: 6, file: "6.html", short: "Conditional Rendering",    title: "Conditional Rendering",          tail: "if/ternary/&&, and the classic && gotcha.", priority: "⭐" },
          { n: 7, file: "7.html", short: "Lists & Keys",             title: "Lists & Keys",                   tail: "why unstable keys break component state.", priority: "🔥" },
          { n: 8, file: "8.html", short: "Hooks — Rules",            title: "Hooks — Rules & Overview",       tail: "why a Hook can never live inside an if.", priority: "🔥" }
        ]
      }
    ]
  },
  "react/intermediate": {
    track: "React",
    trackIcon: "⚛️",
    tier: "Intermediate",
    groups: [
      {
        label: "Questions 1–10",
        hot: 4,
        items: [
          { n: 1,  file: "1.html",  short: "useEffect Basics",          title: "useEffect — Fundamentals & Cleanup", tail: "when it runs, and when cleanup fires.", priority: "🔥" },
          { n: 2,  file: "2.html",  short: "Effect Timing & StrictMode", title: "Effect Timing Variants & StrictMode", tail: "useLayoutEffect, and why effects fire twice in dev.", priority: "⭐" },
          { n: 3,  file: "3.html",  short: "useRef & Callbacks",        title: "useRef & Ref Callbacks",         tail: "a value that survives renders without triggering one.", priority: "⭐" },
          { n: 4,  file: "4.html",  short: "useMemo/useCallback/memo",  title: "useMemo, useCallback & React.memo", tail: "caching, not a guaranteed speedup.", priority: "⭐" },
          { n: 5,  file: "5.html",  short: "Custom Hooks",              title: "Custom Hooks",                   tail: "shared logic, never shared state.", priority: "🔥" },
          { n: 6,  file: "6.html",  short: "Context API",               title: "Context API",                    tail: "skipping prop drilling, not a state library.", priority: "🔥" },
          { n: 7,  file: "7.html",  short: "Component Composition",     title: "Component Communication & Composition", tail: "composition over inheritance, plus Portals.", priority: "⭐" },
          { n: 8,  file: "8.html",  short: "Forms",                     title: "Forms",                          tail: "controlled vs. uncontrolled, and who owns the value.", priority: "⭐" },
          { n: 9,  file: "9.html",  short: "Data Fetching",             title: "Data Fetching",                  tail: "race conditions and requests that outlive the component.", priority: "🔥" },
          { n: 10, file: "10.html", short: "Routing",                   title: "Routing",                        tail: "route params, query params, and the refresh gotcha.", priority: "⭐" }
        ]
      },
      {
        label: "Questions 11–17",
        hot: 3,
        items: [
          { n: 11, file: "11.html", short: "Rendering Behaviour",       title: "Rendering Behaviour",            tail: "what actually causes a re-render.", priority: "🔥" },
          { n: 12, file: "12.html", short: "Performance Basics",        title: "Performance Optimization Basics", tail: "profile first, memoize second.", priority: "🔥" },
          { n: 13, file: "13.html", short: "Error Boundaries",          title: "Error Handling & Error Boundaries", tail: "what they catch, and what they don't.", priority: "🔥" },
          { n: 14, file: "14.html", short: "Testing Components",        title: "Testing React Components",       tail: "test what the user sees, not internals.", priority: "⭐" },
          { n: 15, file: "15.html", short: "Accessibility",             title: "Accessibility",                  tail: "React gives you none of it for free.", priority: "⭐" },
          { n: 16, file: "16.html", short: "forwardRef & Imperative",   title: "Refs — Forwarding & Imperative APIs", tail: "exposing an API, not the whole node.", priority: "⭐" },
          { n: 17, file: "17.html", short: "Automatic Batching",        title: "Automatic Batching & flushSync", tail: "React 18 widened where batching happens.", priority: "⭐" }
        ]
      }
    ]
  },
  "react/advanced": {
    track: "React",
    trackIcon: "⚛️",
    tier: "Advanced",
    groups: [
      {
        label: "Questions 1–10",
        hot: 3,
        items: [
          { n: 1,  file: "1.html",  short: "Reconciliation & Fiber",       title: "Reconciliation & Fiber",         tail: "why rendering can pause partway through.", priority: "🧠" },
          { n: 2,  file: "2.html",  short: "Concurrent Rendering",         title: "Concurrent Rendering",           tail: "interruptible work, not multiple threads.", priority: "🧠" },
          { n: 3,  file: "3.html",  short: "Suspense",                      title: "Suspense",                       tail: "pausing a render, not just showing a spinner.", priority: "⭐" },
          { n: 4,  file: "4.html",  short: "SSR & Hydration",               title: "Server-Side Rendering & Hydration", tail: "what causes a hydration mismatch.", priority: "🔥" },
          { n: 5,  file: "5.html",  short: "Server Components",             title: "Server Components",              tail: "code that never ships to the browser.", priority: "🧠" },
          { n: 6,  file: "6.html",  short: "Actions & use()",               title: "Actions, useOptimistic & the use() Hook", tail: "showing the answer before the server agrees.", priority: "🧠" },
          { n: 7,  file: "7.html",  short: "State Mgmt Architecture",       title: "State Management Architecture",  tail: "matching the tool to how far state travels.", priority: "🔥" },
          { n: 8,  file: "8.html",  short: "Architecture — One App",        title: "React Architecture — Structure Within One App", tail: "where a decision lives, not just a file.", priority: "🔥" },
          { n: 9,  file: "9.html",  short: "Architecture — Beyond One App", title: "React Architecture — Beyond One App", tail: "micro-frontends, monorepos, React Native.", priority: "🧠" },
          { n: 10, file: "10.html", short: "Design Patterns",               title: "Design Patterns",                 tail: "compound components, render props, and when to skip them.", priority: "⭐" }
        ]
      },
      {
        label: "Questions 11–18",
        hot: 6,
        items: [
          { n: 11, file: "11.html", short: "Testing at Scale",             title: "Testing at Scale",                tail: "a pyramid, not a wall.", priority: "⭐" },
          { n: 12, file: "12.html", short: "Security",                      title: "Security",                        tail: "does JSX actually prevent XSS?", priority: "🔥" },
          { n: 13, file: "13.html", short: "Production Performance",        title: "Production Performance",          tail: "where to look after it gets slower.", priority: "🔥" },
          { n: 14, file: "14.html", short: "Scenario: Runaway Rendering",   title: "Scenario: Runaway Rendering & Requests", tail: "find the loop, not just the symptom.", priority: "🔥" },
          { n: 15, file: "15.html", short: "Scenario: Scaling Under Load",  title: "Scenario: Scaling Under Load",    tail: "5,000 rows is a scale problem, not a bug.", priority: "🔥" },
          { n: 16, file: "16.html", short: "Scenario: Incident Response",   title: "Scenario: Production Incident Response", tail: "diagnosing a blank page in prod.", priority: "🔥" },
          { n: 17, file: "17.html", short: "Scenario: Team Growing Pains",  title: "Scenario: Codebase & Team Growing Pains", tail: "the codebase outgrew its own shape.", priority: "⭐" },
          { n: 18, file: "18.html", short: "Scenario: Architecture Decisions", title: "Scenario: Architecture Decisions", tail: "CSR, SSR, or Server Components?", priority: "🔥" }
        ]
      }
    ]
  },
  "angular/basic": {
    track: "Angular",
    trackIcon: "🅰️",
    tier: "Basic",
    groups: [
      {
        label: "Questions 1–10",
        hot: 9,
        items: [
          { n: 1,  file: "1.html",  short: "Angular Fundamentals",     title: "Angular Fundamentals",             tail: "what actually makes it a framework, not a library.", priority: "🔥" },
          { n: 2,  file: "2.html",  short: "Components",               title: "Components",                       tail: "the piece everything else attaches to.", priority: "🔥" },
          { n: 3,  file: "3.html",  short: "Templates & Data Binding",  title: "Templates & Data Binding",         tail: "interpolation vs. property binding, and [()].", priority: "🔥" },
          { n: 4,  file: "4.html",  short: "Directives",                title: "Directives",                       tail: "attribute vs. structural, and the new @if/@for.", priority: "🔥" },
          { n: 5,  file: "5.html",  short: "Pipes",                     title: "Pipes",                            tail: "pure by default, and why that's the whole story.", priority: "⭐" },
          { n: 6,  file: "6.html",  short: "Lifecycle",                 title: "Lifecycle",                        tail: "not a list to memorize — a sequence with a reason.", priority: "🔥" },
          { n: 7,  file: "7.html",  short: "Services & DI",             title: "Services & Dependency Injection",  tail: "who hands you your dependencies, and how long they live.", priority: "🔥" },
          { n: 8,  file: "8.html",  short: "Routing Fundamentals",      title: "Routing Fundamentals",             tail: "what happens on a hard refresh of a deep route.", priority: "🔥" },
          { n: 9,  file: "9.html",  short: "Forms Fundamentals",        title: "Forms Fundamentals",               tail: "who actually owns the form's state.", priority: "🔥" },
          { n: 10, file: "10.html", short: "HTTP Fundamentals",         title: "HTTP Fundamentals",                tail: "why HttpClient returns an Observable, not a Promise.", priority: "🔥" }
        ]
      }
    ]
  },
  "angular/intermediate": {
    track: "Angular",
    trackIcon: "🅰️",
    tier: "Intermediate",
    groups: [
      {
        label: "Questions 1–10",
        hot: 10,
        items: [
          { n: 1,  file: "1.html",  short: "Standalone Components",     title: "Standalone Components",            tail: "a component declaring its own dependencies.", priority: "🔥" },
          { n: 2,  file: "2.html",  short: "RxJS — Core Concepts",      title: "RxJS — Core Concepts",             tail: "nothing happens until something subscribes.", priority: "🔥" },
          { n: 3,  file: "3.html",  short: "RxJS — Common Operators",   title: "RxJS — Common Operators",          tail: "map, tap, filter, takeUntil, catchError, shareReplay.", priority: "🔥" },
          { n: 4,  file: "4.html",  short: "RxJS Higher-Order Mapping", title: "RxJS Higher-Order Mapping",        tail: "switchMap vs. mergeMap vs. concatMap vs. exhaustMap.", priority: "🔥" },
          { n: 5,  file: "5.html",  short: "RxJS Error Handling",       title: "RxJS Error Handling & Subscription Lifetime", tail: "where catchError belongs, and how leaks happen.", priority: "🔥" },
          { n: 6,  file: "6.html",  short: "Signals",                   title: "Signals",                          tail: "a value that knows who's reading it.", priority: "🔥" },
          { n: 7,  file: "7.html",  short: "Change Detection",          title: "Change Detection",                 tail: "Default checks everything, OnPush only when told.", priority: "🔥" },
          { n: 8,  file: "8.html",  short: "HTTP Interceptors",         title: "HTTP Interceptors",                tail: "every request/response passing through one funnel.", priority: "🔥" },
          { n: 9,  file: "9.html",  short: "State Management",         title: "State Management",                 tail: "justifying NgRx vs. Signals + services.", priority: "🔥" },
          { n: 10, file: "10.html", short: "Performance",               title: "Performance",                      tail: "diagnose before you reach for a fix.", priority: "🔥" }
        ]
      },
      {
        label: "Questions 11–17",
        hot: 0,
        items: [
          { n: 11, file: "11.html", short: "DI — Advanced Usage",       title: "Dependency Injection — Advanced Usage", tail: "every injector in the tree gets a chance to answer first.", priority: "⭐" },
          { n: 12, file: "12.html", short: "Subjects",                  title: "Subjects",                         tail: "both an Observable and an Observer at once.", priority: "⭐" },
          { n: 13, file: "13.html", short: "Signals + RxJS",            title: "Signals + RxJS",                   tail: "two models that convert into each other.", priority: "⭐" },
          { n: 14, file: "14.html", short: "Routing — Advanced",        title: "Routing — Advanced",                tail: "a guard is just a function now, not a class.", priority: "⭐" },
          { n: 15, file: "15.html", short: "Forms — Advanced",          title: "Forms — Advanced",                  tail: "teaching a custom control to speak Angular's forms language.", priority: "⭐" },
          { n: 16, file: "16.html", short: "Accessibility",             title: "Accessibility",                    tail: "Angular gives you zero of this for free.", priority: "⭐" },
          { n: 17, file: "17.html", short: "Testing",                   title: "Testing",                          tail: "what a user would see, not how it's wired inside.", priority: "⭐" }
        ]
      }
    ]
  },
  "angular/advanced": {
    track: "Angular",
    trackIcon: "🅰️",
    tier: "Advanced",
    groups: [
      {
        label: "Questions 1–10",
        hot: 2,
        items: [
          { n: 1,  file: "1.html",  short: "Rendering Internals",       title: "Angular Rendering Internals",      tail: "templates are compiled ahead of time, not interpreted.", priority: "🧠" },
          { n: 2,  file: "2.html",  short: "Change Detection Internals", title: "Change Detection Internals",       tail: "what OnPush actually skips, mechanism-level.", priority: "🧠" },
          { n: 3,  file: "3.html",  short: "Zoneless Angular",          title: "Zoneless Angular",                 tail: "removing the safety net that caught every async event.", priority: "🧠" },
          { n: 4,  file: "4.html",  short: "Advanced RxJS Architecture", title: "Advanced RxJS Architecture",      tail: "one shared stream vs. everyone running their own copy.", priority: "🧠" },
          { n: 5,  file: "5.html",  short: "Signal Architecture",       title: "Signal Architecture",              tail: "effect() is the escape hatch you reach for last.", priority: "🧠" },
          { n: 6,  file: "6.html",  short: "SSR & Hydration",           title: "SSR & Hydration",                  tail: "the server and client need to agree on the page.", priority: "🔥" },
          { n: 7,  file: "7.html",  short: "Deferrable Views",          title: "Deferrable Views",                 tail: "part of the template doesn't exist until it's needed.", priority: "⭐" },
          { n: 8,  file: "8.html",  short: "Angular Security",          title: "Angular Security",                 tail: "the frontend is never a trusted place to enforce anything.", priority: "🔥" },
          { n: 9,  file: "9.html",  short: "Large App Architecture",    title: "Large Application Architecture",   tail: "organize by what a feature does, not file type.", priority: "🧠" },
          { n: 10, file: "10.html", short: "Micro Frontends",           title: "Micro Frontends",                  tail: "independently deployed, but one app to the user.", priority: "🧠" }
        ]
      },
      {
        label: "Questions 11–16",
        hot: 4,
        items: [
          { n: 11, file: "11.html", short: "Scenario: Performance",     title: "Scenario: Performance Under Load", tail: "profile first, then pick which fix actually applies.", priority: "🔥" },
          { n: 12, file: "12.html", short: "Scenario: RxJS in Prod",     title: "Scenario: RxJS in Production",     tail: "the same handful of mistakes, again and again.", priority: "🔥" },
          { n: 13, file: "13.html", short: "Scenario: CD Gone Wrong",    title: "Scenario: Change Detection Gone Wrong", tail: "an OnPush component just following its own rules.", priority: "🔥" },
          { n: 14, file: "14.html", short: "Scenario: State at Scale",  title: "Scenario: State Management at Scale", tail: "state scattered everywhere, no single source of truth.", priority: "⭐" },
          { n: 15, file: "15.html", short: "Scenario: Modernizing Legacy", title: "Scenario: Modernizing a Legacy Angular App", tail: "gradual, not a big-bang rewrite.", priority: "🔥" },
          { n: 16, file: "16.html", short: "Scenario: SSR & Hydration",  title: "Scenario: SSR & Hydration Issues", tail: "the server and client computing something differently.", priority: "⭐" }
        ]
      }
    ]
  },
  "azure/basic": {
    track: "Azure",
    trackIcon: "☁️",
    tier: "Basic",
    groups: [
      {
        label: "Questions 1–10",
        hot: 10,
        items: [
          { n: 1, file: "1.html", short: "Subscriptions & RGs", title: "Subscriptions, Resource Groups & Regions", tail: "the basic building blocks.", priority: "🔥" },
          { n: 2, file: "2.html", short: "App Service", title: "App Service", tail: "what it manages for you.", priority: "🔥" },
          { n: 3, file: "3.html", short: "Functions vs App Service", title: "Azure Functions", tail: "vs. App Service.", priority: "🔥" },
          { n: 4, file: "4.html", short: "Storage Account", title: "Storage Account", tail: "what actually goes in one.", priority: "🔥" },
          { n: 5, file: "5.html", short: "Azure SQL", title: "Azure SQL", tail: "how it relates to on-prem SQL Server.", priority: "🔥" },
          { n: 6, file: "6.html", short: "Cosmos DB", title: "Cosmos DB", tail: "partition keys & RU/s.", priority: "🔥" },
          { n: 7, file: "7.html", short: "Key Vault", title: "Key Vault", tail: "what belongs in it.", priority: "🔥" },
          { n: 8, file: "8.html", short: "Managed Identity", title: "Managed Identity", tail: "no more secrets in config.", priority: "🔥" },
          { n: 9, file: "9.html", short: "Entra ID", title: "Microsoft Entra ID", tail: "app registrations & OAuth2/OIDC.", priority: "🔥" },
          { n: 10, file: "10.html", short: "RBAC", title: "RBAC", tail: "roles, scope & least privilege.", priority: "🔥" }
        ]
      },
      {
        label: "Questions 11–18",
        hot: 6,
        items: [
          { n: 11, file: "11.html", short: "Service Bus", title: "Service Bus", tail: "what it's for.", priority: "🔥" },
          { n: 12, file: "12.html", short: "App Insights", title: "Application Insights", tail: "what it captures.", priority: "🔥" },
          { n: 13, file: "13.html", short: "VNets & Subnets", title: "Networking Basics", tail: "VNets & subnets.", priority: "🔥" },
          { n: 14, file: "14.html", short: "Private Endpoint", title: "Private Endpoint", tail: "reaching a service privately.", priority: "🔥" },
          { n: 15, file: "15.html", short: "Scaling", title: "Scaling", tail: "scale up vs. scale out.", priority: "🔥" },
          { n: 16, file: "16.html", short: "HA vs DR", title: "High Availability", tail: "vs. Disaster Recovery.", priority: "🔥" },
          { n: 17, file: "17.html", short: "API Management", title: "Azure API Management", tail: "what problem it solves.", priority: "⭐" },
          { n: 18, file: "18.html", short: "Load Balancing", title: "Load Balancing", tail: "the basic idea before picking a service.", priority: "⭐" }
        ]
      }
    ]
  },
  "azure/intermediate": {
    track: "Azure",
    trackIcon: "☁️",
    tier: "Intermediate",
    groups: [
      {
        label: "Questions 1–10",
        hot: 10,
        items: [
          { n: 1, file: "1.html", short: "Deployment Slots", title: "App Service Deployment Slots", tail: "avoiding downtime.", priority: "🔥" },
          { n: 2, file: "2.html", short: "Containers", title: "Containers on Azure", tail: "ACI vs. Container Apps vs. AKS.", priority: "🔥" },
          { n: 3, file: "3.html", short: "MI vs Service Principal", title: "Managed Identity", tail: "vs. Service Principal.", priority: "🔥" },
          { n: 4, file: "4.html", short: "Key Vault Access", title: "Key Vault Access Patterns", tail: "RBAC vs. access policies.", priority: "🔥" },
          { n: 5, file: "5.html", short: "Queues vs Topics", title: "Queues", tail: "vs. Topics/Subscriptions.", priority: "🔥" },
          { n: 6, file: "6.html", short: "SB vs EG vs EH", title: "Service Bus", tail: "vs. Event Grid vs. Event Hubs.", priority: "🔥" },
          { n: 7, file: "7.html", short: "Troubleshooting App Insights", title: "Troubleshooting", tail: "with Application Insights.", priority: "🔥" },
          { n: 8, file: "8.html", short: "Front Door vs others", title: "Front Door", tail: "vs. App Gateway vs. Traffic Manager vs. Load Balancer.", priority: "🔥" },
          { n: 9, file: "9.html", short: "Resilience Patterns", title: "Resilience Patterns", tail: "retries, timeouts & fallback.", priority: "🔥" },
          { n: 10, file: "10.html", short: "Bicep vs ARM vs TF", title: "Bicep", tail: "vs. ARM vs. Terraform.", priority: "🔥" }
        ]
      },
      {
        label: "Questions 11–19",
        items: [
          { n: 11, file: "11.html", short: "RG Lifecycle", title: "Resource Group Lifecycle", tail: "what it actually groups.", priority: "⭐" },
          { n: 12, file: "12.html", short: "Durable Functions", title: "Durable Functions", tail: "orchestrator, activity & entity patterns.", priority: "⭐" },
          { n: 13, file: "13.html", short: "Secrets Management", title: "Secrets Management", tail: "as a practice.", priority: "⭐" },
          { n: 14, file: "14.html", short: "Logging vs App Insights", title: "Logging", tail: "vs. Application Insights.", priority: "⭐" },
          { n: 15, file: "15.html", short: "Monitor vs App Insights", title: "Azure Monitor", tail: "vs. Application Insights.", priority: "⭐" },
          { n: 16, file: "16.html", short: "Caching", title: "Caching", tail: "at an architecture level.", priority: "⭐" },
          { n: 17, file: "17.html", short: "Idempotent Deployment", title: "Idempotent Deployment", tail: "why IaC has to be safe to re-run.", priority: "⭐" },
          { n: 18, file: "18.html", short: "Cosmos Consistency Levels", title: "Cosmos DB Consistency Levels", tail: "the tradeoff behind the 5 levels.", priority: "🧠" },
          { n: 19, file: "19.html", short: "Service Bus Architecture", title: "Service Bus Architecture", tail: "wiring producers & consumers.", priority: "🧠" }
        ]
      }
    ]
  },
  "azure/advanced": {
    track: "Azure",
    trackIcon: "☁️",
    tier: "Advanced",
    groups: [
      {
        label: "Questions 1–7",
        hot: 3,
        items: [
          { n: 1, file: "1.html", short: "Well-Architected Framework", title: "Well-Architected Framework", tail: "the 5 pillars.", priority: "🔥" },
          { n: 2, file: "2.html", short: "Scenario: 500s", title: "App Service Returns 500s", tail: "a troubleshooting scenario.", priority: "🔥" },
          { n: 3, file: "3.html", short: "Disaster Recovery", title: "Disaster Recovery", tail: "RPO, RTO & multi-region strategy.", priority: "🔥" },
          { n: 4, file: "4.html", short: "Hub-Spoke & Peering", title: "Hub-Spoke Topology", tail: "& VNet Peering.", priority: "⭐" },
          { n: 5, file: "5.html", short: "Cost Optimization", title: "Cost Optimization", tail: "the levers beyond a cheaper SKU.", priority: "⭐" },
          { n: 6, file: "6.html", short: "Landing Zones & Governance", title: "Landing Zones", tail: "& Governance.", priority: "⭐" },
          { n: 7, file: "7.html", short: "Requirements-First", title: "Requirements-First Architecture", tail: "the questions before the design.", priority: "🧠" }
        ]
      }
    ]
  },
  "aws/basic": {
    track: "AWS",
    trackIcon: "📦",
    tier: "Basic",
    groups: [
      {
        label: "Questions 1 – 10",
        items: [
          { n: 1, file: "1.html", short: "AWS Fundamentals", title: "AWS Fundamentals", tail: "Region vs. AZ vs. Edge Location, shared responsibility, elasticity vs. scalability.", priority: "🔥" },
          { n: 2, file: "2.html", short: "Global Infrastructure", title: "AWS Global Infrastructure", tail: "designing to survive an AZ or Region failure.", priority: "🔥" },
          { n: 3, file: "3.html", short: "IAM", title: "IAM", tail: "roles vs. users, least privilege, STS, why not hard-coded keys.", priority: "🔥" },
          { n: 4, file: "4.html", short: "EC2", title: "EC2", tail: "instance types, EBS, On-Demand vs. Reserved vs. Spot.", priority: "🔥" },
          { n: 5, file: "5.html", short: "S3", title: "S3", tail: "storage classes, versioning, encryption, presigned URLs.", priority: "🔥" },
          { n: 6, file: "6.html", short: "VPC Fundamentals", title: "VPC Fundamentals", tail: "subnets, route tables, IGW/NAT, security groups vs. NACLs.", priority: "🔥" },
          { n: 7, file: "7.html", short: "LB & Auto Scaling", title: "Load Balancing & Auto Scaling", tail: "ALB vs. NLB, target groups, health checks.", priority: "🔥" },
          { n: 8, file: "8.html", short: "RDS", title: "RDS", tail: "Multi-AZ vs. read replica, automated backups, RDS vs. Aurora.", priority: "🔥" },
          { n: 9, file: "9.html", short: "Lambda", title: "Lambda", tail: "triggers, cold starts, concurrency, timeouts.", priority: "🔥" },
          { n: 10, file: "10.html", short: "CloudWatch", title: "CloudWatch", tail: "metrics vs. logs, alarms, CloudWatch vs. CloudTrail.", priority: "🔥" }
        ]
      },
      {
        label: "Questions 11 – 11",
        items: [
          { n: 11, file: "11.html", short: "Route 53", title: "Route 53", tail: "routing policies, health checks, its role in disaster recovery.", priority: "⭐" }
        ]
      }
    ]
  },
  "aws/intermediate": {
    track: "AWS",
    trackIcon: "📦",
    tier: "Intermediate",
    groups: [
      {
        label: "Questions 1 – 10",
        items: [
          { n: 1, file: "1.html", short: "VPC & Adv. Networking", title: "VPC & Advanced Networking", tail: "peering, Transit Gateway, endpoints, PrivateLink.", priority: "🔥" },
          { n: 2, file: "2.html", short: "Hybrid Connectivity", title: "Hybrid Connectivity", tail: "VPN vs. Direct Connect, redundant hybrid links.", priority: "⭐" },
          { n: 3, file: "3.html", short: "IAM & Security Arch.", title: "IAM & Security Architecture", tail: "cross-account roles, SCPs, KMS, secrets rotation.", priority: "🔥" },
          { n: 4, file: "4.html", short: "Security Services", title: "AWS Security Services", tail: "WAF, Shield, GuardDuty, Inspector, Security Hub.", priority: "⭐" },
          { n: 5, file: "5.html", short: "EC2 Scaling & Arch.", title: "EC2 Scaling & Architecture", tail: "launch templates, lifecycle hooks, zero-downtime deploys.", priority: "🔥" },
          { n: 6, file: "6.html", short: "S3 Advanced", title: "S3 Advanced", tail: "replication, Object Lock, multipart upload, S3 vs. EFS.", priority: "⭐" },
          { n: 7, file: "7.html", short: "DynamoDB", title: "DynamoDB", tail: "partition keys, GSI vs. LSI, hot partitions.", priority: "🔥" },
          { n: 8, file: "8.html", short: "Aurora & DB Arch.", title: "Aurora & Database Architecture", tail: "Aurora vs. RDS vs. DynamoDB, read scaling.", priority: "⭐" },
          { n: 9, file: "9.html", short: "ElastiCache", title: "ElastiCache", tail: "Redis vs. Memcached, cache-aside, invalidation.", priority: "⭐" },
          { n: 10, file: "10.html", short: "API Gateway", title: "API Gateway", tail: "REST vs. HTTP API, throttling, auth (incl. Cognito).", priority: "🔥" }
        ]
      },
      {
        label: "Questions 11 – 19",
        items: [
          { n: 11, file: "11.html", short: "Messaging (SQS/SNS)", title: "Messaging", tail: "SQS vs. SNS, FIFO vs. standard, idempotent consumers.", priority: "🔥" },
          { n: 12, file: "12.html", short: "EventBridge", title: "EventBridge", tail: "event buses, rules, event patterns.", priority: "⭐" },
          { n: 13, file: "13.html", short: "Kinesis", title: "Kinesis", tail: "Streams vs. Firehose, shards, ordering.", priority: "⭐" },
          { n: 14, file: "14.html", short: "Containers", title: "Containers", tail: "ECS vs. EKS, Fargate vs. EC2 launch type.", priority: "🔥" },
          { n: 15, file: "15.html", short: "Observability", title: "Observability", tail: "metrics vs. logs vs. traces, distributed tracing.", priority: "🔥" },
          { n: 16, file: "16.html", short: "Infra as Code", title: "Infrastructure as Code", tail: "CloudFormation vs. Terraform vs. CDK, drift.", priority: "🔥" },
          { n: 17, file: "17.html", short: "CI/CD & Deployment", title: "CI/CD & Deployment", tail: "blue/green, canary, zero-downtime rollback.", priority: "⭐" },
          { n: 18, file: "18.html", short: "Backup & DR", title: "Backup & Disaster Recovery", tail: "RPO/RTO, pilot light vs. warm standby.", priority: "🔥" },
          { n: 19, file: "19.html", short: "CloudFront & CDN", title: "CloudFront & Content Delivery", tail: "origins, cache invalidation, signed URLs.", priority: "🔥" }
        ]
      }
    ]
  },
  "aws/advanced": {
    track: "AWS",
    trackIcon: "📦",
    tier: "Advanced",
    groups: [
      {
        label: "Questions 1 – 10",
        items: [
          { n: 1, file: "1.html", short: "Well-Architected Fwk", title: "Well-Architected Framework", tail: "the six pillars, and how to actually use them during design.", priority: "🔥" },
          { n: 2, file: "2.html", short: "High Availability", title: "High Availability Architecture", tail: "eliminating single points of failure, statelessness.", priority: "🔥" },
          { n: 3, file: "3.html", short: "Multi-Region Arch.", title: "Multi-Region Architecture", tail: "active/active vs. active/passive, avoiding split-brain.", priority: "🧠" },
          { n: 4, file: "4.html", short: "Serverless Arch.", title: "Serverless Architecture", tail: "designing a serverless API, Step Functions, RDS Proxy.", priority: "🔥" },
          { n: 5, file: "5.html", short: "Microservices", title: "Microservices on AWS", tail: "service discovery, Saga pattern, cascading-failure prevention.", priority: "🔥" },
          { n: 6, file: "6.html", short: "Data Architecture", title: "Data Architecture", tail: "relational vs. NoSQL, data lakes, analytics separation.", priority: "🧠" },
          { n: 7, file: "7.html", short: "Cost Opt. / FinOps", title: "Cost Optimization / FinOps", tail: "rightsizing, NAT/data-transfer cost traps, cost visibility.", priority: "🔥" },
          { n: 8, file: "8.html", short: "Reliability Eng.", title: "Reliability Engineering", tail: "backoff, jitter, circuit breaker, bulkhead, backpressure.", priority: "🧠" },
          { n: 9, file: "9.html", short: "Security Architecture", title: "AWS Security Architecture", tail: "securing a workload end-to-end, responding to compromised credentials.", priority: "🔥" },
          { n: 10, file: "10.html", short: "Migration", title: "Migration", tail: "rehost vs. replatform vs. refactor, minimizing downtime.", priority: "⭐" }
        ]
      },
      {
        label: "Questions 11 – 14",
        items: [
          { n: 11, file: "11.html", short: "Prod. Troubleshooting", title: "Production Troubleshooting", tail: "13 real production-break scenarios, EC2 to billing spikes.", priority: "🔥" },
          { n: 12, file: "12.html", short: "Architecture Design", title: "Architecture Design Questions", tail: "whiteboard designs with interviewer pushback chains.", priority: "🔥" },
          { n: 13, file: "13.html", short: "Trade-off Questions", title: "Architect-Level Trade-off Questions", tail: "requirement → constraints → options → trade-off → decision.", priority: "🧠" },
          { n: 14, file: "14.html", short: "Sustainability", title: "Sustainability", tail: "the sixth pillar, and where it conflicts with cost/performance.", priority: "⭐" }
        ]
      }
    ]
  },
  "python/basic": {
    track: "Python",
    trackIcon: "🐍",
    tier: "Basic",
    groups: [
      {
        label: "Questions 1 – 10",
        items: [
          { n: 1, file: "1.html", short: "Python Fundamentals", title: "Python Fundamentals", tail: "interpreted vs. compiled, bytecode, CPython, walrus operator.", priority: "🔥" },
          { n: 2, file: "2.html", short: "Variables & Object Model", title: "Variables & Object Model", tail: "a variable is a reference, not a box.", priority: "🔥" },
          { n: 3, file: "3.html", short: "Python Data Types", title: "Python Data Types", tail: "hashability, mutable vs. immutable, Enum.", priority: "🔥" },
          { n: 4, file: "4.html", short: "List/Tuple/Set/Dict", title: "List vs. Tuple vs. Set vs. Dictionary", tail: "order, duplicates, hashing, defaultdict, Counter.", priority: "🔥" },
          { n: 5, file: "5.html", short: "Strings", title: "Strings", tail: "why immutable, slicing, f-strings, str vs. bytes.", priority: "🔥" },
          { n: 6, file: "6.html", short: "Functions", title: "Functions", tail: "first-class objects, *args/**kwargs, positional/keyword-only params.", priority: "🔥" },
          { n: 7, file: "7.html", short: "Scope & Namespaces", title: "Scope & Namespaces", tail: "LEGB, closures, the classic loop-variable-capture trap.", priority: "🔥" },
          { n: 8, file: "8.html", short: "Comprehensions", title: "Comprehensions", tail: "list/dict/set, when they get too dense to read.", priority: "⭐" },
          { n: 9, file: "9.html", short: "Exceptions", title: "Exceptions", tail: "hierarchy, propagation, exception chaining.", priority: "🔥" },
          { n: 10, file: "10.html", short: "Modules & Packages", title: "Modules & Packages", tail: "imports, __name__ == \"__main__\", circular imports.", priority: "🔥" }
        ]
      },
      {
        label: "Questions 11 – 11",
        items: [
          { n: 11, file: "11.html", short: "OOP Fundamentals", title: "OOP Fundamentals", tail: "class vs. object, self/cls, inheritance vs. composition.", priority: "🔥" }
        ]
      }
    ]
  },
  "python/intermediate": {
    track: "Python",
    trackIcon: "🐍",
    tier: "Intermediate",
    groups: [
      {
        label: "Questions 1 – 10",
        items: [
          { n: 1, file: "1.html", short: "Mutable vs. Immutable", title: "Mutable vs. Immutable", tail: "the mutable-default-argument trap, predict the output.", priority: "🔥" },
          { n: 2, file: "2.html", short: "== vs. is", title: "== vs. is", tail: "equality vs. identity, integer/string interning.", priority: "🔥" },
          { n: 3, file: "3.html", short: "Shallow vs. Deep Copy", title: "Shallow Copy vs. Deep Copy", tail: "why nested objects create surprises.", priority: "🔥" },
          { n: 4, file: "4.html", short: "Iterators & Generators", title: "Iterators & Generators", tail: "lazy evaluation, yield, itertools.", priority: "🔥" },
          { n: 5, file: "5.html", short: "Decorators", title: "Decorators", tail: "how they work, stacking order, functools.wraps.", priority: "🔥" },
          { n: 6, file: "6.html", short: "Context Managers", title: "Context Managers", tail: "with, __enter__/__exit__, writing your own.", priority: "🔥" },
          { n: 7, file: "7.html", short: "Lambda/map/filter/reduce", title: "Lambda / map / filter / reduce", tail: "when a comprehension reads better.", priority: "⭐" },
          { n: 8, file: "8.html", short: "Dataclasses", title: "Dataclasses", tail: "vs. namedtuple, vs. Pydantic.", priority: "⭐" },
          { n: 9, file: "9.html", short: "Type Hints", title: "Type Hints", tail: "Optional, Union, Protocol, static vs. runtime checking.", priority: "🔥" },
          { n: 10, file: "10.html", short: "Abstract Classes & Protocols", title: "Abstract Classes & Protocols", tail: "duck typing vs. explicit abstraction.", priority: "⭐" }
        ]
      },
      {
        label: "Questions 11 – 14",
        items: [
          { n: 11, file: "11.html", short: "Logging", title: "Logging", tail: "levels, Logger/Handler/Formatter, why not print().", priority: "⭐" },
          { n: 12, file: "12.html", short: "Testing", title: "Testing", tail: "pytest, fixtures, mocking, what NOT to mock.", priority: "🔥" },
          { n: 13, file: "13.html", short: "Virtual Envs & Packaging", title: "Virtual Environments & Packaging", tail: "venv, pyproject.toml, build backends.", priority: "🔥" },
          { n: 14, file: "14.html", short: "Pythonic Code", title: "Pythonic Code", tail: "EAFP vs. LBYL, pathlib vs. os.path.", priority: "⭐" }
        ]
      }
    ]
  },
  "python/advanced": {
    track: "Python",
    trackIcon: "🐍",
    tier: "Advanced",
    groups: [
      {
        label: "Questions 1 – 10",
        items: [
          { n: 1, file: "1.html", short: "Python Object Model", title: "Python Object Model", tail: "everything is an object, __dict__, attribute lookup.", priority: "🧠" },
          { n: 2, file: "2.html", short: "Dunder Methods", title: "Dunder Methods", tail: "__str__ vs. __repr__, __eq__/__hash__, __getitem__.", priority: "🔥" },
          { n: 3, file: "3.html", short: "MRO & Multiple Inheritance", title: "MRO & Multiple Inheritance", tail: "C3 linearization, the diamond problem.", priority: "🧠" },
          { n: 4, file: "4.html", short: "Descriptors", title: "Descriptors", tail: "__get__/__set__, how property works internally.", priority: "🧠" },
          { n: 5, file: "5.html", short: "Metaclasses", title: "Metaclasses", tail: "when useful, why usually avoided.", priority: "🧠" },
          { n: 6, file: "6.html", short: "Memory Management", title: "Memory Management", tail: "reference counting, GC, __slots__.", priority: "🔥" },
          { n: 7, file: "7.html", short: "GIL", title: "GIL", tail: "why it exists, free-threaded CPython (PEP 703).", priority: "🔥" },
          { n: 8, file: "8.html", short: "Threading", title: "Threading", tail: "race conditions, locks, predict the output.", priority: "🔥" },
          { n: 9, file: "9.html", short: "Multiprocessing", title: "Multiprocessing", tail: "why it helps CPU-bound work, serialization overhead.", priority: "🔥" },
          { n: 10, file: "10.html", short: "asyncio", title: "asyncio", tail: "event loop, coroutines, blocking code inside async.", priority: "🔥" }
        ]
      },
      {
        label: "Questions 11 – 18",
        items: [
          { n: 11, file: "11.html", short: "Performance & Profiling", title: "Performance & Profiling", tail: "cProfile, timeit, finding the real bottleneck.", priority: "🔥" },
          { n: 12, file: "12.html", short: "Caching", title: "Caching", tail: "lru_cache, invalidation, cache stampede.", priority: "⭐" },
          { n: 13, file: "13.html", short: "Serialization", title: "Serialization", tail: "JSON vs. pickle, why untrusted pickle is dangerous.", priority: "⭐" },
          { n: 14, file: "14.html", short: "Production Architecture", title: "Production Python Architecture", tail: "structuring a large app, config, secrets.", priority: "🔥" },
          { n: 15, file: "15.html", short: "Production Troubleshooting", title: "Production Troubleshooting", tail: "11 real production-break scenarios.", priority: "🔥" },
          { n: 16, file: "16.html", short: "Python Web / API", title: "Python Web / API", tail: "WSGI vs. ASGI, FastAPI vs. Django.", priority: "⭐" },
          { n: 17, file: "17.html", short: "Python + Databases", title: "Python + Databases", tail: "ORM, N+1 queries, async DB access.", priority: "⭐" },
          { n: 18, file: "18.html", short: "Architecture / Senior Scenarios", title: "Python Architecture / Senior Scenarios", tail: "designing a high-throughput API.", priority: "🧠" }
        ]
      }
    ]
  },
  "ai/basic": {
    track: "AI",
    trackIcon: "🤖",
    tier: "Basic",
    groups: [
      {
        label: "Questions 1 – 10",
        items: [
          { n: 1, file: "1.html", short: "Tokens, Context & Temperature", title: "Tokens, Context Window & Temperature", tail: "the billed unit, max tokens seen, temperature vs. top-p.", priority: "🔥" },
          { n: 2, file: "2.html", short: "Embeddings", title: "Embeddings", tail: "what a vector actually is, cosine similarity as meaning.", priority: "🔥" },
          { n: 3, file: "3.html", short: "Pretraining vs. RLHF/DPO", title: "Pretraining vs. Instruction-Tuning vs. RLHF/DPO", tail: "the three training stages and what each one changes.", priority: "🔥" },
          { n: 4, file: "4.html", short: "Model Families", title: "Model Families", tail: "closed API vs. open-weight, licensing, self-hosting.", priority: "🔥" },
          { n: 5, file: "5.html", short: "Cost & Streaming", title: "Prompt vs. Completion Cost & Streaming", tail: "input/output tokens priced differently, why streaming matters.", priority: "🔥" },
          { n: 6, file: "6.html", short: "System/User/Assistant Roles", title: "System vs. User vs. Assistant Roles", tail: "why the same instruction behaves differently by role.", priority: "🔥" },
          { n: 7, file: "7.html", short: "Zero-shot/Few-shot/CoT", title: "Zero-shot, Few-shot & Chain-of-Thought", tail: "when examples help, when reasoning steps help.", priority: "🔥" },
          { n: 8, file: "8.html", short: "Structured Output", title: "Structured Output", tail: "forcing valid JSON, schema-constrained generation.", priority: "🔥" },
          { n: 9, file: "9.html", short: "Non-Determinism", title: "Why LLMs Aren't Deterministic", tail: "sampling and temperature, not just hardware noise.", priority: "⭐" },
          { n: 10, file: "10.html", short: "Delimiting Untrusted Content", title: "Delimiting Untrusted Content in a Prompt", tail: "why raw string concatenation is an injection risk.", priority: "⭐" }
        ]
      },
      {
        label: "Questions 11 – 16",
        items: [
          { n: 11, file: "11.html", short: "Versioned, Idempotent Prompts", title: "Versioned, Idempotent Prompts", tail: "treating prompts like code — version, test, roll back.", priority: "⭐" },
          { n: 12, file: "12.html", short: "Transformer Basics", title: "Transformer Basics — Self-Attention & KV Cache", tail: "self-attention and KV cache, at interview depth.", priority: "⭐" },
          { n: 13, file: "13.html", short: "Tokenizers", title: "Tokenizers — Why Token Count ≠ Word Count", tail: "BPE basics and why token count isn't word count.", priority: "⭐" },
          { n: 14, file: "14.html", short: "MoE & Quantization", title: "Mixture-of-Experts & Quantization", tail: "sparse activation and lower-precision weights cut cost.", priority: "⭐" },
          { n: 15, file: "15.html", short: "Context-Window Tricks", title: "Context-Window Tricks", tail: "sliding window, summarization, fitting more in.", priority: "⭐" },
          { n: 16, file: "16.html", short: "Classic ML vs. LLM", title: "Classic ML vs. LLM", tail: "when a small trained model still beats an LLM call.", priority: "⭐" }
        ]
      }
    ]
  },
  "ai/intermediate": {
    track: "AI",
    trackIcon: "🤖",
    tier: "Intermediate",
    groups: [
      {
        label: "Questions 1 – 10",
        items: [
          { n: 1, file: "1.html", short: "RAG Pipeline End to End", title: "The RAG Pipeline End to End", tail: "ingest, chunk, embed, retrieve, generate — the full loop.", priority: "🔥" },
          { n: 2, file: "2.html", short: "Chunking Strategies", title: "Chunking Strategies", tail: "fixed-size vs. semantic vs. recursive, the size tradeoff.", priority: "🔥" },
          { n: 3, file: "3.html", short: "Hybrid Search", title: "Hybrid Search — Keyword + Vector", tail: "combining keyword and vector search for better recall.", priority: "🔥" },
          { n: 4, file: "4.html", short: "Reranking", title: "Reranking", tail: "a second, more expensive pass to reorder top candidates.", priority: "🔥" },
          { n: 5, file: "5.html", short: "Vector DB & ANN Search", title: "Vector DB Options & ANN Search", tail: "approximate nearest neighbor search, index tradeoffs.", priority: "🔥" },
          { n: 6, file: "6.html", short: "Function / Tool Calling", title: "Function / Tool Calling", tail: "how the model decides to call a function, and then what.", priority: "🔥" },
          { n: 7, file: "7.html", short: "The Agent Loop", title: "The Agent Loop — ReAct Pattern", tail: "the reason-act-observe cycle behind agents.", priority: "🔥" },
          { n: 8, file: "8.html", short: "RAG vs. Fine-Tune vs. Prompt", title: "RAG vs. Fine-Tuning vs. Prompt Engineering", tail: "picking the right lever for a given problem.", priority: "🔥" },
          { n: 9, file: "9.html", short: "Grounding & Citations", title: "Grounding & Citations", tail: "tying generated answers back to a verifiable source.", priority: "⭐" },
          { n: 10, file: "10.html", short: "Multi-Tenant Retrieval Isolation", title: "Multi-Tenant Retrieval Isolation", tail: "keeping one tenant's data out of another's answers.", priority: "⭐" }
        ]
      },
      {
        label: "Questions 11 – 18",
        items: [
          { n: 11, file: "11.html", short: "LoRA / QLoRA", title: "LoRA / QLoRA", tail: "low-rank, low-cost fine-tuning without touching every weight.", priority: "⭐" },
          { n: 12, file: "12.html", short: "MCP", title: "MCP — Model Context Protocol", tail: "a standard way to connect an agent to tools and data, once.", priority: "⭐" },
          { n: 13, file: "13.html", short: "Multimodal Extraction", title: "Multimodal — Vision Models for Extraction", tail: "using vision models to pull structured data from images/PDFs.", priority: "⭐" },
          { n: 14, file: "14.html", short: "AI Gateways", title: "AI Gateways", tail: "one layer in front of every model call: cache, fallback, limits.", priority: "⭐" },
          { n: 15, file: "15.html", short: "Semantic Kernel & MEAI", title: "Semantic Kernel & Microsoft.Extensions.AI", tail: "the .NET-native way to build AI features.", priority: "⭐" },
          { n: 16, file: "16.html", short: "Azure OpenAI & AI Search", title: "Azure OpenAI & Azure AI Search for RAG", tail: "hosting the model and the retrieval index on Azure.", priority: "⭐" },
          { n: 17, file: "17.html", short: "Query Transformation", title: "Query Transformation", tail: "rewriting the user's question before you ever search.", priority: "⭐" },
          { n: 18, file: "18.html", short: "Multi-Agent Patterns", title: "Multi-Agent Patterns", tail: "planner/worker and supervisor patterns, and their real cost.", priority: "⭐" }
        ]
      }
    ]
  },
  "ai/advanced": {
    track: "AI",
    trackIcon: "🤖",
    tier: "Advanced",
    groups: [
      {
        label: "Questions 1 – 10",
        items: [
          { n: 1, file: "1.html", short: "Prompt Injection & Jailbreaks", title: "Prompt Injection & Jailbreaks", tail: "the #1 LLM security risk, and how to defend against it.", priority: "🔥" },
          { n: 2, file: "2.html", short: "LLM-as-Judge", title: "LLM-as-Judge", tail: "using one model to grade another model's output at scale.", priority: "🔥" },
          { n: 3, file: "3.html", short: "Building an Eval Set", title: "Building an Eval Set", tail: "the fixed test set that makes 'looks good' a real gate.", priority: "🔥" },
          { n: 4, file: "4.html", short: "Cost Control", title: "Cost Control", tail: "caching, model tiering, and routing to keep spend in check.", priority: "🔥" },
          { n: 5, file: "5.html", short: "Tracing Every LLM Call", title: "Tracing Every LLM Call", tail: "per-request spans so you can debug and cost-attribute later.", priority: "🔥" },
          { n: 6, file: "6.html", short: "OWASP Top 10 for LLM Apps", title: "OWASP Top 10 for LLM Applications", tail: "the checklist of well-known LLM application risk categories.", priority: "🔥" },
          { n: 7, file: "7.html", short: "Model Routing & Failover", title: "Model Routing & Multi-Provider Failover", tail: "what happens when your one provider goes down.", priority: "🔥" },
          { n: 8, file: "8.html", short: "Prompt Layering", title: "Prompt Layering", tail: "base prompt + per-tenant overrides, versioned and auto-tuned.", priority: "⭐" },
          { n: 9, file: "9.html", short: "PII Detection & Moderation", title: "PII Detection & Output Moderation", tail: "catching sensitive data and unsafe output before it ships.", priority: "⭐" },
          { n: 10, file: "10.html", short: "Regression Testing Prompts", title: "Regression Testing Prompts", tail: "running every prompt change through the eval set first.", priority: "⭐" }
        ]
      },
      {
        label: "Questions 11 – 14",
        items: [
          { n: 11, file: "11.html", short: "Advanced RAG", title: "Advanced RAG — GraphRAG & Agentic RAG", tail: "GraphRAG and agentic RAG, for when basic RAG isn't enough.", priority: "⭐" },
          { n: 12, file: "12.html", short: "Async/Queue-Based Inference", title: "Async/Queue-Based Inference", tail: "bounded worker pools and idempotent retries for bulk jobs.", priority: "⭐" },
          { n: 13, file: "13.html", short: "Self-Hosted vs. Managed", title: "Self-Hosted vs. Managed Models", tail: "who owns the GPU, the inference server, and the uptime.", priority: "⭐" },
          { n: 14, file: "14.html", short: "Responsible AI", title: "Responsible AI", tail: "bias, transparency, red-teaming, EU AI Act awareness.", priority: "⭐" }
        ]
      }
    ]
  },
  "dsa/basic": {
    track: "DSA",
    trackIcon: "🧠",
    tier: "Basic",
    groups: [
      {
        label: "Questions 1 – 10",
        items: [
          { n: 1, file: "1.html", short: "Complexity Analysis", title: "Complexity Analysis", tail: "Big-O/Θ/Ω, time vs. space, amortized analysis.", priority: "🔥" },
          { n: 2, file: "2.html", short: "Arrays & Strings", title: "Arrays & Strings", tail: "in-place ops, prefix/suffix, matrix basics.", priority: "🔥" },
          { n: 3, file: "3.html", short: "Linked Lists", title: "Linked Lists", tail: "singly/doubly/circular, cycle detection, reversal.", priority: "🔥" },
          { n: 4, file: "4.html", short: "Stacks & Queues", title: "Stacks & Queues", tail: "monotonic stack/queue, deque.", priority: "🔥" },
          { n: 5, file: "5.html", short: "Hash Tables / Hash Maps", title: "Hash Tables / Hash Maps", tail: "hashing, collision, load factor, frequency counting.", priority: "🔥" },
          { n: 6, file: "6.html", short: "Binary Trees & BSTs", title: "Binary Trees & BSTs", tail: "traversals, the BST invariant.", priority: "🔥" },
          { n: 7, file: "7.html", short: "Heaps / Priority Queues", title: "Heaps / Priority Queues", tail: "binary heap, k-way merge.", priority: "🔥" },
          { n: 8, file: "8.html", short: "Graph Fundamentals", title: "Graph Fundamentals", tail: "representations, BFS/DFS, connected components.", priority: "🔥" },
          { n: 9, file: "9.html", short: "Sorting", title: "Sorting", tail: "comparison vs. non-comparison sorts, stability.", priority: "🔥" },
          { n: 10, file: "10.html", short: "Bit Manipulation", title: "Bit Manipulation", tail: "common bitwise interview idioms.", priority: "⭐" }
        ]
      }
    ]
  },
  "dsa/intermediate": {
    track: "DSA",
    trackIcon: "🧠",
    tier: "Intermediate",
    groups: [
      {
        label: "Questions 1 – 10",
        items: [
          { n: 1, file: "1.html", short: "Two Pointers & Sliding Window", title: "Two Pointers & Sliding Window", tail: "fixed window, variable window, fast/slow pointers.", priority: "🔥" },
          { n: 2, file: "2.html", short: "Binary Search & Search on Answer", title: "Binary Search & Search on Answer", tail: "rotated arrays, search on a monotonic answer.", priority: "🔥" },
          { n: 3, file: "3.html", short: "Recursion & Backtracking", title: "Recursion & Backtracking", tail: "call-stack cost, pruning, classic shapes.", priority: "🔥" },
          { n: 4, file: "4.html", short: "Greedy Algorithms", title: "Greedy Algorithms", tail: "when greedy is provably correct vs. when it fails.", priority: "🔥" },
          { n: 5, file: "5.html", short: "Dynamic Programming", title: "Dynamic Programming", tail: "1D/2D, knapsack family, LCS/LIS, state-machine DP.", priority: "🔥" },
          { n: 6, file: "6.html", short: "Graph Problem Patterns", title: "Graph Problem Patterns", tail: "grid-as-graph, multi-source BFS, bipartite check.", priority: "🔥" },
          { n: 7, file: "7.html", short: "Shortest Path & MST", title: "Shortest Path & MST", tail: "Dijkstra, Bellman-Ford, Floyd-Warshall, Kruskal/Prim.", priority: "🔥" },
          { n: 8, file: "8.html", short: "Topological Sort & Union-Find", title: "Topological Sort & Union-Find", tail: "dependency ordering, disjoint sets, cycle detection.", priority: "🔥" },
          { n: 9, file: "9.html", short: "Prefix Sum & Difference Array", title: "Prefix Sum & Difference Array", tail: "range-sum queries, subarray sums, difference-array updates.", priority: "⭐" },
          { n: 10, file: "10.html", short: "Intervals & Sweep Line", title: "Intervals & Sweep Line", tail: "merge intervals, meeting rooms, sweep-line technique.", priority: "⭐" }
        ]
      },
      {
        label: "Questions 11 – 12",
        items: [
          { n: 11, file: "11.html", short: "Balanced Trees", title: "Balanced Trees", tail: "why balance matters, AVL/Red-Black at a glance.", priority: "⭐" },
          { n: 12, file: "12.html", short: "Tries", title: "Tries", tail: "prefix search, autocomplete-style use cases.", priority: "⭐" }
        ]
      }
    ]
  },
  "dsa/advanced": {
    track: "DSA",
    trackIcon: "🧠",
    tier: "Advanced",
    groups: [
      {
        label: "Questions 1 – 8",
        items: [
          { n: 1, file: "1.html", short: "Pattern Recognition", title: "Pattern Recognition", tail: "the \"how do I recognize the solution\" layer.", priority: "🔥" },
          { n: 2, file: "2.html", short: "Data Structure Trade-offs", title: "Data Structure Trade-offs", tail: "why HashMap over TreeMap, heap vs. sorting.", priority: "🔥" },
          { n: 3, file: "3.html", short: "Time vs. Memory Trade-offs", title: "Time vs. Memory Trade-offs", tail: "when a faster algorithm is actually slower.", priority: "🔥" },
          { n: 4, file: "4.html", short: "Streaming / Large-Dataset Problems", title: "Streaming / Large-Dataset Problems", tail: "top-K and duplicates without storing everything.", priority: "⭐" },
          { n: 5, file: "5.html", short: "External / Distributed Processing", title: "External / Distributed Processing", tail: "external sort, when data doesn't fit in RAM.", priority: "⭐" },
          { n: 6, file: "6.html", short: "Scale & Performance Scenarios", title: "Scale & Performance Scenarios", tail: "100M records, when O(n) becomes unacceptable.", priority: "⭐" },
          { n: 7, file: "7.html", short: "Segment Tree & Fenwick Tree", title: "Segment Tree & Fenwick Tree", tail: "range-query/range-update — Deep Dive.", priority: "🧠" },
          { n: 8, file: "8.html", short: "String Algorithms", title: "String Algorithms", tail: "KMP, Rabin-Karp — Deep Dive.", priority: "🧠" }
        ]
      }
    ]
  },
  "javascript/basic": {
    track: "JavaScript",
    trackIcon: "⚡",
    tier: "Basic",
    groups: [
      {
        label: "Questions 1 – 10",
        items: [
          { n: 1, file: "1.html", short: "JavaScript Fundamentals", title: "JavaScript Fundamentals", tail: "what JS actually is, execution context, call stack.", priority: "🔥" },
          { n: 2, file: "2.html", short: "var vs. let vs. const", title: "var vs. let vs. const", tail: "scope, hoisting, the Temporal Dead Zone.", priority: "🔥" },
          { n: 3, file: "3.html", short: "Data Types & Coercion", title: "Data Types & Type Coercion", tail: "primitives, typeof, truthy/falsy, implicit coercion.", priority: "🔥" },
          { n: 4, file: "4.html", short: "== vs. ===", title: "== vs. ===", tail: "loose vs. strict equality, Object.is().", priority: "🔥" },
          { n: 5, file: "5.html", short: "Functions", title: "Functions", tail: "declarations, expressions, arrow functions, callbacks.", priority: "🔥" },
          { n: 6, file: "6.html", short: "Scope & Hoisting", title: "Scope & Hoisting", tail: "lexical scope, the scope chain, hoisting.", priority: "🔥" },
          { n: 7, file: "7.html", short: "Arrays & Objects", title: "Arrays & Objects", tail: "reference behavior, mutation, optional chaining.", priority: "🔥" },
          { n: 8, file: "8.html", short: "Destructuring/Spread/Rest", title: "Destructuring / Spread / Rest", tail: "array & object destructuring, spread vs. rest.", priority: "🔥" },
          { n: 9, file: "9.html", short: "Array Methods", title: "Array Methods", tail: "map/filter/reduce/find, and when each fits.", priority: "🔥" },
          { n: 10, file: "10.html", short: "Modern JavaScript / ES6+", title: "Modern JavaScript / ES6+", tail: "template literals, Map/Set, and the rest of ES6+.", priority: "🔥" }
        ]
      },
      {
        label: "Questions 11",
        items: [
          { n: 11, file: "11.html", short: "Error Handling", title: "Error Handling", tail: "try/catch/finally, custom errors, async errors.", priority: "⭐" }
        ]
      }
    ]
  },
  "javascript/intermediate": {
    track: "JavaScript",
    trackIcon: "⚡",
    tier: "Intermediate",
    groups: [
      {
        label: "Questions 1 – 10",
        items: [
          { n: 1, file: "1.html", short: "Closures", title: "Closures", tail: "why the inner function still remembers its outer variables.", priority: "🔥" },
          { n: 2, file: "2.html", short: "this / call / apply / bind", title: "this / call / apply / bind", tail: "call-site rules, and how arrow functions differ.", priority: "🔥" },
          { n: 3, file: "3.html", short: "Prototypes & Chain", title: "Prototypes & Prototype Chain", tail: "[[Prototype]], Object.create(), instanceof.", priority: "🔥" },
          { n: 4, file: "4.html", short: "Modules", title: "Modules", tail: "import/export, CommonJS vs. ES modules.", priority: "🔥" },
          { n: 5, file: "5.html", short: "Promises", title: "Promises", tail: "states, chaining, error propagation.", priority: "🔥" },
          { n: 6, file: "6.html", short: "async / await", title: "async / await", tail: "what await actually does, sequential vs. concurrent.", priority: "🔥" },
          { n: 7, file: "7.html", short: "Event Loop", title: "Event Loop", tail: "call stack, task queue, microtask queue, ordering.", priority: "🔥" },
          { n: 8, file: "8.html", short: "DOM & Browser Events", title: "DOM & Browser Events", tail: "the event object, capturing vs. bubbling.", priority: "🔥" },
          { n: 9, file: "9.html", short: "Event Delegation", title: "Event Delegation", tail: "one listener instead of a thousand.", priority: "🔥" },
          { n: 10, file: "10.html", short: "Fetch / AbortController", title: "Fetch / HTTP / AbortController", tail: "requests, cancellation, retries.", priority: "🔥" }
        ]
      },
      {
        label: "Questions 11 – 15",
        items: [
          { n: 11, file: "11.html", short: "Classes & Inheritance", title: "Classes & Inheritance", tail: "class syntax over the prototype system.", priority: "⭐" },
          { n: 12, file: "12.html", short: "Higher-Order & Functional", title: "Higher-Order & Functional JavaScript", tail: "composition, currying, memoization.", priority: "⭐" },
          { n: 13, file: "13.html", short: "Iterators & Generators", title: "Iterators & Generators", tail: "Symbol.iterator, yield, lazy evaluation.", priority: "⭐" },
          { n: 14, file: "14.html", short: "Browser Storage", title: "Browser Storage", tail: "cookies, localStorage, sessionStorage.", priority: "⭐" },
          { n: 15, file: "15.html", short: "Testing Fundamentals", title: "Testing Fundamentals", tail: "Jest/Vitest basics, mocking, testing async code.", priority: "⭐" }
        ]
      }
    ]
  },
  "javascript/advanced": {
    track: "JavaScript",
    trackIcon: "⚡",
    tier: "Advanced",
    groups: [
      {
        label: "Questions 1 – 10",
        items: [
          { n: 1, file: "1.html", short: "Runtime & Execution Model", title: "JavaScript Runtime & Execution Model", tail: "source → execution context → call stack → heap.", priority: "🔥" },
          { n: 2, file: "2.html", short: "Advanced Async Concurrency", title: "Advanced Async Concurrency", tail: "Promise.all/allSettled/race/any, concurrency limits.", priority: "🔥" },
          { n: 3, file: "3.html", short: "Promise Combinators", title: "Promise Combinators", tail: "resolves-when / rejects-when, at a glance.", priority: "🔥" },
          { n: 4, file: "4.html", short: "Debounce vs. Throttle", title: "Debounce vs. Throttle", tail: "implementing both, leading vs. trailing.", priority: "🔥" },
          { n: 5, file: "5.html", short: "Memory & Garbage Collection", title: "Memory & Garbage Collection", tail: "reachability, leaks, detached DOM nodes.", priority: "🔥" },
          { n: 6, file: "6.html", short: "Performance & Rendering", title: "Performance & Rendering", tail: "layout, paint, composite, long tasks.", priority: "🔥" },
          { n: 7, file: "7.html", short: "Security", title: "Security", tail: "XSS, CSRF, CSP, prototype pollution.", priority: "🔥" },
          { n: 8, file: "8.html", short: "Production JS Scenarios", title: "Production JavaScript Scenarios", tail: "race conditions, cancellation, 10,000 list items.", priority: "🔥" },
          { n: 9, file: "9.html", short: "Web Workers", title: "Web Workers", tail: "offloading CPU-heavy work from the main thread.", priority: "⭐" },
          { n: 10, file: "10.html", short: "Service Workers", title: "Service Workers", tail: "lifecycle, cache, offline support.", priority: "⭐" }
        ]
      },
      {
        label: "Questions 11 – 12",
        items: [
          { n: 11, file: "11.html", short: "Polyfills & Transpilation", title: "Polyfills & Transpilation", tail: "feature detection, Babel, bundle size.", priority: "⭐" },
          { n: 12, file: "12.html", short: "Proxy & Reflect", title: "Proxy & Reflect", tail: "intercepting property access, reactive systems — Deep Dive.", priority: "🧠" }
        ]
      }
    ]
  },
  "htmlcss/basic": {
    track: "HTML & CSS",
    trackIcon: "🎨",
    tier: "Basic",
    groups: [
      {
        label: "Questions 1 – 9",
        items: [
          { n: 1, file: "1.html", short: "HTML Fundamentals", title: "HTML Fundamentals", tail: "what HTML actually is, elements, attributes, the DOM tree.", priority: "🔥" },
          { n: 2, file: "2.html", short: "Semantic HTML", title: "Semantic HTML", tail: "why nav/button beat a bare div.", priority: "🔥" },
          { n: 3, file: "3.html", short: "Forms & Validation", title: "Forms & Validation", tail: "input types, native validation, client vs. server.", priority: "🔥" },
          { n: 4, file: "4.html", short: "Accessibility", title: "Accessibility", tail: "ARIA, labels, keyboard navigation, when ARIA vs. native.", priority: "🔥" },
          { n: 5, file: "5.html", short: "CSS Fundamentals & Cascade", title: "CSS Fundamentals & Cascade", tail: "rules, the cascade, how CSS actually resolves a style.", priority: "🔥" },
          { n: 6, file: "6.html", short: "Selectors", title: "Selectors", tail: "combinators, attribute selectors, pseudo-selector basics.", priority: "🔥" },
          { n: 7, file: "7.html", short: "Box Model", title: "Box Model", tail: "content/padding/border/margin, box-sizing.", priority: "🔥" },
          { n: 8, file: "8.html", short: "Units & Sizing", title: "Units & Sizing", tail: "px vs. %, em vs. rem, viewport units.", priority: "🔥" },
          { n: 9, file: "9.html", short: "Display & Visibility", title: "Display & Visibility", tail: "display:none vs. visibility:hidden vs. opacity:0.", priority: "🔥" }
        ]
      },
      {
        label: "Questions 10 – 14",
        items: [
          { n: 10, file: "10.html", short: "Document Structure & Metadata", title: "Document Structure & Metadata", tail: "doctype, head/meta, viewport, favicons.", priority: "⭐" },
          { n: 11, file: "11.html", short: "Tables & Lists", title: "Tables & Lists", tail: "table semantics, ordered/unordered/description lists.", priority: "⭐" },
          { n: 12, file: "12.html", short: "HTML5 Elements & Browser APIs", title: "HTML5 Elements & Browser APIs", tail: "canvas/video/audio, data attributes, template.", priority: "⭐" },
          { n: 13, file: "13.html", short: "SEO & Web Semantics", title: "SEO & Web Semantics", tail: "meta tags, structured data, how semantics help SEO.", priority: "⭐" },
          { n: 14, file: "14.html", short: "Inheritance", title: "Inheritance", tail: "which CSS properties inherit, and which don’t.", priority: "⭐" }
        ]
      }
    ]
  },
  "htmlcss/intermediate": {
    track: "HTML & CSS",
    trackIcon: "🎨",
    tier: "Intermediate",
    groups: [
      {
        label: "Questions 1 – 9",
        items: [
          { n: 1, file: "1.html", short: "Specificity", title: "Specificity", tail: "which rule wins, and why.", priority: "🔥" },
          { n: 2, file: "2.html", short: "Positioning", title: "Positioning", tail: "static/relative/absolute/fixed/sticky, containing blocks.", priority: "🔥" },
          { n: 3, file: "3.html", short: "Overflow & Stacking", title: "Overflow & Stacking", tail: "overflow behavior, z-index, stacking contexts.", priority: "🔥" },
          { n: 4, file: "4.html", short: "Flexbox", title: "Flexbox", tail: "main/cross axis, common centering patterns.", priority: "🔥" },
          { n: 5, file: "5.html", short: "CSS Grid", title: "CSS Grid", tail: "template rows/columns/areas, Grid vs. Flexbox.", priority: "🔥" },
          { n: 6, file: "6.html", short: "Responsive Design", title: "Responsive Design", tail: "media queries, mobile-first, fluid layout.", priority: "🔥" },
          { n: 7, file: "7.html", short: "Typography", title: "Typography", tail: "font properties, web fonts, layout shift while fonts load.", priority: "🔥" },
          { n: 8, file: "8.html", short: "Pseudo-classes & Pseudo-elements", title: "Pseudo-classes & Pseudo-elements", tail: ":hover/:nth-child/::before/::after, and their limits.", priority: "🔥" },
          { n: 9, file: "9.html", short: "CSS Variables", title: "CSS Variables", tail: "custom properties, runtime theming, fallback values.", priority: "🔥" }
        ]
      },
      {
        label: "Questions 10 – 13",
        items: [
          { n: 10, file: "10.html", short: "Container Queries", title: "Container Queries", tail: "sizing by container instead of viewport.", priority: "⭐" },
          { n: 11, file: "11.html", short: "Modern CSS Layout", title: "Modern CSS Layout", tail: ":has(), subgrid, and newer layout primitives.", priority: "⭐" },
          { n: 12, file: "12.html", short: "Transitions & Animations", title: "Transitions & Animations", tail: "transition vs. animation, which properties are cheap to animate.", priority: "⭐" },
          { n: 13, file: "13.html", short: "Colors, Backgrounds & Gradients", title: "Colors, Backgrounds & Gradients", tail: "color formats, background shorthand, gradients.", priority: "⭐" }
        ]
      }
    ]
  },
  "htmlcss/advanced": {
    track: "HTML & CSS",
    trackIcon: "🎨",
    tier: "Advanced",
    groups: [
      {
        label: "Questions 1 – 4",
        items: [
          { n: 1, file: "1.html", short: "Browser Rendering", title: "Browser Rendering", tail: "DOM + CSSOM → Render Tree → Layout → Paint → Composite.", priority: "🔥" },
          { n: 2, file: "2.html", short: "CSS Performance", title: "CSS Performance", tail: "layout thrashing, expensive properties, containment.", priority: "🔥" },
          { n: 3, file: "3.html", short: "Production UI Scenarios", title: "Production UI Scenarios", tail: "real layout bugs, cross-cutting debugging scenarios.", priority: "🔥" },
          { n: 4, file: "4.html", short: "Accessibility in Practice", title: "Accessibility in Practice", tail: "auditing an existing app, retrofitting, testing tools.", priority: "🔥" }
        ]
      },
      {
        label: "Questions 5 – 7",
        items: [
          { n: 5, file: "5.html", short: "CSS Cascade Layers", title: "CSS Cascade Layers", tail: "@layer, taming specificity wars at scale.", priority: "⭐" },
          { n: 6, file: "6.html", short: "CSS Architecture", title: "CSS Architecture", tail: "BEM, utility-first, component-scoped styles at scale.", priority: "⭐" },
          { n: 7, file: "7.html", short: "Cross-Browser Compatibility", title: "Cross-Browser Compatibility", tail: "vendor prefixes, feature detection, graceful degradation.", priority: "⭐" }
        ]
      }
    ]
  },
};
