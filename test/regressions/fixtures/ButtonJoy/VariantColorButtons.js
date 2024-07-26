import * as React from 'react';
import { CssVarsProvider } from '@temp-mui/joy/styles';
import Box from '@temp-mui/joy/Box';
import Button from '@temp-mui/joy/Button';

export default function VariantColorJoy() {
  return (
    <CssVarsProvider>
      <Box sx={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(4, min-content)' }}>
        {['plain', 'outlined', 'soft', 'solid'].map((variant) => {
          return ['primary', 'neutral', 'danger', 'info', 'success', 'warning'].map((color) => (
            <Button key={`${variant}-${color}`} variant={variant} color={color}>
              {color}
            </Button>
          ));
        })}
      </Box>
    </CssVarsProvider>
  );
}
