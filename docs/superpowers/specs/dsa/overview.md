# DSA — Track Spec

**Start here for anything DSA-related.** See [`docs/superpowers/specs/README.md`](../README.md)
for what this file is and the process for keeping it in sync with the live pages.

## Status — Phases 1–7 complete, all 30 pages written

- **Phase 1** — this session drafted an initial 19-group taxonomy (organized by data-structure/
  algorithm family), shared it with the user for review.
- **Phase 2** — the user independently cross-checked that draft against another AI vendor's DSA
  curriculum and returned a 30-group structure with 7 additions (Binary Search & Search on
  Answer — flagged as "the biggest omission"; Prefix Sum & Difference Array; Intervals & Sweep
  Line; Graph Problem Patterns; Pattern Recognition; Data Structure Trade-offs; and a 5-page
  Senior/Architect scale section) plus one restructuring instruction (split the original combined
  "Bit Manipulation & String Algorithms" group into two, since interviewers test them
  differently). This session's own follow-up gap-hunt on top of that added 2 more items
  (reservoir sampling, Bloom filters), both folded into the Streaming / Large-Dataset Problems
  page rather than becoming new pages — see [`question-taxonomy.md`](question-taxonomy.md)'s
  Gap-hunt log for the full provenance of every one of the 30 groups.
- **Phases 3–6** — [`roadmap.md`](roadmap.md): all 30 groups mapped 1:1 to pages (no merges, no
  splits), tiered by **interview-question type** (Basic = recall/definition of core structures,
  Intermediate = applied technique/named-algorithm comparison, Advanced = judgment/trade-offs/
  scale), with three placements double-checked (Dynamic Programming stays Intermediate despite
  its 🔥🔥 emphasis, because tier and priority are independent axes; String Algorithms moved to
  Advanced tier to sit alongside its fellow Deep-Dive page, Segment/Fenwick Trees, instead of
  Intermediate; Graph Problem Patterns stays Intermediate rather than Advanced, since Pattern
  Recognition is the page that earns the Advanced-tier synthesis framing). The user's own 🔥/🔥🔥/
  ⭐/○ priority markers were translated cleanly onto this site's three-state 🔥/⭐/🧠 system with no
  conflicts — see `roadmap.md`'s own Phase 5 section.
- **Phase 7 — all 30 pages written**, dispatched one subagent per page, each content brief
  grounded in well-established, textbook-standard CS/algorithms knowledge (Big-O, standard named
  algorithms, standard technique patterns) — a lower-hallucination-risk domain than some other
  tracks built this session, but every subagent was still given the site's "don't invent
  specifics" instruction and the track's own governing rule verbatim: *"Do not create a page
  merely because an algorithm exists. Create a page when it represents a reusable interview
  concept, decision, pattern, comparison, or problem-solving technique."*
  **Diagram verification, with the actual evidence, not just an aggregate claim:** every subagent
  ran the mandatory script from
  [diagram-style.md](../../rules/diagram-style.md#mandatory-automated-verification--hand-computed-coordinates-are-not-verification)
  against its own page and reported `issueCount: 0` before finishing — several caught and
  self-fixed real defects before their own report (a label overlapping a bracket stroke in
  `intermediate/5.html`'s recursion-tree diagram; a motion-token briefly obscuring a node label in
  `basic/6.html`'s traversal diagram). The orchestrating session then ran its own **independent
  full sweep, one page at a time, all 30 pages, 45 diagrams total**: every single `svg.topic-diagram`
  came back `{"issueCount":0,"issues":[]}` on this final sweep, re-run again after the
  pager-consistency and site-wiring edits below to confirm those text-only changes didn't disturb
  any SVG — still clean every time.
- **Every page that compares 2+ named options shows the actual runtime behavior of at least one,
  not just a classification table** — this session's own cross-track diagram-behavior-gap rule
  (found and fixed across 7 other tracks earlier in this session) was written into every DSA
  content brief up front: Sorting's diagram traces an actual quicksort partition step, not a flat
  Merge/Quick/Heap comparison table; Shortest Path & MST traces Dijkstra's actual greedy expansion
  on a small graph; Data Structure Trade-offs pairs its comparison matrix with a worked 10M-record
  scenario; Greedy Algorithms traces the same coin-change problem through a canonical and a
  non-canonical coin system side by side, showing greedy's actual failure case, not just asserting
  it can fail.
- **Pager-consistency fix-up**: pages were dispatched with each subagent instructed to fall back
  to a muted "(coming soon)" link whenever a sibling page didn't yet exist on disk, per
  content-writing.md's own fallback rule — 29 of 30 files needed at least one fix once every
  sibling existed (the 30th, `advanced/8.html`, is the track's terminal page with no "next" side
  at all, and needed a one-line manual fix to its prev link since the tier-boundary script's regex
  didn't match a page with no next side). Rebuilt every pager from the canonical page-title table,
  forming one clean chain across all three tiers (Basic `1 → 10` → Intermediate `1 → 12` →
  Advanced `1 → 8`, with `advanced/8.html` correctly terminal).
- **Sidebar-navigation wiring done correctly from the start of Phase 7** — unlike the AI track
  earlier this session (where the gap was found only after all 48 pages were written), every DSA
  Phase 7 content brief explicitly required `data-tier-key="dsa/<tier>"` on `<body>` and the
  `nav-index.js` script include in the fixed script order — confirmed all 30 pages already had
  both before any site-wiring pass was needed. Only `assets/nav-index.js` itself (the three
  `dsa/basic`, `dsa/intermediate`, `dsa/advanced` entries) needed adding.
- **`assets/search-index.js` completion**: the 5 index/roadmap pages already had entries from the
  Phase 1 scaffolding; added the remaining 30 entries, one per topic page.
- **Site wiring finished**: all three tier `index.html` pages flipped from 📝 "Coming soon" rows
  to real linked rows with accurate written-counts (10/12/8); `dsa/roadmap.html` flipped the same
  way (and one row's placeholder title, "Advanced Trees," corrected to the page's actual title,
  "Segment Tree & Fenwick Tree"); the root `index.html` DSA tile flipped from `class="tile soon"`
  with a "Coming soon" ribbon (its state since before this track existed in name) to the
  active-tile pattern every other completed track uses, with all three tier pills linked — icon
  🧠 and color `#f59e0b` (both already reserved on the root tile from an earlier planning pass,
  predating this session's DSA build) preserved.

## Basic (10 topics) — 10 written

| # | Topic | Priority | Written? |
|---|---|---|---|
| 1 | Complexity Analysis | 🔥 | ✅ |
| 2 | Arrays & Strings | 🔥 | ✅ |
| 3 | Linked Lists | 🔥 | ✅ |
| 4 | Stacks & Queues | 🔥 | ✅ |
| 5 | Hash Tables / Hash Maps | 🔥 | ✅ |
| 6 | Binary Trees & BSTs | 🔥 | ✅ |
| 7 | Heaps / Priority Queues | 🔥 | ✅ |
| 8 | Graph Fundamentals | 🔥 | ✅ |
| 9 | Sorting | 🔥 | ✅ |
| 10 | Bit Manipulation | ⭐ | ✅ |

## Intermediate (12 topics) — 12 written

| # | Topic | Priority | Written? |
|---|---|---|---|
| 1 | Two Pointers & Sliding Window | 🔥 | ✅ |
| 2 | Binary Search & Search on Answer | 🔥 | ✅ |
| 3 | Recursion & Backtracking | 🔥 | ✅ |
| 4 | Greedy Algorithms | 🔥 | ✅ |
| 5 | Dynamic Programming | 🔥 | ✅ |
| 6 | Graph Problem Patterns | 🔥 | ✅ |
| 7 | Shortest Path & MST | 🔥 | ✅ |
| 8 | Topological Sort & Union-Find | 🔥 | ✅ |
| 9 | Prefix Sum & Difference Array | ⭐ | ✅ |
| 10 | Intervals & Sweep Line | ⭐ | ✅ |
| 11 | Balanced Trees | ⭐ | ✅ |
| 12 | Tries | ⭐ | ✅ |

## Advanced (8 topics) — 8 written

| # | Topic | Priority | Written? |
|---|---|---|---|
| 1 | Pattern Recognition | 🔥 | ✅ |
| 2 | Data Structure Trade-offs | 🔥 | ✅ |
| 3 | Time vs. Memory Trade-offs | 🔥 | ✅ |
| 4 | Streaming / Large-Dataset Problems | ⭐ | ✅ |
| 5 | External / Distributed Processing | ⭐ | ✅ |
| 6 | Scale & Performance Scenarios | ⭐ | ✅ |
| 7 | Segment Tree & Fenwick Tree | 🧠 | ✅ |
| 8 | String Algorithms | 🧠 | ✅ |

## Where the roadmap came from

This session drafted an initial 19-group taxonomy, the user independently cross-checked it
against another AI vendor's DSA curriculum, and returned the 30-group structure above with 7
additions and one restructuring instruction. This session's own Phase 2 gap-hunt on top of that
found 2 more real gaps (reservoir sampling, Bloom filters), both folded into the Streaming /
Large-Dataset Problems page. Nothing was invented independently of that exchange or
well-established, textbook-standard CS/algorithms knowledge — see
[`question-taxonomy.md`](question-taxonomy.md) for the full group-by-group provenance and
[accuracy.md](../../rules/accuracy.md).

## Track-specific decisions and boundaries

- Icon 🧠, track color `#f59e0b` (amber) — reserved on the root tile from an earlier planning
  pass, predating this session's build; kept as-is.
- **Deliberately organized around reusable interview patterns and trade-off judgment**, not an
  algorithm encyclopedia — the track's own governing rule, carried forward verbatim from the
  user's own instruction: *"Do not create a page merely because an algorithm exists. Create a
  page when it represents a reusable interview concept, decision, pattern, comparison, or
  problem-solving technique."*
- **Pattern Recognition (Advanced #1) is this track's own differentiator page** — a synthesis of
  every technique from every earlier tier (15 signal→technique routes), explicitly framed as "how
  do I recognize the solution," not another algorithm write-up. Opens the Advanced tier as a
  bridge from Intermediate's applied techniques into Advanced's judgment layer.
- Two Deep-Dive pages (Segment Tree & Fenwick Tree, String Algorithms) are intentionally scoped
  thin — conceptual "what problem does this solve and when would you reach for it," not
  implementation-depth (rotation-by-rotation, character-by-character, bit-trick-by-bit-trick).
- Explicitly excludes suffix trees/arrays, max flow/min cut, computational geometry, KD-trees,
  persistent segment trees, B-tree internals, Fibonacci heaps, and research-depth randomized
  algorithms — see the taxonomy's own "Considered and excluded" table for the reasoning per item.
- **Not part of the ordered core-backend path** — DSA sits under "🗂️ Other tracks" alongside
  React/Angular/Python/AI, per the root `index.html`'s existing layout.

## Known gaps

None — this track went through the full 7-phase pipeline (Phase 2's own gap-hunt already folded
into the initial pass), and every page passed the mandatory independent diagram-verification
sweep (30/30 pages, 45/45 diagrams, `issueCount: 0` on the final sweep, re-confirmed clean after
the pager-consistency and site-wiring edits — see the Status section above for the real defects
found and fixed along the way, not glossed over). The 29 files with at least one stale pager link,
the one manual terminal-page pager fix, and the `assets/nav-index.js` tier entries added during
site wiring are also documented above, not silently corrected. Expect a review/feedback pass once
the user goes through it, same as every other completed track.
