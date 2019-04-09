// import { Logger } from '@iinfinity/logger';
import { Logger } from '../main'; // use above import statement in your workspace

// save log to file
const logToFile = new Logger({
  fileout: 'out.log',
  fileerr: 'err.log'
});

logToFile.log('log what you input without any decorate');
logToFile.debug('debug', 'to', 'console');
logToFile.error('something error');
logToFile.info('info');
logToFile.warn('warn', 'something');
logToFile.info('And now, open your out.log & err.log file to see these words.');
