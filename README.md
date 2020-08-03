# Logger

TypeScript / JavaScript colorful logger, support saving logs to file(s).

# Changelog

## 0.3.2 => 0.3.3

- feat: allow to get / set global logger level

## 0.2.0 => 0.3.0

- feat: allow to customize log level
- feat: global console manager
- feat: support for saving logs to file(s)

# Usage

See [demo directory](https://github.com/DevinDon/logger/blob/master/src/demo) for more usage.

## Use logger instance

```typescript
import { logger } from '@iinfinity/logger';

logger.assert(true, 'logger assert true', 'logger assert false');
logger.assert(false, 'logger assert true', 'logger assert false');
logger.log('log what you input without any decorate');
logger.debug('debug', 'to', 'console');
logger.error('something error');
logger.info('info');
logger.warn('warn', 'something');
```

## Save log to file(s)

```typescript
import { Logger } from '@iinfinity/logger';

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
```

# [THE MIT LICENSE](https://raw.githubusercontent.com/DevinDon/license/master/THE%20MIT%20LICENSE)

Copyright © 2018+ Devin Don

LICENSE: MIT

Click <https://raw.githubusercontent.com/DevinDon/license/master/THE%20MIT%20LICENSE> to view a copy of this license.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
