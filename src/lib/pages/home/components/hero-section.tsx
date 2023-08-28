import { Box, Container, Flex, Heading } from '@chakra-ui/react';
export const HeroSection = () => {
  return (
    <Container>
      <Flex
        width='full'
        height='full'
        flexFlow='column'
        justifyContent='center'
        alignItems='center'
        textTransform='uppercase'
        textAlign='center'
        minHeight='100vh'
        p={{ base: '2xs', md: 'sm', lg: 'lg', xl: 'xl' }}
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
  );
};
