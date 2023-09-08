import {
  GridItem,
  ResponsiveValue,
  Image,
  GridItemProps,
  Flex,
  Text,
  Button,
} from '@chakra-ui/react';

interface ItemPropsType extends GridItemProps {
  cols?: ResponsiveValue<number>;
  rows?: ResponsiveValue<number>;
  imgSrc: string;
  text?: string;
}

export const PortfolioItem = (itemProps: ItemPropsType) => {
  const { cols, rows, imgSrc, text, ...restProps } = itemProps;

  return (
    <GridItem
      position='relative'
      colSpan={cols}
      rowSpan={rows}
      cursor='pointer'
      {...restProps}
      _hover={{
        '.overlayContent': {
          display: 'flex',
        },
      }}
    >
      <Image
        src={imgSrc}
        height='100%'
        width='100%'
        objectFit='cover'
      />
      <Flex
        className='overlayContent'
        width='full'
        height='full'
        flex='1'
        flexDirection='column'
        alignItems='center'
        justifyContent='center'
        position='absolute'
        backgroundColor='blackAlpha.500'
        top='50%'
        left='50%'
        transform='translate(-50%, -50%)'
        display='none'
      >
        <Text
          as='h3'
          size='md-para'
        >
          Project Title
        </Text>
      </Flex>
    </GridItem>
  );
};
