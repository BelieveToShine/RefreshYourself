# C# — Track Spec

**Start here for anything C#-related.** See [`docs/superpowers/specs/README.md`](../README.md)
for what this file is and the process for keeping it in sync with the live pages.

## Status — Phases 1–7 complete, all 49 pages written

The site is moving from "topic tutorial" to "interview question bank" (locked with the user
2026-09-15). For C#:

- **Phase 1** — [`question-taxonomy.md`](question-taxonomy.md): raw questions, grouped by concept.
- **Phases 2–6** — [`roadmap.md`](roadmap.md): reviewed/expanded (incl. scenario and, on six
  Advanced pages, architecture questions), grouped into 49 final pages, tiered by **interview
  depth** (not difficulty), and given an interview-priority tag (🔥 Must Know / ⭐ Should Know /
  🧠 Deep Dive, independent of tier).
- **Phase 7 — all 35 new pages written** (2026-09-16), using the new template (❓ Interview
  Question line → 🔥 Recall → 🧠 Visual → ⚠️ Trap → 🔄 Follow-up → 🎯 Say-this → 📖 Explanation →
  💻 Code → 🌍 Real-world/Scenario — see [content-writing.md](../../rules/content-writing.md)).
  The tables below mirror `roadmap.md` exactly and are also live on the site's tier-index pages
  and [`roadmap.html`](../../../csharp/roadmap.html).

**The 14 *original* C# Basic pages remain frozen exactly as before** — including the left
tier-navigation sidebar (see [`rules/tier-navigation.md`](../../rules/tier-navigation.md)) —
untouched by this rebuild. **The other 35 pages (Basic 15–18, all of Intermediate and
Advanced) are new** and, while built to the same rules, have not yet been through the
user's page-by-page review the original 14 went through — treat them as awaiting approval,
not yet as settled as the original 14.

## Basic (18 topics) — 18 written (14 frozen + 4 new)

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
| 15 | is / as / explicit casting | 🔥 | ✅ |
| 16 | params, optional & named parameters | ⭐ | ✅ |
| 17 | Tuples & deconstruction | ⭐ | ✅ |
| 18 | Indexers | 🧠 | ✅ |

## Intermediate (18 topics) — 18 written

| # | Topic | Priority | Written? |
|---|---|---|---|
| 1 | Generics | 🔥 | ✅ |
| 2 | IEnumerable\<T\> vs. ICollection\<T\> vs. IList\<T\> | ⭐ | ✅ |
| 3 | Extension methods | ⭐ | ✅ |
| 4 | Operator overloading | 🧠 | ✅ |
| 5 | Exception filters & custom exceptions | ⭐ | ✅ |
| 6 | Implementing Equals() and GetHashCode() correctly | 🔥 | ✅ |
| 7 | IEquatable\<T\> | ⭐ | ✅ |
| 8 | Records vs. classes | 🔥 | ✅ |
| 9 | Pattern matching | ⭐ | ✅ |
| 10 | Nullable reference types (C# 8+) | ⭐ | ✅ |
| 11 | init / required members | ⭐ | ✅ |
| 12 | Immutable objects | ⭐ | ✅ |
| 13 | LINQ — deferred vs. immediate execution | 🔥 | ✅ |
| 14 | yield return & custom iterators | ⭐ | ✅ |
| 15 | async/await — the basics | 🔥 | ✅ |
| 16 | Task vs. Thread vs. ThreadPool | 🔥 | ✅ |
| 17 | Cancellation (CancellationToken) | ⭐ | ✅ |
| 18 | IDisposable & using — the basics | 🔥 | ✅ |

## Advanced (13 topics) — 13 written

| # | Topic | Priority | Written? |
|---|---|---|---|
| 1 | async/await internals — SynchronizationContext, ConfigureAwait, deadlocks | 🔥 | ✅ |
| 2 | lock / Monitor & race conditions | 🔥 | ✅ |
| 3 | The Dispose pattern & finalizers | ⭐ | ✅ |
| 4 | IEnumerable\<T\> vs. IQueryable\<T\> | ⭐ | ✅ |
| 5 | Garbage Collection — generations & the Large Object Heap | 🔥 | ✅ |
| 6 | Span\<T\> & Memory\<T\> | ⭐ | ✅ |
| 7 | volatile & Interlocked | ⭐ | ✅ |
| 8 | Concurrent collections | ⭐ | ✅ |
| 9 | Unsafe code & pointers | 🧠 | ✅ |
| 10 | Reflection | ⭐ | ✅ |
| 11 | Attributes | 🧠 | ✅ |
| 12 | Expression Trees | 🧠 | ✅ |
| 13 | C# performance checklist — what to check under GC pressure | ⭐ | ✅ |

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

- **The 35 new pages (Basic 15–18, all of Intermediate, all of Advanced) haven't been through
  the user's page-by-page review** the way the original Basic 14 were, across many rounds of
  diagram/wording feedback. They were built by parallel subagents against the now-formalized
  template ([content-writing.md](../../rules/content-writing.md)) and the exact Q&A content in
  `roadmap.md`. Expect a round of feedback once the user reviews, the same way Basic's original 14
  went through several rounds before settling.
- **2026-09-16 — full automated diagram-verification sweep completed** after the user reported a
  disconnected-arrow/text-overlap defect on `csharp/basic/15.html`. Every one of the 35 new pages'
  diagrams was run through the geometric check in
  [`rules/diagram-style.md`](../../rules/diagram-style.md#mandatory-automated-verification--hand-computed-coordinates-are-not-verification)
  against the actually-rendered page — not sampled. 5 genuine defects were found and fixed:
  `basic/15.html` (disconnected drop-arrows + a text overflow), `intermediate/3.html` (a connector
  landing in empty space between two boxes), `intermediate/8.html` (two fork/merge connectors
  landing between boxes rather than on them), `advanced/3.html` (an 11px text overflow), and
  `advanced/11.html` (an arrow 14px short of its destination box). Root cause: several build
  subagents could not get a live rendered page in front of them and substituted hand-computed
  coordinate math, which cannot catch this defect class — see the linked rule section for the
  full incident writeup and the now-mandatory process this created.
- **2026-09-16 — follow-up fix, `advanced/2.html` (lock/Monitor).** The user separately reported
  a visibly distorted arrowhead on this page's fork diagram (counter → Thread A / Thread B). The
  underlying rule already existed ("connector must be visibly longer than its own marker"), but
  the verification script above didn't check for it yet — a rule with no automated check behind
  it is as skippable as no rule. Extended the script with a marker-reach check (see
  [`rules/diagram-style.md`](../../rules/diagram-style.md#mandatory-automated-verification--hand-computed-coordinates-are-not-verification)),
  fixed the 4 distorted fork arrows on this page, and re-ran the extended check against all 35
  pages, not just this one. All 35 pages pass with zero remaining findings as of this sweep.
- The tier/priority calls in `roadmap.md` are a first pass through the full taxonomy — now
  pressure-tested by actually writing all 49 pages, but still reviewable/revisable pending the
  user's sign-off, same as any of this rebuild's other tracks.
