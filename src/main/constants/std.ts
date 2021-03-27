import { Writable } from 'stream';

/** Like `/dev/null`, it will display nothing. */
export const STDNULL: Writable = new Writable({ write: () => { } });
