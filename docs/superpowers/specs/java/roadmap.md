# Java — Roadmap (Phases 2–6)

Phase 1 output: [`question-taxonomy.md`](question-taxonomy.md) — 17 concept groups (16 Java-concept
groups + 1 scenario group), sourced from the user's own detailed proposed roadmap. This file is
Phases 2–6: review, page grouping, tier, priority, and the final roadmap — see
[`specs/README.md`](../README.md) for what each phase means.

## Phase 2 — Review (merges, exclusions, and why)

The user's own raw list (78 comparison/concept topics + 10 scenarios = 88 items, already split
into 3 tiers) needed **no merges and no exclusions** — unlike most tracks this session has built,
the user's proposal already maps cleanly one topic → one page at exactly the right grain (no two
numbered items describe the same concept from two angles, and no numbered item is really two
concepts bundled together). This is Phase 2's actual finding, not a skipped step: every item was
checked against the others in its group for a duplicate-angle merge opportunity, and against
outside Java knowledge for whether it was actually one concept or secretly two — none were found.

**Two scope decisions, not merges/exclusions of a listed topic:**

1. **The user's own "Spring Boot and enterprise Java" section (IoC/DI, REST, JPA/Hibernate,
   Kafka/distributed-systems patterns) is explicitly deferred, not built in this pass.** The
   user's own recommendation states it directly: "launch Core Java first... Then add Spring Boot,
   JPA and distributed-system scenarios." This Phase 7 pass covers Core Java only — the Spring
   Boot material either becomes its own subsection or its own track once Core Java is live, per
   the user's own sequencing call. Not taxonomized, not numbered, not a gap in *this* roadmap.
2. **Java I/O (classic streams + NIO: buffers, channels, selectors)** was checked against outside
   Java knowledge as a possible gap, same as any track's Phase 2 pass — real interview material,
   but genuinely absent from the user's own list and large enough to deserve its own deliberate
   taxonomy pass rather than being bolted on unasked. Logged in Known Gaps below, not added here.

**Version-accuracy check performed, not assumed**, per this site's own accuracy rule, before
documenting any version-specific modern-Java feature:

| Feature | Finalized in |
|---|---|
| `var` local type inference (JEP 286) | Java 10 |
| Try-with-resources / `AutoCloseable` | Java 7 |
| Lambdas, method references, Stream API, `Optional`, `java.time`, default/static interface methods | Java 8 |
| Text blocks (JEP 378) | Java 15 |
| Records (JEP 395), `instanceof` pattern matching (JEP 394) | Java 16 |
| Sealed classes (JEP 409) | Java 17 |
| Virtual threads (JEP 444), pattern matching for `switch` + record patterns (JEP 441/440) | Java 21 |

(Cross-checked via web search against current sources, not recalled from memory alone — the
affected Advanced/Basic pages themselves cite these versions and should be re-checked against
openjdk.org's own JEP index at write-time if this ever needs re-verifying.)

## Phase 3 — Grouping into pages (88 pages)

Every one of the user's 88 numbered items becomes exactly one page, 1:1, in the exact order the
user listed them within each tier — see Phase 2 above for why no merge/split was needed. The 10
scenarios each keep their own page, as a distinct labeled sub-block inside Advanced (the same
convention already used on `react/advanced/14–18.html`, `linq/advanced/18–28.html`) — matching
the user's own explicit instruction to "give them their own section rather than treating them as
ordinary language topics."

## Phase 4 — Tier (by question type, not difficulty)

The user's own proposal already assigns tier correctly per this site's own definition
([`interview-depth-and-priority.md`](../../rules/interview-depth-and-priority.md)) — Basic =
"fast recall, language semantics," Intermediate = "choosing the right API and understanding
behavior," Advanced = "internals, trade-offs and production troubleshooting." No topic needed
re-tiering.

| Tier | Count | Scope |
|---|---|---|
| Basic | 24 | JVM/compilation basics, primitives vs. references, stack vs. heap, equality, strings, core keywords/modifiers, the four OOP pillars, access modifiers, construction, pass-by-value, immutability, wrappers, `var`, enums, records |
| Intermediate | 28 | The collections framework (List/Set/Map/Queue, ArrayList/LinkedList, HashMap/Hashtable/ConcurrentHashMap, HashMap/HashSet internals), ordering/iteration, generics, exceptions, try-with-resources, functional interfaces/lambdas, the full Stream API, Optional, dates, annotations/reflection, sealed classes/pattern matching/text blocks |
| Advanced | 36 (26 core + 10 scenario) | JVM architecture/class loading, garbage collection, memory leaks/references/dumps, JIT, the Java Memory Model, every core concurrency primitive, executors/futures/CompletableFuture, concurrent collections, virtual threads, ThreadLocal, parallel streams, performance/profiling, reflection cost, serialization, + 10 Scenario pages |

Reasoning for the two least-obvious calls:

- **Annotations and Reflection is Intermediate, not Advanced** — knowing *what* an annotation is
  and that reflection can read it at runtime is practical/conceptual knowledge any experienced
  developer needs; the *performance cost and dynamic-proxy mechanism* of reflection (Advanced
  #77, "Reflection Costs, Dynamic Proxies, and Annotations") is the genuinely Advanced,
  internals-flavored half of this same topic area — split exactly the way the user's own list
  already splits it (item 50 vs. item 77), confirming the split was intentional, not an oversight.
- **Virtual Threads vs. Platform Threads is Advanced, not a Basic/Intermediate "new feature"
  page** — it requires understanding platform threads, blocking I/O, and the executor model
  first (all earlier Advanced-tier concurrency pages), matching
  `interview-depth-and-priority.md`'s explicit rule that depth/trade-off/scalability questions
  belong in Advanced regardless of how new or simple the syntax surface looks.

## Phase 5 — Priority (🔥 Must Know / ⭐ Should Know / 🧠 Deep Dive — independent of tier)

The user's own list already assigns priority to all 10 scenarios directly (5× 🔥, 3× ⭐, 2× 🧠) —
used verbatim. Priority for the 78 core comparison/concept topics was assigned fresh this phase,
against the same definition every other track uses: 🔥 = an interviewer can reasonably expect
this to come up; ⭐ = a strong differentiator or common follow-up; 🧠 = internals/edge cases/niche
depth. (Note: the user's own write-up used 🔎 for the deep-dive tier; this site's fixed priority
emoji is **🧠**, per [`interview-depth-and-priority.md`](../../rules/interview-depth-and-priority.md)
— kept consistent with every other track rather than introducing a second deep-dive glyph.)

| Priority | Basic | Intermediate | Advanced (core) |
|---|---|---|---|
| 🔥 Must Know | 14 | 13 | 13 |
| ⭐ Should Know | 9 | 11 | 11 |
| 🧠 Deep Dive | 1 | 4 | 2 |

Full per-page assignment is in the Phase 6 tables below (every row carries its own badge). 🔥 is
again the largest bucket — Java interview questions, like every language-fundamentals track this
site has built, skew toward "must know cold" (equality semantics, collection choice, concurrency
primitives are both extremely common in real code review *and* extremely common interview
material). `Packages and Imports` (Basic #19) is this track's lone Basic 🧠 — genuinely low
interview-likelihood trivia, included because the user's own list included it, but rarely the
actual focus of a real question.

## Phase 6 — Final roadmap

`java/roadmap.html` will group by concept category (same 17 taxonomy groups, not tier — the
site-wide convention for a newly-built track's roadmap page). Numbering below is the tier-folder
page number (`java/<tier>/<n>.html`).

### Basic (24)

| # | Topic | Priority | Page |
|---|---|---|---|
| 1 | JDK vs. JRE vs. JVM | 🔥 | basic/1.html |
| 2 | How Java Code Executes — Compilation and Bytecode | ⭐ | basic/2.html |
| 3 | Primitive Types vs. Reference Types | 🔥 | basic/3.html |
| 4 | Stack vs. Heap Memory | 🔥 | basic/4.html |
| 5 | `==` vs. `equals()` | 🔥 | basic/5.html |
| 6 | `equals()` and `hashCode()` Contract | 🔥 | basic/6.html |
| 7 | String vs. StringBuilder vs. StringBuffer | 🔥 | basic/7.html |
| 8 | String Pool and String Interning | ⭐ | basic/8.html |
| 9 | `final` vs. `finally` vs. `finalize` | 🔥 | basic/9.html |
| 10 | `static` Members and Static Initialization | ⭐ | basic/10.html |
| 11 | Method Overloading vs. Overriding | 🔥 | basic/11.html |
| 12 | Abstract Class vs. Interface | 🔥 | basic/12.html |
| 13 | Encapsulation, Inheritance, Polymorphism and Abstraction | 🔥 | basic/13.html |
| 14 | Access Modifiers | ⭐ | basic/14.html |
| 15 | Constructor Chaining and Initialization Order | ⭐ | basic/15.html |
| 16 | Pass-by-Value in Java | 🔥 | basic/16.html |
| 17 | `this` vs. `super` | ⭐ | basic/17.html |
| 18 | `instanceof`, Casting and Type Checking | ⭐ | basic/18.html |
| 19 | Packages and Imports | 🧠 | basic/19.html |
| 20 | Immutability and Designing Immutable Classes | 🔥 | basic/20.html |
| 21 | Wrapper Classes, Autoboxing and Unboxing | 🔥 | basic/21.html |
| 22 | `var` and Local Variable Type Inference | ⭐ | basic/22.html |
| 23 | Enums | ⭐ | basic/23.html |
| 24 | Records and Data-Carrying Types | 🔥 | basic/24.html |

### Intermediate (28)

| # | Topic | Priority | Page |
|---|---|---|---|
| 1 | List vs. Set vs. Map vs. Queue | 🔥 | intermediate/1.html |
| 2 | ArrayList vs. LinkedList | 🔥 | intermediate/2.html |
| 3 | HashMap vs. Hashtable vs. ConcurrentHashMap | 🔥 | intermediate/3.html |
| 4 | HashMap Internals — Hashing, Collisions and Resizing | 🔥 | intermediate/4.html |
| 5 | HashSet Internals | ⭐ | intermediate/5.html |
| 6 | Comparable vs. Comparator | 🔥 | intermediate/6.html |
| 7 | Iterator vs. ListIterator | ⭐ | intermediate/7.html |
| 8 | Fail-Fast vs. Fail-Safe (Weakly Consistent) Iteration | ⭐ | intermediate/8.html |
| 9 | Generics, Type Erasure and Bounded Types | 🔥 | intermediate/9.html |
| 10 | Wildcards: `? extends` vs. `? super` | 🧠 | intermediate/10.html |
| 11 | Checked vs. Unchecked Exceptions | 🔥 | intermediate/11.html |
| 12 | `throw` vs. `throws` | ⭐ | intermediate/12.html |
| 13 | Try-with-Resources and `AutoCloseable` | 🔥 | intermediate/13.html |
| 14 | Functional Interfaces, Lambdas and Method References | 🔥 | intermediate/14.html |
| 15 | Stream API — Intermediate vs. Terminal Operations | 🔥 | intermediate/15.html |
| 16 | `map()` vs. `flatMap()` | 🔥 | intermediate/16.html |
| 17 | `filter()` vs. `map()` | ⭐ | intermediate/17.html |
| 18 | `findFirst()` vs. `findAny()` | 🧠 | intermediate/18.html |
| 19 | `orElse()` vs. `orElseGet()` vs. `orElseThrow()` | ⭐ | intermediate/19.html |
| 20 | `reduce()` vs. `collect()` | 🔥 | intermediate/20.html |
| 21 | Streams vs. Collections | ⭐ | intermediate/21.html |
| 22 | `groupingBy()` vs. `partitioningBy()` | ⭐ | intermediate/22.html |
| 23 | `map()` vs. `peek()` and Side Effects | 🧠 | intermediate/23.html |
| 24 | Optional — Correct Usage and Common Mistakes | 🔥 | intermediate/24.html |
| 25 | Date and Time API — LocalDate, Instant, ZonedDateTime | ⭐ | intermediate/25.html |
| 26 | Annotations and Reflection | ⭐ | intermediate/26.html |
| 27 | Sealed Classes, Pattern Matching and Switch Expressions | ⭐ | intermediate/27.html |
| 28 | Text Blocks and Modern Java Language Features | 🧠 | intermediate/28.html |

### Advanced (36)

| # | Topic | Priority | Page |
|---|---|---|---|
| 1 | JVM Architecture and Class Loading | 🔥 | advanced/1.html |
| 2 | ClassLoader Hierarchy and Class Initialization | ⭐ | advanced/2.html |
| 3 | Garbage Collection — Generations, Collectors and Trade-offs | 🔥 | advanced/3.html |
| 4 | Memory Leaks in Java Despite Garbage Collection | 🔥 | advanced/4.html |
| 5 | Strong, Soft, Weak and Phantom References | ⭐ | advanced/5.html |
| 6 | Heap Dumps, Thread Dumps and Out-of-Memory Errors | 🔥 | advanced/6.html |
| 7 | JIT Compilation and JVM Optimization | ⭐ | advanced/7.html |
| 8 | Java Memory Model and Happens-Before | 🔥 | advanced/8.html |
| 9 | Thread vs. Runnable vs. Callable | 🔥 | advanced/9.html |
| 10 | `synchronized` vs. `Lock` | 🔥 | advanced/10.html |
| 11 | `volatile` vs. `synchronized` vs. Atomic Classes | 🔥 | advanced/11.html |
| 12 | Race Conditions, Deadlocks and Starvation | 🔥 | advanced/12.html |
| 13 | `wait()` vs. `sleep()` vs. `notify()` | ⭐ | advanced/13.html |
| 14 | ExecutorService and Thread Pools | 🔥 | advanced/14.html |
| 15 | Future vs. CompletableFuture | 🔥 | advanced/15.html |
| 16 | `thenApply()` vs. `thenCompose()` vs. `thenCombine()` | ⭐ | advanced/16.html |
| 17 | Exception Handling in CompletableFuture | ⭐ | advanced/17.html |
| 18 | ConcurrentHashMap Internals and Atomic Operations | 🔥 | advanced/18.html |
| 19 | Blocking vs. Non-Blocking Algorithms | 🧠 | advanced/19.html |
| 20 | Virtual Threads vs. Platform Threads | 🔥 | advanced/20.html |
| 21 | ThreadLocal — Use Cases and Memory-Leak Risks | ⭐ | advanced/21.html |
| 22 | Parallel Streams — When They Help and Hurt | ⭐ | advanced/22.html |
| 23 | Synchronization, Lock Contention and Throughput | ⭐ | advanced/23.html |
| 24 | JVM Profiling and Java Performance Tuning | ⭐ | advanced/24.html |
| 25 | Reflection Costs, Dynamic Proxies and Annotations | 🧠 | advanced/25.html |
| 26 | Serialization, Deserialization and Compatibility | ⭐ | advanced/26.html |
| 27 | Scenario: HashMap Behaves Unexpectedly with a Mutable Key | 🔥 | advanced/27.html |
| 28 | Scenario: Diagnosing a Production Memory Leak | 🔥 | advanced/28.html |
| 29 | Scenario: Diagnosing a Race Condition on a Shared Balance | 🔥 | advanced/29.html |
| 30 | Scenario: A Slow or Side-Effecting Stream Pipeline | 🔥 | advanced/30.html |
| 31 | Scenario: Thread Pool Exhaustion | 🔥 | advanced/31.html |
| 32 | Scenario: A CompletableFuture in a Group of Calls Fails | ⭐ | advanced/32.html |
| 33 | Scenario: Choosing a Collection for a High-Throughput Lookup Service | ⭐ | advanced/33.html |
| 34 | Scenario: High CPU, Slow Requests | ⭐ | advanced/34.html |
| 35 | Scenario: Upgrading to a Newer Java Version | 🧠 | advanced/35.html |
| 36 | Scenario: Designing a Concurrent Cache | 🧠 | advanced/36.html |

## Track-specific decisions and boundaries

- **This track owns core Java — the language, the collections framework, streams/lambdas, the
  JVM, memory, and concurrency.** It explicitly does **not** own Spring Boot, Spring Data/JPA, or
  distributed-systems patterns (Kafka, circuit breakers, the outbox pattern, observability) — see
  Phase 2's deferral note. It also does not (yet) own Java I/O/NIO — see Known Gaps.
- **Scenario questions are a distinct, clearly-labelled sub-block inside Advanced** (pages
  27–36, all titled `Scenario: ...`), matching the exact convention already used on
  `react/advanced/14–18.html`, `angular/advanced/11–16.html`, and `linq/advanced/18–28.html` —
  not a fourth tier, not a separate top-level site section. This satisfies the user's own request
  to "give them their own section rather than treating them as ordinary language topics."
- **Comparison pages that have a genuine input→output or decision-tree shape use that instead of
  a generic three-box diagram** — per [`diagram-style.md`](../../rules/diagram-style.md)'s own
  rule, chosen per-page at Phase 7 write time, not forced into one template shape across 88 pages.
- **Technical-accuracy commitments locked in before Phase 7 starts** (restated here so a future
  session enforcing `accuracy.md` on this track doesn't have to re-derive them):
  - `==` vs. `equals()`: never state Integer caching (-128 to 127) as a reason to ever use `==`
    for wrapper/object comparison — it's a documented pitfall to explain, never a recommended
    pattern.
  - Pass-by-value: Java is **always** pass-by-value, including for object references — never
    state or imply "Java passes objects by reference."
  - `volatile`: never claim `volatile` alone makes a compound read-modify-write operation
    (`count++`, `balance += amount`) atomic — visibility and atomicity are different guarantees.
  - `HashMap`/`ConcurrentHashMap` internals: state the Java-8+ per-bin treeification (8+
    colliding entries) and per-bin locking design as the *current* mechanism — never describe
    the old segment-locking `ConcurrentHashMap` design as if it were still current.
  - Virtual threads: never claim they speed up CPU-bound work, and state the `synchronized`-block
    pinning caveat explicitly wherever virtual threads are discussed.
  - `finalize()`: state as deprecated/on the path to removal (Java 9+), never presented as a
    normal or recommended cleanup mechanism — `try`-with-resources / `Cleaner` are the real
    modern answer.
  - Every version-specific feature (records, sealed classes, pattern-matching switch, text
    blocks, virtual threads, `var`) states its actual finalizing Java version per the Phase 2
    table above — never left unqualified as if it always existed.
- **Code examples are Java**, matching every other track's "code examples match the track's own
  language" convention (C# for C#/LINQ/.NET/EF Core/Web API, SQL for SQL, etc.).
- Icon ☕ (a real emoji, per [`visual-style.md`](../../rules/visual-style.md)'s "plain emoji only"
  rule — thematically exact for Java/coffee), track color a deep coffee-brown (`#78350f` ink on
  `#fffbeb` bg) — distinct from every track color already in use (closest neighbors are the
  existing ambers, both meaningfully lighter/more orange than this deep brown).
- **Homepage placement: a new row/tile alongside the other "Core backend" and general-purpose
  language tracks** — Java is a standalone language track like C#, not nested under any existing
  track. Exact tile position decided at site-wiring time, grouped sensibly near other
  general-purpose/backend language tracks (C#, Python) rather than frontend-only tracks.

## Known gaps

- **Java I/O / NIO (streams, buffers, channels, selectors)** — real interview material, absent
  from the user's own list, not taxonomized or built in this pass. A candidate for a later
  gap-hunt addition once this track is live.
- **Spring Boot & enterprise Java** (section 5 of the user's proposal: IoC/DI, REST/MVC,
  JPA/Hibernate/transactions, Kafka/distributed-systems patterns) — explicitly deferred per the
  user's own recommended sequencing. Not part of this Phase 7 pass; a future session should treat
  it as a fresh Phase 1–6 pass of its own (as its own Java subsection or its own track), not an
  extension bolted onto this roadmap.
- Phase 7 (writing all 88 pages) is complete — see [`overview.md`](overview.md)'s Status section.
  An independent diagram-verification sweep ran across all 88 pages: all confirmed
  `issueCount: 0`, zero genuine diagram defects (two unrelated pager-link bugs were found and
  fixed separately).
