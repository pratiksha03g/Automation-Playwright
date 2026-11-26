#!/usr/bin/env bash
set -euo pipefail

node -e 'const [major, minor] = process.versions.node.split(".").map(Number); if (major < 20 || (major === 20 && minor < 9)) { console.error("Node.js 20.9 or newer is required."); process.exit(1); }'

npm install
npx playwright install

if [[ ! -f .env ]]; then
  cp .env.example .env
  echo 'Created .env from .env.example; add local credentials if needed.'
fi

mkdir -p logs reports test-results allure-results
echo 'Setup complete.'