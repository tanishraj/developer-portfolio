import { defineStyleConfig } from '@chakra-ui/react';

export const ButtonTheme = defineStyleConfig({
  baseStyle: {
    py: '3xs',
    px: 'xs',
    borderRadius: 0,
    _active: {
      transform: 'scale(0.95)',
    },
  },
  variants: {
    outline: ({ colorMode }) => {
      const isLightMode = colorMode === 'light';
      return {
        borderColor: '#444',
        color: isLightMode ? 'black' : 'white',
        _hover: {
          borderColor: isLightMode ? 'black' : 'white',
          background: isLightMode ? 'white' : 'black',
        },
        _focus: {
          borderColor: isLightMode ? 'black' : 'white',
          background: isLightMode ? 'white' : 'black',
        },
        _disabled: {
          borderColor: '#444',
          color: '#444',
          pointerEvents: 'none',
          opacity: 1,
        },
      };
    },
  },
  sizes: {
    md: {
      minWidth: '180px',
      minHeight: '60px',
      size: 'sm-button',
    },
  },
  defaultProps: {
    variant: 'outline',
    size: 'md',
  },
});
