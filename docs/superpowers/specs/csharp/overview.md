# C# — Track Spec

**Start here for anything C#-related.** See [`docs/superpowers/specs/README.md`](../README.md)
for what this file is and the process for keeping it in sync with the live pages.

## Status

**Basic is complete and written (14/14), including the left tier-navigation sidebar on every
page (see [`rules/tier-navigation.md`](../../rules/tier-navigation.md)) — awaiting the user's
final review before Intermediate or Advanced content is written.** Intermediate and Advanced
have their full roadmaps listed on the live tier-index pages but zero topics written.

## Basic (14 topics) — ✅ all written

| # | Topic | Hot? | Written? |
|---|---|---|---|
| 1 | Value Types vs. Reference Types | 🔥 | ✅ |
| 2 | Boxing & Unboxing | 🔥 | ✅ |
| 3 | == vs. .Equals() vs. ReferenceEquals() | 🔥 | ✅ |
| 4 | try / catch / finally | 🔥 | ✅ |
| 5 | const vs. readonly vs. static | 🔥 | ✅ |
| 6 | Access modifiers | 🔥 | ✅ |
| 7 | Array vs. List\<T\> | 🔥 | ✅ |
| 8 | ref vs. out vs. in | 🔥 | ✅ |
| 9 | String vs. StringBuilder | Normal | ✅ |
| 10 | Nullable Types (int?) | Normal | ✅ |
| 11 | var vs. dynamic vs. object | Normal | ✅ |
| 12 | Enums | Normal | ✅ |
| 13 | ?: and ?? | Normal | ✅ |
| 14 | Namespaces & using | Normal | ✅ |

## Intermediate (14 topics) — roadmap only, 0 written

| # | Topic | Hot? | Written? |
|---|---|---|---|
| 1 | Generics | 🔥 | 📝 |
| 2 | Delegates vs. Func/Action vs. Events | 🔥 | 📝 |
| 3 | async/await — what actually happens | 🔥 | 📝 |
| 4 | LINQ — deferred vs. immediate execution | 🔥 | 📝 |
| 5 | Extension methods | 🔥 | 📝 |
| 6 | Pattern matching (switch expressions, `is`) | 🔥 | 📝 |
| 7 | Records — value-based equality | 🔥 | 📝 |
| 8 | Nullable reference types (C# 8+) | 🔥 | 📝 |
| 9 | Iterators & `yield return` | Normal | 📝 |
| 10 | Exception filters & custom exceptions | Normal | 📝 |
| 11 | Tuples & deconstruction | Normal | 📝 |
| 12 | Operator overloading | Normal | 📝 |
| 13 | Indexers | Normal | 📝 |
| 14 | Optional, named & `params` parameters | Normal | 📝 |

## Advanced (12 topics) — roadmap only, 0 written

| # | Topic | Hot? | Written? |
|---|---|---|---|
| 1 | Garbage Collection — generations, when collection happens | 🔥 | 📝 |
| 2 | IDisposable & finalizers — the dispose pattern | 🔥 | 📝 |
| 3 | Thread vs. Task vs. ThreadPool | 🔥 | 📝 |
| 4 | lock / Monitor / race conditions | 🔥 | 📝 |
| 5 | async internals — SynchronizationContext, ConfigureAwait | 🔥 | 📝 |
| 6 | Span\<T\> & Memory\<T\> | 🔥 | 📝 |
| 7 | Reflection — inspecting types at runtime | 🔥 | 📝 |
| 8 | Attributes & how reflection reads them | Normal | 📝 |
| 9 | Expression Trees | Normal | 📝 |
| 10 | volatile & Interlocked | Normal | 📝 |
| 11 | Concurrent collections | Normal | 📝 |
| 12 | Unsafe code & pointers | Normal | 📝 |

## Where the roadmap came from

Basic was built topic-by-topic as the original, explicitly requested starting scope (the user's
own list of C# fundamentals). Intermediate and Advanced were reasoned from scratch — no external
source doc — as a deliberately non-padded set of the topics actually asked about in real C#
interviews, tiered by conceptual depth (Intermediate = language features and their tradeoffs,
Advanced = runtime/memory/concurrency internals). See [accuracy.md](../../rules/accuracy.md) —
these two tiers haven't been through the "write it, then verify" cycle that Basic has, so treat
individual entries as reviewable rather than final until actually written.

## Track-specific decisions and boundaries

- **OOP concepts (interfaces, abstract classes, inheritance, polymorphism) deliberately live in
  the OOP's track, not here** — even though they're C# keywords. This track covers language
  *mechanics* (types, memory, operators, exceptions); OOP's covers the four pillars and how
  classes/interfaces/objects relate. Don't duplicate a topic across both tracks.
- **`Nullable<T>` (Basic #10, value-type nullability) is a distinct topic from nullable
  *reference* types (Intermediate #8, C# 8+ compiler annotations)** — same-sounding name,
  different mechanism, different tier. Keep them separate if either gets revised.
- Icon is 🎵 (a real emoji, not a hand-drawn logo) — see
  [visual-style.md](../../rules/visual-style.md) for why C#'s icon went through several
  iterations before landing there.

## Known gaps

- Intermediate and Advanced are roadmap-only — the topic *list* is planned, the content isn't
  written. Per the user's explicit instruction, do not start writing them until C# Basic has
  been reviewed and the user says to proceed.
- Because these two tiers haven't been written yet, their topic-to-tier assignment hasn't been
  pressure-tested the way Basic's was through several rounds of user feedback — expect some
  adjustment is possible once actual pages get drafted.
