# RefreshYourself — Read This First

Read this before working on any content. This file is the whole-project picture: what the site
is and where everything lives. It does **not** hold the topic catalogs — those live in
[`docs/superpowers/specs/`](superpowers/specs/README.md), one folder per track, so each track's
roadmap can grow and get maintained on its own instead of one page getting unwieldy.

## What this is

A quick-refresh **interview question bank** (not a tutorial site) for developers with 3+ years
of experience — locked with the user on 2026-09-15, superseding the earlier "topic tutorial"
framing. Two groups of tracks:

- **Core backend interview path**, in this order: C# → OOP → .NET/ASP.NET Core (MVC lives inside
  this one, as a grouped subsection, not its own track) → Web API → EF Core → SQL → Azure.
- **Other tracks**, unaffected by this rebuild and not part of the ordered path: React, DSA, AI.

Every track goes through 7 phases before any page is built — see
[`specs/README.md`](superpowers/specs/README.md) for the full pipeline. Basic/Intermediate/
Advanced now mean **interview depth** (recall-speed vs. practical understanding vs. internals/
trade-offs/architecture) — explicitly **not** beginner/intermediate/expert tutorial difficulty.
Every page also gets an independent priority tag (🔥 Must Know / ⭐ Should Know / 🧠 Deep Dive,
Phase 5) — a topic can be Advanced *and* Must-Know at the same time.

The old page template ([content-writing.md](rules/content-writing.md)) still describes exactly
what's live on C# Basic's 14 written pages today — **frozen**, not touched by this rebuild until
a deliberate later migration pass. The new template (Question → Recall → Visual → Trap →
Follow-up → Say-this → Explanation → Code → Real-world/Scenario) applies to new content going
forward once a track reaches Phase 7.

## Where things live

| Question | Answer |
|---|---|
| What's built vs. planned, per track? | [`docs/superpowers/specs/README.md`](superpowers/specs/README.md) → each track's `overview.md` |
| How do I write/structure a page? | [`docs/rules/README.md`](rules/README.md) — the full action → rule table |
| What's the current build order? | The status line at the top of each track's `overview.md` under `specs/` |

## Current build status (one line each — see the track's own spec for detail)

**Core backend path — all in Phase 1 (question taxonomy), awaiting the user's review before
Phase 2 (dedupe/gaps) starts on any of them:**

- **C#** — **Phases 1–6 complete**: [`question-taxonomy.md`](superpowers/specs/csharp/question-taxonomy.md)
  → [`roadmap.md`](superpowers/specs/csharp/roadmap.md), 49 pages tiered and prioritized, also
  live on [`csharp/roadmap.html`](../csharp/roadmap.html) and the Basic/Intermediate/Advanced
  tier-index pages. Phase 7 (writing the 35 planned pages) not started. The 14 written Basic
  pages (incl. the tier-navigation sidebar — see [`rules/tier-navigation.md`](rules/tier-navigation.md))
  stay **frozen**, not part of this rebuild; they get their own later migration pass. This
  track is the reference example for how every other track goes through the pipeline. See
  [`specs/csharp/overview.md`](superpowers/specs/csharp/overview.md).
- **OOP** — [`question-taxonomy.md`](superpowers/specs/oops/question-taxonomy.md) written.
  Deliberately scenario-heavy per the user's instruction — no old roadmap existed.
- **.NET / ASP.NET Core** — [`question-taxonomy.md`](superpowers/specs/dotnet/question-taxonomy.md)
  written, MVC included as a grouped subsection (not a separate track/folder). Rescopes the old,
  never-written ".NET Framework" slot — different technology, same folder slug (`dotnet/`).
- **Web API** — [`question-taxonomy.md`](superpowers/specs/webapi/question-taxonomy.md) written.
  Brand-new track; no site folder exists yet (that's Phase 6/7 work).
- **EF Core** — [`question-taxonomy.md`](superpowers/specs/efcore/question-taxonomy.md) written.
  Brand-new track; no site folder exists yet.
- **SQL** — [`question-taxonomy.md`](superpowers/specs/sql/question-taxonomy.md) written. No old
  roadmap existed.
- **Azure** — [`question-taxonomy.md`](superpowers/specs/azure/question-taxonomy.md) written,
  deliberately simplified/scenario-first per the user's later plan. Old three-tier roadmap (0
  written) is **frozen**, superseded by this taxonomy. See
  [`specs/azure/overview.md`](superpowers/specs/azure/overview.md).

**Untouched by this rebuild:**

- **AI** — roadmap-only skeleton across all three tiers, sourced from `AI-Interview-Topics.md`.
  **Do not write AI content until told to.** See
  [`specs/ai/overview.md`](superpowers/specs/ai/overview.md).
- **React, DSA** — not started, no roadmap planned yet.

## Adding a new track's spec

The moment a track's roadmap gets planned — even before any page in it is written — give it a
folder under `docs/superpowers/specs/<track>/overview.md` and add it to that folder's index
table. See [`docs/superpowers/specs/README.md`](superpowers/specs/README.md) for the exact
format and process.
