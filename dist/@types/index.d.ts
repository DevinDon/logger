export interface Level {
    [index: string]: Style;
}
export declare type Color = string;
export interface Style {
    background: Color;
    color: Color;
    name: string;
}
