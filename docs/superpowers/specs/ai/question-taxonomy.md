# AI — Question Taxonomy (Phase 1 + Phase 2 gap-hunt)

Source: [`docs/topics/AI-Interview-Topics.md`](../../topics/AI-Interview-Topics.md) — a real
GenAI/LLM-engineering interview topic map (Parts A–E: topic map, architect focus, question bank,
learning roadmap, usage notes) prepared for a ~15-year engineer targeting a senior GenAI/AI-architect
role. Every group below traces back to a specific line in that source — nothing here was invented.

This is a **language/domain track**, not part of the ordered core-backend path — same shape as
Python/React/Angular: a body of knowledge organized around interview questions, not a tutorial.

## Groups → source mapping

Groups are numbered 1–48, matching the final Phase 6 page order in `roadmap.md`. Each row names the
concept, the interview-question framing, and the exact source location (Part A section, or Part
B/C for architect/question-bank material folded into a section's page).

| # | Concept | Framing this page answers | Source |
|---|---|---|---|
| 1 | Tokens, Context Window, Temperature/Top-p/Top-k, Max Tokens, Stop Sequences | "Explain temperature vs top-p. When would you set temperature to 0?" | Part A §1, Part C Q1 |
| 2 | Embeddings — what a vector is, cosine similarity, vs. generation | "What is cosine similarity? Why normalize embeddings?" | Part A §1, §4; Part C Q7 |
| 3 | Pretraining vs. Instruction-Tuning vs. RLHF/DPO | conceptual distinction between the 3 training stages | Part A §1 |
| 4 | Model Families — closed API (OpenAI/Anthropic/Gemini) vs. open-weight (Llama/Mistral), self-host tradeoffs | build-vs-buy model choice | Part A §1, §11; Part B "Model strategy" |
| 5 | Prompt vs. Completion Cost, streaming (SSE) and why it matters for UX | why output tokens cost more; streaming for perceived latency | Part A §1 |
| 6 | System vs. User vs. Assistant Roles, prompt templating/variable injection | how a chat prompt is actually structured | Part A §2 |
| 7 | Zero-shot, Few-shot, Chain-of-Thought, Self-Consistency | prompting technique ladder | Part A §2 |
| 8 | Structured Output — JSON mode/schema/tool-calling, validate + repair malformed output | "How do you force a model to return valid JSON, and what do you do when it doesn't?" | Part A §2; Part C Q2 |
| 9 | Why LLMs Aren't Deterministic — temperature 0 + seeds help but don't guarantee | reproducibility question | Part A §1 |
| 10 | Delimiting/Quoting Untrusted Content — separating instructions from data | the structural prerequisite to prompt-injection defense | Part A §2 |
| 11 | Versioned, Idempotent Prompts — prompts in config/DB, not hard-coded | operational hygiene | Part A §2 |
| 12 | Transformer Basics — self-attention, why context is quadratic, KV cache | "good to know" internals | Part A §1 |
| 13 | Tokenizers (BPE) — token count ≠ word count, non-English inflation | practical cost/context-budget gotcha | Part A §1 |
| 14 | Mixture-of-Experts, distillation, quantization — why a 7B model runs on a laptop | serving-cost internals | Part A §1 |
| 15 | Context-Window Tricks — long-context models, positional encoding, "lost in the middle" | why bigger context isn't free | Part A §1 |
| 16 | Classic ML vs. LLM — when traditional ML wins (tabular, cheap high-volume, latency) | "When would you use traditional ML instead of an LLM?" | Part A §13; Part C Q14 |
| 17 | The RAG Pipeline End to End — ingest→chunk→embed→index→retrieve→rerank→assemble→generate→cite | "Walk me through a RAG pipeline end to end. Where does it usually go wrong?" | Part A §3; Part C Q3 |
| 18 | Chunking Strategies — fixed/recursive/semantic/by-structure, size/overlap tradeoffs | "Fixed vs semantic chunking — how do you choose chunk size and overlap?" | Part A §3; Part C Q4 |
| 19 | Hybrid Search — keyword/BM25 + vector, why pure vector underperforms | "Why is hybrid search often better than pure vector search?" | Part A §3; Part C Q5 |
| 20 | Reranking — cross-encoder/rerank models fixing top-k relevance | same Q5 follow-up | Part A §3; Part C Q5 |
| 21 | Vector DB Options & ANN Search — HNSW/IVF, recall/latency tradeoff, pgvector/Azure AI Search/Pinecone/Qdrant/Weaviate/Milvus/Chroma/Redis | "What is ANN (HNSW)?" | Part A §4; Part C Q7 |
| 22 | Function / Tool Calling — model requests a tool, you execute it, feed results back | "How does function/tool calling work? How do you guard a side-effecting tool?" | Part A §5; Part C Q8 |
| 23 | The Agent Loop — ReAct (reason→act→observe), when an agent is overkill vs. a fixed chain | agent-vs-chain judgment | Part A §5 |
| 24 | RAG vs. Fine-Tuning vs. Prompt Engineering — decision tree, fine-tune for style/format not knowledge | "RAG vs fine-tuning vs prompt engineering — decision criteria with examples." | Part A §3, §6; Part C Q6 |
| 25 | Grounding & Citations — reducing hallucination by constraining to retrieved context, "answer not in context" handling | production RAG-quality lever | Part A §3 |
| 26 | Multi-Tenant Retrieval Isolation — filter by tenant at the vector layer | "How do you keep a RAG corpus fresh... isolation?" | Part A §3; Part B "RAG data platform" |
| 27 | LoRA / QLoRA / PEFT — fine-tuning without full retraining, why full fine-tuning is rarely needed | conceptual fine-tuning mechanics | Part A §6 |
| 28 | MCP (Model Context Protocol) — the emerging standard for exposing tools/data to models | "MCP" named explicitly as a must-know | Part A §5 |
| 29 | Multimodal — vision models for structured extraction from images/screenshots/documents, deterministic settings | "How do you extract structured data from an image/document with a vision model?" | Part A §10; Part C Q15 |
| 30 | AI Gateways — caching, fallback between providers, rate limiting, unified API, observability | "What does an AI gateway give you?" | Part A §9; Part C Q13 |
| 31 | Semantic Kernel & Microsoft.Extensions.AI — the idiomatic .NET GenAI stack (IChatClient, plugins/planners/memory) | the site's own .NET-differentiator angle | Part A §12 |
| 32 | Azure OpenAI & Azure AI Search for RAG, pgvector on Azure Postgres | the .NET+Azure RAG stack | Part A §12 |
| 33 | Query Transformation — multi-query, HyDE, step-back, query routing | advanced retrieval-quality lever | Part A §3 |
| 34 | Multi-Agent Patterns — planner/worker, supervisor, debate, and their cost blow-up | "good to know" agent architecture | Part A §5 |
| 35 | Prompt Injection & Jailbreaks — direct and indirect (poisoned retrieved/scraped content) | "What is prompt injection (direct and indirect)? How do you defend against it?" | Part A §8; Part C Q9 |
| 36 | LLM-as-Judge — and its pitfalls (bias, position bias, needing its own validation) | "What is LLM-as-judge and what are its pitfalls?" | Part A §7; Part C Q11 |
| 37 | Building an Eval Set — RAG metrics (faithfulness, answer relevancy, context precision/recall) | "How would you evaluate an LLM feature before shipping a prompt change?" | Part A §7; Part C Q10 |
| 38 | Cost Control — token budgeting, prompt/response caching, semantic caching, model tiering/routing, context trimming | "How do you control LLM cost and latency in a high-traffic app?" | Part A §9; Part C Q12 |
| 39 | Tracing Every LLM Call — prompt, response, tokens, latency, cost, model version | LLMOps observability baseline | Part A §9 |
| 40 | OWASP Top 10 for LLM Applications | "be able to name several" | Part A §8 |
| 41 | Model Routing & Multi-Provider Failover — cheap model first escalate, avoiding lock-in via a gateway | "Your LLM provider has a rate limit/outage. Design for resilience." | Part A §9; Part B "Model strategy"; Part C architect Q2 |
| 42 | Prompt Layering — shared/base prompt + per-tenant overrides, versioning/rollback, auto-tuning from feedback | the site's own genericized production pattern | Part A §2; Part C "Patterns you can speak to" |
| 43 | PII Detection & Output Moderation — redaction, content filtering, output validation before use | data-safety production requirement | Part A §8 |
| 44 | Regression Testing Prompts — offline vs. online eval before shipping a change | "gate a prompt change in CI" | Part A §7; Part D Phase 3 |
| 45 | Advanced RAG — GraphRAG, agentic RAG, parent-document/small-to-big, contextual retrieval | senior-level retrieval architecture | Part A §3 |
| 46 | Async/Queue-Based Inference — bulk/nightly enrichment jobs within a cost budget | "Design a pipeline that enriches millions of records with an LLM nightly." | Part A §11; Part C architect Q3 |
| 47 | Self-Hosted vs. Managed Models — vLLM/TGI/Ollama, quantization (GGUF/AWQ), GPU sizing, batching | serving/deployment tradeoff | Part A §11 |
| 48 | Responsible AI — bias/fairness, transparency, EU AI Act awareness, red-teaming | closing-out governance topic | Part A §8 |

## Gap-hunt log (Phase 2 — hunt against outside GenAI-engineering knowledge, not a re-read of the source)

Checked the 48-group list above against current, well-established GenAI-engineering practice for
anything the source's own list might be missing. Three real candidates surfaced — all three are
genuine, commonly-asked mechanics, but each one is a **sub-mechanic of a page already on the list**
rather than a standalone concept that needs its own page. Resolution: fold each into its natural
host page's content during Phase 7 writing, not a new page. (Same resolution style Azure's Phase 3
used for a source bullet that overlapped an existing page.)

| Candidate | Why it's a real gap | Where it's folded |
|---|---|---|
| **Provider-native prompt caching** (Anthropic prompt caching, OpenAI cached input tokens — caching the exact repeated prefix of a request, distinct from "semantic caching" which caches across *different* but similar requests) | A specific, frequently-asked cost/latency lever that's easy to confuse with semantic caching if left unnamed | Group 38 (Cost Control) — call out explicitly as a third caching layer alongside exact-match and semantic caching |
| **Speculative decoding** (a small draft model proposes tokens, the main model verifies them in one pass) | A real inference-serving latency technique that comes up in "how do you make inference faster" architect discussions | Group 47 (Self-Hosted vs. Managed Models) — mention as one of the serving-side latency levers alongside batching/quantization |
| **Constrained/grammar-based decoding** (e.g. via a grammar/FSM at the token-sampling level, the actual mechanism beneath most "guaranteed JSON" tooling) | The concrete mechanism behind "how do you force a model to return valid JSON" beyond just "JSON mode exists" | Group 8 (Structured Output) — mention as the mechanism beneath JSON-mode/schema tooling, contrasted with post-hoc parse-and-retry |

**Considered and excluded** (real GenAI topics, deliberately left out — the site's own
"applied-engineering-not-research" framing from the source's own reality-check paragraph, or
already fully covered by an existing group):

- **Agent2Agent (A2A) protocol** — a newer (2025) multi-agent interop standard from Google, complementary to MCP. Excluded: MCP (group 28) is what the source itself names as "the emerging standard," and A2A solves a narrower orchestration-specific problem that the source's own multi-agent-patterns group (34) already covers at the right depth for this audience.
- **Long-term agent memory architectures** (vector-backed memory stores, memory compaction) — already present as a "good to know" bullet under Agents (Part A §5), not elevated to its own group by the source; the Agent Loop page (23) and Multi-Agent Patterns page (34) cover enough of the practical surface for this track's stated depth.
- **Transformer positional-encoding math (RoPE, ALiBi) in detail** — the source's own Transformer Basics group (12) is explicitly scoped to "high level," and the source's reality-check paragraph explicitly says the bar is "applied GenAI engineering... not research" — going deeper into positional-encoding math would violate that stated scope.
- **Specific eval tooling deep-dives (Ragas/DeepEval/promptfoo internals)** — the source lists these as "good to know" tool names under Evaluation (Part A §7), not a dedicated concept; Building an Eval Set (37) covers the underlying methodology these tools implement, which is the actually-testable interview knowledge.

No new pages added. Final count stays 48 (16 Basic / 18 Intermediate / 14 Advanced), matching
`docs/superpowers/specs/ai/overview.md`'s existing tables.
