import * as React from 'react';
import CssBaseline from '@temp-mui/material/CssBaseline';
import Typography from '@temp-mui/material/Typography';
import Avatar from '@temp-mui/material/Avatar';
import Skeleton from '@temp-mui/material/Skeleton';

export default function SkeletonChildren() {
  return (
    <React.Fragment>
      <CssBaseline />
      <div style={{ alignItems: 'center', display: 'flex', width: '200px' }}>
        <div style={{ margin: '8px' }}>
          <Skeleton variant="circular">
            <Avatar />
          </Skeleton>
        </div>
        <div style={{ width: '100%' }}>
          <Skeleton width="100%">
            <Typography>.</Typography>
          </Skeleton>
        </div>
      </div>
    </React.Fragment>
  );
}
