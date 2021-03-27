import { Level, LoggerConfig } from '../interfaces';
import { STDERR, STDOUT } from './std';

export type InputConfig = Required<Pick<LoggerConfig, 'name' | 'level' | 'colorful' | 'stdout' | 'stderr'>>
  & Pick<LoggerConfig, 'fileout' | 'fileerr'>;

export const DEFAULT_CONFIG: InputConfig = {
  name: 'default',
  level: Level.ALL,
  colorful: true,
  stdout: STDOUT,
  stderr: STDERR,
};
