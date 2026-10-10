#!/usr/bin/env node
/* Claude Code PreToolUse hook (Bash): before any `git commit`, run the docs-sync guard so a
   Claude session cannot commit without updating the md files. Wired in .claude/settings.json. */
let buf = ""; process.stdin.on("data", (d) => (buf += d)).on("end", () => {
  let cmd = ""; try { cmd = JSON.parse(buf).tool_input.command || ""; } catch (e) {}
  if (!/\bgit\s+(-\S+\s+)*commit\b/.test(cmd)) process.exit(0);
  const r = require("child_process").spawnSync(process.execPath, [require("path").join(__dirname, "pre-commit-check.js")], { encoding: "utf8" });
  if (r.status !== 0) { process.stderr.write((r.stderr || "") + (r.stdout || "")); process.exit(2); }
});
