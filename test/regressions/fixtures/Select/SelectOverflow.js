import * as React from 'react';
import MenuItem from '@temp-mui/material/MenuItem';
import Select from '@temp-mui/material/Select';

export default function SelectOverflow() {
  return (
    <Select value={10} style={{ maxWidth: 100 }}>
      <MenuItem value="">
        <em>None</em>
      </MenuItem>
      <MenuItem value={10}>Tennnnnnn</MenuItem>
    </Select>
  );
}
