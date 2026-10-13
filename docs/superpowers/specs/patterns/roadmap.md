# Design Patterns — Roadmap (Phases 3–6)

See [`question-taxonomy.md`](question-taxonomy.md) for Phases 1–2 (the full candidate list, the
OOP-track scope boundary, and what was deliberately excluded from the curated 13).

## Phase 3 — Grouping into pages

Trivial for this track: **one pattern = one page**, no grouping needed. Every other track on
this site sometimes bundles 2–3 closely related questions onto one page when they're too thin to
stand alone; no pattern here is that thin — each has its own structure, participants, a worked
C# example, and a real-world tie-in, which is a full page on its own everywhere else on this site.

## Phase 4 — Tier (= GoF family, not depth)

**Locked exception to the site-wide rule** (question type/depth decides tier): this track's three
folders are `creational/`, `structural/`, `behavioral/` — the category a pattern belongs to, full
stop. See [`content-structure.md`](../../../rules/content-structure.md) for the reasoning. Every
other mechanic that depends on "tier" elsewhere on the site (pager order, tier index, sidebar,
breadcrumb) still works identically; only the three names and their colours differ from the
Basic/Intermediate/Advanced default — see [`visual-style.md`](../../../rules/visual-style.md) for
the fixed `#155e75`/`#3730a3`/`#9d174d` triplet.

## Phase 5 — Priority (🔥 Must Know / ⭐ Should Know / 🧠 Deep Dive, independent of family)

| Priority | Patterns |
|---|---|
| 🔥 Must Know | Singleton, Factory Method, Adapter, Decorator, Observer, Strategy |
| ⭐ Should Know | Builder, Facade, Proxy, State, Command, Template Method |
| 🧠 Deep Dive | Iterator |

- **Singleton, Observer, Strategy, Factory Method** are 🔥 because they come up in nearly every
  "name some design patterns you've used" follow-up, independent of language — and this site's
  own OOP track already treats three of those four as Must Know from the design-principle angle.
- **Adapter and Decorator** are 🔥 because both have a concrete, extremely common real-world tie-in
  every working .NET/Java developer has actually touched (wrapping a third-party client; ASP.NET
  Core middleware/`Stream` decorators) — interviewers reach for these precisely because the
  candidate has probably used them without naming them.
- **Iterator is 🧠 Deep Dive, not 🔥, despite being universally used** — the *pattern* itself is
  rarely the literal question since C#/Java hide it behind `foreach`; when it is asked, it's a
  "what is `IEnumerable<T>`/`yield return` actually doing" depth question, which is Deep Dive by
  this site's own type-not-difficulty tiering rule (see
  [`interview-depth-and-priority.md`](../../../rules/interview-depth-and-priority.md)).

## Phase 6 — Final roadmap

`patterns/roadmap.html` groups by the same three families as the tier split (concept category and
tier are the same axis for this one track — see Phase 4). Numbering is the tier-folder page
number (`patterns/<tier>/<n>.html`):

| # | Pattern | Tier | Priority | Page |
|---|---|---|---|---|
| 1.1 | Singleton | Creational | 🔥 | creational/1.html |
| 1.2 | Factory Method | Creational | 🔥 | creational/2.html |
| 1.3 | Builder | Creational | ⭐ | creational/3.html |
| 2.1 | Adapter | Structural | 🔥 | structural/1.html |
| 2.2 | Decorator | Structural | 🔥 | structural/2.html |
| 2.3 | Facade | Structural | ⭐ | structural/3.html |
| 2.4 | Proxy | Structural | ⭐ | structural/4.html |
| 3.1 | Observer | Behavioral | 🔥 | behavioral/1.html |
| 3.2 | Strategy | Behavioral | 🔥 | behavioral/2.html |
| 3.3 | State | Behavioral | ⭐ | behavioral/3.html |
| 3.4 | Command | Behavioral | ⭐ | behavioral/4.html |
| 3.5 | Template Method | Behavioral | ⭐ | behavioral/5.html |
| 3.6 | Iterator | Behavioral | 🧠 | behavioral/6.html |

## Track-specific decisions and boundaries

- **Code examples are C#**, matching every other track on this site — this track covers the
  pattern's structure/intent, not one language's syntax, but every worked example still needs a
  concrete language to be useful.
- **Cross-link both directions with OOP's six matching pattern pages** (see the scope-boundary
  section of the taxonomy doc) — a small pill on each side, same visual device as the Scenario
  Bank's existing cross-track links, not a new pattern invented for this.
- **Icon is 🏗️** (a pattern is a blueprint/structure you build from), track colour `#44403c`
  (stone) — distinct from all three internal family colours and from every other track's brand
  colour.
- **Diagrams are UML-flavoured structure diagrams** (boxes for the roles/participants, arrows for
  the relationship — "implements", "wraps", "notifies"), not the site's usual flow/sequence
  diagrams, because a pattern's whole point is the shape of the relationship between a small
  fixed set of roles. Each page's diagram shows the pattern's structure; a few benefit from a
  second small diagram showing it mid-use (e.g. Decorator's nested wrapping, Observer's
  notify-fan-out) — diagram count is a per-page judgment call like every other track, not a fixed
  rule.

## Known gaps

None — the curated 13 is the full Phase 7 worklist; nothing deferred. Composite, Abstract
Factory, Bridge, Chain of Responsibility, Mediator, Memento, Visitor, Interpreter, Flyweight, and
Prototype are explicitly out of scope per the taxonomy doc's "considered and excluded" notes, not
oversights — a real future scenario-style question or user request for one of them should get
its own page added the normal way (next free number in the right family folder), not force a
re-opening of this roadmap.
