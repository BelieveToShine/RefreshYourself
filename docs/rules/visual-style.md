# Rule: Typography & Highlighting

Locked decisions from the working session. The site has to feel inviting, not like plain
documentation — this is what makes that happen.

## Fonts (all loaded once in `assets/style.css`, don't add more)

- **Baloo 2** (700/800) — big, playful, display font. Used for the brand logo and every `.hero
  h1` (site home title, track title, tier title, topic title). This is the font doing the "make
  me want to read this" work.
- **Poppins** (600–800) — clean structural headings: card titles (`h3` in tiles/tier cards),
  `explain h2` subheadings inside a topic page, topic-list link titles.
- **Lexend** (400–700) — body copy. Chosen specifically because it's designed for reading ease,
  not just because it looks nice.
- **Fira Code** (500) — anything code-like or label-like: `<code>`, badges, the eyebrow line,
  file-number circles.

Don't introduce a fifth font. If a new page type needs a heading style that doesn't fit these
four roles, it's a sign to reuse one of the existing roles, not add another import.

## Highlighter spans — colour key terms, don't just bold them

Wrap the one or two words per heading/sentence that matter most in `<span class="hl hl-*">`
(defined in `assets/style.css`) instead of plain `<b>`. It renders like a marker-highlighted
word — colour behind the text, not just bold.

- `.hl-blue` — the "main"/value-type/first thing being compared.
- `.hl-inter` (amber) — the "other side"/reference-type/second thing being compared.
- `.hl-hot` (red) — hot topics, warnings, "this is the tricky part."
- `.hl-basic` (green) — correct/kept/the right answer.
- `.hl-teal` — used sparingly for a third contrasting idea when a topic needs more than two.
- `.hl-adv` (purple) — reserved for Advanced-tier topics later.

**Tie the highlight colour to the diagram's colour**, when the topic page has a diagram — e.g. on
"Value vs. Reference Types," the diagram's blue box and the text's `hl-blue` span both mean
"value type." That repetition across picture and text is what makes the page memorable, not
decorative colour for its own sake. Pick colours by *meaning*, the same way the diagram-style
rules do — see [diagram-style.md](diagram-style.md).

Use highlights **sparingly** — one or two per heading, a handful per page. If every sentence has
three highlighted words, nothing stands out and it looks noisy instead of inviting.

## Eyebrow badge (top of every `.hero`)

The small label above every `h1` (e.g. "🔥 C# · Basic · Hot") is a **coloured pill**, not plain
uppercase text — set `--eyebrow-bg` / `--eyebrow-ink` inline on the `.eyebrow` element to match
the topic: hot topics get the red pair (`#fee2e2` / `#b91c1c`), normal topics use the default
accent pair (no override needed). Lead the pill with the emoji that matches (🔥 for hot).

## Logos

- **Brand mark** — a small two-tone "refresh" loop icon (inline SVG, ~24px) sits next to the
  "RefreshYourself" wordmark in the top bar on every page. Same markup, copy-pasted per page (no
  separate icon file, same reasoning as [diagram-style.md](diagram-style.md) — a page should
  render correctly on its own).
- **Track logos** — where a track has a real, recognizable brand mark (C#'s purple hexagon, and
  later .NET, SQL, React icons), hand-draw a close SVG approximation in the same house style as
  the diagrams (flat shapes, no photographic/bitmap logo assets, no external image fetch) rather
  than a generic emoji. Use it on: that track's home-page tile, and the top of that track's home
  page (`.hero .hero-top`). Tracks with no standard logo (OOP's, DSA) keep a fitting emoji —
  don't invent a fake brand mark for a concept that doesn't have one.
- Keep logos **small and consistent in size** across every place they appear (tile icon size vs.
  track-hero size are the only two sizes — see `.tile .icon` / `.tech-logo` in
  `assets/style.css`); a logo that changes proportions from page to page looks unfinished.

## Key point cards get the same treatment as everything else

The "Say this in the interview" cards (`.keypoints`) are the payoff of the page — give them a
touch more visual weight than plain body text: a soft gradient background on the box itself, a
white card per point with its own border, and the `.hl` highlight on the one keyword the bullet
is actually testing. See [content-writing.md](content-writing.md) for what the bullet text itself
should say.
