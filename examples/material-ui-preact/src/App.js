import * as React from 'react';
import Container from '@temp-mui/material/Container';
import Typography from '@temp-mui/material/Typography';
import Box from '@temp-mui/material/Box';
import ProTip from './ProTip';
import Copyright from './Copyright';

export default function App() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
          Material UI Preact example
        </Typography>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
}
