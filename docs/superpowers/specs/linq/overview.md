# LINQ — Track Spec

**Start here for anything LINQ-related.** See [`docs/superpowers/specs/README.md`](../README.md)
for what this file is and the process for keeping it in sync with the live pages.

## Status — Phases 1–7 complete, all 59 pages written

- **Phase 1** — [`question-taxonomy.md`](question-taxonomy.md): 8 concept groups, sourced from
  the user's own detailed proposed roadmap (already organized into 3 tiers + a scenario section),
  plus this track's own light Phase-2 gap-hunt (3 small additions, each folded into an existing
  page rather than added as a new one).
- **Phases 2–6** — [`roadmap.md`](roadmap.md): reviewed (4 merges, 1 exclusion — see its own
  Phase 2 section for the reasoning on each), grouped into 59 final pages (including one later
  addendum — a custom-LINQ-extension-method scenario), tiered by **interview depth** (not
  difficulty), and given an interview-priority tag.
- **Phase 7 — all 59 pages written** (Basic 14 / Intermediate 17 / Advanced 28, the last 11 of
  which are the labeled "LINQ Scenarios" sub-block), using the same template as every other
  completed track's Phase 7 (❓ Interview Question line → 🔥 Recall → 🧠 Visual → ⚠️ Trap → 🔄
  Follow-up → 🎯 Say-this → 📖 Explanation → 💻 Code → optional 🧭 Use Cases — see
  [content-writing.md](../../rules/content-writing.md)). Every page's diagram was run through the
  mandatory automated verification script (see
  [diagram-style.md](../../rules/diagram-style.md#mandatory-automated-verification--hand-computed-coordinates-are-not-verification))
  and independently re-verified — all 59 confirmed `issueCount: 0`, zero genuine defects. Fully
  wired into the shared site files: `assets/nav-index.js`, `assets/search-index.js`, the three
  tier index pages, [`linq/roadmap.html`](../../../linq/roadmap.html), `linq/index.html`'s tier
  cards, and the root `index.html` tile (no longer "Coming soon").

## The full roadmap, tier by tier

Live on each tier's own index page:
[`linq/basic/index.html`](../../../linq/basic/index.html) (14, all written),
[`linq/intermediate/index.html`](../../../linq/intermediate/index.html) (17, all written),
[`linq/advanced/index.html`](../../../linq/advanced/index.html) (28, all written — the last 11
are the "LINQ Scenarios" sub-block). See [`roadmap.md`](roadmap.md)'s Phase 6 tables for the
full numbered list with the Phase 2 merge/exclusion reasoning behind each page's scope, and
[`linq/roadmap.html`](../../../linq/roadmap.html) for the same 59 pages grouped by concept
cluster instead of by tier.

## Where the roadmap came from

The entire raw list (54 comparison/concept topics + 10 scenarios) is the user's own proposed
roadmap, handed over already split into Basic/Intermediate/Advanced plus a dedicated scenario
section, with explicit technical-accuracy requirements and two worked visual examples (the
zero/one/many-match table for `First`/`Single`-family methods, and a same-input/different-output
table for `Select`/`SelectMany`). This session's job was Phases 2–6: review/merge/exclude, group
into pages, tier, prioritize, and produce the final numbered roadmap — see
[`roadmap.md`](roadmap.md)'s own Phase 2 section for exactly what was merged/excluded and why.

## Track-specific decisions and boundaries

- **This track owns LINQ the language feature** — operators, execution model,
  `IEnumerable`/`IQueryable`, query providers, and the general LINQ→SQL translation mechanism. It
  does **not** own EF Core's own machinery (`DbContext`/`DbSet`, migrations, the change tracker,
  compiled queries, query splitting, connection management — all `efcore/`'s job) or raw
  SQL/database-engine internals (index design, reading a query plan, isolation levels —
  `sql/`'s job). Every page that brushes against either boundary cross-links the existing page
  instead of re-teaching it.
- **Scenario questions are a distinct, labeled sub-block inside Advanced** (pages 18–28, each
  titled `Scenario: ...`), matching the exact convention already used on
  `react/advanced/14–18.html` and `angular/advanced/11–16.html` — not a fourth tier, not a
  separate top-level site section.
- **Homepage placement: inside the "🛤️ Core backend interview path" row, directly after C# and
  before OOP** — LINQ is a C# language feature the rest of that path (OOP, .NET, Web API, and
  especially EF Core) leans on, so it reads as the natural prerequisite ordering. Flagged
  explicitly for the user's own review, not a locked site rule.
- **Code examples are C#**, matching every other track on this site.
- Icon 🔗, track color indigo (`#4f46e5` ink on `#e0e7ff` bg) — distinct from every track color
  already in use; closest neighbor is .NET's violet `#7c3aed`.

## Known gaps

None — all 59 pages are written and independently diagram-verified (all confirmed
`issueCount: 0`, zero genuine defects). Expect a review/feedback pass once the user goes through
it, same as every other track's first full pass.

## Addendum 2026-10-10 — all 59 pages written and wired

All 59 pages (Basic 14, Intermediate 17, Advanced 28) were written and independently verified,
then wired into `assets/nav-index.js`, `assets/search-index.js`, the three tier index pages,
`linq/roadmap.html`, `linq/index.html`'s tier-bulletin counts, and the root `index.html` tile
(dropped `tile soon`/the "Coming soon" ribbon, tier pills are now real links). Two small drifts
between the original planned-roadmap stub pages and the pages actually written were corrected
during wiring, using the live page as ground truth: `advanced/11–20.html`'s 🔥 Must Know count is
4 (not the stub's 3) and `advanced/21–28.html`'s is 3 (not the stub's 4); and several Advanced
Scenario pages (19, 20, 22–27) were written with shorter, tightened titles than the originally
planned long-form wording — the tier index, roadmap, search-index, and nav-index entries all use
the real, as-written titles.
