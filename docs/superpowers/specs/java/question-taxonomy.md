# Java — Interview Question Taxonomy

**Phase 1 of the 7-phase pipeline** (see [`specs/README.md`](../README.md)). Answers one question
only: **what could an interviewer ask about Java, for an experienced professional anywhere from
3+ years through senior/lead/architect/principal?** Does not decide tier, priority, page
grouping, or file names — that's [`roadmap.md`](roadmap.md) (Phases 2–6).

## Source

The entire raw list below is the user's own proposed roadmap, handed over already organized into
3 tiers (Core Java fundamentals / Collections+generics+modern Java / JVM+concurrency+performance)
plus a dedicated 10-scenario section. This session's Phase 1 job was to format it into the site's
concept-group taxonomy shape and add the Core/Understanding/Pitfall detail each page needs before
Phase 7 writing starts.

**Scope boundary (confirmed before writing a single question):** this track owns **core Java the
language and platform** — syntax, OOP mechanics, the collections framework, streams/lambdas, the
JVM, memory, and concurrency. It does **not** own Spring Boot, Spring Data/JPA, or distributed-
systems patterns (Kafka, circuit breakers, the outbox pattern, etc.) — the user's own proposal
explicitly recommends launching Core Java first and treating Spring Boot/backend topics as a
later addition (its own subsection or a separate track once it's grown). That whole section is
**out of scope for this Phase 7 pass** and is not taxonomized here — see `roadmap.md`'s "Known
gaps" for the explicit deferral note.

## How to read each concept

Same variant types as every other track's Phase 1: **Core concept** (what is it) ·
**Understanding** (what happens under the hood) · **Comparison** (X vs. Y, when to use which) ·
**Pitfall** (the mistake/misconception) · **Scenario** (a real situation requiring the knowledge).

---

## Group 1 — JVM Execution Model & Memory Fundamentals (Basic)

### JDK vs. JRE vs. JVM
- **Core concept** — JVM = the runtime engine that executes bytecode. JRE = JVM + the core
  class libraries needed to run a compiled program. JDK = JRE + the development tools (compiler
  `javac`, debugger, etc.) needed to build one.
- **Comparison** — You *run* Java with a JRE (or just the JVM via a modern JDK — standalone JREs
  were discontinued after Java 8); you *develop* Java with a JDK.

### How Java Code Executes — Compilation and Bytecode
- **Core concept** — `javac` compiles `.java` source into platform-independent `.class` bytecode;
  the JVM then interprets/JIT-compiles that bytecode into native machine code at runtime. This is
  the mechanism behind "write once, run anywhere."
- **Understanding** — Early execution is interpreted (slow, immediate); the JIT compiler profiles
  hot code paths and compiles them to native code as execution continues (see Group 15's JIT page
  for the depth version — this page owns the high-level compile→bytecode→run pipeline only).

### Primitive Types vs. Reference Types
- **Core concept** — 8 primitives (`byte`, `short`, `int`, `long`, `float`, `double`, `char`,
  `boolean`) hold their value directly, live on the stack (as locals) or inline in an object, and
  have a fixed default/zero value. Reference types (classes, interfaces, arrays) hold a reference
  to an object on the heap; an uninitialized reference field defaults to `null`.
- **Pitfall** — A primitive can never be `null`; this is exactly why `Optional<Integer>`/wrapper
  types exist for "value or absence."

### Stack vs. Heap Memory
- **Core concept** — Each thread gets its own **stack**: method call frames, local variables, and
  primitive values live there, popped automatically when a method returns. The **heap** is one
  shared memory area (per JVM instance) holding every object instance and array, managed by the
  garbage collector, not freed on a fixed schedule.
- **Pitfall** — A `StackOverflowError` (stack exhausted, usually uncontrolled recursion) and an
  `OutOfMemoryError` (heap exhausted) are different failures with different root causes — don't
  conflate them.

---

## Group 2 — Equality, Identity, and Strings (Basic)

### `==` vs. `equals()`
- **Core concept** — `==` on reference types compares **identity** (same object in memory); on
  primitives it compares **value**. `equals()` is a method, inherited from `Object` (default:
  identity comparison) and commonly overridden (e.g. by `String`, records, or a custom class) to
  compare **logical/content** equality instead.
- **Pitfall** — Comparing two boxed `Integer`s with `==` works "by accident" for small cached
  values (-128 to 127, via the Integer cache) and breaks for larger ones — a classic trap, see
  Group 1's wrapper page for the caching mechanism.

### `equals()` and `hashCode()` Contract
- **Core concept** — The contract: if two objects are `equals()`, they **must** return the same
  `hashCode()`. The reverse isn't required (different objects *can* share a hash — a collision),
  but violating the forward rule breaks any hash-based collection (`HashMap`, `HashSet`).
- **Pitfall** — Overriding `equals()` without overriding `hashCode()` (or vice versa) silently
  breaks lookups in hash-based collections — an object that `equals()` another may land in a
  different bucket and never be found. Always override both together.

### String vs. `StringBuilder` vs. `StringBuffer`
- **Core concept** — `String` is **immutable** — every "modification" (`+`, `concat`,
  `replace`) creates a brand-new `String` object. `StringBuilder` is a **mutable** sequence of
  characters, built for efficient repeated modification, not thread-safe. `StringBuffer` is the
  same mutable API, but every method is `synchronized` — thread-safe, at a real throughput cost.
- **Comparison** — Default to `StringBuilder` for single-threaded string building (loops,
  concatenation); reach for `StringBuffer` only when the same builder instance is genuinely
  shared across threads (rare — most code should just confine a `StringBuilder` to one thread).

### String Pool and String Interning
- **Core concept** — String literals (`"abc"`) are stored in a special pool inside the heap
  (moved there from PermGen as of Java 7) so identical literals share one object — `"abc" ==
  "abc"` is `true`. `new String("abc")` always creates a separate heap object, bypassing the pool,
  so `new String("abc") == "abc"` is `false`. `.intern()` manually pulls a `String` into (or
  returns the existing match from) the pool.
- **Trap-adjacent pitfall** — This is exactly why `String` equality should always use `.equals()`,
  never `==` — code that "worked" with `==` because every string happened to be a literal breaks
  the moment a `new String(...)` or any runtime-built string enters the comparison.

---

## Group 3 — Keywords, Modifiers, and OOP Mechanics (Basic)

### `final` vs. `finally` vs. `finalize`
- **Core concept** — Three unrelated keywords that happen to share a root word. `final` is a
  modifier: a final variable can't be reassigned, a final method can't be overridden, a final
  class can't be extended. `finally` is a block that always runs after a `try`/`catch`, whether
  an exception was thrown or not (barring a JVM exit or crash). `finalize()` is a deprecated
  `Object` method the GC *used* to call before reclaiming an object — removed for deprecation in
  modern Java (deprecated since Java 9, marked for removal and no longer relied upon; use
  `try`-with-resources/`Cleaner` for cleanup instead, see Group 11 and Group 15's references page).

### `static` Members and Static Initialization
- **Core concept** — `static` members belong to the **class**, not any instance — one shared
  copy. A `static` initializer block runs once, when the class is first loaded, before any
  instance is created or static member accessed.
- **Understanding** — Static initializer blocks run in the order they're declared, interleaved
  with static field initializers in source order, triggered by class *initialization* (not
  loading) — see Group 15's class-loading page for the loading-vs-initialization distinction.

### Method Overloading vs. Overriding
- **Core concept** — Overloading: same method name, different parameter list, resolved at
  **compile time** based on the declared argument types (static/early binding). Overriding: a
  subclass redefines a parent's method with the identical signature, resolved at **runtime**
  based on the object's actual type (dynamic/late binding, via virtual method dispatch).
- **Pitfall** — Overload resolution picks the most specific applicable method at compile time
  based on the *declared* reference type, not the runtime type — passing a subclass reference
  typed as the superclass still resolves overloads against the superclass type.

### Abstract Class vs. Interface
- **Core concept** — An abstract class can hold state (instance fields), constructors, and a mix
  of abstract + concrete methods, but a class can `extend` only one. An interface traditionally
  held only abstract method signatures and constants; modern Java (8+) added `default` and
  `static` methods with bodies, and a class can `implement` many interfaces.
- **Comparison** — Reach for an abstract class when subclasses share real state/behavior and a
  genuine "is-a" hierarchy; reach for an interface to describe a capability/contract that
  unrelated classes can all opt into (multiple interfaces, no shared state).

### Encapsulation, Inheritance, Polymorphism, and Abstraction
- **Core concept** — The four pillars. Encapsulation: hide internal state behind a controlled
  API (private fields + public methods). Inheritance: a class reuses/extends another's
  behavior (`extends`). Polymorphism: one interface, many concrete behaviors, resolved at
  runtime (overriding) or compile time (overloading). Abstraction: expose *what* something does
  without the caller needing to know *how*.

### Access Modifiers
- **Core concept** — `private` (class only) → default/package-private (same package) →
  `protected` (package + subclasses, even in other packages) → `public` (everywhere). Unlike
  C#, Java has **no** combinable modifier (no equivalent of `protected internal`) — these four
  sit on one single increasing-visibility spectrum, not two independent boundaries.

### Constructor Chaining and Initialization Order
- **Core concept** — `this(...)` calls another constructor in the same class; `super(...)` calls
  the parent's constructor — either must be the very first statement if used, and a constructor
  implicitly calls `super()` if neither is written. Real initialization order: static
  initializers (once, at class load) → instance field initializers + instance initializer blocks
  (in source order) → the constructor body, and critically, the **superclass's entire
  construction completes before the subclass constructor body runs.**
- **Pitfall** — Calling an overridable instance method from a constructor is dangerous: if a
  subclass overrides it, the override can run **before** the subclass's own field initializers
  have executed, operating on not-yet-initialized state.

### Pass-by-Value in Java
- **Core concept** — Java is **always** pass-by-value — there is no pass-by-reference. For a
  reference-type argument, the *value being copied* is the reference itself (the pointer), not
  the object — so a method can mutate the object the reference points to, but reassigning the
  parameter inside the method never affects the caller's variable.
- **Trap-adjacent pitfall** — This is one of the most commonly mis-explained Java facts; "Java
  passes objects by reference" is a wrong statement that happens to produce right-looking
  behavior half the time (because mutating a shared object looks like a reference-semantics
  effect) — the parameter itself is still a value-copied reference.

### `this` vs. `super`
- **Core concept** — `this` refers to the current instance; `super` refers to the parent class's
  version of a member/constructor, used to access an overridden method's original implementation
  or disambiguate a shadowed field.

### `instanceof`, Casting, and Type Checking
- **Core concept** — `instanceof` tests whether an object is of a given type (or subtype) at
  runtime, returning a `boolean`. A cast (`(Type) obj`) doesn't check anything itself — it throws
  `ClassCastException` at runtime if the object genuinely isn't that type.
- **Comparison** — Modern Java's `instanceof` pattern matching (finalized **Java 16**, JEP 394)
  combines the test and the cast: `if (obj instanceof Cat c) { c.meow(); }` — `c` is only in
  scope (and only bound) inside the branch where the check passed.

### Packages and Imports
- **Core concept** — A package is a namespace (and a folder-structure convention) that groups
  related classes and controls default (package-private) visibility; `import` just brings a
  fully-qualified name into scope for unqualified use — it does not affect runtime behavior or
  performance (a common misconception).

---

## Group 4 — Immutability, Wrappers, and Modern Type Syntax (Basic)

### Immutability and Designing Immutable Classes
- **Core concept** — An immutable object's state can never change after construction. Recipe:
  make the class `final` (no subclass can add mutable behavior), all fields `private final`, no
  setters, defensively copy any mutable field passed in/out (e.g. a `List` or `Date`), and never
  expose a mutable internal object by reference.
- **Comparison** — Records (see below) give you most of this recipe automatically, but a record
  with a mutable component (e.g. a `List` field) still needs a defensive copy in its constructor
  to be *truly* immutable — the record itself doesn't enforce that for you.

### Wrapper Classes, Autoboxing, and Unboxing
- **Core concept** — Each primitive has a corresponding wrapper object (`int`→`Integer`,
  `boolean`→`Boolean`, …). Autoboxing/unboxing is the compiler automatically converting between
  them (`Integer i = 5;` boxes; `int j = i;` unboxes).
- **Pitfall** — `Integer` caches instances for values **-128 to 127** (`Integer.valueOf`, used by
  autoboxing) — so `==` happens to "work" in that range and silently breaks outside it; unboxing a
  `null` wrapper (e.g. in a ternary that mixes a wrapper and a primitive branch) throws a
  `NullPointerException` at the unboxing point, not somewhere obviously connected to the `null`.

### `var` and Local Variable Type Inference
- **Core concept** — `var` (Java 10+) lets the compiler infer a local variable's type from its
  initializer — it is **not** dynamic typing; the inferred type is fixed and checked at compile
  time, identical in effect to spelling the type out. Only usable for local variables with an
  initializer (not fields, parameters, or return types).

### Enums
- **Core concept** — A `enum` is a fixed set of named constant instances of a type-safe class —
  each constant can itself hold fields, constructors, and even its own method body (a per-
  constant anonymous subclass), not just a bare label.

### Records and Data-Carrying Types
- **Core concept** — `record` (finalized **Java 16**, JEP 395) is a compact syntax for an
  immutable data-carrier: declaring the components generates a canonical constructor, private
  final fields, public accessor methods (named like the component, not `getX()`), and
  `equals()`/`hashCode()`/`toString()` based on every component — all in one line.
- **Pitfall** — A record's generated `equals()`/`hashCode()` use the components' own
  `equals()`/`hashCode()` — if a component is a mutable object (an array, a mutable `List`), the
  record's generated equality can behave unexpectedly (arrays, for instance, never compare by
  content via `equals()` even inside a record) and the record is *not* truly deep-immutable
  unless you defensively copy that component yourself in a custom constructor.

---

## Group 5 — Collections Overview (Intermediate)

### `List` vs. `Set` vs. `Map` vs. `Queue`
- **Core concept** — Four root collection shapes. `List`: ordered, indexed, allows duplicates.
  `Set`: no duplicates (per its equality contract), generally unordered (though `LinkedHashSet`/
  `TreeSet` add ordering). `Map`: key→value pairs, unique keys. `Queue`: ordered for
  processing (typically FIFO; `Deque` adds both-ends access, `PriorityQueue` orders by priority
  not insertion order).

### `ArrayList` vs. `LinkedList`
- **Core concept** — `ArrayList` is backed by a resizable array: O(1) indexed `get`/`set`, O(n)
  insert/remove in the middle (shifts elements), amortized O(1) `add` at the end. `LinkedList` is
  a doubly-linked list: O(1) insert/remove at either end, O(n) indexed access (must walk the
  list), and carries more per-element memory overhead (two extra object references per node).
- **Pitfall** — "`LinkedList` is faster for insertion" is only true for insertion at a *known*
  node reference (e.g. via an `Iterator`/`ListIterator`), not for `list.add(middleIndex, x)` —
  that call still has to walk to the index first, so it's O(n) either way, and `ArrayList` is
  usually faster in practice due to cache locality.

### `HashMap` vs. `Hashtable` vs. `ConcurrentHashMap`
- **Core concept** — `HashMap`: not thread-safe, allows one `null` key and multiple `null`
  values, the modern default. `Hashtable`: a legacy (pre-Collections-framework) thread-safe map,
  every method `synchronized` on the whole table (poor concurrent throughput), no `null`
  keys/values allowed. `ConcurrentHashMap`: thread-safe with fine-grained internal locking (not
  one lock for the whole map — see Group 18), no `null` keys/values allowed, built for real
  concurrent throughput.
- **Comparison** — Never reach for `Hashtable` in new code — it's legacy; the real choice is
  `HashMap` (single-threaded or externally synchronized) vs. `ConcurrentHashMap` (genuine
  concurrent access).

### `HashMap` Internals — Hashing, Collisions, and Resizing
- **Core concept** — A key's `hashCode()` is spread (via a supplemental hash function) and
  masked down to pick a bucket index into an internal array of buckets. Collisions (two keys
  landing in the same bucket) are stored as a linked list of entries per bucket — **since Java
  8**, a bucket with 8+ colliding entries (and a sufficiently large table) converts to a
  balanced red-black tree, turning worst-case O(n) lookup into O(log n).
- **Understanding** — Resizing (doubling the bucket array) triggers once the map's size exceeds
  `capacity × loadFactor` (defaults: initial capacity 16, load factor 0.75) — every existing
  entry gets rehashed into the new, larger array, which is why pre-sizing a `HashMap` you know
  will grow large avoids repeated resize costs.

### `HashSet` Internals
- **Core concept** — `HashSet` is implemented as a thin wrapper around a `HashMap<E, Object>`
  where every value is a shared dummy placeholder object — every `HashMap` internals fact above
  (hashing, collision buckets, resizing, load factor) applies identically to `HashSet`.

---

## Group 6 — Ordering, Iteration, and Comparison (Intermediate)

### `Comparable` vs. `Comparator`
- **Core concept** — `Comparable<T>` is implemented *by* the class itself, defining one single
  "natural ordering" via `compareTo()`. `Comparator<T>` is a separate strategy object passed
  *into* a sort call, letting you define any number of orderings without touching the class
  itself — and (Java 8+) composable via `Comparator.comparing(...).thenComparing(...)`.

### `Iterator` vs. `ListIterator`
- **Core concept** — `Iterator` is the universal interface: forward-only traversal plus
  `remove()`. `ListIterator` (available only on `List`s) adds backward traversal, `set()` to
  replace the last-returned element, `add()` to insert mid-traversal, and index-position queries.

### Fail-Fast vs. Fail-Safe (Weakly Consistent) Iteration
- **Core concept** — Fail-fast iterators (`ArrayList`, `HashMap`'s default views) track a
  modification count and throw `ConcurrentModificationException` the moment they detect the
  backing collection changed mid-iteration (structurally) by anything other than the iterator's
  own `remove()`. Fail-safe/weakly-consistent iterators (`ConcurrentHashMap`,
  `CopyOnWriteArrayList`) never throw — they iterate over a stable snapshot or tolerate
  concurrent structural changes, possibly missing/including an update made during the iteration.
- **Pitfall** — Calling `list.remove(x)` directly inside a `for-each` loop over that same list is
  the single most common way to trigger `ConcurrentModificationException` — the fix is the
  iterator's own `remove()`, or Java 8's `Collection.removeIf()`.

---

## Group 7 — Generics (Intermediate)

### Generics, Type Erasure, and Bounded Types
- **Core concept** — Generic type information (`List<String>`'s `String`) exists only at
  **compile time** for type-checking — the compiler erases it to raw types (`List`) with
  inserted casts for bytecode, so at runtime a `List<String>` and a `List<Integer>` are
  genuinely indistinguishable (`list.getClass()` is identical for both). A bounded type parameter
  (`<T extends Number>`) restricts what can be substituted, while still getting compile-time type
  safety for the bound's own members.
- **Pitfall** — You cannot create a generic array (`new T[10]`) or overload two methods that
  differ only by erased generic type (`foo(List<String>)` vs `foo(List<Integer>)`) — both are
  direct, interview-relevant consequences of erasure, not arbitrary language restrictions.

### Wildcards: `? extends` vs. `? super`
- **Core concept** — `? extends T` (an "upper-bounded" wildcard) makes a generic type a
  **producer** you can safely read `T` (or a supertype of it) from, but never safely write into
  (beyond `null`). `? super T` (a "lower-bounded" wildcard) makes it a **consumer** you can
  safely write `T` into, but can only read back as `Object`. This is the PECS mnemonic:
  **P**roducer **E**xtends, **C**onsumer **S**uper.

---

## Group 8 — Exceptions and Resource Management (Intermediate)

### Checked vs. Unchecked Exceptions
- **Core concept** — Checked exceptions (`Exception` and its subclasses, excluding
  `RuntimeException`) must be either caught or declared in a method's `throws` clause — enforced
  by the compiler. Unchecked exceptions (`RuntimeException` and its subclasses, plus `Error`)
  need no such declaration — typically used for programming bugs (`NullPointerException`,
  `IllegalArgumentException`) rather than recoverable conditions.
- **Comparison** — The real-world guidance most teams converge on: use checked exceptions for
  conditions a well-written caller can reasonably be expected to recover from; use unchecked
  exceptions for programming errors the caller shouldn't be forced to handle everywhere.

### `throw` vs. `throws`
- **Core concept** — `throw` is a statement that actually raises an exception instance, right
  now, at that line. `throws` is a declaration on a method signature, listing which checked
  exceptions it might propagate — it doesn't raise anything itself.

### Try-with-Resources and `AutoCloseable`
- **Core concept** — (Java 7+) Any resource implementing `AutoCloseable` declared in a
  `try (Resource r = ...)` header gets its `close()` called automatically when the block exits —
  normally or via exception — in reverse declaration order, without a manual `finally` block.
- **Pitfall** — If **both** the try block's body and the automatic `close()` call throw, the
  body's exception is the one propagated; `close()`'s exception is attached as a *suppressed*
  exception (`getSuppressed()`), not silently lost, but also not the primary one you catch.

---

## Group 9 — Functional Java and Streams (Intermediate)

### Functional Interfaces, Lambdas, and Method References
- **Core concept** — A functional interface has exactly one abstract method (optionally
  annotated `@FunctionalInterface` for compiler enforcement) — a lambda (`x -> x * 2`) or a
  method reference (`String::toUpperCase`) is just compact syntax for an instance implementing
  that one method. The built-in `java.util.function` interfaces (`Function<T,R>`,
  `Predicate<T>`, `Supplier<T>`, `Consumer<T>`, `BiFunction<T,U,R>`, …) cover the common shapes
  so most code never needs to declare its own.

### Stream API — Intermediate vs. Terminal Operations
- **Core concept** — A stream pipeline is **lazy**: intermediate operations (`filter`, `map`,
  `sorted`, …) just describe a plan and return a new stream — nothing runs until a terminal
  operation (`collect`, `forEach`, `reduce`, `count`, …) triggers the whole pipeline to execute,
  element by element, in one pass.
- **Pitfall** — A stream can only be consumed **once** — calling a terminal operation twice on
  the same stream instance throws `IllegalStateException` ("stream has already been operated
  upon or closed").

### `map()` vs. `flatMap()`
- **Core concept** — `map()` transforms each element 1:1 (even if the result is itself a
  collection, producing a stream of streams/collections). `flatMap()` transforms each element
  into a stream and flattens every one of those sub-streams into a single flat output stream —
  the direct Stream-API analogue of LINQ's `Select` vs. `SelectMany`.

### `filter()` vs. `map()`
- **Core concept** — `filter()` takes a `Predicate` and keeps only elements that return `true` —
  same count or fewer elements out, never transformed. `map()` takes a `Function` and transforms
  every element — same count, different shape/type possible.

### `findFirst()` vs. `findAny()`
- **Core concept** — Both are short-circuiting terminal operations returning an `Optional`.
  `findFirst()` always returns the first element in encounter order — deterministic, even for a
  parallel stream (at the cost of coordinating that ordering). `findAny()` makes no ordering
  guarantee — for a parallel stream specifically, that freedom lets it return whichever matching
  element finishes first, which can be faster.

### `orElse()` vs. `orElseGet()` vs. `orElseThrow()`
- **Core concept** — `orElse(value)` always evaluates/constructs its fallback argument eagerly,
  even when the `Optional` is present (wasted work if that fallback is expensive, e.g. a method
  call). `orElseGet(supplier)` only invokes the `Supplier` lambda if the `Optional` is actually
  empty — lazy, the right choice for an expensive fallback. `orElseThrow(...)` throws a supplied
  (or default `NoSuchElementException`) exception if empty.
- **Pitfall** — Writing `orElse(computeExpensiveDefault())` runs `computeExpensiveDefault()`
  on *every* call regardless of whether the `Optional` held a value — a very common accidental
  performance bug that `orElseGet(() -> computeExpensiveDefault())` avoids.

### `reduce()` vs. `collect()`
- **Core concept** — `reduce()` combines stream elements into a single value using an
  associative accumulator function (a sum, a max, a concatenation) — built for immutable
  folding. `collect()` (with a `Collector`, e.g. `Collectors.toList()`) is the general-purpose
  terminal operation for building a **mutable** result container (a `List`, `Map`, grouped
  structure, joined `String`, …) — most real-world "gather everything into X" needs `collect()`,
  not `reduce()`.

### Streams vs. Collections
- **Core concept** — A `Collection` is a data structure holding elements in memory, traversed
  and re-traversed freely. A `Stream` describes a *pipeline of computation* over a data source —
  it's not a data structure, holds nothing itself, is lazily evaluated, and can only be
  traversed/consumed once.

### `groupingBy()` vs. `partitioningBy()`
- **Core concept** — `Collectors.groupingBy(classifier)` buckets elements into a `Map<K,
  List<V>>` with one entry per distinct key the classifier produces — any number of groups.
  `Collectors.partitioningBy(predicate)` is the special boolean case: always exactly two groups
  (`Map<Boolean, List<V>>`, keyed `true`/`false`), even if one side ends up empty.

### `map()` vs. `peek()` and Side Effects
- **Core concept** — `map()` is for **transformation** — it should be a pure function producing
  the next stream's elements. `peek()` is meant only for **non-interfering observation** (e.g.
  debug logging) alongside an otherwise-unchanged stream, and critically, per the
  `java.util.stream` Javadoc, a `peek()` call may be skipped entirely by the JVM if the stream
  implementation can determine the element isn't needed — relying on `peek()` to perform a
  required side effect (like mutating external state your program depends on) is unsafe and
  unsupported.
- **Trap-adjacent pitfall** — Never use `peek()` or `map()` to smuggle in meaningful side effects
  (mutating a shared list, incrementing a counter the program logic depends on) — `map()`'s
  contract assumes a pure function, and `peek()`'s calls aren't even guaranteed to run.

### Optional — Correct Usage and Common Mistakes
- **Core concept** — `Optional<T>` is designed as a **return type** signaling "this method may
  legitimately have no result" — forcing the caller to explicitly handle absence instead of
  silently risking a `NullPointerException`.
- **Pitfall** — `Optional` was never intended as a field type, a constructor/method parameter
  type, or something you call `.get()` on without checking `isPresent()` first (that call throws
  `NoSuchElementException` on empty) — all three are common misuses the Javadoc itself warns
  against.

---

## Group 10 — Dates, Reflection, and Modern Language Features (Intermediate)

### Date and Time API — `LocalDate`, `Instant`, `ZonedDateTime`
- **Core concept** — The `java.time` package (Java 8+) replaced the old, mutable, not-thread-safe
  `Date`/`Calendar` classes with **immutable** types: `LocalDate`/`LocalTime`/`LocalDateTime`
  (no time zone — a calendar date/wall-clock time as humans think of it), `Instant` (a precise
  point on the UTC timeline, machine-friendly), `ZonedDateTime` (a point in time *plus* a
  specific time zone's rules, including DST).
- **Pitfall** — Storing/comparing timestamps as `LocalDateTime` across systems/time zones is a
  real production bug source — `LocalDateTime` has no zone information at all; `Instant` (or
  `ZonedDateTime` with an explicit zone) is what actually anchors a moment in real time.

### Annotations and Reflection
- **Core concept** — An annotation (`@Override`, `@Deprecated`, a custom `@interface`) attaches
  metadata to code with no inherent runtime behavior of its own — some are read only by the
  compiler (`@Override`), some are preserved into the compiled class and read at runtime via
  **reflection** (the `java.lang.reflect` API, which lets code inspect/invoke classes, methods,
  and fields dynamically, bypassing normal compile-time type checking).
- **Comparison** — Reflection-based frameworks (dependency injection, ORMs, test runners) read
  annotations at runtime to decide behavior the compiler never sees — this is the mechanism
  underneath most "magic" framework behavior, see Group 19's reflection-cost page for the
  performance trade-off.

### Sealed Classes, Pattern Matching, and Switch Expressions
- **Core concept** — A `sealed` class/interface (finalized **Java 17**, JEP 409) restricts which
  classes may extend/implement it to an explicitly listed set — giving the compiler (and a
  `switch`) enough closed-world knowledge to verify every subtype is handled. Pattern matching
  for `switch` (finalized **Java 21**, JEP 441, alongside record patterns JEP 440) lets a
  `switch` branch on a value's *type* (and destructure a record's components directly), and a
  `switch` **expression** (Java 14+) returns a value directly via `->` arrows instead of
  `break`-per-case statements.
- **Comparison** — A sealed hierarchy + an exhaustive pattern-matching `switch` together let the
  compiler guarantee every case is handled with no `default` fallback needed — the modern,
  type-safe alternative to a long `instanceof`-`else if` chain.

### Text Blocks and Modern Java Language Features
- **Core concept** — Text blocks (`"""..."""`, finalized **Java 15**, JEP 378) let a multi-line
  string literal (JSON, SQL, HTML snippets) be written without escaping every embedded quote or
  manually concatenating line breaks — incidental leading whitespace is stripped automatically
  based on the closing delimiter's indentation.

---

## Group 11 — JVM Architecture, Class Loading, and Memory Internals (Advanced)

### JVM Architecture and Class Loading
- **Core concept** — The JVM's major runtime pieces: the class loader subsystem, runtime data
  areas (heap, per-thread stacks, method area/metaspace, PC registers), the execution engine
  (interpreter + JIT), and native interface. **Loading** (reading the `.class` bytes into memory)
  is a distinct phase from **linking** (verification, preparation, resolution) and
  **initialization** (running static initializers) — a class can be loaded well before it's
  initialized.

### ClassLoader Hierarchy and Class Initialization
- **Core concept** — A delegation hierarchy: the Bootstrap loader (core JDK classes, native) →
  Platform loader → Application/System loader (your own classpath) — each loader asks its
  parent first before trying to load a class itself (parent-first delegation), which is what
  prevents a user-defined `java.lang.String` from ever shadowing the real one.
- **Understanding** — A class is initialized lazily, on first "active use" (first instantiation,
  first static method/field access, or a subclass being initialized) — not simply on being
  referenced in source code.

### Garbage Collection — Generations, Collectors, and Trade-offs
- **Core concept** — Most JVM GCs use a **generational** heap split: a small, frequently-
  collected **young generation** (new objects; most objects die young — "the generational
  hypothesis") and a larger, less-frequently-collected **old generation** (objects that survive
  enough young-gen collections get promoted/tenured there).
- **Comparison** — G1 (the default collector in modern JDKs) balances throughput and pause time
  for most general workloads; ZGC and Shenandoah target **very low pause times** (sub-millisecond
  class) for latency-sensitive applications, trading some throughput/memory overhead for it;
  Parallel GC favors raw throughput over pause time. Which to pick is a real trade-off question,
  not "always use the newest one."

### Memory Leaks in Java Despite Garbage Collection
- **Core concept** — A "leak" in a GC'd language means an object is still **reachable** (so the
  GC correctly refuses to collect it) but the program logically no longer needs it — common
  causes: a growing `static` collection nothing ever removes from, listeners/callbacks registered
  but never unregistered, an `InheritableThreadLocal`/`ThreadLocal` value outliving the logical
  task that set it (esp. in pooled threads), and an unbounded cache with no eviction policy.

### Strong, Soft, Weak, and Phantom References
- **Core concept** — A normal variable reference is **strong** (never eligible for GC while
  reachable). A **soft** reference lets the GC reclaim the object, but only under memory
  pressure — useful for a memory-sensitive cache. A **weak** reference doesn't stop collection at
  all once no strong references remain — used for metadata that should disappear the moment
  nothing else cares (e.g. `WeakHashMap`, or how `ThreadLocal` internally tracks its keys).
  **Phantom** references are enqueued only *after* the referent is already finalized/unreachable,
  used for precise post-collection cleanup scheduling (the modern replacement for `finalize()`,
  via `java.lang.ref.Cleaner`).

### Heap Dumps, Thread Dumps, and Out-of-Memory Errors
- **Core concept** — A **heap dump** is a snapshot of every live object on the heap (and their
  reference graph) — the primary tool for finding *what's* retaining memory in a leak. A
  **thread dump** is a snapshot of every thread's current stack trace and state — the primary
  tool for diagnosing a deadlock, a stuck/blocked thread, or thread-pool exhaustion.
  `OutOfMemoryError` has several distinct flavors (`Java heap space`, `GC overhead limit
  exceeded`, `Metaspace`, `unable to create native thread`) that each point at a different root
  cause, not one generic "ran out of memory."

### JIT Compilation and JVM Optimization
- **Core concept** — The Just-In-Time compiler profiles running bytecode and compiles "hot"
  methods (called often enough) into optimized native machine code at runtime, instead of
  interpreting every call — this is why a long-running JVM process often gets *faster* over its
  first minutes (warm-up) as hot paths get JIT-compiled, and benchmarking Java code without
  accounting for warm-up produces misleading numbers.

### Java Memory Model and Happens-Before
- **Core concept** — The Java Memory Model (JMM) defines exactly what memory-visibility/ordering
  guarantees are given across threads — without a **happens-before** relationship between a
  write in one thread and a read in another (established via `synchronized`, `volatile`, thread
  start/join, or the concurrency utilities), the reading thread has **no guarantee** it ever sees
  the write at all, not just that it might see it late.
- **Pitfall** — "It worked in my testing" is not evidence of thread-safety — the JMM explicitly
  permits a compiler/CPU to reorder or cache memory operations in ways that only surface as a bug
  under specific timing, hardware, or JIT-optimization conditions.

---

## Group 12 — Concurrency Fundamentals (Advanced)

### `Thread` vs. `Runnable` vs. `Callable`
- **Core concept** — `Thread` is the actual unit of execution you can `start()`. `Runnable` is a
  functional interface (`run()`, no return value, can't throw a checked exception) describing
  *what* to run — preferred over extending `Thread` directly since it doesn't burn your one
  superclass slot and separates "the task" from "the execution mechanism." `Callable<V>` is the
  same idea but `call()` returns a value and can throw a checked exception — used with an
  `ExecutorService` to get back a `Future<V>`.

### `synchronized` vs. `Lock`
- **Core concept** — `synchronized` (a keyword, on a method or a block) acquires an intrinsic
  monitor lock automatically released when the block exits (even via exception) — simple, but
  rigid (no timeout, no interruptibility, no fairness policy, can't span multiple methods
  cleanly). `java.util.concurrent.locks.Lock` (e.g. `ReentrantLock`) is an explicit API: you must
  call `unlock()` yourself (always in a `finally`), in exchange for `tryLock()` with a timeout,
  interruptible locking, and fairness options.

### `volatile` vs. `synchronized` vs. Atomic Classes
- **Core concept** — `volatile` guarantees **visibility** (every read sees the latest write
  across threads) and prevents certain reorderings, but does **not** make a compound operation
  (read-modify-write, like `count++`) atomic. `synchronized` gives both visibility *and* mutual
  exclusion (atomicity) for the guarded block, at a real locking cost. Atomic classes
  (`AtomicInteger`, `AtomicLong`, …) provide lock-free atomic compound operations via CAS
  (compare-and-swap) hardware instructions — often faster than `synchronized` for simple
  counter-style state.
- **Trap-adjacent pitfall** — `volatile int count; count++;` is **not** thread-safe — the
  increment is read-then-write, two separate operations, and `volatile` only protects the
  visibility of each individual read/write, not the atomicity of the sequence between them.

### Race Conditions, Deadlocks, and Starvation
- **Core concept** — A **race condition**: the correctness of a result depends on the
  unpredictable timing/interleaving of threads (e.g. two threads both reading-then-writing a
  shared counter). A **deadlock**: two+ threads each hold a lock the other needs and neither can
  proceed — classically from acquiring the same two locks in inconsistent order across threads.
  **Starvation**: a thread is perpetually denied access to a resource (e.g. always loses out to
  higher-priority threads), technically running but never making progress.

### `wait()` vs. `sleep()` vs. `notify()`
- **Core concept** — `Thread.sleep()` pauses the current thread for a duration **without**
  releasing any lock it holds. `Object.wait()` (must be called while holding that object's
  monitor, inside a `synchronized` block) releases the monitor and blocks until another thread
  calls `notify()`/`notifyAll()` on the same object — the real producer/consumer coordination
  primitive beneath `synchronized`. Always call `wait()` inside a loop checking the actual
  condition (not just once) — a spurious wakeup is a documented possibility.

---

## Group 13 — Executors, Futures, and Async Composition (Advanced)

### `ExecutorService` and Thread Pools
- **Core concept** — An `ExecutorService` decouples *submitting* a task from *how/when* it runs —
  a pool of reusable worker threads pulls tasks off an internal queue instead of a new `Thread`
  being created per task (expensive, unbounded, and a real production risk under load). Common
  factory shapes: fixed-size pool (bounded concurrency), cached pool (grows/shrinks, risky under
  sustained load), scheduled pool (delayed/periodic tasks) — and as of Java 21, a
  virtual-thread-per-task executor (see Group 19).

### `Future` vs. `CompletableFuture`
- **Core concept** — `Future<V>` represents a result that will exist eventually — but the only
  way to retrieve it is `get()`, which **blocks** the calling thread (optionally with a timeout);
  there's no way to attach a callback or chain further work without blocking. `CompletableFuture`
  (Java 8+) adds a full composable, non-blocking async API — `thenApply`, `thenCompose`,
  `thenCombine`, exception handling, manual completion, and combinators like `allOf`/`anyOf`.

### `thenApply()` vs. `thenCompose()` vs. `thenCombine()`
- **Core concept** — `thenApply(fn)` transforms the result with a plain function (`T → R`) —
  for when `fn` doesn't itself return a `CompletableFuture`. `thenCompose(fn)` is for chaining
  another **async** step (`fn` returns `CompletableFuture<R>`) — it flattens the result instead
  of nesting a `CompletableFuture<CompletableFuture<R>>` (directly analogous to `flatMap`).
  `thenCombine(other, fn)` joins the results of **two independent** `CompletableFuture`s once
  both complete.

### Exception Handling in `CompletableFuture`
- **Core concept** — An exception thrown inside any stage short-circuits the normal
  `thenApply`/`thenCompose` chain — those are skipped entirely until a stage that handles
  failure: `exceptionally(fn)` (recover with a fallback value), `handle(fn)` (runs regardless of
  success/failure, sees either the result or the exception), or `whenComplete(fn)` (side-effect
  observer, doesn't change the outcome, re-throws whatever came in).

---

## Group 14 — Concurrent Collections and Algorithm Shape (Advanced)

### `ConcurrentHashMap` Internals and Atomic Operations
- **Core concept** — Modern `ConcurrentHashMap` (Java 8+) abandoned the older segment-locking
  design in favor of finer-grained locking **per bin** (bucket) using CAS for simple operations
  and synchronizing only the specific bin being modified on a collision — multiple threads can
  freely operate on different bins concurrently with no contention at all. Compound atomic
  operations like `computeIfAbsent`, `compute`, and `merge` let you read-and-conditionally-write
  a single key atomically, without an external lock.

### Blocking vs. Non-Blocking Algorithms
- **Core concept** — A **blocking** algorithm (lock-based) makes a contending thread wait
  (parked, consuming no CPU but adding latency and context-switch overhead) until it can
  proceed. A **non-blocking** algorithm (typically CAS-based, "lock-free") lets a thread retry
  immediately on contention instead of waiting — can achieve higher throughput under contention,
  at the cost of real implementation complexity (and, for some algorithms, no absolute
  starvation-freedom guarantee the way a fair lock gives).

---

## Group 15 — Modern Concurrency, Performance, and Interop (Advanced)

### Virtual Threads vs. Platform Threads
- **Core concept** — Virtual threads (finalized **Java 21**, JEP 444) are lightweight threads
  managed by the JVM, not the OS — millions can exist concurrently (vs. thousands of OS/platform
  threads, each backed by a real OS thread with real stack memory). When a virtual thread blocks
  on supported blocking I/O, the JVM **unmounts** it from its carrier platform thread, freeing
  that platform thread to run other virtual threads — turning "a thread per request, blocking is
  fine" back into a scalable, simple programming model instead of requiring reactive/async code
  just to get throughput.
- **Pitfall** — Virtual threads don't make CPU-bound work faster (no more CPU cores exist just
  because threads are cheap) and a `synchronized` block **pins** a virtual thread to its carrier
  thread for the block's duration (preventing the unmount-on-block optimization) — code with
  long-held `synchronized` sections doesn't get the full benefit until migrated to
  `java.util.concurrent.locks.Lock`-based locking.

### `ThreadLocal` — Use Cases and Memory-Leak Risks
- **Core concept** — `ThreadLocal<T>` gives each thread its own independent copy of a variable —
  common uses: per-request context (a request ID, a security principal) without threading it
  through every method call.
- **Pitfall** — In a **pooled-thread** environment (thread pools, including virtual-thread
  executors), a `ThreadLocal` value set during one task and never explicitly `remove()`'d leaks
  into the next task reusing that same (carrier) thread — a real, repeatedly-seen production bug
  class, not a theoretical one.

### Parallel Streams — When They Help and Hurt
- **Core concept** — `.parallelStream()` (or `.stream().parallel()`) splits the pipeline's work
  across the common `ForkJoinPool` — genuinely helpful for large, CPU-bound, easily-splittable
  workloads with no shared mutable state. It hurts for small collections (splitting/merging
  overhead dwarfs the work), I/O-bound work (threads just block, gaining nothing), stateful or
  order-dependent operations, and any operation (like a naive `peek()` with external mutation)
  that isn't safe under concurrent execution.

### Synchronization, Lock Contention, and Throughput
- **Core concept** — **Contention** is what happens when multiple threads frequently compete for
  the same lock — beyond a certain point, adding more threads *reduces* throughput (threads spend
  more time waiting/context-switching than doing work). Reducing the scope of a lock (locking
  only what truly needs protecting, not an entire method), splitting one lock into several
  independent locks for independent data, or switching to a lock-free/concurrent-collection
  design are the standard mitigations — "just add more threads" is never the fix for a
  contention-bound system.

### JVM Profiling and Java Performance Tuning
- **Core concept** — Profiling distinguishes *where* time/resources actually go — CPU sampling
  (hot methods), allocation profiling (GC pressure sources), lock-contention profiling (where
  threads actually wait) — rather than guessing. JVM-level tuning levers include heap sizing
  (`-Xms`/`-Xmx`), GC collector choice (see Group 11), and JIT-related flags — but profiling
  first, to find the *actual* bottleneck, is the step most commonly skipped under pressure.

### Reflection Costs, Dynamic Proxies, and Annotations
- **Core concept** — Reflective calls (`Method.invoke`, field access via `Field`) are
  meaningfully slower than a direct call — the JIT historically couldn't inline/optimize through
  reflection the way it does direct calls, though modern JVMs have narrowed (not eliminated) the
  gap. A **dynamic proxy** (`java.lang.reflect.Proxy`) generates an implementation of an
  interface at runtime that routes every call through an `InvocationHandler` — the mechanism
  behind a lot of framework "magic" (lazy-loading proxies, AOP-style interceptors, mocking
  libraries) and annotation-driven frameworks generally, at the cost of that reflective overhead
  and reduced IDE/compiler traceability.

---

## Group 16 — Serialization (Advanced)

### Serialization, Deserialization, and Compatibility
- **Core concept** — Implementing `Serializable` lets an object's state be converted to a byte
  stream (and back) — e.g. for persistence or network transfer. A `serialVersionUID` field
  pins a version identifier used to check compatibility between the class version that wrote the
  stream and the one reading it; without an explicit one, the compiler generates one based on
  class details that can silently change between compiler versions/class edits, breaking
  deserialization of older data (`InvalidClassException`).
- **Pitfall** — Deserializing data from an untrusted source is a well-documented, serious
  security risk (arbitrary code execution via crafted byte streams exploiting classes on the
  classpath) — modern guidance favors safer formats (JSON, a dedicated serialization library
  with allow-listing) over Java's built-in `Serializable` for anything crossing a trust boundary.

---

## Group 17 — Java Scenarios (interview-pressure, applied)

Each of these was supplied by the user as a distinct practical interview problem, each already
given a priority. Phase 3 keeps them as their own pages (tagged `Scenario:` in the title, the
same convention used on `react/advanced/14–18.html`, `linq/advanced/18–28.html`) rather than
folding them into the comparison pages above.

1. **🔥 Must Know** — A custom object used as a `HashMap` key becomes hard to retrieve after one
   of its fields is mutated. Explain `equals()`/`hashCode()`'s role and why mutable keys are
   dangerous.
2. **🔥 Must Know** — Heap usage grows continuously toward `OutOfMemoryError`. Investigate
   retained objects, static collections, caches, listeners, and heap dumps.
3. **🔥 Must Know** — Two threads update the same account balance. Explain why `volatile` alone
   doesn't make `balance += amount` thread-safe; compare synchronization, locks, and atomics.
4. **🔥 Must Know** — A Stream API pipeline is slow or produces unexpected side effects.
   Diagnose eager-evaluation assumptions, repeated work, ordering constraints, boxing, and
   inappropriate parallelization.
5. **🔥 Must Know** — An application stops responding because requests occupy every worker
   thread while blocked. Explain thread-pool sizing, queueing, timeouts, and virtual threads.
6. **⭐ Should Know** — Three remote calls run concurrently; one fails. Return the successful
   results and represent the failure explicitly. Discuss `allOf()`, exception handling, timeouts,
   and cancellation.
7. **⭐ Should Know** — Design a high-throughput lookup service with frequent reads, updates, and
   duplicate values. Compare `HashMap`, `ConcurrentHashMap`, immutable maps, and concurrent
   queues based on the actual access pattern.
8. **⭐ Should Know** — CPU usage is high but requests are slow. Distinguish excessive
   allocation, GC pressure, lock contention, inefficient algorithms, and blocking I/O.
9. **🧠 Deep Dive** — An application moves to a newer Java release. Evaluate compatibility,
   removed/encapsulated APIs, dependency support, GC changes, and virtual-thread suitability.
10. **🧠 Deep Dive** — Design a concurrent cache supporting expiry, bounded memory, and safe
    loading. Discuss synchronization, atomic loading, eviction policies, and whether to reach
    for a proven cache library instead.

## Gap-hunt log

The user's own list is already unusually complete and internally consistent (likely because it
was drafted with this site's own tier/priority conventions already in mind). Checked against
outside Java knowledge for real gaps:

- **No additions needed inside Core Java/Collections/Concurrency** — every mainstream "classic"
  Java interview question (equality contract, collection internals, concurrency primitives, JVM
  internals) the taxonomy-writer would otherwise have added is already present in the user's
  list, often with more precision than a from-scratch taxonomy would have produced.
- **Considered and excluded**: Java I/O streams (`InputStream`/`OutputStream`/NIO) — real and
  commonly asked, but the user's own list doesn't include it and it's a large enough area (NIO
  vs. classic I/O, buffers, channels, selectors) to deserve its own deliberate pass rather than
  being bolted on unasked; flagged in `roadmap.md`'s Known Gaps for a possible future addition,
  not added here.
- **Considered and excluded**: Spring Boot, Spring Data JPA, Kafka, and the other
  distributed-systems topics from the user's own section 5 — explicitly deferred per the user's
  own sequencing recommendation ("launch Core Java first... then add Spring Boot"). Not
  taxonomized in this pass; see `roadmap.md`.
