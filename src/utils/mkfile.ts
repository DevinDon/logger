import { closeSync, existsSync, mkdirSync, openSync } from 'fs';
import { parse } from 'path';

export const mkfile = (path: string): string => {
  const { dir, base: file } = parse(path);
  !existsSync(dir) && mkdirSync(dir, { recursive: true });
  !existsSync(path) && closeSync(openSync(path, 'w'));
  return path;
};
