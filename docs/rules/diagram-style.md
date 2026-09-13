# Rule: Topic Diagrams

How to draw the diagram(s) on a topic page. Same visual language as the LeadHunter architecture
diagrams (hand-authored SVG, colour-coded zones, drawn icons, orthogonal connectors) — scoped
down to one small concept instead of a whole system.

## Inline, not a separate file — this is non-negotiable

- The diagram is **`<svg>...</svg>` markup written directly inside the topic page's HTML**, in
  the exact spot where that part of the concept is being explained.
- **Never** save a diagram as its own `.svg` file and pull it in with `<img src="...">` or an
  `<object>`/`<use>` reference. If the topic page is opened on its own with no other files
  around, the diagram must still be there.
- If a topic has more than one distinct part (e.g. "boxing" and "unboxing"), it's fine to have
  two small inline diagrams, each sitting right next to the text for *that* part — don't force
  everything into one crowded picture, and don't stack every diagram at the top of the page away
  from the text it belongs to.

## Size and scope

- **Small and crisp** — 2 to 5 boxes/zones per diagram, `viewBox` roughly `640×220` to `640×320`.
  This is a brush-up picture for one idea, not a system architecture diagram.
- The diagram alone should be enough to recall the concept without reading the paragraph next to
  it — that's the whole point of it being there.
- If a concept needs more than ~5 boxes to show clearly, it's a sign to split it into two smaller
  diagrams rather than draw one big one.

## Visual language (reuse across every topic page for a consistent feel)

- **Rounded cards**: `rx="12"`–`16`, soft drop-shadow via a reusable `<filter>` (see the snippet
  below), 1.5–2px stroke.
- **One or two colour families per diagram**, from the fixed set below — pick by what the boxes
  *mean*, keep the same colour meaning the same way across the whole site:
  - **Blue** `#dbeafe` fill / `#3b82f6` stroke / `#1d4ed8` text — the "main"/current thing.
  - **Green** `#dcfce7` fill / `#16a34a` stroke / `#166534` text — success / correct / kept.
  - **Rose** `#fee2e2` fill / `#dc2626` stroke / `#991b1b` text — wrong / discarded / error path.
  - **Amber** `#fef3c7` fill / `#d97706` stroke / `#92400e` text — "in progress" / runtime /
    something happening over time.
  - **Slate** `#f1f5f9` fill / `#94a3b8` stroke / `#475569` text — neutral / outside / not the
    point of this diagram.
- **Small drawn icons or emoji** inside a box header (📦 value, 🗄️ heap, 🔒 encapsulation, 🎭
  abstraction, 👪 inheritance, 🔀 polymorphism, etc.) — a labelled box with no icon is fine too;
  don't force an icon that doesn't add anything.
- **Orthogonal connectors only** — horizontal/vertical lines with a small arrowhead marker, never
  a diagonal line. Label the arrow on a small rounded pill if the meaning isn't obvious from the
  boxes alone (e.g. "copies", "points to", "same object").
- **Text must fit inside its box.** Shorten the wording or widen the box — never let a label spill
  over an edge.
- No legend needed for a 2–3 box diagram where the colours are self-explanatory from the labels;
  add a tiny legend line only if a diagram genuinely needs it to be read correctly.

## Reusable filter (paste into each diagram's `<svg>`)

```html
<svg viewBox="0 0 640 260" xmlns="http://www.w3.org/2000/svg" class="topic-diagram">
  <defs>
    <filter id="cardShadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#0f172a" flood-opacity="0.15"/>
    </filter>
    <marker id="arrow" markerWidth="10" markerHeight="10" refX="7" refY="3" orient="auto">
      <path d="M0,0 L7,3 L0,6 Z" fill="#64748b"/>
    </marker>
  </defs>
  <!-- boxes + connectors go here -->
</svg>
```

Each `<svg>` on a page defines its own `<defs>` (ids only need to be unique *within that page* —
fine to reuse `cardShadow`/`arrow` in every diagram on the same page since each `<svg>` is its own
scope, but if a page has 2+ diagrams give the second one's ids a suffix, e.g. `cardShadow2`, to
avoid any browser-inconsistency risk with duplicate ids in one document).

## No overlap — check this every time

A label, box, or arrow is never allowed to visually clip another shape. Concretely:

- **Before calling a diagram done, trace every label's bounding box against every box's bounding
  box.** A pill/label must sit fully inside empty space — either in the gap between two boxes
  (with margin on both sides) or floating just above/below the line it names. A real bug from
  this project: a "copy" pill was centered on an arrow that ran too close to its box, so the pill
  clipped the box's edge. Leave generous gaps between boxes specifically so a label has somewhere
  to live.
- **Never center a label directly on the line/arrow it describes** — float it just to one side,
  or just above the line, so the stroke doesn't run through the letters.
- **Straight orthogonal lines only, routed around shapes, never through one.** If two boxes
  aren't directly aligned, route the connector as an L/Z shape (horizontal + vertical segments),
  never a diagonal, and never let it cross through a box that isn't its endpoint.
- Validate the SVG is well-formed (tags balanced, every `<defs>` closed) before considering the
  page done — a broken tag blanks the whole diagram silently.

## Animation — use it, purposefully

A moving picture holds attention better than a static one, so reach for a small, self-contained
SMIL animation (`<animate>` / `<animateMotion>` / `<animateTransform>` — no external GIF, nothing
that needs a build step) wherever it makes the concept clearer, not just decorative motion:

- **Marching ants** (`stroke-dasharray` + `<animate attributeName="stroke-dashoffset">`) on an
  arrow that represents an ongoing/live relationship — e.g. two variables both pointing at the
  same heap object.
- **A small token travelling along a path** (`<animateMotion>`) to show something happening over
  time — e.g. a value being copied from one box to another, or a request travelling from caller
  to callee.
- Animate **only the one or two things that need motion to be understood** — a diagram where
  everything moves at once is harder to read than a still one. Everything else on the page stays
  static.
- Generous duration (2–4s per cycle), `repeatCount="indefinite"`, so it reads as "this is always
  true" rather than a one-off flourish that's easy to miss.

## CSS wrapper

- Wrap every inline `<svg>` in a `<figure class="diagram-card">` with an optional
  `<figcaption>` one-liner underneath if the picture needs a title beyond what's already on the
  page. Styling for `.diagram-card` lives once in `assets/style.css` (light background panel,
  centered, `max-width: 100%`, `height: auto` on the svg so it scales on mobile).
