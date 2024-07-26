// testing docs/src/pages/customization/theme-components/theme-components.md
import { styled, experimental_extendTheme as extendTheme } from '@temp-mui/material/styles';
import type {} from '@temp-mui/material/themeCssVarsAugmentation';

declare module '@temp-mui/material/styles' {
  interface PaletteOptions {
    gradient: {
      default: string;
    };
  }

  interface Palette {
    gradient: {
      default: string;
    };
  }
}

const StyledComponent = styled('button')(({ theme }) => ({
  background: theme.vars.palette.gradient.default,
}));

const StyledComponent2 = styled('button')(({ theme }) => ({
  // @ts-expect-error `default2` is not defined
  background: theme.vars.palette.gradient.default2,
}));

const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        gradient: {
          default: '',
        },
      },
    },
    dark: {
      palette: {
        gradient: {
          default: '',
        },
      },
    },
  },
});

theme.getCssVar('palette-gradient-default');
