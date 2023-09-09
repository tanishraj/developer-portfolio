import { Container, Flex, Grid, Heading } from '@chakra-ui/react';
import { PortfolioItem } from '../../../components/base/portfolio-item';

const portfolioList = [
  {
    projectImage: {
      url: '/assets/images/project-1.jpg',
      alt: '',
    },
    projectName: 'Project Title',
    gridArea: '1/1/2/1',
  },
  {
    projectImage: {
      url: '/assets/images/project-2.jpg',
      alt: '',
    },
    projectName: 'Project Title',
    gridArea: '1/2/3/3',
  },
  {
    projectImage: {
      url: '/assets/images/project-3.jpg',
      alt: '',
    },
    projectName: 'Project Title',
    gridArea: '2/1/4/2',
  },
  {
    projectImage: {
      url: '/assets/images/project-4.jpg',
      alt: '',
    },
    projectName: 'Project Title',
    gridArea: '1/3/2/4',
  },
  {
    projectImage: {
      url: '/assets/images/project-5.jpg',
      alt: '',
    },
    projectName: 'Project Title',
    gridArea: '2/3/3/4',
  },
  {
    projectImage: {
      url: '/assets/images/project-6.jpg',
      alt: '',
    },
    projectName: 'Project Title',
  },
  {
    projectImage: {
      url: '/assets/images/project-7.jpg',
      alt: '',
    },
    projectName: 'Project Title',
  },
];

export const PortfolioSection = () => {
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
          mb={{ base: '5xl', md: '2xl' }}
          size='page-title'
        >
          Portfolio
        </Heading>
        <Grid
          gridTemplateColumns='repeat(auto-fit, min-max(200px, 1fr))'
          gridGap='2xs'
          gridAutoRows='200px'
          gridAutoFlow='dense'
        >
          {portfolioList?.map(portfolio => (
            <PortfolioItem
              key={portfolio.projectName}
              imgSrc={portfolio?.projectImage?.url}
              text={portfolio?.projectName}
              gridArea={{ base: 'auto', md: portfolio.gridArea || 'auto' }}
            />
          ))}
        </Grid>
      </Flex>
    </Container>
  );
};
