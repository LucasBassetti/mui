import * as React from 'react';
import { styled } from '@temp-mui/material/styles';
const PREFIX = 'Test';

const classes = {
  root: `${PREFIX}-root`
};

const Root = styled('div')({
  [`&.${classes.root}`]: {},
});

export function Bug() {}

const Test = (props => {
  const { } = props;
  return <Root className={classes.root}>Anonymous</Root>;
});

export default Test
