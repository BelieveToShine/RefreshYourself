# Rule: Actively hunt for gaps in Phase 2 — a re-read is not a gap hunt

**Read this during Phase 2 of every track**, alongside
[`specs/README.md`](../superpowers/specs/README.md) for what Phase 2 means and
[`interview-depth-and-priority.md`](interview-depth-and-priority.md) for Phase 4/5. This closes
a real gap in how Phase 2 was actually being executed — not what the phase was defined as.

## What happened

Phase 2 has always been defined as "review — dedupe, identify gaps" (see `specs/README.md`).
In practice, across the tracks built before this rule existed, "identify gaps" was executed as
*re-reading the source list for internal consistency* — checking that nothing inside the given
list contradicted or repeated itself — never as an active check against outside knowledge for
concepts the source list simply never mentioned. That distinction sounds subtle; the two
tracks that exposed it are not:

- **React**: the source outline's own "Recommended structure" tree named an Advanced "Testing
  Strategy" subsection that no question content was ever written for. A re-read of the source
  list would never catch this — the list itself was internally consistent, it was just
  incomplete relative to its own stated shape. Caught only because the user explicitly handed
  over an "important additions" checklist and separately, twice, asked for a fresh adversarial
  pass — external pressure, not something Phase 2 surfaced on its own.
- **SQL**: a second look, done only after the user asked for the same rigor applied to React
  found **twelve** real, commonly-asked SQL interview questions with no source-list mention at
  all — `UNION` vs. `UNION ALL`, `EXISTS` vs. `IN` vs. `JOIN`, the logical order a query actually
  executes in, foreign-key referential actions, index seek vs. scan vs. table scan, recursive
  CTEs, temp tables vs. table variables vs. CTEs, triggers, transaction control mechanics
  (`BEGIN`/`COMMIT`/`ROLLBACK`/`SAVEPOINT`), materialized/indexed views, bulk operations from the
  database's own side, and partitioning. None of these contradicted anything already in the
  taxonomy — they were just never in the source material, and Phase 2 as actually practiced had
  no step that would ever surface a topic that was never there to begin with.

**The root cause: "identify gaps" had no concrete method attached to it.** Without one, it
degrades into "re-read what you were given" — which can only ever find problems *within* the
source material, never the absence of something the source material never mentioned at all.

## The fix, mandatory from now on

**Phase 2 is not complete until an active gap-hunt against outside domain knowledge has
happened and is written down — not just a re-read of the source list.** Concretely:

1. **Ask the question the source list can't ask itself**: "if I opened a genuinely thorough,
   senior-level interview-prep reference for this exact technology, what would it cover that
   isn't anywhere in this taxonomy?" Answer that from real knowledge of the technology, not from
   re-scanning what's already in front of you — the whole point is finding what's *not* there.
2. **Every candidate found gets a real decision, not a shrug**: add it (tagged `[new]`, placed
   in whichever existing concept group it actually belongs to, or a new group only if it
   genuinely doesn't fit anywhere existing), or explicitly exclude it with a stated reason
   (out of scope, belongs to a different track, too niche/tutorial-level to earn a page). Both
   outcomes get written down — a candidate that was considered and rejected is a completed gap
   hunt; a candidate nobody thought to consider is an incomplete one, indistinguishable from
   this rule not having been followed at all.
3. **Write the hunt down in the taxonomy file itself**, in a `## Gap-hunt log` section: what was
   checked, what was added and where, what was considered and excluded and why. A gap hunt that
   only lives in chat, with no record in the file, is exactly the failure mode this whole rule
   exists to close — see [`build-process.md`](build-process.md)'s own opening line about tacit
   knowledge that isn't written down being knowledge the next session doesn't have.
4. **This applies even to a track that already finished Phase 7.** A track being fully built and
   live does not mean its Phase 2 was actually complete — it means Phase 2 as *practiced* wasn't
   caught yet. Finding a real gap in an already-shipped track is not a sign anything is broken;
   treating "it's already built" as a reason not to look is what would be the mistake. Extending
   an already-live track means re-opening Phases 3–7 for the new material specifically (new
   pages, not edits to already-verified ones, unless a genuine fold-in is small and safe) — a
   bigger step than a documentation edit, and worth surfacing to the user as a real decision
   rather than silently expanding scope, but not a reason to skip the hunt itself.

## What this does not mean

This is not "add every tangentially related concept you can think of." The bar is the same one
used for every addition on every track so far: real, commonly-asked, and earning its own
question — not padding for the sake of a bigger number. A gap hunt that adds forty items with no
filter is exactly as broken as one that adds zero; see any completed track's own "Deliberately
not added, with reasons" section for what a disciplined hunt's rejected pile looks like.
