import { Styles } from '../interfaces';
import { COLORS } from './color';

/** Output style. */
export const STYLES: Styles = {
  ASSERT: {
    TRUE: {
      name: 'ASSERT',
      background: COLORS.BACKGROUND.cyan,
      font: COLORS.FONT.cyan,
    },
    FALSE: {
      name: 'ASSERT',
      background: COLORS.BACKGROUND.red,
      font: COLORS.FONT.red,
    },
  },
  DEBUG: {
    name: 'DEBUG ',
    background: COLORS.BACKGROUND.blue,
    font: COLORS.FONT.blue,
  },
  INFO: {
    name: ' INFO ',
    background: COLORS.BACKGROUND.green,
    font: COLORS.FONT.green,
  },
  WARN: {
    name: ' WARN ',
    background: COLORS.BACKGROUND.yellow,
    font: COLORS.FONT.yellow,
  },
  ERROR: {
    name: 'ERROR ',
    background: COLORS.BACKGROUND.red,
    font: COLORS.FONT.red,
  },
};
