import * as React from 'react';
import { createRoot } from 'react-dom/client';
import CssBaseline from '@temp-mui/material/CssBaseline';
import { ThemeProvider } from '@temp-mui/material/styles';
import App from './App';
import theme from './theme';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <App />
    </ThemeProvider>
    ,
  </React.StrictMode>,
);
