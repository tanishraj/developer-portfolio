import { Flex, FlexProps } from '@chakra-ui/react';
import { Hexagon, HexagonProps } from './hexagon';

interface PathProps extends FlexProps {
  checkpointSize?: number;
  pathStyle?: FlexProps;
  hexagonProps?: HexagonProps;
}

export const Path = (props: PathProps) => {
  const {
    pathStyle,
    checkpointSize = 1,
    hexagonProps,
    ...restProps
  } = props ?? {};
  return (
    <Flex
      alignItems='center'
      justifyContent='space-evenly'
      _before={{
        content: '""',
        position: 'absolute',
        borderTop: '2px solid',
        borderColor: pathStyle?.color || 'red',
        width: pathStyle?.width || '100%',
        height: pathStyle?.height || '1px',
        left: 0,
        top: pathStyle?.height
          ? `calc(50% - ${pathStyle?.height})`
          : 'calc(50% - 1px)',
        ...pathStyle,
      }}
      {...restProps}
    >
      {Array.from('x'.repeat(checkpointSize)).map(_checkpoint => (
        <Hexagon {...hexagonProps} />
      ))}
    </Flex>
  );
};
