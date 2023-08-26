import { extendTheme } from '@chakra-ui/react';
import { colors } from './foundation/colors';
import { typography } from './foundation/typography';
import { breakpoints } from './foundation/breakpoints';
import { borderRadius } from './foundation/border-radius';
import { zIndices } from './foundation/z-index';
import { space } from './foundation/spacing';
import { semanticTokens } from './tokens';
import { ContainerTheme } from './components/container';

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
  },
});
