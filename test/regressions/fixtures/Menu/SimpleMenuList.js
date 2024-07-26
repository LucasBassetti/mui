import * as React from 'react';
import Paper from '@temp-mui/material/Paper';
import MenuList from '@temp-mui/material/MenuList';
import MenuItem from '@temp-mui/material/MenuItem';

export default function SimpleMenuList() {
  return (
    <Paper elevation={8}>
      <MenuList>
        <MenuItem>Profile</MenuItem>
        <MenuItem selected>My Account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </MenuList>
    </Paper>
  );
}
