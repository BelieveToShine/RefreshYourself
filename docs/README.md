# Docs map

Start with [`../CLAUDE.md`](../CLAUDE.md) (auto-loaded each session), then use this page to find
anything else. This is a map only — it deliberately does not repeat the rule list or any counts.

| I need… | Go to |
|---|---|
| What the site is, who it's for, tiers vs. priority, page anatomy | [`refreshyourself-overview.md`](refreshyourself-overview.md) |
| Current page counts per track | [`status.md`](status.md) *(generated — `node scripts/gen-status.js`)* |
| The rule for the thing I'm about to do | [`rules/README.md`](rules/README.md) — the **one** index of every rule file, plus the non-negotiables checklist |
| Step-by-step recipes (add a page / track / scenario, fix a diagram, scripts cheat sheet) | [`guides/common-tasks.md`](guides/common-tasks.md) |
| A page skeleton to copy | [`guides/topic-page-template.md`](guides/topic-page-template.md) |
| A track's taxonomy, roadmap, tiers and priorities | [`superpowers/specs/README.md`](superpowers/specs/README.md) → `<track>/` |
| Why a track looks the way it does; dated decisions | [`track-history.md`](track-history.md) |
| Known open problems | [`TODO.md`](TODO.md) |
| Past reviews (historical) | [`archive/`](archive/) |
| Raw seed material the user supplied (AI, Azure) — not rules, not rendered | [`topics/`](topics/) |

**Where truth lives (so docs don't drift):** page counts → `status.md` only; rules → one rule file
each, indexed in `rules/README.md` only; per-track decisions → that track's spec folder; dated
history → `track-history.md`. `node scripts/check-site.js` enforces the machine-checkable parts.
