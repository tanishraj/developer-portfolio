import { Container, Flex, Heading } from '@chakra-ui/react';
import { Card } from '../../../components/base/card';

export const ExpertiseSection = (props: any) => {
  const { expertiseList, title } = props;
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
          {title}
        </Heading>
        <Flex
          flexDirection={{ base: 'column', md: 'row' }}
          alignItems='stretch'
          justifyContent='space-between'
          flexWrap={{ base: 'wrap', md: 'nowrap' }}
          gap={{ base: '5xl', md: 'xl', lg: '6xl' }}
        >
          {expertiseList.map((card: any, index: number) => (
            <Card
              key={card._key}
              title={card.expertiseTitle}
              description={card.expertiseContent}
              cardIndex={index + 1}
              width={{
                base: '100%',
                md: `calc(100% / ${expertiseList.length})`,
              }}
            />
          ))}
        </Flex>
      </Flex>
    </Container>
  );
};
