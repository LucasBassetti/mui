import * as React from 'react';
import { Select } from '@temp-mui/base';

declare module '@temp-mui/base' {
  interface SelectRootSlotPropsOverrides {
    variant?: 'one' | 'two';
  }
}

<Select slotProps={{ root: { variant: 'one' } }} />;

// @ts-expect-error unknown variant
<Select slotProps={{ root: { variant: 'three' } }} />;
