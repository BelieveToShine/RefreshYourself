# Open items (the only backlog)

Short on purpose. Everything from the 2026-10-06 full-repo review that was fixed is recorded in
[`archive/review-2026-10-06.md`](archive/review-2026-10-06.md) (historical — don't use it as a
to-do list). Add an item here when you find a problem you are not fixing now; delete the line
when it lands, in the same commit.

## Open

- **Design Patterns Use Cases panels** — in progress 2026-10-15 (0/13 → see `check-site.js` warning
  for the live number; delete this line when the warning is gone).

## Standing practice (not a task)

- **Volatile facts age fastest** — OWASP LLM Top 10 names, Azure retirement dates, Angular/React
  version claims were verified against official sources on 2026-10-07; re-check them whenever a
  page is next touched.
- **Anything you find wrong** goes through [`rules/accuracy.md`](rules/accuracy.md): verify against
  an official source, fix the page, re-run `node scripts/verify-diagrams.js --only <page>` if
  diagram text changed.
