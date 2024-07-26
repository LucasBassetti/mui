import * as React from 'react';
import { CssVarsProvider } from '@temp-mui/joy/styles';
import Box from '@temp-mui/joy/Box';
import Select from '@temp-mui/joy/Select';
import Option from '@temp-mui/joy/Option';

export default function ListboxMinWidth() {
  return (
    <CssVarsProvider>
      <Box sx={{ display: 'flex' }}>
        <Select defaultListboxOpen placeholder="None">
          <Option value="short">Short option</Option>
          <Option value="long">A very long option</Option>
        </Select>
      </Box>
    </CssVarsProvider>
  );
}
