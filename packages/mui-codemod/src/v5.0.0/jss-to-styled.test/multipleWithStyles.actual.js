import * as React from 'react';
import Button from '@temp-mui/material/Button';
import withStyles from '@temp-mui/styles/withStyles';

const Button1 = withStyles({
  root: {
    backgroundColor: 'red',
  },
})(Button);

const Button2 = withStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
  },
  actions: {
    padding: theme.spacing(1),
  },
}))(Button);

const Button3 = withStyles({
  root: {
    backgroundColor: 'blue',
  },
  actions: {
    padding: '0px',
  },
})(Button);

export const Test = () => (
  <React.Fragment>
    <Button1 />
    <Button2 />
    <Button3 />
  </React.Fragment>
);
