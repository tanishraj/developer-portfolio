import { Container, Flex, Text, Heading } from '@chakra-ui/react';
import { HtmlIcon } from '../../../assets/svg/html-icon';
import { CssIcon } from '../../../assets/svg/css-icon';
import { JavascriptIcon } from '../../../assets/svg/javascript-icon';
import { TypescriptIcon } from '../../../assets/svg/typescript-icon';
import { ReactIcon } from '../../../assets/svg/react-icon';
import { VueJsIcon } from '../../../assets/svg/vue-js-icon';
import { NextJsIcon } from '../../../assets/svg/next-js-icon';
import { NodeJsIcon } from '../../../assets/svg/node-js-icon';
import { MaterialUiIcon } from '../../../assets/svg/material-ui-icon';
import { WebpackIcon } from '../../../assets/svg/webpack-icon';
import { ScssIcon } from '../../../assets/svg/scss-icon';
import { ReduxIcon } from '../../../assets/svg/redux-icon';
import { LessIcon } from '../../../assets/svg/less-icon';
import { JestIcon } from '../../../assets/svg/jest-icon';

const iconMapper = {
  Html: <HtmlIcon />,
  Css: <CssIcon />,
  Scss: <ScssIcon />,
  Less: <LessIcon />,
  Javascript: <JavascriptIcon />,
  Typescript: <TypescriptIcon />,
  React: <ReactIcon />,
  Redux: <ReduxIcon />,
  VueJs: <VueJsIcon />,
  NextJs: <NextJsIcon />,
  NodeJs: <NodeJsIcon />,
  MaterialUi: <MaterialUiIcon />,
  Webpack: <WebpackIcon />,
  Jest: <JestIcon />,
};

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
              {iconMapper?.[skill.icon]}
              <Text size='sm'>{skill.name}</Text>
            </Flex>
          ))}
        </Flex>
      </Flex>
    </Container>
  );
};
