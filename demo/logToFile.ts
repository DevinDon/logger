// import { Logger } from '@iinfinity/logger';
import { Logger, STDNUL } from '../src'; // use above import statement in your workspace

/** Save logs to file(s) only, it will not display on screen. */
const logToFileOnly = new Logger({
  name: 'log to file only',
  stdout: STDNUL,
  stderr: STDNUL,
  logout: 'logs/out.log',
  logerr: 'logs/err.log',
});

logToFileOnly.log('log what you input without any decorate');
logToFileOnly.assert(true, 'is same assert');
try {
  logToFileOnly.assert(false, '', 'is different assert');
} catch (error) {
  //
}
logToFileOnly.debug('debug', 'to', 'file only');
logToFileOnly.error('something error file only');
logToFileOnly.info('info file only');
logToFileOnly.warn('warn', 'something', 'file only');
logToFileOnly.info('And now, open your "logs/out.log" & "logs/err.log" file to see these words file only.');

/** Save logs to file(s) & screen. */
const logToFileAndScreen = new Logger({
  name: 'log to file and screen',
  stdout: process.stdout,
  stderr: process.stderr,
  logout: 'out.log',
  logerr: 'err.log',
});

logToFileAndScreen.log('log what you input without any decorate');
logToFileAndScreen.assert(true, 'is same assert');
try {
  logToFileAndScreen.assert(false, '', 'is different assert');
} catch (error) {
  //
}
logToFileAndScreen.debug('debug', 'to', 'console');
logToFileAndScreen.error('something error');
logToFileAndScreen.info('info');
logToFileAndScreen.warn('warn', 'something');
logToFileAndScreen.info('And now, open your "logs/out.log" & "logs/err.log" file to see these words.');
