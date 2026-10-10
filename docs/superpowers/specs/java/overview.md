# Java — Track Spec

**Start here for anything Java-related.** See [`docs/superpowers/specs/README.md`](../README.md)
for what this file is and the process for keeping it in sync with the live pages.

## Status — Phases 1–7 complete, all 88 pages written

- **Phase 1** — [`question-taxonomy.md`](question-taxonomy.md): 17 concept groups (16 Java-concept
  groups + 1 scenario group), sourced from the user's own detailed proposed roadmap (already
  organized into 3 tiers — Core Java fundamentals / Collections+generics+modern Java /
  JVM+concurrency+performance — plus a dedicated 10-scenario section).
- **Phases 2–6** — [`roadmap.md`](roadmap.md): reviewed (no merges, no exclusions needed — the
  user's own proposal already mapped cleanly one topic → one page at the right grain; two scope
  decisions were made instead, deferring Spring Boot/enterprise Java and Java I/O/NIO — see its
  own Phase 2 section), grouped into 88 final pages, tiered by **interview depth** (not
  difficulty), and given an interview-priority tag.
- **Phase 7 — all 88 pages written** (Basic 24 / Intermediate 28 / Advanced 36, the last 10 of
  which are the labeled "Java Scenarios" sub-block), using the same template as every other
  completed track's Phase 7 (❓ Interview Question line → 🔥 Recall → 🧠 Visual → ⚠️ Trap → 🔄
  Follow-up → 🎯 Say-this → 📖 Explanation → 💻 Code → optional 🧭 Use Cases — see
  [content-writing.md](../../rules/content-writing.md)). Every page's diagram was run through the
  mandatory automated verification script (see
  [diagram-style.md](../../rules/diagram-style.md#mandatory-automated-verification--hand-computed-coordinates-are-not-verification))
  and independently re-verified — all 88 confirmed `issueCount: 0`, zero genuine diagram defects
  (two unrelated pager-link bugs were found and fixed separately). Fully wired into the shared
  site files: `assets/nav-index.js`, `assets/search-index.js`, the three tier index pages,
  [`java/roadmap.html`](../../../java/roadmap.html), `java/index.html`'s tier cards, and the root
  `index.html` tile (no longer "Coming soon").

## The full roadmap, tier by tier

Live on each tier's own index page:
[`java/basic/index.html`](../../../java/basic/index.html) (24, all written),
[`java/intermediate/index.html`](../../../java/intermediate/index.html) (28, all written),
[`java/advanced/index.html`](../../../java/advanced/index.html) (36, all written — the last 10
are the "Java Scenarios" sub-block). See [`roadmap.md`](roadmap.md)'s Phase 6 tables for the
full numbered list with the Phase 2 reasoning behind each page's scope, and
[`java/roadmap.html`](../../../java/roadmap.html) for the same 88 pages grouped by 17 concept
clusters instead of by tier.

## Where the roadmap came from

The entire raw list (78 comparison/concept topics + 10 scenarios = 88 items) is the user's own
proposed roadmap, handed over already split into Basic/Intermediate/Advanced plus a dedicated
scenario section. This session's job was Phases 2–6: review, group into pages, tier, prioritize,
and produce the final numbered roadmap — see [`roadmap.md`](roadmap.md)'s own Phase 2 section for
exactly what was reviewed and why no merges/exclusions were needed, plus the version-accuracy
check performed for every modern-Java feature (`var`, text blocks, records, sealed classes,
virtual threads, etc.) before documenting it.

## Track-specific decisions and boundaries

- **This track owns core Java** — the language, OOP mechanics, the collections framework,
  streams/lambdas, the JVM, memory, and concurrency. It does **not** own Spring Boot, Spring
  Data/JPA, or distributed-systems patterns (Kafka, circuit breakers, the outbox pattern,
  observability) — the user's own proposal explicitly recommends launching Core Java first and
  treating Spring Boot/backend topics as a later addition. It also does not (yet) own Java
  I/O/NIO (streams, buffers, channels, selectors) — logged as a known gap, not taxonomized in
  this pass.
- **Scenario questions are a distinct, labeled sub-block inside Advanced** (pages 27–36, each
  titled `Scenario: ...`), matching the exact convention already used on
  `react/advanced/14–18.html`, `angular/advanced/11–16.html`, and `linq/advanced/18–28.html` —
  not a fourth tier, not a separate top-level site section.
- **Technical-accuracy commitments locked in at Phase 2** (see `roadmap.md` for the full list):
  never justify `==` on wrapper types via Integer caching; Java is always pass-by-value, even for
  object references; `volatile` alone never makes a compound read-modify-write atomic;
  `HashMap`/`ConcurrentHashMap` internals describe the current Java-8+ per-bin treeification/
  locking design, never the old segment-locking one; virtual threads never claimed to speed up
  CPU-bound work, with the `synchronized`-block pinning caveat always stated; `finalize()` stated
  as deprecated, never a recommended cleanup mechanism; every version-specific feature cites its
  actual finalizing Java version.
- **Homepage placement: a standalone tile alongside the other general-purpose language tracks**
  (C#, Python) in the "🗂️ Other tracks" section — Java is a standalone language track, not nested
  under any existing track.
- **Code examples are Java**, matching every other track's "code examples match the track's own
  language" convention.
- Icon ☕, track color a deep coffee-brown (`#78350f` ink on `#fffbeb` bg) — distinct from every
  track color already in use.

## Known gaps

- **Java I/O / NIO** (streams, buffers, channels, selectors) — real interview material, absent
  from the user's own list, not taxonomized or built in this pass. A candidate for a later
  gap-hunt addition.
- **Spring Boot & enterprise Java** (IoC/DI, REST/MVC, JPA/Hibernate/transactions,
  Kafka/distributed-systems patterns) — explicitly deferred per the user's own recommended
  sequencing; a future session should treat it as its own Phase 1–6 pass (a Java subsection or
  its own track), not an extension bolted onto this roadmap.
- Otherwise none — all 88 pages are written and independently diagram-verified (all confirmed
  `issueCount: 0`, zero genuine defects). Expect a review/feedback pass once the user goes
  through it, same as every other track's first full pass.

## Addendum 2026-10-10 — all 88 pages written and wired

All 88 pages (Basic 24, Intermediate 28, Advanced 36) were written and independently verified
(zero genuine diagram defects; two unrelated pager-link bugs found and fixed), then wired into
`assets/nav-index.js`, `assets/search-index.js`, the three tier index pages, `java/roadmap.html`,
`java/index.html`'s tier-bulletin counts, and the root `index.html` tile (dropped `tile soon`/the
"Coming soon" ribbon, tier pills are now real links). One drift between the original
planned-roadmap stub and the pages actually written was corrected during wiring, using the live
page as ground truth: `advanced/11–20.html`'s 🔥 Must Know count is 5 (not the stub's 6).
