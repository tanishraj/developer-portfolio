import { Box, Container, Flex, Heading, Text } from '@chakra-ui/react';

export interface HeroSectionProps {
  _key: string;
  _type: string;
  subtitle: string;
  title: string;
}

export const HeroSection = (props: HeroSectionProps) => {
  const { subtitle, title } = props ?? {};
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
        <Heading size='special-header'>{title}</Heading>
        <Box>
          <Text size='special-sub-header'>{subtitle}</Text>
        </Box>
      </Flex>
    </Container>
  );
};
