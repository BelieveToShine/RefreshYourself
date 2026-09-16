# C# — Roadmap (Phases 2–6)

Builds on [`question-taxonomy.md`](question-taxonomy.md) (Phase 1). This document is Phases
2–6 of the pipeline (see [`specs/README.md`](../README.md)): reviewed/expanded, grouped into
actual pages, tiered by **interview depth** (not difficulty), and given an interview-priority
tag. Phase 7 (writing the final diagram-rich HTML pages) hasn't started — this is the complete,
reviewable plan for what those pages will be and what each should say.

**Goal driving every call below:** someone who reads this track end-to-end should be able to
clear roughly 80% of the C# questions in a real interview — from a 3-year developer's interview
up through a senior/lead/architect one. That's why several concepts below got **split into
multiple pages** (a rich concept deserves room, not a cramped single page) and why almost every
page ends with a scenario question — recall alone doesn't build interview confidence the way
"I've already thought through a version of this" does. Where a concept is relevant at
architect depth, that shows up as an **Architecture** question inside the Advanced page for that
concept — never a separate tier. See
[`rules/interview-depth-and-priority.md`](../../rules/interview-depth-and-priority.md) for the
full audience/tier/priority definition this roadmap follows (updated 2026-09-16 from the
narrower "3+ year developer" framing this track was first drafted under — no content below
needed re-tiering as a result, since Advanced already meant internals/performance/concurrency;
six Advanced pages got an added Architecture question, listed in the changelog at the bottom).

**Priority key:** 🔥 Must Know · ⭐ Should Know · 🧠 Deep Dive — independent of tier and
independent of seniority; an Advanced page can still be 🔥, and a Basic page can still matter to
an architect brushing up on fundamentals.

**The 14 live C# Basic pages are frozen** — listed below for completeness (so the roadmap is
one coherent picture) with their *existing* tier/priority carried over as-is, not re-litigated.

---

## Basic — quickly answered

*(quick recall, not "beginner content" — see product-principle.md)*

### Already live (frozen, unchanged)

| # | Page | Priority |
|---|---|---|
| 1 | Value Types vs. Reference Types | 🔥 |
| 2 | Boxing & Unboxing | 🔥 |
| 3 | `==` vs. `.Equals()` vs. `ReferenceEquals()` | 🔥 |
| 4 | `try` / `catch` / `finally` | 🔥 |
| 5 | `const` vs. `readonly` vs. `static` | 🔥 |
| 6 | Access Modifiers | 🔥 |
| 7 | `Array` vs. `List<T>` | 🔥 |
| 8 | `ref` vs. `out` vs. `in` | 🔥 |
| 9 | `String` vs. `StringBuilder` | ⭐ |
| 10 | Nullable Types (`int?`) | ⭐ |
| 11 | `var` vs. `dynamic` vs. `object` | ⭐ |
| 12 | Enums | ⭐ |
| 13 | `?:` and `??` | ⭐ |
| 14 | Namespaces & `using` | ⭐ |

### New Basic pages

#### 15. `is` / `as` / Explicit Casting 🔥
- **Q: What's the difference between `is`, `as`, and an explicit cast?**
  A: `is` just tests and returns a `bool` (or, with pattern matching, tests *and* binds a typed
  variable). `as` tries the conversion and returns `null` on failure instead of throwing. An
  explicit cast (`(Foo)obj`) throws `InvalidCastException` on failure.
- **Q: When would each one actually throw, vs. just return `false`/`null`?**
  A: Only the explicit cast throws. `is` and `as` are the safe options when you're not sure the
  conversion will succeed.
- **Scenario:** You're filtering a `List<object>` for items of a specific type — which do you
  reach for, and why? → `is` with a pattern (`if (item is Customer c)`) in one step, avoiding a
  separate cast entirely.

#### 16. `params`, Optional & Named Parameters ⭐
- **Q: What's the difference between the three?**
  A: `params` lets a caller pass a variable number of arguments as one array parameter. Optional
  parameters have a compile-time default used when the caller omits them. Named parameters let
  a caller specify arguments out of order by name.
- **Q: What happens to old callers when a library changes an optional parameter's default value?**
  A: Nothing, until they recompile — the default is baked into the *caller's* compiled code at
  compile time, so an old caller keeps using the old default until rebuilt.

#### 17. Tuples & Deconstruction ⭐
- **Q: What is a value tuple, and how is it different from `System.Tuple`?**
  A: `(int, string)` value tuples are lightweight structs with named-or-positional fields and no
  allocation; `System.Tuple` is an older, heap-allocated reference type with generic `Item1`/
  `Item2` names only.
- **Q: When would you reach for a tuple return instead of a small class/record?**
  A: For a quick, private, method-internal grouping of values that doesn't need to be a
  first-class type elsewhere in the codebase.

#### 18. Indexers 🧠
- **Q: What is an indexer, and why write one instead of a method like `GetAt(i)`?**
  A: It lets a custom type support `obj[i]` syntax directly — useful when a type is
  conceptually a collection (a wrapper around a dictionary or array) and `[]` reads more
  naturally than a named method.

---

## Intermediate — tests understanding & practical experience

#### 1. Generics 🔥
- **Q: Why do generics exist — what do they solve over `object`-based collections?**
  A: Type safety without boxing/casting, and compile-time checking instead of runtime
  `InvalidCastException`s.
- **Q: What's a generic constraint (`where T : ...`), and why would you need one?**
  A: It restricts `T` to types with a specific capability (an interface, a base class, `new()`)
  so the generic method can actually call members on `T` instead of only `object`'s.
- **Scenario:** You're writing a generic repository and need to call `.Id` on `T` — what
  constraint do you add? → `where T : IEntity` (or similar), so the compiler knows every `T` has
  an `Id`.

#### 2. `IEnumerable<T>` vs. `ICollection<T>` vs. `IList<T>` ⭐
- **Q: What does each interface add over the last?**
  A: `IEnumerable<T>` only supports forward iteration. `ICollection<T>` adds `Count`,
  `Add`/`Remove`, membership checks. `IList<T>` adds index-based access (`this[int]`).
- **Q: Why would a method return `IEnumerable<T>` instead of `List<T>`, even when the
  underlying object is a list?**
  A: It exposes only what the caller needs (read-only iteration) and keeps the implementation
  free to change later without breaking the public contract.

#### 3. Extension Methods ⭐
- **Q: What is an extension method, and how does the compiler resolve a call to one?**
  A: A `static` method in a `static` class, written as if it were an instance method via a
  `this` first parameter; the compiler rewrites `x.Foo()` into `Class.Foo(x)` at compile time.
- **Q: An extension method has the same signature as a real instance method — which wins?**
  A: The real instance method always wins; extension methods are only considered when no
  matching instance member exists.

#### 4. Operator Overloading 🧠
- **Q: What's a realistic case for overloading an operator?**
  A: A `Money` or `Vector` type where `+`/`-`/`==` reads far more naturally than named methods.
- **Q: What breaks if you overload `==` without also overriding `Equals()`/`GetHashCode()`?**
  A: `==` and `.Equals()` (and hashing in collections) silently disagree about equality —
  exactly the kind of bug that's hard to spot in review.

#### 5. Exception Filters & Custom Exceptions ⭐
- **Q: What is an exception filter (`catch (Ex e) when (...)`), and why not just catch then
  check with an `if`?**
  A: A filter that doesn't match lets the exception keep propagating to the *next* matching
  catch — an `if` inside a catch block would swallow it either way, which changes behavior.
- **Q: When does a custom exception type actually earn its place?**
  A: When callers need to catch *this specific failure* distinctly from other errors — not just
  to attach a nicer message to a built-in exception.
- **Scenario:** Rethrowing inside a `catch` — `throw ex;` vs. `throw;` — which keeps the
  original stack trace? → `throw;`. `throw ex;` resets it to the rethrow point, hiding where
  the exception actually originated.

#### 6. Implementing `Equals()` and `GetHashCode()` Correctly 🔥
- **Q: Why must `GetHashCode()` be overridden whenever `Equals()` is?**
  A: Hash-based collections (`Dictionary`, `HashSet`) require equal objects to produce equal
  hash codes — break that contract and lookups silently fail to find items that *are* equal.
- **Q: What goes wrong if `GetHashCode()` is based on a mutable field?**
  A: An object's hash changes after it's already been inserted into a hash-based collection —
  the collection can no longer find it by its new hash bucket.
- **Q: `Equals(object)` vs. implementing `IEquatable<T>` — why bother with both?**
  A: `IEquatable<T>` gives a strongly-typed `Equals(T)` that avoids a cast/boxing check; the
  `object` override is still needed for callers that only have an `object` reference.

#### 7. `IEquatable<T>` ⭐
- **Q: What does it solve that overriding `Equals(object)` alone doesn't?**
  A: Performance and type safety — no boxing (for a `struct`) or downcast, and the compiler
  catches a mismatched-type comparison instead of it silently returning `false` at runtime.

#### 8. Records vs. Classes 🔥
- **Q: What does a `record` give you that a `class` doesn't, by default?**
  A: Value-based equality and a generated `ToString()` — two `record`s with the same property
  values are `==` and `.Equals()` equal without writing any code.
- **Q: Is a `record` automatically immutable?**
  A: No — only if you also use `init`-only properties (or positional parameters, which are
  `init` by default). A `record` with normal `set` properties is just as mutable as a class.

#### 9. Pattern Matching ⭐
- **Q: What is pattern matching (`is` patterns, `switch` expressions)?**
  A: Syntax for testing a value's shape/type and extracting data from it in one step, instead of
  a type check followed by a separate cast.
- **Q: A `switch` statement vs. a `switch` expression — what's actually different?**
  A: The expression form returns a value directly, requires exhaustiveness (or a `_` discard),
  and has no fall-through — a different construct, not just shorter syntax.

#### 10. Nullable Reference Types (C# 8+) ⭐
- **Q: What problem do they solve, and what do they *not* solve?**
  A: They surface a compile-time *warning* when a possibly-null reference is used unsafely —
  they add no runtime null-check at all, so a `string?` warning is a hint, not a guarantee.
- **Q: How is this different from `int?` (Basic tier's `Nullable<T>`)?**
  A: Completely different mechanism despite the similar name — `int?` is a real runtime wrapper
  type; nullable reference types are purely a compiler annotation with zero runtime presence.

#### 11. `init` / `required` Members ⭐
- **Q: What does an `init`-only property allow that a normal setter doesn't?**
  A: It can be set during object initialization (including object-initializer syntax) but
  becomes read-only immediately after construction.
- **Q: What does `required` enforce, and when?**
  A: The compiler refuses to compile a construction that doesn't set that member — a
  compile-time guarantee, not a runtime check.

#### 12. Immutable Objects ⭐
- **Q: What actually makes an object immutable, beyond "no public setters"?**
  A: Every field must be set once at construction and never change after — including any
  mutable object it holds a reference to (a `readonly List<T>` field is still mutable *through*
  that reference).
- **Scenario:** Why does immutability specifically help in multi-threaded code? → An immutable
  object can be freely shared across threads with zero locking, since no thread can ever
  observe a partial or changing state.

#### 13. LINQ — Deferred vs. Immediate Execution 🔥
- **Q: When does a LINQ query actually run?**
  A: Not when it's written — deferred operators (`Where`, `Select`) only build up the query;
  it actually executes when enumerated (`foreach`, `ToList()`, `Count()`, etc.).
- **Q: What breaks if the same deferred query is enumerated twice while its source changed in
  between?**
  A: Each enumeration re-runs the query against the *current* state of the source — the two
  results can legitimately differ.
- **Scenario:** A LINQ query inside a loop keeps re-running the same expensive filter — why, and
  the fix? → It's deferred and gets re-evaluated every iteration; materialize it once with
  `.ToList()` before the loop.

#### 14. `yield return` & Custom Iterators ⭐
- **Q: What does `yield return` do to the method it's in?**
  A: The compiler rewrites the method into a state machine that produces one value per call and
  pauses — the method body doesn't run at all until the sequence is actually enumerated.

#### 15. `async` / `await` — the Basics 🔥
- **Q: What does `async`/`await` actually do?**
  A: `async` marks a method that can pause at an `await` without blocking the calling thread;
  `await` schedules the rest of the method to resume once the awaited `Task` completes.
- **Q: Does `async` create a new thread?**
  A: No — by itself it doesn't. It's about *not blocking* the current thread while waiting, not
  about parallelism.
- **Q: What happens if you don't `await` a `Task`?**
  A: The call returns immediately and keeps running in the background — any exception it
  throws is silently lost unless something later awaits or observes that task.

#### 16. `Task` vs. `Thread` vs. `ThreadPool` 🔥
- **Q: What's the actual relationship between the three?**
  A: A `Thread` is a real OS thread. `ThreadPool` reuses a managed pool of threads instead of
  creating one per unit of work. `Task` is a higher-level abstraction that usually runs on the
  `ThreadPool` (for CPU work) but for `async`/`await` I/O doesn't need a thread at all while
  waiting.
- **Scenario:** CPU-bound work vs. I/O-bound work — does that change which of these you reach
  for? → CPU-bound: `Task.Run` (uses the thread pool). I/O-bound: plain `async`/`await` against
  an I/O API — no thread is occupied while waiting on the network/disk.

#### 17. Cancellation (`CancellationToken`) ⭐
- **Q: How does cooperative cancellation actually work?**
  A: A `CancellationTokenSource` creates a token; long-running code periodically checks
  `token.IsCancellationRequested` (or calls `token.ThrowIfCancellationRequested()`) and stops
  itself — nothing forces it to stop from the outside.
- **Q: What happens if a method takes a `CancellationToken` but never checks it?**
  A: Cancellation is requested but nothing happens — the operation runs to completion anyway.

#### 18. `IDisposable` & `using` — the Basics 🔥
- **Q: What problem does `IDisposable` + `using` solve?**
  A: A reliable way to release an unmanaged or scarce resource (a file handle, a connection)
  even if an exception is thrown partway through using it.
- **Q: What does the compiler expand a `using` statement into?**
  A: A `try`/`finally`, calling `Dispose()` in the `finally` block.

---

## Advanced — internals, trade-offs, performance, architecture, real scenarios

#### 1. `async`/`await` Internals 🔥
- **Q: What is a `SynchronizationContext`, and what does it capture?**
  A: A way of saying "resume this continuation on a specific context" — e.g. the UI thread in a
  desktop app — captured automatically when you `await` unless told not to.
- **Q: What does `ConfigureAwait(false)` actually change?**
  A: It tells the continuation *not* to resume on the captured context, resuming on any
  available thread pool thread instead — mainly a library-code optimization.
- **Q: What is sync-over-async, and why can it deadlock?**
  A: Blocking on an async call (`.Result`, `.Wait()`) from a thread that owns a
  `SynchronizationContext` (classic ASP.NET, UI apps) — the blocked thread is exactly the thread
  the awaited continuation needs to resume on, so neither ever proceeds.
- **Architecture:** A service handles thousands of concurrent requests, each making downstream
  I/O calls — how do you decide between fully async I/O vs. a bounded pool of dedicated worker
  threads, and what actually breaks first if you get that choice wrong at scale?
  A: Async I/O scales far better here since it doesn't occupy a thread while waiting — a
  thread-per-request model exhausts the thread pool under load, causing queuing/timeouts long
  before CPU is actually the bottleneck.

#### 2. `lock` / `Monitor` & Race Conditions 🔥
- **Q: What is a race condition, concretely?**
  A: Two threads reading/modifying shared state without coordination, where the final result
  depends on unpredictable timing.
- **Q: What does `lock` actually do under the hood?**
  A: `lock (obj) { ... }` is syntactic sugar over `Monitor.Enter`/`Monitor.Exit` (in a
  `try`/`finally`) — it takes an exclusive lock on `obj`'s monitor for the block's duration.
- **Architecture:** You need a shared, in-memory cache read constantly and written
  occasionally, across many threads — how would you structure the locking so reads don't
  serialize behind each other?
  A: A reader-writer lock (`ReaderWriterLockSlim`) or a concurrent collection built for this
  shape, rather than a single `lock` around the whole cache — a plain `lock` would force every
  read to wait behind every other read, not just behind writes.

#### 3. The Dispose Pattern & Finalizers ⭐
- **Q: The Dispose pattern vs. a finalizer — why have both, and when does the finalizer even
  run?**
  A: `Dispose()` is deterministic — called explicitly or via `using`. A finalizer is the GC's
  last-resort safety net, run non-deterministically (sometime after the object becomes
  unreachable) only if `Dispose()` was never called — and it should call
  `GC.SuppressFinalize(this)` once `Dispose()` has run, so the GC doesn't bother finalizing an
  already-cleaned-up object.
- **Scenario:** Your service is leaking database connections under load — what would you check?
  → whether every code path actually reaches `Dispose()` (including exception paths), and
  whether a nested disposable field is being disposed by its owner.
- **Architecture:** In a large application wired up with a DI container, who should actually
  own calling `Dispose()` on a service's disposable dependencies?
  A: The container itself, tied to the scope that created the dependency (e.g. one per web
  request) — application code should very rarely call `Dispose()` directly on an injected
  dependency; doing so risks disposing something another consumer in the same scope still needs.

#### 4. `IEnumerable<T>` vs. `IQueryable<T>` ⭐
- **Q: What's the practical difference, specifically with EF Core?**
  A: `IQueryable<T>` builds an expression tree that gets translated into SQL and executed by
  the database; switching to `IEnumerable<T>` mid-query (e.g. via a method LINQ-to-SQL can't
  translate) pulls everything into memory first and filters in .NET from that point on.
- **Scenario:** Calling `.ToList()` too early — what goes wrong? → The whole table (or an
  unfiltered chunk of it) gets pulled into memory before any further filtering happens in .NET
  instead of the database.
- **Architecture:** In a layered application, should a repository return `IQueryable<T>` up to
  the service layer, or always materialize to `IEnumerable<T>`/a list first?
  A: Generally materialize at the repository boundary — leaking `IQueryable<T>` upward lets
  callers keep composing the query, which quietly couples the service layer to EF Core/the
  database and makes it easy to accidentally build an inefficient query far from where it runs.

#### 5. Garbage Collection — Generations & the Large Object Heap 🔥
- **Q: What are generations 0, 1, and 2, and why do they exist?**
  A: Most objects die young, so the GC checks generation 0 (newest, smallest, cheapest to scan)
  far more often than generation 2 (long-lived survivors) — a performance optimization based on
  that observed lifetime pattern.
- **Q: What is the LOH, and what lands on it?**
  A: A separate heap for large allocations (≈85KB+) that's collected less often and, unlike the
  regular heap, historically isn't compacted by default — which can cause fragmentation from
  repeated large allocations.
- **Architecture:** You're designing a low-latency service where occasional multi-second GC
  pauses are unacceptable — what would you actually do about it?
  A: Minimize allocation rate in hot paths (pooling/reusing buffers, avoiding boxing and LINQ
  allocations), consider Server GC vs. Workstation GC and concurrent/background GC settings, and
  in the most extreme cases evaluate `Span<T>`-based buffer reuse or a redesign that avoids
  large short-lived allocations entirely — not just "call `GC.Collect()` and hope."

#### 6. `Span<T>` & `Memory<T>` ⭐
- **Q: What problem do they solve that array/string slicing doesn't?**
  A: A zero-allocation *view* over existing contiguous memory (an array, a string, stack
  memory) — slicing a normal array or string allocates a new copy; `Span<T>` doesn't.
- **Q: Why is `Span<T>` restricted from being a field on a heap-allocated class, or used across
  an `await`?**
  A: It can point at stack memory, so it must never outlive the stack frame that created it —
  both of those situations could let it do exactly that.

#### 7. `volatile` & `Interlocked` ⭐
- **Q: What does `volatile` actually guarantee?**
  A: That reads/writes to that field aren't reordered or cached per-thread — it does **not**
  make a read-modify-write sequence (like `x++`) atomic.
- **Q: `volatile` vs. `lock` vs. `Interlocked` — when is each right?**
  A: `volatile` for a simple visibility flag; `Interlocked` for a single atomic
  increment/compare-exchange without the cost of a full lock; `lock` when more than one
  operation needs to happen as one atomic unit.

#### 8. Concurrent Collections ⭐
- **Q: Why does `ConcurrentDictionary` exist instead of just locking around a regular
  `Dictionary`?**
  A: Finer-grained, lock-free (or striped-lock) internals tuned for concurrent access — locking
  an entire regular dictionary serializes *every* access, even unrelated ones.
- **Q: Does a concurrent collection make a multi-step operation atomic?**
  A: No — only the individual operation (a single `Add`, a single `TryUpdate`) is guaranteed
  atomic; a read-then-write sequence across two calls still needs its own coordination.
- **Architecture:** Multiple service instances need a shared, frequently-updated in-memory
  cache — is a `ConcurrentDictionary` per instance the right architecture?
  A: Only if some staleness/inconsistency across instances is acceptable — a `ConcurrentDictionary`
  solves thread-safety *within one process*; consistency *across* processes needs a distributed
  cache (e.g. Redis) instead, a different problem entirely.

#### 9. Unsafe Code & Pointers 🧠
- **Q: What does the `unsafe` keyword actually unlock?**
  A: Raw pointer arithmetic and direct memory access — bypassing the type/bounds safety the CLR
  normally guarantees.
- **Q: What's a realistic, defensible reason to reach for it in application code?**
  A: A narrow, provably-hot path (e.g. pixel/byte-buffer manipulation) where profiling has
  already shown the managed alternative is the actual bottleneck — not a default choice.

#### 10. Reflection ⭐
- **Q: What can reflection do that normal code can't?**
  A: Inspect and invoke types, members, and metadata that aren't known until runtime — the
  basis for serializers, DI containers, and ORMs.
- **Q: What's the performance risk of using it in a hot path?**
  A: Reflection-based member access is substantially slower than a direct/compiled call —
  fine for one-time setup, risky inside a loop that runs constantly.

#### 11. Attributes 🧠
- **Q: What is an attribute, and how does reflection actually read one at runtime?**
  A: Declarative metadata attached to a type/member/parameter; code that cares (a serializer, a
  framework) uses reflection to query for a specific attribute type on that member and act on it.

#### 12. Expression Trees 🧠
- **Q: What is an expression tree, and how is it different from a compiled delegate?**
  A: A data structure *representing* code (as an inspectable tree of nodes) rather than
  compiled, runnable code — something can walk and translate it (e.g. into SQL) instead of
  just executing it.
- **Q: Why does EF Core specifically need expression trees instead of accepting a
  `Func<T, bool>`?**
  A: A compiled `Func` can only be *run*, never *read* — EF Core needs to inspect your LINQ
  predicate's actual logic to translate it into SQL, which only an expression tree makes
  possible.

#### 13. C# Performance Checklist ⭐
- **Scenario:** A hot path is under GC pressure — what would you check first?
  A: Boxing of value types, unnecessary LINQ allocations (closures, iterator objects), string
  concatenation in a loop (vs. `StringBuilder`), and closures capturing more state than they
  need to.

---

## Totals & what changed from the old roadmap

| Tier | Old plan | This roadmap |
|---|---|---|
| Basic | 14 (all written) | 18 (14 live + 4 new) |
| Intermediate | 14 (roadmap only) | 18 |
| Advanced | 12 (roadmap only) | 13 |
| **Total** | **40** | **49** |

Notable re-tiering calls (interview depth, not the old plan's tier):
- **Tuples & deconstruction** moved Intermediate → Basic — "what is a tuple" is genuinely a
  quick-recall question once you separate it from *when* you'd design with one.
- **`IDisposable`/`using` was split in two**: the "what problem does it solve" half is Basic-
  quick-recall-adjacent but landed at Intermediate (🔥) since it's asked constantly at that
  depth; the Dispose-pattern/finalizer internals stayed Advanced, matching the old plan.
- **`async`/`await` was split into three pages** (Basics → Intermediate, Task/Thread/ThreadPool
  → Intermediate, internals → Advanced) instead of one dense page, so each stays answerable in
  the time an interviewer actually gives you.
- **A dedicated Performance Checklist page** was added at Advanced — pure scenario, no new
  concept, because "what would you check" is asked constantly and deserves a direct answer
  rather than being scattered as a footnote on other pages.

Every scenario question above is genuinely new relative to the taxonomy (which only listed the
bare concept/comparison questions) — added specifically so a reader has already rehearsed a
plausible follow-up, not just the textbook definition.

### 2026-09-16 update — broader audience, architecture questions added

The audience/tier/priority definition was refined (see
[`rules/interview-depth-and-priority.md`](../../rules/interview-depth-and-priority.md)): the
site targets 3+ years **through** senior/lead/architect/principal, not capped near the low end,
and Advanced explicitly includes architecture/trade-off questions with no separate "Architect"
tier. This didn't change any tier or priority assignment above — Advanced already meant
internals/performance/concurrency, which is the right depth — but it added an explicit
**Architecture** question to six Advanced pages where that depth is real, following the
Basic→Intermediate→Advanced→Architecture progression pattern (worked example: Dependency
Injection, in the rule file):

- async/await internals — async I/O vs. dedicated worker threads at scale
- lock/Monitor & race conditions — structuring a shared cache's locking so reads don't serialize
- The Dispose pattern & finalizers — who owns disposing a DI-injected dependency
- IEnumerable\<T\> vs. IQueryable\<T\> — where a repository should stop exposing `IQueryable`
- Garbage Collection — designing a low-latency service around GC pause avoidance
- Concurrent collections — per-process thread safety vs. cross-instance consistency

The remaining seven Advanced pages didn't get one — not every concept needs an architecture
question, and forcing one on, say, `Span<T>`/`Memory<T>` or Unsafe code would have been padding.
