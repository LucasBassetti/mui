import * as React from 'react';
import { createRenderer } from '@temp-mui-internal/test-utils';
import { ThemeProvider } from '@temp-mui/joy/styles';
import AccordionSummary, { accordionSummaryClasses as classes } from '@temp-mui/joy/AccordionSummary';
import describeConformance from '../../test/describeConformance';

describe('<AccordionSummary />', () => {
  const { render } = createRenderer();

  describeConformance(<AccordionSummary />, () => ({
    classes,
    inheritComponent: 'div',
    render,
    ThemeProvider,
    muiName: 'JoyAccordionSummary',
    refInstanceof: window.HTMLDivElement,
    testComponentPropWith: 'span',
    skip: ['classesRoot', 'componentsProp', 'themeVariants'],
    slots: {
      root: {
        expectedClassName: classes.root,
      },
    },
  }));
});
