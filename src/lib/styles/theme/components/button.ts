import { defineStyleConfig } from '@chakra-ui/react';

export const ButtonTheme = defineStyleConfig({
  baseStyle: {
    py: '3xs',
    px: 'xs',
    borderRadius: 0,
    background: 'black',
    minHeight: '50px',
    _active: {
      transform: 'scale(0.95)',
    },
  },
  variants: {
    // TODO - pass the parameters as colorMode
    outline: () => ({
      borderColor: '#444',
      color: 'white',
      _hover: {
        borderColor: 'white',
        background: 'black',
      },
      _focus: {
        borderColor: 'white',
        background: 'black',
      },
      _disabled: {
        borderColor: '#444',
        color: '#444',
        pointerEvents: 'none',
        opacity: 1,
      },
    }),
  },
  sizes: {
    md: {
      minWidth: '180px',
      minHeight: '60px',
      fontSize: 'md',
      lineHeight: 'md',
      letterSpacing: 'md',
    },
  },
  defaultProps: {
    variant: 'outline',
    size: 'md',
  },
});
