import * as React from 'react';
import GlobalStyles from '@temp-mui/material/GlobalStyles';

function TestThemeType() {
  <GlobalStyles
    styles={(theme) => ({
      [theme.breakpoints.up('sm')]: { color: theme.palette.primary.main },
    })}
  />;
}
