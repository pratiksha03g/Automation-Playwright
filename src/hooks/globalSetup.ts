import { mkdir } from 'node:fs/promises';
import { logger } from '../utils/logger';

export default async function globalSetup(): Promise<void> {
  await Promise.all(
    ['logs', 'reports', 'test-results', 'allure-results'].map((directory) =>
      mkdir(directory, { recursive: true }),
    ),
  );
  logger.info('Playwright run started');
}
