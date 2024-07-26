import * as React from 'react';
import InputLabel from '@temp-mui/material/InputLabel';

declare module '@temp-mui/material/InputLabel' {
  interface InputLabelPropsSizeOverrides {
    customSize: true;
  }
}

<InputLabel size="customSize" />;

// @ts-expect-error unknown size
<InputLabel size="foo" />;
