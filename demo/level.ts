import { Level, Logger } from '../src';

const loggers: Logger[] = [
  new Logger({ name: 'all', level: Level.ALL }),
  new Logger({ name: 'debug', level: Level.DEBUG }),
  new Logger({ name: 'info', level: Level.INFO }),
  new Logger({ name: 'warn', level: Level.WARN }),
  new Logger({ name: 'error', level: Level.ERROR }),
  new Logger({ name: 'off', level: Level.OFF }),
];

loggers.forEach(logger => {
  logger.log(`============${logger.name}============`);
  logger.debug(`${logger.name} => debug output`);
  logger.info(`${logger.name} => info output`);
  logger.warn(`${logger.name} => warn output`);
  logger.error(`${logger.name} => error output`);
  logger.log(`============${logger.name}============`);
});
