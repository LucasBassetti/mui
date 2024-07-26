import * as React from 'react';
import { createRenderer } from '@temp-mui-internal/test-utils';
import TimelineItem, { timelineItemClasses as classes } from '@temp-mui/lab/TimelineItem';
import describeConformance from '../../test/describeConformance';

describe('<TimelineItem />', () => {
  const { render } = createRenderer();

  describeConformance(<TimelineItem />, () => ({
    classes,
    inheritComponent: 'li',
    render,
    muiName: 'MuiTimelineItem',
    refInstanceof: window.HTMLLIElement,
    skip: ['componentProp', 'componentsProp', 'themeVariants'],
  }));
});
