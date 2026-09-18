# Python — Track Spec

**Start here for anything Python-related.** See
[`docs/superpowers/specs/README.md`](../README.md) for what this file is and the process for
keeping it in sync with the live pages.

## Status — Phases 1–6 complete, Phase 7 not started, 0/43 pages written

- **Phase 1** — [`question-taxonomy.md`](question-taxonomy.md): raw questions, grouped by
  concept across 43 subsections, sourced from the user's own Python interview-roadmap document
  (built for a 3–16+ year audience, deliberately going beyond syntax into internals, the object
  model, mutability, concurrency, and async) — organized around interview questions, not a
  Python tutorial.
- **Phases 2–6** — [`roadmap.md`](roadmap.md): reviewed (no true duplicates; two pairs of
  similarly-named groups confirmed as deliberate layered-depth topics), an active gap-hunt added
  8 real gaps (`enum`, the `collections` module, walrus/`match`-`case`, positional-only/
  keyword-only params, exception chaining, `itertools`, `pathlib` vs. `os.path`, `__slots__`,
  free-threaded CPython — full reasoning in `question-taxonomy.md`'s Gap-hunt log), grouped into
  43 final pages, tiered by **interview depth** (the source's own grouping held up, with one
  placement double-checked — Dunder Methods stayed Advanced), and given an interview-priority
  tag (four groups had a conflict between the source's own inline tag and its separately-curated
  priority summary; all four resolved in favor of the curated summary — see `roadmap.md`'s
  Phase 5 section for the reasoning).
- **Unique to this track: "predict the output" is a sixth question-variant type**, alongside
  the five every other track uses — a short code snippet followed by "what does this print/do,
  and why?" wherever Python's behavior matters more than its definition (mutable defaults,
  shared references, closures, generator resumption, decorator ordering, unlocked shared-state
  races, blocking code inside `async def`). This must survive into Phase 7 as an actual code
  block + question, not get reworded into a plain definitional question.
- **Phase 6 wiring done at Phase 1**, per [specs/README.md](../README.md)'s mandate —
  `python/roadmap.html`, the three tier `index.html` skeleton pages, and the root `index.html`
  tile's `roadmap-badge` existed from the moment the Phase 1 taxonomy was written, correctly
  labeled "draft" and the tile itself stays in "Coming soon" state until Phase 7 genuinely
  finishes.
- **Phase 7 has not started.** Nothing here should be mistaken for a completed track.

## Basic (11 topics) — 0 written

| # | Topic | Priority | Written? |
|---|---|---|---|
| 1 | Python Fundamentals | 🔥 | 📝 |
| 2 | Variables & Object Model | 🔥 | 📝 |
| 3 | Python Data Types | 🔥 | 📝 |
| 4 | List vs. Tuple vs. Set vs. Dictionary | 🔥 | 📝 |
| 5 | Strings | 🔥 | 📝 |
| 6 | Functions | 🔥 | 📝 |
| 7 | Scope & Namespaces | 🔥 | 📝 |
| 8 | Comprehensions | ⭐ | 📝 |
| 9 | Exceptions | 🔥 | 📝 |
| 10 | Modules & Packages | 🔥 | 📝 |
| 11 | OOP Fundamentals | 🔥 | 📝 |

## Intermediate (14 topics) — 0 written

| # | Topic | Priority | Written? |
|---|---|---|---|
| 1 | Mutable vs. Immutable | 🔥 | 📝 |
| 2 | `==` vs. `is` | 🔥 | 📝 |
| 3 | Shallow Copy vs. Deep Copy | 🔥 | 📝 |
| 4 | Iterators & Generators | 🔥 | 📝 |
| 5 | Decorators | 🔥 | 📝 |
| 6 | Context Managers | 🔥 | 📝 |
| 7 | Lambda / map / filter / reduce | ⭐ | 📝 |
| 8 | Dataclasses | ⭐ | 📝 |
| 9 | Type Hints | 🔥 | 📝 |
| 10 | Abstract Classes & Protocols | ⭐ | 📝 |
| 11 | Logging | ⭐ | 📝 |
| 12 | Testing | 🔥 | 📝 |
| 13 | Virtual Environments & Packaging | 🔥 | 📝 |
| 14 | Pythonic Code | ⭐ | 📝 |

## Advanced (18 topics) — 0 written

| # | Topic | Priority | Written? |
|---|---|---|---|
| 1 | Python Object Model | 🧠 | 📝 |
| 2 | Dunder Methods | 🔥 | 📝 |
| 3 | MRO & Multiple Inheritance | 🧠 | 📝 |
| 4 | Descriptors | 🧠 | 📝 |
| 5 | Metaclasses | 🧠 | 📝 |
| 6 | Memory Management | 🔥 | 📝 |
| 7 | GIL | 🔥 | 📝 |
| 8 | Threading | 🔥 | 📝 |
| 9 | Multiprocessing | 🔥 | 📝 |
| 10 | `asyncio` | 🔥 | 📝 |
| 11 | Performance & Profiling | 🔥 | 📝 |
| 12 | Caching | ⭐ | 📝 |
| 13 | Serialization | ⭐ | 📝 |
| 14 | Production Python Architecture | 🔥 | 📝 |
| 15 | Production Troubleshooting | 🔥 | 📝 |
| 16 | Python Web / API | ⭐ | 📝 |
| 17 | Python + Databases | ⭐ | 📝 |
| 18 | Python Architecture / Senior Scenarios | 🧠 | 📝 |

## Where the roadmap came from

Sourced from the user's own Python interview-roadmap document, which came pre-organized into
Basic/Intermediate/Advanced with priority hints per group (both inline and in a separately
curated summary list) — this track kept that structure and those questions almost entirely
intact. A Phase 2 gap-hunt added 8 real gaps on top of it (see
[`question-taxonomy.md`](question-taxonomy.md)'s Gap-hunt log for the full added/excluded
reasoning) — everything else traces directly back to the source, no invented facts.

## Track-specific decisions and boundaries

- **"Predict the output" is this track's own sixth question-variant type** — see Status above.
  Don't let Phase 7 flatten these into plain definitional questions.
- **Functional-programming trivia is de-emphasized, metaclasses/MRO/descriptors are Deep Dive**
  — both per the source's own explicit instruction not to over-weight these for a senior
  audience.
- **Not part of the ordered core-backend path** (`C# → OOP → .NET/ASP.NET Core → Web API →
  EF Core → SQL → Azure → AWS`) — Python is a language track, grouped with React/Angular/DSA/AI
  under "other tracks."
- **Python Web/API and Python + Databases stay scoped to Python-specific angles** (WSGI vs.
  ASGI, ORM lazy-loading/N+1) rather than re-teaching general REST/API design, which already
  lives in `webapi/` — cross-link back to it rather than duplicating it.
- Icon 🐍, track color Python dark-blue (`#306998`) — distinct from C#'s brighter sky-blue
  (`#3b82f6`) and from AWS's burnt-orange (`#c2410c`)/DSA's amber (`#f59e0b`) pair.

## Known gaps

**Phase 7 has not started — this is a roadmap-only track right now**, same status Azure and AWS
were both in before their own Phase 7 landed. The taxonomy and roadmap have not yet been
pressure-tested by actually writing pages, so treat the tiering/grouping (and especially the
four resolved priority conflicts) as reviewable. See [`roadmap.md`](roadmap.md)'s own "Known
gaps" section.
