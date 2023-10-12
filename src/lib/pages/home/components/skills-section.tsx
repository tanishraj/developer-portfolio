import { Container, Flex, Text, Heading, useColorMode } from '@chakra-ui/react';
import { iconMapper, IconName } from './icon-mapper';
import { Link } from 'react-router-dom';

export const SkillsSection = (props: any) => {
  const { title, skillsSet } = props;
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
          {title}
        </Heading>
        <Flex
          flexWrap='wrap'
          justifyContent='center'
          gap='3xs'
        >
          {skillsSet.map((skill: any) => (
            <Link
              to={skill.skillUrl || '#'}
              target='_blank'
            >
              <Flex
                key={skill._key}
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
                cursor='pointer'
              >
                {iconMapper?.[skill.logoName as IconName]({
                  h: '60px',
                  w: '60px',
                  color: colorMode === 'light' ? 'black' : 'white',
                })}
                <Text size='sm-para'>{skill.skillName}</Text>
              </Flex>
            </Link>
          ))}
        </Flex>
      </Flex>
    </Container>
  );
};
