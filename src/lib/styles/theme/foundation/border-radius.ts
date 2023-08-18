import { toRem } from '../utils/to-rem';

const radii = {
  none: '0',
  sm: toRem(2),
  base: toRem(4),
  md: toRem(6),
  lg: toRem(8),
  xl: toRem(12),
  '2xl': toRem(16),
  '3xl': toRem(24),
  full: '100%',
};

export const borderRadius = {
  radii,
};
