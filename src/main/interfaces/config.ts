import { Writable } from 'stream';
import { Level } from './level';

/** Logger config. */
export interface LoggerConfig {
  /** Colorful logger, default to true. */
  colorful?: boolean;
  /** Path to save error. */
  fileerr?: string;
  /** Path to save output. */
  fileout?: string;
  /** Log level, default to ALL. */
  level?: Level;
  /** Logger name. */
  name: string;
  /** Standard output. */
  stdout?: Writable;
  /** Standard error. */
  stderr?: Writable;
}
