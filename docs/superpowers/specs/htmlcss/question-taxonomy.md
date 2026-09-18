# HTML & CSS — Interview Question Taxonomy

**Phase 1 of the 7-phase pipeline** (see [`docs/superpowers/specs/README.md`](../README.md)).
No tier, no priority, no page grouping yet — this file is a faithful transcription of the source
material below, not this session's own invention. **[new]** marks anything added beyond that
source.

## Provenance

Every group and sub-bullet below comes from the user's own message, framed the same way the
user framed JavaScript's plan: a single combined "HTML & CSS" track (kept as one track rather
than split, per the user's own rule — *"Keep a technology as a separate top-level track when it
has enough independent interview depth and its own distinct mental model. Combine technologies
when interviewers naturally evaluate them together and separating them would create small,
fragmented roadmaps"* — a real HTML/CSS interview treats layout, rendering, and accessibility as
one connected surface, not two separate quizzes), internally divided into HTML, CSS
Fundamentals, Layout, Styling & UI, and Advanced/Production sub-areas, targeting roughly 30
concept groups for a 3-16+ year audience. Per
[`accuracy.md`](../../rules/accuracy.md), no sub-bullet, code example, or claim beyond what's
listed here (or the two gap-hunt additions below, both well-established textbook CSS/browser
knowledge) gets invented independently when the actual pages are written.

**The user's own governing framing for this whole track, carried forward verbatim into every
Phase 7 dispatch:** *"Don't present this as HTML topics + CSS topics on the actual interview
pages. The stronger framing is 'What does the browser actually do?' — HTML → DOM, CSS → CSSOM,
DOM + CSSOM → Render Tree → Layout → Paint → Composite. HTML/CSS pages should repeatedly connect
back to this mental model, instead of reading as a list of tags and properties."* This is this
track's equivalent of JavaScript's "prioritize mental models and behavior, not a syntax
reference" rule — every page should tie back to the rendering-pipeline picture where genuinely
relevant, not just define its own tag/property in isolation.

## Reconciliation between the overview tree and the detailed breakdown

The user gave two views of the same plan: a compact ASCII tree (32 leaf groups across HTML / CSS
Fundamentals / Layout / Styling & UI / Advanced-Production) and a detailed numbered breakdown
(1-32, each with sub-bullets and an inline priority marker). Checked directly, group by group,
against the detailed breakdown before writing this file (not assumed from the tree alone) — two
items named in the tree never got their own numbered write-up in the detailed breakdown:

- **"Colors, Backgrounds & Gradients"** — named as a Styling & UI leaf in the tree, but groups
  23-26 in the detailed breakdown only cover Typography, Pseudo-classes/Pseudo-elements, CSS
  Variables, and Transitions & Animations — never colors/backgrounds/gradients themselves, and
  no other group's sub-bullets mention them either.
- **"Accessibility in Practice"** — named as an Advanced/Production leaf in the tree, but groups
  27-32 in the detailed breakdown only cover Cascade Layers, CSS Architecture, Browser
  Rendering, CSS Performance, Cross-Browser Compatibility, and Production UI Scenarios — never
  a practical/senior-level accessibility page distinct from the Basic-tier "Accessibility" page
  (group 5), which is definitional (ARIA, labels, keyboard nav, screen readers).

Both are genuine gaps, not padding — real, commonly-asked HTML/CSS interview surface with no
existing page to hold them — see the Gap-hunt log below for what each new page covers and why it
doesn't overlap an existing page.

## Gap-hunt log (Phase 2)

| # | Finding | Resolution |
|---|---|---|
| 1 | "Colors, Backgrounds & Gradients" named in the user's own overview tree but never given sub-bullets anywhere in the detailed breakdown. | Added as **group 33, Colors, Backgrounds & Gradients** (new) — color functions/formats, `background` shorthand vs. longhand, gradients (`linear-gradient`, `radial-gradient`), background positioning/sizing/repeat, `background-blend-mode`. Well-established CSS, not invented. |
| 2 | "Accessibility in Practice" named in the user's own overview tree but never given sub-bullets anywhere in the detailed breakdown — distinct from Basic's definitional "Accessibility" page (group 5). | Added as **group 34, Accessibility in Practice** (new) — auditing an existing app for accessibility, common real-world failures (focus traps, unlabeled icon buttons, color-only state indicators), accessibility testing tools conceptually (axe, Lighthouse, screen-reader spot-checks), retrofitting accessibility into a page that wasn't built with it, the relationship between automated tooling and manual testing. Well-established, textbook-standard accessibility practice, not invented. |

No further gaps found beyond these two — the user's own 32-group plan is already unusually
thorough (their own summary calls out "roughly 30 concept groups / 80-100 questions," and the
detailed breakdown actually reaches closer to 100 sub-bullets across 32 groups), so this
session's own gap-hunt against outside HTML/CSS interview knowledge did not surface anything
else genuinely missing.

---

## HTML

### 1. HTML Fundamentals — 🔥
- What is HTML? HTML vs. HTML5?
- What is an element vs. an attribute?
- Block vs. inline elements
- What is the DOM? How does HTML become the DOM?
- Why is valid HTML important? What happens when the browser encounters invalid HTML?
- Visual (user's own note): HTML → Parser → DOM Tree → (+ CSS + JS) → Rendered Page — "much more
  valuable than memorizing tags."

### 2. Semantic HTML — 🔥🔥
- What is semantic HTML? Why use `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`,
  `<footer>`?
- `<div>` vs. a semantic element; `<button>` vs. a clickable `<div>`; `<a>` vs. `<button>`
- Why semantics matter for accessibility; how semantics help SEO
- Classic interview question (user's own): why is `<button>` better than
  `<div onclick="">`?

### 3. Document Structure & Metadata — ⭐
- `DOCTYPE`, `<html>`, `<head>`, `<meta>`
- charset, viewport, title, description, canonical, favicon, Open Graph basics
- Scenario (user's own): your page looks fine on desktop but is tiny on mobile — what HTML
  metadata would you check?

### 4. Forms & Validation — 🔥🔥
- `<form>`, input types, labels, `name`, `value`, GET vs. POST
- Native validation: `required`, `pattern`, `min`/`max`, `autocomplete`
- Form submission, accessibility
- Why should an input have a `<label>`? Client-side vs. server-side validation?

### 5. Accessibility — 🔥🔥
- Semantic HTML, labels, keyboard navigation, focus, `alt`, ARIA, accessible names, screen
  readers, heading hierarchy, landmark elements, color contrast, skip links, `tabindex`
- Senior question (user's own): when should you use ARIA vs. prefer native HTML? Mental rule:
  native HTML first; ARIA only when native semantics aren't sufficient.

### 6. Tables & Lists — ⭐
- `<table>`, `<thead>`/`<tbody>`/`<tfoot>`, `<th>` vs. `<td>`, `scope`
- Lists: ordered vs. unordered, semantic usage
- Keep relatively small (user's own note).

### 7. HTML5 Elements & Browser APIs — ⭐
- `<video>`, `<audio>`, `<picture>`/`<source>`, `<dialog>`, `<details>`/`<summary>`,
  `<template>`, `data-*`
- Canvas vs. SVG, conceptually
- Don't turn into an API encyclopedia (user's own note).

### 8. SEO & Web Semantics — ⭐
- Semantic markup, heading structure, title, meta description, canonical, links
- Structured data, conceptually; crawlability
- Accessibility-vs-SEO relationship

---

## CSS Fundamentals

### 9. CSS Fundamentals & Cascade — 🔥🔥
- Visual (user's own): Styles → Cascade → Specificity → Inheritance → Computed value → Used
  value → Rendered result
- What is the CSS cascade? What wins when two rules conflict? Inline vs. stylesheet; importance,
  origin, cascade layers, specificity, source order

### 10. Selectors — 🔥
- Element, class, ID, attribute, descendant, child, adjacent sibling, general sibling selectors
- Pseudo-class, pseudo-element, `:is()`, `:where()`, `:not()`
- Don't make every selector its own page (user's own note).

### 11. Specificity — 🔥🔥
- Visual (user's own): Inline → ID → Class/attribute/pseudo-class → Element/pseudo-element
- Important: specificity isn't the whole cascade — `!important`, layers, origin, and source
  order all matter too
- Classic worked example (user's own, verbatim): `#app .button { color: red; }` vs.
  `.button { color: blue; }` — which wins and why?

### 12. Inheritance — ⭐
- What inherits, what doesn't; `inherit`, `initial`, `unset`, `revert`, `revert-layer`
- Useful for understanding unexpected styles (user's own note).

### 13. Box Model — 🔥🔥
- Visual (user's own): nested margin/border/padding/content boxes
- What is the box model? `content-box` vs. `border-box`; why does `width: 100%` overflow?; how
  does padding affect dimensions?

### 14. Units & Sizing — 🔥
- `px`, `%`, `em`, `rem`, `vw`/`vh`, `svh`/`lvh`/`dvh`, `ch`, `fr`, `min()`, `max()`, `clamp()`
- Practical question (user's own): `em` vs. `rem` — when would you use each?

### 15. Display & Visibility — 🔥
- `block`, `inline`, `inline-block`, `flex`, `grid`, `none`, `visibility`, `opacity`
- Especially: `display: none` vs. `visibility: hidden` vs. `opacity: 0`

### 16. Positioning — 🔥🔥
- `static`, `relative`, `absolute`, `fixed`, `sticky`; containing block; offsets; scrolling
  behavior
- Classic (user's own): why is my absolutely positioned element positioned relative to the
  wrong element?

### 17. Overflow & Stacking — 🔥
- `overflow`, clipping, scrolling; `z-index`, stacking contexts, containing blocks
- Why `z-index: 999999` sometimes doesn't work
- "An excellent visual mental-model page" (user's own note).

---

## Layout

### 18. Flexbox — 🔥🔥🔥
- Main axis, cross axis; `justify-content`, `align-items`, `align-self`, `flex-direction`,
  `flex-wrap`, `flex-grow`, `flex-shrink`, `flex-basis`, `gap`; common alignment problems
- Scenario (user's own): why isn't `margin: auto` centering my flex item?

### 19. CSS Grid — 🔥🔥
- Grid container, rows/columns, tracks, `fr`, `repeat()`, `minmax()`, `auto-fit`, `auto-fill`,
  grid areas, alignment
- Grid vs. Flexbox — mental shortcut (user's own): Flexbox → one-dimensional layout; Grid →
  two-dimensional layout

### 20. Responsive Design — 🔥🔥
- Media queries, mobile-first design, breakpoints, fluid layouts, flexible images, responsive
  typography, `clamp()`, container queries, responsive navigation
- Scenario (user's own): the page works at 1440px and 375px but breaks at 768px — how do you
  investigate?

### 21. Container Queries — ⭐
- Viewport-based vs. container-based responsiveness; `container-type`; `@container`; when
  container queries beat media queries

### 22. Modern CSS Layout — ⭐
- `aspect-ratio`, `object-fit`/`object-position`, `min()`/`max()`/`clamp()`, logical properties,
  `gap`, `subgrid`

---

## Styling & UI

### 23. Typography — 🔥
- Font family, size, weight, line height, letter spacing, web fonts, `@font-face`, font loading,
  fallback fonts, text overflow
- Scenario (user's own): why does text cause layout shift while the page loads?

### 24. Pseudo-classes & Pseudo-elements — 🔥
- `:hover`, `:focus`, `:focus-visible`, `:active`, `:disabled`, `:checked`, `:nth-child`,
  `::before`, `::after`
- Accessibility point (user's own): don't use `:hover` as the only way to expose functionality.

### 25. CSS Variables — 🔥
- Custom properties, `var()`, inheritance, fallback values, runtime modification, theme
  switching, component-level variables
- Worked example (user's own): `:root { --spacing: 1rem; } .card { padding: var(--spacing); }`

### 26. Transitions & Animations — ⭐
- `transition`, `transform`, `animation`, keyframes, timing functions,
  `prefers-reduced-motion`, GPU/compositing considerations
- Why animating `transform` is generally preferable to repeatedly changing layout properties

---

## Advanced / Production

### 27. CSS Cascade Layers — ⭐
- `@layer reset; @layer components; @layer utilities;`
- Why use layers? How do they interact with specificity? Can layers reduce specificity wars?

### 28. CSS Architecture — ⭐
- BEM, utility CSS, component-based CSS, naming conventions, CSS Modules, design tokens,
  avoiding global leakage, maintainability
- Scenario (user's own): a large app has thousands of CSS rules and frequent regressions — how
  would you restructure the CSS?

### 29. Browser Rendering — 🔥🔥
- Visual (user's own): HTML → DOM, CSS → CSSOM, DOM + CSSOM → Render Tree → Layout → Paint →
  Composite
- DOM vs. CSSOM; render tree; layout/reflow; paint; composite; what triggers layout/paint; why
  CSS can cause performance problems
- "This should have one of your best diagrams on the site" (user's own note).

### 30. CSS Performance — 🔥
- Expensive selectors, large stylesheets, unused CSS, layout thrashing, animations, rendering
  cost, critical CSS (conceptual), CSS loading, performance profiling
- Scenario (user's own): good API performance but janky scrolling — how do you investigate?

### 31. Cross-Browser Compatibility — ⭐
- Browser differences, feature detection, progressive enhancement, `@supports`, vendor prefixes
  (historical/current understanding), compatibility testing, graceful degradation

### 32. Production UI Scenarios — 🔥🔥
- A cross-cutting scenario category (user's own framing, matching JavaScript's "Production
  Scenarios" page): why isn't my element centered; why isn't `z-index` working; why does the
  page overflow horizontally; why does layout jump when an image loads; why does CSS work
  locally but not in production; why does the page look different across browsers; how would
  you build a responsive dashboard; how would you make a component accessible without
  JavaScript; a CSS change fixed one page but broke five others — how do you diagnose the
  cascade?

### 33. Colors, Backgrounds & Gradients **[new — gap-hunt addition, see log above]** — ⭐
- Color formats (`hex`, `rgb()`/`rgba()`, `hsl()`/`hsla()`, named colors)
- `background` shorthand vs. longhand (`background-color`, `background-image`,
  `background-position`, `background-size`, `background-repeat`)
- Gradients: `linear-gradient()`, `radial-gradient()`, multiple backgrounds layered
- `background-blend-mode`, conceptually

### 34. Accessibility in Practice **[new — gap-hunt addition, see log above]** — 🔥
- Auditing an existing page/app for accessibility rather than building one from scratch
- Common real-world failures: focus traps, unlabeled icon-only buttons, color-only state
  indicators (e.g. a red border with no text/icon signaling an error)
- Accessibility testing tools, conceptually (automated scanners like axe/Lighthouse, manual
  screen-reader spot-checks) — what automated tooling catches vs. what it can't
- Retrofitting accessibility into a page/component that wasn't built with it in mind

---

## Coverage note for Phase 2

All 32 of the user's own numbered groups are represented above, faithfully, with two additions
(groups 33-34, both named in the user's own overview tree but never given sub-bullets in the
detailed breakdown — see the Gap-hunt log). See [`roadmap.md`](roadmap.md) for the full Phase
3-6 grouping/tiering/priority/page-table work, including how this track's tier axis (question
type, not the user's own HTML/CSS-Fundamentals/Layout/Styling/Advanced-Production subject
grouping) was derived independently per this site's own rule.
