import * as React from 'react';
import { expectType } from '@temp-mui/types';
import AspectRatio, { AspectRatioOwnerState } from '@temp-mui/joy/AspectRatio';

<AspectRatio
  slots={{
    root: 'div',
    content: 'div',
  }}
/>;

<AspectRatio
  slotProps={{
    root: {
      component: 'div',
      'data-testid': 'test',
    },
    content: {
      component: 'div',
      'data-testid': 'test',
    },
  }}
/>;

<AspectRatio
  slotProps={{
    root: (ownerState) => {
      expectType<AspectRatioOwnerState, typeof ownerState>(ownerState);
      return {
        'data-testid': 'test',
      };
    },
    content: (ownerState) => {
      expectType<AspectRatioOwnerState, typeof ownerState>(ownerState);
      return {
        'data-testid': 'test',
      };
    },
  }}
/>;
