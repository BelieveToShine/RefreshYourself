# AWS — Roadmap (Phases 2–6)

Phase 1 output: [`question-taxonomy.md`](question-taxonomy.md) — 44 concept groups (38 from the
user's own source, 6 added by this file's own Phase 2 gap-hunt, one of which is a whole new
group). This file is Phases 2–6: review, page grouping, tier, priority, and the final roadmap —
see [`specs/README.md`](../README.md) for what each phase means. **Phase 7 (writing the actual
pages) has not started** — see "Known gaps" at the bottom.

## Phase 2 — Review & gap-hunt

**Dedupe check**: no true duplicates found. Two pairs look similar at a glance but are
deliberately kept separate, same pattern as other tracks' layered-depth topics:
- **Group 3 (IAM, Basic) and Group 14 (IAM & Security Architecture, Intermediate)** are not
  duplicates — Group 3 covers identity fundamentals (user/role/policy/least-privilege), Group 14
  covers cross-account, Organizations/SCPs, KMS, Secrets Manager, and audit — genuinely different
  depth, same relationship as C#'s own layered topics across tiers.
- **Group 6 (VPC Fundamentals, Basic) and Group 12 (VPC & Advanced Networking, Intermediate)** —
  same relationship: Group 6 is "what is a subnet/route table/IGW/NAT," Group 12 is peering,
  Transit Gateway, PrivateLink, hybrid connectivity. Kept separate and cross-linked, not merged.

**Active gap-hunt against outside domain knowledge** (per
[`gap-hunting.md`](../../rules/gap-hunting.md)): the source document is unusually thorough
already — it explicitly cites 2026 interview material and AWS's current Well-Architected
guidance, and self-audits its own scope. Six real, narrow gaps were found and added (Bastion/
Session Manager, ACM+HTTPS, a whole new CloudFront group, Cognito, EFS, RDS Proxy + a Step
Functions comparison) — full reasoning and the "considered and excluded" list are in
`question-taxonomy.md`'s own Gap-hunt log, not duplicated here.

## Phase 3 — Grouping into pages (44 pages)

One page per concept group — the same 1:1 default every other track uses when the source's own
grouping is already page-sized (SQL, Angular, React all default to this; only split further when
a single group is clearly two distinct pages' worth of content, which none of these 44 are).

- **Basic**: 11 pages (taxonomy groups 1–11).
- **Intermediate**: 19 pages (taxonomy groups 12–30, including the new CloudFront group).
- **Advanced**: 14 pages (taxonomy groups 31–44).

## Phase 4 — Tier (by question type, not difficulty)

The source's own Basic/Intermediate/Advanced grouping is kept as-is — every group already lands
where [interview-depth-and-priority.md](../../rules/interview-depth-and-priority.md)'s actual
rule (question type, not difficulty or seniority) would put it: Basic groups are "what is X"
core-knowledge recall, Intermediate groups are practical usage/comparison/troubleshooting,
Advanced groups are internals/architecture/scenario/trade-off. The new CloudFront group is tiered
Intermediate — its questions are practical/comparison depth (what can be an origin, cache
invalidation, signed URLs vs. Global Accelerator), not "what is a CDN" recall or deep internals.

**One deliberate check, flagged rather than silently applied**: the source lists "IAM" at Basic
(Group 3) and "IAM & Security Architecture" at Intermediate (Group 14) — at first glance IAM
could read as one topic split awkwardly across tiers. It isn't: Group 3 is "what is a role, what
is least privilege, why not hard-coded keys" (pure identity-fundamentals recall — squarely
Basic), Group 14 is "cross-account roles, SCPs, KMS, Secrets Manager rotation, audit" (practical
architecture-level usage — squarely Intermediate). Kept as two pages, same as every other track's
layered topics.

## Phase 5 — Priority (🔥 Must Know / ⭐ Should Know / 🧠 Deep Dive — independent of tier)

Carried over from the source's own priority hints per group wherever the source gave one. Two
groups had a **dual hint in the source** and needed a single, explicit resolution:

- **Serverless Architecture (Advanced, "🔥 Must Know / 🧠 Deep Dive" in the source)** — resolved
  to **🔥**. Most of its actual questions ("design a serverless API," "how do you handle cold
  starts," "when is Lambda a bad choice") are practical/design-level, not internals-level; the
  genuinely internals-deep half of serverless reasoning already lives in the dedicated Reliability
  Engineering (Group 38, 🧠) and Architect-Level Trade-offs (Group 43, 🧠) pages instead of being
  duplicated here.
- **Migration (Advanced, "⭐ Should Know / 🧠 Deep Dive" in the source)** — resolved to **⭐**.
  Its questions are process/practical ("rehost vs. replatform vs. refactor," "what would you
  migrate first") rather than mechanism-internals depth; nothing in this group asks "how does DMS
  actually replicate at the byte level" or similar, which is the kind of question that would
  justify 🧠 here.

Final per-page priority (tier restarts each page's number, matching every other track's file
naming):

| # | Page | Tier | Priority |
|---|---|---|---|
| 1 | AWS Fundamentals | Basic | 🔥 |
| 2 | AWS Global Infrastructure | Basic | 🔥 |
| 3 | IAM | Basic | 🔥 |
| 4 | EC2 | Basic | 🔥 |
| 5 | S3 | Basic | 🔥 |
| 6 | VPC Fundamentals | Basic | 🔥 |
| 7 | Load Balancing & Auto Scaling | Basic | 🔥 |
| 8 | RDS | Basic | 🔥 |
| 9 | Lambda | Basic | 🔥 |
| 10 | CloudWatch | Basic | 🔥 |
| 11 | Route 53 | Basic | ⭐ |
| 1 | VPC & Advanced Networking | Intermediate | 🔥 |
| 2 | Hybrid Connectivity | Intermediate | ⭐ |
| 3 | IAM & Security Architecture | Intermediate | 🔥 |
| 4 | AWS Security Services | Intermediate | ⭐ |
| 5 | EC2 Scaling & Architecture | Intermediate | 🔥 |
| 6 | S3 Advanced | Intermediate | ⭐ |
| 7 | DynamoDB | Intermediate | 🔥 |
| 8 | Aurora & Database Architecture | Intermediate | ⭐ |
| 9 | ElastiCache | Intermediate | ⭐ |
| 10 | API Gateway | Intermediate | 🔥 |
| 11 | Messaging | Intermediate | 🔥 |
| 12 | EventBridge | Intermediate | ⭐ |
| 13 | Kinesis | Intermediate | ⭐ |
| 14 | Containers | Intermediate | 🔥 |
| 15 | Observability | Intermediate | 🔥 |
| 16 | Infrastructure as Code | Intermediate | 🔥 |
| 17 | CI/CD & Deployment | Intermediate | ⭐ |
| 18 | Backup & Disaster Recovery | Intermediate | 🔥 |
| 19 | CloudFront & Content Delivery **[new]** | Intermediate | 🔥 |
| 1 | Well-Architected Framework | Advanced | 🔥 |
| 2 | High Availability Architecture | Advanced | 🔥 |
| 3 | Multi-Region Architecture | Advanced | 🧠 |
| 4 | Serverless Architecture | Advanced | 🔥 |
| 5 | Microservices on AWS | Advanced | 🔥 |
| 6 | Data Architecture | Advanced | 🧠 |
| 7 | Cost Optimization / FinOps | Advanced | 🔥 |
| 8 | Reliability Engineering | Advanced | 🧠 |
| 9 | AWS Security Architecture | Advanced | 🔥 |
| 10 | Migration | Advanced | ⭐ |
| 11 | Production Troubleshooting | Advanced | 🔥 |
| 12 | Architecture Design Questions | Advanced | 🔥 |
| 13 | Architect-Level Trade-off Questions | Advanced | 🧠 |
| 14 | Sustainability | Advanced | ⭐ |

## Phase 6 — Final roadmap

**New totals: Basic 11, Intermediate 19, Advanced 14 — 44 pages.**

| # | Concept group | Tier | Priority | Page |
|---|---|---|---|---|
| 1 | AWS Fundamentals | Basic | 🔥 | `aws/basic/1.html` |
| 2 | AWS Global Infrastructure | Basic | 🔥 | `aws/basic/2.html` |
| 3 | IAM | Basic | 🔥 | `aws/basic/3.html` |
| 4 | EC2 | Basic | 🔥 | `aws/basic/4.html` |
| 5 | S3 | Basic | 🔥 | `aws/basic/5.html` |
| 6 | VPC Fundamentals | Basic | 🔥 | `aws/basic/6.html` |
| 7 | Load Balancing & Auto Scaling | Basic | 🔥 | `aws/basic/7.html` |
| 8 | RDS | Basic | 🔥 | `aws/basic/8.html` |
| 9 | Lambda | Basic | 🔥 | `aws/basic/9.html` |
| 10 | CloudWatch | Basic | 🔥 | `aws/basic/10.html` |
| 11 | Route 53 | Basic | ⭐ | `aws/basic/11.html` |
| 12 | VPC & Advanced Networking | Intermediate | 🔥 | `aws/intermediate/1.html` |
| 13 | Hybrid Connectivity | Intermediate | ⭐ | `aws/intermediate/2.html` |
| 14 | IAM & Security Architecture | Intermediate | 🔥 | `aws/intermediate/3.html` |
| 15 | AWS Security Services | Intermediate | ⭐ | `aws/intermediate/4.html` |
| 16 | EC2 Scaling & Architecture | Intermediate | 🔥 | `aws/intermediate/5.html` |
| 17 | S3 Advanced | Intermediate | ⭐ | `aws/intermediate/6.html` |
| 18 | DynamoDB | Intermediate | 🔥 | `aws/intermediate/7.html` |
| 19 | Aurora & Database Architecture | Intermediate | ⭐ | `aws/intermediate/8.html` |
| 20 | ElastiCache | Intermediate | ⭐ | `aws/intermediate/9.html` |
| 21 | API Gateway | Intermediate | 🔥 | `aws/intermediate/10.html` |
| 22 | Messaging | Intermediate | 🔥 | `aws/intermediate/11.html` |
| 23 | EventBridge | Intermediate | ⭐ | `aws/intermediate/12.html` |
| 24 | Kinesis | Intermediate | ⭐ | `aws/intermediate/13.html` |
| 25 | Containers | Intermediate | 🔥 | `aws/intermediate/14.html` |
| 26 | Observability | Intermediate | 🔥 | `aws/intermediate/15.html` |
| 27 | Infrastructure as Code | Intermediate | 🔥 | `aws/intermediate/16.html` |
| 28 | CI/CD & Deployment | Intermediate | ⭐ | `aws/intermediate/17.html` |
| 29 | Backup & Disaster Recovery | Intermediate | 🔥 | `aws/intermediate/18.html` |
| 30 | CloudFront & Content Delivery **[new]** | Intermediate | 🔥 | `aws/intermediate/19.html` |
| 31 | Well-Architected Framework | Advanced | 🔥 | `aws/advanced/1.html` |
| 32 | High Availability Architecture | Advanced | 🔥 | `aws/advanced/2.html` |
| 33 | Multi-Region Architecture | Advanced | 🧠 | `aws/advanced/3.html` |
| 34 | Serverless Architecture | Advanced | 🔥 | `aws/advanced/4.html` |
| 35 | Microservices on AWS | Advanced | 🔥 | `aws/advanced/5.html` |
| 36 | Data Architecture | Advanced | 🧠 | `aws/advanced/6.html` |
| 37 | Cost Optimization / FinOps | Advanced | 🔥 | `aws/advanced/7.html` |
| 38 | Reliability Engineering | Advanced | 🧠 | `aws/advanced/8.html` |
| 39 | AWS Security Architecture | Advanced | 🔥 | `aws/advanced/9.html` |
| 40 | Migration | Advanced | ⭐ | `aws/advanced/10.html` |
| 41 | Production Troubleshooting | Advanced | 🔥 | `aws/advanced/11.html` |
| 42 | Architecture Design Questions | Advanced | 🔥 | `aws/advanced/12.html` |
| 43 | Architect-Level Trade-off Questions | Advanced | 🧠 | `aws/advanced/13.html` |
| 44 | Sustainability | Advanced | ⭐ | `aws/advanced/14.html` |

## Phase 6 addendum — concept clusters for the live roadmap page

`aws/roadmap.html` groups the 44 pages by **related category, cutting across tiers** — the same
pattern `sql/roadmap.html` and `azure/roadmap.html` use — rather than tier-first, since a reader
scanning "everything about networking" or "everything about security" shouldn't have to check
three separate tier sections. This is a display grouping on top of the tier/priority table above,
not a replacement for it; the per-page tier and priority in the table above are still what each
page actually gets built with in Phase 7. 11 clusters, 44 pages, matching the live page:

| # | Cluster | Pages included |
|---|---|---|
| 1 | AWS Fundamentals & Global Infrastructure | AWS Fundamentals, AWS Global Infrastructure |
| 2 | Identity & Security | IAM, IAM & Security Architecture, AWS Security Services, AWS Security Architecture |
| 3 | Networking | VPC Fundamentals, Load Balancing & Auto Scaling, VPC & Advanced Networking, Hybrid Connectivity, CloudFront & Content Delivery |
| 4 | Compute & Containers | EC2, Lambda, EC2 Scaling & Architecture, Containers |
| 5 | Storage & Database | S3, RDS, S3 Advanced, DynamoDB, Aurora & Database Architecture, ElastiCache |
| 6 | API & Serverless | API Gateway, Serverless Architecture |
| 7 | Messaging & Events | Messaging, EventBridge, Kinesis |
| 8 | Observability & Operations | CloudWatch, Observability, Infrastructure as Code, CI/CD & Deployment |
| 9 | Resilience, HA & DR | Route 53, Backup & Disaster Recovery, High Availability Architecture, Multi-Region Architecture, Reliability Engineering |
| 10 | Architecture, Cost & Governance | Well-Architected Framework, Microservices on AWS, Data Architecture, Cost Optimization / FinOps, Sustainability |
| 11 | Migration & Production Scenarios | Migration, Production Troubleshooting, Architecture Design Questions, Architect-Level Trade-off Questions |

If a page is later added, renamed, or moved during Phase 7, update this table **and**
`aws/roadmap.html` together — they must stay in sync, same requirement as every other track's
roadmap doc vs. its live page.

## Track-specific decisions and boundaries

- **Single track, not split by concern** — per the user's own explicit structural instruction,
  AWS stays one track (`aws/basic|intermediate|advanced/`) with security/networking/serverless/
  containers as subsections inside the three tiers, not separate top-level tracks. Same pattern
  every other track already follows.
- **Well-Architected's six pillars are woven through, not isolated** — Group 31 introduces the
  framework itself (what it is, how to use it during design), but Security, Reliability,
  Performance, Cost, and Operational Excellence each get their *own* depth elsewhere (Groups 14,
  15, 39 for Security; 32, 38 for Reliability; most of Intermediate for Performance-relevant
  service choices; 37 for Cost; 27, 28 for Operational Excellence) rather than being taught only
  as a six-item list on one page. Sustainability (Group 44) is the one pillar without an obvious
  home elsewhere, so it gets its own small page — deliberately small, per the source's own
  instruction not to over-build it.
- **Position in the site's ordered path**: per the user's own recommendation, AWS sits in the
  core backend path right after Azure — `C# → OOP → .NET/ASP.NET Core → Web API → EF Core → SQL →
  Azure → AWS`, with React/Angular/DSA/AI remaining "other tracks" outside that ordered path.
- **Scope boundary**: this track does not attempt to cover all ~200+ AWS services — only the ones
  that repeatedly surface in senior/staff/architect interviews, per the source's own explicit
  instruction. See the Gap-hunt log's "considered and excluded" table for services deliberately
  left out and why.
- Icon 📦, track color AWS "Squid Ink" navy (`#232F3E`) — chosen to avoid the existing Azure tile's
  `☁️`/blue and the DSA tile's amber (`#f59e0b`), which is close enough to AWS's own orange brand
  color that reusing it would read as a collision.

## Known gaps

**Phase 7 has not started — zero pages are written.** This file and `question-taxonomy.md` are
Phases 1–6 only. `aws/roadmap.html`, the three tier `index.html` skeleton pages, and the root
tile's roadmap-badge are wired per the Phase-1 mandate (see
[`specs/README.md`](../README.md)), honestly labeled as draft/not-yet-written — the root tile
stays in its "Coming soon" state and none of the 44 pages exist yet. Nothing here should be
mistaken for a completed track.
