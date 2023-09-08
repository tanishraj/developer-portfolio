import { toRem } from '../utils/to-rem';

const fonts = {
  body: "'Poppins', sans-serif",
  heading: "'Poppins', sans-serif",
  mono: 'Menlo, monospace',
};

const fontSizes = {
  '5xs': toRem(4),
  '4xs': toRem(8),
  '3xs': toRem(12),
  '2xs': toRem(16),
  xs: toRem(20),
  sm: toRem(24),
  md: toRem(28),
  lg: toRem(32),
  xl: toRem(36),
  '2xl': toRem(40),
  '3xl': toRem(48),
  '4xl': toRem(64),
  '5xl': toRem(96),
  '6xl': toRem(120),
  '7xl': toRem(160),
  '8xl': toRem(200),
};

const lineHeights = {
  '5xs': toRem(4),
  '4xs': toRem(8),
  '3xs': toRem(12),
  '2xs': toRem(16),
  xs: toRem(20),
  sm: toRem(24),
  md: toRem(28),
  lg: toRem(32),
  xl: toRem(36),
  '2xl': toRem(40),
  '3xl': toRem(48),
  '4xl': toRem(64),
  '5xl': toRem(96),
  '6xl': toRem(120),
  '7xl': toRem(160),
  '8xl': toRem(200),
  '9xl': toRem(240),
};

const fontWeights = {
  hairline: 100,
  thin: 200,
  light: 300,
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
  black: 900,
};

const letterSpacings = {
  '5xs': toRem(4),
  '4xs': toRem(8),
  '3xs': toRem(12),
  '2xs': toRem(16),
  xs: toRem(20),
  sm: toRem(24),
  md: toRem(28),
  lg: toRem(32),
  xl: toRem(36),
  '2xl': toRem(40),
  '3xl': toRem(48),
  '4xl': toRem(64),
  '5xl': toRem(96),
  '6xl': toRem(120),
  '7xl': toRem(160),
  '8xl': toRem(200),
  '9xl': toRem(240),
};

export const typography = {
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  letterSpacings,
};
