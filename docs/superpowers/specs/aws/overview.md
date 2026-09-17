# AWS — Track Spec

**Start here for anything AWS-related.** See
[`docs/superpowers/specs/README.md`](../README.md) for what this file is and the process for
keeping it in sync with the live pages.

## Status — Phases 1–6 complete, Phase 7 not started, 0/44 pages written

- **Phase 1** — [`question-taxonomy.md`](question-taxonomy.md): raw questions, grouped by
  concept across 44 subsections, sourced from the user's own AWS interview-roadmap document
  (itself built from 2026 interview material and AWS's current Well-Architected guidance) —
  organized around interview questions, not an AWS tutorial or certification path.
- **Phases 2–6** — [`roadmap.md`](roadmap.md): reviewed (no true duplicates; two pairs of
  similarly-named groups confirmed as deliberate layered-depth topics, same pattern other tracks
  use across tiers), an active gap-hunt added 6 real gaps (one of them a whole new group,
  CloudFront & Content Delivery — full reasoning in `question-taxonomy.md`'s Gap-hunt log),
  grouped into 44 final pages, tiered by **interview depth** (the source's own
  Basic/Intermediate/Advanced grouping held up against
  [interview-depth-and-priority.md](../../rules/interview-depth-and-priority.md)'s actual rule
  with no changes needed), and given an interview-priority tag (two groups had a dual priority
  hint in the source and needed an explicit single-value resolution — see `roadmap.md`'s Phase 5
  section for both).
- **Phase 7 has not started.** `aws/roadmap.html`, the three tier `index.html` skeleton pages,
  and the root tile's roadmap-badge are wired per the Phase-1 mandate (see
  [`specs/README.md`](../README.md)) — all honestly labeled draft, and the root tile itself stays
  in its "Coming soon" state. Nothing here should be mistaken for a completed track.

## Basic (11 topics) — 0 written

| # | Topic | Priority | Written? |
|---|---|---|---|
| 1 | AWS Fundamentals | 🔥 | 📝 |
| 2 | AWS Global Infrastructure | 🔥 | 📝 |
| 3 | IAM | 🔥 | 📝 |
| 4 | EC2 | 🔥 | 📝 |
| 5 | S3 | 🔥 | 📝 |
| 6 | VPC Fundamentals | 🔥 | 📝 |
| 7 | Load Balancing & Auto Scaling | 🔥 | 📝 |
| 8 | RDS | 🔥 | 📝 |
| 9 | Lambda | 🔥 | 📝 |
| 10 | CloudWatch | 🔥 | 📝 |
| 11 | Route 53 | ⭐ | 📝 |

## Intermediate (19 topics) — 0 written

| # | Topic | Priority | Written? |
|---|---|---|---|
| 1 | VPC & Advanced Networking | 🔥 | 📝 |
| 2 | Hybrid Connectivity | ⭐ | 📝 |
| 3 | IAM & Security Architecture | 🔥 | 📝 |
| 4 | AWS Security Services | ⭐ | 📝 |
| 5 | EC2 Scaling & Architecture | 🔥 | 📝 |
| 6 | S3 Advanced | ⭐ | 📝 |
| 7 | DynamoDB | 🔥 | 📝 |
| 8 | Aurora & Database Architecture | ⭐ | 📝 |
| 9 | ElastiCache | ⭐ | 📝 |
| 10 | API Gateway | 🔥 | 📝 |
| 11 | Messaging | 🔥 | 📝 |
| 12 | EventBridge | ⭐ | 📝 |
| 13 | Kinesis | ⭐ | 📝 |
| 14 | Containers | 🔥 | 📝 |
| 15 | Observability | 🔥 | 📝 |
| 16 | Infrastructure as Code | 🔥 | 📝 |
| 17 | CI/CD & Deployment | ⭐ | 📝 |
| 18 | Backup & Disaster Recovery | 🔥 | 📝 |
| 19 | CloudFront & Content Delivery **[gap-hunt]** | 🔥 | 📝 |

## Advanced (14 topics) — 0 written

| # | Topic | Priority | Written? |
|---|---|---|---|
| 1 | Well-Architected Framework | 🔥 | 📝 |
| 2 | High Availability Architecture | 🔥 | 📝 |
| 3 | Multi-Region Architecture | 🧠 | 📝 |
| 4 | Serverless Architecture | 🔥 | 📝 |
| 5 | Microservices on AWS | 🔥 | 📝 |
| 6 | Data Architecture | 🧠 | 📝 |
| 7 | Cost Optimization / FinOps | 🔥 | 📝 |
| 8 | Reliability Engineering | 🧠 | 📝 |
| 9 | AWS Security Architecture | 🔥 | 📝 |
| 10 | Migration | ⭐ | 📝 |
| 11 | Production Troubleshooting | 🔥 | 📝 |
| 12 | Architecture Design Questions | 🔥 | 📝 |
| 13 | Architect-Level Trade-off Questions | 🧠 | 📝 |
| 14 | Sustainability | ⭐ | 📝 |

## Where the roadmap came from

Sourced from the user's own AWS interview-roadmap document (2026), which was itself built from
current interview material and AWS's own Well-Architected guidance and came pre-organized into
Basic/Intermediate/Advanced with priority hints per group — this track kept that structure and
those questions almost entirely intact. A Phase 2 gap-hunt added 6 real gaps on top of it (see
[`question-taxonomy.md`](question-taxonomy.md)'s Gap-hunt log for the full added/excluded
reasoning) — everything else traces directly back to the source, no invented facts.

## Track-specific decisions and boundaries

- **Single track, not split by concern** — per the user's own explicit instruction, IAM/security,
  networking, serverless, containers, etc. live as subsections inside Basic/Intermediate/Advanced,
  not as separate top-level tracks. Same pattern every other track already follows.
- **The six Well-Architected pillars are woven through, not isolated** — Operational Excellence,
  Security, Reliability, Performance Efficiency, Cost Optimization, and Sustainability each get
  real depth spread across multiple groups (Security: groups 3, 14, 39; Reliability: 32, 38;
  Cost: 37; Operational Excellence: 27, 28; Sustainability: 44, deliberately small) rather than
  being taught only as a six-item list on one page — per the user's explicit instruction not to
  make the pillars "merely memorization pages."
- **Not a certification dump** — deliberately does not attempt to cover all ~200+ AWS services;
  only the ones that repeatedly surface in senior/staff/architect interviews, per the source's own
  explicit scope instruction. See the Gap-hunt log's "considered and excluded" table for services
  deliberately left out.
- **Position in the site's ordered path** — sits in the core backend path right after Azure
  (`C# → OOP → .NET/ASP.NET Core → Web API → EF Core → SQL → Azure → AWS`), per the user's own
  structural recommendation; React/Angular/DSA/AI remain "other tracks" outside that ordered path.
- Icon 📦, track color AWS "Squid Ink" navy (`#232F3E`) — chosen to avoid colliding with Azure's
  `☁️`/blue tile and DSA's amber (`#f59e0b`), which is close enough to AWS's own orange brand
  color that reusing it directly would read as a collision next to it on the same page.

## Known gaps

**Phase 7 has not started — this is a roadmap-only track right now, same status Azure is in.**
The taxonomy and roadmap themselves have not yet been pressure-tested by actually writing pages,
so treat the tiering/grouping as reviewable, same caveat every other track's Phase-1–6-only spec
carries. See [`roadmap.md`](roadmap.md)'s own "Known gaps" section.
