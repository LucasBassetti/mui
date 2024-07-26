import * as React from 'react';
import { CssVarsProvider } from '@temp-mui/joy/styles';
import Button from '@temp-mui/joy/Button';

export default function App() {
  return (
    <CssVarsProvider>
      <Button>Button</Button>
    </CssVarsProvider>
  );
}
