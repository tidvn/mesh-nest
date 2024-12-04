import * as dotenv from 'dotenv';
dotenv.config();

// Set server timezone
if (!process.env.TZ) {
  process.env.TZ = 'UTC';
}

export const TIMEZONE = process.env.TZ;

// Environment
export const NODE_ENV: string = process.env.NODE_ENV || 'development';

// Server config
export const PORT: number = parseInt(process.env.PORT, 10) || 8080;

// Swagger config
export const WALLET_NONCE_TTL: number =
  parseInt(process.env.WALLET_NONCE_TTL, 10) || 300000;

export const LOGGING_CONSOLE_LEVEL =
  process.env.LOGGING_CONSOLE_LEVEL || 'debug';
// Silent level mean no logging
export const LOGGING_FILE_LEVEL = process.env.LOGGING_FILE_LEVEL || 'silent';

export const LOG_FILE_PATH = process.env.LOG_FILE_PATH || './logger.log';

export const JWT_ACCESS_SECRET =
  process.env.JWT_ACCESS_SECRET || 'access-secret';
export const JWT_REFRESH_SECRET =
  process.env.JWT_REFRESH_SECRET || 'refresh-secret';
export const JWT_ACCESS_EXPIRES_IN = process.env.JWT_ACCESS_EXPIRES_IN || '5m';
export const JWT_REFRESH_EXPIRES_IN =
  process.env.JWT_REFRESH_EXPIRES_IN || '30m';
