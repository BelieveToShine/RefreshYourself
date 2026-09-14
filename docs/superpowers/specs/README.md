# Track Specs — Format and Process

**Read this before adding or touching anything under `docs/superpowers/specs/`.** It applies to
every session working on this site — this session finishing C#, a future session starting Azure
or OOP's. Following the same format everywhere is the entire point: a session that has never
worked on a given track should be able to open its folder and know exactly what's built, what's
planned, and why, without re-deriving any of it from the live pages.

## Existing categories

| Track | Covers |
|---|---|
| [csharp/](csharp/overview.md) | The C# language track — Basic (14/14 written), Intermediate (14, roadmap only), Advanced (12, roadmap only). |
| [azure/](azure/overview.md) | The Azure track — Basic/Intermediate/Advanced, all roadmap-only (0 written), sourced from `Azure-Interview-Topics.md`. |
| [ai/](ai/overview.md) | The AI/GenAI track — Basic (16)/Intermediate (18)/Advanced (14), all roadmap-only (0 written), sourced from `AI-Interview-Topics.md`. |

Add a row here whenever a new track's roadmap is first planned — even before any page in it is
written. This table is the map — a session should be able to tell from this file alone whether a
track already has a spec before starting one.

## Folder and file convention

- One folder per track: `docs/superpowers/specs/<track-slug>/` (same slug as the track's URL
  folder, e.g. `csharp/` here matches `/csharp/` on the site).
- **No date prefixes, anywhere.** This is current-state reference documentation, not a dated
  changelog — git history already carries the timeline.
- Every track folder has exactly one `overview.md` — the mandatory entry point, and for most
  tracks the *only* file needed (see below).
- Split into an additional file only if a track grows a genuinely distinct sub-topic worth its
  own doc (rare at this site's scale) — don't split a track that fits comfortably in one
  `overview.md`.

## What a track's `overview.md` must contain

Use `csharp/overview.md` as the working example.

1. **Status line** — one sentence: how many tiers/topics are written vs. roadmap-only, right now.
2. **The full roadmap, tier by tier** — a table per tier (# / topic / hot-or-normal / written?),
   matching exactly what's on the tier's actual `index.html` (see
   [content-structure.md](../../rules/content-structure.md)) — this file is the planning
   reference, the HTML page is the live artifact; they must never drift out of sync.
3. **Where the roadmap came from** — if sourced from an existing document (like Azure's
   `Azure-Interview-Topics.md`) or reasoned from scratch, say so and name the source. This is
   what [accuracy.md](../../rules/accuracy.md) requires when a whole roadmap gets asserted at
   once.
4. **Track-specific decisions and boundaries** — anything a future session would otherwise have
   to re-derive, e.g. "interfaces/inheritance live in OOP's, not here, even though they're a C#
   keyword" or a tiering call that could reasonably be argued either way.
5. **Known gaps** — tiers not written yet, topics that might be mis-tiered once actually
   written, anything deliberately deferred.

General site-wide rules (diagram style, writing template, highlight rules) stay in
[`docs/rules/`](../../rules/README.md) — they apply to every track and don't belong copied into
each track's spec. A track's `overview.md` is only what's specific to *that* track.

## Process to follow when writing one

1. **List the full roadmap before writing a single topic page** — same rule as
   [content-writing.md](../../rules/content-writing.md), just written down here instead of only
   living in chat.
2. Write the track's `overview.md` with that roadmap immediately — don't let it exist only in
   the tier `index.html` files. The spec doc and the live pages are two views of the same roadmap
   and must be updated together.
3. Add a row to the category table above.
4. As topics get written, flip their `written?` column here at the same time the tier index row
   flips from `planned` to a real link — same moment, not a follow-up task.

## When to create a new category

The moment a track's full roadmap gets planned — even before the first topic page is written
(Azure is the working example: roadmap-only, spec written, zero pages built). Don't wait until a
track is finished to document it.
