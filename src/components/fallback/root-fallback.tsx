import { Flex, Heading } from '@chakra-ui/react';
import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

const statusCodeMapper = {
  404: "This page doesn't exist!",
  401: "You aren't authorized to see this",
  503: 'Looks like our API is down',
  418: 'I am a teapot 😋',
};

export const RootFallback = () => {
  const error = useRouteError();

  return (
    <Flex
      width='full'
      height='100vh'
      justifyContent='center'
      alignItems='center'
    >
      <Heading size='md'>
        {isRouteErrorResponse(error)
          ? statusCodeMapper[error.status as keyof typeof statusCodeMapper]
          : 'Something went wrong 😥'}
      </Heading>
    </Flex>
  );
};
