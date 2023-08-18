export function toRem(pixels: number, rootFontSize = 16) {
  return `${pixels / rootFontSize}rem`;
}
