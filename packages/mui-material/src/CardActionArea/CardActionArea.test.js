import * as React from 'react';
import { createRenderer } from '@temp-mui-internal/test-utils';
import CardActionArea, { cardActionAreaClasses as classes } from '@temp-mui/material/CardActionArea';
import ButtonBase from '@temp-mui/material/ButtonBase';
import describeConformance from '../../test/describeConformance';

describe('<CardActionArea />', () => {
  const { render } = createRenderer();

  describeConformance(<CardActionArea />, () => ({
    classes,
    inheritComponent: ButtonBase,
    render,
    muiName: 'MuiCardActionArea',
    testDeepOverrides: { slotName: 'focusHighlight', slotClassName: classes.focusHighlight },
    testVariantProps: { variant: 'foo' },
    refInstanceof: window.HTMLButtonElement,
    skip: ['componentProp', 'componentsProp'],
  }));
});
