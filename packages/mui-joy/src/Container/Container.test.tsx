import * as React from 'react';
import { createRenderer } from '@temp-mui-internal/test-utils';
import { ThemeProvider } from '@temp-mui/joy/styles';
import Container, { containerClasses as classes } from '@temp-mui/joy/Container';
import describeConformance from '../../test/describeConformance';

describe('Joy <Container />', () => {
  const { render } = createRenderer();

  const defaultProps = {
    children: <div />,
  };

  describeConformance(<Container {...defaultProps} />, () => ({
    classes,
    inheritComponent: 'div',
    render,
    ThemeProvider,
    refInstanceof: window.HTMLElement,
    muiName: 'JoyContainer',
    skip: ['componentsProp'],
    testVariantProps: { fixed: true },
  }));
});
