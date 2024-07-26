// the codemod should transform only Joy UI `Avatar`;
import { Avatar as JoyAvatar } from '@temp-mui/joy';
import Avatar from '@temp-mui/joy/Avatar';
import MaterialAvatar from '@temp-mui/material/Avatar';

<div>
  <JoyAvatar slotProps={{
    img: { ['aria-hidden']: true }
  }} />
  <Avatar
    slotProps={{ root: { ['aria-hidden']: false }, img: {
      ['aria-label']: 'imgSlot',
      ['aria-hidden']: true
    } }} />
  <MaterialAvatar imgProps={{ ['aria-hidden']: true }} />
</div>;
