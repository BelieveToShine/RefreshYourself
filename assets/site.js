/* RefreshYourself — shared site script. Global search + autosuggest. See docs/rules/search.md. */

(function () {
  var root = document.body.getAttribute("data-root") || "";
  var input = document.querySelector(".gsearch input");
  var resultsBox = document.querySelector(".gsearch-results");
  var wrap = document.querySelector(".gsearch");
  if (!input || !resultsBox || !wrap) return;

  var index = null;
  var activeIndex = -1;
  var currentItems = [];

  function loadIndex() {
    if (index) return Promise.resolve(index);
    return fetch(root + "assets/search-index.json")
      .then(function (r) { return r.json(); })
      .then(function (data) { index = data; return data; })
      .catch(function () { index = []; return []; });
  }

  function scoreItem(item, q) {
    var title = item.title.toLowerCase();
    var track = (item.track || "").toLowerCase();
    var tier = (item.tier || "").toLowerCase();
    var kw = (item.keywords || "").toLowerCase();
    if (title.indexOf(q) === 0) return 4;
    if (title.indexOf(q) > -1) return 3;
    if (track.indexOf(q) === 0 || tier.indexOf(q) === 0) return 2.5;
    if (kw.split(" ").some(function (w) { return w.indexOf(q) === 0; })) return 2;
    if (track.indexOf(q) > -1 || tier.indexOf(q) > -1 || kw.indexOf(q) > -1) return 1;
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
    loadIndex().then(function (data) {
      var scored = data
        .map(function (item) { return { item: item, score: scoreItem(item, q) }; })
        .filter(function (s) { return s.score > 0; })
        .sort(function (a, b) { return b.score - a.score || a.item.title.localeCompare(b.item.title); })
        .slice(0, 8)
        .map(function (s) { return s.item; });
      render(scored, q);
    });
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
