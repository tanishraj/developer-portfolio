import { Box, Container, Grid, GridItem, Heading } from '@chakra-ui/react';

export const HeroSection = () => {
  return (
    <Box
      maxWidth='2xl'
      margin='auto'
      textTransform='uppercase'
    >
      <Container>
        <Grid
          placeItems='center'
          height='100vh'
          width='full'
        >
          <GridItem>
            <Heading size='2xl'>Tanish Raj</Heading>
            <Box
              letterSpacing='1rem'
              ps='1rem'
            >
              Frontend Engineer
            </Box>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
};
