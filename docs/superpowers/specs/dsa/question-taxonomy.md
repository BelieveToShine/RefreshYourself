# DSA — Question Taxonomy (Phase 1 + Phase 2 gap-hunt)

Source: the user's own DSA-track proposal, itself built on this session's own draft 19-group
taxonomy and then **independently cross-validated against another AI vendor's DSA curriculum**
before being handed back with 7 additions and one restructuring principle (pattern-recognition as
its own layer, not scattered across data-structure pages). Every group below traces back to that
exchange — nothing here was invented beyond it. This is a **language/domain track**, not part of
the ordered core-backend path — same shape as Python/React/Angular/AI: a body of knowledge
organized around interview questions, not a CS-theory curriculum.

## Groups → source mapping

Groups are numbered 1–30, matching the final Phase 6 page order in `roadmap.md`.

| # | Concept | Framing this page answers | Source |
|---|---|---|---|
| 1 | Complexity Analysis — Big-O/Θ/Ω, time vs. space, amortized analysis, recurrence relations, best/average/worst case | "How do you determine the time complexity of this code?" | User's Foundations group 1 |
| 2 | Arrays & Strings — in-place operations, prefix/suffix, matrix/2D arrays | baseline data-manipulation vocabulary | User's Foundations group 2 |
| 3 | Linked Lists — singly/doubly/circular, cycle detection, reversal | core linear structure | This session's original group 4, unchanged by the vendor review |
| 4 | Stacks & Queues — monotonic stack/monotonic queue/deque, when each beats the other | core linear structure | This session's original group 5, unchanged |
| 5 | Hash Tables / Hash Maps — hashing, collision, load factor, frequency counting, two-sum-style problems | core lookup structure | This session's original group 6, unchanged |
| 6 | Binary Trees & BSTs — traversals, BST invariant | core hierarchical structure | This session's original group 7, unchanged |
| 7 | Heaps / Priority Queues — binary heap, k-way merge | core hierarchical structure | This session's original group 10, unchanged |
| 8 | Graph Fundamentals — representations, BFS/DFS, connected components | core graph vocabulary | This session's original group 12, unchanged |
| 9 | Sorting — comparison vs. non-comparison sorts, stability, when to use which | classic algorithm-family comparison | This session's original group 15, unchanged |
| 10 | Bit Manipulation — bit tricks, common bitwise interview idioms | toolkit-level technique | User's Algorithmic Techniques group, split out of the original combined #19 |
| 11 | Two Pointers & Sliding Window — fixed window, variable window, fast/slow pointers | reusable technique for array/string problems | This session's original group 3, unchanged |
| 12 | Binary Search & Search on Answer — classic binary search, first/last occurrence, lower/upper bound, rotated sorted array, binary search on a monotonic answer space | "the biggest omission in the original roadmap," per the user's own vendor cross-check | **New — added by the user's vendor review** |
| 13 | Recursion & Backtracking — call-stack cost, pruning, classic backtracking shapes | technique family | This session's original group 16, unchanged |
| 14 | Greedy Algorithms — when greedy is provably correct vs. when it fails | technique family + judgment | This session's original group 17, unchanged |
| 15 | Dynamic Programming — 1D/2D, knapsack family, LCS/LIS, state-machine DP | technique family, flagged 🔥🔥 by the vendor review | This session's original group 18, unchanged |
| 16 | Graph Problem Patterns — grid-as-graph, multi-source BFS, 0-1 BFS, bipartite check, cycle detection, state-space search | "recognizing this grid is actually a graph is often more useful than memorizing another algorithm" | **New — added by the user's vendor review**, pulled out of scattered graph-topic mentions into its own page |
| 17 | Shortest Path & MST — Dijkstra, Bellman-Ford, Floyd-Warshall, Kruskal/Prim | named-algorithm comparison | This session's original group 13, unchanged |
| 18 | Topological Sort & Union-Find — dependency ordering, disjoint sets, cycle detection | named-algorithm comparison | This session's original group 14, unchanged |
| 19 | Prefix Sum & Difference Array — range-sum queries, subarray sums, difference-array updates, 2D prefix sums | "worth separating from Arrays because it's a reusable interview pattern" | **New — added by the user's vendor review**, split out of the original Arrays & Strings group |
| 20 | Intervals & Sweep Line — merge intervals, overlapping intervals, meeting rooms, interval scheduling, sweep-line/event-point technique | "very common in interviews and currently missing" | **New — added by the user's vendor review** |
| 21 | Balanced Trees — AVL/Red-Black at a conceptual level (why balance matters, not rotation-by-rotation) | comparison/judgment, not implementation depth | This session's original group 8, unchanged |
| 22 | Tries — prefix search, autocomplete-style use cases | applied structure | This session's original group 9, unchanged |
| 23 | Pattern Recognition — the cross-cutting "how do I recognize the solution" layer: frequency map, prefix/suffix, fast/slow pointer, sliding window, binary search, top-K, merge intervals, monotonic stack, BFS/DFS, multi-source BFS, backtracking, divide and conquer, greedy, DP, Union-Find | "this isn't another collection of algorithms — it's the recognize-the-solution layer... could become one of the most valuable DSA pages on the site" | **New — added by the user's vendor review**, the single biggest structural addition |
| 24 | Data Structure Trade-offs — why choose HashMap over TreeMap, heap vs. sorting everything, array vs. linked list, with the Access/Search/Insert/Delete comparison table | "why would you choose X over Y" framing instead of "what is X" | **New — added by the user's vendor review** |
| 25 | Time vs. Memory Trade-offs — when a theoretically faster algorithm is actually slower, trading memory for CPU, memory-locality effects on data-structure choice | senior/architect judgment | **New — added by the user's vendor review** |
| 26 | Streaming / Large-Dataset Problems — processing a stream without storing everything, finding top-K from a huge dataset, detecting duplicates at scale | senior/architect scale scenario | **New — added by the user's vendor review** |
| 27 | External / Distributed Processing — processing data in chunks, designing an external sort, what happens when the dataset doesn't fit in RAM | senior/architect scale scenario | **New — added by the user's vendor review** |
| 28 | Scale & Performance Scenarios — 100M records in memory or not, finding the shortest path at scale, when O(n) becomes unacceptable | senior/architect scale scenario | **New — added by the user's vendor review** |
| 29 | Advanced Trees — Segment Tree / Fenwick (BIT), range-query/range-update use cases, explicitly Deep Dive not core prep | "useful, but I'd make them Deep Dive, not core interview preparation" | This session's original group 11, re-scoped to Deep Dive per the vendor review |
| 30 | String Algorithms — KMP, Rabin-Karp, pattern matching, explicitly Deep Dive not core prep | split out of the original combined #19; "they're conceptually unrelated [to bit manipulation] and interviewers test them differently" | User's Algorithmic Techniques group, split out of the original combined #19, tiered Deep Dive alongside Advanced Trees for consistency |

## Gap-hunt log (Phase 2 — hunt against outside DSA-interview knowledge, not a re-read of the source)

Checked the 30-group list above (already vendor-cross-checked once) against this session's own
DSA-interview domain knowledge for anything still missing. Two real candidates surfaced — both are
genuine, commonly-asked techniques, but each is a **sub-mechanic that fits naturally inside a page
already on the list** rather than a standalone concept needing its own page — same resolution
style the AI track's own Phase 2 used.

| Candidate | Why it's a real gap | Where it's folded |
|---|---|---|
| **Reservoir sampling** (uniformly sampling *k* items from a stream of unknown/unbounded length without storing the whole stream) | A specific, frequently-asked streaming technique that directly answers "how would you sample from a stream you can't fully store" — a scenario the user's own bullet list names almost verbatim | Group 26 (Streaming / Large-Dataset Problems) — named explicitly as the standard technique for that scenario |
| **Bloom filters** (probabilistic membership test — "have I seen this before," with a tunable false-positive rate and no false negatives, using far less memory than storing every item) | The standard answer to the user's own bullet "how would you detect duplicates in a massive dataset" — leaving it unnamed would make that page's answer to its own headline question weaker | Group 26 (Streaming / Large-Dataset Problems) — named explicitly alongside reservoir sampling |

### Considered and excluded

Matches the user's own explicit "what I would NOT add" list, kept here as the record of why, per
this track's own stated rule: *"Do not create a page merely because an algorithm exists. Create a
page when it represents a reusable interview concept, decision, pattern, comparison, or
problem-solving technique."*

| Excluded | Reasoning |
|---|---|
| Suffix trees / suffix arrays | Research-depth string-indexing structures; not asked outside specialized search-infrastructure roles |
| Max flow / min cut | Graph-theory-research depth; essentially never asked outside competitive programming |
| Convex hull / computational geometry | A different domain (geometry) from mainstream backend/systems interviews |
| KD-trees | Narrow-use spatial-indexing structure; not a general interview topic |
| Persistent segment trees | A competitive-programming-only refinement of an already-Deep-Dive structure (group 29) |
| B-tree internals | Belongs to the SQL/database-internals track's own indexing coverage, not a general DSA page |
| Fibonacci heaps | Theoretical-complexity-only improvement over a binary heap; never implemented or asked about in practice |
| Advanced randomized algorithms (skip lists, randomized quickselect beyond the basic idea already covered under Sorting/Pattern Recognition) | One level past what a mainstream interview tests; the *idea* of "randomize to avoid worst case" already surfaces naturally inside Sorting (quickselect) and Pattern Recognition |

**Consistent with the site's own scope discipline for every prior track** (AI's transformer-math
depth, Azure's non-core-service encyclopedia, Python's research-level internals) — comprehensive on
what's actually asked, deliberately shallow on research-only depth.

## One rule for Phase 7, carried forward verbatim from the user's own instruction

> Do not create a page merely because an algorithm exists. Create a page when it represents a
> reusable interview concept, decision, pattern, comparison, or problem-solving technique.

Every subagent dispatched to write a DSA page gets this rule verbatim, so a page never turns into
a flat "here's how Dijkstra's algorithm works" write-up when the actual interview value is the
comparison/pattern/tradeoff around it.
