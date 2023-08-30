import { Box, BoxProps, ResponsiveValue, keyframes } from '@chakra-ui/react';

type IconStyleType = {
  iconStyle?: BoxProps;
  borderStyle?: BoxProps;
  animationStyle?: BoxProps;
};

export interface HexagonProps extends BoxProps {
  size?: ResponsiveValue<string>;
  outlineSize?: string;
  isAnimate?: boolean;
  hexagonStyles?: IconStyleType;
}

export const Hexagon = (props: HexagonProps) => {
  const {
    size = 'md',
    outlineSize = 0,
    hexagonStyles,
    isAnimate = false,
    ...restProps
  } = props ?? {};

  const pulseEffect = keyframes`
  from {
    transform: scale(1);
    opacity: 1;
  }
  to {
    transform: scale(2);
    opacity: 0; 
  }
`;

  return (
    <Box
      position='relative'
      height={size}
      width={size}
      {...restProps}
    >
      <Box
        position='absolute'
        height={`calc(100% - ${outlineSize} - ${outlineSize})`}
        width={`calc(100% - ${outlineSize} - ${outlineSize})`}
        top={`${outlineSize}`}
        left={`${outlineSize}`}
        zIndex={1}
        clipPath='polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
        {...hexagonStyles?.iconStyle}
      />
      {outlineSize && (
        <Box
          height={size}
          width={size}
          position={outlineSize ? 'absolute' : 'relative'}
          zIndex={0}
          clipPath='polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
          {...hexagonStyles?.borderStyle}
        />
      )}
      {isAnimate && (
        <Box
          position='absolute'
          height={size}
          width={size}
          top={0}
          left={0}
          zIndex={-1}
          background='white'
          animation={`${pulseEffect} 1.5s ease infinite`}
          clipPath='polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
          {...hexagonStyles?.animationStyle}
        />
      )}
    </Box>
  );
};
