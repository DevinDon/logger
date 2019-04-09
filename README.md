# Logger

TypeScript / JavaScript colorful logger, support saving logs to file(s).

# Changelog

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
```

# Contact

Author: IInfinity

Email: [I.INF@Outlook.com](mailto:I.INF@Outlook.com)

GitHub: [Devin Don](https://github.com/DevinDon)

Project: [On GitHub](https://github.com/DevinDon/logger)

# LICENSE

[THE MIT LICENSE](https://github.com/DevinDon/logger/blob/master/LICENSE)
