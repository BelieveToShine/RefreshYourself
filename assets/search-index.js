/* RefreshYourself — global search index. One entry per WRITTEN page. See docs/rules/search.md.
   Loaded as a plain <script src> (not fetch()) so it works over file:// AND https:// — fetch()
   is blocked on a page opened directly from disk, a plain script tag isn't. */
window.SEARCH_INDEX = [
  { title: "Home", track: "", tier: "", path: "index.html", keywords: "home all tracks csharp oops dotnet sql react dsa" },
  { title: "C# — track home", track: "C#", tier: "", path: "csharp/index.html", keywords: "csharp c# dotnet language overview" },
  { title: "C# Basic — topic list", track: "C#", tier: "Basic", path: "csharp/basic/index.html", keywords: "csharp basic list interview questions roadmap" },
  { title: "Value Types vs. Reference Types", track: "C#", tier: "Basic", path: "csharp/basic/1.html", keywords: "value type reference type stack heap copy pointer struct class boxing csharp" },
  { title: "Boxing & Unboxing", track: "C#", tier: "Basic", path: "csharp/basic/2.html", keywords: "boxing unboxing object heap allocation arraylist generics list invalidcastexception csharp" },
  { title: "== vs. .Equals() vs. ReferenceEquals()", track: "C#", tier: "Basic", path: "csharp/basic/3.html", keywords: "equals referenceequals equality identity content comparison operator overload csharp" },
  { title: "try / catch / finally", track: "C#", tier: "Basic", path: "csharp/basic/4.html", keywords: "try catch finally exception handling error using dispose csharp" },
  { title: "const vs. readonly vs. static", track: "C#", tier: "Basic", path: "csharp/basic/5.html", keywords: "const readonly static compile time runtime shared instance field csharp" },
  { title: "Access Modifiers", track: "C#", tier: "Basic", path: "csharp/basic/6.html", keywords: "access modifiers public private protected internal visibility encapsulation csharp" },
  { title: "Array vs. List<T>", track: "C#", tier: "Basic", path: "csharp/basic/7.html", keywords: "array list generic collection fixed size grow capacity resize csharp" },
  { title: "ref vs. out vs. in", track: "C#", tier: "Basic", path: "csharp/basic/8.html", keywords: "ref out in parameter pass by reference tryparse struct csharp" },
  { title: "String vs. StringBuilder", track: "C#", tier: "Basic", path: "csharp/basic/9.html", keywords: "string stringbuilder immutable concatenation append performance loop csharp" },
  { title: "Nullable Types (int?)", track: "C#", tier: "Basic", path: "csharp/basic/10.html", keywords: "nullable int hasvalue value null coalescing operator csharp" }
];
