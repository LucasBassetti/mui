import * as React from 'react';
import Button from '@temp-mui/material/Button';
import Box from '@temp-mui/material/Box';
import ButtonGroup from '@temp-mui/material/ButtonGroup';

const buttons = [
  <Button key="one">One</Button>,
  <Button key="two">Two</Button>,
  <Button key="three">Three</Button>,
];

export default function DisabledButtonGroup() {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        '& > *': {
          m: 1,
        },
      }}
    >
      {/* variant="text" */}
      <ButtonGroup
        color="error"
        orientation="horizontal"
        aria-label="horizontal text button group"
        variant="text"
        disabled
      >
        {buttons}
      </ButtonGroup>
      {/* variant="text" */}
      <ButtonGroup
        color="error"
        orientation="vertical"
        aria-label="vertical text button group"
        variant="text"
        disabled
      >
        {buttons}
      </ButtonGroup>
    </Box>
  );
}
