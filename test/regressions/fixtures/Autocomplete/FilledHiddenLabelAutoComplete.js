import * as React from 'react';
import Autocomplete from '@temp-mui/material/Autocomplete';
import TextField from '@temp-mui/material/TextField';

export default function Demo() {
  return (
    <div style={{ width: 300 }}>
      <Autocomplete
        options={[]}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="filled"
            hiddenLabel
            placeholder="Filled variant with hiddenLabel"
          />
        )}
      />
    </div>
  );
}
