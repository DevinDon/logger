// import { logger } from '@iinfinity/logger';
import { logger } from '../main'; // use above import statement in your workspace

logger.assert(true, 'logger assert true', 'logger assert false');
logger.assert(false, 'logger assert true', 'logger assert false');
logger.log('log what you input without any decorate');
logger.debug('debug', 'to', 'console');
logger.error('something error');
logger.info('info');
logger.warn('warn', 'something');
