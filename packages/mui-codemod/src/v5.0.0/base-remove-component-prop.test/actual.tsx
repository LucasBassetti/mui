// @ts-nocheck
import MaterialInput from '@temp-mui/material/Input';
import Input from '@temp-mui/base/Input';
import Switch from '@temp-mui/base/Switch';
import Badge from '@temp-mui/base/Badge';

<MaterialInput component={CustomRoot} />;

<Input component={CustomRoot} />;

<Input component={CustomRoot} {...others}></Input>;

<Switch
  component={CustomRoot}
  randomProp="1"
  randomProp2="2"
  randomProp3="3"
  slotProps={{ root: { className: 'root' } }}
/>;

<Badge
  slots={{ badge: CustomBadge }}
  component={CustomRoot}
  randomProp="1"
  randomProp2="2"
  randomProp3="3"
  slotProps={{ badge: { className: 'badge' } }}
/>;

<Input component='a' href='url'></Input>;
