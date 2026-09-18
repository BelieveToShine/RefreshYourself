# DSA — Roadmap (Phases 3–6)

Builds on [`question-taxonomy.md`](question-taxonomy.md)'s 30 groups (28 from the user's own
vendor-cross-checked proposal + 2 gap-hunt candidates, both folded into an existing group rather
than becoming new pages — see that file's Gap-hunt log).

## Phase 3 — Grouping into pages

All 30 groups map 1:1 onto 30 pages — no merges, no splits. Each concept is already the right
size for one topic page, matching the granularity the user's own final tree used (one bullet-tree
leaf = one page).

## Phase 4 — Tiering (by interview-question type, not difficulty)

Per [`interview-depth-and-priority.md`](../../rules/interview-depth-and-priority.md): tier is
about the *shape* of the question — recall/definition is Basic, practical usage/comparison/
troubleshooting is Intermediate, internals/performance/trade-offs/architecture/scenarios is
Advanced — never how hard the underlying topic sounds.

- **Basic (10)** — the core-structure vocabulary every DSA interview assumes on sight:
  Complexity Analysis, Arrays & Strings, Linked Lists, Stacks & Queues, Hash Tables/Hash Maps,
  Binary Trees & BSTs, Heaps/Priority Queues, Graph Fundamentals, Sorting, and Bit Manipulation.
  Each of these is "what is X, what are its operations, what's the complexity" — recall/
  definition, even though a few (Heaps, Sorting) have real applied depth explored later.
- **Intermediate (12)** — the applied-technique layer: Two Pointers & Sliding Window, Binary
  Search & Search on Answer, Recursion & Backtracking, Greedy Algorithms, Dynamic Programming,
  Graph Problem Patterns, Shortest Path & MST, Topological Sort & Union-Find, Prefix Sum &
  Difference Array, Intervals & Sweep Line, Balanced Trees, and Tries — all "how do you actually
  apply this to solve a problem" or "which named algorithm, and why," not just definitions.
- **Advanced (8)** — judgment, architecture, and scale: Pattern Recognition (synthesis across
  everything above), Data Structure Trade-offs, Time vs. Memory Trade-offs, Streaming/
  Large-Dataset Problems, External/Distributed Processing, Scale & Performance Scenarios, and the
  two Deep-Dive structures (Advanced Trees, String Algorithms) that are genuinely niche rather
  than difficult.

**Placements double-checked:**
- *Dynamic Programming* reads like it could be Advanced (it's the most judgment-heavy technique
  in the whole track, and the user's own review flagged it 🔥🔥), but per this site's own rule
  that *priority* and *tier* are independent axes, a DP interview question is still fundamentally
  "design an approach to this problem" — practical usage, not internals/architecture. Kept
  Intermediate, priority stays 🔥.
- *String Algorithms* (KMP/Rabin-Karp) reads like it could be Intermediate (it's "how do you
  implement fast substring search," an applied technique like its siblings), but the user
  explicitly grouped it with Advanced Trees under the same "Deep Dive, not core prep" symbol (○).
  Moved to Advanced tier alongside Advanced Trees for internal consistency — both are genuinely
  niche-depth topics being intentionally deprioritized, not merely "hard."
- *Graph Problem Patterns* reads like it could be Advanced (recognizing "this grid is actually a
  graph" is a judgment skill), but it's still fundamentally an applied technique for solving a
  given problem, the same shape as Two Pointers or Sliding Window — kept Intermediate, sitting
  right next to its sibling graph pages. The track's *synthesis-across-everything* page (Pattern
  Recognition) is what earns the Advanced-tier judgment framing instead.

## Phase 5 — Priority (🔥 Must Know / ⭐ Should Know / 🧠 Deep Dive)

Carried forward from the user's own priority markers (🔥, 🔥🔥, ⭐, ○), with two translations into
this site's three-state system (never four states, and never a "double-hot" state):
- Every 🔥 and 🔥🔥 mark → 🔥 **Must Know**. The 🔥🔥 marks (Binary Search & Search on Answer,
  Dynamic Programming, Pattern Recognition) don't get a stronger *priority* tag than a single 🔥
  — priority is binary-plus-one on this site, not a 5-point scale — but each was given deliberately
  richer content-brief detail for Phase 7 (a bigger diagram, more worked patterns) to reflect that
  extra emphasis without inventing a fourth priority tier.
- Every ○ mark → 🧠 **Deep Dive** (Advanced Trees, String Algorithms) — matches this site's
  existing "niche, optional, low interview frequency" meaning for 🧠, not "hardest."
- Every remaining ⭐ mark → ⭐ **Should Know**, unchanged.

No conflicts to resolve (unlike Azure/SQL/Python, which each had source-tag-vs-summary conflicts)
— the user's markers mapped cleanly onto this site's existing three-state system.

## Phase 6 — Final page table

| # | Page | Tier | Priority | File |
|---|---|---|---|---|
| 1 | Complexity Analysis | Basic | 🔥 | `dsa/basic/1.html` |
| 2 | Arrays & Strings | Basic | 🔥 | `dsa/basic/2.html` |
| 3 | Linked Lists | Basic | 🔥 | `dsa/basic/3.html` |
| 4 | Stacks & Queues | Basic | 🔥 | `dsa/basic/4.html` |
| 5 | Hash Tables / Hash Maps | Basic | 🔥 | `dsa/basic/5.html` |
| 6 | Binary Trees & BSTs | Basic | 🔥 | `dsa/basic/6.html` |
| 7 | Heaps / Priority Queues | Basic | 🔥 | `dsa/basic/7.html` |
| 8 | Graph Fundamentals | Basic | 🔥 | `dsa/basic/8.html` |
| 9 | Sorting | Basic | 🔥 | `dsa/basic/9.html` |
| 10 | Bit Manipulation | Basic | ⭐ | `dsa/basic/10.html` |
| 11 | Two Pointers & Sliding Window | Intermediate | 🔥 | `dsa/intermediate/1.html` |
| 12 | Binary Search & Search on Answer | Intermediate | 🔥 | `dsa/intermediate/2.html` |
| 13 | Recursion & Backtracking | Intermediate | 🔥 | `dsa/intermediate/3.html` |
| 14 | Greedy Algorithms | Intermediate | 🔥 | `dsa/intermediate/4.html` |
| 15 | Dynamic Programming | Intermediate | 🔥 | `dsa/intermediate/5.html` |
| 16 | Graph Problem Patterns | Intermediate | 🔥 | `dsa/intermediate/6.html` |
| 17 | Shortest Path & MST | Intermediate | 🔥 | `dsa/intermediate/7.html` |
| 18 | Topological Sort & Union-Find | Intermediate | 🔥 | `dsa/intermediate/8.html` |
| 19 | Prefix Sum & Difference Array | Intermediate | ⭐ | `dsa/intermediate/9.html` |
| 20 | Intervals & Sweep Line | Intermediate | ⭐ | `dsa/intermediate/10.html` |
| 21 | Balanced Trees | Intermediate | ⭐ | `dsa/intermediate/11.html` |
| 22 | Tries | Intermediate | ⭐ | `dsa/intermediate/12.html` |
| 23 | Pattern Recognition | Advanced | 🔥 | `dsa/advanced/1.html` |
| 24 | Data Structure Trade-offs | Advanced | 🔥 | `dsa/advanced/2.html` |
| 25 | Time vs. Memory Trade-offs | Advanced | 🔥 | `dsa/advanced/3.html` |
| 26 | Streaming / Large-Dataset Problems | Advanced | ⭐ | `dsa/advanced/4.html` |
| 27 | External / Distributed Processing | Advanced | ⭐ | `dsa/advanced/5.html` |
| 28 | Scale & Performance Scenarios | Advanced | ⭐ | `dsa/advanced/6.html` |
| 29 | Advanced Trees | Advanced | 🧠 | `dsa/advanced/7.html` |
| 30 | String Algorithms | Advanced | 🧠 | `dsa/advanced/8.html` |

`dsa/roadmap.html` groups by tier (matching the AI track's own precedent) rather than cross-tier
concept clusters like SQL/Azure/AWS/Python use — there's no strong cross-tier-cluster structure in
this source the way there was for e.g. Python's "Memory, GIL & Concurrency," since the user's own
tree is already organized by structure-family within each tier.

## Track-specific decisions and boundaries

- **Icon 🧠, track color `#f59e0b`** (amber) — already reserved on the root tile from an earlier
  planning pass (confirmed in `python/overview.md` and `aws/roadmap.md`'s own color-collision
  notes); kept as-is rather than picking a new color.
- **Pattern Recognition (Advanced #1) is the track's own differentiator page** — per the user's
  explicit framing, "this could become one of the most valuable DSA pages on the site." It bridges
  Intermediate's applied techniques into Advanced's judgment layer, so it opens the Advanced tier
  rather than closing it.
- **Every page gets three question shapes where the topic supports it** (direct / comparison /
  scenario), per the user's own worked HashMap example — not "define X," but "why would you choose
  X over Y" and "given this scenario, what would you pick, and why." This is this track's version
  of the accuracy/depth bar every other track already applies for its own audience.
- **Two Deep-Dive pages (Advanced Trees, String Algorithms) are intentionally thin on
  implementation depth** — conceptual "what problem does this solve and when would you reach for
  it," not a rotation-by-rotation or character-by-character algorithm walkthrough. Matches the
  user's own explicit instruction not to turn this into a CS-theory course.
- **Not part of the ordered core-backend path** — DSA sits under "🗂️ Other tracks" alongside
  React/Angular/Python/AI, per the root `index.html`'s existing layout (and its own pre-existing
  placeholder tile there).
- **The mandatory diagram-behavior-gap check applies here too** — several pages in this track
  compare 2+ named options (sorting algorithms, shortest-path algorithms, HashMap vs. TreeMap,
  array vs. linked list): per this session's own cross-track sweep earlier, a comparison table or
  a 2×2 classification alone is not sufficient — at least one diagram per such page must show how
  the winning option actually behaves at runtime, not just classify the options.

## Known gaps

None — Phase 2's gap-hunt (reservoir sampling, Bloom filters) is folded into the initial taxonomy
pass, and this file is written before any Phase 7 page exists, per the mandated 7-phase order.
