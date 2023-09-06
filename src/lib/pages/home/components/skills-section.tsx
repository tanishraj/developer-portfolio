import { Container, Flex, Text, Heading } from '@chakra-ui/react';
import { iconMapper, IconName } from './icon-mapper';

const skillSectionData = {
  title: 'My Skills',
  skillsList: [
    {
      icon: 'Html',
      name: 'HTML',
    },
    {
      icon: 'Css',
      name: 'CSS',
    },
    {
      icon: 'Scss',
      name: 'Scss',
    },
    {
      icon: 'Less',
      name: 'less',
    },
    {
      icon: 'Javascript',
      name: 'Javascript',
    },
    {
      icon: 'Typescript',
      name: 'Typescript',
    },
    {
      icon: 'React',
      name: 'React',
    },
    {
      icon: 'Redux',
      name: 'Redux',
    },
    {
      icon: 'VueJs',
      name: 'Vue',
    },
    {
      icon: 'NextJs',
      name: 'Next',
    },
    {
      icon: 'NodeJs',
      name: 'Node',
    },
    {
      icon: 'MaterialUi',
      name: 'Material UI',
    },
    {
      icon: 'Webpack',
      name: 'Webpack',
    },
    {
      icon: 'Jest',
      name: 'jest',
    },
  ],
};

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
        <Flex
          flexWrap='wrap'
          justifyContent='center'
        >
          {skillSectionData.skillsList.map((skill, index) => (
            <Flex
              key={index}
              flexDirection='column'
              justifyContent='center'
              alignItems='center'
              padding='2xs'
              width={{ base: '130px', md: '200px' }}
              height={{ base: '130px', md: '200px' }}
              borderWidth='1px'
              borderStyle='solid'
              rowGap='sm'
              borderColor='whiteAlpha.300'
              transition='transform 0.3s'
              _hover={{ svg: { transform: 'scale(1.5)' } }}
            >
              {iconMapper?.[skill.icon as IconName]()}
              <Text size='sm'>{skill.name}</Text>
            </Flex>
          ))}
        </Flex>
      </Flex>
    </Container>
  );
};
