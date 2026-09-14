# Rule: Global Search

Every page has a search box in the top bar that can jump to any written page on the whole site —
from a C# page straight to a SQL page, no matter where you start. This is one shared mechanism,
not a per-page feature — read this before touching `assets/site.js` or adding a page.

## How it works

- `assets/search-index.json` is a flat array of every **written** page: `{ title, track, tier,
  path, keywords }`. `path` is relative to the site root, no leading slash (e.g.
  `"csharp/basic/1.html"`).
- `assets/site.js` reads `document.body.dataset.root` (see [content-structure.md](content-structure.md))
  to know how far back "site root" is from the current page, fetches
  `${root}assets/search-index.json`, and filters it as the user types.
- Matching is simple substring scoring (title starts-with > title contains > track/tier
  starts-with > a keyword starts-with > any substring match anywhere) — good enough to "find and
  suggest the relevant page," not meant to be a full search engine.
- Arrow keys move the highlighted suggestion, Enter goes to the highlighted (or first) result,
  clicking a result navigates there, Escape clears it.

## The one rule that keeps this working

**Every time a topic page (or any new page) is actually written, add one entry to
`assets/search-index.json`.** Not when it's *planned* on a tier index — only once the file
exists and has real content, so search never sends someone to a page that doesn't exist yet.
Include a few real keywords (the terms someone would actually type, not just a repeat of the
title) so the "find the relevant page from anywhere" promise holds up.

## Known limitation

Search needs a real HTTP(S) origin — `fetch()` on a bare `file://` page is blocked by the
browser. It works on GitHub Pages (or any local static server) but not when someone just
double-clicks an HTML file on disk. That's an accepted tradeoff, not a bug to chase.
