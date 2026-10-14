/* RefreshYourself — shared site script. Global search + autosuggest. See docs/rules/search.md.
   Reads window.SEARCH_INDEX (set by assets/search-index.js, loaded via <script src> before this
   file) — NOT fetch(), so it works whether the page is opened from disk (file://) or hosted. */

/* Shared HTML escaper — every string that goes into innerHTML (titles, labels) passes through it. */
function esc(s) {
  return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

(function () {
  var root = document.body.getAttribute("data-root") || "";
  var input = document.querySelector(".gsearch input");
  var resultsBox = document.querySelector(".gsearch-results");
  var wrap = document.querySelector(".gsearch");
  if (!input || !resultsBox || !wrap) return;

  var activeIndex = -1;
  var currentItems = [];
  var blurTimer = null;

  // Combobox ARIA — the markup only ships a plain <input> + role="listbox" div, so wire the rest here.
  if (!resultsBox.id) resultsBox.id = "gsearch-results";
  input.setAttribute("role", "combobox");
  input.setAttribute("aria-autocomplete", "list");
  input.setAttribute("aria-expanded", "false");
  input.setAttribute("aria-controls", resultsBox.id);
  input.setAttribute("aria-haspopup", "listbox");

  function getIndex() {
    return window.SEARCH_INDEX || [];
  }

  // Substring match anywhere in the word — start, middle, or end all count.
  function scoreItem(item, q) {
    var title = item.title.toLowerCase();
    var track = (item.track || "").toLowerCase();
    var tier = (item.tier || "").toLowerCase();
    var kw = (item.keywords || "").toLowerCase();
    if (title.indexOf(q) === 0) return 5;               // title starts with query
    if (title.indexOf(q) > -1) return 4;                // query anywhere in title
    if (track.indexOf(q) > -1 || tier.indexOf(q) > -1) return 3; // matches the track/tier name
    if (kw.split(" ").some(function (w) { return w.indexOf(q) === 0; })) return 2; // keyword starts with query
    if (kw.indexOf(q) > -1) return 1;                   // query anywhere in keywords
    return 0;
  }

  function iconFor(item) {
    var icons = { "C#": "🔷", "LINQ": "🔗", "OOP": "🧩", ".NET": "🧱", "Web API": "🔌", "EF Core": "🗃️", "SQL": "🗄️", "Azure": "☁️", "AWS": "☁️", "AI": "🤖", "React": "⚛️", "Angular": "🅰️", "DSA": "🧠", "Python": "🐍", "JavaScript": "⚡", "HTML & CSS": "🎨", "Java": "☕" };
    return icons[item.track] || "📄";
  }

  function highlight(title, q) {
    var i = title.toLowerCase().indexOf(q);
    if (i === -1) return esc(title);
    return esc(title.slice(0, i)) + "<mark>" + esc(title.slice(i, i + q.length)) + "</mark>" + esc(title.slice(i + q.length));
  }

  function clearResults() {
    resultsBox.innerHTML = "";
    activeIndex = -1;
    currentItems = [];
    input.setAttribute("aria-expanded", "false");
    input.removeAttribute("aria-activedescendant");
  }

  function render(items, q) {
    clearResults();
    currentItems = items;
    if (!q) return;
    input.setAttribute("aria-expanded", "true");
    if (items.length === 0) {
      var empty = document.createElement("div");
      empty.className = "gsearch-empty";
      empty.textContent = "No topic found for “" + q + "” yet.";
      resultsBox.appendChild(empty);
      return;
    }
    items.forEach(function (item, i) {
      var row = document.createElement("div");
      row.className = "gsearch-item";
      row.setAttribute("role", "option");
      row.dataset.index = i;
      row.id = "gsearch-opt-" + i;
      var crumb = [item.track, item.tier].filter(Boolean).join(" · ");
      row.innerHTML =
        '<span class="gi-icon">' + iconFor(item) + '</span>' +
        '<span class="gi-text">' +
          '<span class="gi-title">' + highlight(item.title, q) + '</span>' +
          '<span class="gi-path">' + esc(crumb || "RefreshYourself") + '</span>' +
        '</span>';
      row.addEventListener("mousedown", function (e) {
        e.preventDefault();
        goTo(item);
      });
      resultsBox.appendChild(row);
    });
  }

  function goTo(item) {
    window.location.href = root + item.path;
  }

  function setActive(i) {
    var rows = resultsBox.querySelectorAll(".gsearch-item");
    rows.forEach(function (r) { r.classList.remove("active"); });
    if (rows[i]) {
      rows[i].classList.add("active");
      rows[i].scrollIntoView({ block: "nearest" });
      input.setAttribute("aria-activedescendant", rows[i].id);
    } else {
      input.removeAttribute("aria-activedescendant");
    }
    activeIndex = i;
  }

  function runQuery() {
    var q = input.value.trim().toLowerCase();
    if (!q) { render([], ""); return; }
    var scored = getIndex()
      .map(function (item) { return { item: item, score: scoreItem(item, q) }; })
      .filter(function (s) { return s.score > 0; })
      .sort(function (a, b) { return b.score - a.score || a.item.title.localeCompare(b.item.title); })
      .slice(0, 8)
      .map(function (s) { return s.item; });
    render(scored, q);
  }

  input.addEventListener("input", runQuery);

  input.addEventListener("keydown", function (e) {
    var rows = resultsBox.querySelectorAll(".gsearch-item");
    if (e.key === "ArrowDown") {
      e.preventDefault();
      if (rows.length) setActive((activeIndex + 1) % rows.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (rows.length) setActive((activeIndex - 1 + rows.length) % rows.length);
    } else if (e.key === "Enter") {
      if (activeIndex > -1 && currentItems[activeIndex]) {
        goTo(currentItems[activeIndex]);
      } else if (currentItems[0]) {
        goTo(currentItems[0]);
      }
    } else if (e.key === "Escape") {
      render([], "");
      input.blur();
    }
  });

  input.addEventListener("focus", function () {
    wrap.classList.add("has-focus");
    clearTimeout(blurTimer);
    if (input.value.trim()) runQuery();   // refocus with text still there -> show results again
  });
  input.addEventListener("blur", function () {
    wrap.classList.remove("has-focus");
    // Drop the items immediately so Enter can never act on stale rows; the DOM clear is delayed
    // so a click on a result still lands (its mousedown also preventDefaults the blur).
    currentItems = [];
    activeIndex = -1;
    clearTimeout(blurTimer);
    blurTimer = setTimeout(function () {
      if (document.activeElement !== input) clearResults();
    }, 150);
  });

  // "/" focuses search (the badge in the input advertises it) — ignored while typing elsewhere.
  document.addEventListener("keydown", function (e) {
    if (e.key !== "/" || e.ctrlKey || e.metaKey || e.altKey) return;
    var t = e.target;
    var tag = t && t.tagName;
    if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT" || (t && t.isContentEditable)) return;
    e.preventDefault();
    input.focus();
  });
})();

/* "See the code" copy buttons — copies that .code-card's <pre> text, briefly swaps the icon
   for a checkmark. See docs/rules/content-writing.md. */
(function () {
  // Fallback for http:// and file:// pages, where navigator.clipboard is unavailable.
  function legacyCopy(text) {
    var ta = document.createElement("textarea");
    ta.value = text;
    ta.setAttribute("readonly", "");
    ta.style.position = "fixed";
    ta.style.top = "-1000px";
    document.body.appendChild(ta);
    ta.select();
    var ok = false;
    try { ok = document.execCommand("copy"); } catch (e) { ok = false; }
    document.body.removeChild(ta);
    return ok;
  }

  function copyText(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      return navigator.clipboard.writeText(text).then(
        function () { return true; },
        function () { return legacyCopy(text); }
      );
    }
    return Promise.resolve(legacyCopy(text));
  }

  document.querySelectorAll(".code-card .cc-copy").forEach(function (btn) {
    var originalHtml = btn.innerHTML;
    var originalLabel = btn.getAttribute("aria-label");
    var timer = null;
    btn.addEventListener("click", function () {
      var pre = btn.closest(".code-card").querySelector("pre");
      if (!pre) return;
      copyText(pre.textContent).then(function (ok) {
        clearTimeout(timer);
        btn.innerHTML = ok ? "✅" : "⚠️";
        btn.setAttribute("aria-label", ok ? "Copied" : "Copy failed");
        timer = setTimeout(function () {
          btn.innerHTML = originalHtml;
          if (originalLabel === null) btn.removeAttribute("aria-label");
          else btn.setAttribute("aria-label", originalLabel);
        }, 1200);
      });
    });
  });
})();

/* Sticky bottom Prev/Next bar — built from the page's own .pager block, so Prev/Next stay
   reachable while scrolling without a second copy of the links baked into every page's HTML.
   See docs/rules/content-structure.md. */
(function () {
  var pager = document.querySelector(".pager");
  if (!pager) return;

  var prevA = pager.querySelector(".side.prev a");
  var nextA = pager.querySelector(".side.next a");
  var indexA = pager.querySelector(".to-index");
  if (!prevA && !nextA) return;

  function cleanTitle(text) {
    return text.replace(/^\s*←\s*/, "").replace(/\s*→\s*$/, "").trim();
  }

  function sideHtml(a, cls, arrowFirst) {
    if (!a) return '<span class="fp-side ' + cls + ' fp-empty"></span>';
    var arrow = '<span class="fp-arrow">' + (arrowFirst ? "←" : "→") + "</span>";
    var text =
      '<span class="fp-text"><span class="fp-tag">' +
      (arrowFirst ? "Prev" : "Next") +
      '</span><span class="fp-title">' +
      cleanTitle(a.textContent) +
      "</span></span>";
    return (
      '<a class="fp-side ' +
      cls +
      '" href="' +
      a.getAttribute("href") +
      '">' +
      (arrowFirst ? arrow + text : text + arrow) +
      "</a>"
    );
  }

  var bar = document.createElement("nav");
  bar.className = "fixed-pager";
  bar.setAttribute("aria-label", "Topic navigation");
  bar.innerHTML =
    sideHtml(prevA, "fp-prev", true) +
    (indexA ? '<a class="fp-mid" href="' + indexA.getAttribute("href") + '">↑ Index</a>' : "") +
    sideHtml(nextA, "fp-next", false);

  document.body.appendChild(bar);
  document.body.classList.add("has-fixed-pager");
})();

/* Persistent left "tier navigation" sidebar — topic-to-topic side menu for the current
   track+tier, built from window.NAV_INDEX (assets/nav-index.js). See
   docs/rules/tier-navigation.md for the full spec and the reasoning behind it.

   Zero markup per topic page beyond one data-tier-key attribute on <body> — same "data
   drives the chrome" pattern as the fixed bottom pager above. Only runs on an actual topic
   page (one with a .pager); a tier's index.html is already the full menu, so it's skipped
   there even if a future page accidentally carries the attribute. Desktop only — see the
   max-width:960px rule in style.css; mobile keeps using the fixed bottom pager instead. */
(function () {
  var tierKey = document.body.getAttribute("data-tier-key");
  var data = tierKey && window.NAV_INDEX && window.NAV_INDEX[tierKey];
  var main = document.querySelector("main.wrap");
  var pager = document.querySelector(".pager");
  if (!data || !main || !pager) return;
  var root = document.body.getAttribute("data-root") || "";

  // location.pathname may or may not carry ".html" depending on the host (a dev server with
  // clean URLs strips it; a plain static host or file:// keeps it) — match either way.
  var currentFile = location.pathname.split("/").pop();
  function isCurrent(file) {
    return file === currentFile || file.replace(/\.html$/, "") === currentFile;
  }

  // Which groups are expanded is remembered per tier (sessionStorage, cleared when the tab
  // closes) so navigating between topics never resets a group the user opened or closed by
  // hand — one tier's memory is keyed separately from every other tier's, so working on C#
  // Basic in one tab and Azure Basic in another never overrides each other. Until the user
  // manually toggles a group for the first time in this tier, nothing is stored yet and a
  // sensible default applies (first group open, plus whichever group holds the current page);
  // the moment they toggle anything, that exact open/closed layout is saved and reused verbatim
  // on every later page — never re-computed from "which item is active" again.
  var storeKey = "tn-open:" + tierKey;
  var stored = {};
  try { stored = JSON.parse(sessionStorage.getItem(storeKey) || "{}"); } catch (e) { stored = {}; }

  function itemHtml(item) {
    var active = isCurrent(item.file);
    var dot = item.priority ? '<span class="tn-dot">' + item.priority + "</span>" : "";
    return (
      '<li class="tn-item">' +
      '<a href="' + esc(item.file) + '"' + (active ? ' class="active" aria-current="page"' : "") + '>' +
      '<span class="tn-row"><span class="tn-num">' + item.n + '</span>' +
      '<span class="tn-label">' + esc(item.short) + "</span>" + dot + "</span>" +
      '<span class="tn-detail"><b>' + esc(item.title) + "</b> — " + esc(item.tail) + "</span>" +
      "</a></li>"
    );
  }

  function groupOpen(group, isFirst) {
    if (Object.prototype.hasOwnProperty.call(stored, group.label)) return stored[group.label];
    var hasActive = group.items.some(function (i) { return isCurrent(i.file); });
    return isFirst || hasActive;
  }

  function groupHtml(group, isFirst) {
    var mustKnow = group.items.filter(function (i) { return i.priority === "🔥"; }).length;
    var hotBadge = mustKnow ? '<span class="gn-hot">' + mustKnow + " 🔥</span>" : "";
    var browseAll = group.isScenario
      ? '<li class="tn-item tn-item-all"><a href="' + esc(root) + 'scenarios/index.html">🎯 See all 75 in the Scenario Bank →</a></li>'
      : "";
    return (
      '<details class="tn-group' + (group.isScenario ? " tn-group-scenario" : "") + '"' +
        (groupOpen(group, isFirst) ? " open" : "") + ">" +
      "<summary>" + esc(group.label) + hotBadge + '<span class="chev">▾</span></summary>' +
      '<ol class="tn-list">' + group.items.map(itemHtml).join("") + browseAll + "</ol>" +
      "</details>"
    );
  }

  // "🎯 Scenario Bank" — a separate, leading group gathering every real production-scenario
  // question already in THIS tier (flagged `scenario:true` on its nav-index item), shown only
  // when the page the reader is actually on is itself one of those scenario questions. Someone
  // who clicked in from scenarios/index.html should see scenario siblings first, not the tier's
  // full mixed topic list — see docs/rules/scenario-bank.md.
  var scenarioItems = [];
  data.groups.forEach(function (g) {
    g.items.forEach(function (i) { if (i.scenario) scenarioItems.push(i); });
  });
  var showScenarioGroup = scenarioItems.length > 0 && scenarioItems.some(function (i) { return isCurrent(i.file); });
  var renderGroups = showScenarioGroup
    ? [{ label: "🎯 Scenario Bank", items: scenarioItems, isScenario: true }].concat(data.groups)
    : data.groups;

  var aside = document.createElement("aside");
  aside.className = "tier-nav";
  aside.setAttribute("role", "navigation");
  aside.setAttribute("aria-label", data.track + " " + data.tier + " topics");
  aside.innerHTML =
    '<div class="tn-head"><span class="tn-pill tn-track">' + esc(data.trackIcon + " " + data.track) +
    '</span><span class="tn-pill tn-tier">' + esc(data.tier) + "</span></div>" +
    renderGroups.map(function (g, i) { return groupHtml(g, i === 0); }).join("");

  var topicBody = document.createElement("div");
  topicBody.className = "tn-topicbody";
  while (main.firstChild) topicBody.appendChild(main.firstChild);
  // Narrow screens (<=960px): the rail is hidden by CSS, so offer the same list behind a
  // "Topics in this tier" toggle button instead of leaving tablets/phones with only the pager.
  aside.id = "tier-nav-panel";
  var toggle = document.createElement("button");
  toggle.type = "button";
  toggle.className = "tn-toggle";
  toggle.setAttribute("aria-expanded", "false");
  toggle.setAttribute("aria-controls", "tier-nav-panel");
  toggle.innerHTML = (showScenarioGroup ? "☰ 🎯 Scenario Bank + topics in this tier " : "☰ Topics in this tier ") +
    "<span class=\"tn-toggle-sub\">" + esc(data.track + " · " + data.tier) + "</span>";
  toggle.addEventListener("click", function () {
    var open = document.body.classList.toggle("tn-open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  });
  main.appendChild(toggle);
  main.appendChild(aside);
  main.appendChild(topicBody);

  // Persist the exact open/closed state of every group the instant the user toggles any one
  // of them — a "toggle" event on <details> doesn't bubble, so each group needs its own
  // listener rather than one delegated on the sidebar.
  var groupEls = aside.querySelectorAll(".tn-group");
  function saveState() {
    var state = {};
    groupEls.forEach(function (el, i) { state[renderGroups[i].label] = el.open; });
    try { sessionStorage.setItem(storeKey, JSON.stringify(state)); } catch (e) {}
  }
  groupEls.forEach(function (el) { el.addEventListener("toggle", saveState); });

  document.body.classList.add("has-tier-nav");
})();

/* One-level "Back" button in the crumb bar. See docs/rules/back-navigation.md for the full
   spec. Short version: clicking any real internal link (never a search result, never Back
   itself) tags the outgoing href with where to come back to; the destination page reads that
   tag once, shows a Back button for it, then strips it from the URL — so Back never chains
   past one hop, and a page reached BY Back never shows its own Back button. If the link that
   was clicked lived inside a roadmap concept-cluster or a tier's question group, Back also
   re-opens and scrolls to that exact group instead of landing on a fully collapsed page. */
(function () {
  var BFROM = "bfrom", BLABEL = "bt", BOPEN = "bopen";
  var GROUP_SELECTOR = ".roadmap-tier, .qgroup";

  function cleanUrl(url) {
    var hashSplit = url.split("#");
    var hash = hashSplit[1] ? "#" + hashSplit[1] : "";
    var pathSplit = hashSplit[0].split("?");
    var params = new URLSearchParams(pathSplit[1] || "");
    params.delete(BFROM);
    params.delete(BLABEL);
    params.delete(BOPEN);
    var qs = params.toString();
    return pathSplit[0] + (qs ? "?" + qs : "") + hash;
  }

  // Append key=value to a URL's query string, BEFORE any #hash (a param after the hash is never
  // sent to the page and would corrupt the anchor).
  function addParam(url, kv) {
    var h = url.indexOf("#");
    var base = h > -1 ? url.slice(0, h) : url;
    var hash = h > -1 ? url.slice(h) : "";
    return base + (base.indexOf("?") > -1 ? "&" : "?") + kv + hash;
  }

  function reducedMotion() {
    return !!(window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }

  function shortLabel() {
    var first = (document.title || "").split(" — ")[0].trim();
    return first || "";
  }

  // ---- render a Back button here if we arrived via a tagged link ----
  var crumbs = document.querySelector("nav.crumbs");
  var incoming = new URLSearchParams(location.search);
  var backHref = incoming.get(BFROM);
  var backLabel = incoming.get(BLABEL);

  if (crumbs && backHref) {
    var btn = document.createElement("a");
    btn.className = "crumb-back";
    btn.href = backHref;
    var title = backLabel ? "Back to " + backLabel : "Back";
    btn.setAttribute("aria-label", title);
    btn.title = title;
    btn.innerHTML = '<span class="cb-arrow">←</span><span class="cb-text">Back</span>';
    crumbs.appendChild(btn);
  }

  // ---- re-open + scroll to the group this page's own topic row was clicked from ----
  var openIdx = incoming.get(BOPEN);
  if (openIdx !== null) {
    var groups = document.querySelectorAll(GROUP_SELECTOR);
    var n = parseInt(openIdx, 10);
    var target = isNaN(n) ? null : groups[n];
    if (target) {
      target.open = true;
      setTimeout(function () {
        target.scrollIntoView({ block: "center", behavior: reducedMotion() ? "auto" : "smooth" });
      }, 50);
    }
  }

  // Strip our own tracking params so a reload never re-shows Back, and so this page's own
  // outgoing links (below) start tagging from a clean URL rather than compounding them.
  if (backHref !== null || openIdx !== null) {
    history.replaceState(null, "", cleanUrl(location.pathname + location.search + location.hash));
  }

  // ---- tag outgoing internal links with where to come back to ----
  document.addEventListener(
    "click",
    function (e) {
      if (e.button !== 0 || e.ctrlKey || e.metaKey || e.shiftKey || e.altKey) return;  // new tab/window clicks: leave alone
      var a = e.target.closest && e.target.closest("a[href]");
      if (!a || a.classList.contains("crumb-back") || a.closest(".gsearch-results")) return;
      var href = a.getAttribute("href");
      if (!href || href.charAt(0) === "#" || /^[a-z][a-z0-9+.-]*:/i.test(href) || a.target === "_blank") return;

      var returnPath = cleanUrl(location.pathname + location.search + location.hash);
      var group = a.closest(GROUP_SELECTOR);
      if (group) {
        var groups = Array.prototype.slice.call(document.querySelectorAll(GROUP_SELECTOR));
        var idx = groups.indexOf(group);
        if (idx > -1) returnPath = addParam(returnPath, BOPEN + "=" + idx);
      }

      // Tag only for the navigation this click starts, then put the original href back so the
      // link never keeps a stale tag (copy-link, later middle-click, bfcache restore).
      var tagged = addParam(
        addParam(href, BFROM + "=" + encodeURIComponent(returnPath)),
        BLABEL + "=" + encodeURIComponent(shortLabel())
      );
      a.setAttribute("href", tagged);
      setTimeout(function () { a.setAttribute("href", href); }, 0);
    },
    true
  );
})();

/* Visited-page tracking (localStorage, client-side only — no account, no server). A real topic
   page (one with a .pager) marks itself visited under "<data-tier-key>/<file, no .html>" —
   NOT via location.href resolution, which a dev server's "clean URL" rewriting can silently
   break (an index.html request can come back as e.g. "/csharp/basic" with no trailing slash,
   which then resolves a same-folder "1.html" link to the wrong parent folder entirely). Every
   tier index.html now carries the same data-tier-key attribute topic pages already had (added
   by scripts/add-tier-key-to-index.js) specifically so this check never needs location.href at
   all: tier-key + the link's own literal href (always a same-folder "N.html") is the exact key
   the target page marked itself under. Placed last in this file so the paint pass always runs
   after the tier-nav sidebar IIFE above has finished building its markup. */
(function () {
  var KEY = "ry-visited";
  var tierKey = document.body.getAttribute("data-tier-key");
  if (!tierKey) return;

  function readVisited() {
    try { return JSON.parse(localStorage.getItem(KEY) || "{}"); } catch (e) { return {}; }
  }

  function stripExt(file) { return file.replace(/\.html$/, ""); }

  if (document.querySelector(".pager")) {
    var file = stripExt(location.pathname.split("/").pop() || "");
    if (file) {
      var visited = readVisited();
      var selfKey = tierKey + "/" + file;
      if (!visited[selfKey]) {
        visited[selfKey] = 1;
        try { localStorage.setItem(KEY, JSON.stringify(visited)); } catch (e) {}
      }
    }
  }

  var visitedMap = readVisited();
  if (Object.keys(visitedMap).length) {
    document.querySelectorAll(".topic-row a[href], .tn-item a[href]").forEach(function (a) {
      var href = a.getAttribute("href") || "";
      if (!href || href.indexOf("/") > -1 || href.indexOf(":") > -1) return; // skip cross-folder links (e.g. the Scenario Bank "see all")
      var li = visitedMap[tierKey + "/" + stripExt(href)] && a.closest("li");
      if (li) li.classList.add("visited");
    });
  }
})();

/* "My List" — a personal, localStorage-only save list. Same data source as the visited-tracking
   IIFE above (window.NAV_INDEX, keyed by data-tier-key), so this needs no new per-page markup
   either: one toggle button on a topic page's own hero, and one small toggle icon on every
   .topic-row (tier index) / .tn-item (tier-nav sidebar) row, everywhere that data is available.
   See docs/rules/my-list.md for the full spec (storage shape, every call site, mylist.html). */
(function () {
  var KEY = "ry-mylist";
  var tierKey = document.body.getAttribute("data-tier-key");
  var root = document.body.getAttribute("data-root") || "";
  if (!tierKey || !window.NAV_INDEX || !window.NAV_INDEX[tierKey]) return;
  var data = window.NAV_INDEX[tierKey];

  function readList() {
    try { return JSON.parse(localStorage.getItem(KEY) || "{}"); } catch (e) { return {}; }
  }
  function writeList(list) {
    try { localStorage.setItem(KEY, JSON.stringify(list)); } catch (e) {}
  }
  function stripExt(file) { return file.replace(/\.html$/, ""); }

  // One lookup, by file (no extension), across every group in this tier.
  var itemsByFile = {};
  data.groups.forEach(function (g) {
    g.items.forEach(function (it) { itemsByFile[stripExt(it.file)] = it; });
  });

  function entryFor(file) {
    var it = itemsByFile[file];
    if (!it) return null;
    return {
      path: tierKey + "/" + file + ".html",
      title: it.title,
      tail: it.tail,
      track: data.track,
      trackIcon: data.trackIcon,
      tier: data.tier,
      priority: it.priority || "",
      addedAt: Date.now()
    };
  }

  function mylistKey(file) { return tierKey + "/" + file; }

  function toggle(file) {
    var list = readList();
    var k = mylistKey(file);
    if (list[k]) {
      delete list[k];
    } else {
      var entry = entryFor(file);
      if (!entry) return null;
      list[k] = entry;
    }
    writeList(list);
    return !!list[k];
  }

  // ---- small toggle icon on every .topic-row / .tn-item row ----
  var list = readList();
  document.querySelectorAll(".topic-row, .tn-item").forEach(function (li) {
    var a = li.querySelector("a[href]");
    var href = a && a.getAttribute("href");
    if (!href || href.indexOf("/") > -1 || href.indexOf(":") > -1) return;
    var file = stripExt(href);
    if (!itemsByFile[file]) return;
    var saved = !!list[mylistKey(file)];
    var btn = document.createElement("button");
    btn.type = "button";
    btn.className = "ml-rowbtn" + (saved ? " saved" : "");
    btn.setAttribute("aria-label", saved ? "Remove from My List" : "Add to My List");
    btn.title = saved ? "Remove from My List" : "Add to My List";
    btn.textContent = saved ? "★" : "☆";
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      var nowSaved = toggle(file);
      btn.classList.toggle("saved", nowSaved);
      btn.textContent = nowSaved ? "★" : "☆";
      btn.title = nowSaved ? "Remove from My List" : "Add to My List";
      btn.setAttribute("aria-label", btn.title);
    });
    // .topic-row (tier index) ends with a .badge — insert before it so flex layout reserves
    // room naturally. .tn-item (sidebar) has no such sibling — append and let CSS position it
    // in the padding gutter :has() reserves on that row's <a> (see style.css).
    var badge = li.querySelector(".badge");
    if (badge) li.insertBefore(btn, badge);
    else li.appendChild(btn);
  });

  // ---- one prominent toggle button on a topic page's own hero ----
  var hero = document.querySelector(".hero");
  if (document.querySelector(".pager") && hero) {
    var currentFile = stripExt(location.pathname.split("/").pop() || "");
    if (itemsByFile[currentFile]) {
      var heroSaved = !!list[mylistKey(currentFile)];
      var heroBtn = document.createElement("button");
      heroBtn.type = "button";
      function heroLabel(s) { return s ? "✓ In My List — remove" : "⭐ Add to My List"; }
      heroBtn.className = "ml-herobtn" + (heroSaved ? " saved" : "");
      heroBtn.textContent = heroLabel(heroSaved);
      heroBtn.addEventListener("click", function () {
        var nowSaved = toggle(currentFile);
        heroBtn.classList.toggle("saved", nowSaved);
        heroBtn.textContent = heroLabel(nowSaved);
      });
      hero.appendChild(heroBtn);
    }
  }
})();

/* My List tile's live "N saved" count on the homepage — index.html only (the tile links to
   mylist.html either way; this just keeps the number honest without a page reload). */
(function () {
  var countEl = document.querySelector(".mylist-count");
  if (!countEl) return;
  var n = 0;
  try { n = Object.keys(JSON.parse(localStorage.getItem("ry-mylist") || "{}")).length; } catch (e) {}
  countEl.textContent = n === 1 ? "1 saved" : n + " saved";
})();
