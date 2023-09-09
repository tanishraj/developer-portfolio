import { Container, Flex, Heading } from '@chakra-ui/react';
import { Card } from '../../../components/base/card';
const CardsData = [
  {
    title: 'Adaptive Design',
    description:
      'I excel at building websites that offer an optimal user experience across all devices and screen sizes.',
  },
  {
    title: 'JavaScript Framework',
    description:
      'I craft dynamic, user-centric web applications that effectively cater to diverse business needs using React & Vue.',
  },
  {
    title: 'Performance Optimization',
    description:
      'I ensure swift, seamless web experiences through strategies like lazy loading, caching, and code minification.',
  },
];
export const ExpertiseSection = () => {
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
          pb={{ base: '5xl', md: '2xl' }}
          mb={{ base: '43px', md: '60px', lg: '72px', xl: '72px' }}
          size='page-title'
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
          {CardsData.map((card, index) => (
            <Card
              key={card.title}
              title={card.title}
              description={card.description}
              cardIndex={index + 1}
              width={{ base: '100%', md: `calc(100% / ${CardsData.length})` }}
            />
          ))}
        </Flex>
      </Flex>
    </Container>
  );
};
