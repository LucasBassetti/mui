import * as React from 'react';
import { expect } from 'chai';
import { createRenderer } from '@temp-mui-internal/test-utils';
import Box from '@temp-mui/joy/Box';
import { styled } from '@temp-mui/joy/styles';
import { applySoftInversion, applySolidInversion } from '@temp-mui/joy/colorInversion';

describe('colorInversionUtil', () => {
  const { render } = createRenderer();

  it('should not throw error using sx prop', () => {
    expect(() =>
      render(<Box sx={[applySoftInversion('primary'), applySolidInversion('primary')]} />),
    ).not.to.throw();
  });

  it('should not throw error using styled API', () => {
    expect(() => {
      styled('div')(applySoftInversion('primary'), applySolidInversion('primary'));
    }).not.to.throw();
  });
});
