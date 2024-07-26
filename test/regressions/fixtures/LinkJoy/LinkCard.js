import * as React from 'react';
import Avatar from '@temp-mui/joy/Avatar';
import Box from '@temp-mui/joy/Box';
import Card from '@temp-mui/joy/Card';
import Link, { linkClasses } from '@temp-mui/joy/Link';
import Typography from '@temp-mui/joy/Typography';

export default function LinkCard() {
  return (
    <Box sx={{ p: 2 }}>
      <Card variant="outlined" sx={{ display: 'flex', gap: 2 }}>
        <Avatar size="lg" src="/static/images/avatar/1.jpg" />
        <Link
          overlay
          href="#introduction"
          underline="none"
          className={linkClasses.focusVisible}
          sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}
        >
          <Typography level="body-md">Joy UI</Typography>
          <Typography level="body-sm">Components that spark joy!</Typography>
        </Link>
      </Card>
    </Box>
  );
}
