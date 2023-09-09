import {
  Box,
  Flex,
  FlexProps,
  Heading,
  HeadingProps,
  Text,
  TextProps,
} from '@chakra-ui/react';
type CardCustomStyleType = {
  titleStyle: HeadingProps;
  descriptionStyle: TextProps;
};
interface CardPropsType extends FlexProps {
  title: string;
  description: string;
  cardIndex?: number;
  customStyles?: CardCustomStyleType;
}
export const Card = (cardProps: CardPropsType) => {
  const {
    title = '',
    description = '',
    cardIndex = '',
    customStyles,
    ...restProps
  } = cardProps;
  return (
    <Flex
      position='relative'
      p='lg'
      border='1px solid rgba(255,255,255,0.2)'
      flex={1}
      flexFlow='column'
      gap={{ base: 'sm', md: 'xl', lg: '2xl' }}
      {...restProps}
    >
      {cardIndex && (
        <Text
          as='div'
          display='block'
          size={{ base: '6xl', md: '7xl', lg: '8xl', xl: '8xl' }}
          position='absolute'
          right={{ base: 'auto', md: '-25px', lg: '-25px', xl: '-67px' }}
          left={{ base: '-16px', md: 'auto', lg: 'auto', xl: '-67px' }}
          top={{ base: '-77px', md: '-96px', lg: '-114px', xl: '-114px' }}
          lineHeight='1'
          opacity='0.1'
        >
          {`0${cardIndex}`}
        </Text>
      )}
      <Heading
        as='h2'
        fontFamily='barlow'
        fontWeight={700}
        size='card-title'
        {...customStyles?.titleStyle}
      >
        {title}
      </Heading>
      <Text
        as='p'
        size='md-para'
        {...customStyles?.descriptionStyle}
      >
        {description}
      </Text>
    </Flex>
  );
};
