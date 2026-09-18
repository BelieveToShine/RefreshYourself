# Python — Interview Question Taxonomy

**Phase 1 of the 7-phase pipeline** (see [`docs/superpowers/specs/README.md`](../README.md)).
Source: the user's own Python interview-roadmap document — built for a 3–16+ year audience,
deliberately going beyond syntax into internals, the object model, mutability, iterators/
generators, decorators, concurrency, async, performance, testing, packaging, and production
scenarios. This taxonomy keeps that structure and those questions intact; **`[new]`** marks the
additions from this file's own Phase 2 gap-hunt (logged in full at the bottom).

**Explicit scope boundary, per the source's own instruction:** this is not a Python tutorial —
prioritize *why*, *behavior over definition*, comparisons, traps, and production troubleshooting
over syntax coverage. **Don't over-weight functional-programming trivia** (`lambda`/`map`/
`filter`/`reduce`) for a senior audience, and **treat metaclasses/MRO/descriptors as Deep Dive**,
not mainstream interview-prep focus, per the source's own priority distribution.

**Cross-cutting question type, unique to this track: "Predict the output."** Per the user's own
explicit instruction, wherever Python's *behavior* matters more than its *definition* — mutable
default arguments, shared references, closures, generator resumption, decorator execution order,
exception propagation, `async`/`await` scheduling, thread/process shared-state races — the
taxonomy includes a short code snippet and asks what it prints/does and why, not just "what is
X." This is a sixth question-variant type alongside the five every other track uses (Core
concept/Understanding/Comparison/Pitfall/Scenario), tagged **[predict]** below.

---

## BASIC

### 1. Python Fundamentals
- **Core concept** — Why is Python popular?
- **Core concept** — Is Python interpreted or compiled?
- **Core concept** — Is Python dynamically typed? What does that mean?
- **Core concept** — What is duck typing?
- **Core concept** — What are Python's key characteristics?
- **Core concept** — What is PEP 8?
- **Understanding** — Why is indentation significant in Python?
- **Understanding** — What happens when Python executes a `.py` file?
- **Core concept** — What is bytecode?
- **Core concept** — What is the role of the Python interpreter? What is CPython?
- **Comparison** — Python 2 vs. Python 3?
- **[new] Core concept** — What does the walrus operator (`:=`) do, and why was it added?
- **[new] Comparison** — Structural pattern matching (`match`/`case`, Python 3.10+) vs. a
  chained `if`/`elif` — what does `match` actually add beyond syntax sugar?

### 2. Variables & Object Model
This should be a high-priority visual topic.
- **Core concept** — What is a variable in Python? Does it store a value or a reference to an
  object?
- **Understanding** — What does assignment actually do?
- **[predict]** — `a = 10; b = a` — what's the relationship between `a` and `b` afterward?
- **[predict]** — `a = [1, 2]; b = a; b.append(3)` — what does `a` look like now, and why?
- **Core concept** — What is object identity? Object type? Object value?
- **Understanding** — "Everything in Python is an object" — what does that actually mean in
  practice?

### 3. Python Data Types
- **Core concept** — Built-in data types — numeric types, `str`, `bool`, `None`, `list`,
  `tuple`, `set`, `dict`?
- **Core concept** — What is hashability? What can be used as a dictionary key?
- **Pitfall** — Why can't a `list` be used as a dictionary key?
- **Comparison** — Mutable vs. immutable types — which built-ins are which?
- **[new] Core concept** — What is `enum.Enum`? `IntEnum`? When would you reach for an enum
  instead of a plain string/int constant?

### 4. List vs. Tuple vs. Set vs. Dictionary
This deserves its own comparison page.
- **Comparison** — List vs. tuple? List vs. set? Set vs. dictionary?
- **Practical** — When would you use each?
- **Comparison** — Which preserves order? Which allows duplicates? Which supports indexing?
  Which is hash-based?
- **Practical** — Why use a tuple instead of a list? Why is a set useful for membership checks?
- **[new] Core concept** — `collections.defaultdict` — what problem does it solve over a plain
  `dict`?
- **[new] Core concept** — `collections.Counter` — what's it for, and how does it compare to
  manually counting with a `dict`?
- **[new] Comparison** — `collections.namedtuple` vs. a plain `tuple` vs. a `dataclass` — when
  does each earn its place?

### 5. Strings
- **Core concept** — Are Python strings mutable? Why are they immutable?
- **Practical** — String slicing, formatting, f-strings?
- **Comparison** — `split()` vs. `join()`?
- **Pitfall** — String concatenation performance in a loop?
- **Comparison** — `str` vs. `bytes`? Unicode vs. UTF-8?
- **Understanding** — How does Python represent Unicode strings internally?

### 6. Functions
- **Core concept** — How are functions first-class objects? Can one be passed as an argument or
  returned from another function?
- **Comparison** — Positional vs. keyword arguments? Default arguments?
- **Core concept** — What are `*args`? What are `**kwargs`?
- **[predict]** — A mutable object is passed into a function and mutated inside it — what does
  the caller see afterward, and why?
- **Understanding** — Are arguments passed by value or by reference? (Framing note: Python uses
  object-reference/object-sharing semantics — neither "pass-by-value" nor "pass-by-reference" is
  quite right, and the taxonomy should say so explicitly rather than pick one.)
- **[new] Core concept** — Positional-only (`/`) and keyword-only (`*`) parameters in a function
  signature — what do they enforce, and why would an API author want that?

### 7. Scope & Namespaces
- **Core concept** — Local vs. global variables? What is a namespace?
- **Core concept** — What is LEGB (Local → Enclosing → Global → Built-in)?
- **Core concept** — `global` keyword? `nonlocal` keyword?
- **Core concept** — What is a closure?
- **[predict]** — A closure captures a loop variable by reference, then all the closures are
  called after the loop finishes — what do they print, and why does this surprise people?
- **Understanding** — How does Python actually resolve a variable name at runtime?

### 8. Comprehensions
- **Core concept** — List, dictionary, and set comprehensions?
- **Practical** — Nested comprehensions? Comprehension vs. a normal loop?
- **Pitfall** — When does a comprehension become too dense to read?
- **Comparison** — Generator expression vs. list comprehension?

### 9. Exceptions
- **Core concept** — `try` / `except` / `else` / `finally`? How does exception propagation work?
- **Core concept** — `raise`? Custom exceptions? The exception hierarchy? `Exception` vs.
  `BaseException`?
- **Pitfall** — Why shouldn't you catch everything with a bare `except Exception`?
- **Practical** — When should you use `finally`? How should exceptions be handled in production
  code?
- **[new] Core concept** — `raise NewError(...) from original_error` — what does exception
  chaining actually preserve (`__cause__`/`__context__`), and why does it matter for debugging a
  traceback in production?

### 10. Modules & Packages
- **Comparison** — Module vs. package?
- **Core concept** — `import`? `from x import y`? What actually happens during an import?
- **Core concept** — `if __name__ == "__main__":`?
- **Pitfall** — Circular imports — how do you avoid them?
- **Core concept** — What is `__init__.py`? Absolute vs. relative imports?

### 11. OOP in Python
- **Comparison** — Class vs. object? Instance variable vs. class variable?
- **Comparison** — Instance method vs. class method vs. static method? `self` vs. `cls`?
- **Core concept** — Constructor / `__init__()`?
- **Core concept** — Inheritance? Composition vs. inheritance? Encapsulation? Polymorphism?
- **Core concept** — Abstract classes? Multiple inheritance?

---

## INTERMEDIATE

### 12. Mutable vs. Immutable
This should be one of the signature RefreshYourself Python pages.
- **Core concept** — What is mutable? What is immutable? Which Python types are immutable?
- **Understanding** — Why does mutability matter? Why can a tuple contain a list, and why does
  the tuple itself remain immutable regardless?
- **Understanding** — How does mutation affect references that point at the same object?
- **[predict]** — The classic mutable-default-argument trap:
  ```
  def add_item(item, items=[]):
      items.append(item)
      return items
  ```
  What happens across repeated calls to `add_item(1)` then `add_item(2)`, and why?

### 13. `==` vs. `is`
- **Comparison** — `==` (equality) vs. `is` (identity)?
- **Practical** — When should `is` be used — why `x is None` instead of `x == None`?
- **Core concept** — What is object interning?
- **[predict]** — Small integers and short strings sometimes make `is` "appear to work" for
  equality — why does that happen, and why is relying on it a bug waiting to happen?

### 14. Shallow Copy vs. Deep Copy
- **Comparison** — Assignment vs. copy? Shallow copy vs. deep copy? `copy.copy()` vs.
  `copy.deepcopy()`?
- **[predict]** — A shallow copy of a list-of-lists is mutated through the copy's nested list —
  what happens to the original, and why?
- **Practical** — When should you avoid deep copying (cost, cycles, non-copyable objects)?

### 15. Iterators & Generators
- **Comparison** — Iterable vs. iterator? What is `__iter__()`? What is `__next__()`? What do
  `iter()` and `next()` do?
- **Core concept** — What is a generator? What does `yield` do?
- **Comparison** — Generator vs. list — lazy evaluation and memory efficiency?
- **[predict]** — A generator function is called, nothing happens yet, then it's iterated once —
  where does execution actually start, and what happens when it's resumed a second time?
- **[new] Practical** — `itertools` (`chain`, `islice`, `groupby`) — what real problems do these
  solve that hand-rolled loops over iterators would otherwise duplicate?

### 16. Decorators
- **Core concept** — What is a decorator? How do decorators actually work under the hood
  (a function wrapping a function)?
- **Practical** — Function decorators? Multiple stacked decorators — what order do they apply
  and unwind in? `functools.wraps()`? Class decorators?
- **[predict]** — Two decorators are stacked on the same function — in what order do their
  "before call" and "after call" logic actually execute?
- **Practical** — Real-world use cases: authentication, logging, timing, caching, retry,
  authorization.

### 17. Context Managers
- **Core concept** — What does `with` do? What is a context manager? `__enter__()` /
  `__exit__()`?
- **Practical** — How would you write your own context manager? File handling, database
  connection, and lock examples.

### 18. Lambda / map / filter / reduce
Don't overemphasize this section for senior interviews, per the source's own note.
- **Core concept** — `lambda`? `map()`? `filter()`? `reduce()`?
- **Practical** — When are they actually useful, and when is a comprehension more readable?

### 19. Dataclasses
- **Core concept** — What is `@dataclass`? Why use it over a normal class?
- **Practical** — `frozen=True`? Default values? `field()`?
- **Comparison** — Dataclass vs. namedtuple? Dataclass vs. a Pydantic model?

### 20. Type Hints
Modern Python interviews should include this.
- **Core concept** — Why use type hints in a dynamically-typed language? What is the `typing`
  module?
- **Practical** — `Optional`, `Union`, `list[str]`, `dict[str, int]`, `Any`, `TypeVar`, generics,
  `Protocol`?
- **Comparison** — Static type checking (`mypy`/`pyright`) vs. runtime validation?

### 21. Abstract Classes & Protocols
- **Core concept** — `ABC`? `@abstractmethod`? Abstract class vs. interface?
- **Understanding** — How does Python achieve interface-like behavior without a formal
  `interface` keyword?
- **Comparison** — Duck typing vs. explicit abstraction? What is `Protocol`, and when would you
  reach for it over inheritance?

### 22. Logging
- **Comparison** — `print()` vs. logging?
- **Core concept** — Python logging levels? Logger, Handler, Formatter?
- **Practical** — Why shouldn't production code use `print()`? How do you structure application
  logs, and how do you avoid logging secrets?

### 23. Testing
- **Comparison** — Unit vs. integration tests?
- **Core concept** — `pytest`? Fixtures? Mocking, `unittest.mock`? Mock vs. stub?
- **Practical** — What should you mock, and what should you NOT mock? How do you test
  asynchronous code? How do you test that an exception is raised?

### 24. Virtual Environments & Packaging
- **Core concept** — Why virtual environments? `venv`? `pip`? `requirements.txt` vs.
  `pyproject.toml`?
- **Comparison** — Package vs. module?
- **Practical** — Dependency management, version pinning, reproducible builds — what happens
  when dependency versions conflict?
- **[new] Practical** — Build backends (`setuptools`, `poetry`, `hatch`) — what problem does a
  build backend actually solve, and why does a modern project need one beyond a bare
  `setup.py`?

### 25. Pythonic Code
- **Core concept** — What does "Pythonic" mean? EAFP vs. LBYL? Explicit vs. implicit behavior?
- **Practical** — `enumerate()`, `zip()`, `any()`/`all()`? Why avoid overly clever one-liners —
  readability vs. brevity?
- **[new] Comparison** — `pathlib.Path` vs. `os.path` — why has `pathlib` become the modern
  default, and what does it make easier?

---

## ADVANCED

### 26. Python Object Model
This is an excellent senior-level visual page.
- **Understanding** — "Everything is an object" — what does `type`, `object`, and "classes are
  objects too" actually mean?
- **Understanding** — How are classes created? What is `__class__`? What is `__dict__`?
- **Understanding** — What is attribute lookup, mechanically?

### 27. Dunder Methods
- **Core concept** — What are magic/dunder methods?
- **Comparison** — `__str__` vs. `__repr__`?
- **Practical** — `__eq__`, `__hash__`, `__len__`, `__getitem__`, `__call__`, `__iter__`,
  `__enter__`/`__exit__` — how do these integrate a custom object with Python's own syntax?

### 28. MRO & Multiple Inheritance
Deep Dive, per the source's own priority — real but not mainstream interview-prep focus.
- **Core concept** — What is MRO (Method Resolution Order)? C3 linearization? `super()`?
- **Core concept** — The diamond-inheritance problem — how does Python actually resolve it?
- **Practical** — Why can multiple inheritance become dangerous, and when is composition
  preferable?

### 29. Descriptors
Deep Dive, for experienced/architect-level candidates.
- **Core concept** — What is a descriptor? `__get__`, `__set__`, `__delete__`?
- **Comparison** — Data descriptor vs. non-data descriptor?
- **Understanding** — How does `property` actually work internally? How do descriptors relate
  to ORM field definitions?

### 30. Metaclasses
Deep Dive — should not be a major interview-prep focus, per the source's own note.
- **Core concept** — What is a metaclass? What is the default metaclass (`type`)?
- **Practical** — When are metaclasses actually useful, and why should they usually be avoided?
- **Comparison** — Metaclass vs. decorator? How does a class actually get created?

### 31. Memory Management
- **Core concept** — How does Python manage memory? Reference counting? Garbage collection?
  Cyclic references, the `gc` module?
- **Practical** — What is a memory leak in Python — can a Python application actually leak
  memory? How would you investigate growing memory usage?
- **[new] Core concept** — `__slots__` — what does it actually save (no per-instance `__dict__`),
  and what do you give up by using it?

### 32. GIL
This absolutely belongs in the roadmap.
- **Core concept** — What is the GIL, and why does CPython have one?
- **Pitfall** — Does the GIL mean Python cannot do concurrency at all? Threading vs.
  multiprocessing, and CPU-bound vs. I/O-bound?
- **Practical** — When does threading actually help despite the GIL? When does multiprocessing
  help? Does `async` sidestep the GIL problem, or not?
- **[new] Core concept** — Free-threaded CPython (PEP 703, the no-GIL build shipping as
  experimental starting with Python 3.13) — verify and state the actual current status rather
  than presenting "Python can only use one CPU core" as a timeless, version-independent fact.

### 33. Threading
- **Core concept** — What is a thread? When would you reach for threading — CPU-bound vs.
  I/O-bound?
- **Core concept** — Race condition? Lock, RLock, Semaphore, Event? What does "thread-safe"
  mean?
- **[predict]** — Two threads increment a shared counter without a lock, many times each — what
  does the final count actually end up being, and why isn't it simply "correct"?

### 34. Multiprocessing
- **Comparison** — Threading vs. multiprocessing — why does multiprocessing actually help
  CPU-bound workloads where threading doesn't?
- **Core concept** — Process communication — `Queue`? `Pool`? Process lifecycle? Serialization
  overhead between processes?
- **Practical** — When is multiprocessing a bad choice?

### 35. `asyncio`
One of the most important advanced topics.
- **Core concept** — What is asynchronous programming? What is an event loop? What is a
  coroutine? `async`/`await`? Task vs. Future?
- **Understanding** — How does `asyncio` actually work, mechanically?
- **Comparison** — Async vs. threading? Async vs. multiprocessing — when does async actually
  improve performance, and when does it not help at all?
- **[predict]** — Blocking (synchronous, CPU-bound or blocking-I/O) code is called directly
  inside an `async def` function with no `await` around it — what happens to every other task
  on the event loop while it runs?
- **Practical** — How do you call synchronous code from async code without blocking the loop?
  How do you handle cancellation and timeouts?

### 36. Performance & Profiling
- **Understanding** — Why is Python slower than compiled languages, mechanically?
- **Practical** — How do you optimize Python? Big-O vs. actual measured performance? `cProfile`?
  `timeit`? Memory profiling?
- **Comparison** — CPU bottleneck vs. I/O bottleneck? List vs. generator memory usage?
- **Practical** — When should you actually optimize, and how do you identify the real
  bottleneck before changing any code?

### 37. Caching
- **Core concept** — Why cache? `functools.lru_cache`?
- **Practical** — Cache invalidation? TTL? In-memory cache vs. Redis?
- **Scenario** — What happens when cached data becomes stale? How would you cache an expensive
  computation, and how would you prevent a cache stampede?

### 38. Serialization
- **Comparison** — JSON vs. pickle?
- **Pitfall** — Why is unpickling untrusted data dangerous?
- **Practical** — Serialization overhead? What should and shouldn't be serialized — API
  serialization vs. object serialization?

### 39. Production Python Architecture
- **Scenario** — How would you structure a large Python application? How do you separate
  business logic from infrastructure?
- **Practical** — How do you manage configuration and secrets? How do you structure
  dependencies, logging, and error handling? How do you test, package/deploy, and make the
  application observable?

### 40. Production Troubleshooting
This should be a dedicated Advanced subsection.
- **Scenario** — A Python API suddenly becomes slow. What do you investigate?
- **Scenario** — Memory usage keeps increasing. What do you check?
- **Scenario** — CPU reaches 100%. What do you check?
- **Scenario** — An async API gets slower as concurrent requests increase. What do you check?
- **Scenario** — Threads aren't improving throughput. What do you check?
- **Scenario** — One request blocks every other async request. What do you check?
- **Scenario** — The application occasionally crashes with a `KeyError`. What do you check?
- **Scenario** — A function unexpectedly retains values between calls. What do you check?
- **Scenario** — Two threads occasionally corrupt shared state. What do you check?
- **Scenario** — Production and development behave differently. What do you check?
- **Scenario** — A dependency upgrade breaks production. What do you check?

### 41. Python Web / API
Because the site's overall preparation includes Web API, Python shouldn't be isolated from real
application development.
- **Comparison** — WSGI vs. ASGI? Flask vs. FastAPI vs. Django?
- **Practical** — Request lifecycle? Middleware? Dependency injection? Authentication and
  authorization? REST API design, serialization, and validation?
- **Practical** — Async endpoints? Connection pooling? API error handling, versioning, rate
  limiting, and background jobs?

### 42. Python + Databases
- **Core concept** — DB-API? Connection pooling? What is an ORM — SQLAlchemy, Django ORM?
- **Pitfall** — Lazy loading and the N+1 query problem?
- **Practical** — Transactions and connection management? Async database access? How would you
  troubleshoot slow database queries from Python?

### 43. Python Architecture / Senior Scenarios
This is where the roadmap becomes useful for 10–16+ years / architect candidates.
- **Scenario** — Design a high-throughput Python API (load balancer → Python API instances →
  cache/database → message queue → background workers). Where does Python actually become the
  bottleneck? How do you scale horizontally?
- **Practical** — Where does async help, and where does it not help? How do you handle
  CPU-heavy processing — where would you introduce workers?
- **Practical** — How do you handle retries and make jobs idempotent? How do you observe the
  whole system end to end?

---

## Gap-hunt log

Per [`gap-hunting.md`](../../rules/gap-hunting.md): the source document is already unusually
thorough for a senior/architect audience — it explicitly names version-sensitivity as a concern
(GIL behavior) and asks for a distinct "predict the output" question type wherever behavior
matters more than definition. That made this a moderate hunt, closer to SQL's (12 additions)
than AWS's (6) given how large Python's surface area actually is. 8 real gaps found, all folded
into existing groups rather than creating new standalone pages — each is a natural extension of
a group already in the source, not a topic the source never touched at all.

**Added:**

| Added | Group | Why |
|---|---|---|
| `enum.Enum` / `IntEnum` | 3 (Basic Data Types) | A genuinely common built-in type never mentioned anywhere in the source's own data-types list, despite being routine in production code and interviews alike. |
| `collections` module (`defaultdict`, `Counter`, `namedtuple`) | 4 (Basic List/Tuple/Set/Dict) | `namedtuple` is referenced once as a dataclass comparison point but never introduced; `defaultdict`/`Counter` don't appear anywhere despite being some of the most commonly asked "what would you reach for instead of a plain dict" questions. |
| Walrus operator (`:=`) and structural pattern matching (`match`/`case`) | 1 (Basic Python Fundamentals) | Modern (3.8+/3.10+) syntax increasingly asked about directly in current interviews; the source's own Python-2-vs-3 question shows it already cares about version-specific syntax evolution, this is the natural continuation. |
| Positional-only (`/`) and keyword-only (`*`) parameters | 6 (Basic Functions) | A real, moderately common API-design question ("how do you force a caller to use keyword arguments") with zero coverage in the source's Functions group despite covering `*args`/`**kwargs` in depth. |
| Exception chaining (`raise ... from ...`) | 9 (Basic Exceptions) | The source covers the exception hierarchy and `try`/`except`/`finally` in depth but never asks about chaining, which is directly relevant to "how should exceptions be handled in production" — a question the source does ask. |
| `itertools` (`chain`, `islice`, `groupby`) | 15 (Intermediate Iterators & Generators) | The source covers the iterator protocol and generators thoroughly but never asks about the standard library's own iterator-combinator toolkit, which is a common senior-level "write this without a manual loop" question. |
| `pathlib.Path` vs. `os.path` | 25 (Intermediate Pythonic Code) | A very common "what's the modern/Pythonic way to do this" question with zero mention anywhere in the source, despite the source's own Pythonic-Code group asking exactly that class of question for other idioms. |
| `__slots__` | 31 (Advanced Memory Management) | The source's Memory Management group asks about reference counting, GC, and leaks in depth but never asks about the single most common "how would you reduce per-instance memory overhead" interview question. |
| Free-threaded CPython / PEP 703 | 32 (Advanced GIL) | Directly extends the source's own explicit instruction ("verify version-specific GIL behavior... rather than presenting the historical 'one CPU' statement as universally true") — the no-GIL build is the concrete, current fact that instruction was anticipating. |

**Considered and explicitly excluded:**

| Considered | Why excluded |
|---|---|
| `attrs` (third-party dataclass alternative) | Dataclasses (stdlib) and Pydantic (mentioned as a comparison point) already cover this territory; `attrs` specifically would add a third near-identical comparison without a materially different interview angle. |
| `contextvars` | Real but niche — relevant mainly to framework-internals-level async context propagation, past what a senior *application* engineer (as opposed to a framework author) typically gets asked. |
| `weakref` | Niche enough that it would mostly duplicate Memory Management's existing cyclic-reference/GC coverage without adding a distinct, commonly-asked question. |
| f-string debugging (`f"{x=}"`) | A convenience feature, not an interview-worthy concept — nothing to reason about beyond "it exists." |
| `dataclass.__post_init__` | Already adequately covered by the existing Dataclasses group's general "why use it" framing; not a distinct enough question to warrant listing separately. |
