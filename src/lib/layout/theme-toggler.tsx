import { IconButton, useColorMode } from '@chakra-ui/react';
import { RiMoonFill, RiSunLine } from 'react-icons/ri';

export const ThemeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <IconButton
      position='fixed'
      right='3xs'
      minWidth='auto'
      minHeight='auto'
      width='50px'
      height='50px'
      aria-label='theme toggle'
      icon={colorMode === 'light' ? <RiMoonFill /> : <RiSunLine />}
      onClick={toggleColorMode}
    />
  );
};
