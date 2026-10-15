# Open items (the only backlog)

Short on purpose. Everything from the 2026-10-06 full-repo review that was fixed is recorded in
[`archive/review-2026-10-06.md`](archive/review-2026-10-06.md) (historical — don't use it as a
to-do list). Add an item here when you find a problem you are not fixing now; delete the line
when it lands, in the same commit.

## Needs a decision from the user

- **`roadmap.html` layout policy.** Two layouts coexist — grouped by tier vs. grouped by cross-tier
  concept cluster — plus wording differences ("concepts" vs "clusters") and whether the first group
  starts open. [`rules/site-architecture.md`](rules/site-architecture.md) lists which track uses
  which. Pick one policy or document the rule for choosing.
- **`check-site.js` warnings.** 52 pages warn `missing section code`, but the 💻 Code box is
  declared optional in [`rules/content-writing.md`](rules/content-writing.md) — either downgrade
  the warning for pages where code genuinely doesn't apply, or add the box. Also: Design Patterns
  has 0/13 Use Cases panels (every other track: 58–93%).

## Content follow-ups (from the 2026-10-07 passes; not re-verified since)

- `csharp/basic/9` was flagged for 3–4 lines on string interning (the page mentions interning;
  check whether that already covers it).
- Re-read `dotnet/basic/5` and `dotnet/advanced/2` once for leftover scope creep after the splits.
- Volatile facts (OWASP LLM Top 10 names, Azure retirement dates, Angular/React version claims)
  were verified against official sources on 2026-10-07 — re-check them when a page is next
  touched; they age fastest.

## Accuracy

- Anything you find wrong goes through [`rules/accuracy.md`](rules/accuracy.md): verify against an
  official source, fix the page, and re-run the diagram verification if diagram text changed.
