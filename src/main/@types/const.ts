import { Styles } from '.';
import { Writable } from 'stream';

/** Style list. */
export const COLORS = {
  BACKGROUND: {
    black: '\x1b[40m',
    blue: '\x1b[44m',
    cyan: '\x1b[46m',
    green: '\x1b[42m',
    magenta: '\x1b[45m',
    red: '\x1b[41m',
    yellow: '\x1b[43m',
    white: '\x1b[47m'
  },
  FONT: {
    black: '\x1b[30m',
    blue: '\x1b[34m',
    cyan: '\x1b[36m',
    green: '\x1b[32m',
    magenta: '\x1b[35m',
    red: '\x1b[31m',
    yellow: '\x1b[33m',
    white: '\x1b[37m'
  },
  CONSOLE: {
    backLine: '\x1b[1A',
    bold: '\x1b[1m',
    cleanLine: '\x1b[K',
    dim: '\x1b[2m',
    italic: '\x1b[3m',
    reset: '\x1b[0m',
    reverse: '\x1b[7m',
    strikethrough: '\x1b[9m',
    underscore: '\x1b[4m'
  }
};

/** Output style. */
export const STYLES: Styles = {
  ASSERT: {
    TRUE: {
      name: 'ASSERT',
      background: COLORS.BACKGROUND.cyan,
      font: COLORS.FONT.cyan
    },
    FALSE: {
      name: 'ASSERT',
      background: COLORS.BACKGROUND.red,
      font: COLORS.FONT.red
    }
  },
  DEBUG: {
    name: 'DEBUG ',
    background: COLORS.BACKGROUND.blue,
    font: COLORS.FONT.blue
  },
  INFO: {
    name: ' INFO ',
    background: COLORS.BACKGROUND.green,
    font: COLORS.FONT.green
  },
  WARN: {
    name: ' WARN ',
    background: COLORS.BACKGROUND.yellow,
    font: COLORS.FONT.yellow
  },
  ERROR: {
    name: 'ERROR ',
    background: COLORS.BACKGROUND.red,
    font: COLORS.FONT.red
  }
};

/** Like `/dev/null`, it will display nothing. */
export const STDNULL: Writable = new Writable({
  write() { }
});
