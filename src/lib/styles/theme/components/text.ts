import { ComponentStyleConfig } from '@chakra-ui/react';
export const TextTheme: ComponentStyleConfig = {
  baseStyle: {
    fontSize: 'xs',
    lineHeight: 'xs',
    letterSpacing: 'md',
    fontWeight: '400',
  },
  sizes: {
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
