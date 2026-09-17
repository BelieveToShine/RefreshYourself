# AWS — Track Spec

**Start here for anything AWS-related.** See
[`docs/superpowers/specs/README.md`](../README.md) for what this file is and the process for
keeping it in sync with the live pages.

## Status — Phases 1–7 complete, all 44 pages written

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
  section for both). This phase's own work also produced a "Phase 6 addendum" mapping all 44
  pages into 11 cross-tier concept clusters, used by the live `aws/roadmap.html` page instead of
  a tier-first grouping — see Track-specific decisions below for why that stays that way.
- **Phase 6 wiring done at Phase 1**, per [specs/README.md](../README.md)'s mandate —
  `aws/roadmap.html`, the three tier `index.html` skeleton pages, and the root `index.html`
  tile's `roadmap-badge` existed from the moment the Phase 1 taxonomy was written, correctly
  labeled "draft" through Phases 2–6 and flipped to live only once Phase 7 genuinely finished.
- **Phase 7 — all 44 pages written**, using the same template as every other completed track's
  Phase 7 (❓ Interview Question line → 🔥 Recall → 🧠 Visual → ⚠️ Trap → 🔄 Follow-up → 🎯
  Say-this → 📖 Explanation → 💻 Code → 🌍 Real-world/Scenario — see
  [content-writing.md](../../rules/content-writing.md)), by dispatched subagents referencing
  `azure/basic/1.html` / `azure/intermediate/1.html` / `azure/advanced/1.html` as structural
  templates — the closest track at the same scale (44 pages) with the right commit cadence.
  **Diagram verification, with the actual evidence, not just an aggregate claim:** every
  subagent ran the mandatory script from
  [diagram-style.md](../../rules/diagram-style.md#mandatory-automated-verification--hand-computed-coordinates-are-not-verification)
  against its own page and reported `issueCount: 0` before finishing — several subagents caught
  and self-fixed real defects before their own report (a rect overlap + text overflow on
  `basic/5.html`'s Block-Public-Access diagram; a short dashed-connector-vs-marker-reach finding
  on `basic/8.html`; a text-overflow pill on `basic/6.html`; two disconnected-arrow endpoints on
  `intermediate/14.html`; a text-overflow caption on `intermediate/15.html`; a disconnected
  routing overlap on `advanced/6.html` caught only via a rendered screenshot, not the script
  alone; an arrowhead-distortion short segment on `advanced/2.html`). The orchestrating session
  then ran its own **independent full sweep, one page at a time, all 44 pages, 48 diagrams
  total** (four pages — `basic/11.html`, `intermediate/9.html`, `intermediate/19.html`,
  `advanced/12.html` — carry two diagrams each): every single one came back
  `{"issueCount":0,"issues":[]}` on this final sweep, script exit code `0`. Unlike Azure's own
  Phase 7 (which found one live defect on the independent sweep itself), this track's real
  defects were all caught and fixed at the subagent-self-verification layer before the
  independent sweep ran — the independent sweep still ran in full against every page, not
  skipped, per the standing rule that a clean subagent self-report is never sufficient on its
  own.
- **Pager-consistency fix-up**: 12 of the 14 Advanced-tier pages were written before all their
  siblings existed yet on disk, so some of their prev/next pager links correctly (per
  content-writing.md's fallback rule) pointed muted at `advanced/index.html` labeled "(coming
  soon)." Once all 44 pages existed, a grep across the whole track found 21 stale link instances
  across those 12 files (`advanced/1`'s next; `advanced/3`, `5`–`7`, `9`–`13`'s prev **and**
  next; `advanced/8` and `advanced/14`'s prev) — a larger count than Azure's own 5, but the same
  class of defect — and converted every one to a real link to its sibling, forming a clean
  `1 → 14` chain. Basic and Intermediate never had this problem (all their subagents ran after
  every sibling in their own tier already existed). Re-ran the diagram-verification script after
  the pager edits to confirm the text-only changes didn't disturb any SVG — still
  `issueCount: 0` everywhere.

## Basic (11 topics) — 11 written

| # | Topic | Priority | Written? |
|---|---|---|---|
| 1 | AWS Fundamentals | 🔥 | ✅ |
| 2 | AWS Global Infrastructure | 🔥 | ✅ |
| 3 | IAM | 🔥 | ✅ |
| 4 | EC2 | 🔥 | ✅ |
| 5 | S3 | 🔥 | ✅ |
| 6 | VPC Fundamentals | 🔥 | ✅ |
| 7 | Load Balancing & Auto Scaling | 🔥 | ✅ |
| 8 | RDS | 🔥 | ✅ |
| 9 | Lambda | 🔥 | ✅ |
| 10 | CloudWatch | 🔥 | ✅ |
| 11 | Route 53 | ⭐ | ✅ |

## Intermediate (19 topics) — 19 written

| # | Topic | Priority | Written? |
|---|---|---|---|
| 1 | VPC & Advanced Networking | 🔥 | ✅ |
| 2 | Hybrid Connectivity | ⭐ | ✅ |
| 3 | IAM & Security Architecture | 🔥 | ✅ |
| 4 | AWS Security Services | ⭐ | ✅ |
| 5 | EC2 Scaling & Architecture | 🔥 | ✅ |
| 6 | S3 Advanced | ⭐ | ✅ |
| 7 | DynamoDB | 🔥 | ✅ |
| 8 | Aurora & Database Architecture | ⭐ | ✅ |
| 9 | ElastiCache | ⭐ | ✅ |
| 10 | API Gateway | 🔥 | ✅ |
| 11 | Messaging | 🔥 | ✅ |
| 12 | EventBridge | ⭐ | ✅ |
| 13 | Kinesis | ⭐ | ✅ |
| 14 | Containers | 🔥 | ✅ |
| 15 | Observability | 🔥 | ✅ |
| 16 | Infrastructure as Code | 🔥 | ✅ |
| 17 | CI/CD & Deployment | ⭐ | ✅ |
| 18 | Backup & Disaster Recovery | 🔥 | ✅ |
| 19 | CloudFront & Content Delivery **[gap-hunt]** | 🔥 | ✅ |

## Advanced (14 topics) — 14 written

| # | Topic | Priority | Written? |
|---|---|---|---|
| 1 | Well-Architected Framework | 🔥 | ✅ |
| 2 | High Availability Architecture | 🔥 | ✅ |
| 3 | Multi-Region Architecture | 🧠 | ✅ |
| 4 | Serverless Architecture | 🔥 | ✅ |
| 5 | Microservices on AWS | 🔥 | ✅ |
| 6 | Data Architecture | 🧠 | ✅ |
| 7 | Cost Optimization / FinOps | 🔥 | ✅ |
| 8 | Reliability Engineering | 🧠 | ✅ |
| 9 | AWS Security Architecture | 🔥 | ✅ |
| 10 | Migration | ⭐ | ✅ |
| 11 | Production Troubleshooting | 🔥 | ✅ |
| 12 | Architecture Design Questions | 🔥 | ✅ |
| 13 | Architect-Level Trade-off Questions | 🧠 | ✅ |
| 14 | Sustainability | ⭐ | ✅ |

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
- **Icon 📦, track color a saturated burnt-orange (`#c2410c`)** — this superseded the original
  Phase-1-era plan of a "Squid Ink" navy (`#232F3E`), which read as flat and unattractive on the
  root tile next to every other track's brighter accent color; the burnt-orange was picked
  instead as a deliberate post-feedback fix and is used consistently as the tile/crumb/roadmap
  cluster-header color across every one of the 44 pages, the three tier index pages, the root
  tile, and `aws/roadmap.html`. Do not revert to navy.
- **`aws/roadmap.html` is grouped by 11 cross-tier concept clusters, not by tier** — a deliberate
  post-feedback fix matching the pattern SQL's and Azure's own `roadmap.html` pages already use,
  so a reader can browse "what AWS interviews ask about Storage & Database" without caring
  whether a given question happens to sit in Basic, Intermediate, or Advanced. The full
  cluster → page mapping lives in `roadmap.md`'s own "Phase 6 addendum." Do not flatten this back
  to a tier-first grouping.

## Known gaps

None — this track went through the full 7-phase pipeline (Phase 2's own gap-hunt already folded
into the initial pass by the session that built Phases 1–6, Phase 7 completed by a later
session working from that same taxonomy/roadmap without re-deriving anything), and every page
passed the mandatory independent diagram-verification sweep (44/44 pages, 48/48 diagrams,
`issueCount: 0` on the final sweep — see the Status section above for the real defects found and
fixed along the way, not glossed over). The 11 stale Advanced-tier pager links found and fixed
during this same pass are also documented above, not silently corrected. Expect a
review/feedback pass once the user goes through it, same as every other completed track.
