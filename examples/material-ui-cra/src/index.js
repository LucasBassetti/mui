import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import CssBaseline from '@temp-mui/material/CssBaseline';
import { ThemeProvider } from '@temp-mui/material/styles';
import App from './App';
import theme from './theme';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
  <ThemeProvider theme={theme}>
    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
    <CssBaseline />
    <App />
  </ThemeProvider>,
);
