# Rule: How the site is put together (the map a new session needs)

**Read this if you've never touched this repo.** Every other rule file says *how to write* one
thing; this one says *where everything is, how the pieces connect, and what has to change
together.* If you only read three files, read: `CLAUDE.md` → this file →
[`../refreshyourself-overview.md`](../refreshyourself-overview.md).

## What it is, technically

Plain static HTML/CSS/JS. **No build step, no framework, no npm dependencies** for the site itself.
Deployed to GitHub Pages by `.github/workflows/static.yml` on every push to `main` (it uploads the
whole repo root). Works equally when opened straight from disk (`file://`) — that's *why* the
search/nav data are plain `<script src>` files, never `fetch()`.

Run it locally: `npx serve -l 5847 .` (what `.claude/launch.json` does as the `refresh-yourself`
preview), or just open `index.html`. Use an unusual port if another session is also serving —
see [`build-process.md`](build-process.md) safety rules.

Node is used only for **maintenance scripts** in `scripts/` (below), never by the site.

## Folder map

| Path | What lives there |
|---|---|
| `index.html` | Home page. Hero + tile grids per track group (Core backend path, Frontend, Other). Each tile = track name, one-line pitch, three tier links, a roadmap badge. |
| `<track>/index.html` | Track home: hero + 3 `tier-bulletin` cards with "N / N written" counts. |
| `<track>/<basic\|intermediate\|advanced>/index.html` | Tier index: `<details class="qgroup">` blocks (groups of 10) of `topic-row` list items. Planned-but-unwritten rows are muted, unlinked, tagged 📝. |
| `<track>/<tier>/N.html` | One topic page. Numbering is permanent. Template: [`content-writing.md`](content-writing.md). |
| `<track>/roadmap.html` | Whole-track plan, all tiers on one page. Two layouts exist: grouped by **tier** (csharp, oops, dotnet, webapi, efcore, sql, azure, ai, react, angular, dsa) vs. grouped by **cross-tier concept cluster** (aws, python, htmlcss, javascript). Pick per the track's `overview.md`. |
| `assets/style.css` | The one shared stylesheet. |
| `assets/site.js` | The one shared script: global search box, code-copy button, prev/next link text, tier sidebar renderer, back-button click-tagging. |
| `assets/search-index.js` | `window.SEARCH_INDEX` — one entry per written page + each tier/track index. [`search.md`](search.md) |
| `assets/nav-index.js` | `window.NAV_INDEX` — per-tier sidebar data, keyed `<track>/<tier>`. [`tier-navigation.md`](tier-navigation.md) |
| `assets/images/` | Roadmap badge icons. |
| `docs/` | All documentation (this tree). `docs/topics/` holds two **source/seed topic maps** (AI, Azure) the user supplied; they feed Phase 1 of those tracks and are not rendered on the site. |
| `scripts/` | Maintenance scripts: `check-site.js`, `add-head-meta.js`, `wire-indexes.js`, `fix-pagers.js`, `pre-commit-check.js`, hooks. [`pre-commit-docs-sync.md`](pre-commit-docs-sync.md) |
| `.claude/` | `launch.json` (local preview server) and `settings.json` (commit guard hook). |
| `.github/workflows/static.yml` | GitHub Pages deploy. |

Tracks (folder slug → name): `csharp` C#, `oops` OOP, `dotnet` .NET/ASP.NET Core, `webapi` Web API,
`efcore` EF Core, `sql` SQL, `azure`, `aws`, `react`, `angular`, `python`, `ai`, `dsa`,
`javascript`, `htmlcss`. Per-track state lives in `docs/superpowers/specs/<slug>/`.

## Anatomy of a topic page (section order, top to bottom)

`topbar` (brand + search) → `crumbbar` (colour pills) → hero (eyebrow badge, `h1`, `.interview-q`) →
`details.topic-hook` **Why it matters** (plain bullets or `.why-grid` Problem→Solution cards) →
`.recall` 🔥 Easy interview recall → `.viz-label` + `figure.diagram-card` (inline SVG
`.topic-diagram`) → `.trap` ⚠️ Common Trap → `.followup` 🔄 → `.keypoints` 🎯 Say this →
`details.explain` 📖 → `details.codebox` 💻 → optional `details.usecase` 🧭 Use Cases → prev/next.

**Head/a11y boilerplate on every page** (added by `node scripts/add-head-meta.js`, idempotent, and enforced by
`check-site.js`): font `<link>`s, `<meta name="description">` (from the page's interview question / hero text),
Open Graph basics, `theme-color`, an inline SVG favicon, a `Skip to content` link (`.skip-link`) before the header
with `id="main"` on `<main>`, the brand logo as `<img class="brand-mark" src="…/assets/images/brand-mark.svg">` (it used to be ~1.5 KB of inline SVG copied into every page — changed 2026-10-07), and `aria-hidden` on the decorative search glyphs. **After creating any new page,
run `node scripts/add-head-meta.js`** — or copy an existing page's head — otherwise `check-site.js` fails.

Body attributes: `data-root="../../"` (path back to repo root) and `data-tier-key="<track>/<tier>"`
(selects the sidebar data). **Code box is optional on conceptual cloud/architecture pages**
(AWS, Azure) — a page with nothing honest to show in code should omit it rather than invent
filler; `check-site.js` only *warns* about a missing code box.

The 14 original C# Basic pages use an older, **frozen** template (no `.interview-q`); see
[`content-writing.md`](content-writing.md). Don't "fix" them in passing. *(Update 2026-10-07: C# Basic 1–14 were migrated to the new template — the “frozen” status no longer applies.)*

## "I changed X — what else must change?" (the change → files map)

This table is also what `scripts/pre-commit-check.js` enforces. Details/why:
[`pre-commit-docs-sync.md`](pre-commit-docs-sync.md).

| Change | Must also touch |
|---|---|
| **Add a topic page** | the page itself · `assets/search-index.js` entry · `assets/nav-index.js` entry (if the tier has a sidebar) · tier `index.html` row (un-mute the 📝 row) + counts · track `index.html` "N / N written" · `<track>/roadmap.html` row + counts · root `index.html` tile text if it quotes a count · `docs/superpowers/specs/<track>/overview.md` + `roadmap.md` (status, count) · `docs/refreshyourself-overview.md` (track line + count) · `docs/superpowers/specs/README.md` · `CLAUDE.md` status line if it changes |
| **Remove / rename / renumber a page** | everything above, in reverse — numbering is permanent, so avoid; if unavoidable, fix every inbound link (`check-site.js` finds broken ones) |
| **Retitle a page** | page `<title>` + `h1` · search-index `title` · nav-index `title`/`short` · tier index row · roadmap row · crumb text |
| **Change a page's tier or 🔥/⭐/🧠 priority** | nav-index `priority` · tier index badge · roadmap row · spec `roadmap.md` · eyebrow badge on the page |
| **Start a new track** | Phase 1–6 spec folder first (`overview.md`, `question-taxonomy.md`, `roadmap.md`) · specs README table · overview.md · root tile + `roadmap.html` + search `iconFor()` in `site.js` · `scripts/check-site.js` `TRACKS` list · `CLAUDE.md` track list |
| **Edit `assets/site.js`** | the behaviour rule: `search.md` / `tier-navigation.md` / `back-navigation.md` / `link-hover.md` |
| **Edit `assets/style.css`** | the matching component rule (`visual-style.md`, `why-it-matters.md`, `use-cases.md`, `keypoints.md`, `interview-recall.md`, `common-trap.md`, `diagram-style.md`, `link-hover.md`) |
| **Add / rename a rule file** | `docs/rules/README.md` table · `docs/README.md` · `CLAUDE.md` quick list |
| **New convention decided in chat** | write it into the right rule file the same turn — never leave it only in chat |

## Branches and history

`main` is deployed. Other remote branches: `v1` (earlier snapshot of the site) and two
`claude/*-pipeline` branches created by remote sessions (their work has since been folded into
`main`; check before assuming they hold unique content). When reporting a commit, follow
[`reporting.md`](reporting.md): name the branch and short hash. Never commit/push/open a PR
unless asked that turn.

## Adding pages in bulk — the scripted workflow (used 2026-10-07 for 108 pages)

Hand-wiring each page into five places is slow and error-prone. For a batch:

1. **Plan first** (Phases 2–6): append a table to `docs/superpowers/specs/<track>/roadmap.md` — page number (next free number in the tier; never renumber), tier, priority, title, quoted interview question, scope, diagram idea, cross-links.
2. **Write the page files only** (one writer per ≤6 pages; copy the head/skeleton of a finished page of the same tier). Each writer also emits a wiring manifest JSON per page: `{track, tier, n, file, title, short(≤22 chars), tail(≤60), priority, keywords}` (+ optional `cluster` for tracks whose `roadmap.html` is grouped by concept, and a `retitles` array for renamed existing pages).
3. `node scripts/wire-indexes.js --dir <manifest-folder>` — adds the entries to `assets/nav-index.js` and `assets/search-index.js` (idempotent; applies retitles).
4. Wire the per-track HTML (`<tier>/index.html` rows + counts, `<track>/index.html` card counts, `<track>/roadmap.html` rows + counts + hero) — one agent/person per track, since the markup differs per track.
5. `node scripts/add-head-meta.js` (head/meta/skip-link boilerplate) then `node scripts/fix-pagers.js --fix` (Prev/Next links between neighbouring pages, incl. cross-tier).
6. `node scripts/check-site.js` → 0 errors; run the live-browser diagram script on every new/edited page (see `diagram-style.md`); update the docs per the table above in the same commit.

## Machine-checked consistency

`node scripts/check-site.js` validates, across all 15 tracks: every written page is in
`search-index.js`, `nav-index.js`, its tier index and `roadmap.html`; `data-root`/`data-tier-key`
are right; each page has a diagram and the core sections; every local `href`/`src` resolves;
every page carries the head/a11y boilerplate; Prev/Next pagers link the right neighbours (`fix-pagers.js`); page counts in `refreshyourself-overview.md` match disk; every rule file is indexed. It does
**not** replace the mandatory live-browser diagram verification in
[`diagram-style.md`](diagram-style.md) — that needs a rendered page.
