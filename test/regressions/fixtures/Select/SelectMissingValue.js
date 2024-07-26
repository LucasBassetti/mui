import * as React from 'react';
import MenuItem from '@temp-mui/material/MenuItem';
import Select from '@temp-mui/material/Select';

export default function SelectMissingValue() {
  return (
    <Select value={0}>
      <MenuItem value={0} />
      <MenuItem value={10}>Ten</MenuItem>
    </Select>
  );
}
