import { Box, Container, Flex, Text, Heading } from '@chakra-ui/react';
import { HtmlIcon } from '../../../assets/svg/html-icon';

export const SkillsSection = () => {
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
          size={{ base: 'md-desktop', md: 'lg-desktop', lg: 'xl-desktop' }}
        >
          My Skills
        </Heading>
        <Flex flexDirection='column'>
          <Flex>
            <HtmlIcon />
            <Text>HTML</Text>
          </Flex>
          <Flex>
            <HtmlIcon />
            <Text>HTML</Text>
          </Flex>
          <Flex>
            <HtmlIcon />
            <Text>HTML</Text>
          </Flex>
          <Flex>
            <HtmlIcon />
            <Text>HTML</Text>
          </Flex>
          <Flex>
            <HtmlIcon />
            <Text>HTML</Text>
          </Flex>
          <Flex>
            <HtmlIcon />
            <Text>HTML</Text>
          </Flex>
          <Flex>
            <HtmlIcon />
            <Text>HTML</Text>
          </Flex>
          <Flex>
            <HtmlIcon />
            <Text>HTML</Text>
          </Flex>
        </Flex>
      </Flex>
    </Container>
  );
};
