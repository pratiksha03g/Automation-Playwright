# Configuration

`envConfig.ts` loads the selected `config/<TARGET_ENV>.env`, then local `.env` overrides, while shell-provided values remain highest priority. It validates the selected environment and URL fields before tests run.
