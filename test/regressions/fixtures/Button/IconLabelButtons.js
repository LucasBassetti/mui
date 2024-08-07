import * as React from 'react';
import Button from '@temp-mui/material/Button';
import Icon from '@temp-mui/material/Icon';
import SendIcon from '@temp-mui/icons-material/Send';

export default function IconLabelButtons() {
  return (
    <div>
      <Button variant="contained" color="secondary" startIcon={<SendIcon />}>
        Send
      </Button>
      <Button variant="contained" endIcon={<Icon>send</Icon>}>
        Send
      </Button>
      <Button variant="contained" disabled color="secondary" startIcon={<SendIcon />}>
        Send
      </Button>
      <Button variant="contained" size="small" startIcon={<SendIcon />}>
        Send
      </Button>
      <Button variant="contained" size="large" startIcon={<SendIcon />}>
        Send
      </Button>
    </div>
  );
}
