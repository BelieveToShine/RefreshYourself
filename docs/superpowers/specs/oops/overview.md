# OOP — Track Spec

**Start here for anything OOP-related.** See [`docs/superpowers/specs/README.md`](../README.md)
for what this file is and the process for keeping it in sync with the live pages.

## Status — Phases 1–7 complete, all 15 pages written

- **Phase 1** — [`question-taxonomy.md`](question-taxonomy.md): raw questions, grouped by
  concept, deliberately scenario-heavy per the user's instruction (design/scenario questions for
  someone who already writes classes daily, not "what is polymorphism" from zero).
- **Phases 2–6** — [`roadmap.md`](roadmap.md): reviewed (no dedupe needed, full coverage
  confirmed), grouped into 15 final pages (1:1 with the taxonomy's 15 concepts — no splits or
  merges needed), tiered by **interview depth**, and given an interview-priority tag.
- **Phase 7 — all 15 pages written**, using the same template as C#'s Phase 7 (❓ Interview
  Question line → 🔥 Recall → 🧠 Visual → ⚠️ Trap → 🔄 Follow-up → 🎯 Say-this → 📖 Explanation →
  💻 Code → 🌍 Real-world/Scenario — see [content-writing.md](../../rules/content-writing.md)).
  Every page's diagram was run through the mandatory automated verification script (see
  [diagram-style.md](../../rules/diagram-style.md#mandatory-automated-verification--hand-computed-coordinates-are-not-verification))
  before this track was considered done — the process that C#'s Phase 7 only added after the
  fact, applied here from the start.

## Basic (4 topics) — 4 written

| # | Topic | Priority | Written? |
|---|---|---|---|
| 1 | Encapsulation vs. Abstraction | 🔥 | ✅ |
| 2 | Inheritance vs. Composition | 🔥 | ✅ |
| 3 | Polymorphism | 🔥 | ✅ |
| 4 | Single Responsibility Principle | 🔥 | ✅ |

## Intermediate (8 topics) — 8 written

| # | Topic | Priority | Written? |
|---|---|---|---|
| 1 | Interface vs. Abstract Class | 🔥 | ✅ |
| 2 | Open/Closed Principle | 🔥 | ✅ |
| 3 | Liskov Substitution Principle | 🔥 | ✅ |
| 4 | Interface Segregation Principle | 🔥 | ✅ |
| 5 | Dependency Inversion Principle | 🔥 | ✅ |
| 6 | Strategy Pattern vs. Conditional Logic | ⭐ | ✅ |
| 7 | Factory vs. Dependency Injection | ⭐ | ✅ |
| 8 | Coupling vs. Cohesion | ⭐ | ✅ |

## Advanced (3 topics) — 3 written

| # | Topic | Priority | Written? |
|---|---|---|---|
| 1 | SOLID as a Whole | ⭐ | ✅ |
| 2 | Why Prefer Composition Over Inheritance (in depth) | ⭐ | ✅ |
| 3 | Refactoring a Tightly Coupled Service | 🧠 | ✅ |

## Where the roadmap came from

Sourced from the user's own original OOP section of the interview-prep plan, regrouped by concept
instead of tier per [`question-taxonomy.md`](question-taxonomy.md), with SRP split out as its own
named entry (it was implied but never spelled out in the original list) and a small number of
natural Comparison/Pitfall phrasings added on topics already named — see that file's own coverage
note for the full accounting.

## Track-specific decisions and boundaries

- **The language mechanics of `interface`/`abstract class`** (C#-specific syntax rules like
  multiple interface inheritance) **live in the C# track, not here** — this track owns the
  design-level question of *when and why* to reach for each, not the syntax.
- **Code examples are C#**, matching every other track on this site — OOP is language-agnostic in
  principle, but a concrete worked example needs a concrete language.
- **This track is deliberately scenario-heavy**, per the user's explicit instruction — favor a
  worked design scenario (the payment-processor `IPaymentProcessor` example, the tightly-coupled
  service refactor) over a bare "what is X" definitional question wherever the taxonomy offered
  both.
- **"Inheritance vs. Composition" (Basic, the pillar-level has-a/is-a distinction) is a different
  page from "Why Prefer Composition Over Inheritance" (Advanced, the fragile-base-class trade-off
  discussion)** — same two words, different depth, don't merge them.
- Icon is 🧩, track color green (`#16a34a`).

## Known gaps

None — this is the first OOP-track pass through the full 7-phase pipeline, built and verified in
one sitting (unlike C#, which had a page-by-page user review round after Phase 7). Expect the same
kind of review/feedback pass once the user goes through it.
