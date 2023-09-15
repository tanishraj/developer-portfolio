import { ComponentStyleConfig } from '@chakra-ui/react';

export const TextareaTheme: ComponentStyleConfig = {
  baseStyle: {
    borderRadius: 0,
    minHeight: '300px',
    minWidth: '180px',
    py: '3xs',
    px: '2xs',
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
        _focusVisible: {
          boxShadow: 'none',
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
      fontSize: 'md',
      lineHeight: 'md',
      letterSpacing: 'md',
    },
  },
  defaultProps: {
    variant: 'outline',
    size: 'md',
  },
};
