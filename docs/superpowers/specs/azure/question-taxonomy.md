# Azure — Interview Question Taxonomy

**Phase 1 of the 7-phase pipeline** (see [`docs/superpowers/specs/README.md`](../README.md)).
No tier, no priority, no page grouping yet. Kept tightly to the user's *later, simplified*
Azure section of the interview-prep plan — organized around architecture and commonly-asked
services, deliberately avoiding an Azure-service encyclopedia, per the user's own instruction.

**Note on the existing `azure/overview.md`:** that file's three-tier roadmap (40 topics, 0
written) predates this rebuild and is now frozen the same way C# Basic's old tables are — this
taxonomy is the replacement source of truth for Phase 2 onward, not an addition to the old one.

---

## 1. Azure Fundamentals

- **Core concept** — What are the basic building blocks — subscription, resource group, region?
- **Understanding** — What does a resource group actually group — lifecycle, not just naming?

---

## 2. Compute

- **Core concept** — What is App Service, and what does it manage for you?
- **Core concept** — What is Azure Functions, and how is it different from App Service?
- **Scenario** — App Service deployment — what are the common ways to get code onto it, and how
  does a deployment slot help avoid downtime?
- **Comparison [gap-hunt, new]** — Containers on Azure — ACI vs. Container Apps vs. AKS — what's
  the actual decision between them (a single container, a serverless container app, or a full
  orchestrator)?
- **Understanding [gap-hunt, new]** — Durable Functions — what problem do orchestrator/activity/
  entity patterns solve that a plain stateless Function can't?

---

## 3. Data & Storage

- **Core concept** — What is a Storage Account, and what are the main things you'd store in one?
- **Core concept** — What is Azure SQL, and how does it relate to on-prem SQL Server?
- **Core concept [gap-hunt, new]** — What is Cosmos DB, and what makes it different from a
  relational database — partition key design and RU/s as the throughput/cost model?
- **Understanding [gap-hunt, new]** — Cosmos DB consistency levels — what's the actual tradeoff
  between strong consistency and the weaker levels, and why would you ever pick weaker on
  purpose?

---

## 4. Identity & Secrets

- **Core concept** — What is Key Vault, and what belongs in it?
- **Core concept** — What is Managed Identity, and what problem does it solve (no more secrets
  in config)?
- **Understanding** — What does "secrets management" mean as a broader practice beyond just
  "use Key Vault" — rotation, least-privilege access?
- **Core concept [gap-hunt, new]** — What is Microsoft Entra ID (Azure AD), and what does an app
  registration actually represent — the OAuth2/OIDC basics an interviewer expects at this level?
- **Core concept [gap-hunt, new]** — What is RBAC on Azure — roles, scope, and the
  least-privilege principle behind assigning them?
- **Comparison [gap-hunt, new]** — Managed Identity vs. Service Principal — when does an Azure
  resource use one vs. the other, and why is Managed Identity generally preferred where it's
  available?
- **Understanding [gap-hunt, new]** — Key Vault access patterns — RBAC vs. the older access-policy
  model, and how Managed Identity actually gets used to reach a secret without a credential ever
  living in config?

---

## 5. Messaging

- **Core concept** — What is Service Bus, and what's it for?
- **Comparison** — Queues vs. topics/subscriptions — when do you need one vs. the other?
- **Understanding** — What does "Service Bus architecture" mean in practice — how does a
  producer/consumer system actually get wired together around it?
- **Comparison [gap-hunt, new]** — Service Bus vs. Event Grid vs. Event Hubs — which one when a
  message needs guaranteed delivery vs. a reactive event vs. a high-throughput event stream?

---

## 6. Observability

- **Core concept** — What is Application Insights, and what does it capture?
- **Scenario** — How would you use Application Insights to troubleshoot a production issue?
- **Understanding** — How does logging fit alongside Application Insights — are they the same
  thing?
- **Comparison [gap-hunt, new]** — Azure Monitor vs. Application Insights — how do they actually
  relate (Monitor as the platform, App Insights as the APM layer on top), and what's the
  difference between a metric alert and a log alert written in KQL?

---

## 7. Networking

- **Core concept** — What are the basics of networking on Azure (VNets, subnets)?
- **Core concept** — What is a Private Endpoint, and what does it change about how a service is
  reached?
- **Understanding** — What does load balancing mean at a basic level, before getting into which
  specific Azure service does it?
- **Comparison [gap-hunt, new]** — Front Door vs. Application Gateway vs. Traffic Manager vs.
  Load Balancer — global vs. regional, L7 vs. L4 — what's the actual decision tree between the
  four?
- **Scenario [gap-hunt, new]** — Hub-spoke topology and VNet peering — why would a real
  architecture centralize shared services in a hub VNet instead of every spoke talking directly
  to everything else?

---

## 8. Scaling, Availability & Resilience

- **Core concept** — What does scaling mean on Azure — scale up vs. scale out?
- **Core concept** — What is high availability, and how is it different from disaster recovery?
- **Understanding** — What does resilience mean for a cloud application — retries, timeouts,
  fallback — beyond just "the service didn't go down"?
- **Understanding** — What is caching for, at an architecture level (not a specific product)?
- **Scenario [gap-hunt, new]** — Disaster recovery / multi-region strategy — how do RPO and RTO
  actually drive the choice between an active-passive and an active-active multi-region design?

---

## 9. API Management

- **Core concept** — What is Azure API Management, and what problem does it solve for exposing
  APIs?

---

## 10. Architecture & Cost

- **Scenario** — Given a set of requirements, what architecture questions would you actually ask
  first (availability needs, expected load, data sensitivity)?
- **Core concept** — What are cost considerations that come up when designing an Azure
  architecture?
- **Core concept [gap-hunt, new]** — The Well-Architected Framework — what are the 5 pillars, and
  why does an architect interviewer lean on this specific framework instead of a generic
  "best practices" answer?
- **Scenario [gap-hunt, new]** — Cost optimization on an existing architecture — what are the
  actual levers (reserved instances/savings plans, spot VMs for interruptible workloads,
  right-sizing, tearing down idle dev/test resources) beyond just "pick a cheaper SKU"?
- **Understanding [gap-hunt, new]** — Landing zones and governance — what do Azure Policy and
  management groups actually enforce at an organization level, and why does a real enterprise
  need this before teams start creating subscriptions?

---

## 11. Scenario & Troubleshooting

- **Scenario** — Your API is deployed to Azure App Service and suddenly starts returning 500
  errors. How would you troubleshoot it?

---

## 12. Infrastructure as Code **[gap-hunt, new section]**

- **Comparison** — Bicep vs. ARM templates vs. Terraform — what's the actual tradeoff (Azure-native
  declarative syntax vs. the JSON it compiles to vs. a multi-cloud tool), and why would a team pick
  one over another?
- **Understanding** — What does "idempotent deployment" mean for IaC, and why does that matter
  more than just "it's written as code instead of clicked in the portal"?

---

## Coverage note for Phase 1

Every bullet from the user's simplified Azure section is represented above, regrouped by
concept. Nothing was added beyond that source list at Phase 1 — the old, more
service-encyclopedic roadmap in `azure/overview.md` (RBAC, Entra ID/OAuth2, VNet & Subnets as a
dedicated Basic topic, VM Scale Sets, etc.) was deliberately **not** carried forward at Phase 1,
since the user's later plan explicitly simplified Basic and reframed the whole track around
architecture/scenario questions rather than a full service list. Phase 2's active gap-hunt (below)
is what actually re-examined which of those older, more detailed service topics — and others never
in either source list — are real, commonly-asked interview questions worth reintroducing as
Intermediate/Advanced depth on top of the concepts above.

## Gap-hunt log (Phase 2)

Per [gap-hunting.md](../../rules/gap-hunting.md): the question asked for every candidate below was
"if I opened a genuinely thorough, senior-level Azure interview-prep reference, would this be in
it, and is it already covered above under a different name?" — not a re-read of the 11 groups for
internal consistency.

### Added

| Candidate | Placement | Why it's a real gap |
|---|---|---|
| Microsoft Entra ID (Azure AD) fundamentals — app registration, OAuth2/OIDC | §4 Identity & Secrets | Completely absent from the Phase 1 taxonomy despite being foundational identity knowledge every Azure interview eventually touches; was in the old frozen roadmap and got dropped in the Phase 1 simplification, but its total absence (not just a lighter treatment) is a real gap. |
| RBAC — roles, scope, least privilege | §4 Identity & Secrets | Same as above — extremely commonly asked ("how do you control who can do what on a resource"), and Key Vault's own access-pattern question (below) depends on the reader already knowing what RBAC is. |
| Managed Identity vs. Service Principal | §4 Identity & Secrets | The taxonomy already asks "what is Managed Identity" but never asks the comparison question an interviewer actually reaches for once they hear "Managed Identity" — a Comparison layer per [interview-depth-and-priority.md](../../rules/interview-depth-and-priority.md) that was simply missing. |
| Key Vault access patterns (RBAC vs. access policies, Managed Identity integration) | §4 Identity & Secrets | The existing Key Vault bullet asks "what belongs in it," never "how does something actually reach it without a stored credential" — the practical mechanics question a real interview follows up with. |
| Containers on Azure — ACI vs. Container Apps vs. AKS | §2 Compute | §2 only covered App Service and Functions; containers are one of the most commonly asked "which compute option, when" questions in a current Azure interview and had zero presence. |
| Durable Functions orchestration patterns | §2 Compute | A distinct, commonly-asked Intermediate-depth question beyond "what is a Function" — orchestrator/activity/entity patterns solve a real state-management problem plain Functions can't. |
| Cosmos DB — partition key / RU/s, and consistency levels | §3 Data & Storage | §3 only covered relational storage (Storage Account, Azure SQL); Cosmos DB partitioning and its 5 consistency levels are among the most iconic Azure data-tier interview questions and had zero presence. |
| Service Bus vs. Event Grid vs. Event Hubs | §5 Messaging | §5 only covered Service Bus itself; the 3-way "which eventing service" comparison is a standard, very commonly asked follow-up once Service Bus comes up. |
| Azure Monitor vs. Application Insights, incl. KQL/log vs. metric alerts | §6 Observability | §6 only covered Application Insights; Azure Monitor as the umbrella platform (and the metric-alert-vs-log-alert distinction) is a real, distinct, commonly-asked comparison. |
| Front Door vs. App Gateway vs. Traffic Manager vs. Load Balancer | §7 Networking | §7's load-balancing bullet stayed at "basic level, before getting into which specific service" — the actual 4-way decision is one of the most common "which one, when" Azure networking questions and was explicitly deferred, never answered. |
| Hub-spoke topology & VNet peering | §7 Networking | A standard architect-level networking scenario with zero presence in the taxonomy. |
| Disaster recovery / multi-region strategy (RPO/RTO) | §8 Scaling, Availability & Resilience | §8 asks "HA vs. DR" as a definitional Understanding question but never asks the actual DR-strategy scenario (active-passive vs. active-active, driven by RPO/RTO) a senior/architect interview would push into next. |
| Well-Architected Framework (5 pillars) | §10 Architecture & Cost | Arguably the single most iconic Azure architect-interview reference point, and had zero presence anywhere in the taxonomy — a genuinely surprising gap once actively checked for. |
| Cost optimization levers (reserved instances/savings plans, spot VMs, right-sizing) | §10 Architecture & Cost | The existing cost bullet stayed at "what cost considerations come up" — too generic to be a real interview question on its own; the concrete levers are what an interviewer actually wants named. |
| Landing zones & governance (Azure Policy, management groups) | §10 Architecture & Cost | A standard architect-level governance topic (how a real enterprise keeps subscription sprawl under control) with zero presence. |
| Infrastructure as Code — Bicep vs. ARM vs. Terraform | New §12 | Didn't fit inside any existing group and had zero presence, despite being a routine Advanced/architect-level question about how a real Azure environment actually gets provisioned and kept idempotent. |

### Considered and excluded

- **Azure OpenAI / Azure AI Search** — real and current, but this track is scoped to
  general-purpose Azure architecture/services; GenAI-on-Azure specifics belong to this site's
  separate (currently untouched) AI track, not duplicated here.
- **CI/CD (Azure DevOps pipelines vs. GitHub Actions)** — a real interview topic, but it's a
  general DevOps/tooling question that isn't actually Azure-architecture-specific (the same
  question gets asked about any cloud) — out of scope for a track deliberately kept away from a
  full service/tooling encyclopedia.
- **ExpressRoute & VPN Gateway** — real Azure services, but this is pure-networking-specialist
  depth that rarely comes up in a general senior/architect interview outside a dedicated
  networking role; the hub-spoke/VNet-peering addition above already covers the connectivity
  concept a general interview actually probes.
- **Azure Firewall & DDoS Protection** — same reasoning as ExpressRoute: real, but
  security-specialist depth beyond what a general Azure interview asks; excluded to keep the bar
  at "commonly asked," not "exists."
- **Workload Identity Federation (passwordless cross-cloud auth)** — real and current, but niche
  enough (cross-cloud federation specifically) that it's an edge case even within identity, not a
  commonly-asked general question; Managed Identity vs. Service Principal (added above) already
  covers the mainstream version of "how does a workload authenticate without a stored secret."
- **Transactional Outbox pattern** — a real distributed-systems pattern, but it's a general
  messaging-reliability pattern rather than something specific to any Azure service — better
  suited to a general architecture/patterns track if this site ever builds one, not this track.
- **VM Scale Sets as a dedicated topic** — already effectively covered by §8's existing "scale up
  vs. scale out" Understanding question; a full dedicated VMSS deep-dive would be re-explaining
  the same concept at the same depth under a different product name, not a genuine gap.
