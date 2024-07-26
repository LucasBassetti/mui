import * as React from 'react';
import { styled } from '@temp-mui/joy/styles';
import { applySoftInversion, applySolidInversion } from '@temp-mui/joy/colorInversion';
import Box from '@temp-mui/joy/Box';

/**
 * sx prop type check
 */
<Box sx={[(theme) => ({}), applySoftInversion('neutral'), applySoftInversion('primary')]} />;

<Box
  sx={[
    (theme) => ({}),
    // @ts-expect-error no `unknown` color from theme palette
    applySoftInversion('unknown'),
    // @ts-expect-error no `unknown` color from theme palette
    applySoftInversion('unknown'),
  ]}
/>;

/**
 * styled API type check
 */
const StyledBox = styled('div')(
  ({ theme }) => ({
    padding: 32,
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    alignItems: 'center',
    rowGap: 16,
    columnGap: 64,
    borderRadius: 8,
    background: `linear-gradient(45deg, ${theme.vars.palette.neutral[800]}, ${theme.vars.palette.neutral[600]})`,
  }),
  applySolidInversion('neutral'),
);

styled('div')(({ theme }) => ({}), applySoftInversion('primary'), applySolidInversion('primary'));

styled('div')(
  ({ theme }) => ({}),
  // @ts-expect-error no `unknown` color from theme palette
  applySoftInversion('unknown'),
  // @ts-expect-error no `unknown` color from theme palette
  applySolidInversion('unknown'),
);
