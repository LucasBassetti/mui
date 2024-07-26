import * as React from 'react';
import { createRenderer } from '@temp-mui-internal/test-utils';
import { ThemeProvider } from '@temp-mui/joy/styles';
import StepButton, { stepButtonClasses as classes } from '@temp-mui/joy/StepButton';
import describeConformance from '../../test/describeConformance';

describe('<StepButton />', () => {
  const { render } = createRenderer();

  describeConformance(<StepButton />, () => ({
    classes,
    inheritComponent: 'button',
    render,
    ThemeProvider,
    muiName: 'JoyStepButton',
    refInstanceof: window.HTMLButtonElement,
    testComponentPropWith: 'div',
    skip: ['classesRoot', 'componentsProp', 'themeVariants'],
    slots: {
      root: {
        expectedClassName: classes.root,
      },
    },
  }));
});
