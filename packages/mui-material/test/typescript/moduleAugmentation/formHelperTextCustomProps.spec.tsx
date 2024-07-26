import * as React from 'react';
import FormHelperText from '@temp-mui/material/FormHelperText';
import FormControl from '@temp-mui/material/FormControl';
import { createTheme } from '@temp-mui/material/styles';

declare module '@temp-mui/material/FormHelperText' {
  interface FormHelperTextPropsVariantOverrides {
    warning: true;
  }
}

// theme typings should work as expected
const theme = createTheme({
  components: {
    MuiFormHelperText: {
      variants: [
        {
          props: { variant: 'warning' },
          style: {
            backgroundColor: '#ffa726',
            color: '#ffffff',
          },
        },
      ],
    },
  },
});

<FormControl>
  <FormHelperText variant="warning">This is warning helper text</FormHelperText>
</FormControl>;

<FormControl>
  {/* @ts-expect-error unknown variant */}
  <FormHelperText variant="checked">This is example helper text</FormHelperText>
</FormControl>;
