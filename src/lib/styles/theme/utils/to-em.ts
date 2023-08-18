export function toEm(pixels: number, rootFontSize = 16) {
  return `${pixels / rootFontSize}em`;
}
