# Playwright Automation

JavaScript Playwright examples and page-object tests for browser automation.

## Requirements

- Node.js 20.9 or newer
- npm 10 or newer

## Setup

```bash
./setup.sh
```

The setup script installs dependencies and Playwright browsers, creates `.env` from `.env.example` if needed, and prepares runtime output directories. Add test credentials to `.env`; do not commit real credentials.

## Project Layout

```text
playwright.config.js  # JavaScript Playwright configuration
src/pages/            # Page objects
src/fixtures/         # Shared Playwright fixtures
src/testdata/         # Test data and credential helpers
src/tests/            # JavaScript Playwright specs
```

## Environment

The configuration reads `BASE_URL` from the environment, defaulting to `https://www.demoblaze.com`.
DemoBlaze login tests require `DEMOBLAZE_USERNAME` and `DEMOBLAZE_PASSWORD` in `.env` or the shell.
Without credentials, the configured login test is skipped.

## Run Tests

```bash
npm test
npm run test:chromium
npm run test:headed
npm run test:ui
npm run test:debug
```

Run an individual spec or folder:

```bash
npx playwright test --config=playwright.config.js tests/Pomtest.spec.js --project=chromium
npx playwright test --config=playwright.config.js tests/APITests.spec.js --reporter=line
npx playwright test --config=playwright.config.js tests/talenzap_admin_tests --reporter=line
```

Static checks:

```bash
npm run lint
npm run format:check
```

The suite uses Chromium with headed mode locally and a 1920x1080 viewport. CI runs headless, retries failures, and uses a single worker. On failure, Playwright retains traces, screenshots, and videos under `test-results/`; the HTML report is written to `playwright-report/`.
