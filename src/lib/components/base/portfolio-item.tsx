import { GridItem, ResponsiveValue, Image, Heading } from '@chakra-ui/react';
import { useState } from 'react';

type ItemPropsType = {
  cols: ResponsiveValue<number>;
  rows: ResponsiveValue<number>;
  imgSrc: string;
  text: string;
};

export const PortfolioItem = (itemProps: ItemPropsType) => {
  const { cols, rows, imgSrc, text } = itemProps;
  const [isHovered, setIsHovered] = useState(false);
  return (
    <GridItem
      colSpan={cols}
      rowSpan={rows}
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
      cursor='pointer'
      _hover={{ border: '4px solid', borderColor: 'purple' }}
    >
      {isHovered && (
        <Heading
          color='white'
          zIndex={2}
          position='absolute'
          width='200px'
        >
          {text}
        </Heading>
      )}
      <Image
        src={imgSrc}
        height='100%'
        width='100%'
        objectFit='cover'
      />
    </GridItem>
  );
};
