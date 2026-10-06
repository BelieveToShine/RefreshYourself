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

None among the original 15 pages (all written). The 11 gap pages found afterwards were written 2026-10-07 — see the addendum below.

---

## Addendum 2026-10-06 — gap pages (Phases 2–6)

Active gap-hunt ([`rules/gap-hunting.md`](../../rules/gap-hunting.md)) seeded by
`docs/review-2026-10-06.md` §5. The Phase 2 line above ("No gaps found") reflected a re-read of the
source list only; real interviews reliably ask the patterns/principles below. **Status: all pages in this
addendum were written and wired on 2026-10-07** (track total now 26 = 15 original + 11 gap pages). Numbers are the next free in each tier from disk (Basic 4, Intermediate 8,
Advanced 3 live) and are permanent. 9 candidates -> 9 pages; 2 extra gaps from our own hunt
(Shallow vs. Deep Copy, Adapter vs. Facade) = 11 new pages (15 -> 26). No Advanced gap found: the
three existing Advanced pages are already architecture-depth.

| # | Tier | Pri | Title | Interview question (`.interview-q`) | Scope (one concept) | Diagram idea | Cross-link |
|---|---|---|---|---|---|---|---|
| Basic 5 | Basic | ⭐ | Association, Aggregation & Composition | "What's the difference between association, aggregation and composition?" | Three strengths of has-a: uses / whole-part with independent lifetime / whole-part with owned lifetime; UML arrows, C# field examples. | Three UML-style boxes: line, hollow diamond, filled diamond, with lifetime note | Basic 2 (Inheritance vs. Composition), Advanced 2, Intermediate 8 (coupling) |
| Basic 6 | Basic | ⭐ | DRY, KISS & YAGNI | "What do DRY, KISS and YAGNI mean — and can DRY ever be taken too far?" | Three short rules of thumb as a contrast set; premature abstraction as the DRY failure mode. | Three tiny panels: duplicated blocks merged, simple path vs maze, unused feature crossed out | Basic 4 (SRP), Intermediate 2 (OCP), Advanced 1 (SOLID as a whole) |
| Basic 7 | Basic | ⭐ | Static vs. Instance Members & `sealed` | "When would you use a static class or member instead of an instance one, and what does `sealed` do?" | Shared-per-type vs per-object state, static class limits (no inheritance/DI/mocking), global-state risk, `sealed` as a design choice. | One shared static slot vs three object boxes each with its own slot | Basic 1, Basic 3, Intermediate 5 (DIP), C# Basic 5, C# Basic 21 (mechanics) |
| Intermediate 9 | Intermediate | 🔥 | Multiple Inheritance & the Diamond Problem | "Why doesn't C# support multiple inheritance, and how do interfaces solve the diamond problem?" | Ambiguity from two paths to one base member; C# allows many interfaces but one base class; default interface members / explicit implementation as the escape hatch. | Diamond of four boxes with the ambiguous call highlighted, beside the interface-based fix | Intermediate 1 (Interface vs. Abstract), Basic 2, Advanced 2 |
| Intermediate 10 | Intermediate | 🔥 | Singleton Pattern | "What is the Singleton pattern, how do you make it thread-safe, and why is it often called an anti-pattern?" | One instance + global access; `Lazy<T>`/static init for thread safety; hidden coupling and test pain; DI singleton lifetime as the better alternative. | Many callers arrowing to one instance with a "hidden dependency" warning vs the DI-injected version | Intermediate 5 (DIP), Intermediate 7 (Factory vs. DI), Basic 7, C# Advanced 2 (locking) |
| Intermediate 11 | Intermediate | ⭐ | Repository Pattern | "What is the Repository pattern, and is it still worth it on top of EF Core?" | Collection-like abstraction over data access, testability, and the debate over wrapping an ORM that is already a repository/unit of work. | Service -> IRepository interface -> EF / in-memory implementations | Intermediate 5 (DIP), C# Advanced 4 (IQueryable leakage), EF Core track |
| Intermediate 12 | Intermediate | ⭐ | Observer Pattern | "What is the Observer pattern, and how do C# events relate to it?" | One subject notifies many subscribers without knowing them; events/`IObservable<T>` as built-in forms; lifecycle/leak risk. | Subject box fanning notifications to 3 observers, subscribe/unsubscribe arrows | Intermediate 8 (coupling), Intermediate 5 (DIP), C# Intermediate 19 (events) |
| Intermediate 13 | Intermediate | ⭐ | Decorator Pattern | "What is the Decorator pattern, and how does it differ from inheritance?" | Wrap an object with the same interface to add behavior at runtime (logging, caching); stackable; `Stream`/middleware examples. | Nested boxes: logging wraps caching wraps the real service, same interface on each | Basic 2, Advanced 2, Intermediate 2 (OCP), Intermediate 6 (Strategy) |
| Intermediate 14 | Intermediate | 🧠 | Law of Demeter | "What is the Law of Demeter, and what's wrong with `a.GetB().GetC().DoIt()`?" | Talk only to immediate collaborators; train-wreck chains leak structure; "tell, don't ask" fix. | Chain of three objects with the long reach crossed out vs a single delegating call | Intermediate 8 (coupling), Basic 1 (encapsulation), Advanced 3 |
| Intermediate 15 | Intermediate | ⭐ | Shallow vs. Deep Copy (extra gap) | "What's the difference between a shallow copy and a deep copy, and how would you clone an object safely?" | Copying references vs whole graphs; `MemberwiseClone`, copy constructors, records' `with` (shallow), why `ICloneable` is discouraged. | Original and copy sharing one inner object (shallow) vs separate inner objects (deep) | C# Basic 1 (value/reference), C# Intermediate 8 (records), C# Intermediate 12 (immutability) |
| Intermediate 16 | Intermediate | ⭐ | Adapter vs. Facade (extra gap) | "What's the difference between the Adapter and Facade patterns?" | Adapter converts one interface to the one expected; Facade offers a simpler front to a complex subsystem; Decorator contrast. | Two small panels: plug-shape converter vs one front door to many subsystems | Intermediate 13 (Decorator), Intermediate 5 (DIP), Intermediate 7 (Factory) |

### Dropped / folded

- None of the candidates was already covered: Basic 2 covers has-a vs is-a only (not the three
  has-a strengths); no existing page names Singleton/Repository/Observer/Decorator or
  DRY/KISS/YAGNI/Demeter.
- **Static vs. instance & `sealed`** — design view only here; keyword mechanics
  (`virtual`/`override`/`new`/`sealed`) live on C# Basic 21 to avoid duplication. Overload vs.
  override is already on Basic 3, so no separate page.
- Considered and rejected: Abstract Factory/Builder (niche; add only if asked), "Tell, Don't Ask"
  as its own page (folded into Law of Demeter), UML class-diagram basics (tutorial-level).
