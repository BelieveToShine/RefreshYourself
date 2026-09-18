# AI — Roadmap (Phases 3–6)

Builds on [`question-taxonomy.md`](question-taxonomy.md)'s 48 groups (45 from the source's own
topic map + 3 gap-hunt candidates, all folded into existing groups rather than adding new ones —
see that file's Gap-hunt log).

## Phase 3 — Grouping into pages

All 48 groups map 1:1 onto 48 pages — no merges, no splits. Each concept in the taxonomy is
already the right size for one topic page (a diagram, a simple-words explanation, a key-points
box), matching the granularity the source material itself used.

## Phase 4 — Tiering (by interview-question type, not difficulty)

Per [`interview-depth-and-priority.md`](../../rules/interview-depth-and-priority.md): tier is
about the *shape* of the question — a recall/definition question is Basic, a comparison/applied
question is Intermediate, a judgment/tradeoff/architecture question is Advanced — not about how
hard the underlying topic sounds.

- **Basic (16)** — the LLM/prompting vocabulary every GenAI engineer is expected to define
  correctly on sight: tokens/temperature, embeddings, training-stage names, model families,
  cost/streaming mechanics, prompt roles, prompting techniques, structured output, determinism,
  delimiting untrusted content, versioned prompts, and the "good to know" internals (transformer
  basics, tokenizers, MoE/quantization, context tricks, classic-ML-vs-LLM).
- **Intermediate (18)** — the applied-engineering layer: the full RAG pipeline and its individual
  levers (chunking, hybrid search, reranking, vector DBs), tool calling and the agent loop, the
  RAG-vs-fine-tune-vs-prompt decision, grounding, multi-tenant isolation, LoRA/QLoRA, MCP,
  multimodal extraction, AI gateways, the .NET/Azure AI stack, query transformation, multi-agent
  patterns — all "how do you actually build this" questions, not just definitions.
- **Advanced (14)** — judgment and system-design: security (prompt injection, OWASP LLM Top 10),
  evaluation methodology (LLM-as-judge, eval sets), cost/reliability architecture (cost control,
  tracing, model routing/failover), prompt-layering-as-a-system, PII/moderation, regression
  testing as a release gate, senior-only RAG architecture (GraphRAG/agentic RAG), async/queue
  inference at scale, self-hosted-vs-managed as an architecture decision, and Responsible AI.

**One placement double-checked**: *Prompt Layering* (group 42) reads like it could be
Intermediate ("just a config pattern"), but the source's own Part C "Patterns you can speak to
from experience" frames it as a full system — versioning, rollback, auto-tuning from feedback
signals, a validation gate before activation — which is architecture-judgment territory, not a
single applied technique. Kept in Advanced.

## Phase 5 — Priority (🔥 Hot vs. Normal)

Carried forward from the source's own "Must know" vs. "Good to know" split in Part A, which the
skeleton's `overview.md` tables already captured accurately — no conflicts to resolve (unlike
Azure/SQL, which each had a handful of source-tag-vs-summary conflicts to adjudicate). The only
adjustment: groups added implicitly by the gap-hunt (prompt caching, speculative decoding,
constrained decoding) don't get their own priority tag since they're folded into an existing
page's content rather than becoming a row of their own.

## Phase 6 — Final page table

| # | Page | Tier | Priority | File |
|---|---|---|---|---|
| 1 | Tokens, Context Window & Temperature | Basic | 🔥 | `ai/basic/1.html` |
| 2 | Embeddings — what a vector actually is | Basic | 🔥 | `ai/basic/2.html` |
| 3 | Pretraining vs. Instruction-Tuning vs. RLHF/DPO | Basic | 🔥 | `ai/basic/3.html` |
| 4 | Model Families — closed API vs. open-weight | Basic | 🔥 | `ai/basic/4.html` |
| 5 | Prompt vs. Completion Cost & Streaming | Basic | 🔥 | `ai/basic/5.html` |
| 6 | System vs. User vs. Assistant Roles | Basic | 🔥 | `ai/basic/6.html` |
| 7 | Zero-shot, Few-shot & Chain-of-Thought | Basic | 🔥 | `ai/basic/7.html` |
| 8 | Structured Output — forcing valid JSON | Basic | 🔥 | `ai/basic/8.html` |
| 9 | Why LLMs Aren't Deterministic | Basic | ⭐ | `ai/basic/9.html` |
| 10 | Delimiting Untrusted Content in a Prompt | Basic | ⭐ | `ai/basic/10.html` |
| 11 | Versioned, Idempotent Prompts | Basic | ⭐ | `ai/basic/11.html` |
| 12 | Transformer Basics — Self-Attention & KV Cache | Basic | ⭐ | `ai/basic/12.html` |
| 13 | Tokenizers — Why Token Count ≠ Word Count | Basic | ⭐ | `ai/basic/13.html` |
| 14 | Mixture-of-Experts & Quantization | Basic | ⭐ | `ai/basic/14.html` |
| 15 | Context-Window Tricks | Basic | ⭐ | `ai/basic/15.html` |
| 16 | Classic ML vs. LLM | Basic | ⭐ | `ai/basic/16.html` |
| 17 | The RAG Pipeline End to End | Intermediate | 🔥 | `ai/intermediate/1.html` |
| 18 | Chunking Strategies | Intermediate | 🔥 | `ai/intermediate/2.html` |
| 19 | Hybrid Search — Keyword + Vector | Intermediate | 🔥 | `ai/intermediate/3.html` |
| 20 | Reranking | Intermediate | 🔥 | `ai/intermediate/4.html` |
| 21 | Vector DB Options & ANN Search | Intermediate | 🔥 | `ai/intermediate/5.html` |
| 22 | Function / Tool Calling | Intermediate | 🔥 | `ai/intermediate/6.html` |
| 23 | The Agent Loop — ReAct Pattern | Intermediate | 🔥 | `ai/intermediate/7.html` |
| 24 | RAG vs. Fine-Tuning vs. Prompt Engineering | Intermediate | 🔥 | `ai/intermediate/8.html` |
| 25 | Grounding & Citations | Intermediate | ⭐ | `ai/intermediate/9.html` |
| 26 | Multi-Tenant Retrieval Isolation | Intermediate | ⭐ | `ai/intermediate/10.html` |
| 27 | LoRA / QLoRA | Intermediate | ⭐ | `ai/intermediate/11.html` |
| 28 | MCP — Model Context Protocol | Intermediate | ⭐ | `ai/intermediate/12.html` |
| 29 | Multimodal — Vision Models for Extraction | Intermediate | ⭐ | `ai/intermediate/13.html` |
| 30 | AI Gateways | Intermediate | ⭐ | `ai/intermediate/14.html` |
| 31 | Semantic Kernel & Microsoft.Extensions.AI | Intermediate | ⭐ | `ai/intermediate/15.html` |
| 32 | Azure OpenAI & Azure AI Search for RAG | Intermediate | ⭐ | `ai/intermediate/16.html` |
| 33 | Query Transformation | Intermediate | ⭐ | `ai/intermediate/17.html` |
| 34 | Multi-Agent Patterns | Intermediate | ⭐ | `ai/intermediate/18.html` |
| 35 | Prompt Injection & Jailbreaks | Advanced | 🔥 | `ai/advanced/1.html` |
| 36 | LLM-as-Judge | Advanced | 🔥 | `ai/advanced/2.html` |
| 37 | Building an Eval Set | Advanced | 🔥 | `ai/advanced/3.html` |
| 38 | Cost Control | Advanced | 🔥 | `ai/advanced/4.html` |
| 39 | Tracing Every LLM Call | Advanced | 🔥 | `ai/advanced/5.html` |
| 40 | OWASP Top 10 for LLM Applications | Advanced | 🔥 | `ai/advanced/6.html` |
| 41 | Model Routing & Multi-Provider Failover | Advanced | 🔥 | `ai/advanced/7.html` |
| 42 | Prompt Layering | Advanced | ⭐ | `ai/advanced/8.html` |
| 43 | PII Detection & Output Moderation | Advanced | ⭐ | `ai/advanced/9.html` |
| 44 | Regression Testing Prompts | Advanced | ⭐ | `ai/advanced/10.html` |
| 45 | Advanced RAG — GraphRAG & Agentic RAG | Advanced | ⭐ | `ai/advanced/11.html` |
| 46 | Async/Queue-Based Inference | Advanced | ⭐ | `ai/advanced/12.html` |
| 47 | Self-Hosted vs. Managed Models | Advanced | ⭐ | `ai/advanced/13.html` |
| 48 | Responsible AI | Advanced | ⭐ | `ai/advanced/14.html` |

`ai/roadmap.html` groups by tier (not cross-tier concept clusters like SQL/Azure/AWS use) — the
live skeleton already built it this way and there's no strong cross-tier-cluster structure in the
source material the way there was for e.g. Azure's "Memory, GIL & Concurrency." No rebuild needed
for that page's grouping, only link-wiring once pages exist.

## Track-specific decisions and boundaries

- **Icon 🤖, track color `#c026d3`** (magenta/fuchsia) — already reserved on the root tile since
  the skeleton was built; distinct from every other track's color.
- **Framed as applied GenAI engineering, not ML research** — per the source's own explicit
  reality-check framing ("the bar is applied GenAI engineering + system design, not research").
  Transformer/positional-encoding math stays at "high level," per group 12's own scope note in the
  taxonomy.
- **RAG is the single most-asked area** per the source's own framing — Intermediate's hero copy
  should say this directly, and RAG-adjacent groups (17–21, 25, 26, 33, 45) get proportionally
  more of the track's depth.
- **The .NET/Azure AI angle (groups 31, 32) is this site's own differentiator**, matching the
  source's explicit "your edge — lead with this" framing — write these with the same C#/.NET code
  conventions the rest of this site already uses (`IChatClient`, Semantic Kernel plugin syntax),
  not generic Python-first GenAI examples.
- **Not part of the ordered core-backend path** — AI sits under "🗂️ Other tracks" alongside
  React/Angular/DSA/Python, per the root `index.html`'s existing layout.
- **DSA remains untouched** — this build only covers the AI track; specs/README.md's row for DSA
  is unaffected.

## Known gaps

None — Phase 2's gap-hunt is folded into the initial taxonomy pass (see
`question-taxonomy.md`'s Gap-hunt log), and this file is written before any Phase 7 page exists,
per the mandated 7-phase order.
