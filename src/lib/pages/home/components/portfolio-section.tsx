import {
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  ResponsiveValue,
} from '@chakra-ui/react';

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
          h='400px'
          templateRows={{ base: 'repeat(4, 1fr)', md: 'repeat(2, 1fr)' }}
          templateColumns={{ base: 'repeat(3, 1fr)', md: 'repeat(6, 1fr)' }}
          gap={2}
        >
          {RenderGridItem(1, 1, './public/assets/images/project-1.jpg')}
          {RenderGridItem(1, 1, './public/assets/images/project-2.jpg')}
          {RenderGridItem(1, 2, './public/assets/images/project-6.jpg')}
          {RenderGridItem(3, 1, './public/assets/images/project-4.jpg')}
          {RenderGridItem(2, 1, './public/assets/images/project-5.jpg')}
          {RenderGridItem(1, 1, './public/assets/images/project-3.jpg')}
          {RenderGridItem(
            { base: 3, md: 2 },
            1,
            './public/assets/images/project-7.jpg'
          )}
        </Grid>
      </Flex>
    </Container>
  );
};

const RenderGridItem = (
  cols: ResponsiveValue<number>,
  rows: ResponsiveValue<number>,
  imgSrc: string
) => {
  return (
    <GridItem
      colSpan={cols}
      rowSpan={rows}
    >
      <Image
        src={imgSrc}
        height='100%'
        width='100%'
        objectFit='cover'
      />
    </GridItem>
  );
};
