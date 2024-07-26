import * as React from 'react';
import Autocomplete from '@temp-mui/material/Autocomplete';
import TextField from '@temp-mui/material/TextField';

function HoverMaterialAutocomplete() {
  return (
    <Autocomplete
      open
      options={['one', 'two', 'three', 'four', 'five']}
      sx={{ width: 300 }}
      ListboxProps={{ sx: { height: '100px' } }}
      renderInput={(params) => <TextField {...params} />}
    />
  );
}

export default HoverMaterialAutocomplete;
