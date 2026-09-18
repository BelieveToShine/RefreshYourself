# HTML & CSS — Roadmap (Phases 2-6)

Phase 1 output: [`question-taxonomy.md`](question-taxonomy.md) — 34 concept groups (32 from the
user's own detailed plan, plus 2 gap-hunt additions: Colors/Backgrounds/Gradients, Accessibility
in Practice). This file is Phases 2-6: review, page grouping, tier, priority, and the final
roadmap — see [`specs/README.md`](../README.md) for what each phase means.

## Phase 2 — Review

Covered in full in `question-taxonomy.md`'s own Reconciliation section and Gap-hunt log — the
two mismatches between the user's overview tree and detailed breakdown, both resolved as new
pages rather than left uncovered. No other dedupe or gaps found: checked each of the user's own
close-neighbor pairs (Specificity vs. CSS Fundamentals & Cascade; Positioning vs. Overflow &
Stacking; Flexbox vs. CSS Grid; CSS Variables vs. CSS Cascade Layers) and confirmed each pair
asks a genuinely different question, not overlapping content.

## Phase 3 — Grouping into pages: 34 groups, 1:1 to pages

Every group maps to exactly one page — no merges, no splits — matching the same "one topic, one
page" rule applied to every other track this session. The user's own note that this track
should avoid becoming "a list of tags and properties" is honored through **content depth and
framing, not extra pages**: this track's own governing rule, carried into every Phase 7 dispatch
verbatim —

> "Don't present this as HTML topics + CSS topics on the actual interview pages. The stronger
> framing is 'What does the browser actually do?' — HTML → DOM, CSS → CSSOM, DOM + CSSOM →
> Render Tree → Layout → Paint → Composite. HTML/CSS pages should repeatedly connect back to
> this mental model, instead of reading as a list of tags and properties."

`intermediate/1.html` (Browser Rendering, the track's own rendering-pipeline page) is the one
page that teaches this picture in full; every other page that plausibly touches it (Box Model,
Positioning, Overflow & Stacking, Flexbox, CSS Grid, CSS Performance) cross-references it rather
than re-teaching it, the same "one page owns the depth, others link back" pattern used across
this whole session (e.g. DSA's Event Loop vs. Runtime & Execution Model, JavaScript's Prototypes
vs. Classes).

**Pages carrying this track's deepest per-page treatment** (2 diagrams instead of 1, matching
the "six deep JavaScript pages" pattern) — chosen from the groups the user's own inline markers
flagged with the heaviest emphasis (🔥🔥 or 🔥🔥🔥, not just 🔥): Semantic HTML, Forms &
Validation, Accessibility, CSS Fundamentals & Cascade, Specificity, Box Model, Positioning,
Flexbox, CSS Grid, Responsive Design, Browser Rendering. Kept as one page each, not split, per
the same "one topic, one page" rule.

**The user's own "○ Deep Dive" list (Advanced rendering internals, advanced CSS performance,
complex stacking-context behavior, subgrid edge cases, advanced cascade mechanics,
browser-specific rendering quirks) does not become its own tier of pages.** Every item on that
list is already an *aspect* of an existing Advanced-tier page (Browser Rendering owns rendering
internals; CSS Performance owns performance internals; Overflow & Stacking owns stacking-context
depth; Modern CSS Layout owns subgrid; CSS Fundamentals & Cascade/Specificity own cascade
mechanics; Cross-Browser Compatibility owns rendering quirks) — folding the depth into that
page's Explanation section is exactly what this site's "no separate Architect tier" rule (see
[`interview-depth-and-priority.md`](../../rules/interview-depth-and-priority.md)) already
prescribes: Advanced already covers this depth, it doesn't need its own page per item.

## Phase 4 — Tier (by question type, not difficulty)

Tiered independently against this site's own type-based definition (Basic = core-knowledge/
definitional; Intermediate = applied technique/comparison/troubleshooting; Advanced =
internals/performance/architecture/scenario) — **not** copied from the user's own HTML / CSS
Fundamentals / Layout / Styling & UI / Advanced-Production subject buckets, which mix
definitional and applied content within each bucket (e.g. the user's own "CSS Fundamentals"
bucket contains both bare-definitional pages like Box Model and applied-troubleshooting pages
like Positioning). Those subject buckets are kept as this track's **concept-cluster grouping on
`roadmap.html`** (Phase 6) instead, since they map naturally onto that convention — but the tier
axis is a separate, independent judgment call, exactly as the site's own rule requires.

| Tier | Count | Groups |
|---|---|---|
| Basic | 14 | HTML Fundamentals; Semantic HTML; Forms & Validation; Accessibility; CSS Fundamentals & Cascade; Selectors; Box Model; Units & Sizing; Display & Visibility; Document Structure & Metadata; Tables & Lists; HTML5 Elements & Browser APIs; SEO & Web Semantics; Inheritance |
| Intermediate | 13 | Specificity; Positioning; Overflow & Stacking; Flexbox; CSS Grid; Responsive Design; Typography; Pseudo-classes & Pseudo-elements; CSS Variables; Container Queries; Modern CSS Layout; Transitions & Animations; Colors, Backgrounds & Gradients |
| Advanced | 7 | Browser Rendering; CSS Performance; Production UI Scenarios; Accessibility in Practice; CSS Cascade Layers; CSS Architecture; Cross-Browser Compatibility |

Placements double-checked:
- **Semantic HTML and Forms & Validation stay Basic** despite having real comparison content
  (div vs. semantic tag, client- vs. server-side validation) — the comparisons are foundational
  vocabulary contrasts every developer needs cold, the same reasoning that kept JavaScript's
  `==` vs. `===` and `var`/`let`/`const` in its own Basic tier despite also being comparisons.
- **Specificity, Positioning, and Overflow & Stacking move to Intermediate**, out of the user's
  own "CSS Fundamentals" bucket — each one's actual interview value is in applied reasoning
  ("which rule wins and why," "why is this positioned wrong," "why doesn't `z-index` work"), not
  bare definition, matching Intermediate's own comparison/troubleshooting definition.
- **Accessibility (Basic) and Accessibility in Practice (Advanced) are deliberately two
  different pages, two different tiers** — Basic owns the definitional surface (ARIA, labels,
  keyboard nav, the native-vs-ARIA rule of thumb); Advanced owns the practical, senior-level
  angle (auditing an existing app, retrofitting, tooling) — the same definitional-vs-practical
  split as DSA's Graph Fundamentals/Graph Problem Patterns or JavaScript's Prototypes/Classes.

## Phase 5 — Priority translation

The user's own inline markers (🔥 / 🔥🔥 / 🔥🔥🔥 / ⭐) collapse onto this site's two-state 🔥/⭐
system the same way JavaScript's did — any level of 🔥 becomes this site's 🔥 Must Know, ⭐ stays
⭐ Should Know. No group needed this site's 🧠 Deep Dive marker as a *page-level* priority — the
user's own "○ Deep Dive" list names *aspects within* Advanced pages, not distinct pages (see
Phase 3 above), so it doesn't correspond to a 🧠-tagged page the way JavaScript's Proxy & Reflect
did.

| Priority | Groups |
|---|---|
| 🔥 Must Know | HTML Fundamentals; Semantic HTML; Forms & Validation; Accessibility; CSS Fundamentals & Cascade; Selectors; Specificity; Box Model; Units & Sizing; Display & Visibility; Positioning; Overflow & Stacking; Flexbox; CSS Grid; Responsive Design; Typography; Pseudo-classes & Pseudo-elements; CSS Variables; Browser Rendering; CSS Performance; Production UI Scenarios; Accessibility in Practice |
| ⭐ Should Know | Document Structure & Metadata; Tables & Lists; HTML5 Elements & Browser APIs; SEO & Web Semantics; Inheritance; Container Queries; Modern CSS Layout; Transitions & Animations; Colors, Backgrounds & Gradients; CSS Cascade Layers; CSS Architecture; Cross-Browser Compatibility |

## Phase 6 — Final roadmap: 34 pages

Hot-first ordering within each tier (site-wide rule, every tier, every track).

| # | Concept | Tier | Priority | Page |
|---|---|---|---|---|
| 1 | HTML Fundamentals | Basic | 🔥 | basic/1.html |
| 2 | Semantic HTML | Basic | 🔥 | basic/2.html |
| 3 | Forms & Validation | Basic | 🔥 | basic/3.html |
| 4 | Accessibility | Basic | 🔥 | basic/4.html |
| 5 | CSS Fundamentals & Cascade | Basic | 🔥 | basic/5.html |
| 6 | Selectors | Basic | 🔥 | basic/6.html |
| 7 | Box Model | Basic | 🔥 | basic/7.html |
| 8 | Units & Sizing | Basic | 🔥 | basic/8.html |
| 9 | Display & Visibility | Basic | 🔥 | basic/9.html |
| 10 | Document Structure & Metadata | Basic | ⭐ | basic/10.html |
| 11 | Tables & Lists | Basic | ⭐ | basic/11.html |
| 12 | HTML5 Elements & Browser APIs | Basic | ⭐ | basic/12.html |
| 13 | SEO & Web Semantics | Basic | ⭐ | basic/13.html |
| 14 | Inheritance | Basic | ⭐ | basic/14.html |
| 1 | Specificity | Intermediate | 🔥 | intermediate/1.html |
| 2 | Positioning | Intermediate | 🔥 | intermediate/2.html |
| 3 | Overflow & Stacking | Intermediate | 🔥 | intermediate/3.html |
| 4 | Flexbox | Intermediate | 🔥 | intermediate/4.html |
| 5 | CSS Grid | Intermediate | 🔥 | intermediate/5.html |
| 6 | Responsive Design | Intermediate | 🔥 | intermediate/6.html |
| 7 | Typography | Intermediate | 🔥 | intermediate/7.html |
| 8 | Pseudo-classes & Pseudo-elements | Intermediate | 🔥 | intermediate/8.html |
| 9 | CSS Variables | Intermediate | 🔥 | intermediate/9.html |
| 10 | Container Queries | Intermediate | ⭐ | intermediate/10.html |
| 11 | Modern CSS Layout | Intermediate | ⭐ | intermediate/11.html |
| 12 | Transitions & Animations | Intermediate | ⭐ | intermediate/12.html |
| 13 | Colors, Backgrounds & Gradients | Intermediate | ⭐ | intermediate/13.html |
| 1 | Browser Rendering | Advanced | 🔥 | advanced/1.html |
| 2 | CSS Performance | Advanced | 🔥 | advanced/2.html |
| 3 | Production UI Scenarios | Advanced | 🔥 | advanced/3.html |
| 4 | Accessibility in Practice | Advanced | 🔥 | advanced/4.html |
| 5 | CSS Cascade Layers | Advanced | ⭐ | advanced/5.html |
| 6 | CSS Architecture | Advanced | ⭐ | advanced/6.html |
| 7 | Cross-Browser Compatibility | Advanced | ⭐ | advanced/7.html |

`htmlcss/roadmap.html` groups these same 34 pages by the user's own 5 subject buckets (HTML;
CSS Fundamentals; Layout; Styling & UI; Advanced/Production) as concept clusters, matching the
cross-tier concept-cluster convention every other track's roadmap page uses (SQL, AWS, .NET,
and — after a 2026-09-18 fix — DSA, AI, and JavaScript too).

## Track-specific decisions and boundaries

- **Kept as one combined "HTML & CSS" track**, not split into two, per the user's own rule for
  when to separate vs. combine technologies — a real interview treats layout/rendering/
  accessibility as one connected surface.
- **This track's own governing content rule** (carried into every Phase 7 dispatch verbatim):
  frame pages around "what does the browser actually do" (HTML → DOM, CSS → CSSOM, → Render
  Tree → Layout → Paint → Composite) wherever genuinely relevant, rather than reading as a tag/
  property reference. `intermediate/1.html`... **correction**, `advanced/1.html` (Browser
  Rendering) owns the full picture; other pages cross-reference it.
- Icon 🎨, track color rose/red (`#e11d48`) — already reserved on the root tile from the
  2026-09-18 Frontend-section restructuring, predating this track's own build.
- **Code examples are HTML/CSS** (with a little JS only where a snippet genuinely needs it, e.g.
  a `container-type` polyfill note or a `prefers-reduced-motion` check) — matches every other
  track's own-language convention.
- **Not part of the ordered core-backend path** — sits in the "🎨 Frontend" homepage section
  alongside JavaScript, React, and Angular, per the user's own restructuring request from
  2026-09-18.

## Known gaps

None — every one of the user's 32 groups is represented, plus the two gap-hunt additions
(Colors/Backgrounds/Gradients, Accessibility in Practice) this track's own Phase 2 found and
folded in as their own pages rather than leaving them uncovered.
