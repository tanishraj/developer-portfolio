import { Grid } from '@chakra-ui/react';

import { Landing } from './components/landing';

const Home = () => {
  return (
    <Grid placeItems='center'>
      <Landing />
    </Grid>
  );
};

export default Home;
