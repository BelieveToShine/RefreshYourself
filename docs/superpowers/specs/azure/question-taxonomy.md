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

---

## 3. Data & Storage

- **Core concept** — What is a Storage Account, and what are the main things you'd store in one?
- **Core concept** — What is Azure SQL, and how does it relate to on-prem SQL Server?

---

## 4. Identity & Secrets

- **Core concept** — What is Key Vault, and what belongs in it?
- **Core concept** — What is Managed Identity, and what problem does it solve (no more secrets
  in config)?
- **Understanding** — What does "secrets management" mean as a broader practice beyond just
  "use Key Vault" — rotation, least-privilege access?

---

## 5. Messaging

- **Core concept** — What is Service Bus, and what's it for?
- **Comparison** — Queues vs. topics/subscriptions — when do you need one vs. the other?
- **Understanding** — What does "Service Bus architecture" mean in practice — how does a
  producer/consumer system actually get wired together around it?

---

## 6. Observability

- **Core concept** — What is Application Insights, and what does it capture?
- **Scenario** — How would you use Application Insights to troubleshoot a production issue?
- **Understanding** — How does logging fit alongside Application Insights — are they the same
  thing?

---

## 7. Networking

- **Core concept** — What are the basics of networking on Azure (VNets, subnets)?
- **Core concept** — What is a Private Endpoint, and what does it change about how a service is
  reached?
- **Understanding** — What does load balancing mean at a basic level, before getting into which
  specific Azure service does it?

---

## 8. Scaling, Availability & Resilience

- **Core concept** — What does scaling mean on Azure — scale up vs. scale out?
- **Core concept** — What is high availability, and how is it different from disaster recovery?
- **Understanding** — What does resilience mean for a cloud application — retries, timeouts,
  fallback — beyond just "the service didn't go down"?
- **Understanding** — What is caching for, at an architecture level (not a specific product)?

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

---

## 11. Scenario & Troubleshooting

- **Scenario** — Your API is deployed to Azure App Service and suddenly starts returning 500
  errors. How would you troubleshoot it?

---

## Coverage note for Phase 2

Every bullet from the user's simplified Azure section is represented above, regrouped by
concept. Nothing was added beyond that source list — the old, more service-encyclopedic roadmap
in `azure/overview.md` (RBAC, Entra ID/OAuth2, VNet & Subnets as a dedicated Basic topic, VM
Scale Sets, etc.) was deliberately **not** carried forward here, since the user's later plan
explicitly simplified Basic and reframed the whole track around architecture/scenario questions
rather than a full service list. Phase 2 should decide whether any of those older, more detailed
service topics are worth reintroducing as Intermediate/Advanced depth on top of the concepts
above, rather than as their own Basic-tier entries.
