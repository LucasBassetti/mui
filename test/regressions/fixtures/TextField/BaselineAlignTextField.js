import * as React from 'react';
import TextField from '@temp-mui/material/TextField';
import Visibility from '@temp-mui/icons-material/Visibility';
import InputAdornment from '@temp-mui/material/InputAdornment';

export default function BaselineAlignTextField() {
  return (
    <div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'baseline',
        }}
      >
        Base
        <TextField
          label="label"
          placeholder="placeholder"
          variant="standard"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Visibility />
              </InputAdornment>
            ),
          }}
        />
        Base
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'baseline',
        }}
      >
        Base
        <TextField
          label="label"
          placeholder="placeholder"
          variant="standard"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Visibility />
              </InputAdornment>
            ),
          }}
        />
        Base
      </div>
    </div>
  );
}
