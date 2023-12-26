import { Logger } from 'pino';
import { createLogger } from '@alfred/utils';
import { API, APIError } from '@alfred/models';

interface ICreateLoggerReturn {
  logger: Logger<string>;
  logError: (err: APIError) => { error: string };
}

export const { logger, logError }: ICreateLoggerReturn = createLogger({
  name: (process.env.npm_package_name as API) || 'hub',
  betterStackSourceToken: process.env.BETTERSTACK_SOURCE_TOKEN,
  level: process.env.LOG_LEVEL
});
