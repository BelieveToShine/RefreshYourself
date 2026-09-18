# Python — Track Spec

**Start here for anything Python-related.** See
[`docs/superpowers/specs/README.md`](../README.md) for what this file is and the process for
keeping it in sync with the live pages.

## Status — Phases 1–7 complete, all 43 pages written

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
  Phase 5 section for the reasoning). This phase's own work also produced a "Phase 6 addendum"
  mapping all 43 pages into 11 cross-tier concept clusters, used by the live `python/roadmap.html`
  page instead of a tier-first grouping — see Track-specific decisions below.
- **Phase 6 wiring done at Phase 1**, per [specs/README.md](../README.md)'s mandate —
  `python/roadmap.html`, the three tier `index.html` skeleton pages, and the root `index.html`
  tile's `roadmap-badge` existed from the moment the Phase 1 taxonomy was written, correctly
  labeled "draft" through Phases 2–6 and flipped to live only once Phase 7 genuinely finished.
- **Phase 7 — all 43 pages written**, by dispatched subagents referencing `aws/basic/1.html` /
  `aws/intermediate/1.html` / `aws/advanced/1.html` as structural templates — the closest
  completed track at the same scale and commit cadence at the time this track's Phase 7 ran.
  **Unique to this track: "predict the output" is a sixth question-variant type**, alongside
  the five every other track uses — every `[predict]`-tagged question in the taxonomy was
  explicitly briefed to every subagent as requiring an actual short code block followed literally
  by "what does this print/do, and why?", never reworded into a plain definitional question.
  Confirmed present and correctly rendered (real `<pre><code>` blocks, not prose) on all 9
  `[predict]` pages: `basic/2.html` (×2 questions, one page), `basic/6.html`, `basic/7.html`,
  `intermediate/1.html`, `intermediate/2.html`, `intermediate/3.html`, `intermediate/4.html`,
  `intermediate/5.html`, `advanced/8.html`, `advanced/10.html`.
  **Diagram verification, with the actual evidence, not just an aggregate claim:** every
  subagent ran the mandatory script from
  [diagram-style.md](../../rules/diagram-style.md#mandatory-automated-verification--hand-computed-coordinates-are-not-verification)
  against its own page and reported `issueCount: 0` before finishing — several subagents caught
  and self-fixed real defects before their own report (a text-overflow on `basic/1.html`'s
  compile-time/run-time zone diagram; short arrow segments on `intermediate/2.html` and
  `advanced/2.html`'s diagrams; a routing overlap on `advanced/6.html` caught only via a
  rendered screenshot, not the script alone; text-overflow findings on `advanced/12.html` and
  `advanced/16.html`). The orchestrating session then ran its own **independent full sweep, one
  page at a time, all 43 pages, 45 diagrams total** (two pages — `basic/4.html` and
  `advanced/10.html` — carry two diagrams each): every single one came back
  `{"issueCount":0,"issues":[]}` on this final sweep, script exit code `0`. This track's real
  defects were all caught and fixed at the subagent-self-verification layer before the
  independent sweep ran — the independent sweep still ran in full against every page, not
  skipped, per the standing rule that a clean subagent self-report is never sufficient on its
  own.
- **Pager-consistency fix-up**: nearly every page across all three tiers was written before all
  its own tier's siblings existed yet on disk, so many prev/next pager links correctly (per
  content-writing.md's fallback rule) pointed muted at the tier index labeled "(coming soon)" —
  at larger scale than any prior track (39 files needed at least one fix, vs. AWS's 12) because
  this track's subagents were dispatched in larger parallel batches across all three tiers at
  once rather than tier-by-tier. Once all 43 pages existed, a script across the whole track
  found and converted every stale link, forming three clean chains: Basic `1 → 11`, Intermediate
  `1 → 14`, Advanced `1 → 18`. Re-ran the diagram-verification script after the pager edits to
  confirm the text-only changes didn't disturb any SVG — still `issueCount: 0` everywhere.

## Basic (11 topics) — 11 written

| # | Topic | Priority | Written? |
|---|---|---|---|
| 1 | Python Fundamentals | 🔥 | ✅ |
| 2 | Variables & Object Model | 🔥 | ✅ |
| 3 | Python Data Types | 🔥 | ✅ |
| 4 | List vs. Tuple vs. Set vs. Dictionary | 🔥 | ✅ |
| 5 | Strings | 🔥 | ✅ |
| 6 | Functions | 🔥 | ✅ |
| 7 | Scope & Namespaces | 🔥 | ✅ |
| 8 | Comprehensions | ⭐ | ✅ |
| 9 | Exceptions | 🔥 | ✅ |
| 10 | Modules & Packages | 🔥 | ✅ |
| 11 | OOP Fundamentals | 🔥 | ✅ |

## Intermediate (14 topics) — 14 written

| # | Topic | Priority | Written? |
|---|---|---|---|
| 1 | Mutable vs. Immutable | 🔥 | ✅ |
| 2 | `==` vs. `is` | 🔥 | ✅ |
| 3 | Shallow Copy vs. Deep Copy | 🔥 | ✅ |
| 4 | Iterators & Generators | 🔥 | ✅ |
| 5 | Decorators | 🔥 | ✅ |
| 6 | Context Managers | 🔥 | ✅ |
| 7 | Lambda / map / filter / reduce | ⭐ | ✅ |
| 8 | Dataclasses | ⭐ | ✅ |
| 9 | Type Hints | 🔥 | ✅ |
| 10 | Abstract Classes & Protocols | ⭐ | ✅ |
| 11 | Logging | ⭐ | ✅ |
| 12 | Testing | 🔥 | ✅ |
| 13 | Virtual Environments & Packaging | 🔥 | ✅ |
| 14 | Pythonic Code | ⭐ | ✅ |

## Advanced (18 topics) — 18 written

| # | Topic | Priority | Written? |
|---|---|---|---|
| 1 | Python Object Model | 🧠 | ✅ |
| 2 | Dunder Methods | 🔥 | ✅ |
| 3 | MRO & Multiple Inheritance | 🧠 | ✅ |
| 4 | Descriptors | 🧠 | ✅ |
| 5 | Metaclasses | 🧠 | ✅ |
| 6 | Memory Management | 🔥 | ✅ |
| 7 | GIL | 🔥 | ✅ |
| 8 | Threading | 🔥 | ✅ |
| 9 | Multiprocessing | 🔥 | ✅ |
| 10 | `asyncio` | 🔥 | ✅ |
| 11 | Performance & Profiling | 🔥 | ✅ |
| 12 | Caching | ⭐ | ✅ |
| 13 | Serialization | ⭐ | ✅ |
| 14 | Production Python Architecture | 🔥 | ✅ |
| 15 | Production Troubleshooting | 🔥 | ✅ |
| 16 | Python Web / API | ⭐ | ✅ |
| 17 | Python + Databases | ⭐ | ✅ |
| 18 | Python Architecture / Senior Scenarios | 🧠 | ✅ |

## Where the roadmap came from

Sourced from the user's own Python interview-roadmap document, which came pre-organized into
Basic/Intermediate/Advanced with priority hints per group (both inline and in a separately
curated summary list) — this track kept that structure and those questions almost entirely
intact. A Phase 2 gap-hunt added 8 real gaps on top of it (see
[`question-taxonomy.md`](question-taxonomy.md)'s Gap-hunt log for the full added/excluded
reasoning) — everything else traces directly back to the source, no invented facts.

## Track-specific decisions and boundaries

- **"Predict the output" is this track's own sixth question-variant type** — see Status above.
  Confirmed correctly rendered as real code blocks + literal questions on all 9 `[predict]`
  pages, not flattened into plain definitional questions.
- **Functional-programming trivia is de-emphasized, metaclasses/MRO/descriptors are Deep Dive**
  — both per the source's own explicit instruction not to over-weight these for a senior
  audience.
- **Not part of the ordered core-backend path** (`C# → OOP → .NET/ASP.NET Core → Web API →
  EF Core → SQL → Azure → AWS`) — Python is a language track, grouped with React/Angular/DSA/AI
  under "other tracks" on the root tile, and sits there in the live `index.html` (below the
  core-backend-path grid).
- **Python Web/API and Python + Databases stay scoped to Python-specific angles** (WSGI vs.
  ASGI, ORM lazy-loading/N+1) rather than re-teaching general REST/API design, which already
  lives in `webapi/` — cross-link back to it rather than duplicating it.
- **`python/roadmap.html` is grouped by 11 cross-tier concept clusters, not by tier** — matching
  the pattern `sql/roadmap.html`, `azure/roadmap.html`, and `aws/roadmap.html` all use, so a
  reader can browse "what Python interviews ask about Memory, GIL & Concurrency" without caring
  whether a given question happens to sit in Basic, Intermediate, or Advanced. The full
  cluster → page mapping lives in `roadmap.md`'s own "Phase 6 addendum." Do not flatten this back
  to a tier-first grouping.
- Icon 🐍, track color Python dark-blue (`#306998`) — distinct from C#'s brighter sky-blue
  (`#3b82f6`) and from AWS's burnt-orange (`#c2410c`)/DSA's amber (`#f59e0b`) pair. Used
  consistently as the tile/crumb color across every one of the 43 pages, the three tier index
  pages, the root tile, and `python/roadmap.html`.

## Known gaps

None — this track went through the full 7-phase pipeline (Phase 2's own gap-hunt already folded
into the initial pass), and every page passed the mandatory independent diagram-verification
sweep (43/43 pages, 45/45 diagrams, `issueCount: 0` on the final sweep — see the Status section
above for the real defects found and fixed along the way, not glossed over). The 39 files with
at least one stale pager link found and fixed during this same pass are also documented above,
not silently corrected. Expect a review/feedback pass once the user goes through it, same as
every other completed track.
