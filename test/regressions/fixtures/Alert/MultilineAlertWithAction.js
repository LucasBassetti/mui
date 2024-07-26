import * as React from 'react';
import Button from '@temp-mui/material/Button';
import Typography from '@temp-mui/material/Typography';
import Alert from '@temp-mui/material/Alert';

export default function MultilineAlertWithAction() {
  return (
    <Alert
      action={
        <Button color="inherit" size="small">
          UNDO
        </Button>
      }
    >
      <Typography as="div">This is the first line.</Typography>
      <Typography as="div">This is the second line.</Typography>
    </Alert>
  );
}
