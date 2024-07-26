// theme for MUI System (emotion)
'use client';
import { createTheme } from '@temp-mui/material/styles';

export default createTheme({
  components: {
    MuiStack: {
      defaultProps: {
        useFlexGap: true,
      },
    },
  },
});
