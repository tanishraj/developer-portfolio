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
          gridTemplateColumns='repeat(auto-fit, min-max(200px, 1fr))'
          gridGap='2xs'
          gridAutoRows='200px'
          gridAutoFlow='dense'
        >
          <PortfolioItem
            cols={1}
            rows={1}
            imgSrc='./public/assets/images/project-1.jpg'
            text='Responsive Web Application'
            gridArea={{ base: 'auto', md: '1/1/2/1' }}
          />
          <PortfolioItem
            imgSrc='./public/assets/images/project-2.jpg'
            text='Responsive Mobile Application'
            gridArea={{ base: 'auto', md: '1/2/3/3' }}
          />
          <PortfolioItem
            imgSrc='./public/assets/images/project-6.jpg'
            text='Responsive IOS Application'
            gridArea={{ base: 'auto', md: '2/1/4/2' }}
          />
          <PortfolioItem
            imgSrc='./public/assets/images/project-4.jpg'
            text='Responsive Web Application'
            gridArea={{ base: 'auto', md: '1/3/2/4' }}
          />
          <PortfolioItem
            imgSrc='./public/assets/images/project-5.jpg'
            text='Responsive Web3 Application'
            gridArea={{ base: 'auto', md: '2/3/3/4' }}
          />
          <PortfolioItem
            imgSrc='./public/assets/images/project-3.jpg'
            text='Responsive Blockchain Application'
          />
          <PortfolioItem
            imgSrc='./public/assets/images/project-7.jpg'
            text='Responsive Web Application'
          />
        </Grid>
      </Flex>
    </Container>
  );
};
