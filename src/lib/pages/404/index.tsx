import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const Page404 = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => navigate('/');

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
        <Grid
          gap={'xl'}
          textAlign='center'
        >
          <GridItem>
            <Heading
              as='h1'
              textTransform='uppercase'
              size={{ base: '2xl', md: '3xl', lg: '4xl' }}
            >
              Page Not Found
            </Heading>
          </GridItem>
          <GridItem>
            <Box
              maxWidth={[280, 400]}
              marginX='auto'
            >
              <Image
                width={400}
                src='/assets/images/404-error.svg'
              />
            </Box>
          </GridItem>
          <GridItem>
            <Box>
              <Text size={{ base: '2xs', md: 'xs', lg: 'xs', xl: 'sm' }}>
                It&apos;s Okay!
              </Text>
              <Button
                mt='xs'
                onClick={handleBackToHome}
                size='md'
              >
                Let&apos;s Head Back
              </Button>
            </Box>
          </GridItem>
        </Grid>
      </Flex>
    </Container>
  );
};

export default Page404;
