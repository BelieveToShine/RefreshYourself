/* RefreshYourself — shared site script. Global search + autosuggest. See docs/rules/search.md.
   Reads window.SEARCH_INDEX (set by assets/search-index.js, loaded via <script src> before this
   file) — NOT fetch(), so it works whether the page is opened from disk (file://) or hosted. */

(function () {
  var root = document.body.getAttribute("data-root") || "";
  var input = document.querySelector(".gsearch input");
  var resultsBox = document.querySelector(".gsearch-results");
  var wrap = document.querySelector(".gsearch");
  if (!input || !resultsBox || !wrap) return;

  var activeIndex = -1;
  var currentItems = [];

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
    var icons = { "C#": "🔷", "OOP's": "🧩", ".NET Framework": "🧱", "SQL": "🗄️", "React": "⚛️", "DSA": "🧠" };
    return icons[item.track] || "📄";
  }

  function highlight(title, q) {
    var i = title.toLowerCase().indexOf(q);
    if (i === -1) return title;
    return title.slice(0, i) + "<mark>" + title.slice(i, i + q.length) + "</mark>" + title.slice(i + q.length);
  }

  function render(items, q) {
    resultsBox.innerHTML = "";
    activeIndex = -1;
    currentItems = items;
    if (!q) return;
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
      var crumb = [item.track, item.tier].filter(Boolean).join(" · ");
      row.innerHTML =
        '<span class="gi-icon">' + iconFor(item) + '</span>' +
        '<span class="gi-text">' +
          '<span class="gi-title">' + highlight(item.title, q) + '</span>' +
          '<span class="gi-path">' + (crumb || "RefreshYourself") + '</span>' +
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
    }
    activeIndex = i;
  }

  input.addEventListener("input", function () {
    var q = input.value.trim().toLowerCase();
    if (!q) { render([], ""); return; }
    var scored = getIndex()
      .map(function (item) { return { item: item, score: scoreItem(item, q) }; })
      .filter(function (s) { return s.score > 0; })
      .sort(function (a, b) { return b.score - a.score || a.item.title.localeCompare(b.item.title); })
      .slice(0, 8)
      .map(function (s) { return s.item; });
    render(scored, q);
  });

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

  input.addEventListener("focus", function () { wrap.classList.add("has-focus"); });
  input.addEventListener("blur", function () {
    wrap.classList.remove("has-focus");
    setTimeout(function () { resultsBox.innerHTML = ""; }, 150);
  });
})();

/* "See the code" copy buttons — copies that .code-card's <pre> text, briefly swaps the icon
   for a checkmark. See docs/rules/content-writing.md. */
(function () {
  document.querySelectorAll(".code-card .cc-copy").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var pre = btn.closest(".code-card").querySelector("pre");
      if (!pre || !navigator.clipboard) return;
      navigator.clipboard.writeText(pre.textContent).then(function () {
        var original = btn.innerHTML;
        btn.innerHTML = "✅";
        setTimeout(function () { btn.innerHTML = original; }, 1200);
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

  // location.pathname may or may not carry ".html" depending on the host (a dev server with
  // clean URLs strips it; a plain static host or file:// keeps it) — match either way.
  var currentFile = location.pathname.split("/").pop();
  function isCurrent(file) {
    return file === currentFile || file.replace(/\.html$/, "") === currentFile;
  }

  function esc(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  function itemHtml(item) {
    var active = isCurrent(item.file);
    var dot = item.hot ? '<span class="tn-dot">🔥</span>' : "";
    return (
      '<li class="tn-item">' +
      '<a href="' + item.file + '"' + (active ? ' class="active"' : "") + '>' +
      '<span class="tn-row"><span class="tn-num">' + item.n + '</span>' +
      '<span class="tn-label">' + esc(item.short) + "</span>" + dot + "</span>" +
      '<span class="tn-detail"><b>' + esc(item.title) + "</b> — " + esc(item.tail) + "</span>" +
      "</a></li>"
    );
  }

  function groupHtml(group, isFirst) {
    var hotBadge = group.hot ? '<span class="gn-hot">' + group.hot + " 🔥</span>" : "";
    var hasActive = group.items.some(function (i) { return isCurrent(i.file); });
    return (
      '<details class="tn-group"' + (isFirst || hasActive ? " open" : "") + ">" +
      "<summary>" + esc(group.label) + hotBadge + '<span class="chev">▾</span></summary>' +
      '<ol class="tn-list">' + group.items.map(itemHtml).join("") + "</ol>" +
      "</details>"
    );
  }

  var aside = document.createElement("aside");
  aside.className = "tier-nav";
  aside.setAttribute("aria-label", data.track + " " + data.tier + " topics");
  aside.innerHTML =
    '<div class="tn-head"><span class="tn-pill tn-track">' + esc(data.trackIcon + " " + data.track) +
    '</span><span class="tn-pill tn-tier">' + esc(data.tier) + "</span></div>" +
    data.groups.map(function (g, i) { return groupHtml(g, i === 0); }).join("");

  var topicBody = document.createElement("div");
  topicBody.className = "tn-topicbody";
  while (main.firstChild) topicBody.appendChild(main.firstChild);
  main.appendChild(aside);
  main.appendChild(topicBody);

  document.body.classList.add("has-tier-nav");
})();
