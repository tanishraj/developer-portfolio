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

const skillSectionData = {
  title: 'My Skills',
  skillsList: [
    {
      icon: '<HtmlIcon />',
      name: 'HTML',
    },
    {
      icon: '<CssIcon />',
      name: 'CSS',
    },
    {
      icon: '<ScssIcon />',
      name: 'Scss',
    },
    {
      icon: '<LessIcon />',
      name: 'less',
    },

    {
      icon: '<JavascriptIcon />',
      name: 'Javascript',
    },
    {
      icon: '<TypescriptIcon />',
      name: 'Typescript',
    },
    {
      icon: '<ReactIcon />',
      name: 'React',
    },
    {
      icon: '<ReduxIcon />',
      name: 'Redux',
    },
    {
      icon: '<VueJsIcon />',
      name: 'Vue',
    },
    {
      icon: '<NextJsIcon />',
      name: 'Next',
    },
    {
      icon: '<NodeJsIcon />',
      name: 'Node',
    },
    {
      icon: '<MaterialUiIcon />',
      name: 'Material UI',
    },
    {
      icon: '<WebpackIcon />',
      name: 'Webpack',
    },
    {
      icon: '<JestIcon />',
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
              width={{ base: '130px', md: '160px' }}
              height={{ base: '130px', md: '160px' }}
              borderWidth='1px'
              borderStyle='solid'
              borderColor='whiteAlpha.300'
            >
              {skill.icon}
              <Text>{skill.name}</Text>
            </Flex>
          ))}
        </Flex>
      </Flex>
    </Container>
  );
};
