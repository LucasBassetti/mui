import { experimental_extendTheme as extendTheme } from '@temp-mui/material/styles';
import type {} from '@temp-mui/material/themeCssVarsAugmentation';

declare module '@temp-mui/material/styles' {
  interface ThemeCssVarOverrides {
    'custom-color': true;
  }
}

const theme = extendTheme();

theme.getCssVar('custom-color');
