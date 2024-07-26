import * as React from 'react';
import { Experimental_CssVarsProvider as CssVarsProvider } from '@temp-mui/material/styles';
import Box from '@temp-mui/material/Box';
import CssBaseline from '@temp-mui/material/CssBaseline';

export default function MaterialCssBaseline() {
  return (
    <CssVarsProvider>
      <CssBaseline enableColorScheme />
      <Box sx={{ p: 2, display: 'flex', flexDirection: 'column', gap: 2 }}>
        <Box sx={{ width: 300, height: 100, overflow: 'scroll', bgcolor: 'background.paper' }}>
          {/* The scrollbar should be light */}
          <Box sx={{ height: 1000 }} />
        </Box>
        <Box
          data-mui-color-scheme="dark"
          sx={{ width: 300, height: 100, overflow: 'scroll', bgcolor: 'background.paper' }}
        >
          {/* The scrollbar should be dark */}
          <Box sx={{ height: 1000 }} />
        </Box>
      </Box>
    </CssVarsProvider>
  );
}
