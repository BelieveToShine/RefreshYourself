# Open items (the only backlog)

Short on purpose. Everything from the 2026-10-06 full-repo review that was fixed is recorded in
[`archive/review-2026-10-06.md`](archive/review-2026-10-06.md) (historical — don't use it as a
to-do list). Add an item here when you find a problem you are not fixing now; delete the line
when it lands, in the same commit.

## Open

Nothing open right now — `check-site.js` reports 0 errors and 0 warnings. Add items here as you find them.

## Standing practice (not a task)

- **Volatile facts age fastest** — OWASP LLM Top 10 names, Azure retirement dates, Angular/React
  version claims were verified against official sources on 2026-10-07; re-check them whenever a
  page is next touched.
- **Anything you find wrong** goes through [`rules/accuracy.md`](rules/accuracy.md): verify against
  an official source, fix the page, re-run `node scripts/verify-diagrams.js --only <page>` if
  diagram text changed.
