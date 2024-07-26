import * as React from 'react';
import { expectType } from '@temp-mui/types';
import Dialog from '@temp-mui/material/Dialog';
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
      <Dialog open />;
      <Dialog open PaperProps={paperProps} />;
    </React.Fragment>
  );
}
