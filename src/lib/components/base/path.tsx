import { Box, Flex, FlexProps } from '@chakra-ui/react';
import { Hexagon, HexagonProps } from './hexagon';
import { Chips } from './chips';

interface PathProps extends FlexProps {
  myJourney?: any;
  pathStyle?: FlexProps;
  hexagonProps?: HexagonProps;
  chipContainerStyle?: object;
  chipsStyle?: FlexProps;
  connection?: boolean;
}

export const Path = (props: PathProps) => {
  const {
    pathStyle,
    myJourney,
    hexagonProps,
    chipContainerStyle,
    chipsStyle,
    connection = false,
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
      {myJourney?.map((journey: any, index: number) => (
        <Flex
          key={index}
          position='relative'
          __css={{
            ...chipContainerStyle,
          }}
        >
          <Box className='connectionLine'>
            <Hexagon
              isAnimate={index === myJourney.length - 1}
              className='hexagon'
              {...hexagonProps}
            />
            <Box className='chips'>
              <Chips
                title={journey?.companyName}
                description={`${journey?.yearOfJoining} - ${
                  index === myJourney.length - 1
                    ? 'Present'
                    : journey?.yearOfResignation
                }`}
                {...chipsStyle}
              />
            </Box>
          </Box>
        </Flex>
      ))}
    </Flex>
  );
};
