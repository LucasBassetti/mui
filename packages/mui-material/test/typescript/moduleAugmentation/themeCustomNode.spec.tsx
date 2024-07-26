import * as React from 'react';
import { createTheme, styled } from '@temp-mui/material/styles';
import Box from '@temp-mui/material/Box';

interface CustomNode {
  background: string;
  color: string;
}

declare module '@temp-mui/material/styles' {
  interface ThemeOptions {
    customNode: CustomNode;
  }

  interface Theme {
    customNode: CustomNode;
  }
}

const customTheme = createTheme({
  customNode: {
    background: '#000',
    color: '#fff',
  },
});

const StyledComponent = styled('div')(({ theme }) => ({
  background: theme.customNode.background,
  color: theme.customNode.color,
}));

<Box
  sx={(theme) => ({
    background: theme.customNode.background,
    color: theme.customNode.color,
  })}
/>;
