import * as React from 'react';
import { AppBar } from '@temp-mui/material';

declare module '@temp-mui/material/AppBar' {
  interface AppBarPropsColorOverrides {
    customAppBarColor: true;
  }
}

<AppBar color="customAppBarColor" />;

// @ts-expect-error unknown color
<AppBar color="foo" />;
