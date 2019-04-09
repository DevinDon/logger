// import { Logger } from '@iinfinity/logger';
import { Logger } from '../main'; // use above import statement in your workspace

/** Save logs to file(s) only, it will not display on screen. */
const logToFileOnly = new Logger({
  name: 'log to file only',
  fileout: 'out.log',
  fileerr: 'err.log'
});

logToFileOnly.log('log what you input without any decorate');
logToFileOnly.debug('debug', 'to', 'file only');
logToFileOnly.error('something error file only');
logToFileOnly.info('info file only');
logToFileOnly.warn('warn', 'something', 'file only');
logToFileOnly.info('And now, open your out.log & err.log file to see these words file only.');

/** Save logs to file(s) & screen. */
const logToFileAndScreen = new Logger({
  name: 'log to file and screen',
  stdout: process.stdout,
  stderr: process.stderr,
  fileout: 'out.log',
  fileerr: 'err.log'
});

logToFileAndScreen.log('log what you input without any decorate');
logToFileAndScreen.debug('debug', 'to', 'console');
logToFileAndScreen.error('something error');
logToFileAndScreen.info('info');
logToFileAndScreen.warn('warn', 'something');
logToFileAndScreen.info('And now, open your out.log & err.log file to see these words.');
