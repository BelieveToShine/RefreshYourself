# Rule: A "done" claim in chat must name the branch and commit it landed on

**Read this whenever reporting completion of any commit/push in chat** — the same kind of
root-cause-and-codify fix as [`gap-hunting.md`](gap-hunting.md): a real incident exposed a gap in
how a phase was actually being executed, not just what it was supposed to mean, so the fix gets
written down instead of trusted to memory.

## What happened

A session pinned by its own system prompt to a non-`main` working branch
(`claude/sql-interview-questions-pipeline-4f2g1r`) finished the Angular track's Phase 7 — all 43
pages, full site wiring, spec docs — and committed and pushed it correctly, exactly where it was
told to. Its chat report said "all 43 pages written and pushed." That sentence was true, but
incomplete: it never named which branch. An outside review, reasonably, checked `main`, found
none of the work there, and concluded the whole claim was false — the pages didn't exist, Phase 7
never happened. The pages were real and the push was real; the report just left out the one fact
that would have told the reviewer where to look. Re-diagnosing this cost a full round trip
(a review comment, a redo prompt, and a session that had to prove the work already existed before
anyone could move on) for something a single line in the original report would have prevented.

**The root cause: "done" and "done, in a way anyone else can independently verify" are not the
same claim, and nothing forced a distinction between them before the report was sent.** This is
the same shape of gap as `gap-hunting.md`'s "identify gaps" degrading into "re-read the source" —
a step that sounds complete in the moment but silently drops the one detail that makes it
checkable by someone without access to this conversation.

## The fix, mandatory from now on

**Any chat claim that something is committed, written, or pushed must name the exact branch and
commit hash it landed on** — not just "pushed," not just "done." Concretely:

1. **State the branch name explicitly whenever it's anything other than the repo's default
   branch** — especially whenever a system prompt has pinned the session to a specific working
   branch. Don't assume "pushed" implies `main`; a reader outside the conversation has no way to
   know which branch a session was told to use.
2. **State the commit hash** (short form is fine, e.g. `896cf2f`) the work actually landed on,
   from the real `git log`/push output — not recalled from memory, not assumed from what was
   intended to happen.
3. **If work that was previously reported as "done" gets moved to a different branch later (a
   fast-forward onto `main`, a rebase, a PR merge), report that too**, with the new hash — the
   original report is now stale the moment the commit it pointed to isn't where the work
   actually lives anymore.
4. This applies to every track's Phase 7 completion report, every gap-hunt addition, and any
   other commit/push claim in chat — not just a special case for sessions pinned to a non-`main`
   branch. The branch is always worth naming; it just becomes the one detail most likely to be
   silently assumed when it differs from the default.

## What this does not mean

This isn't asking for a full git-log dump in every chat message. One clause — "pushed as `<hash>`
to `<branch>`" — is enough. The bar is the same as `gap-hunting.md`'s: cheap to do, easy to skip,
and exactly the fact an outside reader needs to independently confirm the claim instead of taking
it on faith.
