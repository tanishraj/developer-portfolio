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
        <Box
          position='absolute'
          fontFamily='mulish'
          fontWeight='700'
          fontSize={{ base: '6xl', md: '8xl', lg: '10xl' }}
          left={{ base: '0', md: '0', lg: '0', xl: '40%' }}
          top={{ base: '0', md: '17%', lg: '19%', xl: '20%' }}
          transform={{
            base: 'translate(0, -60%)',
            md: 'translate(0, -100%)',
            lg: 'translate(0, -100%)',
            xl: 'translate(-100%, -100%)',
          }}
          lineHeight='1'
          opacity='0.1'
        >
          {`0${cardIndex}`}
        </Box>
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
