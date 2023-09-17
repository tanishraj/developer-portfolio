import { Container, Flex, Heading, Image, Text } from '@chakra-ui/react';

export const AboutSection = (props: any) => {
  const { content, photo } = props;
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
          mb='2xl'
          size='page-title'
        >
          About Me
        </Heading>
        <Flex
          flexFlow={{ base: 'column', md: 'row' }}
          gap='2xl'
        >
          <Image
            borderRadius='full'
            boxSize={{ base: '150px', md: '200px', lg: '250px' }}
            objectFit='cover'
            src={photo.asset._ref}
            alt='Tanish Raj'
          />
          <Flex
            flexFlow='column'
            rowGap='sm'
          >
            {content.map((item: any) => (
              <Text
                as='p'
                size='md-para'
                key={item._key}
              >
                {item.children[0].text}
              </Text>
            ))}
          </Flex>
        </Flex>
      </Flex>
    </Container>
  );
};
