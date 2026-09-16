# .NET / ASP.NET Core — Track Spec

**Start here for anything .NET/ASP.NET Core-related.** See
[`docs/superpowers/specs/README.md`](../README.md) for what this file is and the process for
keeping it in sync with the live pages.

## Status — Phases 1–7 complete, all 23 pages written

- **Phase 1** — [`question-taxonomy.md`](question-taxonomy.md): raw questions, grouped by
  concept across 8 subsections (including MVC as a grouped subsection, not a separate track).
- **Phases 2–6** — [`roadmap.md`](roadmap.md): reviewed (one genuine duplicate found between the
  Pipeline group's bundled Filters/CORS/HTTPS/Logging/Exception-handling bullet and the
  dedicated Error Handling page — resolved by dropping exception handling from the bundle),
  grouped into 23 final pages, tiered by **interview depth** (not difficulty — this track skews
  heavily Intermediate, an honest reflection of the source material's practical-usage focus, not
  a forced distribution), and given an interview-priority tag.
- **Phase 7 — all 23 pages written**, using the same template as C#'s and OOP's Phase 7 (❓
  Interview Question line → 🔥 Recall → 🧠 Visual → ⚠️ Trap → 🔄 Follow-up → 🎯 Say-this → 📖
  Explanation → 💻 Code → 🌍 Real-world/Scenario — see
  [content-writing.md](../../rules/content-writing.md)). Every page's diagram was run through the
  mandatory automated verification script (see
  [diagram-style.md](../../rules/diagram-style.md#mandatory-automated-verification--hand-computed-coordinates-are-not-verification))
  before this track was considered done.

## Basic (5 topics) — 5 written

| # | Topic | Priority | Written? |
|---|---|---|---|
| 1 | .NET vs. .NET Framework | 🔥 | ✅ |
| 2 | CLR, BCL & Managed Code | 🔥 | ✅ |
| 3 | SDK vs. Runtime, .csproj & NuGet | ⭐ | ✅ |
| 4 | What Is MVC | 🔥 | ✅ |
| 5 | Filters, CORS, HTTPS & Logging | ⭐ | ✅ |

## Intermediate (16 topics) — 16 written

| # | Topic | Priority | Written? |
|---|---|---|---|
| 1 | What Happens When a .NET App Starts | 🔥 | ✅ |
| 2 | The Built-in DI Container | 🔥 | ✅ |
| 3 | Service Lifetimes | 🔥 | ✅ |
| 4 | Middleware | 🔥 | ✅ |
| 5 | Authentication vs. Authorization (Pipeline Stages) | 🔥 | ✅ |
| 6 | Routing | ⭐ | ✅ |
| 7 | Model Binding & Validation | ⭐ | ✅ |
| 8 | ViewBag vs. ViewData vs. TempData | ⭐ | ✅ |
| 9 | Razor & Routing | ⭐ | ✅ |
| 10 | MVC-Specific Filters | ⭐ | ✅ |
| 11 | Views, Layouts & Organization | ⭐ | ✅ |
| 12 | Configuration Sources | 🔥 | ✅ |
| 13 | Authentication Schemes | 🔥 | ✅ |
| 14 | Authorization Policies & Claims | ⭐ | ✅ |
| 15 | Global Exception Handling | 🔥 | ✅ |
| 16 | The Generic Host & Application Lifetime | ⭐ | ✅ |

## Advanced (2 topics) — 2 written

| # | Topic | Priority | Written? |
|---|---|---|---|
| 1 | Kestrel & Reverse Proxies | ⭐ | ✅ |
| 2 | Model Binding Internals & MVC vs. Web API vs. Razor Pages | 🧠 | ✅ |

## Where the roadmap came from

Sourced from the user's own original ".NET / ASP.NET Core" section of the interview-prep plan,
regrouped by concept per [`question-taxonomy.md`](question-taxonomy.md) — see that file's
coverage note. No topics invented beyond the source list.

## Track-specific decisions and boundaries

- **MVC is a content subsection here, not a separate track/folder** — its 6 pages live in the
  normal tier folders exactly like every other subsection's pages, per the locked decision.
- **".NET Framework" (the legacy Windows-only technology) is explicitly out of scope** — this
  track is entirely about modern, cross-platform .NET/ASP.NET Core. The `dotnet/` folder slug is
  kept only because it already existed in this repo, not because it still means the old
  Framework.
- **This track skews heavily Intermediate (16 of 23 pages)** — deliberately not rebalanced to
  force a more even tier spread. The source material is practical framework-usage knowledge
  (DI lifetimes, middleware, config, MVC wiring), which is genuinely Intermediate-depth content
  per [`interview-depth-and-priority.md`](../../rules/interview-depth-and-priority.md); only two
  pages (Kestrel/reverse-proxy architecture, model-binding internals) reach Advanced-depth
  content in the given source.
- **"Filters, CORS, HTTPS & Logging" (Basic) does NOT cover global exception handling** — that
  content lives entirely on the dedicated "Global Exception Handling" page (Intermediate) to
  avoid the duplicate found during Phase 2 review. See [`roadmap.md`](roadmap.md)'s Phase 2 note.
- **Code examples are C#**, matching every other track on this site.
- Icon is 🧱, track color purple (`#7c3aed`).

## Known gaps

None — this is the first pass through the full 7-phase pipeline for this track, built and
verified in one sitting. Expect a review/feedback pass once the user goes through it.
