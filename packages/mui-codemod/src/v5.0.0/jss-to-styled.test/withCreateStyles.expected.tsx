import * as React from 'react';
import { styled } from '@temp-mui/material/styles';
const PREFIX = 'MyComponent';

const classes = {
  root: `${PREFIX}-root`
};

const Root = styled('div')((
  {
    theme
  }
) => ({
  [`&.${classes.root}`]: {
    background: theme.background,
  }
}));

const MyComponent = (props) => {


  return <Root {...props} className={classes.root} />;
};

export default MyComponent;
