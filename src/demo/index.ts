import { Logger, logger } from '../main';
import { Writable } from 'stream';
import { createWriteStream } from 'fs';

// logger mean this.
// const logger = new Logger(process.stdout, process.stderr);

logger.log('log');
logger.debug('debug', 'to', 'console');
logger.error('something error');
logger.info('info');
logger.warn('warn', 'something');

const myStream = new Writable({
  write(chunk, encoding, callback) {
    console.log(`This is my stream. ${chunk.toString()}`);
    callback();
  }
});

/** Stdout = myStream. */
const myLogger1 = new Logger(myStream);
/** Stderr = myStream. */
const myLogger2 = new Logger(process.stdout, myStream);

const fileStream = createWriteStream('dist/stream', { flags: 'a' });
/** Write error information to file, and disable color mode. */
const fileLogger = new Logger(process.stdout, fileStream, false);

fileLogger.error('Write to file');
