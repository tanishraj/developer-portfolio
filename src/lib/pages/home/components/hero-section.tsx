import { Box, Container, Flex, Heading, Text } from '@chakra-ui/react';
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
        <Heading size='special-header'>Tanish Raj</Heading>
        <Box>
          <Text size='special-sub-header'>Frontend Engineer</Text>
        </Box>
      </Flex>
    </Container>
  );
};
