/** Color. */
export type Color = string;

/** Style. */
export interface Style {
  background: Color;
  font: Color;
  name: string;
}

/** Styles. */
export interface Styles {
  ASSERT: {
    TRUE: Style;
    FALSE: Style;
  };
  DEBUG: Style;
  INFO: Style;
  WARN: Style;
  ERROR: Style;
}
