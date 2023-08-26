import { Theme } from '@chakra-ui/react';
import { breakpoints } from './foundation/breakpoints';

export const semanticTokens: Omit<Theme['semanticTokens'], 'colors'> = {
  colors: {
    white: '#fff',
    black: '#000',
  },
  sizes: {
    ...breakpoints,
  },
};
