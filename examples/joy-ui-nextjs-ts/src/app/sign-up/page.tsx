import * as React from 'react';
import Sheet from '@temp-mui/joy/Sheet';
import Typography from '@temp-mui/joy/Typography';
import FormControl from '@temp-mui/joy/FormControl';
import FormLabel from '@temp-mui/joy/FormLabel';
import Input from '@temp-mui/joy/Input';
import Button from '@temp-mui/joy/Button';
import Link from '@temp-mui/joy/Link';

export default function SignUp() {
  return (
    <Sheet
      sx={{
        display: 'flex',
        flexFlow: 'row nowrap',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
      }}
    >
      <Sheet
        sx={{
          width: 300,
          mx: 'auto',
          my: 4,
          py: 3,
          px: 2,
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          borderRadius: 'sm',
          boxShadow: 'md',
        }}
        variant="outlined"
      >
        <div>
          <Typography level="h4" component="h1">
            <strong>Welcome 👋</strong>
          </Typography>
          <Typography level="body-sm">Sign up for an account.</Typography>
        </div>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input name="email" type="email" placeholder="johndoe@email.com" />
        </FormControl>
        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input name="password" type="password" placeholder="password" />
        </FormControl>

        <Button sx={{ mt: 1 }}>Create account</Button>
        <Typography
          endDecorator={<Link href="/">Log in</Link>}
          fontSize="sm"
          sx={{ alignSelf: 'center' }}
        >
          Already have an account?
        </Typography>
      </Sheet>
    </Sheet>
  );
}
