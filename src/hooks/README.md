# Run Hooks

Playwright calls `globalSetup` once before projects and `globalTeardown` once after the run. Setup prepares generated output directories; both hooks write lifecycle events through the shared logger.
