import * as React from 'react';
import { createRenderer } from '@temp-mui-internal/test-utils';
import ListItemIcon, { listItemIconClasses as classes } from '@temp-mui/material/ListItemIcon';
import describeConformance from '../../test/describeConformance';

describe('<ListItemIcon />', () => {
  const { render } = createRenderer();

  describeConformance(
    <ListItemIcon>
      <div />
    </ListItemIcon>,
    () => ({
      classes,
      inheritComponent: 'div',
      render,
      muiName: 'MuiListItemIcon',
      refInstanceof: window.HTMLDivElement,
      skip: ['componentProp', 'componentsProp', 'themeVariants'],
    }),
  );
});
