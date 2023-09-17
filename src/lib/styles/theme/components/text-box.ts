import { inputAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(inputAnatomy.keys);

export const TextboxTheme = defineMultiStyleConfig({
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
    outline: ({ colorMode }) => {
      const isLightMode = colorMode === 'light';
      return definePartsStyle({
        field: {
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
        },
      });
    },
  },
  sizes: {
    md: definePartsStyle({
      field: {
        fontSize: 'md',
        lineHeight: 'md',
        letterSpacing: 'normal',
      },
    }),
  },
  defaultProps: {
    variant: 'outline',
    size: 'md',
  },
});
