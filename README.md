# Logger

TypeScript / JavaScript colorful logger.

# Changelog

## 0.1.0 => 0.1.1

- perf: allow any number of args of any type
- perf: add return to all methods

## 0.0.0 => 0.1.0

- fix: replace message type with {any}

Check the [CHANGELOG](https://github.com/DevinDon/logger/blob/master/docs/CHANGELOG.md) for more information.

# Usage

## Use logger instance

```typescript
import { logger } from '@devindon/logger';

logger.log('log');
logger.debug('debug');
logger.info('info');
logger.warn('warn');
logger.error('error');
```

## Use Logger class

```typescript
import Logger from '@devindon/logger';

const logger = new Logger();

logger.log('log');
logger.debug('debug');
logger.info('info');
logger.warn('warn');
logger.error('error');
```

# Contact

Author: IInfinity

Email: [I.INF@Outlook.com](mailto:I.INF@Outlook.com)

GitHub: [Devin Don](https://github.com/DevinDon)

Project: [On GitHub](https://github.com/DevinDon/logger)

# LICENSE

[THE MIT LICENSE](LICENSE)
