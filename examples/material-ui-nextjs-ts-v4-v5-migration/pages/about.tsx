import * as React from 'react';
import Container from '@temp-mui/material/Container';
import Typography from '@temp-mui/material/Typography';
import Box from '@temp-mui/material/Box';
import Button from '@temp-mui/material/Button';
import { makeStyles } from '@temp-mui/styles';
import Link from '../src/Link';
import ProTip from '../src/ProTip';
import Copyright from '../src/Copyright';

const useStyles = makeStyles((theme) => ({
  main: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

export default function About() {
  const classes = useStyles();
  return (
    <Container maxWidth="lg">
      <div className={classes.main}>
        <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
          Material UI - Next.js example in TypeScript with legacy @temp-mui/styles
        </Typography>
        <Box sx={{ maxWidth: 'sm' }}>
          <Button variant="contained" component={Link} noLinkStyle href="/">
            Go to the home page
          </Button>
        </Box>
        <ProTip />
        <Copyright />
      </div>
    </Container>
  );
}
