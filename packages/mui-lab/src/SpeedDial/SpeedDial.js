'use client';
import * as React from 'react';
import SpeedDial from '@temp-mui/material/SpeedDial';

let warnedOnce = false;

/**
 * @ignore - do not document.
 */
export default React.forwardRef(function DeprecatedSpeedDial(props, ref) {
  if (!warnedOnce) {
    console.warn(
      [
        'MUI: The SpeedDial component was moved from the lab to the core.',
        '',
        "You should use `import { SpeedDial } from '@temp-mui/material'`",
        "or `import SpeedDial from '@temp-mui/material/SpeedDial'`",
      ].join('\n'),
    );

    warnedOnce = true;
  }

  return <SpeedDial ref={ref} {...props} />;
});
