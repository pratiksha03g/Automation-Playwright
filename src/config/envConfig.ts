import { existsSync, readFileSync } from 'node:fs';
import path from 'node:path';
import dotenv from 'dotenv';

const rootDir = process.cwd();
const shellEnvironment = { ...process.env };
const supportedEnvironments = ['dev', 'staging', 'prod'] as const;
const supportedLogLevels = ['error', 'warn', 'info', 'http', 'verbose', 'debug', 'silly'] as const;
type TargetEnvironment = (typeof supportedEnvironments)[number];
type LogLevel = (typeof supportedLogLevels)[number];
const localEnvPath = path.join(rootDir, '.env');
const localValues = existsSync(localEnvPath) ? dotenv.parse(readFileSync(localEnvPath)) : {};
const targetEnv = shellEnvironment.TARGET_ENV ?? localValues.TARGET_ENV ?? 'dev';

function isTargetEnvironment(value: string): value is TargetEnvironment {
  return supportedEnvironments.includes(value as TargetEnvironment);
}

if (!isTargetEnvironment(targetEnv)) {
  throw new Error(`TARGET_ENV must be dev, staging, or prod; received "${targetEnv}".`);
}

const environmentPath = path.join(rootDir, 'config', `${targetEnv}.env`);
const environmentValues = existsSync(environmentPath)
  ? dotenv.parse(readFileSync(environmentPath))
  : {};

for (const [key, value] of Object.entries({ ...environmentValues, ...localValues })) {
  if (shellEnvironment[key] === undefined) {
    process.env[key] = value;
  }
}

function requiredUrl(name: string, fallback: string): string {
  const value = process.env[name] || fallback;
  try {
    const url = new URL(value);
    if (url.protocol !== 'http:' && url.protocol !== 'https:') {
      throw new Error('URL must use HTTP or HTTPS.');
    }
    return url.toString().replace(/\/$/, '');
  } catch {
    throw new Error(`${name} must be a valid absolute URL; received "${value}".`);
  }
}

function requiredLogLevel(): LogLevel {
  const value = process.env.LOG_LEVEL || 'info';
  if (!supportedLogLevels.includes(value as LogLevel)) {
    throw new Error(
      `LOG_LEVEL must be one of ${supportedLogLevels.join(', ')}; received "${value}".`,
    );
  }
  return value as LogLevel;
}

export const envConfig = {
  targetEnv,
  baseUrl: requiredUrl('BASE_URL', 'https://www.demoblaze.com'),
  apiBaseUrl: requiredUrl('API_BASE_URL', 'https://jsonplaceholder.typicode.com'),
  demoblazeUsername: process.env.DEMOBLAZE_USERNAME ?? '',
  demoblazePassword: process.env.DEMOBLAZE_PASSWORD ?? '',
  logLevel: requiredLogLevel(),
};

export type EnvironmentConfig = typeof envConfig;
