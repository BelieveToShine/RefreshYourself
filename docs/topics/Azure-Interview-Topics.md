# Azure — Interview Prep Topic Map (senior dev / TL / architect)

## Why this file exists (context)
I (Vivek) asked for this while building the Azure POC. Goal: **interview preparation** for a ~15-year
tech person (senior dev / tech lead / architect level). I wanted a **plain list of Azure concepts that
get used in real applications**, split into **must-know** vs **good-to-know**, so I can then generate
interview questions for each topic.

I called out a few I already had in mind: **API Management gateway, Logic Apps, Service Bus, Cosmos DB**
(worked on it in a previous project), and a half-remembered one about **connecting a third-party vendor
using secrets we provide from the API** — I couldn't recall the name.

**What that half-remembered item was:** **Managed Identity** (older name *MSI = Managed Service Identity*)
together with **Service Principal** and **Key Vault**. The pattern:
- Store the vendor's secret/credential in **Key Vault**.
- The API reads it at runtime via its **Managed Identity** — no secret in code or config.
- Where the vendor needs *us* to authenticate to them, we register a **Service Principal**
  (client-id + client-secret/certificate), or use **Workload Identity Federation** for a passwordless,
  no-stored-secret setup.

**How to use this file next (different session is fine):** pick any section and ask —
"generate interview Q&A (with model answers) for section 4 identity & security", or
"give me 10 scenario questions on Service Bus vs Event Grid vs Event Hubs". This file is just the
syllabus; the Q&A comes next.

---

## The topic list

### 1. Compute & hosting
**Must know**
- Azure Functions — triggers/bindings, Consumption vs Premium vs Dedicated plan, cold start, scaling
- Durable Functions — orchestrator / activity / entity; patterns: chaining, fan-out/fan-in, monitor, async HTTP, human-interaction
- App Service — deployment slots, slot swap, autoscale, "Always On"
- Containers — ACI vs Container Apps vs AKS (when to pick which), scale-to-zero, KEDA
- IaaS basics — VMs, VM Scale Sets, availability sets / zones

**Good to know**
- Azure Batch (large parallel compute), Service Fabric (legacy microservices), Static Web Apps

### 2. Messaging & eventing (know "which one, when")
**Must know**
- Service Bus — queues vs topics/subscriptions, sessions, dead-letter, duplicate detection, peek-lock vs receive-and-delete
- Storage Queues vs Service Bus (when lightweight is enough)
- Event Grid — reactive / event-driven fan-out, event schema, retry + dead-letter
- Event Hubs — high-throughput streaming, partitions, consumer groups, checkpointing (Kafka-compatible)

**Good to know**
- The classic decision matrix: Service Bus (commands/work) vs Event Grid (discrete events) vs Event Hubs (telemetry streams)
- Logic Apps (low-code integration/workflow)

### 3. Data & storage
**Must know**
- Azure SQL — DTU vs vCore, elastic pools, geo-replication, failover groups, transient-fault retry
- Cosmos DB — partition key design, RU/s, the 5 consistency levels, change feed, global distribution *(deep questions likely — partitioning + consistency)*
- Storage Account — Blob tiers (hot/cool/cold/archive), lifecycle policies, SAS tokens, redundancy (LRS/ZRS/GRS/RA-GRS)
- Azure Cache for Redis — cache-aside, distributed lock, session store

**Good to know**
- Synapse / Data Factory (ETL), Data Lake Gen2, PostgreSQL / MySQL flexible servers

### 4. Identity, security & secrets
**Must know**
- Managed Identity — system-assigned vs user-assigned *(the "MSI" from the context note above)*
- Service Principal — app registration, client-secret vs certificate; how the API authenticates to a third-party/vendor
- Microsoft Entra ID (ex-Azure AD) — OAuth2 / OIDC flows, app roles, scopes
- Key Vault — secrets / keys / certs, rotation, access policies vs RBAC, references from App Service/Functions
- RBAC — roles, scope inheritance, least privilege

**Good to know**
- Workload Identity Federation (passwordless cross-cloud / CI), Managed HSM, Microsoft Defender for Cloud

### 5. API & edge
**Must know**
- API Management (APIM) — gateway, products/subscriptions, rate-limit/throttle policies, versioning/revisions, JWT validation, backend mTLS, the inbound/outbound policy pipeline
- Front Door — global routing, caching, WAF, health probes
- The distinctions: Front Door (global L7) vs Application Gateway (regional L7 + WAF) vs Traffic Manager (DNS) vs Load Balancer (L4)
- API versioning strategies, OpenAPI

**Good to know**
- APIM self-hosted gateway, gRPC / GraphQL passthrough

### 6. AI & search
**Must know**
- Azure OpenAI — deployments, tokens, embeddings, content filtering, PTU vs pay-as-you-go
- Azure AI Search — indexing, vector search, hybrid + semantic ranking, the RAG pattern
- AI services — Document Intelligence (OCR/forms), Vision, Language

### 7. Observability & ops
**Must know**
- Application Insights — distributed tracing, dependency map, live metrics, sampling
- Log Analytics + KQL (writing queries is a common live test)
- Azure Monitor — metric vs log alerts, action groups, smart detection
- Availability / health tests

### 8. Networking (architect-level)
**Must know**
- VNet, subnets, NSGs, Private Endpoints vs Service Endpoints, VNet integration for App Service/Functions
- Private DNS zones, VNet peering, hub-spoke topology
- The edge/LB distinctions from section 5

**Good to know**
- ExpressRoute, VPN Gateway, Azure Firewall, DDoS Protection

### 9. Architecture, delivery & governance (TL / architect)
**Must know**
- IaC — Bicep / ARM / Terraform
- CI/CD — Azure DevOps pipelines (environments, approvals, variable groups), GitHub Actions
- Well-Architected Framework — 5 pillars: reliability, security, cost, operational excellence, performance
- Resilience patterns — retry, circuit breaker, bulkhead, idempotency, transactional outbox
- Cost optimization, availability zones/regions, DR (RPO/RTO), landing zones, Azure Policy / Blueprints

---

## Quick "must-know" shortlist (if time is short)
Functions + Durable · Service Bus vs Event Grid vs Event Hubs · Cosmos DB (partitioning + consistency) ·
Managed Identity + Service Principal + Key Vault · APIM · Front Door vs App Gateway · App Insights + KQL ·
Well-Architected Framework + resilience patterns.
