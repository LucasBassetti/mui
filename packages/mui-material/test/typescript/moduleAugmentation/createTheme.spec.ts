import { Interpolation } from '@temp-mui/system';
import { createTheme, styled } from '@temp-mui/material/styles';

declare module '@temp-mui/material/styles' {
  interface Mixins {
    customMixin: Interpolation<{}>;
  }
}

// ensure MixinsOptions work
const theme = createTheme({ mixins: { customMixin: { paddingLeft: 2 } } });

// ensure Mixins work
const Example = styled('div')(({ theme: t }) => t.mixins.customMixin);
