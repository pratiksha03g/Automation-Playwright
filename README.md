# Playwright Automation

Playwright tests for UI interactions, API requests, assertions, screenshots, traces, and Page Object Model workflows.

## Requirements

- Node.js 20 or newer
- npm

## Setup

```bash
npm install
npx playwright install
```

## Project Layout

```text
playwright.config.js       # Playwright configuration
Pages/                     # Page Object Model classes
tests/                     # Test specifications
tests/talenzap_admin_tests # Talenzap admin UI tests
tests-examples/            # Playwright example tests
playwright-report/         # Generated HTML report
```

The Page Object Model flow is demonstrated by `tests/Pomtest.spec.js` and the classes in `Pages/`:

- `LoginPage.js`
- `HomePage.js`
- `ProductPage.js`
- `CartPage.js`

## Run Tests

Run a specific spec:

```bash
npx playwright test tests/APITests.spec.js
```

Run the suite in Chromium:

```bash
npx playwright test --project=chromium
```

Run all configured browsers:

```bash
npx playwright test
```

Run with a visible browser, UI mode, or tracing:

```bash
npx playwright test --headed
npx playwright test --ui
npx playwright test --trace on
```

Useful focused commands:

```bash
npx playwright test tests/Pomtest.spec.js --project=chromium
npx playwright test tests/APITests.spec.js --reporter=line
```

There is currently no `npm test` script in `package.json`, so use `npx playwright test` directly.

## Reports and Artifacts

The configuration uses the HTML reporter and records traces and screenshots. After a test run, open the report with:

```bash
npx playwright show-report
```

If port `9323` is already in use, choose another port:

```bash
npx playwright show-report --host 127.0.0.1 --port 9324
```

Open an individual trace with:

```bash
npx playwright show-trace test-results/<test-directory>/trace.zip
```

Generated screenshots are stored under `tests/screenshots/`; Playwright test artifacts are stored under `test-results/`.

## Browser Configuration

`playwright.config.js` defines Chromium, Firefox, and WebKit projects. Traces and screenshots are enabled globally. Tests run against several public demo applications, so external availability, bot protection, and changing selectors can affect tests that depend on live sites.

For reliable local examples, prefer the focused API, POM, assertion, checkbox, grouping, and example specs. Run live-site and Talenzap tests separately when diagnosing failures.

## Test Areas

- `APITests.spec.js`: ReqRes API checks
- `Assertions.spec.js`, `SoftAssertions.spec.js`: Playwright assertions
- `Checkboxes*.spec.js`, `InputBox.spec.js`, `MouseHover.spec.js`: form and interaction examples
- `Locators*.spec.js`, `LocatingMultipleElements.spec.js`: locator strategies
- `Hooks1.spec.js`, `GroupinTest.spec.js`: hooks and test grouping
- `Pomtest.spec.js`: Page Object Model flow
- `Screenshots.spec.js`, `screenshot2test.spec.js`, `tracing.spec.js`: artifacts and tracing
- `tests/talenzap_admin_tests/`: Talenzap administration workflows

## Troubleshooting

- A report-server `EADDRINUSE` error means another process is using port `9323`; stop the stale report server or use `--port 9324`.
- For a failing live-site test, inspect the URL, current page title, and trace before changing selectors.
- Use `--project=chromium` and `--reporter=line` for a fast, readable diagnostic run.

Last updated: 2026-09-08
