import { Logger } from 'pino';
import { createLogger } from '@stats-station/utils';
import { API, APIError, IOrigin } from '@stats-station/models';

interface ICreateLoggerReturn {
  logger: Logger<string>;
  logError: (err: APIError) => { status: number; origin: IOrigin };
}

export const { logger, logError }: ICreateLoggerReturn = createLogger({
  name: (process.env.npm_package_name as API) || 'hub',
  betterStackSourceToken: process.env.BETTERSTACK_SOURCE_TOKEN,
  level: process.env.LOG_LEVEL
});
