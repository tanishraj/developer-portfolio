import { Box, Flex } from '@chakra-ui/react';
import { ThemeToggle } from './theme-toggler';

export const Header = () => {
  return (
    <Flex
      as='header'
      width='full'
      align='center'
      alignSelf='flex-start'
      justifyContent='center'
      gridGap={2}
    >
      <Box marginLeft='auto'>
        <ThemeToggle />
      </Box>
    </Flex>
  );
};
