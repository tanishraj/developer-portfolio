import { ComponentStyleConfig } from '@chakra-ui/react';

export const TextareaTheme: ComponentStyleConfig = {
  baseStyle: {
    borderRadius: 0,
    minHeight: '300px',
    minWidth: '180px',
  },
  variants: {
    outline: {
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
      _focusVisible: {
        boxShadow: 'none',
      },
      _disabled: {
        borderColor: '#444',
        color: '#444',
        pointerEvents: 'none',
        opacity: 1,
      },
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
