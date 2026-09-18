# Rule: One-level "Back" button in the crumb bar

Shipped feature, site-wide, zero per-page markup — live from 2026-09-18 onward. Read this before
touching the back button, the crumb bar, or `assets/nav-index.js`/`assets/search-index.js`'s own
click handling.

## What it is, and why

A small "← Back" pill, right-aligned inside `nav.crumbs.wrap` (so it sits directly under the
search box, which is right-aligned one row up in `.topbar`), that appears **only** when the
current page was reached by clicking a real internal link from another page on this site. It
does not appear on a fresh visit, a reload, or a page reached via the search box or via the Back
button itself.

Requested because the two hub pages a reader actually needs to get back to — a track's
`roadmap.html` and a tier's `index.html` — have no other way back once you've clicked one level
into a topic page, and a plain "go back" loses exactly where you were: which concept-cluster or
question-group was open. This feature restores both: the correct page, and the same
group expanded and scrolled into view.

**Deliberately one level, never a stack.** The user's own framing: "no need to track n levels...
simply one level tracking only." A page reached BY clicking Back never shows its own Back button
— there is no "back from back."

## Architecture: zero markup on any page, ever

Same pattern as the fixed bottom pager and the tier-nav sidebar (see
[tier-navigation.md](tier-navigation.md)) — **no page's HTML changes.** The whole thing is the
last IIFE in `assets/site.js`, reading/writing nothing but the current URL's query string. No
sessionStorage, no per-page data file.

1. **On every internal `<a>` click** (delegated on `document`, capture phase — so the href is
   rewritten before the browser reads it for navigation), the outgoing link's `href` gets two
   query params appended: `bfrom` (this page's own clean URL, for Back to return to) and `bt` (a
   short label, taken from `document.title` split on `" — "`). If the clicked link lives inside
   a `.roadmap-tier` or `.qgroup` accordion, a third param `bopen` (that group's 0-based index
   among all matching elements on the page) is appended to the `bfrom` value itself.
2. **Excluded from step 1, on purpose:** clicks on the Back button itself (`.crumb-back`) and
   clicks inside `.gsearch-results` (the search dropdown navigates via `location.href =`, not a
   real `<a>`, so it's already naturally excluded — the explicit check is defensive). This is
   the whole mechanism behind "reached via Back never shows Back" and "reached via search never
   shows Back": neither path ever adds a `bfrom` to where it's going.
3. **On page load**, read `bfrom`/`bt`/`bopen` from `location.search`. If `bfrom` is present,
   render `.crumb-back` with that href and label. If `bopen` is present (on either kind of
   accordion page), open `document.querySelectorAll('.roadmap-tier, .qgroup')[bopen]` and
   `scrollIntoView` it. Then strip all three params from the visible URL via
   `history.replaceState` — this is what makes a reload not re-show Back, and what keeps this
   page's own outgoing links (step 1, next click) tagging from a clean URL instead of
   compounding old params onto new ones.

## Verified end-to-end (Playwright, before pushing)

Six scenarios, all passing — see the session that added this for the exact test script if it's
ever needed again:

1. `roadmap.html` → click a topic inside a collapsed cluster → topic page shows `.crumb-back`
   labeled "Back to `<Track Roadmap title>`", href carries `?bopen=<index>`.
2. Clicking that Back → lands on `roadmap.html` with the correct cluster `open` and scrolled into
   view, centered — and `roadmap.html` itself shows no Back button.
3. A search-box navigation (`location.href =`, same as `goTo()` in `site.js`) never produces a
   Back button on the destination.
4. Topic A → pager "Next" → topic B shows Back to A; clicking it returns to A, and A shows no
   Back button.
5. Same as 1–2 but for a tier's `index.html` and its `.qgroup` accordions (not just
   `roadmap.html`'s `.roadmap-tier` clusters) — the mechanism is generic across both.
6. After landing on a page via a tagged link, the URL bar has no stray `?bfrom=...` in it, and
   reloading that same page does not bring the Back button back.

## If you touch this later

- **Don't add a history stack.** The one-level-only behavior is the point, not a limitation to
  fix — see "What it is, and why" above.
- **Don't move the accordion-index calculation off DOM order.** `.roadmap-tier`/`.qgroup`
  elements have no stable `id`; the 0-based index among `querySelectorAll(GROUP_SELECTOR)` is
  computed identically at tag-time (which group the clicked link's ancestor is) and at
  open-time (which group to expand) — as long as a page's cluster/group order doesn't change
  between those two moments (it never does; they're the same page load), this stays correct
  without needing real IDs.
- **Don't special-case a track or a page type.** The whole mechanism reads only `document.title`
  (for the label) and `.roadmap-tier`/`.qgroup` (for which accordion to reopen) — both already
  exist, unmodified, on every track. Adding a new track never requires touching this file.
