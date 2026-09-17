# Azure — Roadmap (Phases 2–6)

**Phases 2–6 of the 7-phase pipeline** (see [`docs/superpowers/specs/README.md`](../README.md)).
Builds on [`question-taxonomy.md`](question-taxonomy.md) — read that first for the underlying
questions; this file is where they get grouped into pages, tiered, and prioritized. Phase 7
(writing the pages) has not started as of this file being written.

## Phase 2 — review, dedupe, gap-hunt

Done in `question-taxonomy.md` itself — see that file's own "## Gap-hunt log (Phase 2)" section
for the full added/excluded list with reasoning (16 additions across 11 existing groups plus one
new group, 7 candidates considered and explicitly excluded). This file picks up from the
post-gap-hunt taxonomy: 12 concept groups, 45 individual questions.

## Phase 3 — grouping into pages

**Near 1:1, one taxonomy question → one page**, the same granularity SQL and Angular used —
Azure's questions are already written at "one distinct interview question" scope, so splitting or
merging further would either pad a page with two unrelated questions (against
[content-writing.md](../../rules/content-writing.md)'s "one topic, one page" rule) or fragment
one real question into two thin pages. §1 Azure Fundamentals' two bullets stay as two separate
pages despite sharing a group — the Core concept bullet ("subscription/resource group/region")
is genuinely Basic-depth, while the Understanding bullet ("what a resource group actually
groups — lifecycle, not just naming") is a distinct practical follow-up, landing Intermediate —
the same "one concept, multiple tiers/pages" pattern
[interview-depth-and-priority.md](../../rules/interview-depth-and-priority.md)'s own DI example
describes, not a merge. **One deliberate merge did happen:** §10 Architecture & Cost's original
"what are cost considerations" Core concept bullet folds into the gap-hunt "cost optimization
levers" Scenario bullet as one Advanced page — the original bullet was too generic to stand on
its own once the concrete gap-hunt version existed answering the same underlying question with
more substance. No other merges or splits were needed. Net: 45 taxonomy questions, 1 merge → 44
pages.

## Phase 4 — tier (question type, not difficulty)

Per [interview-depth-and-priority.md](../../rules/interview-depth-and-priority.md): Basic = core
knowledge/terminology ("what is X"), Intermediate = practical usage/comparison/troubleshooting,
Advanced = internals/architecture/trade-off/complex scenario. A few non-obvious calls:

- **"Load balancing at a basic level"** (taxonomy §7) reads as Understanding but is explicitly
  scoped in its own question text to "before getting into which specific service does it" —
  that's core-knowledge framing, not a comparison, so it's Basic. The actual 4-way comparison
  (Front Door vs. App Gateway vs. Traffic Manager vs. Load Balancer, a gap-hunt addition) is the
  Intermediate page that answers the "which specific service" half.
- **"Azure API Management — what problem it solves"** stays Basic (a definitional "what is it"),
  even though APIM as a product has plenty of Advanced-depth configuration — this taxonomy never
  asked those questions, so there's no Advanced APIM page to force into existence.
- **Well-Architected Framework, Landing Zones & Governance, Cost Optimization Levers** are all
  worded as "what is/what are" questions in the taxonomy (Core concept/Understanding), which
  would suggest Basic — but all three are inherently architect-level material (a WAF pillar
  question, a governance/policy question, and a cost-lever question are never asked of a junior
  candidate, and answering any of them well requires architecture judgment, not term recall).
  Placed in Advanced on content grounds, same logic as Angular's SSR page landing in Advanced
  despite being routinely asked — **this is a tier call about the content's actual depth, not
  about the taxonomy's grammatical question form.**
- **Cosmos DB consistency levels** is Intermediate, not Advanced — knowing the 5 levels and their
  tradeoff is practical/comparison knowledge every Cosmos DB user needs, not internals or
  architecture; it just happens to be commonly missed, which is a priority signal (🧠 below), not
  a tier signal.

## Phase 5 — priority (🔥 Must Know / ⭐ Should Know / 🧠 Deep Dive)

Independent of tier, per the same rule file. Reasoning for the less-obvious calls:

- **Managed Identity vs. Service Principal, Key Vault access patterns, RBAC, Entra ID** are all
  🔥 — identity questions come up in nearly every real Azure interview once the conversation moves
  past "what is a resource group," and skipping straight to Managed Identity without the
  Service Principal comparison or the access-pattern mechanics leaves a real gap an interviewer
  will probe.
- **Cosmos DB consistency levels and Service Bus architecture (producer/consumer wiring)** are
  🧠 Deep Dive, not 🔥 — both are genuinely likely to come up in a data/messaging-focused
  interview, but "deep dive" here means the *answer* requires real internals reasoning (the 5
  consistency levels' actual tradeoffs; how a pub/sub system is actually wired end to end), not
  that the question itself is rare.
- **Requirements-first architecture questions** is 🧠 — this is the single question most likely
  to expose a candidate who's memorized services but never actually designed with them, which is
  exactly what "Deep Dive" is for.
- **Well-Architected Framework, "500s" troubleshooting scenario, and DR/multi-region strategy**
  are 🔥 despite sitting in Advanced — same reasoning as Angular's SSR/Hydration page: priority
  and tier are independent axes, and all three are routine, expected questions in a current
  Azure interview even though the content of the answer is genuinely Advanced-depth.
- **Hub-spoke/VNet peering, cost optimization levers, and landing zones/governance** are ⭐ — real
  differentiators an interviewer is glad to hear, but less universally asked than the 🔥 items
  above; more likely to come up specifically in an architect-track interview than a general senior
  one.

## Phase 6 — final page list

**44 pages: Basic 18, Intermediate 19, Advanced 7.** Numbering is each tier's own hot-first order
(🔥 pages before ⭐/🧠 within a tier, same rule as every other track) — the file name matches this
final position, not the taxonomy's original group order.

### Basic (18)

| # | Page | Priority | Source (taxonomy §) |
|---|---|---|---|
| 1 | Subscriptions, Resource Groups & Regions | 🔥 | §1 (Core concept) |
| 2 | App Service — what it manages for you | 🔥 | §2 |
| 3 | Azure Functions vs. App Service | 🔥 | §2 |
| 4 | Storage Account — what goes in one | 🔥 | §3 |
| 5 | Azure SQL — how it relates to on-prem SQL Server | 🔥 | §3 |
| 6 | Cosmos DB — partition keys & RU/s | 🔥 | §3 [gap-hunt] |
| 7 | Key Vault — what belongs in it | 🔥 | §4 |
| 8 | Managed Identity — no more secrets in config | 🔥 | §4 |
| 9 | Microsoft Entra ID — app registrations & OAuth2/OIDC | 🔥 | §4 [gap-hunt] |
| 10 | RBAC — roles, scope & least privilege | 🔥 | §4 [gap-hunt] |
| 11 | Service Bus — what it's for | 🔥 | §5 |
| 12 | Application Insights — what it captures | 🔥 | §6 |
| 13 | Networking basics — VNets & subnets | 🔥 | §7 |
| 14 | Private Endpoint — reaching a service privately | 🔥 | §7 |
| 15 | Scaling — scale up vs. scale out | 🔥 | §8 |
| 16 | High Availability vs. Disaster Recovery | 🔥 | §8 |
| 17 | Azure API Management — what problem it solves | ⭐ | §9 |
| 18 | Load Balancing — the basic idea | ⭐ | §7 |

### Intermediate (19)

| # | Page | Priority | Source (taxonomy §) |
|---|---|---|---|
| 1 | App Service Deployment Slots — avoiding downtime | 🔥 | §2 |
| 2 | Containers on Azure — ACI vs. Container Apps vs. AKS | 🔥 | §2 [gap-hunt] |
| 3 | Managed Identity vs. Service Principal | 🔥 | §4 [gap-hunt] |
| 4 | Key Vault Access Patterns — RBAC vs. access policies | 🔥 | §4 [gap-hunt] |
| 5 | Queues vs. Topics/Subscriptions | 🔥 | §5 |
| 6 | Service Bus vs. Event Grid vs. Event Hubs | 🔥 | §5 [gap-hunt] |
| 7 | Troubleshooting With Application Insights | 🔥 | §6 |
| 8 | Front Door vs. App Gateway vs. Traffic Manager vs. Load Balancer | 🔥 | §7 [gap-hunt] |
| 9 | Resilience Patterns — retries, timeouts, fallback | 🔥 | §8 |
| 10 | Bicep vs. ARM vs. Terraform | 🔥 | §12 [gap-hunt] |
| 11 | Resource Group Lifecycle — what it actually groups | ⭐ | §1 |
| 12 | Durable Functions — orchestrator/activity/entity patterns | ⭐ | §2 [gap-hunt] |
| 13 | Secrets Management as a Practice | ⭐ | §4 |
| 14 | Logging vs. Application Insights | ⭐ | §6 |
| 15 | Azure Monitor vs. Application Insights (+ KQL alerts) | ⭐ | §6 [gap-hunt] |
| 16 | Caching at an Architecture Level | ⭐ | §8 |
| 17 | Idempotent Deployment for IaC | ⭐ | §12 [gap-hunt] |
| 18 | Cosmos DB Consistency Levels | 🧠 | §3 [gap-hunt] |
| 19 | Service Bus Architecture — wiring producers & consumers | 🧠 | §5 |

### Advanced (7)

| # | Page | Priority | Source (taxonomy §) |
|---|---|---|---|
| 1 | Well-Architected Framework — the 5 pillars | 🔥 | §10 [gap-hunt] |
| 2 | "App Service Suddenly Returns 500s" — Troubleshooting Scenario | 🔥 | §11 |
| 3 | Disaster Recovery / Multi-Region Strategy — RPO & RTO | 🔥 | §8 [gap-hunt] |
| 4 | Hub-Spoke Topology & VNet Peering | ⭐ | §7 [gap-hunt] |
| 5 | Cost Optimization Levers | ⭐ | §10 [gap-hunt] |
| 6 | Landing Zones & Governance | ⭐ | §10 [gap-hunt] |
| 7 | Requirements-First Architecture Questions | 🧠 | §10 |

## Track-specific decisions and boundaries

- This track stays scoped to Azure architecture and the commonly-asked services around it — not
  a full Azure service catalog. See the taxonomy's own "Considered and excluded" list for the
  specific candidates kept out on those grounds (Azure OpenAI/AI Search, general CI/CD tooling,
  ExpressRoute/VPN Gateway, Azure Firewall/DDoS, Workload Identity Federation, Transactional
  Outbox, VM Scale Sets as a dedicated topic).
- Icon and track color: ☁️, Azure's own brand blue (`#0078D4`) — already reserved for this track
  on the root tile since before this rebuild; no collision check needed, it was never shared.
- Code examples, where a page has one, use whichever the concept actually is (Bicep/ARM JSON/HCL
  for the IaC page, KQL for the Azure Monitor page, plain HTTP/CLI where that's what a real
  interview answer would reference) rather than forcing every page into one language.
- The old, frozen 40-topic three-tier roadmap in `azure/overview.md` (RBAC, Entra ID, VNet &
  Subnets, VM Scale Sets, Cosmos DB, Event Grid/Event Hubs, Durable Functions, IaC, Well-Architected
  Framework, etc.) turned out to substantially overlap with what this Phase 2 gap-hunt
  independently surfaced as real gaps — not a coincidence: that old roadmap was itself sourced
  from a real senior/architect Azure interview-prep reference, so the gap-hunt rediscovering much
  of the same ground is a good sign the hunt actually worked, not a sign it just copied the old
  list. A few of the old roadmap's items (ExpressRoute, VPN Gateway, Azure Firewall, DDoS
  Protection, Workload Identity Federation) were re-examined and still excluded — see the
  taxonomy's exclusion reasoning, which is independent of whether the item happened to appear in
  the old list.

## Known gaps

None identified going into Phase 7 — every taxonomy question (post-gap-hunt) maps to exactly one
page above. Tiering/priority calls flagged above as non-obvious are worth a second look once the
pages are actually written and reviewed, same as every other track's roadmap says about its own
judgment calls.
