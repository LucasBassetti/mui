import * as React from 'react';
import { extendTheme } from '@temp-mui/joy/styles';

declare module '@temp-mui/joy/styles' {
  interface ZIndex {
    appbar: number;
  }
}

const theme = extendTheme({
  zIndex: {
    appbar: 1000,
  },
});

function App() {
  return <div style={{ zIndex: theme.zIndex.appbar }}>{`My zIndex is ${theme.zIndex.appbar}`}</div>;
}
