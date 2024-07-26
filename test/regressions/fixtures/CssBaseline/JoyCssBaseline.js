import * as React from 'react';
import { CssVarsProvider } from '@temp-mui/joy/styles';
import Box from '@temp-mui/joy/Box';
import CssBaseline from '@temp-mui/joy/CssBaseline';

export default function JoyCssBaseline() {
  return (
    <CssVarsProvider>
      <CssBaseline />
      <Box sx={{ p: 2, display: 'flex', flexDirection: 'column', gap: 2 }}>
        <Box sx={{ width: 300, height: 100, overflow: 'scroll', bgcolor: 'background.level1' }}>
          {/* The scrollbar should be light */}
          <Box sx={{ height: 1000 }} />
        </Box>
        <Box
          data-joy-color-scheme="dark"
          sx={{ width: 300, height: 100, overflow: 'scroll', bgcolor: 'background.level1' }}
        >
          {/* The scrollbar should be dark */}
          <Box sx={{ height: 1000 }} />
        </Box>
      </Box>
    </CssVarsProvider>
  );
}
