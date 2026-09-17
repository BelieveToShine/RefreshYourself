# Azure — Track Spec

**Start here for anything Azure-related.** See
[`docs/superpowers/specs/README.md`](../README.md) for what this file is and the process for
keeping it in sync with the live pages.

## Status — Phases 1–7 complete, all 44 pages written

- **Phase 1** — [`question-taxonomy.md`](question-taxonomy.md): built from the user's own later,
  simplified Azure section of the interview-prep plan (12 concept groups), deliberately kept
  away from a full Azure-service encyclopedia and reframed around architecture and
  troubleshooting scenarios, per the user's own instruction. The old, more service-encyclopedic
  three-tier roadmap (0 topics ever written against it) is fully superseded.
- **Phase 2 gap-hunt** — an active hunt against outside Azure domain knowledge (per
  [gap-hunting.md](../../rules/gap-hunting.md)), not a re-read of the 11 original groups. Added
  16 real gaps — Microsoft Entra ID fundamentals, RBAC, Managed Identity vs. Service Principal,
  Key Vault access patterns, containers (ACI/Container Apps/AKS), Durable Functions, Cosmos DB
  (partitioning + consistency levels), Service Bus vs. Event Grid vs. Event Hubs, Azure Monitor
  vs. Application Insights, Front Door vs. App Gateway vs. Traffic Manager vs. Load Balancer,
  hub-spoke/VNet peering, disaster recovery/multi-region strategy, the Well-Architected
  Framework, cost optimization levers, landing zones/governance, and a brand-new Infrastructure
  as Code concept group — logged with full reasoning in the taxonomy's own "Gap-hunt log," which
  also lists 7 candidates explicitly considered and excluded (Azure OpenAI/AI Search, general
  CI/CD tooling, ExpressRoute/VPN Gateway, Azure Firewall/DDoS, Workload Identity Federation,
  Transactional Outbox, VM Scale Sets as a dedicated topic).
- **Phases 3–6** — [`roadmap.md`](roadmap.md): the 45 post-gap-hunt questions grouped into 44
  final pages (one merge: §10's original "cost considerations" bullet folded into the gap-hunt
  cost-optimization page), tiered by **question type** (not difficulty), and given an
  interview-priority tag. Several non-obvious tier calls (Well-Architected Framework, Landing
  Zones, Cost Optimization Levers landing in Advanced on content-depth grounds despite their
  "what is/are" phrasing) are documented with reasoning in `roadmap.md`'s own Phase 4 section.
- **Phase 6 wiring done at Phase 1**, per [specs/README.md](../README.md)'s mandate —
  `azure/roadmap.html` and the root `index.html` tile's `roadmap-badge` existed from the moment
  the Phase 1 taxonomy was written, correctly labeled "draft" through Phases 2–6 and flipped to
  live only once Phase 7 genuinely finished.
- **Phase 7 — all 44 pages written**, using the same template as every other completed track's
  Phase 7 (❓ Interview Question line → 🔥 Recall → 🧠 Visual → ⚠️ Trap → 🔄 Follow-up → 🎯
  Say-this → 📖 Explanation → 💻 Code → 🌍 Real-world/Scenario — see
  [content-writing.md](../../rules/content-writing.md)), by dispatched subagents referencing
  `sql/basic/1.html` / `sql/intermediate/1.html` / `sql/advanced/1.html` as structural templates.
  **Diagram verification, with the actual evidence, not just an aggregate claim:** every
  subagent ran the mandatory script from
  [diagram-style.md](../../rules/diagram-style.md#mandatory-automated-verification--hand-computed-coordinates-are-not-verification)
  against its own page and reported `issueCount: 0` before finishing. The orchestrating session
  then ran its own **independent full sweep, one page at a time, all 44 pages** — this is where
  a real defect actually showed up despite every subagent's own clean self-report:
  `azure/intermediate/17.html` came back `[{"svgIndex":0,"issueCount":1,"issues":["TEXT OVERFLOW:
  \"already matches — nothing changes\" w=174 boxw=160"]}]` — a subtitle 14px wider than its
  box. Fixed by shortening the text to "state already matches," re-verified
  `[{"svgIndex":0,"issueCount":0,"issues":[]}]`. Every other page in the independent sweep
  (`azure/basic/1–18.html`, `azure/intermediate/1–16.html` and `18–19.html`,
  `azure/advanced/1–7.html`) came back clean on the first pass with no fix needed. A second full
  re-sweep after the fix and after all site-wiring edits confirmed all 44 pages at
  `issueCount: 0`, zero exceptions.
- A container restart mid-Phase-7 killed 10 in-flight subagents; disk-existence checks (not the
  agent-status field) were used to find which of their files had already been written before the
  restart (3 survived intact and were verified/committed as-is; 7 were missing and re-dispatched
  from scratch) — the same disk-truth-over-status-field lesson the React/Angular tracks already
  established, applied here to a different failure mode (a container restart, not a stale
  `ListAgents` status).
- **Pager-consistency fix-up**: several subagents correctly muted a pager link to a sibling that
  didn't exist yet at their own write-time, per content-writing.md's "(coming soon)" fallback.
  Once all 44 pages existed, a grep found exactly 5 remaining muted links
  (`advanced/4→5`, `advanced/5→6`, `advanced/6→7`, `intermediate/18→19`, `intermediate/19→18`)
  and converted each to a real link. A scripted Playwright pass then confirmed **0 broken pager
  links, 0 page errors across all 44 pages**.

## Basic (18 topics) — 18 written

| # | Topic | Priority | Written? |
|---|---|---|---|
| 1 | Subscriptions, Resource Groups & Regions | 🔥 | ✅ |
| 2 | App Service | 🔥 | ✅ |
| 3 | Azure Functions vs. App Service | 🔥 | ✅ |
| 4 | Storage Account | 🔥 | ✅ |
| 5 | Azure SQL | 🔥 | ✅ |
| 6 | Cosmos DB — Partition Keys & RU/s | 🔥 | ✅ |
| 7 | Key Vault | 🔥 | ✅ |
| 8 | Managed Identity | 🔥 | ✅ |
| 9 | Microsoft Entra ID | 🔥 | ✅ |
| 10 | RBAC | 🔥 | ✅ |
| 11 | Service Bus | 🔥 | ✅ |
| 12 | Application Insights | 🔥 | ✅ |
| 13 | Networking Basics — VNets & Subnets | 🔥 | ✅ |
| 14 | Private Endpoint | 🔥 | ✅ |
| 15 | Scaling — Scale Up vs. Scale Out | 🔥 | ✅ |
| 16 | High Availability vs. Disaster Recovery | 🔥 | ✅ |
| 17 | Azure API Management | ⭐ | ✅ |
| 18 | Load Balancing | ⭐ | ✅ |

## Intermediate (19 topics) — 19 written

| # | Topic | Priority | Written? |
|---|---|---|---|
| 1 | App Service Deployment Slots | 🔥 | ✅ |
| 2 | Containers on Azure — ACI vs. Container Apps vs. AKS | 🔥 | ✅ |
| 3 | Managed Identity vs. Service Principal | 🔥 | ✅ |
| 4 | Key Vault Access Patterns | 🔥 | ✅ |
| 5 | Queues vs. Topics/Subscriptions | 🔥 | ✅ |
| 6 | Service Bus vs. Event Grid vs. Event Hubs | 🔥 | ✅ |
| 7 | Troubleshooting With Application Insights | 🔥 | ✅ |
| 8 | Front Door vs. App Gateway vs. Traffic Manager vs. Load Balancer | 🔥 | ✅ |
| 9 | Resilience Patterns | 🔥 | ✅ |
| 10 | Bicep vs. ARM vs. Terraform | 🔥 | ✅ |
| 11 | Resource Group Lifecycle | ⭐ | ✅ |
| 12 | Durable Functions | ⭐ | ✅ |
| 13 | Secrets Management as a Practice | ⭐ | ✅ |
| 14 | Logging vs. Application Insights | ⭐ | ✅ |
| 15 | Azure Monitor vs. Application Insights | ⭐ | ✅ |
| 16 | Caching at an Architecture Level | ⭐ | ✅ |
| 17 | Idempotent Deployment for IaC | ⭐ | ✅ |
| 18 | Cosmos DB Consistency Levels | 🧠 | ✅ |
| 19 | Service Bus Architecture | 🧠 | ✅ |

## Advanced (7 topics) — 7 written

| # | Topic | Priority | Written? |
|---|---|---|---|
| 1 | Well-Architected Framework | 🔥 | ✅ |
| 2 | App Service Returns 500s | 🔥 | ✅ |
| 3 | Disaster Recovery — RPO, RTO & Multi-Region Strategy | 🔥 | ✅ |
| 4 | Hub-Spoke Topology & VNet Peering | ⭐ | ✅ |
| 5 | Cost Optimization Levers | ⭐ | ✅ |
| 6 | Landing Zones & Governance | ⭐ | ✅ |
| 7 | Requirements-First Architecture Questions | 🧠 | ✅ |

## Where the roadmap came from

Sourced from the user's own later, simplified Azure section of the interview-prep plan — 11
concept groups organized around architecture and commonly-asked services, deliberately kept
away from a full Azure-service encyclopedia (that older, more detailed roadmap — RBAC, Entra
ID/OAuth2, VNet & Subnets as a dedicated Basic topic, VM Scale Sets, Cosmos DB, Event Grid/Event
Hubs, Durable Functions, IaC, Well-Architected Framework, etc. — is now frozen). See
[`question-taxonomy.md`](question-taxonomy.md)'s own "Coverage note for Phase 1" and "Gap-hunt
log" for exactly what was carried forward from the Phase 1 source, and what this track's own
Phase 2 gap-hunt independently re-added as a new 12th concept group and 16 additional questions
across the original 11. Notably, several of the gap-hunt's own additions turned out to overlap
substantially with items from the older, frozen roadmap — not because the hunt copied that list,
but because both were independently checking against the same real body of commonly-asked Azure
interview material; see `roadmap.md`'s "Track-specific decisions" section for the full reasoning
on this, including which of the old roadmap's items were re-examined and still excluded.

## Track-specific decisions and boundaries

- **This track stays scoped to Azure architecture and the commonly-asked services around it —
  not a full Azure service catalog.** See the taxonomy's own "Considered and excluded" list for
  the specific candidates kept out on those grounds (Azure OpenAI/AI Search — belongs to this
  site's separate, currently-untouched AI track; general CI/CD tooling — not Azure-specific;
  ExpressRoute/VPN Gateway and Azure Firewall/DDoS — pure-networking/security-specialist depth;
  Workload Identity Federation — niche within identity; Transactional Outbox — a general
  distributed-systems pattern, not an Azure one; VM Scale Sets as a dedicated topic — already
  covered by the existing scale-up-vs-scale-out concept).
- **Icon and track color: ☁️, Azure's own brand blue (`#0078D4`)** — already reserved for this
  track on the root tile since before this rebuild; no collision check was needed since it was
  never shared with another track.
- **Tier calls that read as "core knowledge" by grammar but land in Advanced on content-depth
  grounds** — Well-Architected Framework, Landing Zones & Governance, and Cost Optimization
  Levers are all worded as "what is/are" questions in the taxonomy (which would suggest Basic),
  but all three require real architecture judgment to answer well and are never asked of a
  junior candidate — the same logic Angular's SSR/Hydration page used landing in Advanced
  despite being routinely asked. See `roadmap.md`'s Phase 4 section for the full reasoning.
- **Code examples**, where a page has one, use whichever the concept actually is (Azure CLI for
  most resource operations, C# for SDK usage like `DefaultAzureCredential`/`ServiceBusSender`,
  Bicep/KQL where those are literally what's being taught) rather than forcing every page into
  one language. Several conceptual/architectural pages (Well-Architected Framework, Disaster
  Recovery strategy, Requirements-First Architecture Questions) deliberately omit a code card —
  per content-writing.md's "code must earn its spot," a design-conversation topic doesn't need
  one manufactured.
- A container restart mid-Phase-7 required re-dispatching some already-assigned pages; see the
  Status section above for how that was handled (disk-existence checks, not trusting agent
  status).

## Known gaps

None — this track went through the full 7-phase pipeline (including its own Phase 2 gap-hunt,
folded into the initial pass rather than needing a later addendum) in one build, and every page
passed the mandatory independent diagram-verification sweep (44/44, `issueCount: 0` on the final
sweep, with the one genuine finding during the process — `intermediate/17.html`'s text
overflow — found and fixed, not glossed over). Expect a review/feedback pass once the user goes
through it, same as every other completed track.
