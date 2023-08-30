import { Container, Flex, Heading } from '@chakra-ui/react';
import { Card } from '../../../components/base/card';
import { Chips } from '../../../components/base/chips';
import { Hexagon } from '../../../components/base/hexagon';
const myJourneyData = [
  {
    companyName: 'Thomson Reuters',
    startDate: '2018',
    endDate: '2019',
  },
  {
    companyName: 'Thomson Reuters',
    startDate: '2018',
    endDate: '2019',
  },
  {
    companyName: 'Thomson Reuters',
    startDate: '2018',
    endDate: '2019',
  },
  // {
  //   companyName: 'Thomson Reuters',
  //   startDate: '2018',
  //   endDate: '2019',
  // },
  // {
  //   companyName: 'Thomson Reuters',
  //   startDate: '2018',
  //   endDate: '2019',
  // },
  // {
  //   companyName: 'Thomson Reuters',
  //   startDate: '2018',
  //   endDate: '2019',
  // },
];
export const JourneySection = () => {
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
        <Hexagon
          size={{ base: '50px', md: '50px' }}
          outlineSize='2px'
          isAnimate={true}
          hexagonStyles={{
            iconStyle: { bgColor: 'red' },
            borderStyle: { bgColor: 'yellow' },
          }}
        />
        <Heading
          mb={{ base: '5xl', md: '2xl' }}
          size={{ base: 'md-desktop', md: 'lg-desktop', lg: 'xl-desktop' }}
        >
          My Expertise
        </Heading>
        <Flex
          flexDirection={{ base: 'column', md: 'row' }}
          alignItems='stretch'
          justifyContent='space-between'
          flexWrap={{ base: 'wrap', md: 'nowrap' }}
          gap={{ base: '5xl', md: 'xl', lg: '6xl' }}
        >
          {myJourneyData.map(journey => (
            <Chips
              key={journey.companyName}
              title={journey.companyName}
              description={`${journey.startDate} - ${journey.endDate}`}
            />
          ))}
        </Flex>
      </Flex>
    </Container>
  );
};
