import { Writable } from 'stream';
import { LevelMap } from './level';

/** Logger config. */
export interface LoggerConfig {
  /** Colorful logger, default to true. */
  colorful?: boolean;
  /** Path to save error. */
  logerr?: string;
  /** Path to save output. */
  logout?: string;
  /** Log level, default to ALL. */
  level?: LevelMap;
  /** Logger name. */
  name: string;
  /** Standard output. */
  stdout?: Writable;
  /** Standard error. */
  stderr?: Writable;
}
