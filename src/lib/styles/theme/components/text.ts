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
      lineHeight: '2xs',
      letterSpacing: 'md',
    },
    xs: {
      fontSize: 'xs',
      lineHeight: 'xs',
      letterSpacing: 'md',
    },
    sm: {
      fontSize: 'sm',
      lineHeight: 'md',
      letterSpacing: 'lg',
    },
    'md-desktop': {
      fontSize: 'xl',
      lineHeight: 'xl',
      letterSpacing: 'md',
    },
    'lg-desktop': {
      fontSize: '3xl',
      lineHeight: '3xl',
      letterSpacing: 'sm',
    },
    'xl-desktop': {
      fontSize: '4xl',
      lineHeight: '4xl',
      letterSpacing: 'xs',
    },
    '2xl-desktop': {
      fontSize: '5xl',
      lineHeight: '5xl',
      letterSpacing: '2xs',
    },
    'md-mobile': {
      fontSize: 'md',
      lineHeight: 'lg',
      letterSpacing: 'lg',
    },
    'lg-mobile': {
      fontSize: 'lg',
      lineHeight: 'lg',
      letterSpacing: 'lg',
    },
    'xl-mobile': {
      fontSize: '2xl',
      lineHeight: '2xl',
      letterSpacing: 'md',
    },
    '2xl-mobile': {
      fontSize: '3xl',
      lineHeight: '3xl',
      letterSpacing: 'md',
    },
  },
  defaultProps: {
    size: 'xs',
  },
};
