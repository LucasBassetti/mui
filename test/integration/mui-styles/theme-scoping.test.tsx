import * as React from 'react';
import { expect } from 'chai';
import { createRenderer } from '@temp-mui-internal/test-utils';
import * as material from '@temp-mui/material/styles';
import * as joy from '@temp-mui/joy/styles';
import { makeStyles } from '@temp-mui/styles';

describe('Theme scoping', () => {
  const { render } = createRenderer();

  it('should get Material UI theme even it is inside Joy provider', () => {
    const useStyles = makeStyles<material.Theme>((theme) => ({
      root: {
        color: theme.palette.grey[700], // joy does not have `grey` in the default theme.
      },
    }));
    function Component() {
      const classes = useStyles();

      return <div className={classes.root}>Component</div>;
    }

    expect(() =>
      render(
        <material.ThemeProvider theme={{ [material.THEME_ID]: material.createTheme() }}>
          <joy.ThemeProvider>
            <Component />
          </joy.ThemeProvider>
        </material.ThemeProvider>,
      ),
    ).not.to.throw();
  });
});
