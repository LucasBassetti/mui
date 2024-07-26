import * as React from 'react';
import DialogActions from '@temp-mui/material/DialogActions';
import DialogContent from '@temp-mui/material/DialogContent';
import DialogContentText from '@temp-mui/material/DialogContentText';
import DialogTitle from '@temp-mui/material/DialogTitle';
import Paper from '@temp-mui/material/Paper';
import Button from '@temp-mui/material/Button';

export default function AlertDialog() {
  return (
    <Paper
      elevation={8}
      style={{
        width: 300,
      }}
    >
      <DialogTitle>{"Use Google's location service?"}</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Let Google help apps determine location. This means sending anonymous location data to
          Google, even when no apps are running.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button color="primary">Disagree</Button>
        <Button color="primary">Agree</Button>
      </DialogActions>
    </Paper>
  );
}
