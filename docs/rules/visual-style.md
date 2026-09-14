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

## Tier colour is fixed — Basic green, Intermediate amber, Advanced purple

Every place a tier shows up with its own colour — the tier-bulletins on a track home page, the
`.ttier` pills on a home-page tile, the `.tier-bulletin` border, badges — uses the **same three
colours** (`--basic`/`--basic-bg` green, `--inter`/`--inter-bg` amber, `--adv`/`--adv-bg`
purple), never the track's own brand colour. A real bug from this project: the home-page tile's
"Basic" pill was rendered in the track's purple brand colour instead of tier-green, because it
inherited `--tile-color` — fixed by giving `.ttier` its own `.basic`/`.inter`/`.adv` modifier
classes instead. The point of fixed tier colour is that "Basic" reads as Basic at a glance no
matter which track's page you're on.

## Eyebrow badge (top of every `.hero`)

The small label above every `h1` (e.g. "🔥 C# · Basic · Hot") is a **coloured pill**, not plain
uppercase text — set `--eyebrow-bg` / `--eyebrow-ink` inline on the `.eyebrow` element to match
the topic: hot topics get the red pair (`#fee2e2` / `#b91c1c`), normal topics use the default
accent pair (no override needed). Lead the pill with the emoji that matches (🔥 for hot).

## Icon + visible name, always — every track, every place

Every track header (home-page tile, track-page hero) is **icon + a visible text name next to
it**, same pattern whether the icon is a generic emoji or a real logo that happens to already
contain the letters (the C# hexagon has "C#" drawn into it, and it still sits next to a visible
"C#" name). This was tried the other way — hiding the name with `.sr-only` when the logo already
"said" it — and it made the page confusing rather than clean: a small icon alone, with no visible
label, isn't obviously readable at tile size, and the page stopped explaining what it was. Keep
`.sr-only` in the toolkit for genuine accessibility-only text, but don't reach for it just
because an icon and a label happen to share the same word — that pairing is a normal icon+
wordmark lockup, not a duplication bug.

## Logos — plain emoji only, no hand-drawn brand marks

- **Brand mark** — a small two-tone "refresh" loop icon (inline SVG, ~24px) sits next to the
  "RefreshYourself" wordmark in the top bar on every page. Same markup, copy-pasted per page (no
  separate icon file, same reasoning as [diagram-style.md](diagram-style.md) — a page should
  render correctly on its own). This is the one place a custom-drawn mark belongs.
- **Every track icon is a real emoji — C# included. Never a bare Unicode symbol/script
  character**, even a meaningful one — a hand-drawn hexagon logo, a plain diamond (🔷), a musical
  sharp sign (♯), and a Tamil character (ஃ) were all tried for C# and reverted in turn. The
  common failure with the last two: a symbol/script character isn't guaranteed a glyph on every
  system the way an emoji is (backed by a real emoji font everywhere), so it can render as the
  wrong size, misaligned against the text next to it, or a broken/missing-glyph box. **C# now
  uses 🎵** — a real emoji, colourful and consistent everywhere, and a genuine nod to where the
  name "C#" comes from (the musical note). Every other track already follows this: OOP's 🧩,
  .NET Framework 🧱, SQL 🗄️, React ⚛️, DSA 🧠. Stick to real emoji for any future track icon.
- Icon + visible name always travel together (see the section above) — the icon is never asked
  to carry the name on its own.

## Key point cards get the same treatment as everything else

The "Say this in the interview" cards (`.keypoints`) are the payoff of the page — give them a
touch more visual weight than plain body text: a soft gradient background on the box itself, a
white card per point with its own border, and the `.hl` highlight on the one keyword the bullet
is actually testing. See [content-writing.md](content-writing.md) for what the bullet text itself
should say.
