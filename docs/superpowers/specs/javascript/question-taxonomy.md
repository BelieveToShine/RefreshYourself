# JavaScript — Interview Question Taxonomy

**Phase 1 of the 7-phase pipeline** (see [`docs/superpowers/specs/README.md`](../README.md)).
No tier, no priority, no page grouping yet — this file is a faithful transcription of the source
material below, not this session's own invention. **[new]** marks anything added beyond that
source.

## Provenance

Every group and sub-bullet below comes verbatim (or lightly reworded for this site's own
group-naming convention) from the user's own message, which the user stated was checked against
"current interview-prep material and recent developer discussions" before being shared — this
session did not independently verify each individual claim against outside sources the way, say,
DSA's or Azure's own gap-hunts did, because the user had already done that cross-check pass
themselves and asked this session to build from it directly ("I checked current interview-prep
material and recent developer discussions before shaping this"). Per
[`accuracy.md`](../../rules/accuracy.md), no sub-bullet, code example, or claim beyond what's
listed here gets invented independently when the actual pages are written — anything a page
needs beyond this list (a code snippet, a specific browser behavior) has to be well-established,
textbook-standard JavaScript/browser knowledge, same bar as every other track this session built.

The user gave two views of the same plan: a compact ASCII tree (37 leaf groups across
Basic/Intermediate/Advanced) and a detailed numbered breakdown (also 37 groups, 1-37, each with
its own sub-bullets and an inline priority marker). The detailed breakdown is authoritative for
this taxonomy — it has the actual sub-questions, not just group names. Two small reconciliations
between the two views, both resolved in Phase 2 below: the ASCII tree listed "Event Loop
Internals" and "Advanced Functional Patterns" as their own Advanced-tier leaves, but the detailed
breakdown's 12 Advanced groups (26-37) never gave either one its own sub-bullet list — "Event
Loop Internals" content is already inside group 26 (JavaScript Runtime & Execution Model)'s
execution-context/call-stack/heap questions, and "Advanced Functional Patterns" has no
Advanced-specific sub-bullets distinct from group 17 (Higher-Order & Functional JavaScript,
Intermediate). Neither becomes its own page — see Phase 2's dedupe notes.

The user's own governing rule for this track, carried forward verbatim into every Phase 7
dispatch: *"Do not make JavaScript a syntax-reference roadmap. Prioritize mental models and
behavior. Every major concept should include at least one 'What happens?', 'Predict the output',
'Compare these two', or 'How would you solve this in production?' question."*

**"Predict the output" is a cross-cutting question *format*, not its own roadmap page** — the
user explicitly said so ("This should be a cross-cutting interview format, not necessarily a
roadmap topic"). Its example snippets (hoisting/TDZ, reference vs. value, event-loop ordering)
get folded into the diagram/code-card of whichever page already owns that concept (var/let/const,
Scope & Hoisting, Arrays & Objects, Event Loop) rather than becoming a 38th "Predict the Output"
page.

---

## BASIC

### 1. JavaScript Fundamentals — 🔥
- What is JavaScript?
- JavaScript vs. ECMAScript?
- Is JavaScript interpreted or compiled?
- Is JavaScript dynamically typed?
- Is JavaScript single-threaded? What does "single-threaded" actually mean?
- JavaScript in the browser vs. Node.js?
- What is an execution context?
- What is the call stack?
- What is an expression vs. a statement?
- **Interview angle (user's own note):** don't let the answer stop at "JavaScript is
  single-threaded" — the interviewer will usually ask "then how does it handle asynchronous
  work?" next.

### 2. `var` vs. `let` vs. `const` — 🔥🔥
- Function scope vs. block scope
- Redeclaration
- Reassignment
- Hoisting
- Temporal Dead Zone
- Initialization
- `const` with objects
- Loop behavior
- Classic predict-the-output: a `var i` loop with `setTimeout` inside it vs. the same loop with
  `let i` — what prints, and why.

### 3. Data Types & Type Coercion — 🔥🔥
- Primitive vs. reference types
- `string`, `number`, `bigint`, `boolean`, `undefined`, `null`, `symbol`, `object`
- `typeof`, and `typeof null`
- `NaN`, `Number.isNaN()`
- Truthy/falsy
- Implicit vs. explicit conversion
- Interview trap: `[] == false` — why?

### 4. `==` vs. `===` — 🔥
- Loose equality vs. strict equality
- Type coercion in `==`
- `Object.is()`
- `NaN`, `+0` / `-0` edge cases
- When (if ever) should `==` actually be used?

### 5. Functions — 🔥
- Function declaration vs. expression
- Arrow functions
- First-class functions
- Higher-order functions
- Callback functions
- Default parameters
- Rest parameters
- Function return values
- Functions as objects

### 6. Scope & Hoisting — 🔥🔥
- Global scope, function scope, block scope
- Lexical scope, scope chain
- Hoisting — variable hoisting vs. function hoisting
- Temporal Dead Zone
- Key distinction (user's own note): hoisting is not the same thing as "moving code to the top."

### 7. Arrays & Objects — 🔥
- Array vs. object
- Reference behavior, mutation, copying
- Property access, computed properties
- `Object.keys()`, `Object.values()`, `Object.entries()`
- Optional chaining, nullish coalescing

### 8. Destructuring / Spread / Rest — 🔥
- Array destructuring, object destructuring
- Default values, nested destructuring
- Spread syntax, rest parameters
- Spread vs. rest

### 9. Array Methods — 🔥🔥
- Grouped by role, not one page per method (user's own instruction): transformation (`map`),
  filtering (`filter`), reduction (`reduce`), search (`find`, `findIndex`, `some`, `every`),
  iteration (`forEach`), flattening (`flat`, `flatMap`)
- Comparisons: `map()` vs. `forEach()`; `find()` vs. `filter()`; `some()` vs. `every()`;
  `reduce()` — when it's appropriate vs. when it makes code worse

### 10. Modern JavaScript / ES6+ — 🔥
- Grouped modern syntax rather than 20 tiny pages: template literals, arrow functions,
  destructuring, spread/rest, default parameters, optional chaining, nullish coalescing, modules,
  classes, `Map`, `Set`, `WeakMap`, `WeakSet`

### 11. Error Handling — ⭐
- `try`/`catch`/`finally`
- `throw`, `Error` objects, custom errors
- Error propagation
- Async errors, Promise rejection, `unhandledrejection`

---

## INTERMEDIATE

### 12. Closures — 🔥🔥🔥
- What is a closure? How does lexical scope create one?
- Why does the inner function remember variables after the outer one returns?
- Practical use cases: private state, factory functions, memoization, callbacks
- Closures and memory; closures inside loops
- Classic: a `counter()` factory returning an incrementing closure — where is the counted value
  stored after `counter()` itself has already returned?

### 13. `this` / `call` / `apply` / `bind` — 🔥🔥🔥
- What is `this`? Is it determined by where a function is *defined*, or by its call site?
- Method invocation, plain function invocation, constructor invocation
- `call()`, `apply()`, `bind()`
- Arrow function `this` vs. regular function `this`
- Core recall (user's own note): a regular function's `this` depends on how it's called; an
  arrow function's `this` is inherited lexically from where it was defined.

### 14. Prototypes & Prototype Chain — 🔥🔥🔥
- What is a prototype? `[[Prototype]]` vs. the `prototype` property
- Prototype chain, property lookup
- `Object.create()`, `instanceof`
- Constructor functions, inheritance through prototypes
- Prototype pollution
- Needs a strong diagram (user's own note): the chain from an object, up through its prototype,
  its parent prototype, `Object.prototype`, down to `null`.

### 15. Modules — 🔥
- ES modules: `import`/`export`, default vs. named exports
- Dynamic `import()`
- Module scope
- CommonJS vs. ES modules
- Circular dependencies
- Tree-shaking, conceptually

### 16. Promises — 🔥🔥🔥
- What is a Promise? Promise states, `resolve`/`reject`
- `.then()`, `.catch()`, `.finally()`
- Promise chaining, error propagation
- Promise resolution/adoption
- Comparisons: Promise vs. callback; Promise chaining vs. nested callbacks

### 17. `async` / `await` — 🔥🔥🔥
- What does an `async` function return? What does `await` actually do — does it block JS?
- Error handling with `try`/`catch` around `await`
- Sequential vs. concurrent `await`s; returning from async functions; awaiting non-Promise values
- Critical senior question: two sequential `await`s (`const a = await getA(); const b = await
  getB();`) vs. `const [a, b] = await Promise.all([getA(), getB()]);` — why can the second version
  be faster?

### 18. Event Loop — 🔥🔥🔥
- Call stack, Web APIs, task/macrotask queue, microtask queue, the event loop itself
- `setTimeout`, Promise callbacks, `queueMicrotask`
- Rendering relationship, execution order
- Major visual treatment needed (user's own note)
- Classic predict-the-output: `console.log`, `setTimeout(...,0)`, `Promise.resolve().then(...)`,
  another `console.log` — expected order is sync-first, then microtasks, then macrotasks.

### 19. DOM & Browser Events — 🔥
- DOM tree, selecting/creating/removing elements
- Event listeners, the event object
- Event propagation: capturing, target, bubbling
- `preventDefault()`, `stopPropagation()`

### 20. Event Delegation — 🔥
- Why event delegation — a single listener on a parent instead of one per child
- How bubbling makes it work; handling dynamically-added elements
- Performance benefits; when delegation can be problematic

### 21. Fetch / HTTP / `AbortController` — 🔥
- `fetch()`, request/response, HTTP errors vs. network errors, JSON parsing, headers
- Request cancellation via `AbortController`
- Timeout patterns, retry, race conditions

### 22. Classes & Inheritance — ⭐
- `class`, `constructor`, methods, `extends`, `super`
- Getters/setters, static methods, private fields
- Class vs. prototype inheritance
- Important (user's own note): JavaScript classes do not replace the prototype system — they're
  class syntax over JavaScript's existing prototype-based object model.

### 23. Higher-Order & Functional JavaScript — ⭐
- Higher-order functions, pure functions, side effects, immutability
- Function composition, currying, partial application, memoization
- Scope caution (user's own note): don't turn this into a full functional-programming course.

### 24. Iterators & Generators — ⭐
- Iterable, Iterator, `Symbol.iterator`, `next()`
- Generator functions, `yield`
- Lazy evaluation; generator vs. array

### 25. Browser Storage — ⭐
- Cookies, `localStorage`, `sessionStorage`
- IndexedDB, conceptually
- Storage limits, security implications, token-storage considerations

### 26. Testing Fundamentals **[new — gap-hunt addition, see Phase 2]** — ⭐
- What is a unit test in a JavaScript codebase, and what's a test runner/assertion library
  (Jest/Vitest) actually doing?
- `describe`/`it`/`test`, matchers (`expect(...).toBe(...)`)
- Mocking a module or function; testing code that calls `fetch`/a Promise
- Testing async code — why a test needs to `return`/`await` a Promise to actually wait for it

---

## ADVANCED

### 27. JavaScript Runtime & Execution Model — 🔥
- Source code → execution context → call stack → heap → async APIs → event loop, as one picture
- Global execution context vs. function execution context
- Lexical environment; how variables are resolved
- Foundation for everything else in Advanced (user's own note)

### 28. Advanced Async Concurrency — 🔥🔥
- Parallel vs. sequential operations
- `Promise.all`, `Promise.allSettled`, `Promise.race`, `Promise.any` — failure behavior, partial
  failure
- Concurrency limits, promise pools
- Retry, exponential backoff
- Cancellation via `AbortController`

### 29. Promise Combinators — 🔥
- Same four combinators as group 28, but as a dedicated quick-recall comparison rather than
  concurrency *technique* — a table of "resolves when / rejects when" per combinator (user's own
  worked example: `all` resolves when all fulfill, rejects on any rejection; `allSettled` always
  settles; `race` settles on the first settlement of any kind; `any` fulfills on the first
  fulfillment, rejects only if all reject).

### 30. Debounce vs. Throttle — 🔥🔥
- What is debounce? What is throttle? When to use each?
- Implementing debounce; implementing throttle
- Leading vs. trailing execution
- High practical value (user's own note) — implementing one of these live is a common exercise.

### 31. Memory & Garbage Collection — 🔥
- Heap, reachability, garbage collection, mark-and-sweep (conceptually)
- Memory leaks: detached DOM nodes, closures holding retained references, forgotten event
  listeners/timers
- Memory profiling, conceptually
- Senior scenario: an SPA's memory usage keeps growing after navigating between pages — what do
  you investigate?

### 32. Performance & Rendering — 🔥
- Main thread, long tasks
- Layout, paint, composite; forced synchronous layout; reflow/recalculation
- Rendering bottlenecks; large bundles, code splitting, lazy loading
- Performance profiling, conceptually
- Senior scenario: the page feels slow even though API responses are fast — where do you look?

### 33. Security — 🔥
- XSS, CSRF, same-origin policy, CORS, CSP, clickjacking
- Prototype pollution (as a security concern, distinct from group 14's mechanics)
- Secure token handling
- DOM-based XSS; `innerHTML` vs. safer DOM APIs

### 34. Production JavaScript Scenarios — 🔥
- Performance: a page takes 5 seconds to become interactive — how do you investigate?
- Memory: memory keeps growing every time a modal opens/closes — what could cause it?
- Async: 5 APIs need to run, but only 3 concurrently — how would you implement that?
- Race condition: a fast typist's search box shows an older response overwriting a newer one —
  how do you fix it?
- Cancellation: a user navigates away while an expensive request is in flight — what happens?
- Event handling: 10,000 list items — do you attach 10,000 click handlers?
- Architecture: how would you structure a large JS app so different teams work independently?
- This is the page that makes the roadmap useful past junior/mid interviews (user's own note).

### 35. Web Workers — ⭐
- Main thread vs. worker; why use one — CPU-heavy work off the main thread
- `postMessage`, structured cloning, transferable objects
- Worker limitations

### 36. Service Workers — ⭐
- What is a service worker? Lifecycle, cache, offline support, background behavior
- Service Worker vs. Web Worker
- PWA concepts, at a high level — don't go deeper than the target audience needs (user's own
  note)

### 37. Polyfills & Transpilation — ⭐
- What is a polyfill? What is transpilation (Babel)?
- Browser compatibility, feature detection
- Polyfill vs. transpilation; bundle-size implications
- "Implement `map`/`bind`/`Promise.all` yourself" sits here as a coding exercise, per the user's
  own note.

### 38. Proxy & Reflect — 🧠 *(user's own marker: ○ Deep Dive)*
- `Proxy`, `Reflect`
- Intercepting property access; `get`/`set` traps
- Validation, reactive systems, metaprogramming
- Useful for understanding how frameworks build reactivity, not a Must-Know topic on its own
  (user's own note).

---

## Coverage note for Phase 2

All 37 of the user's own numbered groups are represented above, faithfully, with one addition
(group 26, Testing Fundamentals) and no removals. See [`roadmap.md`](roadmap.md) for the Phase 2
dedupe/reconciliation notes (the ASCII-tree vs. detailed-list mismatch, and why "Predict the
Output" isn't its own page) and the full Phase 3-6 grouping/tiering/priority/page-table work.
