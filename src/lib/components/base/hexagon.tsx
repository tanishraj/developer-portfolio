import { Box, BoxProps, ResponsiveValue } from '@chakra-ui/react';

type IconStyleType = {
  iconStyle?: BoxProps;
  borderStyle?: BoxProps;
};

interface HexagonProps extends BoxProps {
  size?: ResponsiveValue<string>;
  outlineSize?: string;
  hexagonStyles?: IconStyleType;
}

export const Hexagon = (props: HexagonProps) => {
  const { size = 'md', outlineSize = 0, hexagonStyles, ...restProps } = props;

  return (
    <Box
      position='relative'
      height={size}
      width={size}
      {...restProps}
    >
      <Box
        height={size}
        width={size}
        position={outlineSize ? 'absolute' : 'relative'}
        clipPath='polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
        {...hexagonStyles?.iconStyle}
      />
      {outlineSize && (
        <Box
          position='absolute'
          height={`calc(100% - ${outlineSize} - ${outlineSize})`}
          width={`calc(100% - ${outlineSize} - ${outlineSize})`}
          top={`${outlineSize}`}
          left={`${outlineSize}`}
          clipPath='polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
          {...hexagonStyles?.borderStyle}
        />
      )}
    </Box>
  );
};
