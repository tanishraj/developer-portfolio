import { Button, ButtonProps } from '@chakra-ui/react';

interface BaseButtonProps extends ButtonProps {}

export const BaseButton = (props: BaseButtonProps) => {
  const { children, ...restProps } = props ?? {};
  return <Button {...restProps}>{children}</Button>;
};
