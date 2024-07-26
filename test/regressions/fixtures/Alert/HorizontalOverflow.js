import * as React from 'react';
import Button from '@temp-mui/material/Button';
import Typography from '@temp-mui/material/Typography';
import Alert from '@temp-mui/material/Alert';
import { Box } from '@temp-mui/material';

export default function MultilineAlertWithAction() {
  return (
    <Box sx={{ width: 500 }}>
      <Alert
        action={
          <Button color="inherit" size="small">
            UNDO
          </Button>
        }
      >
        <Typography as="div">{'a'.repeat(500)}</Typography>
      </Alert>
    </Box>
  );
}
