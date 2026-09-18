# DSA — Track Spec

**Start here for anything DSA-related.** See [`docs/superpowers/specs/README.md`](../README.md)
for what this file is and the process for keeping it in sync with the live pages.

## Status

**Phases 1–6 complete — roadmap-only, 0/30 written.** This session drafted an initial 19-group
taxonomy, the user reviewed it, then independently cross-checked it against another AI vendor's
DSA curriculum before handing back a 30-group structure with one explicit restructuring
principle: pattern-recognition and trade-off judgment are their own layer, not scattered across
data-structure pages. That review is the primary source for this track — see
[`question-taxonomy.md`](question-taxonomy.md) for the exact group-by-group provenance and the
Phase 2 gap-hunt (2 items folded into an existing page, plus the explicit "considered and
excluded" list).

## Basic (10 topics) — roadmap only, 0 written

| # | Topic | Priority | Written? |
|---|---|---|---|
| 1 | Complexity Analysis | 🔥 | 📝 |
| 2 | Arrays & Strings | 🔥 | 📝 |
| 3 | Linked Lists | 🔥 | 📝 |
| 4 | Stacks & Queues | 🔥 | 📝 |
| 5 | Hash Tables / Hash Maps | 🔥 | 📝 |
| 6 | Binary Trees & BSTs | 🔥 | 📝 |
| 7 | Heaps / Priority Queues | 🔥 | 📝 |
| 8 | Graph Fundamentals | 🔥 | 📝 |
| 9 | Sorting | 🔥 | 📝 |
| 10 | Bit Manipulation | ⭐ | 📝 |

## Intermediate (12 topics) — roadmap only, 0 written

| # | Topic | Priority | Written? |
|---|---|---|---|
| 1 | Two Pointers & Sliding Window | 🔥 | 📝 |
| 2 | Binary Search & Search on Answer | 🔥 | 📝 |
| 3 | Recursion & Backtracking | 🔥 | 📝 |
| 4 | Greedy Algorithms | 🔥 | 📝 |
| 5 | Dynamic Programming | 🔥 | 📝 |
| 6 | Graph Problem Patterns | 🔥 | 📝 |
| 7 | Shortest Path & MST | 🔥 | 📝 |
| 8 | Topological Sort & Union-Find | 🔥 | 📝 |
| 9 | Prefix Sum & Difference Array | ⭐ | 📝 |
| 10 | Intervals & Sweep Line | ⭐ | 📝 |
| 11 | Balanced Trees | ⭐ | 📝 |
| 12 | Tries | ⭐ | 📝 |

## Advanced (8 topics) — roadmap only, 0 written

| # | Topic | Priority | Written? |
|---|---|---|---|
| 1 | Pattern Recognition | 🔥 | 📝 |
| 2 | Data Structure Trade-offs | 🔥 | 📝 |
| 3 | Time vs. Memory Trade-offs | 🔥 | 📝 |
| 4 | Streaming / Large-Dataset Problems | ⭐ | 📝 |
| 5 | External / Distributed Processing | ⭐ | 📝 |
| 6 | Scale & Performance Scenarios | ⭐ | 📝 |
| 7 | Advanced Trees | 🧠 | 📝 |
| 8 | String Algorithms | 🧠 | 📝 |

## Where the roadmap came from

This session drafted an initial 19-group taxonomy (organized by data-structure/algorithm family),
shared it with the user for validation. The user cross-checked it against another AI vendor's DSA
curriculum and returned 7 additions (Binary Search & Search on Answer, Prefix Sum & Difference
Array, Intervals & Sweep Line, Graph Problem Patterns, Pattern Recognition, Data Structure
Trade-offs, and a 5-page Senior/Architect scale section) plus a restructuring instruction: split
the original combined "Bit Manipulation & String Algorithms" group into two, since interviewers
test them differently. Nothing in the final 30-group list was invented independently of that
exchange — see [accuracy.md](../../rules/accuracy.md).

## Track-specific decisions and boundaries

- Icon 🧠, track color `#f59e0b` (amber) — already reserved on the root tile from an earlier
  planning pass (this color/icon pair pre-dates this session's work and is referenced in
  `python/overview.md` and `aws/roadmap.md`'s own color-collision notes).
- **Deliberately organized around reusable interview patterns and trade-off judgment**, not an
  algorithm encyclopedia — the track's own governing rule, carried forward verbatim from the
  user's own instruction: *"Do not create a page merely because an algorithm exists. Create a
  page when it represents a reusable interview concept, decision, pattern, comparison, or
  problem-solving technique."*
- **Pattern Recognition (Advanced #1) is this track's own differentiator page** — a synthesis of
  every technique from every earlier tier, framed as "how do I recognize the solution," not
  another algorithm write-up.
- Two Deep-Dive pages (Advanced Trees, String Algorithms) are intentionally scoped thin —
  conceptual "what problem does this solve," not implementation-depth (rotation-by-rotation,
  character-by-character).
- Explicitly excludes suffix trees/arrays, max flow/min cut, computational geometry, KD-trees,
  persistent segment trees, B-tree internals, Fibonacci heaps, and research-depth randomized
  algorithms — see the taxonomy's own "Considered and excluded" table for the reasoning per item.
- **Not part of the ordered core-backend path** — DSA sits under "🗂️ Other tracks" alongside
  React/Angular/Python/AI, per the root `index.html`'s existing layout (and its own pre-existing
  placeholder tile there).

## Known gaps

- Nothing in this track is written yet — this is a roadmap/skeleton only. Phase 7 (writing the
  actual pages) starts once this document and `roadmap.md` are reviewed.
- Tiering (Basic/Intermediate/Advanced split) and the translation of the user's own 🔥/🔥🔥/⭐/○
  markers into this site's three-state 🔥/⭐/🧠 system are judgment calls made once, not yet
  pressure-tested by actually writing the pages — treat both as reviewable, per `roadmap.md`'s own
  "Placements double-checked" section.
