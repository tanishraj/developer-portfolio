import { Box, Flex, FlexProps } from '@chakra-ui/react';
import { ThemeToggle } from './theme-toggler';

interface HeaderProps extends FlexProps {}

export const Header = (props: HeaderProps) => {
  return (
    <Flex
      as='header'
      width='full'
      align='center'
      alignSelf='flex-start'
      justifyContent='center'
      gridGap={2}
      {...props}
    >
      <Box marginLeft='auto'>
        <ThemeToggle />
      </Box>
    </Flex>
  );
};
