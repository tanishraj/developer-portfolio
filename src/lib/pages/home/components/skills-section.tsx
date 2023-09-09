import { Container, Flex, Text, Heading, useColorMode } from '@chakra-ui/react';
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
  const { colorMode } = useColorMode();

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
          My Skills
        </Heading>
        <Flex
          flexWrap='wrap'
          justifyContent='center'
          gap='3xs'
        >
          {skillSectionData.skillsList.map((skill, index) => (
            <Flex
              key={index}
              flexDirection='column'
              justifyContent='center'
              alignItems='center'
              textAlign='center'
              padding='2xs'
              width={{ base: '150px', md: '220px' }}
              height={{ base: '150px', md: '220px' }}
              border='1px solid'
              rowGap='sm'
              transition='transform 0.3s'
              _hover={{ svg: { transform: 'scale(1.5)' } }}
            >
              {iconMapper?.[skill.icon as IconName]({
                h: '60px',
                w: '60px',
                color: colorMode === 'light' ? 'black' : 'white',
              })}
              <Text size='sm-para'>{skill.name}</Text>
            </Flex>
          ))}
        </Flex>
      </Flex>
    </Container>
  );
};
