import { extendTheme } from '@chakra-ui/react';
import { colors } from './foundation/colors';
import { typography } from './foundation/typography';
import { breakpoints } from './foundation/breakpoints';
import { borderRadius } from './foundation/border-radius';
import { zIndices } from './foundation/z-index';
import { space } from './foundation/spacing';
import { semanticTokens } from './tokens';
import { ContainerTheme } from './components/container';
import { TextTheme } from './components/text';
import { ButtonTheme } from './components/button';
import { TextboxTheme } from './components/text-box';
import { TextareaTheme } from './components/text-area';
import { FormLabelTheme } from './components/form-label';

export const theme = extendTheme({
  semanticTokens,
  colors,
  breakpoints,
  zIndices,
  space,
  ...typography,
  ...borderRadius,

  components: {
    Container: ContainerTheme,
    Box: ContainerTheme,
    Flex: ContainerTheme,
    Stack: ContainerTheme,
    HStack: ContainerTheme,
    VStack: ContainerTheme,
    SimpleGrid: ContainerTheme,
    Text: TextTheme,
    Heading: TextTheme,
    Link: TextTheme,
    Button: ButtonTheme,
    Input: TextboxTheme,
    Textarea: TextareaTheme,
    FormLabel: FormLabelTheme,
  },
});
