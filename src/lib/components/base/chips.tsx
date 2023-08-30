import { Flex, Heading, HeadingProps, Text, TextProps } from '@chakra-ui/react';

type ChipCustomStyleType = {
  headingStyle?: HeadingProps;
  descriptionStyle?: TextProps;
};

interface ChipsProps {
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
      <Heading
        as='h3'
        size='sm'
        {...customStyle?.headingStyle}
      >
        {title}
      </Heading>
      <Text
        as='p'
        size='xs'
        {...customStyle?.descriptionStyle}
      >
        {description}
      </Text>
    </Flex>
  );
};
