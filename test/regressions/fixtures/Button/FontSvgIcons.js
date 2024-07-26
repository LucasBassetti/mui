import * as React from 'react';
import Fab from '@temp-mui/material/Fab';
import IconButton from '@temp-mui/material/IconButton';
import DeleteIcon from '@temp-mui/icons-material/Delete';
import Icon from '@temp-mui/material/Icon';

export default function FontSvgIcons() {
  return (
    <div>
      <Fab color="primary">
        <DeleteIcon />
      </Fab>
      <Fab color="primary">
        <Icon>delete_icon</Icon>
      </Fab>
      <IconButton>
        <DeleteIcon />
      </IconButton>
      <IconButton>
        <Icon>delete_icon</Icon>
      </IconButton>
    </div>
  );
}
