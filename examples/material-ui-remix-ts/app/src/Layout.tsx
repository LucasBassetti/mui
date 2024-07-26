import * as React from 'react';
import Container from '@temp-mui/material/Container';
import Box from '@temp-mui/material/Box';
import ProTip from './ProTip';
import Copyright from './Copyright';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        {children}
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
}
