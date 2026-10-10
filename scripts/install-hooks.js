#!/usr/bin/env node
/* One-time per clone: point git at the versioned hooks folder. */
const { execSync } = require("child_process");
execSync("git config core.hooksPath scripts/hooks", { stdio: "inherit" });
console.log("git hooks enabled (core.hooksPath = scripts/hooks). Commits now run scripts/pre-commit-check.js.");
