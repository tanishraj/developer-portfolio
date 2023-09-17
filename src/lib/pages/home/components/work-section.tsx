import { Container, Flex, Grid, Heading } from '@chakra-ui/react';
import { PortfolioItem } from '../../../components/base/portfolio-item';
import { urlFor } from '../../../../image-builder';

const GridAreaMapper = [
  { gridArea: '1/1/2/1' },
  { gridArea: '1/2/3/3' },
  { gridArea: '2/1/4/2' },
  { gridArea: '1/3/2/4' },
  { gridArea: '2/3/3/4' },
];

export const WorkSection = (props: any) => {
  const { workTitle, mywork } = props;

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
          {mywork?.map((portfolio: any, index: number) => (
            <PortfolioItem
              key={portfolio._key}
              imgSrc={urlFor(portfolio?.workSample?.asset?._ref)
                .url()
                .toString()}
              text={portfolio?.projectName}
              gridArea={{
                base: 'auto',
                md: GridAreaMapper[index]?.gridArea || 'auto',
              }}
            />
          ))}
        </Grid>
      </Flex>
    </Container>
  );
};
