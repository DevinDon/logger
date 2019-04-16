import { Console } from 'console';
import { createWriteStream } from 'fs';
import { Writable } from 'stream';
import { COLORS, Level, Option, STDNULL, Style, STYLES } from './@types';
import { color } from './color';

/**
 * Colorful logger support log to file.
 *
 * @extends Console
 * @author IInfinity
 */
export class Logger extends Console {

  /** Global level. */
  static LEVEL: Level = Level.ALL;
  /** All loggers. */
  private static map: Map<string, Logger> = new Map();

  /**
   * Get logger instance by name.
   *
   * @param {string} name Name of logger.
   * @returns {Logger | undefined} Special logger or undefined.
   */
  public static getLogger(name: string = 'default'): Logger | undefined {
    return Logger.map.get(name);
  }

  /**
   * Set logger instance into map.
   *
   * @param {Logger} logger Saved logger.
   * @returns {void} Nothing.
   */
  // tslint:disable-next-line: no-shadowed-variable
  public static setLogger(logger: Logger): void {
    Logger.map.set(logger.name, logger);
  }

  /** Colorful mode or colorless mode. */
  public colorful: boolean;
  /** Log level, it may: `Level.ALL`, `Level.DEBUG`, `Level.INFO`, `Level.WARN`, `Level.ERROR` & `Level.NONE`. */
  public level: Level;
  /** STDOUT to file. */
  public fileout?: Writable;
  /** STDERR to file. */
  public fileerr?: Writable;
  /** STDOUT of this logger. */
  public stdout?: Writable;
  /** STDERR of this logger. */
  public stderr?: Writable;
  /** Logger name. */
  public readonly name: string;

  /**
   * Create a new logger.
   *
   * Such as `const logger = new Logger('your logger name')`.
   *
   * If you have not provide stdout / stderr, it will not output on stdout / stderr.
   *
   * The same as fileout / fileerr.
   *
   * @param {Option | string} option Logger option or name.
   */
  constructor(option: Option | string) {
    if (typeof option === 'string') {
      super({
        stdout: process.stdout,
        stderr: process.stderr,
        colorMode: true
      });
      this.colorful = true;
      this.level = Level.ALL;
      this.name = option;
      this.stdout = process.stdout;
      this.stderr = process.stderr;
    } else {
      super({
        stdout: option.stdout || STDNULL,
        stderr: option.stderr,
        colorMode: option.colorful
      });
      this.colorful = typeof option.colorful === 'boolean' ? option.colorful : true;
      this.level = option.level || Level.ALL; // default to ALL level
      this.name = option.name;
      this.fileout = option.fileout ? createWriteStream(option.fileout, { flags: 'a' }) : undefined;
      this.fileerr = option.fileerr ? createWriteStream(option.fileerr, { flags: 'a' }) : undefined;
      this.stdout = option.stdout;
      this.stderr = option.stderr;
    }
    Logger.map.set(this.name, this);
  }

  /**
   * Get format time.
   *
   * @param {Style} style Output style.
   * @returns {string} Time string.
   */
  private getTime(style: Style, colorful: boolean = this.colorful): string {
    return colorful
      ? color(style.font, new Date().toLocaleString()) + ' ' + color(style.background, color(COLORS.FONT.black, `[${style.name}]`)) + ' '
      : `${new Date().toLocaleString()} [${style.name}]`;
  }

  // tslint:disable: no-unused-expression

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
      this.stdout && this.stdout.write(`${this.getTime(STYLES.ASSERT.TRUE)} ${same}\n`);
      this.fileout && this.fileout.write(`${this.getTime(STYLES.ASSERT.TRUE, false)} ${same}\n`);
      return true;
    } else {
      this.stderr && this.stderr.write(`${this.getTime(STYLES.ASSERT.FALSE)} ${different}\n`);
      this.fileerr && this.fileerr.write(`${this.getTime(STYLES.ASSERT.FALSE, false)} ${different}\n`);
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
      this.stdout && this.stdout.write(`${this.getTime(STYLES.DEBUG)} ${message.join(' ')}\n`);
      this.fileout && this.fileout.write(`${this.getTime(STYLES.DEBUG, false)} ${message.join(' ')}\n`);
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
      this.stdout && this.stdout.write(`${this.getTime(STYLES.INFO)} ${message.join(' ')}\n`);
      this.fileout && this.fileout.write(`${this.getTime(STYLES.INFO, false)} ${message.join(' ')}\n`);
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
      this.stderr && this.stderr.write(`${this.getTime(STYLES.WARN)} ${message.join(' ')}\n`);
      this.fileerr && this.fileerr.write(`${this.getTime(STYLES.WARN, false)} ${message.join(' ')}\n`);
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
      this.stderr && this.stderr.write(`${this.getTime(STYLES.ERROR)} ${message.join(' ')}\n`);
      this.fileerr && this.fileerr.write(`${this.getTime(STYLES.ERROR, false)} ${message.join(' ')}\n`);
    }
  }

  /**
   * Set level of this logger.
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

export const logger = new Logger('default');
