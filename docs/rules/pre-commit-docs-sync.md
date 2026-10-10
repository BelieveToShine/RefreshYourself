# Rule: The md files are updated *before* every commit — and a script enforces it

**Read this before running `git commit` in this repo.** The `docs/` tree and `CLAUDE.md` are the
only memory a new session has. A commit that changes the site but not the docs makes the next
session wrong on arrival. (Real example found 2026-10-06: `CLAUDE.md` still said "Azure has a
Phase 1 taxonomy; AI/DSA untouched" long after all 15 tracks were fully written.)

## The rule

1. Before committing, work out **what your change affects in the docs** using the change → files
   table in [`site-architecture.md`](site-architecture.md#i-changed-x--what-else-must-change-the-change--files-map).
2. Update those md files **in the same commit** — counts, status lines, "what's built" lines,
   rule text that no longer matches the code.
3. Run `node scripts/check-site.js`. Zero `ERROR`s required; read the `WARN`s.
4. Only then commit (and only when the user asked for a commit that turn).

## How it's automated

| Layer | What it does | Set up |
|---|---|---|
| `scripts/check-site.js` | Verifies site wiring + docs counts + rule-file indexing (see [`site-architecture.md`](site-architecture.md#machine-checked-consistency)). | none — run any time |
| `scripts/pre-commit-check.js` | Reads the **staged** files. Blocks the commit if: `check-site.js` has errors; a topic page was added/removed/renamed without the track's `overview.md`/`roadmap.md`, `docs/refreshyourself-overview.md`, `search-index.js`, `roadmap.html`; `site.js` / `nav-index.js` / `style.css` changed without any matching rule file staged; a new rule file isn't indexed in `docs/rules/README.md`, `docs/README.md`, `CLAUDE.md`; a new track spec isn't in the specs index. | git hook (below) |
| `scripts/hooks/pre-commit` | Git hook that runs the above for **every** committer. | once per clone: `node scripts/install-hooks.js` (sets `core.hooksPath`) |
| `.claude/settings.json` → `scripts/claude-commit-guard.js` | Claude Code `PreToolUse` hook: runs the same check whenever a Claude session issues a `git commit`, so a session can't skip it. | automatic (project settings) |

The script can only check that the right files were *touched*, not that the edit is *correct* —
you still have to write the right words. If a doc genuinely needs no change (e.g. a typo fix in
one page), commit with `SKIP_DOCS_CHECK=1 git commit …` and say why in the commit message. Never
use the override to avoid writing status updates.

## When the checker is wrong

If it blocks something legitimate, or misses something it should catch, **fix the checker**
(`scripts/pre-commit-check.js` / `check-site.js`) and update this file in the same commit. The
change → files table lives in two places on purpose (human-readable in `site-architecture.md`,
executable in the script) — keep them identical.

## Related

[`reporting.md`](reporting.md) — what to say in chat after the commit (branch + hash).
[`build-process.md`](build-process.md) — Phase 7 wiring checklist this automates part of.
