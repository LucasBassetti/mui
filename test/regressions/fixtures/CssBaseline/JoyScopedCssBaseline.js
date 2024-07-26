import * as React from 'react';
import { CssVarsProvider, extendTheme } from '@temp-mui/joy/styles';
import colors from '@temp-mui/joy/colors';
import Box from '@temp-mui/joy/Box';
import ScopedCssBaseline from '@temp-mui/joy/ScopedCssBaseline';

const theme = extendTheme({
  colorSchemes: {
    forest: {
      palette: {
        mode: 'dark',
        background: {
          body: colors.green[200],
        },
      },
    },
  },
});

export default function JoyScopedCssBaseline() {
  return (
    <CssVarsProvider theme={theme}>
      <ScopedCssBaseline
        data-joy-color-scheme="forest"
        sx={{ width: 300, height: 100, overflow: 'scroll', bgcolor: 'background.body' }}
      >
        {/* The scrollbar should be dark */}
        <Box sx={{ height: 1000 }} />
      </ScopedCssBaseline>
    </CssVarsProvider>
  );
}
