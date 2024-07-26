import * as React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@temp-mui/material/Avatar';
import Box from '@temp-mui/material/Box';
import SpeedDial from '@temp-mui/material/SpeedDial';
import SpeedDialIcon from '@temp-mui/material/SpeedDialIcon';
import SpeedDialAction from '@temp-mui/material/SpeedDialAction';

function SimpleSpeedDial(props) {
  const tooltipPlacement = {
    up: 'left',
    right: 'top',
    down: 'right',
    left: 'bottom',
  };

  return (
    <SpeedDial icon={<SpeedDialIcon />} open {...props}>
      {['A', 'B', 'C'].map((name) => (
        <SpeedDialAction
          key={name}
          icon={<Avatar>{name}</Avatar>}
          tooltipOpen
          tooltipPlacement={tooltipPlacement[props.direction]}
          tooltipTitle={'Tooltip'}
        />
      ))}
    </SpeedDial>
  );
}

SimpleSpeedDial.propTypes = {
  direction: PropTypes.string.isRequired,
};

function Directions() {
  return (
    <Box sx={{ position: 'relative', height: 360, width: 400 }}>
      {['up', 'down'].map((direction) => (
        <SimpleSpeedDial
          sx={{
            position: 'absolute',
            ...(direction === 'up' && { bottom: 0, right: 0 }),
            ...(direction === 'down' && { top: 0, left: 0 }),
          }}
          key={direction}
          ariaLabel={direction}
          direction={direction}
        />
      ))}
    </Box>
  );
}

export default Directions;
