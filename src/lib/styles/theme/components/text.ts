import { ComponentStyleConfig } from '@chakra-ui/react';
export const TextTheme: ComponentStyleConfig = {
  baseStyle: {
    fontSize: 'xs',
    lineHeight: 'xs',
    letterSpacing: 'md',
    fontWeight: '400',
  },
  sizes: {
    'special-header': {
      fontSize: { base: '3xl', md: '6xl', lg: '7xl', xl: '8xl' },
      lineHeight: { base: '3xl', md: '6xl', lg: '7xl', xl: '8xl' },
      fontWeight: 'bold',
      letterSpacing: 'normal',
    },

    'special-sub-header': {
      fontSize: { base: '2xs', md: 'md', lg: 'lg', xl: '2xl' },
      lineHeight: { base: '2xs', md: 'md', lg: 'lg', xl: '2xl' },
      fontWeight: 'thin',
      letterSpacing: { base: '5xs', md: 'xs', lg: 'lg', xl: '2xl' },
    },

    'page-title': {
      fontSize: { base: 'xl', md: '3xl', lg: '4xl', xl: '5xl' },
      lineHeight: { base: 'xl', md: '3xl', lg: '4xl', xl: '5xl' },
      fontWeight: 'bold',
      letterSpacing: 'normal',
    },

    'sm-para': {
      fontSize: { base: 'xs', md: 'xs', lg: 'sm', xl: 'sm' },
      lineHeight: { base: 'md', md: 'md', lg: 'lg', xl: 'lg' },
      fontWeight: 'light',
      letterSpacing: 'normal',
    },

    'md-para': {
      fontSize: { base: 'xs', md: 'xs', lg: 'sm', xl: 'md' },
      lineHeight: { base: 'md', md: 'md', lg: 'lg', xl: 'xl' },
      fontWeight: 'light',
      letterSpacing: 'normal',
    },

    'lg-para': {
      fontSize: { base: 'xs', md: 'sm', lg: 'md', xl: 'lg' },
      lineHeight: { base: 'lg', md: 'xl', lg: '2xl', xl: '3xl' },
      fontWeight: 'light',
      letterSpacing: 'normal',
    },

    'card-title': {
      fontSize: { base: 'md', md: 'lg', lg: '2xl', xl: '3xl' },
      lineHeight: { base: 'xl', md: '2xl', lg: '3xl', xl: '4xl' },
      fontWeight: 'bold',
      letterSpacing: 'normal',
    },

    'sm-button': {
      fontSize: { base: 'md', md: 'lg', lg: '2xl', xl: '3xl' },
      lineHeight: { base: 'xl', md: '2xl', lg: '3xl', xl: '4xl' },
      fontWeight: 'semiBold',
      letterSpacing: 'normal',
    },

    '2xs': {
      fontSize: '2xs',
      lineHeight: 'md',
      letterSpacing: 'normal',
    },

    xs: {
      fontSize: 'xs',
      lineHeight: 'lg',
      letterSpacing: 'normal',
    },

    md: {
      fontSize: 'md',
      lineHeight: 'xl',
      letterSpacing: 'normal',
    },

    lg: {
      fontSize: 'lg',
      lineHeight: 'xl',
      letterSpacing: 'normal',
    },

    xl: {
      fontSize: 'xl',
      lineHeight: '2xl',
      letterSpacing: 'normal',
    },

    '2xl': {
      fontSize: '2xl',
      fontWeight: 'bold',
      lineHeight: '3xl',
      letterSpacing: 'normal',
    },

    '3xl': {
      fontSize: '3xl',
      fontWeight: 'bold',
      lineHeight: '4xl',
      letterSpacing: 'normal',
    },

    '4xl': {
      fontSize: '4xl',
      fontWeight: 'bold',
      lineHeight: '5xl',
      letterSpacing: 'normal',
    },

    '5xl': {
      fontSize: '5xl',
      fontWeight: 'bold',
      lineHeight: '6xl',
      letterSpacing: 'normal',
    },

    '6xl': {
      fontSize: '6xl',
      fontWeight: 'bold',
      lineHeight: '7xl',
      letterSpacing: 'normal',
    },

    '7xl': {
      fontSize: '7xl',
      fontWeight: 'bold',
      lineHeight: '8xl',
      letterSpacing: 'normal',
    },

    '8xl': {
      fontSize: '8xl',
      fontWeight: 'bold',
      lineHeight: '9xl',
      letterSpacing: 'normal',
    },
  },

  defaultProps: {
    size: '2xs',
  },
};
