// import { Logger, Level } from '@iinfinity/logger';
import { Logger, Level } from '../main'; // use above import statement in your workspace
import { Writable } from 'stream';

/** Default logger. */
const logger = new Logger({
  stdout: process.stdout,
  stderr: process.stderr,
  colorful: true,
  level: Level.ALL,
  name: 'default'
});
// same as the index.ts, and these below
// const logger = new Logger('default');
// const logger = Logger.getLogger() as Logger;
// const logger = Logger.getLogger('default') as Logger;

logger.log('log what you input without any decorate');
logger.debug('debug', 'to', 'console');
logger.error('something error');
logger.info('info');
logger.warn('warn', 'something');

// ==============================
//
// ==============================
//
// ==============================

// create a new writable stream
/** Writable stream. */
const customizeStream = new Writable({
  write(chunk, encoding, callback) {
    console.log(`This is my stream: ${chunk.toString()}`);
    callback();
  }
});

/** Customize stream logger. */
const customizeLogger = new Logger({
  stdout: customizeStream,
  stderr: customizeStream,
  level: Level.INFO,
  name: 'stream'
});

customizeLogger.log('log what you input without any decorate');
customizeLogger.debug('debug', 'to', 'console');
customizeLogger.error('something error');
customizeLogger.info('info');
customizeLogger.warn('warn', 'something');
