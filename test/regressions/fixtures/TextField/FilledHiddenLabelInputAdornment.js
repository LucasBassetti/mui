import * as React from 'react';
import TextField from '@temp-mui/material/TextField';
import InputAdornment from '@temp-mui/material/InputAdornment';

export default function FilledHiddenLabelInputAdornment() {
  return (
    <TextField
      hiddenLabel
      id="filled-hidden-label"
      defaultValue="Value"
      variant="filled"
      InputProps={{
        startAdornment: <InputAdornment position="start">kg</InputAdornment>,
      }}
    />
  );
}
