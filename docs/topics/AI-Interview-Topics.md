# AI / GenAI — Interview Prep Topic Map & Roadmap (senior dev → AI architect)

## Why this file exists (context)
Prep for a ~15-year engineer targeting a **senior GenAI / AI-engineer / AI-architect** role in the
Indian market (the kind of band that clears ~50 LPA+). Goal: a **plain list of AI concepts that get
used in real applications**, split into **must-know** vs **good-to-know**, plus a **question bank**
(dev + architect) and a **learning roadmap**.

It is grounded in patterns from a real production system that leans on LLMs heavily — LLM calls behind a
gateway, prompt engineering with per-tenant prompt layers stored in a DB, prompts auto-tuned from
feedback signals, multimodal (vision) extraction, structured JSON extraction, semantic de-duplication,
and screening untrusted scraped text before it reaches a prompt. Those patterns are written up
generically in **Part C → "Patterns you can speak to from experience"** so you can tell real stories in
an interview without hand-waving.

**How to use this file (any session):** pick a section and ask —
"generate 15 Q&A with model answers for section 3 (RAG)", or "give me an architect system-design drill
for a multi-tenant RAG chatbot". This file is the syllabus + question bank; deep Q&A comes next.

> Reality check on the band: at 50 LPA+ the bar is **applied GenAI engineering + system design**, not
> research. You are expected to *build* RAG/agents, reason about **cost/latency/quality trade-offs**,
> and defend an architecture — not derive transformer math. Depth in 2-3 areas + broad awareness beats
> shallow everything.

---

## Part A — Topic map

### 1. LLM & GenAI foundations
**Must know**
- Tokens, context window, temperature / top-p / top-k, max tokens, stop sequences
- Embeddings (what a vector is, cosine similarity), and how they differ from generation
- Pretraining vs instruction-tuning vs RLHF/DPO — at a conceptual level
- Model families and trade-offs: OpenAI GPT, Anthropic Claude, Google Gemini, Meta Llama, Mistral;
  **closed (API) vs open-weight (self-host)**
- Prompt vs completion cost, why output tokens cost more, streaming (SSE) and why it matters for UX
- Determinism: why LLMs aren't deterministic, and how temperature 0 + seeds help (but don't guarantee)

**Good to know**
- Transformer at a high level: self-attention, why context is quadratic, KV cache
- Context-window tricks: long-context models, positional encoding basics, "lost in the middle"
- Mixture-of-Experts (MoE), distillation, quantization (why a 7B runs on a laptop)
- Tokenizers (BPE), why token count ≠ word count, non-English token inflation

### 2. Prompt engineering & structured output
**Must know**
- System vs user vs assistant roles; prompt templating and variable injection
- Zero-shot, few-shot, chain-of-thought, self-consistency
- **Structured output** — JSON mode / JSON schema / tool-calling to force machine-readable results, and
  how to validate + repair malformed output
- Delimiting and quoting untrusted content; separating instructions from data
- Idempotent, versioned prompts; keeping prompts in config/DB, not hard-coded

**Good to know**
- Prompt-layering (a shared/base prompt + per-tenant or per-use-case overrides), prompt versioning and
  rollback, A/B testing prompts
- Automatically improving prompts from feedback signals (win/loss, click, correction)
- Meta-prompting, prompt compression, context-window budgeting

### 3. RAG (retrieval-augmented generation) — **the single most-asked area**
**Must know**
- The full pipeline: **ingest → chunk → embed → index → retrieve → rerank → assemble context → generate → cite**
- Chunking strategies (fixed, recursive, semantic, by structure) and chunk-size/overlap trade-offs
- Hybrid search (keyword/BM25 + vector) and why pure vector often under-performs
- Reranking (cross-encoder / rerank models) to fix top-k relevance
- Grounding + citations; reducing hallucination by constraining to retrieved context
- When RAG beats fine-tuning (fresh/private/changing data) and when it doesn't
- Handling "answer not in context" gracefully

**Good to know**
- Query transformation: multi-query, HyDE, step-back, query routing
- Advanced RAG: parent-document / small-to-big, contextual retrieval, GraphRAG, agentic RAG
- Incremental / delta indexing, freshness, dedup of near-identical chunks
- Multi-tenant retrieval isolation (filter by tenant at the vector layer)
- RAG evaluation (see section 7): context precision/recall, faithfulness, answer relevancy

### 4. Vector search & embeddings
**Must know**
- Embedding models (OpenAI `text-embedding-3`, Cohere, open-source e5/bge), dimensions, normalization
- Similarity metrics (cosine, dot, euclidean); ANN vs exact search
- HNSW / IVF indexes at a conceptual level; recall vs latency trade-off
- Vector DB options: **pgvector (Postgres), Azure AI Search, Pinecone, Qdrant, Weaviate, Milvus, Chroma, Redis**
- Metadata filtering alongside vector search

**Good to know**
- Reranking models vs bi-encoders, Matryoshka embeddings, dimensionality reduction
- Embedding drift when you change models (you must re-embed the corpus)
- Cost/scale of storing millions of vectors, sharding, quantized vectors

### 5. Agents, tools & function calling
**Must know**
- **Function / tool calling** — how the model requests a tool, you execute it, and feed results back
- The agent loop (reason → act → observe), ReAct pattern, when an "agent" is overkill vs a fixed chain
- Tool design: clear schemas, idempotency, error handling, guarding side-effecting tools
- **MCP (Model Context Protocol)** — the emerging standard for exposing tools/data to models
- Multi-step orchestration, retries, and stopping conditions / loop guards

**Good to know**
- Multi-agent patterns (planner/worker, supervisor, debate) and their cost blow-up
- Frameworks: LangGraph, Microsoft **Semantic Kernel** (big for .NET), AutoGen, CrewAI, LlamaIndex agents
- Human-in-the-loop / approval gates for risky actions
- Planning, memory (short-term context vs long-term store), reflection

### 6. Fine-tuning & model adaptation
**Must know**
- The decision tree: **prompt → RAG → fine-tune** (fine-tune for *style/format/task*, not for *knowledge*)
- LoRA / QLoRA / PEFT at a conceptual level; why full fine-tuning is rarely needed
- What a good fine-tune dataset looks like (quality > quantity), train/val split, overfitting

**Good to know**
- Instruction tuning vs preference tuning (DPO/RLHF), distillation to a smaller cheaper model
- Continued pretraining for domain adaptation; catastrophic forgetting
- Hosting a fine-tuned open model (vLLM, Ollama, managed endpoints)

### 7. Evaluation & quality (a top differentiator)
**Must know**
- Why "it looks good" isn't evaluation; building an **eval set** of representative cases
- **LLM-as-judge** (and its pitfalls: bias, position bias, needs its own validation)
- RAG metrics: faithfulness/groundedness, answer relevancy, context precision/recall
- Regression testing prompts/models before shipping a change; offline vs online eval
- Hallucination detection and measuring it

**Good to know**
- Tooling: Ragas, DeepEval, promptfoo, OpenAI Evals, Azure AI Evaluation SDK
- Human eval + feedback capture loops; golden datasets; canary/online A-B
- Guarding against eval-set leakage; cost of eval itself

### 8. Guardrails, security & responsible AI
**Must know**
- **Prompt injection & jailbreaks** — direct and *indirect* (poisoned retrieved/scraped content); why
  this is the #1 LLM security issue
- Screening untrusted input before it reaches the prompt; separating instructions from data;
  least-privilege on tools the model can call
- PII detection/redaction, output moderation/content filtering, output validation before use
- **OWASP Top 10 for LLM Applications** — be able to name several
- Data privacy: don't send secrets/PII to third-party models; data residency

**Good to know**
- Guardrail libraries (NeMo Guardrails, Guardrails AI, Azure AI Content Safety)
- Responsible AI: bias/fairness, transparency, EU AI Act awareness, red-teaming
- Tenant isolation, audit logging of prompts/responses, rate-limit abuse

### 9. LLMOps / observability / cost (where senior/architect is judged)
**Must know**
- **Tracing every LLM call**: prompt, response, tokens, latency, cost, model version
- **Cost control**: token budgeting, prompt/response caching, semantic caching, model tiering/routing
  (cheap model first, escalate), context trimming
- **AI gateways/proxies** (Cloudflare AI Gateway, Portkey, LiteLLM, APIM for AI) — caching, rate
  limiting, fallback between providers, unified API, observability
- Rate limits / throttling / retries with backoff; provider failover
- Latency levers: streaming, parallelism, smaller models, batching

**Good to know**
- Observability tools: Langfuse, LangSmith, Helicone, Arize/Phoenix
- Prompt/version registry, cost dashboards, drift monitoring, feedback loops
- Batch inference vs realtime; async queue-based inference for heavy jobs

### 10. Multimodal
**Must know**
- Vision models: extracting structured data from images/screenshots/documents (multimodal prompts)
- Document intelligence / OCR vs true vision-LLM; when each fits
- Combining vision + text in one prompt; deterministic settings for extraction

**Good to know**
- Audio (speech-to-text/TTS), image generation, video; embeddings for images (CLIP)

### 11. Serving / inference / deployment
**Must know**
- API-based (managed) vs self-hosted open model; the trade-offs (cost, privacy, control, ops)
- Streaming responses (SSE) end to end; timeouts and partial results
- Async/queue-based processing for long or bulk AI jobs

**Good to know**
- vLLM, TGI, Ollama, quantization (GGUF/AWQ), GPU sizing basics, batching/continuous batching
- Edge/local inference, small language models (SLMs) for on-device

### 12. The .NET + Azure AI stack (your edge — lead with this)
**Must know**
- **Microsoft.Extensions.AI** (the unified `IChatClient` abstraction) and **Semantic Kernel**
  (plugins, planners, memory) — the idiomatic way to do GenAI in .NET
- **Azure OpenAI** SDK, deployments, content filtering; **Azure AI Search** for vector/hybrid + RAG
- **pgvector** on Azure Postgres; wiring a vector store to a .NET app

**Good to know**
- Azure AI Foundry (model catalog, evaluations, prompt flow), Document Intelligence, Content Safety
- APIM in front of AI backends (throttle/versioning/keys) — ties back to the Azure POC

### 13. Classic ML foundations (good-to-know baseline)
- Supervised vs unsupervised; classification/regression; train/test/validation; overfitting/regularization
- Core metrics: accuracy, precision/recall/F1, ROC-AUC, confusion matrix
- When **traditional ML beats an LLM** (tabular data, cheap high-volume classification, latency)
- MLOps vs LLMOps distinction

---

## Part B — Architect-level focus
At the architect band, expect to **defend decisions and design systems**, not recall APIs.

- **Reference architectures:** RAG service, agentic workflow, event-driven AI (queue → inference →
  store), human-in-the-loop, batch enrichment pipeline.
- **Model strategy:** build vs buy; model selection by cost/latency/quality; **model routing/cascading**;
  avoiding lock-in via a gateway/abstraction; multi-provider failover.
- **RAG data platform:** ingestion + chunking + indexing + refresh (incremental), corpus governance,
  multi-tenant isolation, re-embedding strategy when models change.
- **Security & governance:** prompt-injection defense-in-depth, PII handling, data residency, secrets,
  tenant isolation, audit trails, responsible-AI and (awareness) EU AI Act.
- **Scale & reliability:** caching layers (exact + semantic), rate-limit handling, async/queue inference,
  provider fallback, graceful degradation when the model is down/slow.
- **Cost governance:** token budgets/quotas, caching, model tiering, context compression, cost per
  request/tenant, dashboards and alerts.
- **Quality in production:** eval gates in CI, online eval/canary, feedback capture, drift monitoring,
  continuous prompt/model improvement.
- **Org/process:** how to roll out GenAI safely (shadow mode → canary → GA), and how to say "no" to a
  use case that GenAI shouldn't own.

---

## Part C — Question bank

### Dev-level (by topic)
1. Explain temperature vs top-p. When would you set temperature to 0?
2. How do you force a model to return valid JSON, and what do you do when it doesn't?
3. Walk me through a RAG pipeline end to end. Where does it usually go wrong?
4. Fixed vs semantic chunking — how do you choose chunk size and overlap?
5. Why is hybrid search often better than pure vector search? What is reranking?
6. RAG vs fine-tuning vs prompt engineering — decision criteria with examples.
7. What is cosine similarity? Why normalize embeddings? What is ANN (HNSW)?
8. How does function/tool calling work? How do you guard a side-effecting tool?
9. What is prompt injection (direct and indirect)? How do you defend against it?
10. How would you evaluate an LLM feature before shipping a prompt change?
11. What is LLM-as-judge and what are its pitfalls?
12. How do you control LLM cost and latency in a high-traffic app?
13. What does an AI gateway give you (caching, fallback, rate limiting, observability)?
14. When would you use traditional ML instead of an LLM?
15. How do you extract structured data from an image/document with a vision model?

### Architect / system-design
1. Design a multi-tenant RAG chatbot over customers' private documents. Cover ingestion, isolation,
   retrieval, cost, and eval.
2. Your LLM provider has a rate limit / outage. Design for resilience and graceful degradation.
3. Design a pipeline that enriches millions of records with an LLM nightly, within a cost budget.
4. How do you choose between model A (cheap/fast) and model B (smart/expensive) per request?
5. Design prompt-injection defense-in-depth for a system that feeds scraped web content to an LLM.
6. How do you keep a RAG corpus fresh and consistent as source data changes hourly?
7. Design eval + monitoring so a prompt/model change can't silently regress quality in prod.
8. Where do embeddings, vectors, and prompts live? How do you re-embed when you switch models?
9. Build vs buy for a summarization feature — walk through the trade-offs.
10. How do you roll out a GenAI feature safely from prototype to GA?

### Scenario / whiteboard prompts
- "Our chatbot hallucinates prices. Diagnose and fix." (grounding, citations, retrieval quality, eval)
- "Costs tripled last month." (caching, model tiering, token trimming, routing, abuse)
- "Latency is 8s p95." (streaming, smaller model, parallel retrieval, cache, async)

### Patterns you can speak to from experience (genericized, real production)
Use these as concrete stories — they map to things senior interviewers probe for:
- **LLM behind a gateway** for caching, rate limiting, provider fallback, and per-call cost/latency
  tracing (vs calling the provider SDK directly).
- **Prompt layering in a database** — a shared base prompt plus per-tenant overrides, resolved at
  runtime, versioned, tunable without a redeploy.
- **Prompts auto-improved from feedback signals** — weekly job that grows/validates/versions a tenant's
  prompt layer from real win/loss and click signals (with a validation gate before activation).
- **Multimodal extraction** — pulling structured offers/fields from banner/promo *images* with a vision
  model at temperature 0, as a backstop when the text path finds nothing.
- **Structured JSON extraction** from unstructured pages, then validate + dedup by *semantic identity*
  (title + normalized URL), not raw string equality.
- **Screening untrusted scraped content for instruction-injection** before it becomes (or trains) a
  prompt — because scraped/user content ends up in the system prompt.
- **Parallel, bounded LLM/scrape work** with a semaphore + safe concurrent collections, and idempotent
  writes behind a unique constraint so overlapping runs can't create duplicates.
- **Cost/latency trims:** trimming the LLM pipeline (skip classify + semantic passes) in a cheaper mode,
  turning a 30-min job into ~16 min with zero duplicates.

---

## Part D — Learning roadmap (build one thing per phase)
Each phase = read + build a small sample (ideally in this repo's spirit) + be able to explain it.

**Phase 0 — Foundations (1-2 weeks)**
- LLM basics (tokens, context, temperature, embeddings), call an API, stream a response.
- Prompt engineering: system prompts, few-shot, CoT, JSON/structured output + validation.
- Build: a CLI/API that takes a prompt, returns validated JSON, with retries on bad output.

**Phase 1 — RAG (2-3 weeks)**
- Embeddings + a vector store (start with **pgvector** or **Azure AI Search**).
- Chunking, hybrid search, reranking, citations, "not in context" handling.
- Build: a "chat over my docs" RAG service; add hybrid search + a reranker.

**Phase 2 — Agents & tools (2 weeks)**
- Function/tool calling, the agent loop, tool schemas, loop guards, MCP basics.
- Build: an assistant that calls 2-3 tools (search, a calculator, a DB lookup) with guards.

**Phase 3 — Evaluation & guardrails (1-2 weeks)**
- Build an eval set; LLM-as-judge; RAG metrics (Ragas/DeepEval/promptfoo).
- Prompt-injection tests, PII redaction, output validation, content safety.
- Build: an eval harness that gates a prompt change in CI + injection test cases.

**Phase 4 — LLMOps, cost & scale (1-2 weeks)**
- Tracing (Langfuse/LangSmith), an AI gateway (caching, fallback, rate limits), model routing.
- Async/queue-based inference for bulk jobs; semantic caching.
- Build: put your RAG service behind a gateway + tracing + a cheap→smart routing rule.

**Phase 5 — Architect (ongoing)**
- Draw the reference architectures in Part B; practice the system-design questions out loud.
- Do the cost/latency/quality trade-off math for each design; write ADRs (why this model, why RAG here).

**.NET-specific track (do in parallel — your differentiator)**
- `Microsoft.Extensions.AI` (`IChatClient`), **Semantic Kernel** (plugins/planners/memory),
  **Azure OpenAI** + **Azure AI Search** for RAG, **pgvector** from .NET, APIM in front of AI.

---

## Part E — How to use this next
- Ask for **Q&A with model answers** section by section (start with RAG + LLMOps — the most-asked).
- Ask for **one architect system-design drill** at a time and have me critique your answer.
- Ask me to **turn a phase into a hands-on sample** and I'll scaffold it the way we build the Azure
  concepts here.

## Quick "must-know" shortlist (if time is short)
LLM basics + structured output · RAG end-to-end (chunk/embed/hybrid/rerank/cite) · vector search &
embeddings · tool/function calling + agent loop · evaluation (eval sets, LLM-as-judge, RAG metrics) ·
prompt injection & guardrails · LLMOps (tracing, caching, gateways, cost/latency, routing) · RAG-vs-
fine-tune-vs-prompt decisioning · one architect-grade RAG/agent design you can defend.
