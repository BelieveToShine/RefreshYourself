# Angular — Roadmap (Phases 2–6)

Phase 1 output: [`question-taxonomy.md`](question-taxonomy.md) — 37 content groups (36 from the
user's own source outline, plus §21b Accessibility added by this file's own gap-hunt). This file
is Phases 2–6: review, page grouping, tier, priority, and the final roadmap — see
[`specs/README.md`](../README.md) for what each phase means.

## Phase 2 — Review & gap-hunt

Done directly inside [`question-taxonomy.md`](question-taxonomy.md) rather than repeated here —
see that file's own "Coverage note for Phase 1" and "Gap-hunt log" sections for the full
reasoning. Summary: nothing from the source was dropped; a handful of currency details were
verified against Angular's current docs (`[new]`); an active gap-hunt against outside Angular
knowledge (per [gap-hunting.md](../../rules/gap-hunting.md)) added 7 real gaps (`[gap-hunt]`) —
content projection, `@HostBinding`/`@HostListener`, `@ViewChild`/`@ContentChild` timing,
`NgOptimizedImage`, `ng update`/breaking-change strategy, the `resource()` API family, and a new
standalone Accessibility section — folded into existing groups except Accessibility and the
`resource()` API, which needed a touch more room but still didn't need a whole new page of their
own (Accessibility got one; `resource()` folded into Signal Architecture).

No duplicate content found across groups — where two groups touch the same vocabulary (e.g.
"route-level providers" in both §12 DI-Advanced and §20 Routing-Advanced), it's the same
deliberate multi-angle layering seen on every other track, not a repeat.

## Phase 3 — Grouping into pages (43 pages)

Default is one taxonomy group → one page, same as every other track. Two groups needed a split,
one needed a fan-out into several scenario pages:

- **RxJS Fundamentals (§13, 16 bullets)** splits into **RxJS — Core Concepts** (what an
  Observable/Subscription/cold-vs-hot/lazy-execution actually are) and **RxJS — Common
  Operators** (`map`/`tap`/`filter`/`take`/`takeUntil`/`catchError`/`finalize`/`shareReplay`, the
  `async` pipe, and the memory-leak question) — one is "what is this model," the other is "the
  actual operator vocabulary," a natural two-way split rather than one overloaded page.
- **Production Scenarios (§36)** fans out into 6 scenario pages, one per the source's own
  sub-area (Performance, RxJS, Change Detection, State, Architecture, SSR) — same treatment
  React's own "Real-world Scenarios" section got, for the same reason: one page per scenario
  keeps each diagram/recall/trap focused on a single investigation instead of forcing 5-6
  unrelated scenarios onto one page.

Everything else is one taxonomy group → one page.

## Phase 4 — Tier (by question type, not difficulty)

The source's own Basic/Intermediate/Advanced grouping is kept as-is — every group already lands
where [interview-depth-and-priority.md](../../rules/interview-depth-and-priority.md)'s actual
rule (question type) would put it: Basic groups are pure "what is X" recall, Intermediate groups
are practical usage/comparison/troubleshooting, Advanced groups are internals/architecture/
scenario. The new Accessibility group is tiered Intermediate (practical/comparison/scenario
depth, not internals) — same tier React's own Accessibility addition got, for the same reason.

**One deliberate check, flagged rather than silently applied**: Signals (§17) and Change
Detection (§19) could each be argued Advanced given how deep their *real* mechanism goes — but
per the same rule "how deep the eventual answer goes" isn't the tier signal, "what type of
question gets asked" is. "What is a Signal and when would you reach for one" and "what's the
difference between Default and OnPush" are both squarely practical/comparison questions asked
routinely at Intermediate depth; the genuinely internals-level versions of both ("how does Signal
dependency tracking work," "what does OnPush skip at the mechanism level") already have their
own dedicated Advanced pages (§27, §30) rather than being folded into the Intermediate ones.

## Phase 5 — Priority (🔥 Must Know / ⭐ Should Know / 🧠 Deep Dive — independent of tier)

The source outline already carried priority hints on most of its groups — used as a strong
starting signal, cross-checked against "priority = likelihood, never depth" rather than copied
blindly.

| Priority | Pages |
|---|---|
| 🔥 Must Know | Angular Fundamentals; Components; Templates & Data Binding; Directives; Lifecycle; Services & Dependency Injection; Routing Fundamentals; Forms Fundamentals; HTTP Fundamentals; Standalone Components; RxJS — Core Concepts; RxJS — Common Operators; RxJS Higher-Order Mapping; RxJS Error Handling & Subscription Lifetime; Signals; Change Detection; HTTP Interceptors; State Management; Performance; SSR & Hydration; Angular Security; Scenario: Performance Under Load; Scenario: RxJS in Production; Scenario: Change Detection Gone Wrong; Scenario: Modernizing a Legacy Angular App |
| ⭐ Should Know | Pipes; Dependency Injection — Advanced Usage; Subjects; Signals + RxJS; Routing — Advanced; Forms — Advanced; Accessibility; Testing; Deferrable Views; Scenario: State Management at Scale; Scenario: SSR & Hydration Issues |
| 🧠 Deep Dive | Angular Rendering Internals; Change Detection Internals; Zoneless Angular; Advanced RxJS Architecture; Signal Architecture; Large Application Architecture; Micro Frontends |

25 🔥 / 11 ⭐ / 7 🧠 across 43 pages. Heavily 🔥-weighted through Basic and Intermediate, matching
every other track's pattern of "most of the everyday interview surface is genuinely expect-this,
not a rare deep-cut" — the 🧠 pile concentrates almost entirely in Advanced's internals/
architecture pages, where it belongs.

**HTTP Interceptors is 🔥, not the source's own hedge of "⭐/🔥"** — auth-token injection and the
refresh-token-flow-without-recursive-interception question are two of the most commonly asked
practical Angular questions once a candidate is past pure fundamentals; this isn't a rare
differentiator, it's routine.

**SSR & Hydration is 🔥 despite being an Advanced page** — priority and tier are independent
axes; SSR has become a routine, expected topic in current Angular interviews (the source's own
note says as much), even though the *content* of the answer is genuinely Advanced-depth.

## Phase 6 — Final roadmap

`angular/roadmap.html` groups by the same content-group structure as the Phase 1 taxonomy
(concept group, not tier — the site-wide convention). Numbering below is the tier-folder page
number (`angular/<tier>/<n>.html`).

| # | Concept group | Tier | Priority | Page |
|---|---|---|---|---|
| 1 | Angular Fundamentals | Basic | 🔥 | basic/1.html |
| 2 | Components | Basic | 🔥 | basic/2.html |
| 3 | Templates & Data Binding | Basic | 🔥 | basic/3.html |
| 4 | Directives | Basic | 🔥 | basic/4.html |
| 5 | Pipes | Basic | ⭐ | basic/5.html |
| 6 | Lifecycle | Basic | 🔥 | basic/6.html |
| 7 | Services & Dependency Injection | Basic | 🔥 | basic/7.html |
| 8 | Routing Fundamentals | Basic | 🔥 | basic/8.html |
| 9 | Forms Fundamentals | Basic | 🔥 | basic/9.html |
| 10 | HTTP Fundamentals | Basic | 🔥 | basic/10.html |
| 11 | Standalone Components | Intermediate | 🔥 | intermediate/1.html |
| 12 | Dependency Injection — Advanced Usage | Intermediate | ⭐ | intermediate/2.html |
| 13 | RxJS — Core Concepts | Intermediate | 🔥 | intermediate/3.html |
| 13b | RxJS — Common Operators | Intermediate | 🔥 | intermediate/4.html |
| 14 | RxJS Higher-Order Mapping | Intermediate | 🔥 | intermediate/5.html |
| 15 | Subjects | Intermediate | ⭐ | intermediate/6.html |
| 16 | RxJS Error Handling & Subscription Lifetime | Intermediate | 🔥 | intermediate/7.html |
| 17 | Signals | Intermediate | 🔥 | intermediate/8.html |
| 18 | Signals + RxJS | Intermediate | ⭐ | intermediate/9.html |
| 19 | Change Detection | Intermediate | 🔥 | intermediate/10.html |
| 20 | Routing — Advanced | Intermediate | ⭐ | intermediate/11.html |
| 21 | Forms — Advanced | Intermediate | ⭐ | intermediate/12.html |
| 21b | Accessibility | Intermediate | ⭐ | intermediate/13.html |
| 22 | HTTP Interceptors | Intermediate | 🔥 | intermediate/14.html |
| 23 | State Management | Intermediate | 🔥 | intermediate/15.html |
| 24 | Performance | Intermediate | 🔥 | intermediate/16.html |
| 25 | Testing | Intermediate | ⭐ | intermediate/17.html |
| 26 | Angular Rendering Internals | Advanced | 🧠 | advanced/1.html |
| 27 | Change Detection Internals | Advanced | 🧠 | advanced/2.html |
| 28 | Zoneless Angular | Advanced | 🧠 | advanced/3.html |
| 29 | Advanced RxJS Architecture | Advanced | 🧠 | advanced/4.html |
| 30 | Signal Architecture | Advanced | 🧠 | advanced/5.html |
| 31 | SSR & Hydration | Advanced | 🔥 | advanced/6.html |
| 32 | Deferrable Views | Advanced | ⭐ | advanced/7.html |
| 33 | Angular Security | Advanced | 🔥 | advanced/8.html |
| 34 | Large Application Architecture | Advanced | 🧠 | advanced/9.html |
| 35 | Micro Frontends | Advanced | 🧠 | advanced/10.html |
| 36 | Production Scenarios | Advanced | mixed | advanced/11.html (Performance Under Load), advanced/12.html (RxJS in Production), advanced/13.html (Change Detection Gone Wrong), advanced/14.html (State Management at Scale), advanced/15.html (Modernizing a Legacy Angular App), advanced/16.html (SSR & Hydration Issues) |

New totals: **Basic 10, Intermediate 17, Advanced 16 — 43 pages.**

## Track-specific decisions and boundaries

- **This track owns Angular-the-framework** — components, templates, DI, RxJS as Angular uses
  it, Signals, change detection, rendering, and Angular-specific architecture/security/
  performance. It does not own general TypeScript/JavaScript fundamentals, Angular Material/
  CDK's own component API surface, or NgRx's exact reducer/effect syntax — see the taxonomy's own
  "Scope boundary" section for the full reasoning on each exclusion.
- **Both modern Angular (Standalone, Signals, the new control flow, `@defer`, functional
  providers/guards/interceptors, `inject()`, zoneless, SSR/hydration) and existing enterprise
  Angular (`NgModule`s, Zone.js, `OnPush`, RxJS, Reactive Forms, class-based guards/interceptors)
  are both explicitly in scope, on purpose** — per the user's own instruction, a candidate may be
  interviewing for a modern-stack role while maintaining a 5-10-year-old enterprise codebase, and
  this site's audience spans both realities.
- **RxJS, Signals, and Change Detection are treated as the conceptual spine of this track, not
  three ordinary topics among many** — reflected in page count (RxJS alone gets 5 dedicated
  pages plus its own Advanced architecture page; Signals gets 3; Change Detection gets 2) and in
  priority (all three have at least one 🔥 page), per the user's own explicit instruction.
- **Code examples are TypeScript**, using Angular's actual current syntax (standalone
  `imports`, the new `@if`/`@for` control flow, `input()`/`output()`/`model()` where a page is
  specifically about the signal-based API, `@Input`/`@Output` where a page is specifically about
  the decorator-based one) — which syntax a given page shows follows directly from what that
  page is actually teaching, not a blanket house style.
- Icon and track color: 🅰️, Angular's own brand red (`#dd0031`) — distinct from every track color
  already in use (C# 🎵 `#3b82f6`, OOP 🧩 `#16a34a`, .NET 🧱 `#7c3aed`, Web API 🔌 `#b91c1c`,
  EF Core 🗄️ `#0f766e`, SQL 🗃️ `#334155`, Azure ☁️ `#0078D4`, AI 🤖 `#c026d3`, React ⚛️
  `#0891b2`, DSA 🧠 `#f59e0b`). Web API's red (`#b91c1c`, a darker brick tone) and Angular's red
  (`#dd0031`, a brighter red-pink with more magenta in it) sit far enough apart in hue and value
  to stay visually distinct side by side on the root tile grid — checked directly against the
  live page before committing to the pick.

## Known gaps

None — this track went through the full 7-phase pipeline (including its own Phase 2 gap-hunt,
folded into the initial pass rather than needing a later addendum) in one build. Expect a
review/feedback pass once the user goes through it, same as every other completed track.
