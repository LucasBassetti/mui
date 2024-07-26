import * as React from 'react';
import { CircularProgress, LinearProgress } from '@temp-mui/material';

declare module '@temp-mui/material/CircularProgress' {
  interface CircularProgressPropsColorOverrides {
    customCircularColor: true;
  }
}
declare module '@temp-mui/material/LinearProgress' {
  interface LinearProgressPropsColorOverrides {
    customLinearColor: true;
  }
}

<CircularProgress color="customCircularColor" />;

// @ts-expect-error unknown color
<CircularProgress color="foo" />;

<LinearProgress color="customLinearColor" />;

// @ts-expect-error unknown color
<LinearProgress color="foo" />;
