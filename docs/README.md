# Docs index

- [`refreshyourself-overview.md`](refreshyourself-overview.md) — **read first.** What this site
  is, and where everything else lives.
- [`superpowers/specs/README.md`](superpowers/specs/README.md) — the topic catalog, one folder
  per track (what's written, what's roadmap-only, track-specific decisions). This is the current
  source of truth for build status — don't duplicate a status table anywhere else.
- [`rules/README.md`](rules/README.md) — the full action → rule lookup table. Individually:
  - [`rules/content-structure.md`](rules/content-structure.md) — folders, file names,
    `data-root`, what goes on an index page vs. a topic page.
  - [`rules/content-writing.md`](rules/content-writing.md) — roadmap-first workflow,
    simple-words rule, hot-vs-normal ordering, the exact topic-page template.
  - [`rules/accuracy.md`](rules/accuracy.md) — never write a claim you're not sure is true.
    Outranks every other content rule.
  - [`rules/diagram-style.md`](rules/diagram-style.md) — how to draw the inline SVG diagram for
    a topic page.
  - [`rules/visual-style.md`](rules/visual-style.md) — fonts, highlight spans, logos, eyebrow
    badges.
  - [`rules/search.md`](rules/search.md) — the site-wide search box: how it works, and the one
    rule (update `search-index.js`) that keeps it working.
  - [`rules/tier-navigation.md`](rules/tier-navigation.md) — the left "topic-to-topic" sidebar:
    how it's built from `nav-index.js` with zero per-page markup, and three real bugs to not
    repeat when wiring it up for a new tier.
  - [`rules/keypoints.md`](rules/keypoints.md) — the "Say this in the interview" box: highlight
    every bullet's main point, plain professional wording, the "when do I use X vs. Y" pattern.
