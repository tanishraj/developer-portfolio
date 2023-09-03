import { ForwardedRef, forwardRef } from 'react';
import {
  FormControl,
  FormControlProps,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Textarea,
  TextareaProps,
} from '@chakra-ui/react';

interface BaseTextareaProps extends TextareaProps {
  isError?: boolean;
  label?: string;
  value?: string;
  helperText?: string;
  errorMessage?: string;
  type?: string;
  formControlProps?: FormControlProps;
}

export const BaseTextarea = forwardRef(
  (props: BaseTextareaProps, ref: ForwardedRef<HTMLTextAreaElement>) => {
    const {
      label,
      helperText,
      errorMessage,
      isError,
      value,
      type = 'text',
      size,
      formControlProps,
      ...restProps
    } = props ?? {};

    return (
      <FormControl
        isInvalid={isError}
        {...formControlProps}
      >
        <FormLabel size={size}>{label}</FormLabel>
        <Textarea
          ref={ref}
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
