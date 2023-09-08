import { Container, Flex, Heading, Image, Text } from '@chakra-ui/react';
export const AboutSection = () => {
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
            src='https://bit.ly/dan-abramov'
            alt='Tanish Raj'
          />
          <Flex
            flexFlow='column'
            rowGap='sm'
          >
            <Text
              as='p'
              size='md-para'
            >
              "Hello, I'm Tanish. I discovered my passion for coding during my
              time at , where I obtained my degree in Master of Computer
              Application. Since then, I've spent the past 6 years working in
              various roles as a Frontend Engineer, always pushing myself to
              learn and adapt to the ever-changing landscape of web
              technologies.
            </Text>
            <Text
              as='p'
              size='md-para'
            >
              Specialising in React and Vue.js, I pride myself on my attention
              to detail, problem-solving capabilities, and a keen eye for
              design. I believe that the success of a project lies not only in
              its functionality but also in its ability to deliver an
              exceptional user experience.
            </Text>
            <Text
              as='p'
              size='md-para'
            >
              When I'm not coding, you'll find me playing some indoor and
              outdoor games.
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Container>
  );
};
