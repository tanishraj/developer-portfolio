import { Container, Flex, Grid, Heading } from '@chakra-ui/react';
import { PortfolioItem } from '../../../components/base/portfolio-item';

export const PortfolioSection = ({ portfolioContent }: any) => {
  const { workTitle, mywork } = portfolioContent;
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
          {workTitle}
        </Heading>
        <Grid
          gridTemplateColumns='repeat(auto-fit, min-max(200px, 1fr))'
          gridGap='2xs'
          gridAutoRows='200px'
          gridAutoFlow='dense'
        >
          {mywork?.map((portfolio: any) => (
            <PortfolioItem
              key={portfolio._key}
              imgSrc={portfolio?.workSample?.asset?._ref}
              text={portfolio?.projectName}
              gridArea={{ base: 'auto', md: portfolio.gridArea || 'auto' }}
            />
          ))}
        </Grid>
      </Flex>
    </Container>
  );
};
