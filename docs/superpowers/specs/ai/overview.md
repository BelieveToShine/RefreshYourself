# AI — Track Spec

**Start here for anything AI/GenAI-related.** See [`docs/superpowers/specs/README.md`](../README.md)
for what this file is and the process for keeping it in sync with the live pages.

## Status

**Roadmap-only — skeleton and full topic lists exist on the live tier-index pages, zero topics
written.** Per explicit instruction: do not start writing AI topic pages until C# has been fully
reviewed by the user and they say to proceed. This skeleton was built right after Azure's, for
the user to inspect and give adjustment guidance before any content is written.

## Basic (16 topics) — roadmap only, 0 written

| # | Topic | Hot? | Written? |
|---|---|---|---|
| 1 | Tokens, Context Window & Temperature — the knobs everyone must know | 🔥 | 📝 |
| 2 | Embeddings — what a vector actually is | 🔥 | 📝 |
| 3 | Pretraining vs. Instruction-Tuning vs. RLHF/DPO | 🔥 | 📝 |
| 4 | Model Families — closed API vs. open-weight | 🔥 | 📝 |
| 5 | Prompt vs. Completion Cost & streaming | 🔥 | 📝 |
| 6 | System vs. User vs. Assistant Roles | 🔥 | 📝 |
| 7 | Zero-shot, Few-shot & Chain-of-Thought | 🔥 | 📝 |
| 8 | Structured Output — forcing valid JSON | 🔥 | 📝 |
| 9 | Why LLMs Aren't Deterministic | Normal | 📝 |
| 10 | Delimiting Untrusted Content in a prompt | Normal | 📝 |
| 11 | Versioned, Idempotent Prompts | Normal | 📝 |
| 12 | Transformer Basics — self-attention & KV cache | Normal | 📝 |
| 13 | Tokenizers — why token count ≠ word count | Normal | 📝 |
| 14 | Mixture-of-Experts & Quantization | Normal | 📝 |
| 15 | Context-Window Tricks — long context, "lost in the middle" | Normal | 📝 |
| 16 | Classic ML vs. LLM — when traditional ML wins | Normal | 📝 |

## Intermediate (18 topics) — roadmap only, 0 written

| # | Topic | Hot? | Written? |
|---|---|---|---|
| 1 | The RAG Pipeline End to End | 🔥 | 📝 |
| 2 | Chunking Strategies & chunk-size tradeoffs | 🔥 | 📝 |
| 3 | Hybrid Search — keyword + vector | 🔥 | 📝 |
| 4 | Reranking — fixing top-k relevance | 🔥 | 📝 |
| 5 | Vector DB Options & ANN Search | 🔥 | 📝 |
| 6 | Function / Tool Calling — how it actually works | 🔥 | 📝 |
| 7 | The Agent Loop — ReAct pattern | 🔥 | 📝 |
| 8 | RAG vs. Fine-Tuning vs. Prompt Engineering | 🔥 | 📝 |
| 9 | Grounding & Citations — reducing hallucination | Normal | 📝 |
| 10 | Multi-Tenant Retrieval Isolation | Normal | 📝 |
| 11 | LoRA / QLoRA — fine-tuning without full retraining | Normal | 📝 |
| 12 | MCP — Model Context Protocol | Normal | 📝 |
| 13 | Multimodal — vision models for structured extraction | Normal | 📝 |
| 14 | AI Gateways — caching, fallback, rate limiting | Normal | 📝 |
| 15 | Semantic Kernel & Microsoft.Extensions.AI | Normal | 📝 |
| 16 | Azure OpenAI & Azure AI Search for RAG | Normal | 📝 |
| 17 | Query Transformation — multi-query, HyDE | Normal | 📝 |
| 18 | Multi-Agent Patterns — planner/worker, supervisor | Normal | 📝 |

## Advanced (14 topics) — roadmap only, 0 written

| # | Topic | Hot? | Written? |
|---|---|---|---|
| 1 | Prompt Injection & Jailbreaks — direct and indirect | 🔥 | 📝 |
| 2 | LLM-as-Judge — and its pitfalls | 🔥 | 📝 |
| 3 | Building an Eval Set — RAG metrics | 🔥 | 📝 |
| 4 | Cost Control — caching, model tiering, routing | 🔥 | 📝 |
| 5 | Tracing Every LLM Call — prompt, tokens, latency, cost | 🔥 | 📝 |
| 6 | OWASP Top 10 for LLM Applications | 🔥 | 📝 |
| 7 | Model Routing & Multi-Provider Failover | 🔥 | 📝 |
| 8 | Prompt Layering — per-tenant overrides, auto-tuning from feedback | Normal | 📝 |
| 9 | PII Detection & Output Moderation | Normal | 📝 |
| 10 | Regression Testing Prompts before shipping | Normal | 📝 |
| 11 | Advanced RAG — GraphRAG & agentic RAG | Normal | 📝 |
| 12 | Async/Queue-Based Inference for bulk jobs | Normal | 📝 |
| 13 | Self-Hosted vs. Managed Models — vLLM, Ollama | Normal | 📝 |
| 14 | Responsible AI — bias, EU AI Act awareness | Normal | 📝 |

## Where the roadmap came from

Sourced directly from `docs/topics/AI-Interview-Topics.md` — a real GenAI/LLM engineering
interview topic map provided by the user from another experienced session, for cross-checking
that this track's roadmap doesn't miss important topics. Nothing in the three tables above was
invented; every row traces back to that source file. See [accuracy.md](../../rules/accuracy.md).

## Track-specific decisions and boundaries

- Icon is 🤖 (plain emoji, no brand logo) — consistent with the site-wide rule in
  [visual-style.md](../../rules/visual-style.md): real emoji only, never a hand-drawn brand logo
  or bare Unicode symbol, for every track including this one.
- Tile/tier accent colour is `#c026d3` (magenta/fuchsia) — a colour choice, not a logo, chosen to
  visually separate AI from C#'s indigo/violet and Azure's brand blue on the home page.
- Intermediate is framed around RAG because the source material flags RAG specifically as the
  single most-asked area in real interviews — the tier's hero copy calls this out directly.
- Framed the whole track's pride blurb around "RAG, agents, evaluation, guardrails, and
  cost/latency/quality tradeoffs — not transformer math," matching the source material's emphasis
  on practical GenAI engineering over ML-research-level depth.

## Known gaps

- Nothing in this track is written yet — this is a roadmap/skeleton only, by explicit
  instruction, until C# is reviewed.
- `ai/roadmap.html` and the tier-index pages were just built and have not yet been reviewed by
  the user — expect adjustment guidance before content writing starts, per their own plan to
  "guide one by one" after seeing the skeleton.
- Tiering (Basic/Intermediate/Advanced split) is a judgment call made once, not yet
  pressure-tested by actually writing the pages — treat it as reviewable.
