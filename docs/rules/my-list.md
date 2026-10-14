# Rule: "My List" — the personal save list

Added 2026-10-14. Read this before touching anything under the `ml-`/`mylist-` prefix in
`assets/site.js`, `assets/style.css`, `assets/mylist.js`, or `mylist.html`.

## What it is

A client-side-only "save for later" list. No account, no server, no sync — one `localStorage`
key (`ry-mylist`) in the reader's own browser. A reader stars a question from wherever they find
it; it shows up grouped by track on [`mylist.html`](../../mylist.html); they can unstar it from
either place, anytime.

## Storage shape

```js
localStorage["ry-mylist"] = {
  "<data-tier-key>/<file, no .html>": {
    path: "<data-tier-key>/<file>.html",  // root-relative, works from index.html and mylist.html alike
    title: "...",                         // from the matching nav-index.js item
    tail: "...",
    track: "...",                         // e.g. "C#" — matches NAV_INDEX[tierKey].track
    trackIcon: "...",                     // e.g. "🎵"
    tier: "...",                          // e.g. "Basic"
    priority: "🔥" | "⭐" | "🧠" | "",
    addedAt: 1700000000000                // Date.now(), used to sort newest-first on mylist.html
  },
  ...
}
```

The key is deliberately the same `"<tierKey>/<file>"` shape the visited-tracking feature
(`docs/rules/tier-navigation.md`) already uses — both features read `data-tier-key` off `<body>`
and need nothing else per-page.

## Where the toggle appears (assets/site.js, one IIFE, after the visited-tracking one)

Everything is sourced from `window.NAV_INDEX[tierKey]` — **not** scraped from the DOM — so a page
needs exactly the same two things the tier-nav sidebar already requires: `data-tier-key` on
`<body>`, and the three script tags in order (`search-index.js`, `nav-index.js`, `site.js`). That
is why tier `index.html` pages needed two one-time catch-ups before this could work there at all
(`scripts/add-tier-key-to-index.js` for the attribute, `scripts/add-navindex-script-to-index.js`
for the missing `<script>` tag) — neither had been necessary before this feature existed.

1. **A topic page's own hero** (anywhere `.pager` exists): one `.ml-herobtn`, label
   `⭐ Add to My List` / `✓ In My List — remove`, appended to `.hero`.
2. **Every `.topic-row`** (a tier's `index.html`): a small `.ml-rowbtn` (☆/★), inserted *before*
   that row's `.badge` so flex layout reserves room — no CSS position tricks needed there.
3. **Every `.tn-item`** (the tier-nav sidebar, built by the IIFE above this one): a small
   `.ml-rowbtn`, but there's no `.badge` sibling to insert before — it's absolutely positioned in
   a right-side gutter that `.tn-item:has(.ml-rowbtn) a{ padding-right:34px }` reserves on that
   row's own link, so it never collides with `.tn-dot` (the priority emoji, which already sits at
   that row's own right edge). If you ever change `.tn-item a`'s padding or `.tn-dot`'s position,
   re-check this by actually rendering a sidebar row at real width, not by reading the CSS.

All three read the same `localStorage` entry at paint time and toggle it on click — clicking any
one of them updates `localStorage` immediately; the other two only repaint on their own next page
load (there's no cross-tab/cross-component live sync, deliberately — this is a lightweight
personal list, not real-time state).

## mylist.html

Static shell + `assets/mylist.js`, which renders the **entire** page body from `localStorage` on
load — no server-rendered content to go stale, no build step. Grouped by `track` in the same
fixed display order the homepage tile grid and `scripts/build-quickstart.js` use (so a track with
saved items always lands in the same relative position), using the exact same `.roadmap-tier`/
`.topic-list`/`.topic-row` components `quickstart.html` and `scenarios/index.html` already
established — see the "Adding this to a new tier" pattern in those for why reusing an existing
component is preferred over inventing a new one.

Each row gets a `.mylist-remove` button (own click handler on `#mylist-body`, event-delegated —
rows are re-rendered wholesale on every change, so individual listeners would leak). No "clear
all" button — removal is deliberately one-at-a-time, per the user's own framing of the feature
("once completed their list they can remove and add anything later").

Empty state (`.mylist-empty`) shows when `Object.keys(list).length === 0` — points back to
`quickstart.html` and `index.html` rather than leaving a reader stuck on a blank page.

## The homepage tile

`index.html`'s "Other tracks" section, right after AI. Unlike every other tile it has no
roadmap-badge (My List has no roadmap) and no Basic/Intermediate/Advanced tier pills — just one
`.ttier.mylist` pill holding a live `.mylist-count` span, filled in by a tiny IIFE in
`assets/site.js` that reads `localStorage` directly on `index.html` load (`"N saved"`, or `"1
saved"` singular). It's cosmetic only — the real count always lives in `localStorage`, this just
keeps the tile honest without a page reload.

## Extending this

- **A new track**: nothing to do, as long as that track's tier pages already have
  `data-tier-key` + the three script tags (every track does, by Phase 7's own build-process.md
  checklist) — My List picks it up automatically via `window.NAV_INDEX`.
- **Changing what's stored per entry**: update `entryFor()` in the site.js IIFE *and*
  `assets/mylist.js`'s rendering — they don't share code (one runs on every page, the other only
  on `mylist.html`), so a field added to one silently does nothing on the other unless you check
  both.
