# Rule: Topic Diagrams

How to draw the diagram(s) on a topic page. Same visual language as the LeadHunter architecture
diagrams (hand-authored SVG, colour-coded zones, drawn icons, orthogonal connectors) — scoped
down to one small concept instead of a whole system. This is the "🧠 Visual Mental Model" step
in the page template — see [content-writing.md](content-writing.md) and
[product-principle.md](product-principle.md) for where it sits and why it exists.

## Choose the diagram TYPE by the concept — never default to "three boxes"

**The diagram must show a relationship, not re-illustrate the paragraph next to it in picture
form.** Before drawing anything, name which of these shapes the concept actually is, and draw
that shape — don't reach for the same three-boxes-side-by-side layout for every topic just
because it's familiar:

| Concept shape | Diagram type | Example |
|---|---|---|
| Comparing 2-3 named options | Side-by-side comparison, but with a **shared root question** branching down into each option (not three isolated boxes) — see the worked example below | `var` vs. `dynamic` vs. `object` |
| One thing turning into another | Before → change → after, top to bottom or left to right | `int` → `int?` |
| A condition picking a path | A decision tree — condition at top, two branches down to their outcomes | `?:` |
| A check for one specific state | A fallback flow — value → "is it X?" → two branches | `??` (is it null?) |
| Something happening over a span of time | A left-to-right or top-to-bottom flow with a clear start and end | `async`/`await` |
| One thing being a kind of another | A simple hierarchy, top to bottom | base class → derived class |
| One thing holding several of another | A container with visible slots/items inside it | `List<T>`, arrays |
| A thing being created, used, then cleaned up | A lifecycle strip: 3-4 stages left to right | object lifecycle, `using` |
| Compile-time vs. runtime behavior | Two clearly labelled zones (not just two colors) with the transition between them shown | `dynamic`, `var` |
| Multiple independent dimensions/boundaries that combine | Expose the dimensions themselves (a boundary diagram or a small matrix), not one flat list of equal-looking options | Access modifiers (class-hierarchy boundary × assembly boundary) |
| One thing calling/using another indirectly | A dependency relationship — the consumer, the abstraction it depends on, the concrete thing behind it | Dependency injection |
| Data passing through a pipeline of steps | Input → transformation(s) → output, left to right | LINQ |
| Two things that are related but not interchangeable | Comparison **and** the relationship between them (e.g. "every class implicitly is one, only some declare the other") | interface vs. class |

**Worked example — a comparison gets a shared root, not three isolated boxes.** For "who decides
the type," draw one root question at the top ("WHO DECIDES?"), a line branching down into three
columns (`var` / `object` / `dynamic`), and each column continuing down through 2-3 short stages
to its outcome (e.g. `var → compiler → strong type`, `object → container → cast`, `dynamic →
runtime → binder → exception possible`). The shared root is what turns three separate facts into
one relationship — that's the difference between "three boxes with paragraphs in them" and an
actual mental model.

## Multi-dimensional concepts need TWO diagrams, not one bigger one

**When a concept has independent dimensions that combine (an AND/OR relationship between simpler
rules), don't force it into a single flat comparison of equal-looking cards — that hides the
actual structure.** This was caught on Access Modifiers: `private`/`protected`/`internal`/`public`
sit on a spectrum of increasing accessibility, but `protected internal` and `private protected`
aren't a 5th and 6th option on that same spectrum — they're **combinations of two independent
boundaries** (the class-hierarchy boundary that `protected` controls, and the assembly boundary
that `internal` controls). Six equal-looking boxes in a row buries that.

The fix is two small diagrams instead of one:
1. **How access expands** — a nested-boundaries diagram (`public` containing `internal`
   containing `protected` containing `private`) for the four base modifiers, showing increasing
   accessibility. Label this explicitly as a *mental model of increasing accessibility, not
   literal C# scoping* — don't let the nesting imply the compiler actually nests these scopes.
2. **How the combined modifiers work** — a separate, small OR/AND diagram:
   `protected internal → protected OR internal` next to `private protected → protected AND
   internal`. This is the part worth its own visual, because the OR-vs-AND distinction is exactly
   the thing people get backwards (see [common-trap.md](common-trap.md)).

General rule: **before drawing, ask whether the concept has more than one independent boundary
or axis.** If yes, the diagram's job is to expose those axes (a boundary diagram, a small
decision matrix, two linked diagrams) — not to flatten everything into one row of same-shaped
boxes just because there are several named options.

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
- **A box's title uses that box's saturated theme color (e.g. blue `#1d4ed8`) — but any smaller
  detail/subtitle line underneath it uses plain neutral gray (`#5b6472`), never the same
  saturated color at a smaller size.** A real bug from this project: subtitle lines like "must
  initialize" were given the same saturated blue/amber/green as the bold title, set in italic at
  9.5px — small, italic, and saturated together made them noticeably harder to read than the
  title above them, even though each individual choice (color, italic, size) looked fine alone.
  The fix, and the site-wide convention going forward: title = bold, theme color, ~13px; subtitle
  = regular weight (no italic), neutral gray, ~10.5px. The color already did its job in the
  title and the box's own fill/stroke — the subtitle's job is legibility, not more color.
- **Small drawn icons or emoji** inside a box header (📦 value, 🗄️ heap, 🔒 encapsulation, 🎭
  abstraction, 👪 inheritance, 🔀 polymorphism, etc.) — a labelled box with no icon is fine too;
  don't force an icon that doesn't add anything.
- **Put a fun, on-topic icon on the moment that deserves personality — an error, a failure path,
  a "gotcha."** A plain "error thrown" label is correct but forgettable; a 🐛 on it makes the
  same information land more memorably, at zero extra cost. Reach for this on the diagram's
  interesting/surprising moment specifically, not on every label — sprinkled everywhere it stops
  reading as a highlight.
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

## Keep a name and its value on one line

A variable box showing `x = 5` is one idea, not two — write it as a single `<text>` line
(`x = 5`), never split across two stacked lines (`x` on one line, `= 5` below it). A real
instance from this project: `x` and `= 5` were two separate `<text>` elements at different `y`
positions, and it looked broken/odd rather than intentional. Split a box's content onto multiple
lines only when it's genuinely more than one idea (a title line above a value, a type annotation
below) — not for a simple `name = value` pair.

## Arrowheads must point where the path actually ends

`marker-end` puts the arrowhead in the direction of the path's **last segment**, not the overall
direction of travel — so an orthogonal path's segment order matters, not just its start/end
points. Two real bugs from this project:

- **A path that goes sideways-then-down-then-sideways-again must END on a horizontal segment to
  enter a box from the side** — `M90,54 H120 V95 H150` (right, down, right — ends horizontal,
  arrowhead points correctly into the box's left edge). Writing it as `H150 V95` instead (right,
  then down) makes the *last* segment vertical, so the arrowhead ends up pointing down into
  empty space next to the box, not into it. Match the final segment's direction to the side of
  the box being entered (horizontal for the left/right edge, vertical for the top/bottom edge).
- **Only the segment that reaches the real destination gets a `marker-end`.** When one logical
  route is split across two `<path>` elements (e.g. routed around another box, or shared with an
  `<animateMotion>` path), the first/earlier path is just a routing bend — it must have no
  marker at all. A real bug: the first leg of a "no error" route had its own `marker-end`,
  drawing a stray arrowhead at the midpoint bend, before the second path even reached
  `finally`. Before shipping a diagram with any multi-segment or multi-path route, trace it
  segment by segment and confirm exactly one arrowhead exists per real destination — no more, no
  less.

## Panel titles must fit THEIR half, not the whole canvas

When one `<svg>` is split into two side-by-side panels by a divider line (rather than two
separate `<svg>` diagrams), a `text-anchor="middle"` title centered on that panel's midpoint can
still overflow past `x="0"` or the divider if the string is too long for that panel's actual
width — the viewBox being wide enough overall doesn't save you, because the text is centered on
half of it, not all of it. A real bug: a panel title text was long enough to start at a negative
x-coordinate, so its first few characters were clipped off outside the SVG entirely. Before
shipping a split-panel diagram, estimate the title's rendered width against that specific
panel's width (divider-to-edge, not the full canvas) and shorten the wording (or drop a
parenthetical) until it clears with margin on both sides — do this check for every panel
separately, they're rarely the same width.

## Check the WHOLE diagram is centered, not just individual elements

A diagram can have every individual label correctly positioned relative to its own box and
still read as lopsided, because the *content as a group* isn't centered in the `viewBox`. A real
bug: a flowchart's boxes were all consistently placed relative to each other, but the whole
group's horizontal span sat in the right two-thirds of a 640-wide canvas, leaving a large dead
zone on the left and almost no margin on the right — correct internally, visibly off-center
overall. Before shipping any diagram: compute the leftmost and rightmost x-coordinates actually
used (across every box, pill, and label — not just the boxes), find their midpoint, and compare
it to the `viewBox`'s own horizontal center. If they don't match (within ~10px), shift every
coordinate in the diagram by the same offset to recenter the whole group — do the same check
vertically for a tall diagram.

## No overlap — check this every time

A label, box, or arrow is never allowed to visually clip another shape. Concretely:

- **Before calling a diagram done, trace every label's bounding box against every box's bounding
  box.** A pill/label must sit fully inside empty space — either in the gap between two boxes
  (with margin on both sides) or floating just above/below the line it names. A real bug from
  this project: a "copy" pill was centered on an arrow that ran too close to its box, so the pill
  clipped the box's edge. Leave generous gaps between boxes specifically so a label has somewhere
  to live.
- **Never center a label directly on the line/arrow it describes** — float it just to one side,
  or just above the line, so the stroke doesn't run through the letters. But "off to one side"
  means a small offset (20-40px), not far away — a label floating 100+px from the line it
  describes reads as disconnected/unrelated, which is its own bug (a real instance: a "no error"
  label sat so far from its arrow that it looked like an unrelated, orphaned note).
- **Check every label against every OTHER text element on the canvas too, not just boxes.** A
  real bug: a top-of-diagram caption note and a path label ended up at overlapping coordinates,
  so the caption's text ran straight through the label's pill. The bounding-box trace in the
  first bullet applies to text-vs-text, not only text-vs-box.
- **Straight orthogonal lines only, routed around shapes, never through one.** If two boxes
  aren't directly aligned, route the connector as an L/Z shape (horizontal + vertical segments),
  never a diagonal, and never let it cross through a box that isn't its endpoint.
- Validate the SVG is well-formed (tags balanced, every `<defs>` closed) before considering the
  page done — a broken tag blanks the whole diagram silently.
- **Leave real margin between the lowest (or widest) shape and the `viewBox` edge — the
  drop-shadow filter needs room outside the shape itself, or it gets clipped by the canvas.**
  The shared filter (`x="-20%" y="-20%" width="140%" height="140%"`) extends the shadow *outside*
  each shape's own bounding box, scaled to that shape's size — a real bug from this project: a
  row of boxes had its bottom edge land at exactly the `viewBox`'s own height (e.g. boxes ending
  at y=200 in a `viewBox` of height 200), leaving zero room for the shadow below them, so every
  box in that row rendered with a visibly flat-cut bottom edge instead of its rounded corner and
  soft shadow. Always leave at least ~15-20px of clear `viewBox` space below the lowest shape
  (and to the right of the widest one) — check this explicitly for the bottom-most row of any
  multi-row diagram, since it's the one most likely to be sized flush against the canvas edge.

## A bidirectional arrow needs TWO different marker defs, not one marker on both ends

**`marker-start` with `orient="auto"` does NOT mirror the arrowhead — it uses the exact same
local tangent direction as `marker-end`.** For a straight horizontal line, that tangent direction
is identical at both ends, so pointing the same right-pointing triangle at both `marker-start` and
`marker-end` produces two arrowheads that both point right — not a `↔` shape. The one at the
start ends up pointing *into* its own box (same direction as the line), which reads as no
arrowhead at all rather than a wrong one, making this bug easy to miss on a casual look. A real
bug from this project: a "caller ↔ method" bidirectional arrow for `ref` was built exactly this
way and rendered with only one visible arrowhead. The fix is two separate marker defs — one
right-pointing triangle for `marker-end`, one explicitly left-pointing (mirrored) triangle for
`marker-start`:
```html
<marker id="arR" markerWidth="8" markerHeight="8" refX="5.5" refY="2.5" orient="auto">
  <path d="M0,0 L5.5,2.5 L0,5 Z" fill="#3b82f6"/>
</marker>
<marker id="arL" markerWidth="8" markerHeight="8" refX="2.5" refY="2.5" orient="auto">
  <path d="M5.5,0 L0,2.5 L5.5,5 Z" fill="#3b82f6"/>
</marker>
<path d="M180,68 H460" marker-start="url(#arL)" marker-end="url(#arR)" .../>
```
Whenever a diagram needs a genuinely bidirectional connector (two named things both read *and*
affect each other), check for exactly this — one marker used at both ends of a path is a
same-direction bug, not a mirrored one.

## Verify by computing the numbers, not by eyeballing the code

This is the rule that actually catches the bugs above — every one of them (a pill sitting on a
path's own bend, a 2px gap that was really a sub-pixel overlap, a text baseline that landed
exactly on a box's bottom edge) passed a casual look at the coordinates and only showed up once
someone looked at the rendered diagram. Before calling any diagram done:

1. **List every shape's actual bounding box** — a `<rect>` at `x,y` with `width,height` occupies
   exactly `[x, x+width] × [y, y+height]`; a path segment has a tiny but real bounding box too
   (its stroke-width, roughly ±1px around the line).
2. **For every pair that could plausibly be near each other, compute the gap as a number** —
   `(other.top) - (this.bottom)`, etc. "Looks like it's above the line" is not a check; "18px
   clear" is. A gap under ~6-8px is too tight to trust — increase it.
3. **Do this for every label against every box AND every path segment** — not just the box it's
   "obviously" describing. A label's own bend-point on its path, or a completely different
   diagram element sharing a coordinate by coincidence, is exactly what slipped through here.
4. Only after that numeric pass is a diagram considered checked — not after just re-reading the
   markup and judging it "looks fine."
5. **In a split-panel diagram, check that each panel's content is centered on the SAME x as that
   panel's own title, not just "somewhere in that half."** A real bug: a panel's title was
   correctly centered on its half, but the box/captions below it were centered 60-70px off to
   one side — each element individually looked fine, but the group read as visibly off-center
   under its own heading. Compute `box.x + box.width/2` for every element in the panel and
   compare it to the title's x — they should match (or be symmetric as a pair around it).
6. **An arrow must span its FULL intended distance, not stop partway.** A real bug: an arrow
   meant to connect two boxes was drawn only across part of the gap between them, leaving one
   end dangling in empty space with no visible connection to anything. When writing a connector,
   state the two endpoints as "box A's edge" and "box B's edge" explicitly, and check the path's
   actual start/end coordinates match those edges — not a coordinate that merely looked close.
7. **A connector must be visibly longer than its own arrowhead marker, or the arrowhead
   distorts the whole line.** With the default `markerUnits="strokeWidth"`, a marker's
   rendered size is roughly `markerWidth × stroke-width` — e.g. a `10×10` marker on a
   `stroke-width="1.8"` path renders at ~18×18 units. A real bug from a tree/fork diagram in
   this project: three "drop" connectors from a horizontal bar into boxes below it were drawn
   only 10 units long — shorter than their own ~18-unit-wide arrowhead — so the arrowheads
   overshot both ends of their tiny paths and rendered as a distorted, diagonal-looking mess
   instead of clean small arrows. Fix: either lengthen the connector (this project's fix — a
   short "drop" or "stub" arrow should be at least ~20-25 units, comfortably longer than the
   marker) or shrink the marker (smaller `markerWidth`/`markerHeight` and a proportionally
   redrawn arrow path inside it) — check this any time a connector is unusually short, not just
   the ones that are unusually long.

## Mandatory automated verification — hand-computed coordinates are not verification

**A real incident, 2026-09-16, during C#'s Phase 7 (35 new pages built by parallel subagents):**
every subagent was given this rule file, including the "Verify by computing the numbers, not by
eyeballing the code" section above, and every subagent reported having followed it. Several of
them, however, explicitly reported that they could **not** actually get a live rendered page in
front of them — a Browser-pane navigation was declined, a concurrent session navigated the shared
tab away mid-check, an unrelated port conflict hit the shared dev server — and fell back to
"verified by careful manual computation of the coordinates" as a substitute. The orchestrating
session accepted those self-reports at face value and moved on without independently re-checking.

The result: 5 of the 35 pages shipped with a genuine, real defect — a horizontal "bus" line that
didn't reach the vertical drop-arrows below it, a fork/merge connector landing in the empty gap
between two side-by-side boxes instead of on either one (twice, same page), an arrow that ended
14px short of the box it was supposed to enter, and a subtitle 11px wider than the box it sat in.
Every one of these is *exactly* the class of bug "Verify by computing the numbers" exists to
catch — the rule was followed, on paper, by every subagent that hit it. **It still didn't work,
because "I computed the numbers by hand" and "I rendered the page and measured it" are not the
same operation, and nothing forced a distinction between the two before a page was marked done.**
Hand computation is exactly the failure mode this whole rule file already exists to route around
(see "Panel titles," "Check the WHOLE diagram is centered," etc. — all found the same way: by
looking at the rendered page, not the markup) — it just hadn't yet been made mandatory and
automatic instead of advisory.

**The fix, mandatory from now on, no exceptions:**

1. **A page with any `<svg class="topic-diagram">` is not "done" — by the orchestrating session
   or by any subagent it delegates to — until it has been checked against the *actually rendered*
   page, not the markup.** The minimum acceptable check is running the automated script below,
   injected via a real browser/JS-execution tool, against the live page. A screenshot reviewed by
   eye is a good addition (catches things geometry alone can't, like color/contrast) but does not
   replace the script — the script catches the exact defect classes hand-eyeballing keeps missing.
2. **A subagent's report of "verified by computing the coordinates, could not access a live
   browser" (or any equivalent — declined navigation, a concurrent session took the tab, a port
   conflict) is a report that verification did NOT happen, not a report that it did.** The
   orchestrating session must never accept that sentence as equivalent to a passed check. When a
   subagent says this, the orchestrating session is responsible for running the real check itself
   on that page before considering it complete.
3. **This is full coverage, not a sample.** In the 2026-09-16 incident the 5 real defects were
   spread across Basic, Intermediate, and Advanced pages, built in different dispatch batches by
   different subagents — there was no single "suspect batch" a spot-check would have caught them
   all in. Before any track's Phase 7 (or any future diagram-bearing page, however authored) is
   considered complete, the orchestrating session runs the script below against **every single
   diagram-bearing page, one page at a time**, fixes any genuine finding, and re-runs the script
   on that page to confirm the fix — before moving to the next page. Only after every page in the
   batch passes with zero remaining genuine issues is that batch ready for the user's manual
   review.

**The script** (self-contained; inject and run via a live browser JS-execution tool against the
already-rendered page — it does nothing useful against static markup):

```javascript
function ptSegDist(px,py,x1,y1,x2,y2){const dx=x2-x1,dy=y2-y1,len2=dx*dx+dy*dy;if(len2===0)return Math.hypot(px-x1,py-y1);let t=((px-x1)*dx+(py-y1)*dy)/len2;t=Math.max(0,Math.min(1,t));return Math.hypot(px-(x1+t*dx),py-(y1+t*dy));}
function pathSegments(d){const segs=[];if(!d)return segs;const toks=d.trim().split(/(?=[MLHVCQAmlhvcqa])/).map(s=>s.trim()).filter(Boolean);let cx=0,cy=0;toks.forEach(tok=>{const cmd=tok[0];const nums=tok.slice(1).trim().split(/[\s,]+/).filter(Boolean).map(Number);if(cmd==='M'){cx=nums[0];cy=nums[1];}else if(cmd==='L'){segs.push([cx,cy,nums[0],nums[1]]);cx=nums[0];cy=nums[1];}else if(cmd==='H'){segs.push([cx,cy,nums[0],cy]);cx=nums[0];}else if(cmd==='V'){segs.push([cx,cy,cx,nums[0]]);cy=nums[0];}});return segs;}
function pointNearGeometry(px,py,rects,texts,paths,excludePath,tol){for(const r of rects){if(px>=r.box.x-tol&&px<=r.box.x+r.box.w+tol&&py>=r.box.y-tol&&py<=r.box.y+r.box.h+tol)return'rect';}for(const t of texts){if(px>=t.box.x-tol&&px<=t.box.x+t.box.width+tol&&py>=t.box.y-tol&&py<=t.box.y+t.box.height+tol)return'text';}for(const p of paths){if(p===excludePath)continue;for(const seg of p.segs){if(ptSegDist(px,py,seg[0],seg[1],seg[2],seg[3])<=tol)return'path';}}return null;}
function markerReach(svg, markerId){const el=svg.querySelector('#'+markerId);if(!el)return 5.5;const inner=el.querySelector('path,polygon');if(!inner)return 5.5;const d=inner.getAttribute('d')||inner.getAttribute('points')||'';const nums=(d.match(/-?\d+\.?\d*/g)||[]).map(Number);let maxX=0;for(let i=0;i<nums.length;i+=2){if(nums[i]>maxX)maxX=nums[i];}return maxX||5.5;}
function checkDiagram(){const svgs=Array.from(document.querySelectorAll('svg.topic-diagram'));if(!svgs.length)return{error:'no svg'};const all=[];svgs.forEach((svg,idx)=>{const texts=Array.from(svg.querySelectorAll('text')).map(t=>({text:t.textContent.trim(),box:t.getBBox()}));const rects=Array.from(svg.querySelectorAll('rect')).filter(r=>!r.closest('defs')).map(r=>({box:{x:+r.getAttribute('x'),y:+r.getAttribute('y'),w:+r.getAttribute('width'),h:+r.getAttribute('height')}}));const pathEls=Array.from(svg.querySelectorAll('path')).filter(p=>!p.closest('defs'));const paths=pathEls.map(p=>{const d=p.getAttribute('d');let start=null,end=null;try{const len=p.getTotalLength();start=p.getPointAtLength(0);end=p.getPointAtLength(len);}catch(e){}return{el:p,hasMarker:p.hasAttribute('marker-end'),d,start,end,segs:pathSegments(d)};});const TOL=9;const issues=[];for(let i=0;i<texts.length;i++)for(let j=i+1;j<texts.length;j++){const a=texts[i].box,b=texts[j].box;const ox=Math.max(0,Math.min(a.x+a.width,b.x+b.width)-Math.max(a.x,b.x));const oy=Math.max(0,Math.min(a.y+a.height,b.y+b.height)-Math.max(a.y,b.y));if(ox>4&&oy>4)issues.push('TEXT-TEXT OVERLAP: "'+texts[i].text+'" vs "'+texts[j].text+'"');}rects.forEach(r=>{texts.forEach(t=>{const cx=t.box.x+t.box.width/2,cy=t.box.y+t.box.height/2;if(cx>=r.box.x&&cx<=r.box.x+r.box.w&&cy>=r.box.y&&cy<=r.box.y+r.box.h){if(t.box.x<r.box.x-3||t.box.x+t.box.width>r.box.x+r.box.w+3)issues.push('TEXT OVERFLOW: "'+t.text+'" w='+t.box.width.toFixed(0)+' boxw='+r.box.w);}});});paths.filter(p=>p.hasMarker&&p.end).forEach(p=>{if(!pointNearGeometry(p.end.x,p.end.y,rects,texts,paths,p,TOL))issues.push('ARROW END disconnected at ('+p.end.x.toFixed(0)+','+p.end.y.toFixed(0)+') d="'+p.d+'"');});paths.filter(p=>p.hasMarker&&p.start).forEach(p=>{if(!pointNearGeometry(p.start.x,p.start.y,rects,texts,paths,p,TOL))issues.push('ARROW START disconnected at ('+p.start.x.toFixed(0)+','+p.start.y.toFixed(0)+') d="'+p.d+'"');});paths.filter(p=>p.hasMarker).forEach(p=>{const me=p.el.getAttribute('marker-end');const m=me.match(/#([\w-]+)/);if(!m)return;const sw=parseFloat(p.el.getAttribute('stroke-width'))||1.5;const reach=markerReach(svg,m[1])*sw;if(!p.segs.length)return;const last=p.segs[p.segs.length-1];const segLen=Math.hypot(last[2]-last[0],last[3]-last[1]);if(segLen<reach*1.2)issues.push('SHORT SEGMENT vs marker reach: segLen='+segLen.toFixed(1)+' reach='+reach.toFixed(1)+' d="'+p.d+'"');});all.push({svgIndex:idx,issueCount:issues.length,issues});});return all;}
JSON.stringify(checkDiagram());
```

What it checks, per `<svg class="topic-diagram">` on the page: pairwise text-vs-text bounding-box
overlap, text overflowing the `<rect>` it's centered inside, for every `<path>` carrying a
`marker-end`/`marker-start` whether its actual start/end point (via `getPointAtLength`, not the
raw `d` coordinates) lands within a 9px tolerance of a rect's edge, a text's bounding box, or a
point along another path's own segments (so a legitimate T-junction/fork point passes, while a
genuinely floating endpoint doesn't) — and, for every marked path, whether its final segment is
long enough not to distort under its own arrowhead (see `markerReach` below; this check was added
2026-09-16, one revision after the checks above — see the follow-up incident right below this).

**Three known limitations, already worked around in the script above — don't remove any of them:**
- Elements inside `<marker>`/`<defs>` are arrowhead *templates*, not real diagram connectors —
  both the `<rect>` and `<path>` selectors exclude anything under `.closest('defs')`.
- A plain divider or decorative directional line (no `marker-end`) is not a connector and must
  not be checked for connectivity — only paths that actually carry a marker (`p.hasMarker`) go
  through the start/end proximity check. (One real page in this project has an intentional
  "⏱ time passing" axis arrow the checker would otherwise flag; this filter is why it doesn't.)
- **The "short segment" check must measure the marker's actual drawn shape, not its declared
  `markerWidth`.** A `<marker markerWidth="8">` whose inner triangle only reaches `x=5.5` (out of
  that 8-unit viewport) visually protrudes ~5.5×strokeWidth, not 8×strokeWidth — using the
  viewport width as the "reach" over-estimates real distortion risk and produces false positives
  on segments that render perfectly cleanly. `markerReach()` reads the marker's own inner
  `<path>`/`<polygon>` and takes its actual max x-coordinate for exactly this reason — don't
  simplify it back to `markerWidth * strokeWidth`.

A page passes when every `<svg class="topic-diagram">` on it reports `"issueCount":0`. Any other
count is a real finding to fix, not a heuristic to argue with — investigate the specific
coordinates named before dismissing one as a false positive, and only dismiss it if it matches
one of the limitations above (e.g. an intentional no-marker directional line).

**Follow-up incident, same day:** the day this rule was written, the user reported a *different*
rendering defect — a fork diagram (`advanced/2.html`, "lock/Monitor") whose arrowheads into two
side-by-side boxes were visibly distorted, blob-like triangles instead of clean arrows. The rule
text for this exact bug already existed ("A connector must be visibly longer than its own
arrowhead marker" — see "Verify by computing the numbers" above) and had for some time — but the
verification *script* just written to enforce this whole rule file had no check for it: it only
tested disconnection and overlap, not marker-vs-segment-length distortion. **A rule that exists
only in prose, with no automated check enforcing it, is exactly as skippable as no rule at all —
the same failure mode this whole section exists to close, one level up.** The fix was the
`markerReach`-based check now embedded in the script above, plus re-running it against all 35
pages (not just the one reported) — it found and fixed one more real instance on the same page,
and confirmed the other 34 pages were already clean under the new check. **Whenever a new
defect class is found by eye that the current script doesn't catch, the correct response is
always: extend the script first, then re-run it against every page the current pipeline covers —
never fix the one reported instance and stop, since a defect visible on one page was built by the
same process on all the others and has no reason to be unique to the one someone happened to
look at.**

## Animation — check every diagram for a place it earns its keep

**Don't treat animation as optional polish — actively look for where it would make a "Visual
Mental Model" more attractive AND clearer before calling the diagram done.** A moving picture
holds attention better than a static one and a static site full of still boxes reads as flatter
than it needs to. Reach for a small, self-contained SMIL animation (`<animate>` /
`<animateMotion>` / `<animateTransform>` — no external GIF, nothing that needs a build step)
wherever it makes the concept clearer, not just decorative motion:

- **Marching ants** (`stroke-dasharray` + `<animate attributeName="stroke-dashoffset">`) on an
  arrow that represents an ongoing/live relationship, or specifically the *risky/uncertain*
  branch of a tree/comparison diagram (see [product-principle.md](product-principle.md)'s
  "diagram shows a relationship" rule). Worked example from this project: in the `var` vs.
  `dynamic` vs. `object` tree diagram, only the `dynamic` column's final connector (the one
  leading into "may throw at runtime") is animated with marching ants in the risk color (red) —
  every other connector on the page is still. The motion itself becomes part of the meaning:
  *this* is the path that's still "live" at runtime, everything else was already settled at
  compile time.
- **A small token travelling along a path** (`<animateMotion>`) to show something happening over
  time — e.g. a value being copied from one box to another, or a request travelling from caller
  to callee.
- Animate **only the one or two things that need motion to be understood** — a diagram where
  everything moves at once is harder to read than a still one. Everything else on the page stays
  static. Motion is a spotlight, not a decoration — if you can't say what the motion means, don't
  add it.
- Generous duration (2–4s per cycle), `repeatCount="indefinite"`, so it reads as "this is always
  true" rather than a one-off flourish that's easy to miss.
- **A marker on an animated dashed path needs its own color-matched `<marker>` definition** —
  the arrowhead should match the path's stroke color (e.g. a red dashed path needs a red
  arrowhead, not the diagram's default neutral one), so the whole connector reads as one
  deliberate highlight, not a still gray arrowhead bolted onto a moving red line.

## CSS wrapper

- Wrap every inline `<svg>` in a `<figure class="diagram-card">` with an optional
  `<figcaption>` one-liner underneath if the picture needs a title beyond what's already on the
  page. Styling for `.diagram-card` lives once in `assets/style.css` (light background panel,
  centered, `max-width: 100%`, `height: auto` on the svg so it scales on mobile).
