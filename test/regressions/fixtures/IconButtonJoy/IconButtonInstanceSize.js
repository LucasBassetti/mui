import * as React from 'react';
import { CssVarsProvider } from '@temp-mui/joy/styles';
import Input from '@temp-mui/joy/Input';
import IconButton from '@temp-mui/joy/IconButton';
import Stack from '@temp-mui/joy/Stack';
import VisibilityIcon from '@temp-mui/icons-material/Visibility';

export default function VariantColorJoy() {
  return (
    <CssVarsProvider>
      <Stack spacing={2}>
        <Input
          size="lg"
          endDecorator={
            <IconButton>
              <VisibilityIcon />
            </IconButton>
          }
        />
        <Input
          size="lg"
          endDecorator={
            <IconButton size="sm">
              <VisibilityIcon />
            </IconButton>
          }
        />
      </Stack>
    </CssVarsProvider>
  );
}
