import { Theme } from '@chakra-ui/react';
import { breakpoints } from './foundation/breakpoints';

export const semanticTokens: Omit<Theme['semanticTokens'], 'colors'> = {
  colors: {
    white: '#fff',
    black: '#000',
    'chakra-body-text': {
      _light: 'black',
      _dark: 'white',
    },
    'chakra-body-bg': {
      _light: 'white',
      _dark: 'black',
    },
    'chakra-border-color': {
      _light: 'rgba(0,0,0,0.2)',
      _dark: 'rgba(255,255,255,0.2)',
    },
  },
  sizes: {
    ...breakpoints,
  },
};
