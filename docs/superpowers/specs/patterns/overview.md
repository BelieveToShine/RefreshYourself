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

## Track-specific decisions

Icon 🏗️, track colour `#44403c` (stone) — distinct from the three internal family colours
(`#155e75` Creational, `#3730a3` Structural, `#9d174d` Behavioral) and from every other track's
brand colour. Diagrams are UML-flavoured structure diagrams (roles + relationship arrows), not
the site's usual flow/sequence style, because a pattern's whole point is the fixed shape of a
small set of roles. Full reasoning in [`roadmap.md`](roadmap.md)'s "Track-specific decisions"
section.
