# C# — Interview Question Taxonomy

**Phase 1 of the 7-phase pipeline agreed with the user.** This document answers one question
only: **what could an interviewer ask about C#, for an experienced professional anywhere from
3+ years through senior/lead/architect/principal?** It does **not** decide:

- which tier (Basic/Intermediate/Advanced) a question belongs to,
- interview priority (🔥 Must Know / ⭐ Should Know / 🧠 Deep Dive),
- how questions group into actual RefreshYourself pages,
- page numbers, file names, or anything else about the live site.

Those are Phases 2–7 (review/dedupe → group into pages → assign tier → assign priority → build
roadmap/index → build/update pages) and happen only after this taxonomy itself is approved. **The
already-written C# Basic pages (`csharp/basic/1.html`–`14.html`) are frozen and untouched by this
document** — this is pure raw material for the eventual refresh pass, not an instruction to change
anything live.

## How to read each concept

Per concept, questions are split into up to five variant types (skip whichever don't naturally
apply — not every concept needs all five):

- **Core concept** — the question itself, stated plainly.
- **Understanding** — what actually happens under the hood.
- **Comparison** — this vs. that; when to reach for one over the other.
- **Pitfall** — the mistake or misconception a candidate might fall into.
- **Scenario** — a real situation where this knowledge gets used or tested.

A small number of these are net-new questions beyond the two source lists (the original Basic/
Intermediate/Advanced roadmap and the user's later interview-prep plan), kept deliberately few
and marked **[new]** — each one is either an extremely common real-world interview question on
a topic the source lists already named, or fills an obvious, narrow gap next to a named topic.
This list was tightened once already (an earlier pass over-added; this version matches the
tighter standard used for OOP/.NET/Web API/EF Core/SQL/Azure).

**Scope boundary carried over from the existing spec:** OOP concepts (interfaces, abstract
classes, inheritance, polymorphism as the "four pillars") deliberately live in the OOP's track,
not here — this taxonomy covers C# language mechanics only.

---

## 1. Types & Memory Basics

### Value Types vs. Reference Types
- **Core concept** — What is the actual difference between a value type and a reference type?
- **Understanding** — Where does each live — stack, heap, or "it depends"? What really gets
  copied when you assign one variable to another?
- **Comparison** — `struct` vs. `class` — when would you choose one over the other? **[new]**

### Boxing & Unboxing
- **Core concept** — What is boxing? What is unboxing?
- **Understanding** — When does boxing happen implicitly, without the code visibly doing
  anything special? What happens when a value type is assigned to `object`?
- **Comparison** — `ArrayList` vs. `List<int>` — why does one box and the other doesn't?
- **Pitfall** — Unboxing to the wrong type throws `InvalidCastException` even when the value
  "looks compatible" (e.g. `int` boxed, then unboxed as `long`).
- **Scenario** — What are the real performance implications of boxing in a loop that runs
  millions of times?

### `var` vs. `dynamic` vs. `object`
- **Core concept** — What is the difference between `var`, `dynamic`, and `object`?
- **Understanding** — Is `var` dynamically typed? (No — clarify compile-time inference vs.
  runtime binding.)
- **Comparison** — Who checks the member you're calling, and when — compiler, or runtime?
- **Pitfall** — Assuming `dynamic` is "just a more flexible `var`" rather than deferring all
  member resolution to runtime, with the risk that entails.

### `is` / `as` / Explicit Casting
- **Core concept** — What's the difference between `is`, `as`, and an explicit cast?
- **Comparison** — When does each throw, and when does each just return `false`/`null`?

### Nullable Value Types (`int?`)
- **Core concept** — What happens when an `int` needs to represent "nothing"?
- **Understanding** — What's actually inside a `Nullable<T>` — how does `HasValue`/`Value` work?
- **Pitfall** — Reading `.Value` when `HasValue` is `false` throws `InvalidOperationException`.
- **Comparison** — `??` vs. `??=` — what's the difference in when the right-hand side executes?

---

## 2. Equality & Object Identity

### `==` vs. `.Equals()` vs. `ReferenceEquals()`
- **Core concept** — What's the difference between the three?
- **Understanding** — What does each one actually default to for a plain class?
- **Pitfall** — Assuming `==` always means "same value" — it's identity by default on a class
  until someone overloads it.
- **Scenario** — Two DTOs with identical properties compare unequal in a unit test — why, and
  what's the fix?

### Implementing `Equals()` and `GetHashCode()` Correctly
- **Core concept** — Why must `GetHashCode()` be overridden whenever `Equals()` is?
- **Pitfall** — Basing `GetHashCode()` on a mutable field, so an object's hash changes after
  it's already been inserted into a hash-based collection. **[new]**
- **Comparison** — Overriding `Equals(object)` vs. implementing `IEquatable<T>` — why bother
  with both?

### `IEquatable<T>`
- **Core concept** — What problem does `IEquatable<T>` solve that overriding `Equals(object)`
  alone doesn't?
- **Understanding** — Why is the typed `Equals(T)` faster — what boxing/casting does it avoid?
  **[new]**

---

## 3. Collections & Generics

### `Array` vs. `List<T>`
- **Core concept** — What's the difference?
- **Understanding** — How does `List<T>` actually grow internally when it runs out of capacity?
- **Pitfall** — Reading past the end of either doesn't return `null` — it throws.

### `IEnumerable<T>` vs. `ICollection<T>` vs. `IList<T>`
- **Core concept** — What does each interface actually add over the previous one?
- **Comparison** — Why would a method return `IEnumerable<T>` instead of `List<T>`, even when
  the underlying object is a list? **[new]**

### Generics
- **Core concept** — Why do generics exist — what problem do they solve over `object`-based
  collections?
- **Understanding** — What are generic constraints (`where T : ...`), and why would you need one?

### Indexers
- **Core concept** — What is an indexer, and why write one instead of a method like `GetAt(i)`?

---

## 4. Method & API Design

### `params`, Optional & Named Parameters
- **Core concept** — What's the difference between the three?
- **Pitfall** — Optional parameters and versioning — what happens to callers compiled against an
  old default value when the default changes in a library? **[new]**

### Extension Methods
- **Core concept** — What is an extension method, and how does the compiler actually resolve a
  call to one?
- **Pitfall** — An extension method with the same signature as a real instance method — which
  wins, and why?

### Operator Overloading
- **Core concept** — What is operator overloading, and what's a realistic case for it?
- **Pitfall** — Overloading `==` without also overriding `Equals()`/`GetHashCode()` — what breaks?

### Access Modifiers
- **Core concept** — What are `public`, `private`, `protected`, and `internal`?
- **Comparison** — `protected internal` vs. `private protected` — OR vs. AND, and how each
  crosses (or doesn't cross) the assembly boundary.
- **Pitfall** — Assuming `internal` respects the class hierarchy the same way `protected` does —
  it's purely assembly-based.

### `const` vs. `readonly` vs. `static readonly`
- **Core concept** — What's the difference between the three?
- **Understanding** — Why is a `const` baked into the caller's compiled code, while `readonly`
  isn't?
- **Pitfall** — Changing a `const` in a referenced library doesn't update old callers until they
  recompile.

### Namespaces & the `using` Directive
- **Core concept** — What does a namespace actually do?
- **Pitfall** — Assuming a namespace maps to folder structure, or confusing the `using`
  *directive* (importing a namespace) with the `using` *statement* (disposing a resource) — same
  keyword, two unrelated features. **[new]**

---

## 5. Control Flow & Exception Handling

### `try` / `catch` / `finally`
- **Core concept** — What's the execution order, especially when an exception is thrown?
- **Pitfall** — An uncaught exception does *not* skip `finally`.
- **Scenario** — You return a value from inside a `try` that also has a `finally` — does the
  `finally` block still run, and can it change the return value? **[new]**

### Exception Filters & Custom Exceptions
- **Core concept** — What is an exception filter (`catch (Ex e) when (...)`), and why use one
  instead of catching then re-throwing based on an `if`?
- **Pitfall** — Swallowing an exception's original stack trace by using `throw ex;` instead of
  `throw;` when rethrowing. **[new]**

### `?:` / `??` / `??=`
- **Core concept** — What does each operator do?
- **Pitfall** — `??` only checks for `null` — not `false`, `0`, or an empty string.

### `enum`
- **Core concept** — What is an `enum`, really, underneath?
- **Pitfall** — Casting an out-of-range number to an enum doesn't throw — it just holds an
  invalid value silently.
- **Comparison** — Plain `enum` vs. a `[Flags]` enum — what changes about how values combine?

---

## 6. Resource Management (`IDisposable` & `using`)

### The `using` Statement & `IDisposable`
- **Core concept** — What problem does `IDisposable` + `using` solve?
- **Understanding** — What does the compiler actually expand a `using` statement into (`try` /
  `finally`)?
- **Comparison** — The Dispose pattern vs. a finalizer — why have both, and when does the
  finalizer even run?
- **Pitfall** — Forgetting to call `Dispose()` on a nested disposable field inside your own
  `Dispose()` — the "who owns cleaning up what" problem.
- **Scenario** — Your service is leaking database connections under load — what would you check
  first, and what's the fix?

---

## 7. Modern C# Type Features

### Records vs. Classes
- **Core concept** — What does a `record` give you that a `class` doesn't, by default?
- **Understanding** — Why does a `record`'s equality compare values instead of identity, without
  you writing any code for it?
- **Pitfall** — Assuming a `record` is automatically immutable — it isn't, unless you also use
  `init`-only properties. **[new]**

### Pattern Matching
- **Core concept** — What is pattern matching (`is` patterns, `switch` expressions)?
- **Comparison** — A `switch` statement vs. a `switch` expression — what's actually different?

### Nullable Reference Types (C# 8+)
- **Core concept** — What problem do nullable reference types solve, and what do they *not*
  solve?
- **Pitfall** — Treating a `string?` warning as a hard guarantee — it's a compile-time hint, not
  a runtime check.
- **Comparison** — Nullable *value* types (`int?`, Basic tier's `Nullable<T>`) vs. nullable
  *reference* types — same-sounding name, completely different mechanism.

### `init` / `required` Members
- **Core concept** — What does an `init`-only property allow that a normal setter doesn't?
- **Understanding** — What does the `required` modifier enforce, and when — compile time or
  runtime?

### Immutable Objects
- **Core concept** — What makes an object actually immutable, beyond just "no public setters"?
- **Scenario** — Why is immutability specifically valuable in multi-threaded code?

### Tuples & Deconstruction
- **Core concept** — What is a value tuple, and how is it different from `System.Tuple`?

---

## 8. LINQ & Iterators

### LINQ — Deferred vs. Immediate Execution
- **Core concept** — When does a LINQ query actually run?
- **Understanding** — What makes an operator deferred (`Where`, `Select`) vs. immediate
  (`ToList`, `Count`, `First`)?
- **Pitfall** — Enumerating the same deferred query twice and getting different results because
  the underlying source changed in between. **[new]**

### `IEnumerable<T>` vs. `IQueryable<T>`
- **Core concept** — What's the practical difference when working with EF Core specifically?
  **[new]**

### `yield return` & Custom Iterators
- **Core concept** — What does `yield return` actually do to the method it's written in?
- **Understanding** — Why doesn't the method body run at all until the sequence is enumerated?

---

## 9. Async & Concurrency

### `async` / `await`
- **Core concept** — What does `async`/`await` actually do?
- **Understanding** — What happens internally when `await` is encountered? Does `async` create a
  new thread?
- **Comparison** — `Task` vs. `Thread`? `Task.Run` vs. plain `async`/`await`?
- **Pitfall** — What happens when you don't `await` a `Task` — and what does blocking on
  `.Result` or `.Wait()` do?
- **Scenario** — An API endpoint makes three independent external calls — how would you handle
  them, and what changes if they're dependent on each other?

### `Task` vs. `Thread` vs. `ThreadPool`
- **Core concept** — What's the actual relationship between the three?
- **Comparison** — CPU-bound work vs. I/O-bound work — does that change which of these you reach
  for?

### `SynchronizationContext` & `ConfigureAwait`
- **Core concept** — What is a `SynchronizationContext`, and what does it capture?
- **Understanding** — What does `ConfigureAwait(false)` actually change?
- **Pitfall** — Sync-over-async (blocking on an async call from sync code) and the deadlock it
  can cause in a context that has one (classic ASP.NET, UI apps).

### `lock` / `Monitor` & Race Conditions
- **Core concept** — What is a race condition, concretely?
- **Understanding** — What does `lock` actually do under the hood (relationship to `Monitor`)?

### Cancellation (`CancellationToken`) **[new]**
- **Core concept** — How does cooperative cancellation actually work in .NET? **[new]**
- **Pitfall** — Passing a `CancellationToken` into a method that never checks it — cancellation
  requested, nothing happens. **[new]**

---

## 10. Garbage Collection & the Memory Model

### GC Generations & When Collection Happens
- **Core concept** — What are generations 0, 1, and 2, and why do they exist?
- **Understanding** — What actually triggers a collection?

### The Large Object Heap (LOH)
- **Core concept** — What is the LOH, and what lands on it?
- **Pitfall** — Repeatedly allocating just-over-the-threshold arrays/buffers and causing LOH
  fragmentation without realizing it. **[new]**

---

## 11. Performance & Low-Level

### `Span<T>` & `Memory<T>`
- **Core concept** — What problem do `Span<T>`/`Memory<T>` solve that arrays/`string` slicing
  don't?

### `volatile` & `Interlocked`
- **Core concept** — What does `volatile` actually guarantee?
- **Comparison** — `volatile` vs. `lock` vs. `Interlocked` — when is each the right tool?

### Concurrent Collections
- **Core concept** — Why does `ConcurrentDictionary` exist instead of just locking around a
  regular `Dictionary`?

### Unsafe Code & Pointers
- **Core concept** — What does the `unsafe` keyword actually unlock?

### Allocation & Performance Questions
- **Scenario** — A hot path is under GC pressure — what would you look at first (boxing, LINQ
  allocations, string concatenation, closures capturing state)?

---

## 12. Reflection & Metaprogramming

### Reflection
- **Core concept** — What is reflection, and what can it do that normal code can't?

### Attributes
- **Core concept** — What is an attribute, and how does reflection actually read one at runtime?

### Expression Trees
- **Core concept** — What is an expression tree, and how is it different from a compiled
  delegate?

---

## Coverage note for Phase 2

Every topic from the original C# Basic/Intermediate/Advanced roadmap and from the user's later
interview-prep plan is represented above, regrouped by concept rather than by tier. `[new]`
additions are now limited to roughly a dozen — each one either an extremely common real-world
interview angle on a topic the source lists already named (e.g. the `GetHashCode()` mutable-
field pitfall, or the `finally`-and-return-value scenario on `try`/`catch`/`finally`), or a
narrowly-scoped, obviously-missing topic next to one that was named (`CancellationToken` sits
directly beside the source list's async/concurrency questions). Nothing from the two source
lists was removed.
