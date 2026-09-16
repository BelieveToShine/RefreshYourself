# C# — Track Spec

**Start here for anything C#-related.** See [`docs/superpowers/specs/README.md`](../README.md)
for what this file is and the process for keeping it in sync with the live pages.

## Status — Phases 1–6 complete, Phase 7 (page-writing) not started

The site is moving from "topic tutorial" to "interview question bank" (locked with the user
2026-09-15). For C#:

- **Phase 1** — [`question-taxonomy.md`](question-taxonomy.md): raw questions, grouped by concept.
- **Phases 2–6** — [`roadmap.md`](roadmap.md): reviewed/expanded (incl. scenario questions on
  almost every page), grouped into 49 final pages, tiered by **interview depth** (not
  difficulty), and given an interview-priority tag (🔥 Must Know / ⭐ Should Know / 🧠 Deep
  Dive, independent of tier). The tables below mirror `roadmap.md` exactly and are also live on
  the site's tier-index pages and [`roadmap.html`](../../../csharp/roadmap.html).
- **Phase 7** — not started. Writing the actual diagram-rich HTML pages for the 35 planned
  (non-frozen) topics below, matching the new template (Question → Recall → Visual → Trap →
  Follow-up → Say-this → Explanation → Code → Scenario) once that template itself is formalized.

**The 14 already-written C# Basic pages are frozen** — including the left tier-navigation
sidebar (see [`rules/tier-navigation.md`](../../rules/tier-navigation.md)) — and stay live
as-is until a deliberate later migration pass; they're listed below only so this file is one
complete, coherent picture.

## Basic (18 topics) — 14 written, 4 planned

| # | Topic | Priority | Written? |
|---|---|---|---|
| 1 | Value Types vs. Reference Types | 🔥 | ✅ |
| 2 | Boxing & Unboxing | 🔥 | ✅ |
| 3 | == vs. .Equals() vs. ReferenceEquals() | 🔥 | ✅ |
| 4 | try / catch / finally | 🔥 | ✅ |
| 5 | const vs. readonly vs. static | 🔥 | ✅ |
| 6 | Access modifiers | 🔥 | ✅ |
| 7 | Array vs. List\<T\> | 🔥 | ✅ |
| 8 | ref vs. out vs. in | 🔥 | ✅ |
| 9 | String vs. StringBuilder | ⭐ | ✅ |
| 10 | Nullable Types (int?) | ⭐ | ✅ |
| 11 | var vs. dynamic vs. object | ⭐ | ✅ |
| 12 | Enums | ⭐ | ✅ |
| 13 | ?: and ?? | ⭐ | ✅ |
| 14 | Namespaces & using | ⭐ | ✅ |
| 15 | is / as / explicit casting | 🔥 | 📝 |
| 16 | params, optional & named parameters | ⭐ | 📝 |
| 17 | Tuples & deconstruction | ⭐ | 📝 |
| 18 | Indexers | 🧠 | 📝 |

## Intermediate (18 topics) — roadmap only, 0 written

| # | Topic | Priority | Written? |
|---|---|---|---|
| 1 | Generics | 🔥 | 📝 |
| 2 | IEnumerable\<T\> vs. ICollection\<T\> vs. IList\<T\> | ⭐ | 📝 |
| 3 | Extension methods | ⭐ | 📝 |
| 4 | Operator overloading | 🧠 | 📝 |
| 5 | Exception filters & custom exceptions | ⭐ | 📝 |
| 6 | Implementing Equals() and GetHashCode() correctly | 🔥 | 📝 |
| 7 | IEquatable\<T\> | ⭐ | 📝 |
| 8 | Records vs. classes | 🔥 | 📝 |
| 9 | Pattern matching | ⭐ | 📝 |
| 10 | Nullable reference types (C# 8+) | ⭐ | 📝 |
| 11 | init / required members | ⭐ | 📝 |
| 12 | Immutable objects | ⭐ | 📝 |
| 13 | LINQ — deferred vs. immediate execution | 🔥 | 📝 |
| 14 | yield return & custom iterators | ⭐ | 📝 |
| 15 | async/await — the basics | 🔥 | 📝 |
| 16 | Task vs. Thread vs. ThreadPool | 🔥 | 📝 |
| 17 | Cancellation (CancellationToken) | ⭐ | 📝 |
| 18 | IDisposable & using — the basics | 🔥 | 📝 |

## Advanced (13 topics) — roadmap only, 0 written

| # | Topic | Priority | Written? |
|---|---|---|---|
| 1 | async/await internals — SynchronizationContext, ConfigureAwait, deadlocks | 🔥 | 📝 |
| 2 | lock / Monitor & race conditions | 🔥 | 📝 |
| 3 | The Dispose pattern & finalizers | ⭐ | 📝 |
| 4 | IEnumerable\<T\> vs. IQueryable\<T\> | ⭐ | 📝 |
| 5 | Garbage Collection — generations & the Large Object Heap | 🔥 | 📝 |
| 6 | Span\<T\> & Memory\<T\> | ⭐ | 📝 |
| 7 | volatile & Interlocked | ⭐ | 📝 |
| 8 | Concurrent collections | ⭐ | 📝 |
| 9 | Unsafe code & pointers | 🧠 | 📝 |
| 10 | Reflection | ⭐ | 📝 |
| 11 | Attributes | 🧠 | 📝 |
| 12 | Expression Trees | 🧠 | 📝 |
| 13 | C# performance checklist — what to check under GC pressure | ⭐ | 📝 |

## Where the roadmap came from

Basic's original 14 were built topic-by-topic as the user's own explicitly requested starting
scope. Everything else was derived from [`question-taxonomy.md`](question-taxonomy.md) (Phase
1), itself built from the same two sources as before (the original informal roadmap, plus the
user's later, detailed interview-prep plan) — see that file's own coverage note for what's
sourced vs. genuinely new. `roadmap.md` (Phases 2–6) then split several rich concepts across
multiple pages (`async`/`await` alone became three) and added a scenario question to almost
every page, specifically to raise how many real interview questions a reader has already
rehearsed a version of, not just recalled the definition of.

## Track-specific decisions and boundaries

- **OOP concepts (interfaces, abstract classes, inheritance, polymorphism) deliberately live in
  the OOP's track, not here** — even though they're C# keywords. This track covers language
  *mechanics* (types, memory, operators, exceptions); OOP's covers the four pillars and how
  classes/interfaces/objects relate. Don't duplicate a topic across both tracks.
- **`Nullable<T>` (Basic #10, value-type nullability) is a distinct topic from nullable
  *reference* types (Intermediate #10, C# 8+ compiler annotations)** — same-sounding name,
  different mechanism, different tier. Keep them separate if either gets revised.
- **Some concepts were deliberately split into multiple pages** rather than crammed into one —
  see `roadmap.md`'s "what changed from the old roadmap" section for the full list and reasoning
  (`async`/`await` → 3 pages; `IDisposable`/`using` → 2, split between the basic "why" and the
  advanced Dispose-pattern internals).
- **Re-tiered relative to the old plan:** Tuples moved Intermediate → Basic (quick recall once
  separated from *when* to design with one); `IDisposable`/`using`'s "basics" half moved from
  implicitly-Advanced (as part of the old dispose-pattern topic) to Intermediate, tagged 🔥.
- Icon is 🎵 (a real emoji, not a hand-drawn logo) — see
  [visual-style.md](../../rules/visual-style.md) for why C#'s icon went through several
  iterations before landing there.

## Known gaps

- Phase 7 (writing the 35 planned pages) hasn't started — the new page template (Trap +
  Follow-up as separate always-visible cards, literal question framing) is locked in chat but
  not yet written into `docs/rules/content-writing.md`. That formalization should happen before
  or alongside the first Phase 7 page.
- The tier/priority calls above are a first pass through the full taxonomy, not yet
  pressure-tested by actually writing pages the way the original Basic 14 were through several
  rounds of feedback — treat them as reviewable, not final, until the user signs off.
