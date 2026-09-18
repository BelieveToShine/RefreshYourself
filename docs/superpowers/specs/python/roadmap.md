# Python — Roadmap (Phases 2–6)

Phase 1 output: [`question-taxonomy.md`](question-taxonomy.md) — 43 concept groups (35 from the
user's own source, 8 added by this file's own Phase 2 gap-hunt). This file is Phases 2–6:
review, page grouping, tier, priority, and the final roadmap — see
[`specs/README.md`](../README.md) for what each phase means. **Phase 7 (writing the actual
pages) has not started** — see "Known gaps" at the bottom.

## Phase 2 — Review & gap-hunt

**Dedupe check**: no true duplicates found. Two pairs look similar at a glance but are
deliberately kept separate, same layered-depth pattern other tracks use across tiers:
- **Group 2 (Variables & Object Model, Basic) and Group 26 (Python Object Model, Advanced)** —
  Group 2 is "a variable is a reference, not a box" at the level a beginner-to-mid engineer
  needs; Group 26 is "how classes themselves get created, `__dict__`, attribute lookup" —
  genuinely deeper, internals-level content building on Group 2's vocabulary rather than
  repeating it.
- **Group 11 (OOP Fundamentals, Basic, which briefly mentions multiple inheritance) and Group 28
  (MRO & Multiple Inheritance, Advanced)** — Group 11's mention is "what is it" surface recall;
  Group 28 is the actual resolution-order mechanism and the diamond problem. Kept separate, same
  relationship SQL's Locking/Deadlock-vs-Blocking pages have.

**Active gap-hunt against outside domain knowledge** (per
[`gap-hunting.md`](../../rules/gap-hunting.md)): 8 real gaps found and added — `enum`, the
`collections` module, the walrus operator and structural pattern matching, positional-only/
keyword-only parameters, exception chaining, `itertools`, `pathlib` vs. `os.path`, `__slots__`,
and free-threaded CPython (PEP 703) — full reasoning and the "considered and excluded" list are
in `question-taxonomy.md`'s own Gap-hunt log, not duplicated here. All 8 were folded into
existing groups rather than creating new pages — every one is a natural extension of a group the
source already had, not a topic area the source never touched at all.

**One deliberate placement check, flagged rather than silently applied**: Group 27 (Dunder
Methods) sits in Advanced per the source, but individual questions like "`__str__` vs.
`__repr__`" could read as Intermediate-depth comparison content on their own. Kept in Advanced —
the group's actual framing ("how do these integrate custom objects with Python syntax") is a
mechanism/internals question (why does `for x in obj` call `__iter__`, why does `len(obj)` call
`__len__`), consistent with [interview-depth-and-priority.md](../../rules/interview-depth-and-priority.md)'s
Advanced definition, and it sits naturally alongside Object Model/MRO/Descriptors/Metaclasses —
the same internals cluster — rather than beside Intermediate's practical/comparison pages.

## Phase 3 — Grouping into pages (43 pages)

One page per concept group, the same 1:1 default every other track uses when the source's own
grouping is already page-sized.

- **Basic**: 11 pages (taxonomy groups 1–11).
- **Intermediate**: 14 pages (taxonomy groups 12–25).
- **Advanced**: 18 pages (taxonomy groups 26–43).

## Phase 4 — Tier (by question type, not difficulty)

The source's own Basic/Intermediate/Advanced grouping is kept as-is — every group already lands
where the actual rule (question type, not difficulty or seniority) would put it: Basic groups
are "what is X" core-knowledge recall, Intermediate groups are practical usage/comparison/
troubleshooting (including this track's own "predict the output" behavioral questions, which are
practical-depth by nature — they test applied understanding, not internals), Advanced groups are
internals/architecture/scenario/trade-off. See the Dunder Methods placement check above for the
one borderline case that got a documented second look.

## Phase 5 — Priority (🔥 Must Know / ⭐ Should Know / 🧠 Deep Dive — independent of tier)

The source gives priority two ways: an inline tag on most individual group headers, **and** a
separate, deliberately-curated "Priority distribution I'd recommend" summary list at the end.
Most of the time these agree. Where they didn't, **the curated summary list was treated as the
more authoritative, considered final answer** — it's explicitly framed as the author's
deliberate recommendation, where an inline header tag reads more like "this deserves real
interview-prep space" than a strict priority commitment. Four groups needed this resolution:

- **Logging (Intermediate)** — inline tag says 🔥, the summary list places it under ⭐. Resolved
  to **⭐**. Logging fundamentals (levels, why not `print()`) are common, but the depth asked
  here (Logger/Handler/Formatter internals) reads as "should know for production hygiene," not a
  topic on the level of GIL or `asyncio` that's near-certain to come up.
- **Caching (Advanced)** — same conflict, same resolution: **⭐**. `functools.lru_cache` and
  cache-invalidation reasoning are genuinely useful but not in the same must-know tier as
  memory management or concurrency.
- **Python + Databases (Advanced)** — inline tag says 🔥, but the summary list's ⭐ bucket
  explicitly includes "ORM concepts" and "Database connectivity," which is this page's content.
  Resolved to **⭐**.
- **Python Web / API (Advanced)** — the source flags this one's ambiguity itself ("⭐ Should
  Know → 🔥 Must Know depending on target role"). Resolved to **⭐** as the default for a
  general-audience site not scoped specifically to backend-web roles — consistent with both the
  summary list's ⭐ placement (WSGI/ASGI, FastAPI/Django concepts) and the source's own
  default-first ordering. A reader specifically targeting Python backend roles should treat this
  page as closer to 🔥 in practice; that's a reading note for `overview.md`, not a reason to
  change the stored priority.

Final per-page priority (tier restarts each page's number, matching every other track's file
naming):

| # | Page | Tier | Priority |
|---|---|---|---|
| 1 | Python Fundamentals | Basic | 🔥 |
| 2 | Variables & Object Model | Basic | 🔥 |
| 3 | Python Data Types | Basic | 🔥 |
| 4 | List vs. Tuple vs. Set vs. Dictionary | Basic | 🔥 |
| 5 | Strings | Basic | 🔥 |
| 6 | Functions | Basic | 🔥 |
| 7 | Scope & Namespaces | Basic | 🔥 |
| 8 | Comprehensions | Basic | ⭐ |
| 9 | Exceptions | Basic | 🔥 |
| 10 | Modules & Packages | Basic | 🔥 |
| 11 | OOP Fundamentals | Basic | 🔥 |
| 1 | Mutable vs. Immutable | Intermediate | 🔥 |
| 2 | `==` vs. `is` | Intermediate | 🔥 |
| 3 | Shallow Copy vs. Deep Copy | Intermediate | 🔥 |
| 4 | Iterators & Generators | Intermediate | 🔥 |
| 5 | Decorators | Intermediate | 🔥 |
| 6 | Context Managers | Intermediate | 🔥 |
| 7 | Lambda / map / filter / reduce | Intermediate | ⭐ |
| 8 | Dataclasses | Intermediate | ⭐ |
| 9 | Type Hints | Intermediate | 🔥 |
| 10 | Abstract Classes & Protocols | Intermediate | ⭐ |
| 11 | Logging | Intermediate | ⭐ |
| 12 | Testing | Intermediate | 🔥 |
| 13 | Virtual Environments & Packaging | Intermediate | 🔥 |
| 14 | Pythonic Code | Intermediate | ⭐ |
| 1 | Python Object Model | Advanced | 🧠 |
| 2 | Dunder Methods | Advanced | 🔥 |
| 3 | MRO & Multiple Inheritance | Advanced | 🧠 |
| 4 | Descriptors | Advanced | 🧠 |
| 5 | Metaclasses | Advanced | 🧠 |
| 6 | Memory Management | Advanced | 🔥 |
| 7 | GIL | Advanced | 🔥 |
| 8 | Threading | Advanced | 🔥 |
| 9 | Multiprocessing | Advanced | 🔥 |
| 10 | `asyncio` | Advanced | 🔥 |
| 11 | Performance & Profiling | Advanced | 🔥 |
| 12 | Caching | Advanced | ⭐ |
| 13 | Serialization | Advanced | ⭐ |
| 14 | Production Python Architecture | Advanced | 🔥 |
| 15 | Production Troubleshooting | Advanced | 🔥 |
| 16 | Python Web / API | Advanced | ⭐ |
| 17 | Python + Databases | Advanced | ⭐ |
| 18 | Python Architecture / Senior Scenarios | Advanced | 🧠 |

## Phase 6 — Final roadmap

**New totals: Basic 11, Intermediate 14, Advanced 18 — 43 pages.**

| # | Concept group | Tier | Priority | Page |
|---|---|---|---|---|
| 1 | Python Fundamentals | Basic | 🔥 | `python/basic/1.html` |
| 2 | Variables & Object Model | Basic | 🔥 | `python/basic/2.html` |
| 3 | Python Data Types | Basic | 🔥 | `python/basic/3.html` |
| 4 | List vs. Tuple vs. Set vs. Dictionary | Basic | 🔥 | `python/basic/4.html` |
| 5 | Strings | Basic | 🔥 | `python/basic/5.html` |
| 6 | Functions | Basic | 🔥 | `python/basic/6.html` |
| 7 | Scope & Namespaces | Basic | 🔥 | `python/basic/7.html` |
| 8 | Comprehensions | Basic | ⭐ | `python/basic/8.html` |
| 9 | Exceptions | Basic | 🔥 | `python/basic/9.html` |
| 10 | Modules & Packages | Basic | 🔥 | `python/basic/10.html` |
| 11 | OOP Fundamentals | Basic | 🔥 | `python/basic/11.html` |
| 12 | Mutable vs. Immutable | Intermediate | 🔥 | `python/intermediate/1.html` |
| 13 | `==` vs. `is` | Intermediate | 🔥 | `python/intermediate/2.html` |
| 14 | Shallow Copy vs. Deep Copy | Intermediate | 🔥 | `python/intermediate/3.html` |
| 15 | Iterators & Generators | Intermediate | 🔥 | `python/intermediate/4.html` |
| 16 | Decorators | Intermediate | 🔥 | `python/intermediate/5.html` |
| 17 | Context Managers | Intermediate | 🔥 | `python/intermediate/6.html` |
| 18 | Lambda / map / filter / reduce | Intermediate | ⭐ | `python/intermediate/7.html` |
| 19 | Dataclasses | Intermediate | ⭐ | `python/intermediate/8.html` |
| 20 | Type Hints | Intermediate | 🔥 | `python/intermediate/9.html` |
| 21 | Abstract Classes & Protocols | Intermediate | ⭐ | `python/intermediate/10.html` |
| 22 | Logging | Intermediate | ⭐ | `python/intermediate/11.html` |
| 23 | Testing | Intermediate | 🔥 | `python/intermediate/12.html` |
| 24 | Virtual Environments & Packaging | Intermediate | 🔥 | `python/intermediate/13.html` |
| 25 | Pythonic Code | Intermediate | ⭐ | `python/intermediate/14.html` |
| 26 | Python Object Model | Advanced | 🧠 | `python/advanced/1.html` |
| 27 | Dunder Methods | Advanced | 🔥 | `python/advanced/2.html` |
| 28 | MRO & Multiple Inheritance | Advanced | 🧠 | `python/advanced/3.html` |
| 29 | Descriptors | Advanced | 🧠 | `python/advanced/4.html` |
| 30 | Metaclasses | Advanced | 🧠 | `python/advanced/5.html` |
| 31 | Memory Management | Advanced | 🔥 | `python/advanced/6.html` |
| 32 | GIL | Advanced | 🔥 | `python/advanced/7.html` |
| 33 | Threading | Advanced | 🔥 | `python/advanced/8.html` |
| 34 | Multiprocessing | Advanced | 🔥 | `python/advanced/9.html` |
| 35 | `asyncio` | Advanced | 🔥 | `python/advanced/10.html` |
| 36 | Performance & Profiling | Advanced | 🔥 | `python/advanced/11.html` |
| 37 | Caching | Advanced | ⭐ | `python/advanced/12.html` |
| 38 | Serialization | Advanced | ⭐ | `python/advanced/13.html` |
| 39 | Production Python Architecture | Advanced | 🔥 | `python/advanced/14.html` |
| 40 | Production Troubleshooting | Advanced | 🔥 | `python/advanced/15.html` |
| 41 | Python Web / API | Advanced | ⭐ | `python/advanced/16.html` |
| 42 | Python + Databases | Advanced | ⭐ | `python/advanced/17.html` |
| 43 | Python Architecture / Senior Scenarios | Advanced | 🧠 | `python/advanced/18.html` |

## Phase 6 addendum — concept clusters for the live roadmap page

`python/roadmap.html` groups the 43 pages by **related category, cutting across tiers** — same
pattern `sql/roadmap.html`, `azure/roadmap.html`, and `aws/roadmap.html` use — rather than
tier-first. 11 clusters, 43 pages:

| # | Cluster | Pages included |
|---|---|---|
| 1 | Fundamentals & Object Model | Python Fundamentals, Variables & Object Model, Python Object Model |
| 2 | Core Data Types | Python Data Types, List vs. Tuple vs. Set vs. Dictionary, Strings, Mutable vs. Immutable, `==` vs. `is`, Shallow Copy vs. Deep Copy |
| 3 | Functions, Scope & Functional Style | Functions, Scope & Namespaces, Comprehensions, Decorators, Lambda / map / filter / reduce |
| 4 | Iterators, Generators & Context Managers | Iterators & Generators, Context Managers |
| 5 | OOP, Object Model Internals & Typing | OOP Fundamentals, Dunder Methods, MRO & Multiple Inheritance, Descriptors, Metaclasses, Abstract Classes & Protocols, Type Hints, Dataclasses |
| 6 | Errors, Modules & Packaging | Exceptions, Modules & Packages, Virtual Environments & Packaging |
| 7 | Testing, Logging & Pythonic Code | Logging, Testing, Pythonic Code |
| 8 | Memory, GIL & Concurrency | Memory Management, GIL, Threading, Multiprocessing |
| 9 | Async & Performance | `asyncio`, Performance & Profiling, Caching |
| 10 | Serialization, Web & Databases | Serialization, Python Web / API, Python + Databases |
| 11 | Production Architecture & Scenarios | Production Python Architecture, Production Troubleshooting, Python Architecture / Senior Scenarios |

If a page is later added, renamed, or moved during Phase 7, update this table **and**
`python/roadmap.html` together — they must stay in sync.

## Track-specific decisions and boundaries

- **"Predict the output" is a sixth question-variant type, unique to this track** — alongside
  the five every other track uses (Core concept/Understanding/Comparison/Pitfall/Scenario), per
  the user's own explicit instruction. Tagged `[predict]` in `question-taxonomy.md` wherever
  Python's behavior matters more than its definition (mutable default arguments, shared
  references, closures, generator resumption, decorator ordering, `is`/interning surprises,
  blocking code inside `async def`, unlocked shared-counter races). Phase 7 must render these as
  a short code block followed by "what does this print/do, and why?" — not reworded into a plain
  definitional question, or the entire point of including them is lost.
- **Functional-programming trivia (`lambda`/`map`/`filter`/`reduce`) is deliberately
  de-emphasized** (⭐, not 🔥) and **metaclasses/MRO/descriptors are Deep Dive, not mainstream
  prep** — both per the source's own explicit instruction not to over-weight these for a senior
  audience.
- **Position among the site's tracks**: Python is a language track, not part of the ordered
  core-backend path (`C# → OOP → .NET/ASP.NET Core → Web API → EF Core → SQL → Azure → AWS`) —
  it sits with React/Angular/DSA/AI under "other tracks," same category as the other
  language-specific tracks.
- **Python Web/API (page 41) and Python + Databases (page 42) deliberately stay scoped to
  Python-specific angles** (WSGI vs. ASGI, async endpoints, ORM lazy-loading/N+1) rather than
  re-teaching general REST/API design — that generic material already lives in the `webapi/`
  track; this track cross-links back to it rather than duplicating it.
- Icon 🐍, track color Python dark-blue (`#306998`, the logo's darker shade) — chosen to read as
  clearly Python-branded while staying visually distinct from C#'s brighter sky-blue (`#3b82f6`)
  and from AWS's burnt-orange (`#c2410c`)/DSA's amber (`#f59e0b`) pair.

## Known gaps

**Phase 7 has not started — zero pages are written.** This file and `question-taxonomy.md` are
Phases 1–6 only. `python/roadmap.html`, the three tier `index.html` skeleton pages, and the root
tile's roadmap-badge are wired per the Phase-1 mandate, honestly labeled as draft/not-yet-written
— the root tile stays in its "Coming soon" state and none of the 43 pages exist yet.
