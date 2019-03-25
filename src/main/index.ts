import { Console } from 'console';
import { Level, Style } from './@types';

/** Style list. */
export const STYLE = {
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
  COLOR: {
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

/** Class Logger. */
export class Logger {

  /** Logger to stdout or stderr. */
  private std: Console;
  // private file: Console;

  LEVEL: Level = {
    debug: {
      name: 'DEBUG',
      background: STYLE.BACKGROUND.blue,
      color: STYLE.COLOR.blue
    },
    info: {
      name: 'INFO ',
      background: STYLE.BACKGROUND.green,
      color: STYLE.COLOR.green
    },
    warn: {
      name: 'WARN ',
      background: STYLE.BACKGROUND.yellow,
      color: STYLE.COLOR.yellow
    },
    error: {
      name: 'ERROR',
      background: STYLE.BACKGROUND.red,
      color: STYLE.COLOR.red
    }
  };

  constructor() {
    this.std = new Console({ stdout: process.stdout, stderr: process.stderr, colorMode: true });
    // this.file = new Console({})
  }

  private getTime(style: Style): string {
    return `${style.color}${new Date().toLocaleString()}${STYLE.CONSOLE.reset} ${style.background}${STYLE.COLOR.black}[${style.name}]${STYLE.CONSOLE.reset}`;
  }

  /**
   * Print log to stdout, without style and format.
   *
   * @param {string} message Message you want to print.
   * @returns {void} Nothing.
   */
  log(message: string): void {
    this.std.log(message);
  }

  /**
   * Print debug message to stdout, with blue color.
   *
   * @param {string} message Message you want to print.
   * @returns {void} Nothing.
   */
  debug(message: string): void {
    this.std.debug(`${this.getTime(this.LEVEL.debug)} ${message}`);
  }

  /**
   * Print information to stdout, with green color.
   *
   * @param {string} message Message you want to print.
   * @returns {void} Nothing.
   */
  info(message: string): void {
    this.std.info(`${this.getTime(this.LEVEL.info)} ${message}`);
  }

  /**
   * Print warn message to stderr, with yellow color.
   *
   * @param {string} message Message you want to print.
   * @returns {void} Nothing.
   */
  warn(message: string): void {
    this.std.warn(`${this.getTime(this.LEVEL.warn)} ${message}`);
  }

  /**
   * Print error message to stderr, with red color.
   *
   * @param {string} message Message you want to print.
   * @returns {void} Nothing.
   */
  error(message: string): void {
    this.std.error(`${this.getTime(this.LEVEL.error)} ${message}`);
  }

}

export default Logger;

export const logger = new Logger();
