import * as React from 'react';
import { CssVarsProvider } from '@temp-mui/joy/styles';
import AspectRatio from '@temp-mui/joy/AspectRatio';
import Box from '@temp-mui/joy/Box';

export default function VariantColorJoy() {
  return (
    <CssVarsProvider>
      <Box sx={{ p: 2, bgcolor: 'red' }}>
        <AspectRatio sx={{ borderRadius: 'xl', minWidth: 200 }} />
      </Box>
    </CssVarsProvider>
  );
}
