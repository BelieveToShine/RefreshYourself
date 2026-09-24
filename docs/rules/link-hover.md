# Rule: Link Hover — Animated Underline, Never the Browser Default

Added 2026-09-24, after direct feedback that plain text links (breadcrumbs, the brand/logo link,
pager text links, in-paragraph cross-links) showed the browser's static, instant
`text-decoration: underline` on hover — it looked dated next to the rest of the site's
interaction polish (lift+shadow on tiles, brightness dimming on pills, smooth color transitions
everywhere else).

## The rule

**A plain inline text link never shows the browser's default instant underline.** It gets an
animated underline-reveal instead — a `::after` bar that grows from `scaleX(0)` to `scaleX(1)`
on hover over `.18s`, so the underline visibly sweeps in rather than snapping on. This is now the
**global default** for every `<a>` in `assets/style.css`:

```css
a{ color:var(--accent-ink); text-decoration:none; position:relative; }
a::after{
  content:''; position:absolute; left:0; bottom:-2px; width:100%; height:1.5px;
  background:currentColor; transform:scaleX(0); transform-origin:left;
  transition:transform .18s ease; pointer-events:none;
}
a:hover::after{ transform:scaleX(1); }
```

`background:currentColor` means the underline always matches whatever color that specific link
already renders in — no per-page color to maintain, and it automatically matches this site's own
palette (accent-ink by default, or whatever a more specific rule sets `color` to) rather than a
hardcoded value.

**Writing a new plain text link needs zero extra markup or CSS** — any `<a>` without a more
specific class already gets this treatment automatically, including in-paragraph cross-links
(e.g. the SQL track's `<a href="2.html">CTE</a>` links inside prose) and the pager's Prev/Next/
Back-to-index text links.

## Whole-card / tile / pill / button anchors are a separate case — never an underline

A tile, a breadcrumb pill, a badge, a full nav row — anything that's already a **whole clickable
shape** (background, border, padding) gets its own hover treatment (lift+shadow, brightness dim,
background fill, border-color change) and must **never** also show an underline. Every one of
these opts out of the global `::after` explicitly, by name, in `assets/style.css` right after the
base rule:

```css
.crumb::after, .crumb-back::after, .tile-head::after, .roadmap-badge::after,
.hero-roadmap-link::after, .ttier::after, .tier-bulletin::after, .tn-item a::after,
.fixed-pager .fp-side::after, .fixed-pager .fp-mid::after{
  content:none;
}
```

**When adding a new chip/tile/pill/button-style anchor, add it to this exclusion list too** —
the global `a::after` rule applies to every anchor by default, so a new card-style link that
isn't added here will silently grow an underline bar across its whole clickable area on hover,
on top of whatever lift/color treatment it already has.

One existing exception worth knowing about, not fixing: `a.crumb:hover` and a few others
(`.crumb-back:hover`, `.hero-roadmap-link:hover`, `.roadmap-badge:hover`, `a.ttier:hover`,
`a.tier-bulletin:hover`) still carry their own `text-decoration:none` from before this rule
existed — harmless (the global rule already sets `text-decoration:none` everywhere), left as-is
rather than churned for no visible difference.

## What counts as "plain inline text link" vs. "whole clickable shape"

Ask: does the element already have its own background/border/padding that makes it read as a
button or card, independent of the text inside it? If yes, it's a whole clickable shape — add it
to the exclusion list, give it a lift/brightness/background hover instead. If the link is just
colored text sitting in a sentence, a list row, or a nav row (even if that row has its own card
styling applied to a *different, non-anchor* element around it), it's a plain text link — let the
global rule handle it, add nothing.

`.topic-row a` is the case to keep in mind here: `.topic-row` itself is a card-styled row
(background, border, shadow), but the `<a>` inside it wraps only the title text, not the row's
`.num` circle or `.badge` pill — so the anchor is still a plain text link and correctly gets the
underline-reveal, even though it visually sits inside a card-like container.

## Verification

Any change here must be confirmed by actually rendering the page and hovering the element — a
hover effect that hasn't been visually confirmed (screenshot the `:hover` state, not just the
resting state) is not confirmed. Check at minimum: a breadcrumb pill (no underline, brightness
dim only), the brand/logo link (underline reveal), a tile's `.tile-head` link (no underline, the
tile's own lift+shadow only), a `.topic-row` title link (underline reveal), a pager Prev/Next
link (underline reveal), and an in-paragraph cross-link if the track has one (underline reveal).
