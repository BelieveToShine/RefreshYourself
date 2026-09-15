/* RefreshYourself — tier side-navigation data. See docs/rules/tier-navigation.md.
   One entry per WRITTEN tier, keyed "<track-folder>/<tier-folder>" (matches each topic page's
   data-tier-key attribute). Loaded as a plain <script src> (not fetch()), same reason as
   assets/search-index.js: works from file:// and https:// alike.

   Update this file whenever a topic is added/renamed/reordered in a tier that already has a
   sidebar — it is the single source of truth the sidebar is built from. Keep "short" labels
   short (fits one line in a 232px rail); the full title still shows on hover via "title"+"tail". */
window.NAV_INDEX = {
  "csharp/basic": {
    track: "C#",
    trackIcon: "🎵",
    tier: "Basic",
    groups: [
      {
        label: "Questions 1–10",
        hot: 8,
        items: [
          { n: 1,  file: "1.html",  short: "Value vs. Reference",     title: "Value Types vs. Reference Types",       tail: "what's actually being copied?", hot: true },
          { n: 2,  file: "2.html",  short: "Boxing & Unboxing",        title: "Boxing & Unboxing",                     tail: "what happens when a value type becomes an object.", hot: true },
          { n: 3,  file: "3.html",  short: "== vs. Equals()",          title: "== vs. .Equals() vs. ReferenceEquals()", tail: "three ways to compare.", hot: true },
          { n: 4,  file: "4.html",  short: "try/catch/finally",        title: "try / catch / finally",                 tail: "how exception handling actually flows.", hot: true },
          { n: 5,  file: "5.html",  short: "const/readonly/static",    title: "const vs. readonly vs. static",         tail: "three ways to \"fix\" a value.", hot: true },
          { n: 6,  file: "6.html",  short: "Access Modifiers",         title: "Access Modifiers",                      tail: "public, private, protected, internal.", hot: true },
          { n: 7,  file: "7.html",  short: "Array vs. List<T>",        title: "Array vs. List<T>",                     tail: "a fixed shelf vs. a growable box.", hot: true },
          { n: 8,  file: "8.html",  short: "ref/out/in",               title: "ref vs. out vs. in",                    tail: "passing by reference, three ways.", hot: true },
          { n: 9,  file: "9.html",  short: "String vs. StringBuilder", title: "String vs. StringBuilder",              tail: "why one is slow in a loop.", hot: false },
          { n: 10, file: "10.html", short: "Nullable Types",           title: "Nullable Types (int?)",                 tail: "letting a value type be \"nothing.\"", hot: false }
        ]
      },
      {
        label: "Questions 11–14",
        items: [
          { n: 11, file: "11.html", short: "var/dynamic/object", title: "var vs. dynamic vs. object", tail: "three ways to not name the type.", hot: false },
          { n: 12, file: "12.html", short: "Enums",              title: "Enums",                      tail: "naming a fixed set of options.", hot: false },
          { n: 13, file: "13.html", short: "?: and ??",          title: "?: and ??",                  tail: "the shorthand operators everyone uses, few explain.", hot: false },
          { n: 14, file: "14.html", short: "Namespaces & using", title: "Namespaces & using",         tail: "organizing and importing code.", hot: false }
        ]
      }
    ]
  }
};
