export * from './@types';
import { AssertionError } from 'assert';
import { Console } from 'console';
import { createWriteStream } from 'fs';
import { Writable } from 'stream';
import { COLORS, Level, Option, Style, STYLES } from './@types';

/**
 * Colorful logger support log to file.
 *
 * @extends Console
 * @author IInfinity
 */
export class Logger extends Console {

  /** All loggers. */
  private static map: Map<string, Logger> = new Map();

  /**
   * Get logger instance with name.
   *
   * @param {string} name Name of logger.
   * @returns {Logger} Special logger. If not exist, return default logger.
   */
  static getLogger(name: string = 'default'): Logger {
    return Logger.map.get(name) || Logger.map.get('default') as Logger;
  }

  private colorful: boolean;
  private level: Level;
  private name: string;
  private fileout?: Writable;
  private fileerr?: Writable;
  private stdout: Writable;
  private stderr: Writable;

  /**
   * Create a new logger.
   *
   * @param {Partial<Option>} option Logger option.
   */
  constructor(option: Partial<Option> = {}) {
    super({ // create console instance
      stdout: option.stdout || process.stdout,
      stderr: option.stderr || process.stderr,
      colorMode: typeof option.colorful === 'undefined' ? true : option.colorful
    });
    this.colorful = typeof option.colorful === 'undefined' ? true : option.colorful; // default to enable colorful console
    this.level = option.level || Level.DEBUG; // default to debug level
    this.name = option.name || 'default';
    this.fileout = option.fileout ? createWriteStream(option.fileout, { flags: 'a' }) : undefined;
    this.fileerr = option.fileerr ? createWriteStream(option.fileerr, { flags: 'a' }) : undefined;
    this.stdout = option.stdout || process.stdout;
    this.stderr = option.stderr || process.stderr;
    Logger.map.set(option.name || 'default', this);
  }

  /**
   * Get format time.
   *
   * @param {Style} style Output style.
   * @returns {string} Time string.
   */
  private getTime(style: Style, color: boolean = this.colorful): string {
    return color
      ? `${style.font}${new Date().toLocaleString()}${COLORS.CONSOLE.reset} ${style.background}${COLORS.FONT.black}[${style.name}]${COLORS.CONSOLE.reset}`
      : `${new Date().toLocaleString()} [${style.name}]`;
  }

  /**
   * A simple assertion test that verifies whether `condition` is truthy.
   * If it is not, an `AssertionError` will be record but not throw.
   * If provided, the error message is formatted using `util.format()` and used as the error message.
   *
   * @param {boolean} condition Condition to assert.
   * @param {string} same If same, this message will be display.
   * @param {string} different If different, this message will be display.
   * @returns {boolean} True or false.
   */
  assert(condition: boolean, same: string, different: string): boolean {
    if (condition) {
      this.stdout.write(`${this.getTime(STYLES.ASSERT.TRUE)} ${same}\n`);
      if (this.fileout) {
        this.fileout.write(`${this.getTime(STYLES.ASSERT.TRUE, false)} ${same}\n`);
      }
      return true;
    } else {
      this.stderr.write(`${this.getTime(STYLES.ASSERT.FALSE)} ${different}\n`);
      if (this.fileerr) {
        this.fileerr.write(`${this.getTime(STYLES.ASSERT.FALSE, false)} ${different}\n`);
      }
      return false;
      // throw AssertionError;
    }
  }

  /**
   * Print debug message to stdout, with blue color.
   *
   * @param {any} message Message you want to print.
   * @returns {void} Nothing.
   */
  debug(...message: any[]): void {
    if (Level.DEBUG >= this.level) {
      this.stdout.write(`${this.getTime(STYLES.DEBUG)} ${message.join(' ')}\n`);
      if (this.fileout) {
        this.fileout.write(`${this.getTime(STYLES.DEBUG, false)} ${message.join(' ')}\n`);
      }
    }
  }

  /**
   * Print information to stdout, with green color.
   *
   * @param {any} message Message you want to print.
   * @returns {void} Nothing.
   */
  info(...message: any[]): void {
    if (Level.INFO >= this.level) {
      this.stdout.write(`${this.getTime(STYLES.INFO)} ${message.join(' ')}\n`);
      if (this.fileout) {
        this.fileout.write(`${this.getTime(STYLES.INFO, false)} ${message.join(' ')}\n`);
      }
    }
  }

  /**
   * Print warn message to stderr, with yellow color.
   *
   * @param {any} message Message you want to print.
   * @returns {void} Nothing.
   */
  warn(...message: any[]): void {
    if (Level.WARN >= this.level) {
      this.stderr.write(`${this.getTime(STYLES.WARN)} ${message.join(' ')}\n`);
      if (this.fileerr) {
        this.fileerr.write(`${this.getTime(STYLES.WARN, false)} ${message.join(' ')}\n`);
      }
    }
  }

  /**
   * Print error message to stderr, with red color.
   *
   * @param {any} message Message you want to print.
   * @returns {void} Nothing.
   */
  error(...message: any[]): void {
    if (Level.ERROR >= this.level) {
      this.stderr.write(`${this.getTime(STYLES.ERROR)} ${message.join(' ')}\n`);
      if (this.fileerr) {
        this.fileerr.write(`${this.getTime(STYLES.ERROR, false)} ${message.join(' ')}\n`);
      }
    }
  }

  /**
   * Set log level.
   *
   * @param {Level} level Log level.
   * @returns {Level} Log level.
   */
  setLevel(level: Level): Level {
    return this.level = level;
  }

  toString(): string {
    return `Logger name: ${this.name}. Log to file: ${this.fileout && this.fileerr}.`;
  }

}

export const logger = new Logger();

export default Logger;
