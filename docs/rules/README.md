# Rules index

**Read [product-principle.md](product-principle.md) first, always** — it's the lens every rule
below gets judged through: this site is a visual interview-recall system, not a documentation
site, and that changes how every other rule here should be applied.

## Non-negotiables (the checklist `CLAUDE.md` points here for)

These were the "Quick reminders" in `CLAUDE.md`; they live here so `CLAUDE.md` can stay short.
Each links to the rule file that owns the detail.

1. **Never write a technical claim you're not confident is true** — no invented specifics to sound
   authoritative. [accuracy.md](accuracy.md) outranks every other content rule.
2. **Teach in priority order** — most-asked (🔥) topics as early as dependencies allow, every row
   carries its 🔥/⭐/🧠 badge, numbering is permanent
   ([content-writing.md](content-writing.md#ordering-priority-badge--teaching-order-amended-2026-10-06)).
3. **List the full roadmap on the tier index before writing pages** — planned-but-unwritten rows
   are muted, unlinked, tagged 📝. Numbering is permanent from the moment a topic is listed.
4. **Every topic page has at least one diagram**, inline in that page's own HTML (never a separate
   `.svg`), next to the part of the explanation it supports ([diagram-style.md](diagram-style.md)).
5. **Very simple words, genuinely short** — 2–3 tight paragraphs; "Why it matters" is 2–3 bullets
   (single concept) or a Problem→Solution why-grid (comparing several named things), never a
   flowing paragraph; one real-world example, one breath long
   ([why-it-matters.md](why-it-matters.md)).
6. **New inline label+text patterns (badge, tag) must render with a visible gap** — measure the
   pixel gap in a live browser; two bare adjacent inline elements with no whitespace in the HTML
   render with zero gap whatever the CSS `gap`/`margin` says
   ([why-it-matters.md](why-it-matters.md#markup-discipline-the-tag-and-its-text-are-always-two-separate-dedicated-spans)).
7. **Grid column count is decided by rendering at real content length**, never a fixed default or
   `auto-fit` guesswork (it can orphan a trailing card)
   ([why-it-matters.md](why-it-matters.md#column-count-is-a-judgment-call-not-a-fixed-default)).
8. **Every new page needs an entry in `assets/search-index.js`** (and the rest of the wiring
   listed in [site-architecture.md](site-architecture.md)).
9. **Never commit, push or open a PR without being asked that turn.**
10. **Plain HTML/CSS/JS only** — no framework, no build step; one shared stylesheet
    (`assets/style.css`) and one shared script (`assets/site.js`).

Standing rules for this repo, split by the action you're about to take. Rules are mandatory and
override default behavior — read the relevant one before doing the thing, not after.

| About to… | Read |
|---|---|
| Anything at all on this site | [product-principle.md](product-principle.md) — read this one first |
| Need the map: folders, page anatomy, run/deploy/branches, what else must change | [site-architecture.md](site-architecture.md) |
| About to commit (docs must be updated in the same commit; hooks enforce it) | [pre-commit-docs-sync.md](pre-commit-docs-sync.md) |
| Write or edit any topic page's content (words, ordering, template) | [content-writing.md](content-writing.md) |
| Write a technical claim of any kind (diagram, explanation, code, key point) | [accuracy.md](accuracy.md) |
| Draw or edit a diagram | [diagram-style.md](diagram-style.md) |
| Touch fonts, colors, highlights, logos, breadcrumbs | [visual-style.md](visual-style.md) |
| Touch link hover behavior, or add a new chip/tile/pill/button-style anchor | [link-hover.md](link-hover.md) |
| Add or restructure a page, folder, or the tier index | [content-structure.md](content-structure.md) |
| Write or edit the "Say this in the interview" box | [keypoints.md](keypoints.md) |
| Write or edit the "🔥 Easy interview recall" box | [interview-recall.md](interview-recall.md) |
| Write or edit the "⚠️ Common Trap" box | [common-trap.md](common-trap.md) |
| Write or edit the "Why it matters" box (plain bullets or the Problem→Solution why-grid) | [why-it-matters.md](why-it-matters.md) |
| Write or edit the "🧭 Use Cases" panel | [use-cases.md](use-cases.md) |
| Retrofit an already-shipped page's "Why it matters"/"Use Cases" (not writing a new page) | [retrofit-why-usecases.md](retrofit-why-usecases.md) |
| Add a new page, or touch `assets/site.js` / the search index | [search.md](search.md) |
| Wire up the left "tier navigation" sidebar for a tier, or touch `assets/nav-index.js` | [tier-navigation.md](tier-navigation.md) |
| Touch the crumb bar's "← Back" button, or the click-tagging/URL-param logic behind it in `assets/site.js` | [back-navigation.md](back-navigation.md) |
| Assign a tier (Basic/Intermediate/Advanced) or priority (🔥/⭐/🧠) to any question, on any track | [interview-depth-and-priority.md](interview-depth-and-priority.md) |
| Run Phase 2 (review) on any track — dedupe AND identify gaps, the second half is easy to skip | [gap-hunting.md](gap-hunting.md) |
| Run Phase 7 (writing pages) on a track — subagent dispatch, safety, verification, site wiring | [build-process.md](build-process.md) |
| Report anything as "committed" or "pushed" in chat | [reporting.md](reporting.md) — name the branch and commit hash, not just "done" |
| Add a scenario question to `scenarios/index.html`, or write a new dedicated "Scenario:"-style page | [scenario-bank.md](scenario-bank.md) |
| Touch the "My List" save-list feature (`mylist.html`, `assets/mylist.js`, the `ml-`/`mylist-` bits in `site.js`/`style.css`) | [my-list.md](my-list.md) |

For the whole-project picture read [`docs/refreshyourself-overview.md`](../refreshyourself-overview.md)
first; current page counts are in [`docs/status.md`](../status.md).
