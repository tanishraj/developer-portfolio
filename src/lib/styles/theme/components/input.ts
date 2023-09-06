import { inputAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(inputAnatomy.keys);

export const InputTheme = defineMultiStyleConfig({
  baseStyle: definePartsStyle({
    field: {
      minWidth: '180px',
      minHeight: '60px',
      borderRadius: 0,
      py: '3xs',
      px: '2xs',
      outline: 'none',
    },
  }),
  variants: {
    outline: definePartsStyle({
      field: {
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
    }),
  },
  sizes: {
    md: definePartsStyle({
      field: {
        fontSize: 'md',
        lineHeight: 'md',
        letterSpacing: 'md',
      },
    }),
  },
  defaultProps: {
    variant: 'outline',
    size: 'md',
  },
});
