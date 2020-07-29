import { COLORS } from './@types';

export function color(style: string, content: string): string {
  return `${style}${content}${COLORS.CONSOLE.reset}`;
}

export function backgroundBlack(content: string): string {
  return color(COLORS.BACKGROUND.black, content);
}

export function backgroundBlue(content: string): string {
  return color(COLORS.BACKGROUND.blue, content);
}

export function backgroundCyan(content: string): string {
  return color(COLORS.BACKGROUND.cyan, content);
}

export function backgroundGreen(content: string): string {
  return color(COLORS.BACKGROUND.green, content);
}

export function backgroundMagenta(content: string): string {
  return color(COLORS.BACKGROUND.magenta, content);
}

export function backgroundRed(content: string): string {
  return color(COLORS.BACKGROUND.red, content);
}

export function backgroundWhite(content: string): string {
  return color(COLORS.BACKGROUND.white, content);
}

export function backgroundYellow(content: string): string {
  return color(COLORS.BACKGROUND.yellow, content);
}

export function fontBlack(content: string): string {
  return color(COLORS.FONT.black, content);
}

export function fontBlue(content: string): string {
  return color(COLORS.FONT.blue, content);
}

export function fontCyan(content: string): string {
  return color(COLORS.FONT.cyan, content);
}

export function fontGreen(content: string): string {
  return color(COLORS.FONT.green, content);
}

export function fontMagenta(content: string): string {
  return color(COLORS.FONT.magenta, content);
}

export function fontRed(content: string): string {
  return color(COLORS.FONT.red, content);
}

export function fontWhite(content: string): string {
  return color(COLORS.FONT.white, content);
}

export function fontYellow(content: string): string {
  return color(COLORS.BACKGROUND.yellow, content);
}
