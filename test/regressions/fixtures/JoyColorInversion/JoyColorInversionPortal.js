import * as React from 'react';
import { CssVarsProvider } from '@temp-mui/joy/styles';
import CssBaseline from '@temp-mui/joy/CssBaseline';
import Autocomplete from '@temp-mui/joy/Autocomplete';
import Button from '@temp-mui/joy/Button';
import Card from '@temp-mui/joy/Card';
import Menu from '@temp-mui/joy/Menu';
import MenuItem from '@temp-mui/joy/MenuItem';
import ListDivider from '@temp-mui/joy/ListDivider';
import Tooltip from '@temp-mui/joy/Tooltip';
import Stack from '@temp-mui/joy/Stack';
import Select from '@temp-mui/joy/Select';
import Option from '@temp-mui/joy/Option';

const films = [
  { label: 'The Shawshank Redemption', year: 1994 },
  { label: 'The Godfather', year: 1972 },
  { label: 'The Godfather: Part II', year: 1974 },
  { label: 'The Dark Knight', year: 2008 },
  { label: '12 Angry Men', year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: 'Pulp Fiction', year: 1994 },
];

export default function ColorInversionPopup() {
  const [menuButton, setMenuButton] = React.useState(null);
  const [menuButton2, setMenuButton2] = React.useState(null);
  return (
    <CssVarsProvider>
      <CssBaseline />
      <Stack spacing={2}>
        <Card
          orientation="horizontal"
          variant="solid"
          color="primary"
          invertedColors
          sx={{
            gap: 10,
            minHeight: 240,
            alignItems: 'flex-start',
            justifyContent: 'center',
            flexGrow: 1,
            zIndex: 0,
          }}
        >
          <Autocomplete
            placeholder="Combo box"
            options={films}
            sx={{ width: 240 }}
            open
            slotProps={{
              listbox: { disablePortal: false, sx: { maxHeight: 160 } },
            }}
          />
          <Button ref={(node) => setMenuButton(node)} variant="soft">
            Actions
          </Button>
          <Menu disablePortal={false} anchorEl={menuButton} open={!!menuButton}>
            <MenuItem>New tab</MenuItem>
            <MenuItem>New window</MenuItem>
            <ListDivider />
            <MenuItem>Delete</MenuItem>
          </Menu>
          <Select
            placeholder="Choose one"
            listboxOpen
            slotProps={{ listbox: { disablePortal: false } }}
          >
            <Option value="1">Option 1</Option>
            <Option value="2">Option 2</Option>
            <Option value="3">Option 3</Option>
          </Select>
          <Tooltip title="Bookmark" disablePortal={false} open variant="solid">
            <span>test</span>
          </Tooltip>
        </Card>
        <Card
          orientation="horizontal"
          variant="solid"
          color="primary"
          invertedColors
          sx={{
            gap: 10,
            minHeight: 240,
            alignItems: 'flex-start',
            justifyContent: 'center',
            flexGrow: 1,
            zIndex: 0,
          }}
        >
          <Autocomplete
            placeholder="Combo box"
            options={films}
            sx={{ width: 240 }}
            open
            slotProps={{
              listbox: { disablePortal: true, sx: { maxHeight: 160 } },
            }}
          />
          <Button ref={(node) => setMenuButton2(node)} variant="soft">
            Actions
          </Button>
          <Menu disablePortal anchorEl={menuButton2} open={!!menuButton2}>
            <MenuItem>New tab</MenuItem>
            <MenuItem>New window</MenuItem>
            <ListDivider />
            <MenuItem>Delete</MenuItem>
          </Menu>
          <Select
            placeholder="Choose one"
            listboxOpen
            slotProps={{ listbox: { disablePortal: true } }}
          >
            <Option value="1">Option 1</Option>
            <Option value="2">Option 2</Option>
            <Option value="3">Option 3</Option>
          </Select>
          <Tooltip title="Bookmark" disablePortal open variant="solid">
            <span>test</span>
          </Tooltip>
        </Card>
      </Stack>
    </CssVarsProvider>
  );
}
