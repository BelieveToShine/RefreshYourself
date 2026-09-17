# Rule: How a track's Phase 7 actually gets executed (multi-agent build process)

**Read this before running Phase 7 on any track**, alongside
[`specs/README.md`](../superpowers/specs/README.md) for what the 7 phases mean and
[`diagram-style.md`](diagram-style.md) for the mandatory verification script itself. This file
is the operational half — *how* a session actually drives Phase 7 to completion using parallel
subagents, safely, on a machine other sessions may also be using. Every track from OOP onward
(OOP, .NET/ASP.NET Core, Web API, EF Core) was built this exact way; a track built any other way
is not following the established process, even if the output looks similar.

## Before Phase 7: Phases 2–6 are the orchestrating session's own work, not delegated

Read the track's `question-taxonomy.md`, do Phases 2 (review/dedupe), 3 (group into pages), 4
(tier — [`interview-depth-and-priority.md`](interview-depth-and-priority.md)), 5 (priority, same
file), and 6 (final roadmap) yourself, and write the result to
`docs/superpowers/specs/<track>/roadmap.md` in the same shape as
[`specs/webapi/roadmap.md`](../superpowers/specs/webapi/roadmap.md) or
[`specs/efcore/roadmap.md`](../superpowers/specs/efcore/roadmap.md) — a Phase 2 note, the Phase 3
bundling decisions, a Phase 4 tier table with reasoning for the non-obvious calls, a Phase 5
priority table, and the final numbered Phase 6 table (concept → tier → page path). Only once that
document exists does Phase 7 (writing the actual pages) start.

**By the time Phase 7 starts, `<track>/roadmap.html` and the root `index.html` tile's
`roadmap-badge` link should already exist** — see
[`specs/README.md`](../superpowers/specs/README.md#process-to-follow-when-writing-one), step 4.
That happens at Phase 1/6, not here; if it's somehow still missing when Phase 7 begins, fix it
before scaffolding anything else, don't defer it further.

**Scaffold the rest of the site before dispatching any page-writing subagent**, so every
subagent's pager links, cross-links, and tier-index rows resolve against real files/known-good
targets:
- `<track>/index.html` (track landing page, tier-bulletin cards)
- `<track>/basic/index.html`, `<track>/intermediate/index.html`, `<track>/advanced/index.html`
  (tier indexes, topic rows with priority badges)
- `<track>/roadmap.html` — **grouped by concept category from the Phase 1 taxonomy, not by
  tier** — this is the site-wide convention as of the OOP track onward; tier/priority detail
  lives on each tier's own index page instead.
- Root `index.html`'s tile for the track: drop the `tile soon`/`Coming soon`/disabled-link
  styling, make the tier badges real `<a>` links.
- `assets/nav-index.js` and `assets/search-index.js` entries for the track's index pages (the 21
  individual topic-page entries get added as pages are written, in the same pass as the page).
- `docs/superpowers/specs/<track>/overview.md` and a new row in
  `docs/superpowers/specs/README.md`'s table.
- `docs/refreshyourself-overview.md`'s per-track bullet and the top status line.

## Dispatching page-writing subagents

Each subagent prompt must be fully self-contained (it has no access to this conversation) and
include, at minimum:
1. Which rule docs to read first: `product-principle.md`, `content-writing.md`,
   `diagram-style.md` (**especially the mandatory-verification section**), `accuracy.md`,
   `visual-style.md`, `common-trap.md`, `interview-recall.md`, `keypoints.md`,
   `interview-depth-and-priority.md`.
2. One reference page to copy the exact structural shape from, per tier: `csharp/basic/15.html`
   (Basic), `csharp/intermediate/8.html` (Intermediate), `csharp/advanced/3.html` (Advanced).
3. The actual concept content: what to cover, the trap, the follow-up question (with its
   answer), and what the diagram should show — written out in enough technical detail that the
   subagent isn't inventing the substance itself, only the prose/HTML.
4. Exact page metadata: file path, title, breadcrumb crumbs (with colors — see the color tables
   below), eyebrow color by priority, the literal interview-question line, a diagram-id prefix
   unique to that page, pager prev/next (or the empty-slot pattern on a tier's first/last page —
   copy from an existing first/last page such as `webapi/basic/1.html` /
   `csharp/basic/18.html`), footer text, and the three script tags in the fixed order
   (`search-index.js`, `nav-index.js`, `site.js`).
5. An explicit scope fence: touch only this one file — never `nav-index.js`, `search-index.js`,
   `roadmap.html`, any `index.html`, another topic page, or any rule doc.
6. The safety and verification instructions in the next two sections, verbatim.

**Standard color tables** (reused across tracks — pick a new, unused track color for a new
track's icon):

| Priority | eyebrow-bg / eyebrow-ink |
|---|---|
| 🔥 Must Know | `#fee2e2` / `#b91c1c` |
| ⭐ Should Know | `#f1f5f9` / `#475569` |
| 🧠 Deep Dive | `#ccfbf1` / `#0f766e` |

| Tier | crumb-bg / crumb-ink |
|---|---|
| Basic | `#dcfce7` / `#15803d` |
| Intermediate | `#fef3c7` / `#92400e` |
| Advanced | `#ede9fe` / `#6d28d9` |

Track colors already in use — pick something new, don't reuse: C# 🎵 `#3b82f6`, OOP 🧩
`#16a34a`, .NET 🧱 `#7c3aed`, Web API 🔌 `#b91c1c`, EF Core 🗄️ `#0f766e`. SQL and Azure need a
new pick each (e.g. a slate/blue for SQL, Azure's own `#0078D4` is already reserved for it on the
root tile).

## Safety: this machine runs other sessions too

**Never mass-kill `node.exe` or stop a process/preview server you didn't start yourself.** More
than one session may be running its own dev server or Browser-pane tab on this machine at the
same time. Every subagent prompt must include:

> If you need a local server to render the page for verification, do NOT mass-kill node.exe
> processes to free a port — other concurrent sessions on this machine may be running their own
> servers. Pick an unusual high port (e.g. 40000–60000) for your own temporary server, and only
> stop the exact process you started, verified by the port/PID you yourself bound. If the shared
> Browser-pane tab keeps getting navigated away by other concurrent sessions, open your own
> dedicated tab (`tabs_create`) and confirm via `document.title`/`location.href` in the SAME
> script call that ran the verification check, so a hijack between calls can't produce a false
> pass. If `tabs_create` hits a tab cap, fall back to the atomic-batch-on-shared-tab approach.

This was learned the hard way: one subagent building the .NET track reported mass-killing
`node.exe` to free a port, which could have taken down another session's server. Another
subagent building EF Core accidentally called `preview_stop` on a different session's server
because it misread the preview list. Both are exactly the failure mode this rule exists to
prevent — treat any process or server you didn't start as belonging to someone else.

## Verification is mandatory, twice: once by the subagent, once by you

**Use the exact script in [`diagram-style.md`](diagram-style.md#mandatory-automated-verification--hand-computed-coordinates-are-not-verification)**,
copied verbatim — not re-derived from memory. That script is the one already proven against a
real incident (5 shipped defects across 35 C# pages that "hand-computed verification" missed);
a freshly re-typed equivalent risks quietly dropping one of its three checks or the documented
edge-case handling (elements inside `<defs>`/`<marker>`, no-marker directional lines, marker
reach measured from the marker's actual inner shape, not its declared `markerWidth`).

1. Each subagent must inject that script via a live browser JS-execution tool against its own
   rendered page and report the literal `issueCount` per `svg.topic-diagram`. "Verified by
   computing the coordinates, couldn't reach a live browser" is a **failed** check, not a passed
   one — the subagent must say so plainly, never claim "verified" if it didn't actually render.
2. **After every page in the track is written**, the orchestrating session runs its own,
   independent pass of the same script against **every single page, one at a time** — not a
   sample, and not skipped just because every subagent self-reported clean. Start your own
   throwaway static server (an unusual high port, same safety rule as above), open a dedicated
   tab, and batch `navigate` + the script per page. Fix any genuine finding and re-run before
   moving on.
3. Only after every page in the track passes with `issueCount: 0` — from your own independent
   run — is Phase 7 done.

## Subagent concurrency

There is a **20-concurrent-subagent limit**. Dispatch up to 20 at once (a single message with
multiple tool calls, so they run in parallel). If dispatching the next one is rejected for
hitting the limit, do not retry immediately — wait for a completion notification to free a slot,
then dispatch exactly one replacement at a time until every page in the track is dispatched.

## When every page is written and independently verified

1. Spot-check site wiring end-to-end: the nav sidebar populates for the new tier keys, the
   search index count matches the expected total (page count + tier/track index entries +
   roadmap entry), `roadmap.html` renders with every link resolving, and the root `index.html`
   tile shows no "Coming soon" with live tier links.
2. `git status --short` — confirm exactly the expected new/modified file set and nothing stray.
3. Commit with a message describing the pipeline, any genuine defects found/fixed during the
   independent sweep, and the site wiring performed (see the OOP/.NET/Web API/EF Core commits in
   this repo's history for the exact tone and structure to match) — then push, following
   whatever attribution convention the current session has been given for this repo.

## Working in parallel with another session on a different track

Two tracks can be built at the same time by two different sessions **as long as each uses its
own git clone or worktree** (never the same working directory at the same time) — each track's
own folder (`sql/`, `azure/`, etc.) never overlaps, but every track's Phase 7 finishes by editing
the same handful of shared files: `assets/nav-index.js`, `assets/search-index.js`, root
`index.html`, `docs/refreshyourself-overview.md`, and `docs/superpowers/specs/README.md`.
Editing those concurrently in one shared directory risks one session's in-progress edit silently
clobbering the other's. Each session should `git pull` immediately before touching any of those
shared files and again immediately before its final commit, and expect (and calmly resolve) a
small textual merge conflict in one of them as a normal, one-time cost of working in parallel —
not a sign anything went wrong.
