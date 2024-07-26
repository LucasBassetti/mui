import * as React from 'react';
import Tab from '@temp-mui/material/Tab';
import Tabs from '@temp-mui/material/Tabs';
import { createTheme } from '@temp-mui/material/styles';

declare module '@temp-mui/material/Tabs' {
  interface TabsPropsIndicatorColorOverrides {
    success: true;
  }
}

// theme typings should work as expected
const theme = createTheme({
  components: {
    MuiTabs: {
      variants: [
        {
          props: { indicatorColor: 'success' },
          style: {
            backgroundColor: '#e70000',
          },
        },
      ],
    },
  },
});

<Tabs indicatorColor="success">
  <Tab label="Item One" />
  <Tab label="Item Two" />
</Tabs>;

// @ts-expect-error unknown indicatorColor
<Tabs indicatorColor="error">
  <Tab label="Item One" />
  <Tab label="Item Two" />
</Tabs>;
