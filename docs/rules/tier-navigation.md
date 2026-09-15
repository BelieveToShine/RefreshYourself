# Rule: Tier Side Navigation (topic-to-topic left menu)

Shipped feature (not a prototype) — live on all 14 `csharp/basic` pages. Read this fully
before wiring it up for a new tier (e.g. Azure Basic) — it explains three real bugs that were
found and fixed while building it, and the pattern that avoids them.

## What it is, and why

A persistent left sidebar on every **topic page** (never on a tier's `index.html` — that page
is already the full menu, see [content-structure.md](content-structure.md)), W3Schools-style:
every topic in the current track+tier, in order, grouped the same way the tier index groups
them ("Questions 1–10" / "11–14" / …), with the current page highlighted. Requested so a reader
can jump topic-to-topic without going back to the index every time.

- **Desktop only.** Below `960px` it's hidden entirely (`style.css`, `@media (max-width:960px)`
  under the `.tier-nav` rules) — the existing sticky bottom `.fixed-pager` (see
  [content-structure.md](content-structure.md)) is the mobile equivalent. They are two
  independent mechanisms reading two different sources (`.fixed-pager` reads the page's own
  `.pager` block; `.tier-nav` reads `assets/nav-index.js`) — not a fallback of one another, so
  a new topic must stay correct in both `.pager` (per-page, hand-written) and `nav-index.js`
  (per-tier, shared).
- **Short label in the row, full title on hover.** The row shows a short label (e.g. "Access
  Modifiers", "ref/out/in") so a 14–60 item list stays scannable in a ~230px rail. Hovering (or
  focusing) a row expands the full precise title + tail description inline, underneath the
  short label, inside the row's own box.

## Architecture: zero sidebar markup on any page, ever

This mirrors the `.fixed-pager` pattern already established for the bottom bar: **the HTML
page never contains the sidebar's markup.** It is built entirely by a script, from a shared
data file. A topic page only carries two small pieces of wiring:

1. `data-tier-key="<track-folder>/<tier-folder>"` on `<body>`, alongside the existing
   `data-root` attribute — e.g. `<body data-root="../../" data-tier-key="csharp/basic">`.
2. `<script src="../../assets/nav-index.js"></script>`, placed **before** the `site.js`
   include and **after** `search-index.js` (load order matters — `site.js` reads
   `window.NAV_INDEX` at the moment it runs).

That's it. If you ever find yourself hand-writing an `<aside class="tier-nav">` block into a
page's HTML, stop — it means step 1 or 2 above is missing, not that the sidebar needs its own
markup. (An earlier draft of this feature *did* hand-write the block once, directly in
`csharp/basic/3.html`, to get a fast visual approved. It was deliberately thrown away and
rebuilt as the data-driven version below the moment the design was approved — so there is
exactly one implementation, not a hand-written prototype plus a "real" version drifting apart.)

The actual builder is the last IIFE in `assets/site.js` (search for `data-tier-key`). On a
matching page it:
- reads `window.NAV_INDEX[tierKey]`,
- bails out silently if the tier key or the data isn't found, or if the page has no `.pager`
  (this is what keeps it off tier `index.html` pages even if one ever picked up the attribute
  by accident),
- wraps everything already inside `<main class="wrap">` into a new `<div class="tn-topicbody">`,
- builds and prepends `<aside class="tier-nav">` from the data,
- adds `has-tier-nav` to `<body>` (this is what flips `main.wrap` into the two-column flex
  layout in `style.css`).

## The data file — `assets/nav-index.js`

One entry per **written** tier, keyed exactly `"<track-folder>/<tier-folder>"` (matches each
page's `data-tier-key`). Shape:

```js
window.NAV_INDEX = {
  "csharp/basic": {
    track: "C#",            // shown in the small header pill
    trackIcon: "🎵",         // same icon used elsewhere for this track
    tier: "Basic",
    groups: [
      {
        label: "Questions 1–10",   // must match the tier index's own group label
        hot: 8,                     // optional — number of hot items in this group; omit if 0
        items: [
          { n: 1, file: "1.html", short: "Value vs. Reference",
            title: "Value Types vs. Reference Types",
            tail: "what's actually being copied?", hot: true },
          // ...
        ]
      },
      { label: "Questions 11–14", items: [ /* hot omitted — no hot items in this group */ ] }
    ]
  }
};
```

- **Groups must mirror the tier index's own "grouped in tens" boundaries exactly** — same
  label text, same items in the same order. This is a second, hand-maintained copy of that
  ordering (not generated from the tier index HTML), so **whenever a topic is added, renamed,
  reordered, or its hot/normal status flips on the tier index, update the matching entry here
  in the same edit** — same discipline as updating `search-index.js` when a page is added.
- `short` — keep it short enough to read on one line in a ~180px column before CSS
  `text-overflow:ellipsis` kicks in (roughly 20–24 characters is safe). It doesn't need to be
  the full title — the full `title` + `tail` are always one hover away.
- `title` / `tail` — copy verbatim from that topic's own hero `<h1>` / the tier index's
  `<strong>`/`.ttail` split, so the hover-expand never says something subtly different from
  the page it points to.
- `hot` on an item drives the small 🔥 dot; `hot` on a group drives the group header's count
  badge. Both are optional — omit rather than writing `false`/`0`.

## Real bugs found while building this — the parts that aren't obvious

These three cost real iteration time. Do not re-introduce them.

1. **Active-page matching must tolerate a missing `.html` extension.** Some static hosts (and
   this project's own dev-preview server, `npx serve`) rewrite URLs to strip `.html`, so
   `location.pathname` can be `/csharp/basic/14` even though the file is `14.html`. Comparing
   `item.file === currentFile` with a plain `===` silently matches *nothing*, so no row ever
   highlights, and it is very easy to eyeball one screenshot, see a highlighted row (from a
   stale hand-written prototype, or luck), and ship the bug. Always compare through a helper
   that accepts both forms — see `isCurrent()` in `site.js`. Verify by checking a page whose
   number isn't in the first group (11–14, not 1–10) — that's the case that actually exposes it.
2. **The group containing the active item must force-open, not just the first group.** Only
   auto-opening group 1 by default means a reader on topic 14 sees a collapsed "Questions
   11–14" group with no visible indication of where they are — they have to manually expand it
   to see their own highlighted row. The builder open-flags a group when `isFirst` **or** when
   any of its items `isCurrent()`.
3. **The hover-detail must expand *inside* the row, never float beside it.** The first version
   put the full title in an absolutely-positioned tooltip to the right of the sidebar
   (`left:100%`). It never became visible, even though its computed `opacity` was correctly
   `1` on hover — because `.tier-nav` has `overflow-y:auto` (needed for long tiers), and
   `overflow-y:auto` implicitly clips the *other* axis too, silently eating anything that tries
   to escape the container sideways. The fix was to make the detail text expand **downward**,
   inside the row's own box (`max-height`/`opacity` transition on a block child), so it can
   never be clipped by the container it lives in. Never add an absolutely- or fixed-positioned
   child meant to be visible while hovering something inside `.tier-nav` — expand in place
   instead.

There's a fourth thing worth knowing but not a bug: item text is inserted via `innerHTML`
through an `esc()` helper (escapes `&`, `<`, `>`) because titles can contain literal
angle brackets (`Array vs. List<T>`). `assets/search-index.js`'s own dropdown has this exact
unescaped-title problem already (it inserts `item.title` raw) — don't copy that pattern here;
always route new text through `esc()` before it goes into an HTML string.

## Visual design (approved)

- Header shows two small pills, colored **the same as the breadcrumb bar's own inline styles**
  for that track/tier (e.g. C# blue `#dbeafe`/`#1d4ed8`, Basic green `#dcfce7`/`#15803d`) — this
  is what ties the sidebar back into the rest of the page instead of feeling like a bolted-on
  widget. Reuse the same color per track/tier that the breadcrumb already uses; don't invent a
  new palette per sidebar.
- Topic numbers are small circular badges, not plain digits (`.tn-num`).
- Rows are full rounded pills on hover/active (`.tn-item a`), not a flat left border — active
  fills with `var(--accent-bg)` and inverts the number badge to solid `var(--accent)`.
- The hot flag is a small, slightly muted 🔥 (`.tn-dot`), not full-size/full-opacity, so it
  doesn't compete with the active/hover state.

## Group expand/collapse state persists per tier, and is never auto-overridden

Which groups are open is remembered in `sessionStorage` under `tn-open:<tierKey>` (e.g.
`tn-open:csharp/basic`), so navigating between topic pages never resets a group the reader
opened or closed by hand. This came from real feedback: the initial version force-opened
"whichever group contains the active page" on every load, which silently collapsed a group the
reader had manually opened the moment they clicked into a different group's topic.

The rule now is: **selecting a menu item (navigating) never changes which groups are open —
only manually toggling a group's `<summary>` does, and that toggle is saved immediately.**
Concretely:
- Before the reader has toggled anything in a tier this session, there's nothing in storage
  yet, so a sensible default applies per page: the first group is open, and so is whichever
  group holds the current page.
- The instant they toggle any group open/closed, the open/closed state of *every* group in
  that tier is saved to `sessionStorage` in one shot (`saveState()` in the builder IIFE) and
  reused verbatim on every later page in that tier — the "open the active item's group"
  default stops applying entirely from that point on, even if it would hide the active page
  inside a collapsed group. That's intentional: the reader's own choice wins.
- The storage key is `tierKey` itself (`"csharp/basic"`, `"azure/basic"`, …), so two tiers —
  or two tracks — never share or override each other's remembered state. This falls out of the
  existing per-tier `data-tier-key` wiring with **no extra work needed** when a new tier is
  added; don't add any tier-specific logic for this.
- `sessionStorage` (not `localStorage`) is deliberate — "session" here means the current
  browser tab's lifetime, matching how the reader actually works through a tier in one sitting.

## Adding this to a new tier (e.g. Azure Basic)

1. Add a new top-level entry to `assets/nav-index.js`, keyed `"azure/basic"` — copy the group
   labels, order, titles, tails, and hot flags straight from `azure/basic/index.html`'s own
   topic-list rows (same source data as that page, just re-shaped for the sidebar builder).
2. On every written topic page in that tier, add `data-tier-key="azure/basic"` to `<body>` and
   add the `nav-index.js` `<script src>` line (see **Architecture** above for exact placement).
   Two lines per page, nothing else.
3. Do not touch `style.css` or `site.js` — the CSS and the builder IIFE are already fully
   generic across tracks/tiers; only the data file and the two per-page attributes change.
4. Verify like the C# rollout did: open the first topic (no Prev), a middle one, and the last
   one (no Next) at desktop width — confirm the right row highlights and its group is open;
   confirm the sidebar disappears below 960px and the existing `.fixed-pager` still works there.
