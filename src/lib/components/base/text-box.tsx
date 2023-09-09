import { ForwardedRef, forwardRef } from 'react';
import {
  FormControl,
  FormControlProps,
  FormErrorMessage,
  FormErrorMessageProps,
  FormHelperText,
  FormHelperTextProps,
  FormLabel,
  FormLabelProps,
  Input,
  InputProps,
} from '@chakra-ui/react';

interface TextBoxProps extends InputProps {
  isError?: boolean;
  label?: string;
  value?: string;
  helperText?: string;
  errorMessage?: string;
  type?: string;
  formControlProps?: FormControlProps;
  formLabelProps?: FormLabelProps;
  formHelperTextProps?: FormHelperTextProps;
  formErrorMessageProps?: FormErrorMessageProps;
}

export const Textbox = forwardRef(
  (props: TextBoxProps, ref: ForwardedRef<HTMLInputElement>) => {
    const {
      label,
      helperText,
      errorMessage,
      isError,
      value,
      type = 'text',
      size = 'md',
      formControlProps,
      formLabelProps,
      formHelperTextProps,
      formErrorMessageProps,
      ...restProps
    } = props ?? {};

    return (
      <FormControl
        isInvalid={isError}
        {...formControlProps}
      >
        <FormLabel
          size={size}
          {...formLabelProps}
        >
          {label}
        </FormLabel>
        <Input
          ref={ref}
          type={type}
          value={value}
          {...restProps}
        />
        {!isError ? (
          <FormHelperText>{helperText}</FormHelperText>
        ) : (
          <FormErrorMessage>{errorMessage}</FormErrorMessage>
        )}
      </FormControl>
    );
  }
);
