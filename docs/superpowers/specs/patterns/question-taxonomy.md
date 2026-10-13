# Design Patterns — Question Taxonomy (Phase 1)

Locked with the user 2026-10-13: a new standalone track, separate from OOP, so the classic Gang
of Four pattern catalog gets one well-organized home instead of being scattered across whichever
track happened to need a given pattern first. Scope decision (also locked that turn): a
**curated, interview-relevant subset — not all 23 classic patterns.** Real interviews ask a
recurring core of 10–15; the long tail (Visitor, Flyweight, Memento, Chain of Responsibility,
Bridge, Interpreter, Mediator, Abstract Factory, Prototype, Composite) is almost never the literal
question asked of someone who isn't a framework author, and this site's own standing rule is a
quick brush-up, not an encyclopedia (see [`product-principle.md`](../../../rules/product-principle.md)).

**Grouped by the three classic GoF families — Creational, Structural, Behavioral — not by
difficulty.** This is the one deliberate exception to the site's usual Basic/Intermediate/Advanced
tier split; see [`content-structure.md`](../../../rules/content-structure.md) for why forcing
these into a depth ladder would misrepresent them (a pattern isn't "more advanced" than another,
it's a different family solving a different kind of problem). Priority (🔥/⭐/🧠) still applies
per pattern, independent of family, exactly like every other track.

## Scope boundary vs. the OOP track

OOP's own intermediate tier already has several pattern-shaped pages, written from an
**OOP-design-principle angle** (how a pattern relates to SOLID, DI, coupling): Singleton (10),
Repository (11, not a GoF pattern — PoEAA/architecture, out of this track's scope entirely),
Observer (12), Decorator (13), Strategy vs. Conditional Logic (6), Factory vs. Dependency
Injection (7), Adapter vs. Facade (16). Locked decision: **leave those pages exactly where they
are, write this track's pages from a pure-pattern angle (structure, participants, when to reach
for it, a worked example), and cross-link both directions** — the same non-duplication rule as
the Scenario Bank (see [`scenario-bank.md`](../../../rules/scenario-bank.md)). A reader comparing
Factory to DI in a real C# codebase wants OOP's page; a reader who wants "what is the Factory
Method pattern, structurally" wants this track's page. Six of OOP's seven pattern pages have a
direct match here (Repository does not, since it isn't GoF).

## Creational — object creation, decoupled from the concrete class being created

1. **Singleton** — one instance, one global access point, thread-safe construction, why it's
   often called an anti-pattern, DI container as the modern alternative.
2. **Factory Method** — a creation method that subclasses override to decide the concrete type,
   vs. a plain `if/switch` picking a class directly; the "don't scatter `new` everywhere" pitch.
3. **Builder** — construct a complex object step by step, fluent chaining, why it beats a
   constructor with ten optional parameters (telescoping constructor problem).

Considered and excluded (real GoF patterns, deliberately out of the curated set): **Abstract
Factory** (families of related objects — rarely the literal interview question outside UI
toolkit/cross-platform work; Factory Method already covers the core idea tested in practice).
**Prototype** (clone an existing object as a template — niche outside performance-sensitive
object pooling; `MemberwiseClone`/deep-copy is already covered on OOP's own Shallow vs. Deep Copy
page, intermediate/15).

## Structural — composing classes/objects into larger structures

1. **Adapter** — convert one interface into the one a caller expects; wrapping a
   third-party/legacy type without changing it.
2. **Decorator** — wrap an object behind the same interface to add behavior at runtime,
   stackable; `Stream`/ASP.NET Core middleware as the real-world shape.
3. **Facade** — one simplified entry point in front of a complex subsystem; contrast with
   Adapter (Adapter changes a shape to fit, Facade simplifies many moving parts).
4. **Proxy** — a stand-in with the same interface that controls access to the real object
   (lazy loading, caching, access control) — EF Core's lazy-loading proxies as the concrete tie-in.

Considered and excluded: **Bridge** (decouple an abstraction from its implementation so both vary
independently — genuinely useful but rarely the literal asked question; its motivating case
overlaps enough with DIP that it reads as a repeat). **Composite** (tree of part-whole objects
treated uniformly — common in UI/file-system examples but the curated set already has four
Structural pages; a strong future-add candidate, not in this pass). **Flyweight** (share
immutable state across many objects to cut memory — niche, performance-specialist territory).

## Behavioral — how objects communicate and share responsibility

1. **Observer** — one subject notifies many subscribers without knowing their concrete types;
   C# events/`IObservable<T>` as the built-in form; subscription leak risk.
2. **Strategy** — swap an algorithm/behavior at runtime behind one interface, instead of a
   growing `if/switch` on type; the classic payment-processor/sort-comparator example.
3. **State** — an object's behavior changes with its internal state, modeled as a family of
   state classes instead of a scattered status-flag `switch`; order/workflow state machines.
4. **Command** — wrap a request (and its undo) as an object so it can be queued, logged, or
   undone; the undo/redo and menu-action framing.
5. **Template Method** — a base class fixes an algorithm's skeleton and lets subclasses override
   specific steps; the "don't repeat the outer loop, just the step that differs" pitch.
6. **Iterator** — traverse a collection without exposing its internal structure; what `foreach`/
   `IEnumerable<T>`/`yield return` are actually doing under the hood (cross-links to C#'s own
   `yield` coverage rather than re-teaching the keyword).

Considered and excluded: **Chain of Responsibility** (pass a request along a chain until
something handles it — ASP.NET Core middleware is arguably this pattern too, but Decorator
already owns that real-world tie-in on this site and teaching both from the same example would
blur rather than clarify). **Mediator** (centralize how a set of objects talk to each other —
genuinely useful, rarely the literal interview question). **Memento** (capture/restore an
object's internal state for undo — Command already covers the undo angle at interview depth).
**Visitor** (add operations to a class hierarchy without modifying it — the most rarely asked of
all 23 outside compiler/AST work). **Interpreter** (niche, DSL/grammar-specific).

## Gap-hunt (Phase 2)

Checked the curated 13 against outside knowledge of what real interviews ask, not just a re-read
of this list (see [`gap-hunting.md`](../../../rules/gap-hunting.md)): the set above already
matches every pattern that shows up repeatedly across .NET/Java interview-prep material at this
level (Singleton, Factory, Builder, Adapter, Decorator, Facade, Proxy, Observer, Strategy, State,
Command, Template Method, Iterator). No gap found that would change the 13; the "considered and
excluded" notes above are the record of what was deliberately left out and why, so a future
session doesn't re-propose the same exclusions as if they were overlooked.

## Final count

**13 pages** — Creational 3, Structural 4, Behavioral 6. One pattern, one page — no page groups
more than one pattern (unlike some other tracks' pages, each pattern here is substantial enough
on its own: structure diagram, participants, a worked C# example, and a real-world tie-in).
