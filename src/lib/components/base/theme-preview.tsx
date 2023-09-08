import { Heading, Box, Text } from '@chakra-ui/react';

export const ThemePreview = () => {
  return (
    <Box>
      <Heading
        as='h2'
        size='page-title'
      >
        FONT SIZE
      </Heading>
      <Box
        p='lg'
        border='1px solid white'
      >
        <Text size='2xs'>LABEL ['2xs']</Text>
        <Text size='2xs'>LABEL ['2xs']</Text>
        <hr />
        <Text size='xs'>LABEL ['xs']</Text>
        <Text size='xs'>LABEL ['xs']</Text>
        <hr />
        <Text size='md'>LABEL ['md']</Text>
        <Text size='md'>LABEL ['md']</Text>
        <hr />
        <Text size='lg'>LABEL ['lg']</Text>
        <Text size='lg'>LABEL ['lg']</Text>
        <hr />
        <Text size='xl'>LABEL ['xl']</Text>
        <Text size='xl'>LABEL ['xl']</Text>
        <hr />
        <Text size='2xl'>LABEL ['2xl']</Text>
        <Text size='2xl'>LABEL ['2xl']</Text>
        <hr />
        <Text size='3xl'>LABEL ['3xl']</Text>
        <Text size='3xl'>LABEL ['3xl']</Text>
        <hr />
        <Text size='4xl'>LABEL ['4xl']</Text>
        <Text size='4xl'>LABEL ['4xl']</Text>
        <hr />
        <Text size='5xl'>LABEL ['5xl']</Text>
        <Text size='5xl'>LABEL ['5xl']</Text>
        <hr />
        <Text size='6xl'>LABEL ['6xl']</Text>
        <Text size='6xl'>LABEL ['6xl']</Text>
        <hr />
        <Text size='7xl'>LABEL ['7xl']</Text>
        <Text size='7xl'>LABEL ['7xl']</Text>
        <hr />
        <Text size='8xl'>LABEL ['8xl']</Text>
        <Text size='8xl'>LABEL ['8xl']</Text>
        <hr />
      </Box>
    </Box>
  );
};
