export interface Level {
  [index: string]: Style;
}

export type Color = string;

export interface Style {
  background: Color;
  color: Color;
  name: string;
}
