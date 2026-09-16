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
        label: "Questions 1–5",
        items: [
          { n: 1, file: "1.html", short: ".NET vs. .NET Framework", title: ".NET vs. .NET Framework", tail: "the actual relationship between the two.", priority: "🔥" },
          { n: 2, file: "2.html", short: "CLR, BCL & Managed Code", title: "CLR, BCL & Managed Code", tail: "what \"managed\" actually means.", priority: "🔥" },
          { n: 3, file: "3.html", short: "SDK vs. Runtime & NuGet", title: "SDK vs. Runtime, .csproj & NuGet", tail: "what each piece of tooling actually does.", priority: "⭐" },
          { n: 4, file: "4.html", short: "What Is MVC",             title: "What Is MVC",             tail: "Model, View, Controller — and why you usually need a ViewModel too.", priority: "🔥" },
          { n: 5, file: "5.html", short: "Filters, CORS & Logging", title: "Filters, CORS, HTTPS & Logging", tail: "four pipeline concerns worth knowing by name.", priority: "⭐" }
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
        label: "Questions 11–16",
        items: [
          { n: 11, file: "11.html", short: "Views, Layouts & Areas",    title: "Views, Layouts & Organization", tail: "partials, and when a project needs Areas.", priority: "⭐" },
          { n: 12, file: "12.html", short: "Configuration Sources",     title: "Configuration Sources", tail: "appsettings, env vars, and the override order.", priority: "🔥" },
          { n: 13, file: "13.html", short: "Authentication Schemes",    title: "Authentication Schemes", tail: "cookie-based vs. token-based, at a high level.", priority: "🔥" },
          { n: 14, file: "14.html", short: "AuthZ Policies & Claims",   title: "Authorization Policies & Claims", tail: "role-based vs. policy-based.", priority: "⭐" },
          { n: 15, file: "15.html", short: "Global Exception Handling", title: "Global Exception Handling", tail: "the standard pattern, and why dev vs. prod must differ.", priority: "🔥" },
          { n: 16, file: "16.html", short: "Generic Host & Lifetime",   title: "The Generic Host & Application Lifetime", tail: "the lifecycle events, and when to hook into each.", priority: "⭐" }
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
  }
};
