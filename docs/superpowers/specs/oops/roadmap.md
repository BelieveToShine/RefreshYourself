# OOP — Roadmap (Phases 2–6)

Phase 1 output: [`question-taxonomy.md`](question-taxonomy.md) — 6 concept groups, 15 concepts,
nothing invented beyond the user's original list except a few `[new]` Comparison/Pitfall phrasings
already called out there. This file is Phases 2–6: review, page grouping, tier, priority, and the
final roadmap — see [`specs/README.md`](../README.md) for what each phase means.

## Phase 2 — Review

No dedupe needed; the taxonomy doc already confirmed full coverage of the user's original list
with no invented topics beyond small `[new]` phrasing additions. No gaps found: all four pillars,
all five SOLID letters (plus a "whole" scenario), the composition-over-inheritance deep dive, both
named design-pattern comparisons, and the coupling/cohesion pair are all present exactly once.

## Phase 3 — Grouping into pages

Every one of the 15 concepts becomes exactly one page — no splits (nothing here has the
async/await-level depth that forced C# to split a concept across multiple pages) and no merges
(each concept already has enough distinct Q&A variants — Core/Comparison/Pitfall/Scenario — to
stand on its own). "SOLID as a Whole" stays a separate page from the five individual principles
specifically because it's a different kind of question (a single big scenario applying all five),
not a recap of the same content.

## Phase 4 — Tier (by question type, not difficulty — see
[`interview-depth-and-priority.md`](../../rules/interview-depth-and-priority.md))

| Tier | Count | Pages |
|---|---|---|
| Basic | 4 | Encapsulation vs. Abstraction; Inheritance vs. Composition; Polymorphism; Single Responsibility Principle |
| Intermediate | 8 | Interface vs. Abstract Class; Open/Closed Principle; Liskov Substitution Principle; Interface Segregation Principle; Dependency Inversion Principle; Strategy Pattern vs. Conditional Logic; Factory vs. Dependency Injection; Coupling vs. Cohesion |
| Advanced | 3 | SOLID as a Whole; Why Prefer Composition Over Inheritance (in depth); Refactoring a Tightly Coupled Service |

Reasoning for the less-obvious calls:
- **The five SOLID letters are Intermediate, not Basic**, even though they're extremely commonly
  asked — every one of them ships with a worked **Scenario** variant in the taxonomy (the
  square/rectangle LSP trap, the fat-interface split, the payment-switch OCP fix), which is
  practical/comparison-depth by definition, not pure terminology recall. Basic is reserved for the
  four-pillars-level vocabulary question ("what is X"), not "how do you apply X."
- **SRP stays Basic** — unlike the other four letters, its taxonomy entry is pure definitional
  ("what does 'one reason to change' mean") plus a pitfall about a common misreading, with no
  worked design scenario attached. It's the one SOLID letter that's still fundamentally a
  vocabulary question.
- **"SOLID as a Whole" and "Refactoring a Tightly Coupled Service" are Advanced** — both are
  exactly the "complex scenario, ties multiple principles together" shape the depth rule names
  explicitly for Advanced, not because they're rare, but because of what they actually ask.
- **"Why Prefer Composition Over Inheritance (in depth)" is Advanced**, distinct from the
  Basic-tier "Inheritance vs. Composition" pillar page — the pillar page is the has-a/is-a
  vocabulary distinction; this page is the fragile-base-class trade-off discussion, which is
  architecture/trade-off depth by definition.
- **Interface vs. Abstract Class is Intermediate** — its taxonomy entry is "when would you reach
  for one over the other" plus a scenario (`ILoggable` across unrelated hierarchies), which is
  comparison/practical-usage depth, not a bare definitional question.

## Phase 5 — Priority (🔥 Must Know / ⭐ Should Know / 🧠 Deep Dive — independent of tier, means
interview likelihood only)

| Priority | Pages |
|---|---|
| 🔥 Must Know | Encapsulation vs. Abstraction; Inheritance vs. Composition; Polymorphism; Interface vs. Abstract Class; Single Responsibility Principle; Open/Closed Principle; Liskov Substitution Principle; Interface Segregation Principle; Dependency Inversion Principle |
| ⭐ Should Know | SOLID as a Whole; Why Prefer Composition Over Inheritance; Strategy Pattern vs. Conditional Logic; Factory vs. Dependency Injection; Coupling vs. Cohesion |
| 🧠 Deep Dive | Refactoring a Tightly Coupled Service |

The four pillars and all five SOLID letters by name are near-certain in any OOP-flavored
interview — that's the 🔥 set. The "whole-service" scenario questions (SOLID as a whole,
refactoring a tightly-coupled service) are the ones most likely to show up only in a senior/
architect-level or live-coding round specifically — refactoring gets 🧠 over ⭐ because unlike the
others it's rarely asked as a spoken question at all; it's usually handed to a candidate as an
actual code sample to fix.

## Phase 6 — Final roadmap

The site's `oops/roadmap.html` groups by the same 6 concept categories as the Phase 1 taxonomy
(not by tier — see [`rules/diagram-style.md`](../../rules/diagram-style.md) sibling decision on
C#'s roadmap for why concept-category grouping was adopted site-wide for roadmap pages). Numbering
below is the tier-folder page number (`oops/<tier>/<n>.html`):

| # | Concept | Tier | Page |
|---|---|---|---|
| 1.1 | Encapsulation vs. Abstraction | Basic | basic/1.html |
| 1.2 | Inheritance vs. Composition | Basic | basic/2.html |
| 1.3 | Polymorphism | Basic | basic/3.html |
| 2.1 | Interface vs. Abstract Class | Intermediate | intermediate/1.html |
| 3.1 | Single Responsibility Principle | Basic | basic/4.html |
| 3.2 | Open/Closed Principle | Intermediate | intermediate/2.html |
| 3.3 | Liskov Substitution Principle | Intermediate | intermediate/3.html |
| 3.4 | Interface Segregation Principle | Intermediate | intermediate/4.html |
| 3.5 | Dependency Inversion Principle | Intermediate | intermediate/5.html |
| 3.6 | SOLID as a Whole | Advanced | advanced/1.html |
| 4.1 | Why Prefer Composition Over Inheritance (in depth) | Advanced | advanced/2.html |
| 5.1 | Strategy Pattern vs. Conditional Logic | Intermediate | intermediate/6.html |
| 5.2 | Factory vs. Dependency Injection | Intermediate | intermediate/7.html |
| 6.1 | Coupling vs. Cohesion | Intermediate | intermediate/8.html |
| 6.2 | Refactoring a Tightly Coupled Service | Advanced | advanced/3.html |

## Track-specific decisions and boundaries

- **Code examples are C#**, matching the rest of the site — this track covers *design*, not a
  specific language's syntax, but every worked example still needs a concrete language to be
  useful, and C# is what every other track here already uses.
- **The language mechanics of `interface`/`abstract class` stay out of this track's actual
  code-syntax weeds** (e.g. C#'s multiple-interface-inheritance rule) — this track's page 2.1
  covers the *design* question (when/why), consistent with the scope boundary already stated in
  the taxonomy doc.
- Icon is 🧩, track color green (`#16a34a`) — matches the existing home-page tile.

## Known gaps

None yet — Phase 7 (writing the 15 pages) is the next and only remaining phase for this track.
