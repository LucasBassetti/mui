import * as React from 'react';
import { createRenderer } from '@temp-mui-internal/test-utils';
import TableContainer, { tableContainerClasses as classes } from '@temp-mui/material/TableContainer';
import describeConformance from '../../test/describeConformance';

describe('<TableContainer />', () => {
  const { render } = createRenderer();

  describeConformance(<TableContainer />, () => ({
    classes,
    inheritComponent: 'div',
    render,
    muiName: 'MuiTableContainer',
    testVariantProps: { variant: 'foo' },
    refInstanceof: window.HTMLDivElement,
    testComponentPropWith: 'span',
    skip: ['componentsProp'],
  }));
});
