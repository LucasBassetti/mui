import * as React from 'react';
import { CssVarsProvider } from '@temp-mui/joy/styles';
import CssBaseline from '@temp-mui/joy/CssBaseline';
import Box from '@temp-mui/joy/Box';
import Card from '@temp-mui/joy/Card';
import Drawer from '@temp-mui/joy/Drawer';
import Divider from '@temp-mui/joy/Divider';
import List from '@temp-mui/joy/List';
import ListItem from '@temp-mui/joy/ListItem';
import ListItemButton from '@temp-mui/joy/ListItemButton';
import Typography from '@temp-mui/joy/Typography';

export default function DrawerColorInversion() {
  return (
    <CssVarsProvider>
      <CssBaseline />
      <Box sx={{ width: '100vw', height: '100vh', bgcolor: 'background.body' }} />
      <Drawer open color="primary" variant="solid" invertedColors>
        <Box role="presentation">
          <List>
            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text) => (
              <ListItem key={text}>
                <ListItemButton>{text}</ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {['All mail', 'Trash', 'Spam'].map((text) => (
              <ListItem key={text}>
                <ListItemButton>{text}</ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
        <Card variant="soft">
          <Typography level="title-lg" fontFamily="code">
            •••• •••• •••• 1212
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'space-between' }}>
            <div>
              <Typography fontSize="xs" fontFamily="code">
                CARD NAME
              </Typography>
              <Typography level="title-sm" fontSize="sm">
                JOHN DOE
              </Typography>
            </div>
            <div>
              <Typography fontSize="xs" textAlign="right" fontFamily="code">
                EXPIRE
              </Typography>
              <Typography level="title-sm" fontSize="sm" textAlign="right">
                07/25
              </Typography>
            </div>
          </Box>
        </Card>
      </Drawer>
    </CssVarsProvider>
  );
}
