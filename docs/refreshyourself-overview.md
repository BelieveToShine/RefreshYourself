# RefreshYourself — Read This First

Read this before working on any content. This file is the whole-project picture: what the site
is and where everything lives. It does **not** hold the topic catalogs — those live in
[`docs/superpowers/specs/`](superpowers/specs/README.md), one folder per track, so each track's
roadmap can grow and get maintained on its own instead of one page getting unwieldy.

## What this is

A quick-refresh interview-prep site. Tracks (C#, Azure, OOP's, .NET Framework, SQL, React, DSA —
more can be added), each split into Basic → Intermediate → Advanced tiers, each tier a numbered,
hot-first list of topics. Every written topic page follows the exact template in
[content-writing.md](rules/content-writing.md) — diagram + key points always visible, everything
else (why it matters, explanation, code, real-world example) collapsed by default.

## Where things live

| Question | Answer |
|---|---|
| What's built vs. planned, per track? | [`docs/superpowers/specs/README.md`](superpowers/specs/README.md) → each track's `overview.md` |
| How do I write/structure a page? | [`docs/rules/README.md`](rules/README.md) — the full action → rule table |
| What's the current build order? | The status line at the top of each track's `overview.md` under `specs/` |

## Current build status (one line each — see the track's own spec for detail)

- **C#** — Basic complete (14/14), including the tier-navigation sidebar (see
  [`rules/tier-navigation.md`](rules/tier-navigation.md)). Awaiting final user review.
  Intermediate/Advanced: roadmap listed, 0 written, still gated on the user saying to proceed.
  See [`specs/csharp/overview.md`](superpowers/specs/csharp/overview.md).
- **Azure** — roadmap-only skeleton across all three tiers, sourced from
  `Azure-Interview-Topics.md`. **Cleared to start** — the user is writing Azure Basic content in
  a parallel session; C# Basic is the finished reference implementation to pattern-match
  against. See [`specs/azure/overview.md`](superpowers/specs/azure/overview.md).
- **AI** — roadmap-only skeleton across all three tiers, sourced from `AI-Interview-Topics.md`.
  Skeleton just built, awaiting user review/adjustment before anything else. **Do not write AI
  content until told to.** See [`specs/ai/overview.md`](superpowers/specs/ai/overview.md).
- **OOP's, .NET Framework, SQL, React, DSA** — not started, no roadmap planned yet.

## Adding a new track's spec

The moment a track's roadmap gets planned — even before any page in it is written — give it a
folder under `docs/superpowers/specs/<track>/overview.md` and add it to that folder's index
table. See [`docs/superpowers/specs/README.md`](superpowers/specs/README.md) for the exact
format and process.
