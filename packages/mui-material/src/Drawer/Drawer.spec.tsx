import * as React from 'react';
import { expectType } from '@temp-mui/types';
import Drawer from '@temp-mui/material/Drawer';
import { PaperProps } from '@temp-mui/material/Paper';

const paperProps: PaperProps<'span'> = {
  component: 'span',
  onClick: (event) => {
    expectType<React.MouseEvent<HTMLSpanElement, MouseEvent>, typeof event>(event);
  },
};
function Test() {
  return (
    <React.Fragment>
      <Drawer open />;
      <Drawer open PaperProps={paperProps} />;
    </React.Fragment>
  );
}
