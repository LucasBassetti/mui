import * as React from 'react';
import Box, { BoxProps } from '@temp-mui/material/Box';
import Stack from '@temp-mui/material/Stack';

const Stage: React.FC<React.PropsWithChildren<BoxProps>> = ({ children, ...props }) => {
  return <Box {...props}>{children}</Box>;
};

export default function App() {
  return (
    <Stack component={Stage} spacing={2}>
      <div />
    </Stack>
  );
}
