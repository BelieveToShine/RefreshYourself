# Design Patterns — Track Spec

**Start here for anything Design-Patterns-related.** See
[`docs/superpowers/specs/README.md`](../README.md) for what this file is and the process for
keeping it in sync with the live pages.

## Status — Phases 1–7 complete, all 13 pages written (2026-10-13)

- **Phase 1** — [`question-taxonomy.md`](question-taxonomy.md): the full 23-pattern GoF catalog
  reviewed, curated down to the 13 that actually recur in real interviews, with the exclusions
  recorded and reasoned rather than silently dropped.
- **Phase 2** — gap-hunt against outside knowledge of what .NET/Java interviews actually ask;
  logged in the taxonomy doc — no gap found that changed the curated 13.
- **Phases 3–6** — [`roadmap.md`](roadmap.md): one pattern per page (13 pages), tiered by GoF
  family (Creational/Structural/Behavioral — the one deliberate exception to this site's usual
  Basic/Intermediate/Advanced split, see [`content-structure.md`](../../rules/content-structure.md)),
  prioritized 🔥/⭐/🧠 independent of family, final table in `roadmap.md`.
- **Phase 7** — all 13 pages live on the site and on
  [`patterns/roadmap.html`](../../../patterns/roadmap.html). Every diagram passed the mandatory
  automated verification script, run independently against every single page.

## Scope and relationship to the OOP track

This track explains each pattern from a **pure-pattern angle** — structure, participants, intent,
a worked C# example, a real-world tie-in. OOP's own intermediate tier already has six pages that
touch the same six patterns (Singleton, Observer, Decorator, Strategy, Factory, Adapter/Facade)
from an **OOP-design-principle angle** (how the pattern relates to SOLID, DI, coupling) — those
pages are left exactly where they are, never migrated or duplicated here; each side cross-links
to the other. See the taxonomy doc's "Scope boundary vs. the OOP track" section for the full
reasoning and the exact page-to-page mapping.

**Curated 13, not the full 23** — the long tail (Abstract Factory, Prototype, Bridge, Composite,
Flyweight, Chain of Responsibility, Mediator, Memento, Visitor, Interpreter) is deliberately out
of scope; see the taxonomy doc's "considered and excluded" notes under each family for why.

## Addendum 2026-10-13 — extending cross-links to the Java and JavaScript tracks

Per the user's instruction, the same cross-link-don't-duplicate treatment given to OOP's six
pages was extended to the other general-purpose language tracks. A content-level read (not just
a title/keyword grep — most real instances don't name the pattern) of all 88 Java pages and all
42 JavaScript pages found genuine, non-coincidental matches for only 4 of the 13 patterns:

| Pattern page | Language page | Why it's a genuine match |
|---|---|---|
| `patterns/behavioral/6.html` (Iterator) | `java/intermediate/7.html` (Iterator vs. ListIterator) | Literally Java's own `Iterator`/`ListIterator` interfaces — the real implementation of the pattern. |
| `patterns/behavioral/2.html` (Strategy) | `java/intermediate/6.html` (Comparable vs. Comparator) | `Comparator<T>` is the textbook Strategy: a swappable one-method algorithm object passed in from outside. |
| `patterns/structural/4.html` (Proxy) | `java/advanced/25.html` (Reflection, Dynamic Proxies & Annotations) | Directly covers `java.lang.reflect.Proxy`/`InvocationHandler` — a runtime stand-in behind the same interface. |
| `patterns/structural/2.html` (Decorator) | `javascript/intermediate/12.html` (Higher-Order & Functional JavaScript) | Its `withLogging(fn)`/`memoize(fn)` examples wrap a function behind the same call signature and add behavior around the delegated call — Decorator via closures. |

No genuine match was found for the other 9 patterns in either track (Singleton, Factory Method,
Builder, Adapter, Facade, Command, State, Template Method, Observer) — neither Java nor
JavaScript's existing page set has a page that's really *about* implementing one of these, as
opposed to a page that merely uses a similar-sounding word. Nothing was invented or forced to
make a count; the 4 found are added as a second `crumb` pill (Strategy and Decorator already had
an OOP-angle pill, so the language pill is a second line, not a replacement), the language page
gets the matching reverse link. No new pages were written on either side — this is purely the
cross-link extension, same as the OOP treatment.

## Track-specific decisions

Icon 🏗️, track colour `#44403c` (stone) — distinct from the three internal family colours
(`#155e75` Creational, `#3730a3` Structural, `#9d174d` Behavioral) and from every other track's
brand colour. Diagrams are UML-flavoured structure diagrams (roles + relationship arrows), not
the site's usual flow/sequence style, because a pattern's whole point is the fixed shape of a
small set of roles. Full reasoning in [`roadmap.md`](roadmap.md)'s "Track-specific decisions"
section.
