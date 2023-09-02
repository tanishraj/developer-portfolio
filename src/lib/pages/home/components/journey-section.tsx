import { Container, Flex, Heading } from '@chakra-ui/react';
import { Path } from '../../../components/base/path';
import { Textbox } from '../../../components/base/text-box';
import { useState } from 'react';
export const myJourneyData = [
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
];
export const JourneySection = () => {
  const [firstName, setFirstName] = useState('');
  return (
    <Container>
      <Textbox
        label='First Name'
        isError={false}
        helperText='Needs your name as per your bank statement'
        value={firstName}
        onChange={e => {
          setFirstName(e.target.value);
        }}
      />
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
          size={{ base: 'md-desktop', md: 'lg-desktop', lg: 'xl-desktop' }}
        >
          My Expertise
        </Heading>
        <Path
          myJourney={myJourneyData}
          position='relative'
          height={'400px'}
          pathStyle={{ color: 'white' }}
          hexagonProps={{
            size: { base: '50px', md: '50px' },
            outlineSize: '5px',
            hexagonStyles: {
              iconStyle: { bgColor: '#b4b3b5' },
              borderStyle: { bgColor: '#dddddd' },
              animationStyle: { bgColor: '#fff' },
            },
          }}
          chipsStyle={{ minWidth: { base: '195px' } }}
          chipContainerStyle={{
            ':nth-child(odd) div.chips': {
              position: 'absolute',
              left: '50%',
              bottom: '100%',
              transform: 'translate(-20px, -50px)',
            },
            ':nth-child(even) div.chips': {
              position: 'absolute',
              right: '50%',
              transform: 'translate(20px, 50px)',
            },

            ':nth-child(odd) div.connectionLine::before': {
              content: '""',
              position: 'absolute',
              borderLeft: '1px solid white',
              height: '100%',
              bottom: '100%',
              left: 'calc(50% - 0.5px)',
            },
            ':nth-child(even) div.connectionLine::before': {
              content: '""',
              position: 'absolute',
              borderLeft: '1px solid white',
              height: '100%',
              top: '100%',
              left: 'calc(50% - 0.5px)',
            },
            ':last-child div.chips>div': {
              color: 'red',
              borderColor: 'red',
            },
          }}
        />
      </Flex>
    </Container>
  );
};
