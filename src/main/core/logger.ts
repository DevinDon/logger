import { AssertionError } from 'assert';
import { Console } from 'console';
import { createWriteStream } from 'fs';
import { Writable } from 'stream';
import { COLORS, DEFAULT_CONFIG, InputConfig, STDNULL, STDOUT, STYLES } from '../constants';
import { Level, LoggerConfig, Style } from '../interfaces';
import { color } from '../utils';

/**
 * Colorful logger support log to file(s).
 *
 * @extends Console
 * @author IInfinity
 */
export class Logger extends Console {

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
   * @param {LoggerConfig} config Logger config or name.
   */
  constructor(config: LoggerConfig = { name: 'default' }) {
    const { name, level, colorful, stdout, stderr, fileout, fileerr }: InputConfig = Object.assign({}, DEFAULT_CONFIG, config);
    super({
      stdout,
      stderr,
      colorMode: colorful,
    });
    this.colorful = typeof colorful === 'boolean' ? colorful : true;
    this.level = level; // default to ALL level
    this.name = name;
    this.fileout = fileout ? createWriteStream(fileout, { flags: 'a' }) : undefined;
    this.fileerr = fileerr ? createWriteStream(fileerr, { flags: 'a' }) : undefined;
    this.stdout = stdout;
    this.stderr = stderr;
    Logger.map.set(this.name, this);
  }

  /**
   * Get format time.
   *
   * @param {Style} style Output style.
   * @returns {string} Time string.
   */
  private getTime(style: Style, colorful: boolean = this.colorful): string {
    const date = new Date();
    const year = date.getFullYear();
    const month = `${date.getMonth() + 1}`.padStart(2, '0');
    const day = `${date.getDate()}`.padStart(2, '0');
    const hour = `${date.getHours()}`.padStart(2, '0');
    const minute = `${date.getMinutes()}`.padStart(2, '0');
    const second = `${date.getSeconds()}`.padStart(2, '0');
    const output = `${year}-${month}-${day} ${hour}:${minute}:${second}`;
    return colorful
      ? color(style.font, output) + ' ' + color(style.background, color(COLORS.FONT.black, `[${style.name}]`)) + ' '
      : `${output} [${style.name}]`;
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
   * @returns {void} void.
   */
  public assert(condition: boolean, same: string = 'assert success', different: string = 'assert failed'): void {
    if (condition) {
      this.stdout && this.stdout.write(`${this.getTime(STYLES.ASSERT.TRUE)} ${same}\n`);
      this.fileout && this.fileout.write(`${this.getTime(STYLES.ASSERT.TRUE, false)} ${same}\n`);
    } else {
      this.stderr && this.stderr.write(`${this.getTime(STYLES.ASSERT.FALSE)} ${different}\n`);
      this.fileerr && this.fileerr.write(`${this.getTime(STYLES.ASSERT.FALSE, false)} ${different}\n`);
      throw new AssertionError({ message: different });
    }
  }

  /**
   * Print debug message to stdout, with blue color.
   *
   * @param {any} message Message you want to print.
   * @returns {void} Nothing.
   */
  public debug(...message: any[]): void {
    if (this.level === Level.ALL || this.level === Level.DEBUG) {
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
  public info(...message: any[]): void {
    if (this.level === Level.ALL || this.level === Level.DEBUG || this.level === Level.INFO) {
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
  public warn(...message: any[]): void {
    if (this.level === Level.ALL || this.level === Level.DEBUG || this.level === Level.INFO || this.level === Level.WARN) {
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
  public error(...message: any[]): void {
    if (this.level === Level.ALL || this.level === Level.DEBUG || this.level === Level.INFO || this.level === Level.WARN || this.level === Level.ERROR) {
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
  public setLevel(level: Level): Level {
    return this.level = level;
  }

  public toString(): string {
    return `Logger name: ${this.name}. Log to file: ${this.fileout && this.fileerr}.`;
  }

}

export const logger = new Logger();
