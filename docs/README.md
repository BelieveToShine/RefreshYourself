# Docs index

Start with [`../CLAUDE.md`](../CLAUDE.md), then:

- [`refreshyourself-overview.md`](refreshyourself-overview.md) — **read first.** What this site
  is, and where everything else lives.
- [`superpowers/specs/README.md`](superpowers/specs/README.md) — the topic catalog, one folder
  per track (what's written, what's roadmap-only, track-specific decisions). This is the current
  source of truth for build status — don't duplicate a status table anywhere else.
- [`rules/README.md`](rules/README.md) — the full action → rule lookup table.
- `topics/` — raw **source material** the user supplied for two tracks (`AI-Interview-Topics.md`,
  `Azure-Interview-Topics.md`): seed topic maps used in those tracks' Phase 1. Not rules, not
  rendered on the site; the other 13 tracks have no equivalent file.

## Every rule file (all indexed — `scripts/check-site.js` fails if one is missing here or in `rules/README.md`)

**Orientation & process**
- [`rules/product-principle.md`](rules/product-principle.md) — the lens for every rule; read first.
- [`rules/site-architecture.md`](rules/site-architecture.md) — folder map, page anatomy, run/deploy/branches, the "I changed X → what else changes" table.
- [`rules/pre-commit-docs-sync.md`](rules/pre-commit-docs-sync.md) — docs must be updated in the same commit; the scripts/hooks that enforce it.
- [`rules/build-process.md`](rules/build-process.md) — **read before Phase 7**: subagent dispatch, machine-sharing safety, mandatory two-pass diagram verification, site-wiring checklist.
- [`rules/gap-hunting.md`](rules/gap-hunting.md) — Phase 2: dedupe *and* find gaps.
- [`rules/interview-depth-and-priority.md`](rules/interview-depth-and-priority.md) — tier = question type, priority = interview likelihood.
- [`rules/reporting.md`](rules/reporting.md) — chat reports of commits/pushes name branch + hash.

**Writing a page**
- [`rules/content-structure.md`](rules/content-structure.md) — folders, file names, `data-root`, index page vs. topic page.
- [`rules/content-writing.md`](rules/content-writing.md) — simple words, ordering, the exact topic-page template (old frozen vs. new).
- [`rules/accuracy.md`](rules/accuracy.md) — never write a claim you're not sure is true. Outranks everything.
- [`rules/why-it-matters.md`](rules/why-it-matters.md) · [`rules/use-cases.md`](rules/use-cases.md) · [`rules/retrofit-why-usecases.md`](rules/retrofit-why-usecases.md) — the "Why it matters" box / why-grid, the 🧭 Use Cases panel, and retrofitting them.
- [`rules/interview-recall.md`](rules/interview-recall.md) · [`rules/common-trap.md`](rules/common-trap.md) · [`rules/keypoints.md`](rules/keypoints.md) — 🔥 Recall, ⚠️ Trap, 🎯 Say-this boxes.
- [`rules/diagram-style.md`](rules/diagram-style.md) — inline SVG diagrams + the mandatory verification script.

**Site shell & behaviour**
- [`rules/visual-style.md`](rules/visual-style.md) — fonts, highlights, logos, breadcrumb pills, eyebrows.
- [`rules/link-hover.md`](rules/link-hover.md) — link underline hover and its exclusion list.
- [`rules/search.md`](rules/search.md) — global search; the `search-index.js` rule.
- [`rules/tier-navigation.md`](rules/tier-navigation.md) — left topic sidebar built from `nav-index.js`.
- [`rules/back-navigation.md`](rules/back-navigation.md) — crumb-bar "← Back" and click-tagging in `site.js`.

## Reviews & backlog

- [`review-2026-10-06.md`](review-2026-10-06.md) — full-repo review (docs, site shell, content) with
  prioritized open findings. Read before starting any cleanup/fix pass; tick items off there as they land.
