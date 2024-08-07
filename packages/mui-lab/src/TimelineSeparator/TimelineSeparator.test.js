import * as React from 'react';
import { createRenderer } from '@temp-mui-internal/test-utils';
import TimelineSeparator, { timelineSeparatorClasses as classes } from '@temp-mui/lab/TimelineSeparator';
import describeConformance from '../../test/describeConformance';

describe('<TimelineSeparator />', () => {
  const { render } = createRenderer();

  describeConformance(<TimelineSeparator />, () => ({
    classes,
    inheritComponent: 'div',
    render,
    muiName: 'MuiTimelineSeparator',
    refInstanceof: window.HTMLDivElement,
    skip: ['componentProp', 'componentsProp', 'themeVariants'],
  }));
});
