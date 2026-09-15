# Azure — Track Spec

**Start here for anything Azure-related.** See [`docs/superpowers/specs/README.md`](../README.md)
for what this file is and the process for keeping it in sync with the live pages.

## Status

**Cleared to start (as of 2026-09-15) — the user is working on Azure Basic in a parallel
session while C# wraps up.** Roadmap and full topic lists already exist on the live tier-index
pages below, zero topics written yet. Read in this order before writing the first page:
[`docs/refreshyourself-overview.md`](../../refreshyourself-overview.md) →
[`docs/rules/README.md`](../../rules/README.md) (starting with `product-principle.md`) → this
file's tables below for the exact topic order/hot flags. The C# Basic tier (`csharp/basic/`) is
the finished, user-approved reference implementation of every rule in `docs/rules/` — when in
doubt about how a rule applies in practice, open the matching C# page and match its pattern.

## Basic (14 topics) — roadmap only, 0 written

| # | Topic | Hot? | Written? |
|---|---|---|---|
| 1 | Azure Functions — triggers, bindings & hosting plans | 🔥 | 📝 |
| 2 | App Service — deployment slots & autoscale | 🔥 | 📝 |
| 3 | Storage Account — blob tiers & redundancy (LRS/ZRS/GRS) | 🔥 | 📝 |
| 4 | Azure SQL — DTU vs. vCore & geo-replication | 🔥 | 📝 |
| 5 | Key Vault — secrets, keys, certs & access policies vs. RBAC | 🔥 | 📝 |
| 6 | Managed Identity — system-assigned vs. user-assigned | 🔥 | 📝 |
| 7 | Microsoft Entra ID — OAuth2 / OIDC basics | 🔥 | 📝 |
| 8 | RBAC — roles, scope & least privilege | 🔥 | 📝 |
| 9 | Service Bus — queues vs. topics/subscriptions | 🔥 | 📝 |
| 10 | Application Insights — tracing & live metrics | 🔥 | 📝 |
| 11 | VNet & Subnets — the basic networking building blocks | Normal | 📝 |
| 12 | Containers — ACI vs. Container Apps vs. AKS | Normal | 📝 |
| 13 | VM Scale Sets & availability zones/sets | Normal | 📝 |
| 14 | Azure Monitor — metric vs. log alerts | Normal | 📝 |

## Intermediate (14 topics) — roadmap only, 0 written

| # | Topic | Hot? | Written? |
|---|---|---|---|
| 1 | Service Bus vs. Event Grid vs. Event Hubs — which one, when | 🔥 | 📝 |
| 2 | Cosmos DB — partition key design & RU/s | 🔥 | 📝 |
| 3 | Cosmos DB consistency levels — the 5 levels | 🔥 | 📝 |
| 4 | Durable Functions — orchestrator / activity / entity patterns | 🔥 | 📝 |
| 5 | API Management (APIM) — gateway, policies & rate limiting | 🔥 | 📝 |
| 6 | Front Door vs. App Gateway vs. Traffic Manager vs. Load Balancer | 🔥 | 📝 |
| 7 | Service Principal — app registration & vendor authentication | 🔥 | 📝 |
| 8 | Azure Cache for Redis — cache-aside & distributed lock | 🔥 | 📝 |
| 9 | Log Analytics & KQL — writing queries | Normal | 📝 |
| 10 | Event Grid — event schema, retry & dead-letter | Normal | 📝 |
| 11 | Event Hubs — partitions, consumer groups & checkpointing | Normal | 📝 |
| 12 | Azure OpenAI — deployments, tokens & embeddings | Normal | 📝 |
| 13 | Azure AI Search — vector search & the RAG pattern | Normal | 📝 |
| 14 | CI/CD — Azure DevOps pipelines vs. GitHub Actions | Normal | 📝 |

## Advanced (12 topics) — roadmap only, 0 written

| # | Topic | Hot? | Written? |
|---|---|---|---|
| 1 | Well-Architected Framework — the 5 pillars | 🔥 | 📝 |
| 2 | Resilience patterns — retry, circuit breaker, bulkhead, idempotency | 🔥 | 📝 |
| 3 | Hub-spoke topology & VNet peering | 🔥 | 📝 |
| 4 | Private Endpoints vs. Service Endpoints | 🔥 | 📝 |
| 5 | IaC — Bicep vs. ARM vs. Terraform | 🔥 | 📝 |
| 6 | Workload Identity Federation — passwordless cross-cloud auth | 🔥 | 📝 |
| 7 | Disaster Recovery — RPO/RTO & landing zones | 🔥 | 📝 |
| 8 | Transactional Outbox pattern | Normal | 📝 |
| 9 | ExpressRoute & VPN Gateway | Normal | 📝 |
| 10 | Azure Firewall & DDoS Protection | Normal | 📝 |
| 11 | Azure Policy & Blueprints | Normal | 📝 |
| 12 | Cost optimization strategies | Normal | 📝 |

## Where the roadmap came from

Sourced directly from `C:\Vivek\SourceCode\AzureConcepts\Azure-Interview-Topics.md` — a real
topic map written for senior-dev/TL/architect Azure interview prep, listing must-know vs.
good-to-know per domain (compute, messaging, data, identity, API/edge, AI, observability,
networking, architecture/governance). Nothing in the three tables above was invented; every row
traces back to a bullet in that source file. See [accuracy.md](../../rules/accuracy.md).

That source file groups by **domain** (e.g. "Messaging & eventing") with **must-know vs.
good-to-know** as its only importance signal. This spec re-sorts the same items into
**Basic/Intermediate/Advanced by conceptual depth** (Basic = "what the service is and its core
building blocks," Intermediate = "which service, when — tradeoffs between similar services,"
Advanced = "architect-level design/governance/resilience") and maps must-know → 🔥 Hot,
good-to-know → mostly Normal (a few must-know items still landed Normal where the *topic* itself
is foundational but a *deep dive* on it is more Intermediate/Advanced than Basic).

## Track-specific decisions and boundaries

- Icon is ☁️ (plain emoji, no Azure logo mark) — consistent with the site-wide rule in
  [visual-style.md](../../rules/visual-style.md): real emoji only, never a hand-drawn brand
  logo, for every track including this one.
- Tile/tier accent colour uses Azure's actual brand blue (`#0078D4`) — this is a colour choice,
  not a logo, so it doesn't conflict with the "no brand logos" rule.
- Two source items were split into two separate site topics because they're genuinely distinct
  ideas worth their own page: **Cosmos DB partitioning/RU/s** vs. **Cosmos DB consistency
  levels** (source file flags both as "deep questions likely" under one bullet); similarly
  **Service Bus** (Basic, the service itself) is kept separate from **Service Bus vs. Event Grid
  vs. Event Hubs** (Intermediate, the comparison/decision).

## Known gaps

- Nothing in this track is written yet — roadmap/skeleton only. No longer gated on C# review;
  see **Status** above.
- The source file's "Quick must-know shortlist" (Functions+Durable, Service Bus vs. Event Grid
  vs. Event Hubs, Cosmos DB partitioning+consistency, Managed Identity+Service
  Principal+Key Vault, APIM, Front Door vs. App Gateway, App Insights+KQL, Well-Architected +
  resilience) is fully covered across the three tiers above — worth double-checking that
  coverage holds if the roadmap gets edited later.
- Tiering (Basic/Intermediate/Advanced split) is a judgment call made once, not yet
  pressure-tested by actually writing the pages — treat it as reviewable.
