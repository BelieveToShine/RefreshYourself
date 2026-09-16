# OOP — Interview Question Taxonomy

**Phase 1 of the 7-phase pipeline** (see [`docs/superpowers/specs/README.md`](../README.md)).
This answers only: **what could an interviewer ask about OOP design to a 3+ year developer?**
No tier, no priority, no page grouping yet — see the C# taxonomy for the format this follows and
what each variant label (Core concept / Understanding / Comparison / Pitfall / Scenario) means.
**[new]** marks anything added beyond the user's original OOP section of the interview-prep plan.

## The one rule that makes this track different from C#'s

**This track must not teach OOP from zero, and must lean scenario-heavy far more than C#'s
taxonomy does.** The user's own instruction: a page explaining "what is polymorphism?" is much
less valuable to a 3+ year developer than a page built around *"you have `CreditCardPayment`,
`PayPalPayment`, and `BankTransferPayment` — how would you design it?"* with the resulting
`IPaymentProcessor` diagram. Wherever a concept below has a natural real-world design scenario,
it's called out explicitly — favor those over generic definition questions when Phase 3 groups
this into pages.

**Scope boundary (carried over from the C# spec):** the *language mechanics* of `interface` and
`abstract class` (syntax, C#-specific rules like multiple interface inheritance) live here, not
in the C# track — this track owns the design-level questions about *when and why* to use them.

---

## 1. The Four Pillars (quick-recall level)

### Encapsulation vs. Abstraction
- **Core concept** — What's the actual difference between the two? (They get conflated
  constantly.)
- **Comparison** — Encapsulation hides *state*; abstraction hides *complexity/detail*. Give an
  example of each that isn't the other. **[new]**

### Inheritance vs. Composition
- **Core concept** — What's the difference between the two, mechanically?
- **Comparison** — "has-a" vs. "is-a" — how do you decide which relationship actually describes
  two classes?
- **Scenario** — You have `Car` and `Engine` — why is that composition, not inheritance? **[new]**

### Polymorphism
- **Core concept** — What is polymorphism?
- **Comparison** — Compile-time polymorphism (overloading) vs. runtime polymorphism
  (overriding) — what actually resolves the call in each case, and when?
- **Comparison** — Overloading vs. overriding — same name, completely different mechanisms.
- **Pitfall** — Hiding a base method with `new` instead of overriding it with `override` — the
  call resolves differently depending on the *static* type of the reference. **[new]**

---

## 2. Interface vs. Abstract Class

### Interface vs. Abstract Class
- **Core concept** — What's the actual difference, beyond "one can have a constructor and the
  other can't"?
- **Comparison** — When would you reach for an interface over an abstract class, and vice versa?
- **Pitfall** — Can an abstract class implement an interface? (Yes — and it doesn't have to
  implement every member itself; it can leave some abstract for its own subclasses.)
- **Scenario** — You need to add a capability to several *unrelated* class hierarchies (e.g.
  `ILoggable`) — why does that push you toward an interface rather than a shared base class?
  **[new]**

---

## 3. SOLID

### Single Responsibility Principle **[new]**
- **Core concept** — What does "one reason to change" actually mean in practice, since almost
  every class technically does more than one thing? **[new]**
- **Pitfall** — Confusing "one method" with "one responsibility" — a class can have many methods
  and still have a single responsibility. **[new]**

### Open/Closed Principle
- **Core concept** — What does "open for extension, closed for modification" mean concretely?
- **Scenario** — You keep adding `if (type == "X")` branches every time a new payment type
  appears — how does OCP fix that, and what pattern typically emerges (Strategy)?

### Liskov Substitution Principle
- **Core concept** — What does it actually require of a subclass?
- **Scenario** — The classic square-extends-rectangle example — why does it violate LSP, and
  what's a real-world equivalent trap (e.g. a `ReadOnlyRepository` that throws on `Save()`)?

### Interface Segregation Principle
- **Core concept** — What problem does a "fat interface" cause for its implementers?
- **Scenario** — Give a real example of a fat interface forcing an unrelated implementation
  detail on a class that doesn't need it, and how splitting it fixes that.

### Dependency Inversion Principle
- **Core concept** — What does "depend on abstractions, not concretions" actually mean?
- **Comparison** — Dependency Inversion (the design principle) vs. Dependency Injection (a
  technique that helps satisfy it) — how are they related but not the same thing?
- **Scenario** — How does DIP show up specifically in ASP.NET Core's built-in DI container? (This
  is the design *principle*; the container mechanics themselves belong to the .NET/ASP.NET Core
  track's DI section.)

### SOLID as a Whole
- **Scenario** — Walk through applying all five principles to one real, moderately complex
  service — where does each one actually bite?

---

## 4. Composition vs. Inheritance (in depth)

### Why Prefer Composition Over Inheritance
- **Core concept** — What goes wrong with deep inheritance hierarchies as a codebase grows?
- **Pitfall** — The fragile base class problem — a change to a base class breaks subclasses in
  ways nobody anticipated. **[new]**
- **Scenario** — Give a real example where inheritance created a design problem that composition
  would have avoided.
- **Comparison** — What are the genuine trade-offs of composition over inheritance — it isn't a
  free win either (more indirection, more boilerplate delegation).

---

## 5. Design Patterns in Practice

### Strategy Pattern vs. Conditional Logic
- **Core concept** — What is the Strategy pattern solving?
- **Scenario** — The payment-processor example: `CreditCardPayment`, `PayPalPayment`,
  `BankTransferPayment` behind an `IPaymentProcessor` — walk through why this design beats a
  giant `switch` on payment type, and what happens when a new payment type is added later.

### Factory vs. Dependency Injection
- **Core concept** — What problem does a Factory solve, and how is it different from just
  injecting a dependency?
- **Comparison** — When do you actually need a factory *in addition to* DI — e.g. when the
  concrete type to create depends on runtime data the container doesn't have at startup?

---

## 6. Coupling, Cohesion & Maintainability

### Coupling vs. Cohesion
- **Core concept** — What's the difference between the two, and why do you want low coupling but
  high cohesion (not the reverse)?
- **Scenario** — What makes a piece of code maintainable in practice — walk through a checklist
  an interviewer might expect (single responsibility, testability, low coupling, clear naming,
  no hidden side effects).

### Refactoring a Tightly Coupled Service
- **Scenario** — You're handed a service that directly instantiates its own database connection,
  its own logger, and calls a static email-sender method — how would you refactor it, and what
  principle is each step actually applying?

---

## Coverage note for Phase 2

Every OOP topic from the user's own Basic/Intermediate/Advanced lists is represented above,
regrouped by concept instead of by tier — nothing invented beyond that source list except the
`[new]` items, which are kept deliberately few: Single Responsibility as its own entry (the
original list names O/L/I/D individually plus "SOLID in a real application" as a whole; S was
implied but never spelled out) and a small number of natural Comparison/Pitfall phrasings on
topics that were already named. No extra design patterns or scenario examples were added beyond
the payment-processor one the user gave — Phase 3 should pull most of this track's scenario
richness from the *given* topics themselves (composition-vs-inheritance, tightly-coupled-service
refactor, SOLID-in-a-real-app) rather than from invented new ones.
