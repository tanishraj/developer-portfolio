import {
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  Textarea,
  Text,
  Button,
  IconButton,
  useColorMode,
} from '@chakra-ui/react';
import { Textbox } from '../../../components/base/text-box';
import { RiMailFill } from 'react-icons/ri';

export const ContactSection = () => {
  const { colorMode } = useColorMode();
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
          Contact
        </Heading>
        <Grid
          templateColumns='repeat(2, 1fr)'
          gap={16}
        >
          <GridItem>
            <Textbox
              mb='xs'
              label='First Name'
              type='text'
            />
            <Textbox
              mb='xs'
              label='Last Name'
              type='text'
            />
            <Textbox
              label='Email'
              type='email'
            />
          </GridItem>
          <GridItem>
            <Text mb='4xs'>Message: </Text>
            <Textarea
              h='full'
              borderRadius='0'
              outline='none'
              borderColor={'#333'}
              _hover={{ borderColor: 'inherit', outline: 'none' }}
              _active={{ borderColor: 'white', outline: 'none' }}
              _focus={{ borderColor: 'white', outline: 'none' }}
              _focusVisible={{ borderColor: 'white', outline: 'none' }}
            />
          </GridItem>
        </Grid>
        <Button
          size='md'
          variant='outline'
          borderColor={colorMode === 'light' ? 'black' : 'white'}
          width='200px'
          alignSelf='flex-end'
          mt='4xl'
          _hover={{ borderColor: 'inherit', outline: 'none' }}
          _active={{ borderColor: 'white', outline: 'none' }}
          _focus={{ borderColor: 'white', outline: 'none' }}
          _focusVisible={{ borderColor: 'white', outline: 'none' }}
        >
          <IconButton
            aria-label={''}
            background='transparent'
            _hover={{ background: 'transparent' }}
            icon={<RiMailFill />}
          />
          Send
        </Button>
      </Flex>
    </Container>
  );
};
