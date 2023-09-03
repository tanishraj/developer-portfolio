import { Container, Flex, Grid, Heading } from '@chakra-ui/react';
import { PortfolioItem } from '../../../components/base/portfolio-item';

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
          size={{ base: 'md-desktop', md: 'lg-desktop', lg: 'xl-desktop' }}
        >
          Portfolio
        </Heading>
        <Grid
          templateRows={{ base: 'repeat(4, 1fr)', md: 'repeat(2, 1fr)' }}
          templateColumns={{ base: 'repeat(3, 1fr)', md: 'repeat(6, 1fr)' }}
          gap={2}
        >
          <PortfolioItem
            cols={1}
            rows={1}
            imgSrc='./public/assets/images/project-1.jpg'
            text='Responsive Web Application'
          />
          <PortfolioItem
            cols={1}
            rows={1}
            imgSrc='./public/assets/images/project-2.jpg'
            text='Responsive Mobile Application'
          />
          <PortfolioItem
            cols={1}
            rows={{ base: 1, md: 2 }}
            imgSrc='./public/assets/images/project-6.jpg'
            text='Responsive IOS Application'
          />
          <PortfolioItem
            cols={3}
            rows={1}
            imgSrc='./public/assets/images/project-4.jpg'
            text='Responsive Web Application'
          />
          <PortfolioItem
            cols={2}
            rows={1}
            imgSrc='./public/assets/images/project-5.jpg'
            text='Responsive Web3 Application'
          />
          <PortfolioItem
            cols={1}
            rows={1}
            imgSrc='./public/assets/images/project-3.jpg'
            text='Responsive Blockchain Application'
          />
          <PortfolioItem
            cols={{ base: 3, md: 2 }}
            rows={1}
            imgSrc='./public/assets/images/project-7.jpg'
            text='Responsive Web Application'
          />
        </Grid>
      </Flex>
    </Container>
  );
};
