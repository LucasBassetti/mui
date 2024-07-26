import CloseRounded from '@temp-mui/icons-material/CloseRounded';
import { createTheme } from '@temp-mui/material';

createTheme({
  components: {
    MuiAlert: {
      defaultProps: {
        slots: {
          closeIcon: CloseRounded,
        },
      },
    },
  },
});
