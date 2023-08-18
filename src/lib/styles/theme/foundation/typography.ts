import { toRem } from '../utils/to-rem';

const fonts = {
  body: 'system-ui, sans-serif',
  heading: 'Georgia, serif',
  mono: 'Menlo, monospace',
};

const fontSizes = {
  '3xs': toRem(8),
  '2xs': toRem(12),
  xs: toRem(16),
  sm: toRem(20),
  md: toRem(24),
  lg: toRem(28),
  xl: toRem(32),
  '2xl': toRem(40),
  '3xl': toRem(48),
  '4xl': toRem(64),
  '5xl': toRem(80),
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

const lineHeights = {
  '3xs': toRem(8),
  '2xs': toRem(12),
  xs: toRem(16),
  sm: toRem(20),
  md: toRem(24),
  lg: toRem(28),
  xl: toRem(32),
  '2xl': toRem(40),
  '3xl': toRem(48),
  '4xl': toRem(64),
  '5xl': toRem(80),
  '6xl': toRem(92),
};

const letterSpacings = {
  '2xs': '-0.02em',
  xs: '-0.015em',
  sm: '-0.01em',
  md: '-0.005em',
  lg: '0',
  xl: '0.005em',
  '2xl': '0.01em',
};

export const typography = {
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  letterSpacings,
};
