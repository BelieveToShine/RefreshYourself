# Rule: Global Search

Every page has a search box in the top bar that can jump to any written page on the whole site —
from a C# page straight to a SQL page, no matter where you start. This is one shared mechanism,
not a per-page feature — read this before touching `assets/site.js` or adding a page.

## How it works

- `assets/search-index.js` sets one global, `window.SEARCH_INDEX` — a flat array of every
  **written** page: `{ title, track, tier, path, keywords }`. `path` is relative to the site
  root, no leading slash (e.g. `"csharp/basic/1.html"`).
- Every page loads it as a plain `<script src="{root}assets/search-index.js"></script>`,
  **before** `assets/site.js`. **Not `fetch()`** — `fetch()`/XHR on a bare `file://` page is
  blocked by the browser's CORS rules, which broke search the first time this was built (typing
  anything always returned "no results" when the page was opened directly from disk). A plain
  `<script src>` isn't subject to that restriction, so this works identically whether the page
  is opened from disk or hosted on GitHub Pages.
- `assets/site.js` reads `document.body.dataset.root` (see
  [content-structure.md](content-structure.md)) to know how far back "site root" is from the
  current page, and filters `window.SEARCH_INDEX` as the user types.
- Matching is substring scoring, and **the query can match anywhere in the word — start, middle,
  or end** (title contains it anywhere > track/tier name contains it > a keyword starts with it
  > a keyword contains it anywhere) — good enough to "find and suggest the relevant page," not
  meant to be a full search engine.
- Arrow keys move the highlighted suggestion, Enter goes to the highlighted (or first) result,
  clicking a result navigates there, Escape clears it.

## The one rule that keeps this working

**Every time a topic page (or any new page) is actually written, add one entry to
`assets/search-index.js`.** Not when it's *planned* on a tier index — only once the file exists
and has real content, so search never sends someone to a page that doesn't exist yet. Include a
few real keywords (the terms someone would actually type, not just a repeat of the title) so the
"find the relevant page from anywhere" promise holds up.

## Adding the scripts to a new page

Every page needs both tags, in this order, right before `</body>`:
```html
<script src="{root}assets/search-index.js"></script>
<script src="{root}assets/site.js"></script>
```
(`{root}` = that page's `data-root` value, e.g. `../../`.)
