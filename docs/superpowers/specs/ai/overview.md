# AI — Track Spec

**Start here for anything AI/GenAI-related.** See [`docs/superpowers/specs/README.md`](../README.md)
for what this file is and the process for keeping it in sync with the live pages.

## Status — Phases 1–7 complete, all 48 pages written

- **Phase 1** — [`question-taxonomy.md`](question-taxonomy.md): 48 concept groups mapped to
  specific sections of `docs/topics/AI-Interview-Topics.md` (a real GenAI/LLM engineering
  interview topic map provided by the user from another experienced session), covering LLM/GenAI
  foundations, prompt engineering, RAG, vector search, agents/tools, fine-tuning, evaluation,
  guardrails/security, LLMOps, multimodal, serving/deployment, the .NET+Azure AI stack, and
  classic ML.
- **Phase 2** — gap-hunt logged in `question-taxonomy.md`: 3 real gaps found (provider-native
  prompt caching, speculative decoding, constrained/grammar-based decoding), all folded into
  existing groups rather than becoming new pages (Cost Control, Self-Hosted vs. Managed Models,
  and Structured Output respectively) — plus a "considered and excluded" table (A2A protocol,
  long-term agent-memory architecture, transformer positional-encoding math depth, eval-tooling
  internals) reasoned against the source's own scope note: "the bar is applied GenAI engineering
  + system design, not research."
- **Phases 3–6** — [`roadmap.md`](roadmap.md): all 48 groups mapped 1:1 to pages (no merges, no
  splits), tiered by **interview-question type** (Basic = recall/definition, Intermediate =
  applied engineering, Advanced = judgment/architecture) with one placement double-checked
  (Prompt Layering kept in Advanced despite reading like "just a config pattern," because the
  source frames it as a full system with versioning/rollback/auto-tuning/a validation gate),
  and priority carried forward from the source's own Must-know/Good-to-know split with no
  conflicts to resolve.
- **Phase 7 — all 48 pages written**, dispatched one subagent per page (rather than batching
  several pages per subagent) to keep each page's content brief accuracy-checked individually.
  Every content brief was grounded in `AI-Interview-Topics.md` or well-established GenAI-
  engineering practice, with an explicit "don't invent specifics" instruction per
  [accuracy.md](../../rules/accuracy.md) — no fabricated tool names, version numbers, benchmark
  figures, or legal-clause-level claims (Responsible AI's EU AI Act mention stays at
  "know it exists and roughly why it matters," not detailed legal advice).
  **Diagram verification, with the actual evidence, not just an aggregate claim:** every
  subagent ran the mandatory script from
  [diagram-style.md](../../rules/diagram-style.md#mandatory-automated-verification--hand-computed-coordinates-are-not-verification)
  against its own page and reported `issueCount: 0` before finishing — several caught and
  self-fixed real defects before their own report (a text-overflow in `ai/intermediate/15.html`'s
  `IChatClient` box; a text-overflow in `ai/advanced/12.html`'s "pulls when free" label pill).
  The orchestrating session then ran its own **independent full sweep, one page at a time, all
  48 pages**: every single `svg.topic-diagram` came back `{"issueCount":0,"issues":[]}` on this
  final sweep, re-run again after the pager-consistency and nav-wiring edits below to confirm
  those text-only changes didn't disturb any SVG — still clean every time.
- **One page was accidentally skipped in the initial dispatch wave**: `ai/intermediate/12.html`
  (MCP — Model Context Protocol) was missed and only caught by an explicit file-count check
  against the roadmap (16 + 17 + 14 instead of 16 + 18 + 14) after the other 47 pages were
  already committed — dispatched and verified separately, documented here rather than glossed
  over.
- **Pager-consistency fix-up**: pages were dispatched across all three tiers in parallel rather
  than tier-by-tier, so most prev/next pager links correctly (per content-writing.md's fallback
  rule) pointed muted at the tier index labeled "(coming soon)" while siblings didn't exist yet
  — 44 of 48 files needed at least one fix. Once all 48 pages existed, a script rebuilt every
  pager from the canonical page-title table, forming one clean chain across all three tiers
  (Basic `1 → 16` → Intermediate `1 → 18` → Advanced `1 → 14`, with `ai/advanced/14.html`
  correctly terminal — no "next" side, since it's the last page in the entire track).
- **Sidebar-navigation gap found and fixed**: unlike every other track (React, Angular, Azure,
  AWS, Python), none of the 48 AI pages had a `data-tier-key` attribute on `<body>` or the
  `nav-index.js` script include that drives the site's sidebar nav from `window.NAV_INDEX` — this
  was a genuine gap, not a deliberate AI-track exception. Added the three `ai/basic`,
  `ai/intermediate`, `ai/advanced` entries to `assets/nav-index.js` and the missing
  `data-tier-key`/script tag to every page that lacked it (28 of 48 already had the script tag
  from individual subagents; 20 needed it added; all 48 needed the `data-tier-key` attribute).
- **`assets/search-index.js` completion**: only 12 of 48 pages had a search-index entry (added
  inconsistently by individual page-writing subagents per the scope-fence rule); the remaining 36
  were added so every AI page is findable via the site-wide search box.
- **Site wiring finished**: all three tier `index.html` pages flipped from 📝 "Coming soon" rows
  to real linked rows with accurate written-counts (16/18/14); `ai/roadmap.html` flipped the same
  way; the root `index.html` AI tile flipped from `class="tile soon"` with a "Coming soon" ribbon
  to the active-tile pattern every other completed track uses, with all three tier pills linked —
  track color `#c026d3` and position under "🗂️ Other tracks" preserved.

## Basic (16 topics) — 16 written

| # | Topic | Priority | Written? |
|---|---|---|---|
| 1 | Tokens, Context Window & Temperature | 🔥 | ✅ |
| 2 | Embeddings — what a vector actually is | 🔥 | ✅ |
| 3 | Pretraining vs. Instruction-Tuning vs. RLHF/DPO | 🔥 | ✅ |
| 4 | Model Families — closed API vs. open-weight | 🔥 | ✅ |
| 5 | Prompt vs. Completion Cost & Streaming | 🔥 | ✅ |
| 6 | System vs. User vs. Assistant Roles | 🔥 | ✅ |
| 7 | Zero-shot, Few-shot & Chain-of-Thought | 🔥 | ✅ |
| 8 | Structured Output — forcing valid JSON | 🔥 | ✅ |
| 9 | Why LLMs Aren't Deterministic | ⭐ | ✅ |
| 10 | Delimiting Untrusted Content in a Prompt | ⭐ | ✅ |
| 11 | Versioned, Idempotent Prompts | ⭐ | ✅ |
| 12 | Transformer Basics — Self-Attention & KV Cache | ⭐ | ✅ |
| 13 | Tokenizers — Why Token Count ≠ Word Count | ⭐ | ✅ |
| 14 | Mixture-of-Experts & Quantization | ⭐ | ✅ |
| 15 | Context-Window Tricks | ⭐ | ✅ |
| 16 | Classic ML vs. LLM | ⭐ | ✅ |

## Intermediate (18 topics) — 18 written

| # | Topic | Priority | Written? |
|---|---|---|---|
| 1 | The RAG Pipeline End to End | 🔥 | ✅ |
| 2 | Chunking Strategies | 🔥 | ✅ |
| 3 | Hybrid Search — Keyword + Vector | 🔥 | ✅ |
| 4 | Reranking | 🔥 | ✅ |
| 5 | Vector DB Options & ANN Search | 🔥 | ✅ |
| 6 | Function / Tool Calling | 🔥 | ✅ |
| 7 | The Agent Loop — ReAct Pattern | 🔥 | ✅ |
| 8 | RAG vs. Fine-Tuning vs. Prompt Engineering | 🔥 | ✅ |
| 9 | Grounding & Citations | ⭐ | ✅ |
| 10 | Multi-Tenant Retrieval Isolation | ⭐ | ✅ |
| 11 | LoRA / QLoRA | ⭐ | ✅ |
| 12 | MCP — Model Context Protocol | ⭐ | ✅ |
| 13 | Multimodal — Vision Models for Extraction | ⭐ | ✅ |
| 14 | AI Gateways | ⭐ | ✅ |
| 15 | Semantic Kernel & Microsoft.Extensions.AI | ⭐ | ✅ |
| 16 | Azure OpenAI & Azure AI Search for RAG | ⭐ | ✅ |
| 17 | Query Transformation | ⭐ | ✅ |
| 18 | Multi-Agent Patterns | ⭐ | ✅ |

## Advanced (14 topics) — 14 written

| # | Topic | Priority | Written? |
|---|---|---|---|
| 1 | Prompt Injection & Jailbreaks | 🔥 | ✅ |
| 2 | LLM-as-Judge | 🔥 | ✅ |
| 3 | Building an Eval Set | 🔥 | ✅ |
| 4 | Cost Control | 🔥 | ✅ |
| 5 | Tracing Every LLM Call | 🔥 | ✅ |
| 6 | OWASP Top 10 for LLM Applications | 🔥 | ✅ |
| 7 | Model Routing & Multi-Provider Failover | 🔥 | ✅ |
| 8 | Prompt Layering | ⭐ | ✅ |
| 9 | PII Detection & Output Moderation | ⭐ | ✅ |
| 10 | Regression Testing Prompts | ⭐ | ✅ |
| 11 | Advanced RAG — GraphRAG & Agentic RAG | ⭐ | ✅ |
| 12 | Async/Queue-Based Inference | ⭐ | ✅ |
| 13 | Self-Hosted vs. Managed Models | ⭐ | ✅ |
| 14 | Responsible AI | ⭐ | ✅ |

## Where the roadmap came from

Sourced directly from `docs/topics/AI-Interview-Topics.md` — a real GenAI/LLM engineering
interview topic map provided by the user from another experienced session. Every row above
traces back to that source file or to a Phase 2 gap-hunt finding folded into an existing page
(see [`question-taxonomy.md`](question-taxonomy.md)'s Gap-hunt log) — nothing was invented. See
[accuracy.md](../../rules/accuracy.md).

## Track-specific decisions and boundaries

- Icon 🤖 (plain emoji, no brand logo) — consistent with the site-wide rule in
  [visual-style.md](../../rules/visual-style.md).
- Tile/tier accent color `#c026d3` (magenta/fuchsia) — distinct from every other track's color,
  used consistently across all 48 pages, the three tier index pages, the root tile, and
  `ai/roadmap.html`.
- **RAG is the single most-asked area** per the source's own framing — Intermediate's hero copy
  says this directly, and RAG-adjacent groups (the pipeline itself, chunking, hybrid search,
  reranking, vector DBs, grounding, multi-tenant isolation, query transformation, and Advanced
  RAG) get proportionally more of the track's depth.
- **The .NET/Azure AI angle (Semantic Kernel/`IChatClient`, Azure OpenAI & Azure AI Search) is
  this site's own differentiator**, matching the source's explicit "your edge — lead with this"
  framing — written with the same C#/.NET code conventions the rest of this site already uses,
  not generic Python-first GenAI examples.
- **Framed as applied GenAI engineering, not ML research** — per the source's own explicit
  reality-check framing. Transformer/positional-encoding math stays at "high level" on
  `basic/12.html`, per the taxonomy's own scope note for that group.
- **Not part of the ordered core-backend path** (`C# → OOP → .NET/ASP.NET Core → Web API →
  EF Core → SQL → Azure → AWS`) — AI sits under "🗂️ Other tracks" alongside React/Angular/DSA/
  Python on the root tile.
- **`ai/roadmap.html` groups by tier**, not cross-tier concept clusters like SQL/Azure/AWS/Python
  use — there's no strong cross-tier-cluster structure in the source material the way there was
  for e.g. Python's "Memory, GIL & Concurrency," so the tier-first grouping the skeleton already
  used was kept as-is.
- **DSA remains untouched** — this build only covers the AI track.

## Known gaps

None — this track went through the full 7-phase pipeline (Phase 2's own gap-hunt already folded
into the initial pass), and every page passed the mandatory independent diagram-verification
sweep (48/48 pages, `issueCount: 0` on the final sweep, re-confirmed clean after the
pager-consistency and nav-wiring edits — see the Status section above for the real defects found
and fixed along the way, and the accidentally-skipped page, not glossed over). The 44 files with
at least one stale pager link, the missing sidebar-nav wiring on all 48 pages, and the 36 missing
search-index entries are also documented above, not silently corrected. Expect a review/feedback
pass once the user goes through it, same as every other completed track.
