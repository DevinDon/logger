import { Writable } from 'stream';

/** Like `/dev/null`, it will display nothing. */
export const STDNULL: Writable = new Writable({ write: () => { } });

export const STDOUT: Writable = process.stdout;

export const STDERR: Writable = process.stderr;
