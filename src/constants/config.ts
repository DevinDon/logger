import { LevelMap, LoggerConfig } from '../interfaces';
import { STDERR, STDOUT } from './std';

export type InputConfig = Required<
  Pick<LoggerConfig, 'name' | 'level' | 'colorful' | 'stdout' | 'stderr'>
> & Partial<
  Pick<LoggerConfig, 'logout' | 'logerr'>
>;

export const DEFAULT_CONFIG: InputConfig = {
  name: 'default',
  level: LevelMap.ALL,
  colorful: true,
  stdout: STDOUT,
  stderr: STDERR,
};
