import { createTheme } from '@temp-mui/material';

createTheme({
  components: {
    MuiSwipeableDrawer: {
      defaultProps: {
        disableSwipeToOpen: true,
      },
    },
  },
});
