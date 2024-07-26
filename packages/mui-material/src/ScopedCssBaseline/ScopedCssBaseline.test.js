import * as React from 'react';
import { createRenderer } from '@temp-mui-internal/test-utils';
import ScopedCssBaseline, {
  scopedCssBaselineClasses as classes,
} from '@temp-mui/material/ScopedCssBaseline';
import describeConformance from '../../test/describeConformance';

describe('<ScopedCssBaseline />', () => {
  const { render } = createRenderer();

  describeConformance(<ScopedCssBaseline />, () => ({
    classes,
    inheritComponent: 'div',
    render,
    muiName: 'MuiScopedCssBaseline',
    refInstanceof: window.HTMLDivElement,
    testComponentPropWith: 'span',
    skip: ['componentsProp', 'themeVariants'],
  }));
});
