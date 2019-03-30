# Logger

TypeScript / JavaScript colorful logger.

# Changelog

## 0.1.0 => 0.2.0

- perf: allow any number of args of any type
- feat: allow to enable / disable color mode

## 0.0.1 => 0.1.0

- fix: replace message type with {any}

Check the [CHANGELOG](https://github.com/DevinDon/logger/blob/master/docs/CHANGELOG.md) for more information.

# Usage

See [DEMO](https://github.com/DevinDon/logger/blob/master/src/demo) for more usage.

## Use logger instance

```typescript
import { logger } from '@devindon/logger';

logger.log('log');
logger.debug('debug');
logger.info('info');
logger.warn('warn');
logger.error('error');
```

## Custom Logger

```typescript
import Logger from '@devindon/logger';

const myStream = new Writable({
  write(chunk, encoding, callback) {
    console.log(`This is my stream. ${chunk.toString()}`);
    callback();
  }
});

/** Stderr = myStream. */
const logger = new Logger(process.stdout, myStream);

logger.log('log');
logger.debug('debug');
logger.info('info');
logger.warn('warn');
logger.error('error');
```

## Write error / warn message to file

```typescript
import Logger from '@devindon/logger';

const fileStream = createWriteStream('dist/stream', { flags: 'a' });
/** Write error information to file, and disable color mode. */
const fileLogger = new Logger(process.stdout, fileStream, false);

fileLogger.error('Write to file');
```

# Contact

Author: IInfinity

Email: [I.INF@Outlook.com](mailto:I.INF@Outlook.com)

GitHub: [Devin Don](https://github.com/DevinDon)

Project: [On GitHub](https://github.com/DevinDon/logger)

# LICENSE

[THE MIT LICENSE](https://github.com/DevinDon/logger/blob/master/LICENSE)
