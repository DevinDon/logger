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

  /** Console. */
  private console: Console;

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

  constructor(
    private stdout: NodeJS.WritableStream = process.stdout,
    private stderr: NodeJS.WritableStream = process.stderr,
    private colorMode: boolean = true
  ) {
    this.console = new Console({ stdout, stderr, colorMode });
  }

  private getTime(style: Style): string {
    return this.colorMode
      ? `${style.color}${new Date().toLocaleString()}${STYLE.CONSOLE.reset} ${style.background}${STYLE.COLOR.black}[${style.name}]${STYLE.CONSOLE.reset}`
      : `${new Date().toLocaleString()} [${style.name}]`;
  }

  /**
   * Print log to stdout, without style and format.
   *
   * @param {any} message Message you want to print.
   * @returns {void} Nothing.
   */
  log(...message: any[]): void {
    this.console.log(message.join(' '));
  }

  /**
   * Print debug message to stdout, with blue color.
   *
   * @param {any} message Message you want to print.
   * @returns {void} Nothing.
   */
  debug(...message: any[]): void {
    this.console.debug(`${this.getTime(this.LEVEL.debug)} ${message.join(' ')}`);
  }

  /**
   * Print information to stdout, with green color.
   *
   * @param {any} message Message you want to print.
   * @returns {void} Nothing.
   */
  info(...message: any[]): void {
    this.console.info(`${this.getTime(this.LEVEL.info)} ${message.join(' ')}`);
  }

  /**
   * Print warn message to stderr, with yellow color.
   *
   * @param {any} message Message you want to print.
   * @returns {void} Nothing.
   */
  warn(...message: any[]): void {
    this.console.warn(`${this.getTime(this.LEVEL.warn)} ${message.join(' ')}`);
  }

  /**
   * Print error message to stderr, with red color.
   *
   * @param {any} message Message you want to print.
   * @returns {void} Nothing.
   */
  error(...message: any[]): void {
    this.console.error(`${this.getTime(this.LEVEL.error)} ${message.join(' ')}`);
  }

}

export const logger = new Logger();

export default Logger;
