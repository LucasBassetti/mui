import * as React from 'react';
import { createRenderer } from '@temp-mui-internal/test-utils';
import TimelineConnector, { timelineConnectorClasses as classes } from '@temp-mui/lab/TimelineConnector';
import describeConformance from '../../test/describeConformance';

describe('<TimelineConnector />', () => {
  const { render } = createRenderer();

  describeConformance(<TimelineConnector />, () => ({
    classes,
    inheritComponent: 'span',
    render,
    muiName: 'MuiTimelineConnector',
    refInstanceof: window.HTMLSpanElement,
    skip: ['componentProp', 'componentsProp', 'themeVariants'],
  }));
});
