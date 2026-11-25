# Playwright Automation Template

Playwright tests for UI interactions, API requests, assertions, screenshots, traces, and Page Object Model workflows. The TypeScript framework and the existing JavaScript examples are maintained side by side.

## Requirements

- Node.js 20.19 or newer
- npm

## Setup

```bash
./setup.sh
```

The setup script installs npm dependencies and browsers, creates `.env` from `.env.example` if needed, and prepares runtime output directories. Add local credentials to `.env`; never commit real credentials.

## Framework Layout

```text
playwright.config.ts       # TypeScript Playwright projects and reporting
config/                    # Committed, non-secret environment defaults
src/api/                   # Typed REST client
src/config/                # Validated environment configuration
src/data/                  # Reusable test data
src/fixtures/              # Typed Playwright fixtures
src/hooks/                 # Global setup and teardown
src/pages/                 # Page object model
src/utils/                 # Logging, random data, and date helpers
tests/api/                 # API specs (no browser interaction)
tests/e2e/                 # Browser specs grouped by feature
Pages/, fixtures/          # Existing JavaScript page objects and fixtures
test-data/, tests/         # Existing JavaScript examples and specs
reports/, logs/            # Generated runtime output
```

The TypeScript configuration matches only `*.spec.ts` under `tests/api/` and `tests/e2e/`; existing JavaScript specs remain separate and can use `playwright.config.js`.

## Environment

`.env.example` documents local overrides. `TARGET_ENV` selects `config/dev.env`, `config/staging.env`, or `config/prod.env`; local `.env` and shell values take precedence. Environment files contain example URLs and empty credential values only.

For the existing JavaScript DemoBlaze login example, credentials can also be set in the shell:

```bash
export DEMOBLAZE_USERNAME="your-test-user"
export DEMOBLAZE_PASSWORD="your-test-password"
```

## Run Tests

Run the TypeScript API and browser projects, or focus on one area:

```bash
npm test
npm run test:api
npm run test:e2e
npm run test:chromium
npm run test:headed
npm run test:ui
npm run test:debug
```

Run a specific TypeScript spec:

```bash
npm run test:api -- tests/api/users/users.spec.ts
npm run test:e2e -- tests/e2e/products/products.spec.ts
```

Useful checks for the TypeScript framework:

```bash
npm run typecheck
npm run lint
npm run format:check
```

Run a legacy JavaScript spec with its existing configuration:

```bash
npx playwright test --config=playwright.config.js tests/Pomtest.spec.js --project=chromium
npx playwright test --config=playwright.config.js tests/APITests.spec.js --reporter=line
npx playwright test --config=playwright.config.js tests/talenzap_admin_tests --reporter=line
```

The CI configuration retries failed tests, runs one worker, and retains reports and failure artifacts. Local runs use parallel workers with traces, screenshots, and videos retained only for failures.

## Reports and Artifacts

The TypeScript configuration writes HTML reports to `reports/playwright` and Allure results to `allure-results`. Generate the Allure report with:

```bash
npm run allure:generate
```

Open the Playwright report with `npm run report`. Playwright traces, screenshots, and videos are retained on failure under `test-results/`. The original JavaScript configuration writes reports to `playwright-report/`.

## Test Areas

- `tests/api/users/` and `tests/api/posts/`: JSONPlaceholder API checks
- `tests/e2e/login/`, `tests/e2e/products/`, `tests/e2e/checkout/`: browser workflows
- `tests/`: existing Playwright interaction, assertion, locator, screenshot, and tracing examples
- `tests/talenzap_admin_tests/`: deterministic Talenzap administration workflow examples

Some tests use public demo applications, so external availability, bot protection, and selector changes can affect live-site tests. For failures, inspect the URL, current page, and trace before changing selectors.
