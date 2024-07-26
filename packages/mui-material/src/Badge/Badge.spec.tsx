import * as React from 'react';
import Badge from '@temp-mui/material/Badge';

function classesTest() {
  return (
    <Badge badgeContent={4} classes={{ badge: 'testBadgeClassName', colorInfo: 'colorInfoClass' }}>
      <div>Hello World</div>
    </Badge>
  );
}
