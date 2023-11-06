import {
  Container,
  Flex,
  Heading,
  Image,
  Text,
  useColorMode,
} from '@chakra-ui/react';
import { urlFor } from '../../../../image-builder';
import { IconName, iconMapper } from './icon-mapper';
import { Link } from 'react-router-dom';

export const AboutSection = (props: any) => {
  const { content, photo, socialMediaList } = props;
  const { colorMode } = useColorMode();
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
          mb='2xl'
          size='page-title'
        >
          About Me
        </Heading>
        <Flex
          flex='1'
          flexFlow={{ base: 'column', md: 'row' }}
          gap='2xl'
        >
          <Flex
            flexDirection='column'
            width={{ base: '150px', md: '200px', lg: '250px' }}
            gap='xs'
          >
            <Image
              borderRadius='full'
              aspectRatio='1/1'
              boxSize={{ base: '150px', md: '200px', lg: '250px' }}
              objectFit='cover'
              src={urlFor(photo.asset._ref).url()}
              alt='Tanish Raj'
            />

            <Flex
              flexDirection='row'
              justifyContent='center'
              alignItems='center'
            >
              {socialMediaList.length > 0 &&
                socialMediaList?.map((socialMedia: any) => (
                  <Link
                    key={socialMedia?.socialMediaLink}
                    to={socialMedia?.socialMediaLink}
                    target='_blank'
                  >
                    {iconMapper?.[socialMedia?.socialMediaIcon as IconName]({
                      color: colorMode === 'light' ? 'black' : 'white',
                    })}
                  </Link>
                ))}
            </Flex>
          </Flex>
          <Flex
            flex='1'
            flexFlow='column'
            rowGap='sm'
          >
            {content.map((item: any) => (
              <Text
                as='p'
                size='md-para'
                key={item._key}
              >
                {item.children[0].text}
              </Text>
            ))}
          </Flex>
        </Flex>
      </Flex>
    </Container>
  );
};
