# Common tasks — step-by-step recipes

These are shortcuts through the rule files, not replacements for them: each recipe ends with the
rule file that owns the detail. Always finish with `node scripts/check-site.js` (zero `ERROR`s) and
update the docs in the same commit ([`pre-commit-docs-sync.md`](../rules/pre-commit-docs-sync.md)).
Don't commit, push or open a PR unless asked that turn.

## Add one topic page to an existing track

1. Make sure the page already has a row in `docs/superpowers/specs/<track>/roadmap.md` (planned
   rows show as muted 📝 on the tier index). Use the next free number in the tier — **never
   renumber**.
2. Copy the skeleton from [`topic-page-template.md`](topic-page-template.md) (or the head/body of a
   finished page of the same tier) and write the page — [`content-writing.md`](../rules/content-writing.md),
   [`accuracy.md`](../rules/accuracy.md) first.
3. Draw the diagram inline in the page — [`diagram-style.md`](../rules/diagram-style.md).
4. Wire it everywhere: `assets/search-index.js`, `assets/nav-index.js`, the tier `index.html` row
   (un-mute 📝) + counts, the track `index.html` counts, `<track>/roadmap.html`, the track's
   `overview.md` + `roadmap.md` — full list in the
   ["I changed X" table](../rules/site-architecture.md#i-changed-x--what-else-must-change-the-change--files-map).
5. `node scripts/add-head-meta.js` then `node scripts/fix-pagers.js --fix` (head boilerplate and
   Prev/Next pager links), then update `docs/track-history.md` (the entry's
   `all 7 phases complete, N/N pages` headline) and run `node scripts/gen-status.js`.
6. Verify: `node scripts/check-site.js`, then
   `node scripts/verify-diagrams.js --only <track>/<tier>/<n>.html` — must report `issueCount: 0`
   for every diagram on the page.

**Several pages at once:** use the scripted workflow in
[`site-architecture.md`](../rules/site-architecture.md#adding-pages-in-bulk--the-scripted-workflow-used-2026-10-07-for-108-pages)
(`scripts/wire-indexes.js` consumes a wiring manifest per page) and the subagent rules in
[`build-process.md`](../rules/build-process.md).

## Add a new track

1. Run Phases 1–6 first and write them to `docs/superpowers/specs/<track>/` (`overview.md`,
   `question-taxonomy.md`, `roadmap.md`) — format in
   [`specs/README.md`](../superpowers/specs/README.md); gap-hunting in
   [`gap-hunting.md`](../rules/gap-hunting.md); tiers/priorities in
   [`interview-depth-and-priority.md`](../rules/interview-depth-and-priority.md).
2. Create the folders and index pages — [`content-structure.md`](../rules/content-structure.md).
3. Register the track: the `TRACKS` list and `labels` map in `scripts/check-site.js`, `GROUPS` in
   `scripts/gen-status.js`, the root `index.html` tile, `<track>/roadmap.html`, and `iconFor()` in
   `assets/site.js`. Pick a track colour nobody uses
   ([`build-process.md`](../rules/build-process.md) lists the ones in use).
4. Add the row to `docs/superpowers/specs/README.md` and an entry in `docs/track-history.md`.
5. Build pages (Phase 7) as above, then `node scripts/gen-status.js`.

## Fix or add a diagram

1. Edit the inline `<svg class="topic-diagram">` in the page (never a separate `.svg`).
2. Re-verify against the live render:
   `node scripts/verify-diagrams.js --only <path-substring>` (no `--only` = every page on the
   site). A page is done only when every diagram reports `issueCount: 0`.
3. If the verification logic itself changes, keep `scripts/verify-diagrams.js` and the canonical
   `checkDiagram()` in [`diagram-style.md`](../rules/diagram-style.md) in sync, in the same change.

## Add a page to the Scenario Bank

Write the page in its own track first, as normal. Then two small steps, both data-driven — add one
card to `scenarios/index.html` and set `scenario: true` on the page's entry in `assets/nav-index.js`.
Exact markup and what counts as a scenario page:
[`scenario-bank.md`](../rules/scenario-bank.md).

## Retitle a page, or change its tier/priority

Follow the matching row of the
["I changed X" table](../rules/site-architecture.md#i-changed-x--what-else-must-change-the-change--files-map)
— title and priority live in several places (page, search index, nav index, tier index, roadmap)
and they must all agree.

## Add or rename a rule file

Add a row to the table in [`rules/README.md`](../rules/README.md) (the single index —
`check-site.js` fails if it's missing). Put dated decisions in `docs/track-history.md`, not in the
rule text, and add a TL;DR at the top of the file.

## Scripts cheat sheet

| Script | What it does | When to run |
|---|---|---|
| `check-site.js` | Site/docs consistency checker (wiring, links, counts, rule indexing) | before every commit |
| `gen-status.js` | Regenerates `docs/status.md` from the page files (`--check` to test) | after adding/removing pages |
| `verify-diagrams.js` | Live-render diagram overlap/geometry sweep (`--only <substr>`, `--port`) | after any diagram edit |
| `wire-indexes.js` | Adds pages/retitles to `nav-index.js` + `search-index.js` from JSON manifests (idempotent) | bulk page adds |
| `fix-pagers.js` | Reports (or with `--fix` repairs) Prev/Next pager links | after adding pages |
| `add-head-meta.js` | Idempotent head/meta/skip-link/a11y pass over every page (`--dry`) | after adding pages |
| `install-hooks.js` | Points git at `scripts/hooks` so commits run the docs-sync guard | once per clone |
| `pre-commit-check.js` / `claude-commit-guard.js` | The docs-sync guard (git hook / Claude Code hook) | automatic on commit |
| `build-quickstart.js` | One-time generator for `quickstart.html` from the 🔥 items in `nav-index.js` | when 🔥 set changes |
| `add-og-tags.js`, `build-og-image.js`, `add-tier-key-to-index.js`, `add-navindex-script-to-index.js` | One-time authoring tools already applied to every page; safe to re-run, rarely needed | rarely |
