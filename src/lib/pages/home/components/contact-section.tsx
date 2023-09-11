import { Container, Flex, Grid, GridItem, Heading } from '@chakra-ui/react';
import { Textbox } from '../../../components/base/text-box';
import { RiMailFill } from 'react-icons/ri';
import { BaseButton } from '../../../components/base/base-button';
import { BaseTextarea } from '../../../components/base/base-text-area';

export const ContactSection = ({ contactContent }: any) => {
  const { contactForm, title } = contactContent;
  const messageField = contactForm.filter(
    (field: any) => field.controlType === 'textarea'
  )[0];
  const buttonContent = contactForm.filter(
    (field: any) => field.controlType === 'button'
  )[0];
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
                      label={field?.controlLabel}
                      type={field?.controlType}
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
                label={messageField?.controlLabel}
                resize={{ base: 'vertical', md: 'none' }}
                minHeight={{ base: 'auto', md: 'inherit' }}
                height={{ base: '180px', md: 'calc(100% - 51px)' }}
              />
            </Flex>
          </GridItem>
        </Grid>
        <BaseButton
          alignSelf='flex-end'
          mt='3xl'
          leftIcon={<RiMailFill />}
          iconSpacing='3xs'
        >
          {buttonContent?.controlLabel}
        </BaseButton>
      </Flex>
    </Container>
  );
};
