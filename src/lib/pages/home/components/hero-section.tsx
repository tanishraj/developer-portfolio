import { Box, Container, Flex, Heading } from '@chakra-ui/react';

export const HeroSection = () => {
  return (
    <Box
      maxWidth='2xl'
      margin='auto'
      textTransform='uppercase'
    >
      <Container>
        <Flex
          placeItems='center'
          height='100vh'
          width='full'
          flexFlow='column'
          justifyContent='center'
          alignItems='center'
        >
          <Heading
            size={{ base: '2xl-mobile', md: 'xl-desktop', lg: '2xl-desktop' }}
          >
            Tanish Raj
          </Heading>
          <Box
            letterSpacing={{ base: '3xl', md: '4xl', lg: '5xl' }}
            ps={{ base: '0.3em', md: '0.4em', lg: '1em' }}
          >
            Frontend Engineer
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};
