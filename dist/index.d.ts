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
    log(message: any): void;
    debug(message: any): void;
    info(message: any): void;
    warn(message: any): void;
    error(message: any): void;
}
export default Logger;
export declare const logger: Logger;
