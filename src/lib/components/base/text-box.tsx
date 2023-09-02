import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  InputProps,
} from '@chakra-ui/react';

interface TextBoxProps extends InputProps {
  isError?: boolean;
  label?: string;
  value?: string;
  helperText?: string;
  errorMessage?: string;
}

export const Textbox = (props: TextBoxProps) => {
  const { label, helperText, errorMessage, isError, value, ...restProps } =
    props ?? {};

  return (
    <FormControl isInvalid={isError}>
      <FormLabel size={{ base: 'sm' }}>{label}</FormLabel>
      <Input
        type='email'
        value={value}
        borderRadius='0'
        outline='none'
        borderColor={value ? 'white' : '#333'}
        _hover={{ borderColor: 'inherit', outline: 'none' }}
        _active={{ borderColor: 'white', outline: 'none' }}
        _focus={{ borderColor: 'white', outline: 'none' }}
        _focusVisible={{ borderColor: 'white', outline: 'none' }}
        {...restProps}
      />
      {!isError ? (
        <FormHelperText>{helperText}</FormHelperText>
      ) : (
        <FormErrorMessage>{errorMessage}</FormErrorMessage>
      )}
    </FormControl>
  );
};
