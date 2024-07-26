import { extendTheme } from '@temp-mui/joy/styles';

declare module '@temp-mui/joy/styles' {
  interface ThemeCssVarOverrides {
    'custom-color': true;
  }
}

const theme = extendTheme();

theme.getCssVar('custom-color');
