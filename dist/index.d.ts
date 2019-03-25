import { Level } from './@types';
export declare const STYLE: {
    BACKGROUND: {
        black: string;
        blue: string;
        cyan: string;
        green: string;
        magenta: string;
        red: string;
        yellow: string;
        white: string;
    };
    COLOR: {
        black: string;
        blue: string;
        cyan: string;
        green: string;
        magenta: string;
        red: string;
        yellow: string;
        white: string;
    };
    CONSOLE: {
        backLine: string;
        bold: string;
        cleanLine: string;
        dim: string;
        italic: string;
        reset: string;
        reverse: string;
        strikethrough: string;
        underscore: string;
    };
};
export declare class Logger {
    private std;
    LEVEL: Level;
    constructor();
    private getTime;
    log(message: string): void;
    debug(message: string): void;
    info(message: string): void;
    warn(message: string): void;
    error(message: string): void;
}
export default Logger;
export declare const logger: Logger;
