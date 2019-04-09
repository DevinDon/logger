// import { Logger, Level } from '@iinfinity/logger';
import { Logger, Level, logger } from '../main'; // use above import statement in your workspace

/** The logger name is `1`. */
const l1 = new Logger({ name: '1' });
/** In colorless mode. */
const l2 = new Logger({ name: '2', colorful: false });
/** Logger level is `WARN`, debug & info will not be output. */
const l3 = new Logger({ name: '3', level: Level.WARN });

const logger1 = Logger.getLogger('1');
// l1 === logger, true
logger.assert(l1 === logger1, 'l1 and logger1 are the same.', 'l1 and logger1 are different.'); // it will output nothing
logger1.debug('1.debug');
logger1.info('1.info');
logger1.warn('1.warn');
logger1.error('1.error');

logger.log();

const logger2 = Logger.getLogger('2');
// l2 === logger, true
logger.assert(l2 === logger2, 'l2 and logger2 are the same.', 'l2 and logger2 are different.'); // it will output nothing
logger2.debug('2.debug');
logger2.info('2.info');
logger2.warn('2.warn');
logger2.error('2.error');

logger.log();

const logger3 = Logger.getLogger('3');
// l2 === logger, true
logger.assert(l3 === logger3, 'l3 and logger3 are the same.', 'l3 and logger3 are different.'); // it will output nothing
logger3.debug('3.debug will not be output');
logger3.info('3.info will not be output');
logger3.warn('3.warn');
logger3.error('3.error');
