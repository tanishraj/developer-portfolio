import {
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
} from '@chakra-ui/react';
import { Textbox } from '../../../components/base/text-box';
import { RiMailFill } from 'react-icons/ri';
import { BaseButton } from '../../../components/base/base-button';
import { BaseTextarea } from '../../../components/base/base-text-area';
import { useState } from 'react';
import axios from 'axios';

const inputName = {
  'First Name': 'firstName',
  'Last Name': 'lastName',
  Email: 'email',
  Message: 'message',
};

export const ContactSection = (props: any) => {
  const { contactForm, title, emailSubscriptionApi } = props;
  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [isMessageSent, setIsMessageSent] = useState(false);
  const messageField = contactForm.filter(
    (field: any) => field.controlType === 'textarea'
  )[0];
  const buttonContent = contactForm.filter(
    (field: any) => field.controlType === 'button'
  )[0];

  const changeHandler = (event: any) => {
    setFormValues({ ...formValues, [event.target.name]: event.target.value });
  };

  const handleFormSubmit = () => {
    axios
      .post(emailSubscriptionApi, formValues, {
        headers: { Accept: 'application/json' },
      })
      .then(_response => {
        setFormValues(initialValues);
        setIsMessageSent(true);
      })
      .catch(error => console.error(error));
  };

  return (
    <Container>
      <Flex
        flex='1'
        height='full'
        flexFlow='column'
        justifyContent='center'
        minHeight='100vh'
        p={{ base: '2xs', md: 'sm', lg: 'lg', xl: 'xl' }}
      >
        <Heading
          mb={{ base: '5xl', md: '2xl' }}
          size='page-title'
        >
          {title}
        </Heading>
        <Grid
          templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }}
          gap={{ base: '2xs', md: '5xl' }}
        >
          <GridItem>
            <Flex
              flex='1'
              flexDirection='column'
              gap={{ base: '2xs', md: 'sm' }}
            >
              {contactForm.map(
                (field: any) =>
                  field?.controlType !== 'textarea' &&
                  field?.controlType !== 'button' && (
                    <Textbox
                      key={field?._key}
                      label={field?.controlLable}
                      type={field?.controlType}
                      name={
                        inputName[field?.controlLable as keyof typeof inputName]
                      }
                      value={formValues[field?._key as keyof typeof formValues]}
                      onChange={changeHandler}
                    />
                  )
              )}
            </Flex>
          </GridItem>
          <GridItem>
            <Flex
              flex='1'
              height={{ base: 'auto', md: 'full' }}
            >
              <BaseTextarea
                label={messageField?.controlLable}
                resize={{ base: 'vertical', md: 'none' }}
                minHeight={{ base: 'auto', md: 'inherit' }}
                height={{ base: '180px', md: 'calc(100% - 51px)' }}
                name='message'
                value={formValues.message}
                onChange={changeHandler}
              />
            </Flex>
          </GridItem>
        </Grid>
        <BaseButton
          alignSelf='flex-end'
          mt='3xl'
          leftIcon={<RiMailFill />}
          onClick={handleFormSubmit}
          iconSpacing='3xs'
        >
          {buttonContent?.controlLable}
        </BaseButton>
        {isMessageSent && (
          <Text
            alignSelf='flex-end'
            mt='3xl'
          >
            Thank You, Message Has been Sent
          </Text>
        )}
      </Flex>
    </Container>
  );
};
