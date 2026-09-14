# Rule: Folder & Page Structure

Locked decisions from the working session that set this project up. Don't re-derive them.

## Folder layout

```
/index.html                     ← site home: tile grid, one tile per track
/assets/style.css                ← one shared stylesheet, used by every page
/assets/site.js                  ← one shared script: global search/autosuggest (see rules/search.md)
/assets/search-index.js        ← one entry per WRITTEN page — update it every time a page is added

/<track>/index.html              ← track home: pride blurb + 3 tier bulletins (Basic/Intermediate/Advanced)
/<track>/basic/index.html        ← tier index: FULL topic roadmap, grouped in 10s (see below)
/<track>/basic/1.html            ← topic page (numbered, matches its position in the index)
/<track>/basic/2.html
/<track>/intermediate/index.html ← same pattern
/<track>/advanced/index.html     ← same pattern
```

- `<track>` is a short lowercase slug: `csharp`, `oops`, `dotnet`, `sql`, `react`, `dsa`, etc.
- **The tier index lists the full roadmap first — written and not-yet-written topics together**
  (see the workflow note in [content-writing.md](content-writing.md)). A topic's number is its
  permanent slot in that hot-first roadmap from the moment it's *listed*, not from when it's
  *written* — so `7.html` is already "claimed" by whichever topic sits 7th on the index even
  before that file exists.
- If a genuinely new topic needs inserting mid-list (not just filling a planned slot), renumber
  the files after it so the number always matches list position — don't leave gaps or reuse a
  number for a different topic.
- A tier that isn't built yet still gets an `index.html`, but it's a short "coming soon" stub
  (see template in content-writing.md) rather than a missing link — the tier card on the track
  home page must never 404.
- **Every page that exists must have a `data-root` attribute on `<body>`** — the relative path
  back to site root (`""` at the root, `"../"` one level down, `"../../"` two levels down, etc.).
  This is what lets the shared search script find `assets/search-index.js` and build result
  links correctly from any depth. See [search.md](search.md).

## Site home (`/index.html`)

- One tile per track, all tiles the same size/shape (grid, not a list).
- A track with no content yet still gets a tile, visually muted, with a "Coming soon" ribbon.
- **Tile header = `.tile-head`, a link to that track's `index.html`: a plain emoji icon + a
  visible `<span class="tname">` name, always.** See [visual-style.md](visual-style.md) — no
  hand-drawn brand logos, plain emoji only, same pattern for every track including C#.
- **Tile body = one short description line, then `.tile-tiers` — direct Basic / Intermediate /
  Advanced links, one click from the home page** (no detour through the track page first). A
  tier is `<a class="ttier">` (enabled, colour-coded) once it has at least one *written* topic;
  otherwise it's `<span class="ttier">` (muted, no link) — flip it the moment that tier's first
  page goes live, same trigger as everywhere else in this project.

## Track home (`/<track>/index.html`)

- Three tier cards: Basic, Intermediate, Advanced — always in that order, always all three
  visible even if two are still "coming soon".
- Each tier card shows: tier name, one-line description of what "Basic/Intermediate/Advanced"
  means for *this* track specifically (not a generic label), and how many topics are inside.

## Tier index (`/<track>/<tier>/index.html`)

- Lists **every planned topic for that tier, written or not** — see the workflow note in
  [content-writing.md](content-writing.md). Real tiers run long (Basic can easily be 50-60
  topics, Advanced 100+) — the list is the full roadmap, not just what's done.
- **Hot topics first, normal topics after**, across the whole tier — see
  [content-writing.md](content-writing.md) for what counts as hot.
- Each row: number, title, a badge (🔥 Hot / Normal / 📝 Coming soon). A written topic's title
  links to its numbered page; a planned-but-unwritten topic's title is plain text, no link.
- **Grouped in tens** — every 10 topics (written + planned together) sit inside one collapsible
  `<details class="qgroup">` block, labelled by range (e.g. "Questions 1–10"). The first group is
  `open` by default; every later group starts closed. This is what keeps a 60-topic tier
  scannable instead of one giant page-long list.
- This page is the "menu" — it does not contain any explanation itself, just the ordered,
  grouped list.

## Topic page (`/<track>/<tier>/<n>.html`)

- Exactly one topic. Never combine two topics on one page, even short ones — the note that set
  this project up is explicit that each page must contain only its own related topic.
- Follows the fixed template in [content-writing.md](content-writing.md): breadcrumb → title →
  diagram → simple explanation → key points box → prev/next links back to the tier index.

## Adding a brand-new track

1. Add the tile to `/index.html`.
2. Create `/<track>/index.html` with all three tier cards (stub the tiers not built yet).
3. Create `/<track>/basic/index.html` (even if empty for now, list it as "coming soon").
4. Update the status table in [`docs/README.md`](../README.md).
