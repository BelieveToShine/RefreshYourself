/* RefreshYourself — My List page renderer. Reads localStorage only (same "ry-mylist" key
   assets/site.js writes to from every topic page / tier-index row / tier-nav row), groups by
   track, and renders entirely client-side — the whole point is this page never goes stale and
   never needs a build step: whatever is in localStorage right now is exactly what's rendered.
   See docs/rules/my-list.md. */
(function () {
  var KEY = "ry-mylist";
  var body = document.getElementById("mylist-body");
  if (!body) return;

  // Same track display order as the homepage tile grid / scripts/build-quickstart.js, so a
  // track with items always lands in a familiar place rather than shuffling by insertion order.
  var TRACK_ORDER = ["C#", "LINQ", "OOP", ".NET / ASP.NET Core", "Web API", "EF Core", "SQL",
    "Azure", "AWS", "HTML & CSS", "JavaScript", "React", "Angular", "Vue.js", "Next.js",
    "Python", "Java", "DSA", "AI", "Design Patterns"];
  var TRACK_COLOR = {
    "C#": "#3b82f6", "LINQ": "#4f46e5", "OOP": "#16a34a", ".NET / ASP.NET Core": "#7c3aed",
    "Web API": "#b91c1c", "EF Core": "#0f766e", "SQL": "#334155", "Azure": "#0078D4",
    "AWS": "#c2410c", "HTML & CSS": "#e11d48", "JavaScript": "#eab308", "React": "#0891b2",
    "Angular": "#dd0031", "Vue.js": "#42b883", "Next.js": "#171717", "Python": "#306998",
    "Java": "#78350f", "DSA": "#f59e0b", "AI": "#c026d3", "Design Patterns": "#44403c"
  };

  function esc(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }

  function readList() {
    try { return JSON.parse(localStorage.getItem(KEY) || "{}"); } catch (e) { return {}; }
  }
  function writeList(list) {
    try { localStorage.setItem(KEY, JSON.stringify(list)); } catch (e) {}
  }

  function render() {
    var list = readList();
    var keys = Object.keys(list);

    if (!keys.length) {
      body.innerHTML =
        '<div class="mylist-empty">' +
        '<p class="mle-icon">📭</p>' +
        "<h2>Nothing saved yet</h2>" +
        '<p>Tap the <span class="mle-star">☆</span> on any question — on its own page, or right ' +
        "in a tier's list — and it shows up here, grouped by track.</p>" +
        '<div class="mle-cta">' +
        '<a class="hcta primary" href="quickstart.html">🕐 Browse Must Know questions</a>' +
        '<a class="hcta" href="index.html">🏠 Back to all tracks</a>' +
        "</div></div>";
      return;
    }

    var byTrack = {};
    keys.forEach(function (k) {
      var it = list[k];
      (byTrack[it.track] = byTrack[it.track] || []).push(Object.assign({ key: k }, it));
    });
    Object.keys(byTrack).forEach(function (t) {
      byTrack[t].sort(function (a, b) { return b.addedAt - a.addedAt; });
    });

    var tracks = TRACK_ORDER.filter(function (t) { return byTrack[t]; })
      .concat(Object.keys(byTrack).filter(function (t) { return TRACK_ORDER.indexOf(t) === -1; }));

    body.innerHTML =
      '<p class="mylist-count-line">' + keys.length + (keys.length === 1 ? " item saved" : " items saved") + "</p>" +
      tracks.map(function (track, i) {
        var items = byTrack[track];
        var color = TRACK_COLOR[track] || "#4f46e5";
        var icon = items[0].trackIcon || "📄";
        var rows = items.map(function (it) {
          return (
            '<li class="topic-row" data-key="' + esc(it.key) + '">' +
            (it.priority ? '<span class="num">' + esc(it.priority) + "</span>" : '<span class="num">•</span>') +
            '<a href="' + esc(it.path) + '"><strong>' + esc(it.title) + "</strong>" +
            (it.tail ? '<span class="ttail"> — ' + esc(it.tail) + "</span>" : "") + "</a>" +
            '<button type="button" class="mylist-remove" aria-label="Remove from My List" title="Remove from My List">✕ Remove</button>' +
            "</li>"
          );
        }).join("");
        return (
          '<details class="roadmap-tier toggle"' + (i === 0 ? " open" : "") + ' style="--tier-color:' + color + '">' +
          '<summary style="--tier-color:' + color + '">' +
          '<span class="rttitle">' + icon + " " + esc(track) + "</span>" +
          '<span class="rtcount">' + items.length + (items.length === 1 ? " saved" : " saved") + "</span>" +
          '<span class="chev">▾</span>' +
          "</summary>" +
          '<div class="toggle-body"><ol class="topic-list">' + rows + "</ol></div>" +
          "</details>"
        );
      }).join("\n");
  }

  body.addEventListener("click", function (e) {
    var btn = e.target.closest(".mylist-remove");
    if (!btn) return;
    var li = btn.closest(".topic-row");
    var key = li && li.getAttribute("data-key");
    if (!key) return;
    var list = readList();
    delete list[key];
    writeList(list);
    render();
  });

  render();
})();
