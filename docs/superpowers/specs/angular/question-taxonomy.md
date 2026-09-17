# Angular — Interview Question Taxonomy

**Phase 1 of the 7-phase pipeline** (see [`docs/superpowers/specs/README.md`](../README.md)).
No tier lock-in, no priority, no page grouping yet. Sourced from the user's own detailed,
already Basic/Intermediate/Advanced-organized outline for this track (36 content groups) — kept
as the top-level structure below, same treatment React's own source outline got, since it's a
strong, already-considered hypothesis, not something to re-derive from nothing. Phase 4 will
re-check every group against
[`interview-depth-and-priority.md`](../../rules/interview-depth-and-priority.md)'s actual rule
(question *type*, not where it happened to sit in the source) before treating the grouping as
final — in practice every group here already lands where that rule would put it anyway.

**`[new]`** marks anything added or updated beyond the literal source wording during this initial
authoring pass (mostly currency fixes — verifying an API detail against current Angular docs
before asserting it, per [accuracy.md](../../rules/accuracy.md)) — this is a **separate,
smaller set** from the active gap-hunt additions, which are logged and tagged **`[gap-hunt]`**
in this file's own "Gap-hunt log" section at the bottom, per
[gap-hunting.md](../../rules/gap-hunting.md).

Every bullet is tagged by question type using this site's standard vocabulary: **Core concept**
("what is it"), **Comparison** ("X vs. Y"), **Understanding** (mechanism/why, including
common-mistake framing), **Scenario** (a real problem to diagnose or design through).

## Scope boundary

**General TypeScript/JavaScript fundamentals stay out of scope** — closures, `this` binding,
`async`/`await` mechanics, module systems, and so on are assumed knowledge. Where Angular's own
behavior specifically depends on one of those, it shows up here from Angular's side of it only.

**Deliberately excluded, with reasons:**
- **Angular Material / CDK's own component API surface** — a real, common enterprise dependency,
  but a separate library's own interview territory, not Angular-the-framework's. The *architectural*
  question of building a reusable component library (§34 Large Application Architecture) stays
  in scope; a specific Material component's own API doesn't.
- **NgRx's exact reducer/effect boilerplate syntax** — the *conceptual* questions (what problem it
  solves, when to reach for it vs. Signals+services) are in scope under §23 State Management; the
  library's own precise API surface is that library's own interview territory, matching how the
  React track excludes Redux's own API for the same reason.
- **Build tooling internals** (esbuild/Vite migration specifics, Angular CLI's build configuration
  options) — front-end tooling, not the framework itself.

## BASIC — Core interview recall

### 1. Angular Fundamentals
- **Core concept** — What is Angular?
- **Comparison** — Angular vs. AngularJS?
- **Comparison** — Angular (a framework) vs. React (a library) — what does "framework vs.
  library" actually mean in practice?
- **Understanding** — What problem does Angular solve?
- **Core concept** — What are the main building blocks of Angular (components, templates,
  directives, pipes, services, modules/standalone)?
- **Core concept** — What is a component?
- **Core concept** — What is a template?
- **Core concept** — What is a directive?
- **Core concept** — What is a pipe?
- **Core concept** — What is a service?
- **Understanding** — What role does TypeScript play in Angular?
- **Understanding** — How does an Angular application actually start (bootstrap)?
- **Core concept** — What is the Angular CLI, and what does it actually do for you?

### 2. Components
- **Core concept** — What is an Angular component?
- **Understanding** — What does `@Component` actually do?
- **Core concept** — What are component metadata?
- **Core concept** — What is a selector?
- **Comparison** — Inline template vs. external template file?
- **Understanding** — How does a parent communicate with a child component?
- **Understanding** — How does a child communicate with a parent component?
- **Core concept** — What is `@Input`?
- **Core concept** — What is `@Output`?
- **Core concept** — What is `EventEmitter`?
- **Core concept** — What is component composition?
- **Understanding** — What makes a component genuinely reusable?
- **Understanding** — What should belong inside a component vs. a service?
- **[gap-hunt] Core concept** — What is content projection (`ng-content`)?
- **[gap-hunt] Understanding** — How does a component expose a "slot" for arbitrary child
  content, and what's the difference between a default slot and a named one (`select`)?
- **[gap-hunt] Comparison** — `ng-content` vs. `ng-template`?

### 3. Templates & Data Binding
- **Core concept** — What is interpolation (`{{ }}`)?
- **Comparison** — Property binding vs. interpolation?
- **Core concept** — What is event binding?
- **Core concept** — What is two-way binding?
- **Understanding** — What does `[()]` (banana-in-a-box) actually mean?
- **Understanding** — What is property binding actually doing under the hood?
- **Understanding** — What is event binding actually doing under the hood?
- **Understanding** — What is template expression evaluation?
- **Understanding** — What should never be done inside a template expression?
- **Understanding** — Why can calling a method directly from a template hurt performance?
- **Core concept** — What are template reference variables?

### 4. Directives
- **Core concept** — What is a directive?
- **Comparison** — Component vs. directive?
- **Comparison** — Attribute directive vs. structural directive?
- **Core concept** — What is a structural directive?
- **Understanding** — How does `*ngIf` work conceptually?
- **Understanding** — How does `*ngFor` work conceptually?
- **Core concept** — What is the modern Angular built-in control-flow syntax (`@if`/`@for`/`@switch`)?
- **Comparison** — `*ngIf` vs. `@if`?
- **Comparison** — `*ngFor` vs. `@for`?
- **Understanding** — What is `track` in `@for`, and why does it matter?
- **Understanding** — How do you create a custom directive?
- **Understanding** — When should logic become a directive instead of a component?
- **[gap-hunt] Core concept** — What does `@HostBinding` do?
- **[gap-hunt] Core concept** — What does `@HostListener` do?
- **[gap-hunt] Understanding** — How does a directive actually talk to the host element it's
  attached to, mechanically?

### 5. Pipes
- **Core concept** — What is a pipe?
- **Comparison** — Pure vs. impure pipe?
- **Understanding** — Why are pure pipes generally preferred?
- **Understanding** — When does a pure pipe actually execute?
- **Understanding** — When does an impure pipe execute?
- **Understanding** — How do you create a custom pipe?
- **Comparison** — Using a pipe vs. calling a method directly in a template?
- **Understanding** — Can a pipe actually improve performance, and how?
- **Scenario** — When would an impure pipe be genuinely justified?

### 6. Lifecycle
- **Core concept** — What are Angular lifecycle hooks?
- **Comparison** — `ngOnInit` vs. the constructor?
- **Core concept** — `ngOnChanges` — when does it actually run?
- **Core concept** — `ngAfterViewInit`?
- **Core concept** — `ngAfterContentInit`?
- **Core concept** — `ngOnDestroy`?
- **Understanding** — Why shouldn't initialization logic go inside the constructor?
- **Understanding** — What cleanup genuinely belongs in `ngOnDestroy`?
- **Understanding** — How does component lifecycle interact with RxJS subscriptions?
- **[gap-hunt] Comparison** — `@ViewChild` vs. `@ContentChild`?
- **[gap-hunt] Understanding** — Why is a `@ViewChild` reference still `undefined` inside
  `ngOnInit`, and which hook actually guarantees it's set?

### 7. Services & Dependency Injection
- **Core concept** — What is Angular dependency injection?
- **Understanding** — Why use DI instead of constructing dependencies directly?
- **Core concept** — What is an injectable service?
- **Understanding** — What does `providedIn: 'root'` mean?
- **Core concept** — What is a provider?
- **Comparison** — `useClass` vs. `useValue` vs. `useFactory`?
- **Core concept** — What is `InjectionToken`, and why does it exist?
- **Comparison** — Constructor injection vs. the `inject()` function?
- **Core concept** — What is an injection context?
- **Understanding** — What happens when a dependency cannot be resolved?
- **Understanding** — What actually determines the lifetime of an injected service?

### 8. Routing Fundamentals
- **Understanding** — How does Angular routing work, at a high level?
- **Core concept** — What is a route?
- **Comparison** — Route parameters vs. query parameters?
- **Core concept** — What are child routes?
- **Core concept** — What is a route redirect?
- **Core concept** — What is a wildcard route?
- **Core concept** — What is a route guard?
- **Core concept** — What is lazy loading, in routing terms?
- **Comparison** — `loadComponent` vs. `loadChildren`?
- **Core concept** — What is a resolver?
- **Understanding** — Can route guards be relied on for real security?
- **Understanding** — What happens when a user refreshes a client-side route?

### 9. Forms Fundamentals
- **Comparison** — Template-driven forms vs. reactive forms?
- **Scenario** — When would you actually choose each?
- **Core concept** — What is `FormControl`?
- **Core concept** — What is `FormGroup`?
- **Core concept** — What is `FormArray`?
- **Core concept** — What is a validator?
- **Comparison** — Synchronous vs. asynchronous validators?
- **Understanding** — How do you display validation errors properly?
- **Understanding** — How do you handle a dynamic form (fields that change at runtime)?

### 10. HTTP Fundamentals
- **Understanding** — How do you make HTTP requests in Angular?
- **Core concept** — What is `HttpClient`?
- **Understanding** — How do you handle HTTP errors?
- **Understanding** — How do you add headers to a request?
- **Core concept** — What are HTTP interceptors, at a high level?
- **Understanding** — How do you attach an authentication token to outgoing requests?
- **Understanding** — How do you handle retry logic for a failed request?
- **Understanding** — How do you cancel an in-flight HTTP request?
- **Understanding** — How does Angular's HTTP layer integrate with RxJS?

## INTERMEDIATE — Practical Angular

### 11. Standalone Components
- **Core concept** — What are standalone components?
- **Understanding** — Why were standalone components introduced?
- **Comparison** — Standalone vs. `NgModule`-based components?
- **Understanding** — Are `NgModule`s still relevant in current Angular?
- **Understanding** — How does a standalone component declare its own dependencies?
- **Understanding** — How does the `imports` array work on a standalone component?
- **Core concept** — What does `bootstrapApplication()` do?
- **Core concept** — What are `provideRouter()` and `provideHttpClient()`?
- **Scenario** — How would you migrate an `NgModule` application to standalone?
- **Understanding** — Can standalone and `NgModule`-based components coexist in one app?

### 12. Dependency Injection — Advanced Usage
- **Understanding** — How does hierarchical DI actually work?
- **Comparison** — Root injector vs. a component-level injector?
- **Understanding** — What happens when a provider is declared at the component level instead
  of root?
- **Scenario** — How would you get multiple, independent instances of a service?
- **Core concept** — What are route-level providers?
- **Core concept** — What are multi-providers?
- **Understanding** — How does `InjectionToken` solve a configuration problem that a plain
  class dependency can't?
- **Comparison** — `useClass` vs. `useFactory`, specifically?
- **Scenario** — How would you inject environment-specific configuration?
- **Scenario** — How would you override a provider inside a test?

### 13. RxJS Fundamentals
- **Core concept** — What is RxJS?
- **Comparison** — Observable vs. Promise?
- **Comparison** — Cold vs. hot Observable?
- **Core concept** — What is a subscription?
- **Understanding** — When does an Observable actually start executing?
- **Core concept** — What is lazy execution, in this context?
- **Core concept** — What is an operator?
- **Comparison** — `map` vs. `tap`?
- **Core concept** — `filter`?
- **Core concept** — `take`?
- **Core concept** — `takeUntil`?
- **Core concept** — `catchError`?
- **Core concept** — `finalize`?
- **Core concept** — `shareReplay`?
- **Understanding** — What actually causes a memory leak from an RxJS subscription?
- **Core concept** — What does the `async` pipe do, and why does it matter for subscriptions?

### 14. RxJS Higher-Order Mapping
- **Comparison** — `switchMap` vs. `mergeMap`?
- **Comparison** — `concatMap` vs. `exhaustMap`?
- **Scenario** — When would you reach for each of the four?
- **Scenario** — Search/autocomplete — which operator, and why?
- **Scenario** — Firing several requests in parallel — which operator?
- **Scenario** — Requests that must run strictly in sequence — which operator?
- **Scenario** — Preventing a duplicate form submission on repeated clicks — which operator?
- **Understanding** — What actually happens when `switchMap` cancels the previous inner
  Observable?
- **Understanding** — What does "cancellation" concretely mean for an in-flight HTTP request?

### 15. Subjects
- **Core concept** — What is a `Subject`?
- **Comparison** — Observable vs. `Subject`?
- **Comparison** — `Subject` vs. `BehaviorSubject`?
- **Core concept** — `ReplaySubject`?
- **Core concept** — `AsyncSubject`?
- **Scenario** — When would you actually reach for a `Subject`?
- **Understanding** — Why can `Subject`s create architectural problems if overused?
- **Comparison** — `Subject` vs. Signal?
- **Comparison** — `Subject` vs. `EventEmitter`?

### 16. RxJS Error Handling & Subscription Lifetime
- **Understanding** — How does `catchError` actually work?
- **Understanding** — Where in a pipeline should `catchError` be placed, and why does that
  placement matter?
- **Understanding** — What happens to the rest of a stream once it errors?
- **Understanding** — How can one inner request's error terminate an entire outer stream?
- **Scenario** — How do you keep a stream alive after one inner request fails?
- **Understanding** — How do you prevent a subscription leak?
- **Core concept** — The `takeUntil` cleanup pattern?
- **Core concept** — `DestroyRef` and `takeUntilDestroyed()`?
- **Comparison** — `async` pipe vs. manual `.subscribe()`?
- **Scenario** — When is a manual subscription actually justified over the `async` pipe?

### 17. Signals
- **Core concept** — What is a Signal?
- **Understanding** — Why were Signals introduced?
- **Comparison** — Signal vs. Observable?
- **Core concept** — `signal()`?
- **Core concept** — `computed()`?
- **Core concept** — `effect()`?
- **Understanding** — How does a Signal actually track its dependencies?
- **Comparison** — Writable Signal vs. computed Signal?
- **Scenario** — When should you reach for a Signal?
- **Scenario** — When should you still reach for RxJS instead?
- **Understanding** — Can Signals fully replace RxJS?
- **Understanding** — How do Signals interact with Angular's rendering?

### 18. Signals + RxJS
- **Comparison** — Signal vs. Observable, revisited from the "which model should this data use"
  angle?
- **Scenario** — When should a piece of data stay an Observable?
- **Scenario** — When should it become a Signal instead?
- **Core concept** — `toSignal()`?
- **Core concept** — `toObservable()`?
- **Understanding** — How do you bridge the two models in practice?
- **Understanding** — Should every Observable be converted into a Signal?
- **Comparison** — Signals vs. `BehaviorSubject` for holding shared state?
- **Scenario** — How do you handle an HTTP stream using Signals?

### 19. Change Detection
- **Core concept** — What is change detection?
- **Understanding** — How does Angular actually know something changed?
- **Understanding** — What triggers a change-detection run?
- **Comparison** — `Default` vs. `OnPush`?
- **Understanding** — What does `OnPush` actually change about a component's checking?
- **Understanding** — What causes an `OnPush` component to update?
- **Understanding** — What does `markForCheck()` do?
- **Core concept** — `detectChanges()`?
- **Core concept** — `detach()`?
- **Understanding** — How do Signals affect change detection?
- **Understanding** — How does Zone.js relate to change detection?
- **Understanding** — What happens if Zone.js is removed from the application?
- **[new] Understanding** — What changed with `OnPush` in Angular v22 — it's now the **default**
  strategy for newly generated components, with a new `ChangeDetectionStrategy.Eager` added as
  the explicit name for the old default-checking behavior (an `ng update` migration rewrites
  existing components with no explicit strategy to `Eager`, so nothing breaks silently)? Verified
  against Angular's own v22 release material before writing this in, per `accuracy.md`.

### 20. Routing — Advanced
- **Scenario** — Lazy loading combined with standalone components — how does it actually work?
- **Core concept** — Route-level providers, revisited in a routing-specific scenario?
- **Core concept** — What are functional guards?
- **Comparison** — `CanActivate` (class-based) vs. functional guards?
- **Core concept** — `CanMatch`?
- **Core concept** — Resolvers, in more depth — what happens if a resolver's Observable never
  completes?
- **Core concept** — What are preloading strategies?
- **Understanding** — How would you build a custom preloading strategy?
- **Understanding** — What are nested routes, and what do they let you express?
- **Understanding** — What is route reuse, and when would you want to prevent it?
- **Scenario** — How would you design routing for a large Angular application?

### 21. Forms — Advanced
- **Scenario** — Reactive forms vs. template-driven forms — which holds up better in a large
  application, and why?
- **Core concept** — What are typed reactive forms?
- **Understanding** — How do you handle a dynamic `FormArray`?
- **Understanding** — What is cross-field validation, and how do you implement it?
- **Understanding** — How does asynchronous validation actually work end-to-end?
- **Core concept** — What is a custom form control?
- **Core concept** — `ControlValueAccessor`?
- **Understanding** — How does `ControlValueAccessor` actually work, mechanically?
- **Scenario** — How would you build a reusable date-picker form control?
- **Understanding** — How do you prevent unnecessary re-renders in a large form?
- **[new] Core concept** — What are Signal Forms — Angular's signal-based form model, stable as
  of Angular v22 (shipped experimental in v21)? Verified current status via web search before
  writing this in.
- **Comparison** — When would you reach for Signal Forms vs. Reactive Forms? (Existing enterprise
  applications still run heavily on Reactive Forms — this isn't a replacement question, it's a
  "which one for this codebase" question.)

### 21b. Accessibility **[gap-hunt, new section]**
Completely absent from the source outline despite being a real, increasingly standard part of a
senior/staff frontend interview generally — same reasoning the React track's own gap-hunt used
for its own Accessibility addition, and explicitly named on this track's own gap-hunt checklist.
Practical/comparison/scenario depth, so Intermediate, not Advanced.
- **[gap-hunt] Understanding** — Does Angular give you any accessibility guarantees for free
  just by using its template syntax?
- **[gap-hunt] Core concept** — How does Angular's CDK support accessibility primitives (focus
  management, live announcements) without pulling in the rest of Angular Material?
- **[gap-hunt] Scenario** — How do you manage focus correctly after a route change, or when a
  modal opens and closes?
- **[gap-hunt] Understanding** — How do dynamic content updates (a toast, a live search-result
  count) need to be announced to a screen reader?
- **[gap-hunt] Scenario** — How would you actually verify an Angular component is accessible —
  automated tooling vs. what only manual keyboard/screen-reader testing catches?

### 22. HTTP Interceptors
- **Core concept** — What is an HTTP interceptor?
- **Comparison** — Functional interceptors vs. class-based interceptors?
- **Understanding** — How do multiple interceptors chain together?
- **Scenario** — Authentication token injection via an interceptor?
- **Scenario** — Global error handling via an interceptor?
- **Scenario** — Request logging via an interceptor?
- **Scenario** — Retry logic via an interceptor?
- **Scenario** — A refresh-token flow implemented via an interceptor?
- **Understanding** — How do you stop an interceptor from recursively intercepting its own
  refresh-token request?
- **Scenario** — How would you implement request-correlation IDs across an interceptor chain?

### 23. State Management
- **Comparison** — Local component state vs. global application state?
- **Comparison** — Signals vs. RxJS for holding state?
- **Understanding** — Signals combined with services — what pattern does that actually form?
- **Scenario** — When is introducing NgRx actually appropriate?
- **Understanding** — What problem does NgRx solve that plain services don't?
- **Core concept** — Store?
- **Core concept** — Actions?
- **Core concept** — Reducers?
- **Core concept** — Selectors?
- **Core concept** — Effects?
- **Comparison** — NgRx vs. plain service-based state?
- **Comparison** — NgRx vs. Signals?
- **Understanding** — How do you avoid over-engineering state management for a problem that
  doesn't need it?

### 24. Performance
- **Understanding** — Why is an Angular application slow, in general terms?
- **Scenario** — How do you diagnose slow rendering?
- **Understanding** — How does `OnPush` help with performance?
- **Core concept** — `trackBy` (and `track` in the new control flow)?
- **Understanding** — How do expensive template expressions hurt performance?
- **Comparison** — Pure vs. impure pipes, from a performance angle specifically?
- **Understanding** — How does lazy loading help performance?
- **Understanding** — How does a preloading strategy help performance?
- **Core concept** — `@defer`, at a practical "how does this help" level?
- **Understanding** — What affects bundle size, and how do you investigate it?
- **Understanding** — How do you profile change detection itself?
- **Scenario** — How do you handle a large list without freezing the UI?
- **Core concept** — What is virtual scrolling?
- **[gap-hunt] Core concept** — What is `NgOptimizedImage`, and what does it actually do for you
  automatically (priority loading, `srcset` generation, warning about layout shift)?
- **Scenario** — How do you investigate a production performance regression?

### 25. Testing
- **Core concept** — What is `TestBed`?
- **Core concept** — What is `ComponentFixture`?
- **Understanding** — How do you test a component?
- **Understanding** — How do you test a service?
- **Understanding** — How do you mock a dependency?
- **Understanding** — How do you test code that calls `HttpClient`?
- **Understanding** — How do you test routing?
- **Understanding** — How do you test a component built around Signals?
- **Understanding** — How do you test a component built around Observables?
- **Comparison** — Unit vs. integration vs. end-to-end testing, specifically for Angular?
- **Understanding** — What should actually be tested, vs. what's a waste of test effort?
- **Understanding** — How do you avoid brittle Angular tests?

## ADVANCED — Internals, architecture & senior/architect questions

### 26. Angular Rendering Internals
- **Understanding** — What actually happens when Angular renders a component?
- **Core concept** — What is the Angular rendering pipeline, at a high level?
- **Understanding** — What happens during template evaluation?
- **Understanding** — How does Angular update DOM bindings once it decides something changed?
- **Understanding** — How does change detection traverse the component tree?
- **Core concept** — What is Ivy?
- **Understanding** — What actually changed with Ivy (vs. the older View Engine)?
- **Understanding** — What's the relationship between a component's template and the code
  Angular's compiler actually generates for it?

### 27. Change Detection Internals
- **Understanding** — How does Zone.js actually trigger Angular's own work?
- **Understanding** — What happens, mechanically, after an asynchronous event fires?
- **Understanding** — How does Angular decide which views actually need checking?
- **Understanding** — What exactly does `OnPush` skip, at the mechanism level?
- **Understanding** — How do Signals notify Angular that something needs to re-render?
- **Understanding** — What is `markForCheck()` actually doing internally?
- **Comparison** — `detectChanges()` vs. `markForCheck()`?
- **Understanding** — What does `detach()` do to a view, mechanically?
- **Scenario** — How would you debug excessive change detection in a real application?
- **Understanding** — What does zoneless Angular change about all of the above?

### 28. Zoneless Angular
- **Core concept** — What does "zoneless Angular" mean?
- **Understanding** — Why remove Zone.js at all?
- **Understanding** — How does Angular know when to render without Zone.js watching everything?
- **Understanding** — How do Signals specifically enable zoneless rendering?
- **Understanding** — What existing code can genuinely break when moving to zoneless?
- **Understanding** — How do third-party libraries that assume Zone.js is present affect a
  zoneless application?
- **Understanding** — What are the real benefits and trade-offs of going zoneless?
- **[new] Core concept** — `provideZonelessChangeDetection()` — the actual provider used to opt
  in, stable since Angular v20.2, and the default for new applications from Angular v21 onward
  (Zone.js is no longer included by default). Verified current status via web search before
  writing this in.

### 29. Advanced RxJS Architecture
- **Scenario** — How do you design a reusable RxJS pipeline meant to be shared across a
  codebase?
- **Core concept** — What is a higher-order Observable?
- **Core concept** — What is multicasting?
- **Comparison** — `share()` vs. `shareReplay()`?
- **Comparison** — Hot vs. cold streams, revisited at an architecture level?
- **Understanding** — What is backpressure, and does RxJS actually solve it?
- **Understanding** — What does cancellation mean at an architectural level, beyond one
  `switchMap`?
- **Understanding** — How do you reason about concurrency across several independent streams?
- **Understanding** — What does an "error boundary" look like inside a stream-based
  architecture?
- **Understanding** — How do you build a custom operator?
- **Scenario** — How do you diagnose a genuinely complex, multi-stage RxJS stream?
- **Understanding** — How do you prevent nested subscriptions from creeping into a codebase?

### 30. Signal Architecture
- **Understanding** — How does Signal dependency tracking actually work under the hood?
- **Comparison** — `computed()` vs. `effect()` — when does reaching for `effect()` become an
  architectural smell?
- **Comparison** — Signal-held state vs. derived state — which should be a Signal at all?
- **Understanding** — How do Signals affect a component's rendering, specifically vs. how
  `@Input` used to?
- **Core concept** — Signal inputs (`input()`)?
- **Core concept** — Signal-based outputs (`output()`)?
- **Core concept** — Model inputs (`model()`)?
- **Scenario** — How would you design a genuinely signal-based application end to end?
- **Understanding** — When should Signals deliberately *not* replace an Observable?
- **[new] Core concept** — The `resource()` API (and its `httpResource()`/`rxResource()`
  entry points) — a signal-based primitive for async data fetching that re-runs automatically
  when a Signal it reads changes, stable as of Angular v22. Verified current status via web
  search before writing this in — logged in this file's Gap-hunt log below since the source
  material never mentions this API surface at all.

### 31. SSR & Hydration
- **Core concept** — What is Angular SSR?
- **Comparison** — CSR vs. SSR?
- **Understanding** — Why use SSR at all?
- **Core concept** — What is hydration?
- **Understanding** — What is a hydration mismatch?
- **Core concept** — What is non-destructive hydration?
- **Core concept** — What is incremental hydration?
- **Understanding** — How does SSR affect SEO?
- **Understanding** — How does SSR affect perceived and actual performance?
- **Understanding** — What code cannot safely execute during SSR?
- **Understanding** — How do browser-only APIs interact with SSR?
- **Scenario** — How would you debug a hydration error in production?

### 32. Deferrable Views
- **Core concept** — What is `@defer`?
- **Understanding** — Why use deferred loading for part of a template?
- **Understanding** — What kinds of content can actually be deferred?
- **Core concept** — `@placeholder`?
- **Core concept** — `@loading`?
- **Core concept** — `@error`?
- **Core concept** — `on idle`?
- **Core concept** — `on viewport`?
- **Understanding** — How does `@defer` affect bundle size, concretely?
- **Scenario** — When would deferring too aggressively actually hurt the user experience?

### 33. Angular Security
- **Understanding** — How does Angular protect against XSS by default?
- **Core concept** — What is Angular's built-in sanitization?
- **Core concept** — What does `DomSanitizer` do?
- **Understanding** — Why is bypassing sanitization genuinely dangerous?
- **Comparison** — XSS vs. CSRF?
- **Comparison** — Authentication vs. authorization?
- **Understanding** — Should a route guard ever be treated as real security?
- **Understanding** — Where should authorization actually be enforced?
- **Scenario** — How should authentication tokens be handled and stored?
- **Understanding** — How do you protect sensitive data on the frontend, given the frontend is
  never truly trusted?

### 34. Large Application Architecture
- **Scenario** — How would you structure a large Angular application?
- **Comparison** — Feature-based vs. layer-based folder structure?
- **Understanding** — What does a "shared module/component" strategy look like in a standalone
  world?
- **Core concept** — Core vs. shared concepts, as an architectural split?
- **Understanding** — How do you prevent circular dependencies in a large codebase?
- **Understanding** — Where should business logic actually live?
- **Comparison** — Component vs. service vs. a dedicated state store — who owns what?
- **Scenario** — How do multiple teams work inside one Angular application without constantly
  colliding?
- **Scenario** — How do you design a reusable internal library?
- **Understanding** — How do you manage cross-cutting concerns (logging, auth, error handling)
  across a large app?
- **Scenario** — How would you organize a large enterprise Angular codebase from scratch?
- **[gap-hunt] Understanding** — What does `ng update` actually do, and what's a sane strategy
  for keeping a large, multi-team enterprise Angular application on a current version instead
  of falling multiple major versions behind?

### 35. Micro Frontends
- **Core concept** — What are micro frontends?
- **Scenario** — When would you actually reach for a micro-frontend architecture?
- **Core concept** — Module federation, in an Angular context?
- **Understanding** — What should genuinely be shared between micro frontends, and what
  shouldn't?
- **Scenario** — How do you manage authentication across independently-deployed micro
  frontends?
- **Understanding** — How do you share Angular's own dependencies across them without
  duplicating the framework several times over?
- **Understanding** — What are the deployment trade-offs of this architecture?
- **Understanding** — What problems does micro-frontend architecture introduce that a monolith
  doesn't have?
- **Scenario** — When is a modular monolith the better call instead?

### 36. Production Scenarios
Particularly important for the senior/architect end of the audience — every bullet here is
already Scenario type by nature, grouped by the same sub-areas as the source material.

**Performance**
- A dashboard renders hundreds of components and has become slow. How do you investigate?
- Change detection appears to run excessively. What do you check?
- A large list is causing UI freezes. What would you do?
- Initial page load is too slow. How do you diagnose it?
- Bundle size has doubled. How do you investigate?
- How would you decide between lazy loading, `@defer`, a preloading strategy, and SSR for a
  given piece of UI?

**RxJS**
- An API search fires on every keystroke. How would you fix it?
- Two API responses arrive out of order. How do you prevent stale data from winning?
- A subscription keeps running after navigation away from the page. How do you find the leak?
- An RxJS stream suddenly stops emitting after one error. Why, and how do you prevent it?
- Five API calls need to run in parallel. Which operator?
- Three API calls must execute strictly in sequence. Which operator?
- A user can click Submit multiple times. How do you prevent duplicate requests?

**Change Detection**
- An `OnPush` component isn't updating. What do you check first?
- A component is rendering far more often than expected. How do you diagnose it?
- A Signal update isn't producing the UI change you expect. What would you inspect?
- A third-party library behaves incorrectly inside a zoneless application. How do you
  investigate?

**State**
- A large application has state scattered across dozens of services. How would you redesign it?
- When would you actually introduce NgRx into this application?
- When would Signals + services genuinely be enough?
- How would you separate server state from UI state?

**Architecture**
- You inherit a 5-year-old Angular application built entirely on `NgModule`s. How would you
  modernize it?
- How would you migrate gradually to standalone components without a big-bang rewrite?
- How would you introduce Signals into an existing app without rewriting it?
- How would you structure Angular for multiple development teams?
- When would you choose a monolith over micro frontends, or vice versa?

**SSR**
- Users see hydration errors after SSR was introduced. What do you investigate?
- The application is fast on the server but slow right after hydration. What could cause that?
- Browser-only code is breaking SSR. How do you handle it?

## Coverage note for Phase 1

Every content group and question from the user's own source outline is represented above,
reorganized into this site's Core concept/Comparison/Understanding/Scenario vocabulary — nothing
from the source was dropped. A handful of bullets were tightened for phrasing consistency with
the rest of the site (never changing what's actually being asked). Several currency details were
verified against Angular's own current documentation before being written in (Signal Forms'
stable status, `provideZonelessChangeDetection()`'s exact name and default status, and the
Angular v22 `OnPush`-by-default change), tagged `[new]`, per [accuracy.md](../../rules/accuracy.md) —
none of these change what the source was already asking, they update *how current* the answer is.

## Gap-hunt log (Phase 2)

Per [gap-hunting.md](../../rules/gap-hunting.md): before treating this taxonomy as complete,
actively asked what a thorough senior/staff-level Angular interview reference would cover that
the source outline — despite explicitly self-auditing for both modern and enterprise Angular —
doesn't mention anywhere. The source is unusually thorough already (36 groups, explicit
modern-vs-enterprise audit instruction, an explicit "don't cap the count" instruction), so this
hunt checked a longer candidate list than usual, expecting a smaller yield than a thinner
source would produce.

**Added (7), each placed in whichever existing group it actually belongs to, or as one new
group where nothing existing fit:**

| Added | Group | Why it's a real gap |
|---|---|---|
| `resource()`/`httpResource()`/`rxResource()` | §30 Signal Architecture | A genuinely new, stable (Angular v22) signal-based async-data primitive; the source discusses Signals and HTTP/RxJS as separate models but never mentions the API that unifies them |
| Content projection (`ng-content`) & `ng-template` | new §2b, folded into §2 Components as additional bullets | A classic, extremely common Angular interview topic (how a component exposes a "slot" for arbitrary child content) with zero mention anywhere in the source |
| `@HostBinding` / `@HostListener` | folded into §4 Directives | The source asks "how do you create a custom directive" but never how a directive actually talks to its host element — this is the mechanism that answers it |
| `@ViewChild`/`@ContentChild` and their timing | folded into §6 Lifecycle | A very common practical gotcha ("why is my `@ViewChild` `undefined` in `ngOnInit`") with a direct, natural connection to the lifecycle-hooks page already there, and no home anywhere in the source |
| `NgOptimizedImage` | folded into §24 Performance | Angular's own built-in image-optimization directive — the source already asks "what does image optimization look like in Angular specifically" (a question this API concretely answers) but never names the actual tool |
| Accessibility (a11y) as its own topic | new §21b, standalone in Intermediate | Explicitly called out by the user's own checklist; a real, increasingly standard senior/staff interview area (same reasoning React's own gap-hunt used for its Accessibility addition) with zero mention in this source |
| `ng update` & breaking-change strategy | folded into §34 Large Application Architecture | A real, senior-level operational question ("how do you keep a large enterprise Angular app on a current version") explicitly named in the user's own checklist, with no existing home |

**Considered and explicitly excluded**, same discipline as what got added:

- **Internationalization (i18n)** — a real Angular feature (`@angular/localize`), but a
  narrower, more niche interview differentiator than the items added above; most Angular
  interviews at this site's audience level don't probe i18n's specific tooling in depth. Noted,
  not added, matching how the React track excluded a similarly narrow i18n question for the same
  reason.
- **WebSockets/real-time data with RxJS** — a real pattern, but it's "RxJS applied to a
  different transport," not a distinct Angular concept; the actual interview-worthy content
  (Subjects, multicasting, backpressure, cancellation) is already covered in §15, §16, and §29.
  Adding a WebSocket-specific page would repeat that content under a new label rather than teach
  something new.
- **Angular Universal, as a name distinct from "Angular SSR"** — Angular Universal *is* Angular's
  SSR implementation; the source and this taxonomy's §31 already cover it under the current,
  correct name. Not a real gap, just a naming point worth confirming — Angular Universal isn't a
  separate thing to add a question about.
- **Environment-specific configuration beyond `InjectionToken`** (e.g. `environment.ts` files) —
  a real Angular CLI convention, but closer to a build-tooling/project-setup detail than an
  interview-differentiating concept; the `InjectionToken`-based configuration question already in
  §12 is the actual interview-relevant version of "how do you configure this per environment."
- **Angular Material/CDK's own architecture** — excluded per this file's own "Scope boundary"
  section above; a separate library's interview territory.

**Nothing else from a broader sweep against "what would a thorough reference cover" turned up a
genuine, additional gap** — the source's own explicit modern-vs-enterprise self-audit already
closed most of the obvious gaps a less thorough source would have left open.
