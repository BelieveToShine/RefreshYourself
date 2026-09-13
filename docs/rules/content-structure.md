# Rule: Folder & Page Structure

Locked decisions from the working session that set this project up. Don't re-derive them.

## Folder layout

```
/index.html                     ← site home: tile grid, one tile per track
/assets/style.css                ← one shared stylesheet, used by every page
/assets/site.js                  ← one shared script (mobile nav toggle only)

/<track>/index.html              ← track home: intro + 3 tier cards (Basic/Intermediate/Advanced)
/<track>/basic/index.html        ← tier index: ordered topic list (hot topics first)
/<track>/basic/1.html            ← topic page (numbered, matches its position in the index)
/<track>/basic/2.html
/<track>/intermediate/index.html ← same pattern
/<track>/advanced/index.html     ← same pattern
```

- `<track>` is a short lowercase slug: `csharp`, `oops`, `dotnet`, `sql`, `react`, `dsa`, etc.
- Topic pages are numbered starting at `1.html` **in the order they appear on the tier index
  page** — hot topics get the low numbers because hot topics come first (see
  [content-writing.md](content-writing.md)). If a topic is inserted later in the middle of the
  list, renumber the files so the number always matches list position — don't leave gaps or
  reuse a number for a different topic.
- A tier that isn't built yet still gets an `index.html`, but it's a short "coming soon" stub
  (see template in content-writing.md) rather than a missing link — the tier card on the track
  home page must never 404.

## Site home (`/index.html`)

- One tile per track, all tiles the same size/shape (grid, not a list).
- A track with no content yet still gets a tile, visually muted, with a "Coming soon" ribbon —
  it links to the track's `index.html`, which explains what's coming rather than 404ing.
- Every tile: track name + one-line description + which tiers are ready (e.g. "Basic ready ·
  Intermediate & Advanced coming").

## Track home (`/<track>/index.html`)

- Three tier cards: Basic, Intermediate, Advanced — always in that order, always all three
  visible even if two are still "coming soon".
- Each tier card shows: tier name, one-line description of what "Basic/Intermediate/Advanced"
  means for *this* track specifically (not a generic label), and how many topics are inside.

## Tier index (`/<track>/<tier>/index.html`)

- A numbered list of topics, **hot topics first, normal topics after** — see
  [content-writing.md](content-writing.md) for what counts as hot.
- Each row: number, topic title, a 🔥 Hot / Normal badge, links to its numbered topic page.
- This page is the "menu" — it does not contain any explanation itself, just the ordered list.

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
