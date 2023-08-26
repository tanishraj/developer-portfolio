import { Box } from '@chakra-ui/react';
import type { ReactNode } from 'react';

import { Meta } from './meta';
import { Header } from './header';

type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <Box transition='0.5s ease-out'>
      <Meta />
      <Header
        position='absolute'
        right='10px'
        top='10px'
      />
      <Box as='main'>{children}</Box>
    </Box>
  );
};
