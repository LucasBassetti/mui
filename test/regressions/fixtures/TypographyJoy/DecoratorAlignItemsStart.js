import * as React from 'react';
import { CssVarsProvider } from '@temp-mui/joy/styles';
import Box from '@temp-mui/joy/Box';
import Typography from '@temp-mui/joy/Typography';
import Link from '@temp-mui/joy/Link';

export default function DecoratorAlignItemsStart() {
  return (
    <CssVarsProvider>
      <Typography startDecorator="✅" alignItems="flex-start" sx={{ width: 160 }}>
        Hello World, this is a very long sentence.
      </Typography>
      <Typography
        startDecorator={
          <Box
            component="span"
            sx={{ bgcolor: 'tomato', width: '1.25em', height: '1.25em', borderRadius: '50%' }}
          />
        }
        alignItems="flex-start"
        sx={{ width: 160 }}
      >
        Hello World, this is a very long sentence.
      </Typography>
      <Link href="/" startDecorator="✅" sx={{ width: 160, alignItems: 'flex-start' }}>
        Hello World, this is a very long sentence.
      </Link>
      <Link
        href="/"
        startDecorator={
          <Box
            component="span"
            sx={{ bgcolor: 'tomato', width: '1.25em', height: '1.25em', borderRadius: '50%' }}
          />
        }
        sx={{ width: 160, alignItems: 'flex-start' }}
      >
        Hello World, this is a very long sentence.
      </Link>
    </CssVarsProvider>
  );
}
