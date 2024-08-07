import * as React from 'react';
import OutlinedInput from '@temp-mui/material/OutlinedInput';
import InputLabel from '@temp-mui/material/InputLabel';
import MenuItem from '@temp-mui/material/MenuItem';
import FormHelperText from '@temp-mui/material/FormHelperText';
import FormControl from '@temp-mui/material/FormControl';
import Select from '@temp-mui/material/Select';

export default function SelectAlignment() {
  return (
    <div>
      <FormControl>
        <InputLabel htmlFor="age1">Age</InputLabel>
        <Select
          value=""
          label="Age"
          id="age1"
          fullWidth
          input={<OutlinedInput name="age1" label="year" id="age1" />}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
        </Select>
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="age2">year</InputLabel>
        <Select value={10} input={<OutlinedInput label="year" name="year" id="age2" />}>
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
        </Select>
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="name-input">Name</InputLabel>
        <OutlinedInput id="name-input" />
        <FormHelperText>Alignment with an input</FormHelperText>
      </FormControl>
    </div>
  );
}
