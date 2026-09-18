# HTML & CSS — Track Spec

**Start here for anything HTML & CSS-related.** See
[`docs/superpowers/specs/README.md`](../README.md) for what this file is and the process for
keeping it in sync with the live pages.

## Status — Phases 1–7 complete, all 34 pages written

- **Phase 1** — the user shared a fully detailed, vendor-style 32-group plan directly (a compact
  ASCII overview tree across HTML / CSS Fundamentals / Layout / Styling & UI / Advanced-Production
  sub-areas, plus a fully sub-bulleted breakdown with inline priority markers, targeting ~30
  concept groups / 80-100 questions for a 3-16+ year audience) — transcribed faithfully into
  [`question-taxonomy.md`](question-taxonomy.md).
- **Phase 2** — cross-referenced the user's own compact overview tree against the detailed
  breakdown group by group (not assumed from the tree alone) and found two genuine gaps: "Colors,
  Backgrounds & Gradients" and "Accessibility in Practice" were both named in the overview tree but
  never given sub-bullets anywhere in the detailed breakdown. Both added as their own pages (groups
  33-34) rather than left uncovered — see `question-taxonomy.md`'s Gap-hunt log for exactly what
  each covers and why it doesn't duplicate an existing page.
- **Phases 3–6** — [`roadmap.md`](roadmap.md): all 34 groups mapped 1:1 to pages. Tiered
  **independently** by question type (core-knowledge/definitional → Basic; applied technique/
  comparison/troubleshooting → Intermediate; internals/performance/architecture/scenario →
  Advanced) — deliberately **not** copied from the user's own HTML/CSS-Fundamentals/Layout/
  Styling/Advanced-Production subject buckets, which mix definitional and applied content within
  each bucket. Those subject buckets became this track's concept-cluster grouping on
  `roadmap.html` instead (a separate axis from tier, by design). The user's own 🔥/🔥🔥/🔥🔥🔥/⭐
  priority markers collapsed cleanly onto this site's 🔥/⭐ two-state system — no page needed a 🧠
  Deep Dive marker, since the user's own "○ Deep Dive" list named *aspects within* existing
  Advanced pages (rendering internals, CSS performance internals, stacking-context depth, subgrid
  edge cases, cascade mechanics, browser quirks) rather than distinct pages.
- **Phase 7 — all 34 pages written**, dispatched via parallel subagents in three waves (Basic's 14,
  Intermediate's 13, then Advanced's 7 — comfortably under the 20-concurrent-subagent limit each
  time). Every subagent was given the site's "don't invent specifics" instruction and this track's
  own governing rule verbatim: *"Don't present this as HTML topics + CSS topics on the actual
  interview pages. The stronger framing is 'What does the browser actually do?' — HTML → DOM, CSS
  → CSSOM, DOM + CSSOM → Render Tree → Layout → Paint → Composite. HTML/CSS pages should
  repeatedly connect back to this mental model, instead of reading as a list of tags and
  properties."* `advanced/1.html` (Browser Rendering) owns the full picture; every other page that
  plausibly touches it (Box Model, Positioning, Overflow & Stacking, Flexbox, CSS Grid, Display &
  Visibility, Transitions & Animations, CSS Performance) cross-references it instead of re-teaching
  it — the same "one page owns the depth, others link back" pattern used across this whole site.
  **Diagram verification, with the actual evidence:** every subagent ran the mandatory script from
  [diagram-style.md](../../rules/diagram-style.md#mandatory-automated-verification--hand-computed-coordinates-are-not-verification)
  against its own rendered page and reported `issueCount: 0` before finishing — several caught and
  self-fixed real defects before their own report (a text-overflow inside a diagram box on
  `intermediate/12.html`; a spacing/crowding issue on `intermediate/5.html`'s named-grid-areas
  diagram). The orchestrating session then ran its own **independent full sweep, one command, all
  34 pages, 43 diagrams total** — every single `svg.topic-diagram` came back
  `{"issueCount":0,"issues":[]}`.
- **Pager-consistency fix-up**: pages were dispatched with each subagent instructed to fall back to
  a muted "(coming soon)" link whenever a sibling page didn't yet exist on disk — 14 of 34 files
  needed at least one pager fix once every sibling existed. Rebuilt every pager from the canonical
  page-title table, forming one clean chain across all three tiers (Basic `1 → 14` → Intermediate
  `1 → 13` → Advanced `1 → 7`, each tier's first page with no prev, each tier's last page with no
  next, no cross-tier links).
- **Cross-link fix-up beyond the pager**: an independent sweep of every internal `href` across all
  34 pages found two genuinely broken links (`basic/5.html` and `basic/6.html` both used
  `../../intermediate/N.html` — one directory level too many — instead of `../intermediate/N.html`)
  and a couple of stale prose mentions still saying "(coming soon)" for pages that were written by
  the time the sweep ran (`basic/1.html`'s Browser Rendering mention upgraded from prose-only to a
  real link; two stale annotations removed from `advanced/3.html`). All fixed; every internal link
  across the track now resolves to a real file.
- **Sidebar-navigation wiring done correctly from the start of Phase 7** — every content brief
  required `data-tier-key="htmlcss/<tier>"` on `<body>` and the `nav-index.js` script include in
  the fixed script order from the first dispatch. Only `assets/nav-index.js` itself (the three
  `htmlcss/basic`, `htmlcss/intermediate`, `htmlcss/advanced` entries) needed adding afterward.
- **`assets/search-index.js` completion**: the 5 index/roadmap pages got entries during Phase 1-6
  scaffolding; the 34 topic-page entries were added in one batch during final site wiring.
- **Site wiring finished**: all three tier `index.html` pages flipped from 📝 planned rows to real
  linked rows with accurate written-counts (14/14, 13/13, 7/7); `htmlcss/roadmap.html` flipped the
  same way, grouped by concept cluster (the user's own HTML / CSS Fundamentals / Layout / Styling &
  UI / Advanced-Production buckets, reused directly as clusters since they already form well-
  shaped cross-tier groupings) rather than by tier — matching the convention this session already
  applied to `sql/`, `aws/`, and (after a later fix) `dsa/`, `ai/`, `javascript/`; the root
  `index.html` HTML & CSS tile flipped from `class="tile soon"` with a "Coming soon" ribbon to the
  active-tile pattern every other completed track uses, with all three tier pills linked — icon 🎨
  and color `#e11d48` (both reserved when the tile was first added to the "🎨 Frontend" homepage
  section, 2026-09-18) preserved.

## Basic (14 topics) — 14 written

| # | Topic | Priority | Written? |
|---|---|---|---|
| 1 | HTML Fundamentals | 🔥 | ✅ |
| 2 | Semantic HTML | 🔥 | ✅ |
| 3 | Forms & Validation | 🔥 | ✅ |
| 4 | Accessibility | 🔥 | ✅ |
| 5 | CSS Fundamentals & Cascade | 🔥 | ✅ |
| 6 | Selectors | 🔥 | ✅ |
| 7 | Box Model | 🔥 | ✅ |
| 8 | Units & Sizing | 🔥 | ✅ |
| 9 | Display & Visibility | 🔥 | ✅ |
| 10 | Document Structure & Metadata | ⭐ | ✅ |
| 11 | Tables & Lists | ⭐ | ✅ |
| 12 | HTML5 Elements & Browser APIs | ⭐ | ✅ |
| 13 | SEO & Web Semantics | ⭐ | ✅ |
| 14 | Inheritance | ⭐ | ✅ |

## Intermediate (13 topics) — 13 written

| # | Topic | Priority | Written? |
|---|---|---|---|
| 1 | Specificity | 🔥 | ✅ |
| 2 | Positioning | 🔥 | ✅ |
| 3 | Overflow & Stacking | 🔥 | ✅ |
| 4 | Flexbox | 🔥 | ✅ |
| 5 | CSS Grid | 🔥 | ✅ |
| 6 | Responsive Design | 🔥 | ✅ |
| 7 | Typography | 🔥 | ✅ |
| 8 | Pseudo-classes & Pseudo-elements | 🔥 | ✅ |
| 9 | CSS Variables | 🔥 | ✅ |
| 10 | Container Queries | ⭐ | ✅ |
| 11 | Modern CSS Layout | ⭐ | ✅ |
| 12 | Transitions & Animations | ⭐ | ✅ |
| 13 | Colors, Backgrounds & Gradients | ⭐ | ✅ |

## Advanced (7 topics) — 7 written

| # | Topic | Priority | Written? |
|---|---|---|---|
| 1 | Browser Rendering | 🔥 | ✅ |
| 2 | CSS Performance | 🔥 | ✅ |
| 3 | Production UI Scenarios | 🔥 | ✅ |
| 4 | Accessibility in Practice | 🔥 | ✅ |
| 5 | CSS Cascade Layers | ⭐ | ✅ |
| 6 | CSS Architecture | ⭐ | ✅ |
| 7 | Cross-Browser Compatibility | ⭐ | ✅ |

## Where the roadmap came from

The user shared this track's 32-group structure directly (a compact overview tree plus a fully
sub-bulleted detailed breakdown with inline priority markers) — not drafted independently the way
some other tracks' Phase 1 taxonomies were. This session's own Phase 2 review found and folded in
two real gaps (Colors/Backgrounds/Gradients, Accessibility in Practice — see Status above).
Nothing else was invented independently of that plan or well-established, textbook-standard HTML/
CSS/browser knowledge — see [`question-taxonomy.md`](question-taxonomy.md) for the full
group-by-group provenance and [accuracy.md](../../rules/accuracy.md).

## Track-specific decisions and boundaries

- **Kept as one combined "HTML & CSS" track**, not split into two, per the user's own explicit
  instruction and this site's own separate-vs-combine rule — a real interview treats layout,
  rendering, and accessibility as one connected surface, not two separate quizzes.
- **This track's own governing content rule** (carried into every Phase 7 dispatch verbatim, and
  into this overview's own Status section above): frame pages around "what does the browser
  actually do" (HTML → DOM, CSS → CSSOM, → Render Tree → Layout → Paint → Composite) wherever
  genuinely relevant, rather than reading as a tag/property reference. `advanced/1.html` (Browser
  Rendering) owns the full picture; other pages cross-reference it.
- **Tier axis derived independently from the user's own subject-bucket tree** — see
  `roadmap.md`'s Phase 4 section for the full reasoning on which groups moved tier from where the
  user's own HTML/CSS-Fundamentals/Layout/Styling/Advanced-Production buckets would suggest (most
  notably Specificity, Positioning, and Overflow & Stacking, which read as "CSS Fundamentals" in
  the user's tree but are tiered Intermediate here on applied-reasoning grounds).
- **The user's own subject buckets became the concept-cluster grouping on `roadmap.html`
  instead** — a deliberate, separate design decision, not an oversight: those buckets are already
  well-formed cross-tier clusters, so reusing them there (rather than inventing a new clustering
  scheme, the way `dsa/`, `ai/`, and `javascript/` needed to) was the natural fit.
- **Accessibility (Basic) and Accessibility in Practice (Advanced) are two deliberately different
  pages** — Basic owns the definitional surface (ARIA, labels, keyboard nav, the native-vs-ARIA
  rule of thumb); Advanced owns the practical, senior-level angle (auditing an existing app,
  retrofitting, tooling) — the same definitional-vs-practical split used elsewhere on this site
  (e.g. DSA's Graph Fundamentals/Graph Problem Patterns).
- Icon 🎨, track color rose/red (`#e11d48`) — reserved on the root tile from the 2026-09-18
  Frontend-section restructuring, predating this track's own build.
- **Code examples are HTML/CSS**, with a little JS only where a snippet genuinely needs it (e.g. a
  `container-type` note or a `prefers-reduced-motion` check) — matches every other track's
  own-language convention.
- **Not part of the ordered core-backend path** — sits in the "🎨 Frontend" homepage section
  alongside JavaScript, React, and Angular.

## Known gaps

None — this track went through the full 7-phase pipeline, and every page passed the mandatory
independent diagram-verification sweep (34/34 pages, 43/43 diagrams, `issueCount: 0` on the final
sweep, re-confirmed clean after the pager-consistency and site-wiring edits — see the Status
section above for the real defects found and fixed along the way, not glossed over).
