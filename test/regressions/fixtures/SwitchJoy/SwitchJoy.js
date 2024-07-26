import * as React from 'react';
import { CssVarsProvider } from '@temp-mui/joy/styles';
import Box from '@temp-mui/joy/Box';
import Switch from '@temp-mui/joy/Switch';

export default function SwitchJoy() {
  return (
    <CssVarsProvider>
      <Box sx={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(4, min-content)' }}>
        <Switch />
        <Switch defaultChecked />
        <Switch defaultChecked color="success" />
        <Switch variant="outlined" />
        <Switch variant="outlined" defaultChecked />
        <Switch variant="soft" />
        <Switch variant="soft" defaultChecked />
      </Box>
    </CssVarsProvider>
  );
}
