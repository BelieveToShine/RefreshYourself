# Rule: Interview Depth (tiers) & Interview Priority — the two independent axes

**Read this before Phase 4 or 5 of the rebuild pipeline on any track** (see
[`specs/README.md`](../superpowers/specs/README.md) for the full 7-phase pipeline), and before
writing a track's `question-taxonomy.md` intro. This supersedes the narrower "3+ year developer"
framing used in the first pass of this rebuild (C#'s initial taxonomy/roadmap) — locked with the
user 2026-09-16.

## Who this site is for

**Experienced professionals from roughly 3+ years through senior, lead, architect, principal,
and higher.** Not a beginner audience, and not capped at mid-level either. Concretely:

- Never write or frame a page as if the reader has never touched the technology before.
- Never define Basic/Intermediate/Advanced by years of experience ("Basic = what a 1-year dev
  should know"). Tier is about **the type of question being asked**, not who's allowed to read it.
- **Do not artificially cap how deep Advanced goes** because a question "might be beyond a
  typical 3–5 year interview." An architect-level question belongs on the site if it's a real
  interview question for this technology at that depth — the site covers the full range, and a
  reader picks the depth relevant to their own interview, not the other way around.

## Tier = interview depth, defined by question type (not difficulty, not seniority)

| Tier | Question type |
|---|---|
| **Basic** | Core knowledge and terminology — "what is X," answered quickly. |
| **Intermediate** | Practical usage, implementation, comparisons, and troubleshooting. |
| **Advanced** | Internals, performance, concurrency, security, scalability, trade-offs, architecture, and complex real-world scenarios. |

**No separate "Architect" tier.** Where a concept is relevant to a senior/architect interview,
that shows up as an architecture or trade-off *question inside Advanced* — never as a fourth
tier. This keeps the site's structure simple (three tiers, always) while still reaching
architect-level depth on the concepts where that depth is real.

## The question layers: Direct → Comparison → Scenario (→ Architecture/Trade-off)

Every concept gets checked against these, but **not every concept needs all of them** — add a
layer only where it's a real, distinct question, never to pad:

1. **Direct** — "What is it?"
2. **Comparison** — "X vs. Y?"
3. **Scenario** — a real problem that requires using the knowledge, not just stating it.
   - Where appropriate, a scenario extends one step further into **Architecture / Trade-off**:
     ask "what could a senior or architect interviewer push further on?" This is a natural
     extension of Scenario, not a separate mandatory layer.

**Worked example — Dependency Injection** (this exact progression is the model to imitate):
- Basic: "What is dependency injection?"
- Intermediate: "Scoped vs. Singleton vs. Transient?"
- Advanced (internals/trade-off): "What happens when a Singleton depends on a Scoped service?"
- Advanced (architecture): "How would you structure DI across a large modular .NET
  application?"

All four of those are legitimately one concept's question set — they don't need to become four
separate pages or a fourth tier; Phase 3 (grouping into pages) decides how many pages that
becomes, same as any other concept.

## Interview priority (🔥 / ⭐ / 🧠) is about likelihood, never about seniority

This is a separate, independent axis from tier — restated because it's easy to accidentally
conflate with "how experienced do you need to be":

- **🔥 Must Know** — an interviewer can reasonably expect this to come up.
- **⭐ Should Know** — a strong differentiator, or a common follow-up question.
- **🧠 Deep Dive** — internals, edge cases, advanced reasoning.

**An architect may still need to review a 🔥 Basic question** (fundamentals get rusty too), and
**a 3-year developer may run into a 🧠 Deep Dive question** in a tough interview. Both are fine
and expected — priority never gets reinterpreted as a seniority gate on who should read a page.

## The mental model that ties it together

```
                EXPERIENCE
  3+ years ────────► Senior ───────► Architect+
                         │
                  SAME KNOWLEDGE MAP
                         │
            ┌────────────┼────────────┐
            ↓            ↓            ↓
         BASIC     INTERMEDIATE    ADVANCED
            │            │            │
         Core        Practical    Internals, performance,
      terminology   usage, compar-  concurrency, security,
                     isons, trouble- scalability, trade-offs,
                     shooting        architecture, scenarios
```

One knowledge map, walked at whatever depth the reader's own interview demands — someone with 4
years uses Basic+Intermediate as their main material; someone with 12–16+ years jumps straight
into Advanced without it reading like a beginner tutorial got there first.

## What this changes about already-written material

- Every track's `question-taxonomy.md` intro line describing the audience as "a 3+ year
  developer" should read as the broader range above instead — a wording fix, not a content
  rewrite, since Phase 1 taxonomies don't assign tier/priority anyway.
- Tracks already through Phase 4–5 (C#, as of this rule) should get a pass checking Advanced
  for missing architecture/trade-off questions on concepts where that depth is real — see
  `csharp/roadmap.md`'s own note on this. This is additive (new questions on existing pages),
  not a re-tiering of what's already there.
