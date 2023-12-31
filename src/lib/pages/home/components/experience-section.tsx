import {
  Container,
  Flex,
  Heading,
  useColorMode,
  useTheme,
} from '@chakra-ui/react';
import { Path } from '../../../components/base/path';

export const ExperienceSection = (props: any) => {
  const { title, totalExperience } = props;
  const { colorMode } = useColorMode();
  const isLightMode = colorMode === 'light';
  const theme = useTheme();

  const borderColor = theme.colors.borderColor[colorMode];

  return (
    <Container>
      <Flex
        flex='1'
        height='full'
        flexFlow='column'
        justifyContent='center'
        minHeight='100vh'
        p={{ base: '2xs', md: 'sm', lg: 'lg', xl: 'xl' }}
      >
        <Heading
          mb={{ base: '5xl', md: '2xl' }}
          size='page-title'
        >
          {title}
        </Heading>
        <Path
          myJourney={totalExperience}
          position='relative'
          height={{ base: 'auto', md: '400px' }}
          pathStyle={{ color: '#444', display: { base: 'none', md: 'block' } }}
          flexDirection={{ base: 'column-reverse', md: 'row' }}
          rowGap={{ base: 'sm', md: 'auto' }}
          hexagonProps={{
            display: { base: 'none', md: 'block' },
            size: { base: '50px', md: '50px' },
            outlineSize: '5px',
            hexagonStyles: {
              iconStyle: { bgColor: isLightMode ? '#a6a6a6' : '#444' },
              borderStyle: { bgColor: isLightMode ? '#dcdcdc' : '#777' },
              animationStyle: { bgColor: isLightMode ? '#000' : '#fff' },
            },
          }}
          chipsStyle={{
            minWidth: { base: '100%', md: '190px', lg: '260px' },
            width: { base: '100%', md: 'auto' },
          }}
          chipContainerStyle={{
            width: { base: '100%', md: 'auto' },
            ':nth-of-type(odd) div.chips': {
              position: { base: 'static', md: 'absolute' },
              left: '50%',
              bottom: '100%',
              transform: { base: 'none', md: 'translate(-20px, -50px)' },
            },
            ':nth-of-type(even) div.chips': {
              position: { base: 'static', md: 'absolute' },
              right: '50%',
              transform: { base: 'none', md: 'translate(20px, 50px)' },
            },
            ':nth-of-type(odd) div.connectionLine::before': {
              content: '""',
              position: 'absolute',
              borderLeft: '1px solid',
              borderColor: borderColor,
              height: '100%',
              bottom: '100%',
              left: 'calc(50% - 0.5px)',
              display: { base: 'none', md: 'block' },
            },
            ':nth-of-type(even) div.connectionLine::before': {
              content: '""',
              position: 'absolute',
              borderLeft: '1px solid',
              borderColor: borderColor,
              height: '100%',
              top: '100%',
              left: 'calc(50% - 0.5px)',
              display: { base: 'none', md: 'block' },
            },
            'div.chips>div': {
              color: borderColor,
              borderColor: borderColor,
            },
            ':last-child div.chips>div': {
              color: colorMode === 'light' ? 'black' : 'white',
              borderColor: colorMode === 'light' ? 'black' : 'white',
            },
            ':last-child div.connectionLine::before': {
              borderColor: colorMode === 'light' ? 'black' : 'white',
            },
            ':last-child div.hexagon': {
              'div:nth-of-type(1)': {
                bgColor: isLightMode ? '#000' : '#ccc',
              },
              'div:nth-of-type(2)': {
                bgColor: isLightMode ? '#777' : 'white',
              },
              'div:nth-of-type(3)': {
                bgColor: '#ccc',
              },
            },
          }}
        />
      </Flex>
    </Container>
  );
};
