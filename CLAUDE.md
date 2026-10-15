# RefreshYourself — Start Here (auto-loaded every session)

A personal **interview question bank** for experienced engineers (3+ yrs → principal): 20 tracks
(C#, .NET, SQL, Azure, AWS, React, Angular, Python, Java, AI, DSA, …), one topic per page — a
diagram, a simple-words explanation, and a "say this in the interview" box. Built for a quick
brush-up, not deep study. Plain HTML/CSS/JS, no build step, hosted on GitHub Pages.
Current page counts: [`docs/status.md`](docs/status.md) (generated — never type counts elsewhere).

## Read in this order

1. [`docs/rules/product-principle.md`](docs/rules/product-principle.md) — the lens for every rule
2. [`docs/rules/site-architecture.md`](docs/rules/site-architecture.md) — folder map, page anatomy, **"I changed X → what else must change?"**
3. [`docs/refreshyourself-overview.md`](docs/refreshyourself-overview.md) — what the site is, tracks, tiers vs. priority
4. [`docs/rules/README.md`](docs/rules/README.md) — **the one rule index**: "about to do X → read file Y"
5. [`docs/guides/common-tasks.md`](docs/guides/common-tasks.md) — step-by-step recipes (add a page, add a track, fix a diagram, add a scenario)

Everything else (specs per track, history, backlog) is reachable from [`docs/README.md`](docs/README.md).

## Run, verify, deploy

- **Run:** `npx serve -l 5847 .` (or open `index.html` — works over `file://`). Use another port if a different session is serving.
- **Verify before any commit:** `node scripts/check-site.js` → zero `ERROR`s (page wiring, links, counts, rule indexing). Diagrams additionally need the live-browser script in [`docs/rules/diagram-style.md`](docs/rules/diagram-style.md) with `issueCount: 0`.
- **Docs ship in the same commit as the change.** Hooks block commits that skip it (`node scripts/install-hooks.js` once per clone) — see [`docs/rules/pre-commit-docs-sync.md`](docs/rules/pre-commit-docs-sync.md).
- **Deploy:** every push to `main` goes live on GitHub Pages (`.github/workflows/static.yml`). `main` is the only live branch; `v1` and `claude/*` branches are old snapshots — don't build on them.

## Workflow: the 7-phase pipeline

A track goes through 7 phases **before** any page is built: taxonomy → review + gap-hunt → group
into pages → tier → priority → roadmap → build + verify. Phases 1–6 are written to
`docs/superpowers/specs/<track>/roadmap.md` first. Definition:
[`docs/superpowers/specs/README.md`](docs/superpowers/specs/README.md); how Phase 7 is executed
(subagents, machine-sharing safety, two-pass diagram verification, site wiring):
[`docs/rules/build-process.md`](docs/rules/build-process.md).

## The rules that matter most (full checklist: [`docs/rules/README.md`](docs/rules/README.md#non-negotiables-the-checklist-claudemd-points-here-for))

1. **Never write a claim you're not sure is true** — [`accuracy.md`](docs/rules/accuracy.md) outranks every other rule.
2. **Tier = question *type*** (Basic/Intermediate/Advanced), **priority = interview likelihood** (🔥/⭐/🧠) — never difficulty or seniority.
3. **Very simple words, genuinely short**; every page has an inline-SVG diagram, a "why it matters" box and a "say this" box.
4. **Numbering is permanent**; list the whole roadmap on the tier index first (unwritten rows muted, tagged 📝).
5. **Every new page is wired everywhere** — `search-index.js`, `nav-index.js`, tier index, `roadmap.html`, spec docs (the checker tells you what's missing).
6. **Never commit, push or open a PR without being asked that turn**; when you report one, name the branch + hash ([`reporting.md`](docs/rules/reporting.md)).

## Gotchas

- `docs/topics/` is raw source material from the user, not rules and not rendered.
- `docs/status.md` is generated — run `node scripts/gen-status.js`, don't hand-edit.
- `scripts/` holds helpers that rewrite many files at once (`add-head-meta.js`, `fix-pagers.js --fix`, `wire-indexes.js`); what each does is listed in [`docs/guides/common-tasks.md`](docs/guides/common-tasks.md#scripts-cheat-sheet). Run them deliberately and review the diff.

## Adding rules

A new convention goes into the right rule file (and its row in `docs/rules/README.md`) in the
same session — never only in chat. Dated decisions go in
[`docs/track-history.md`](docs/track-history.md), not in rule text.
