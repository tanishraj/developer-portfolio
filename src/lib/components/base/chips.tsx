import { Flex, FlexProps, Text, TextProps } from '@chakra-ui/react';

type ChipCustomStyleType = {
  headingStyle?: TextProps;
  descriptionStyle?: TextProps;
};

interface ChipsProps extends FlexProps {
  title: string;
  description: string;
  customStyle?: ChipCustomStyleType;
}

export const Chips = (chipsProps: ChipsProps) => {
  const { title, description, customStyle, ...restProps } = chipsProps;
  return (
    <Flex
      padding='xs'
      border='1px solid #fff'
      flex={1}
      flexDirection='column'
      justifyContent='center'
      textAlign='center'
      rowGap='4xs'
      {...restProps}
    >
      <Text
        as='h3'
        size='sm-para'
        fontWeight='bold'
        {...customStyle?.headingStyle}
      >
        {title}
      </Text>
      <Text
        as='p'
        size='sm-para'
        {...customStyle?.descriptionStyle}
      >
        {description}
      </Text>
    </Flex>
  );
};
