import MaterialInput from '@temp-mui/material/Input';
import Input from '@temp-mui/base/Input';
import Switch from '@temp-mui/base/Switch';
import Badge from '@temp-mui/base/Badge';

<MaterialInput component={CustomRoot} />;

<Input slots={{
  root: CustomRoot
}} />;

<Input slots={{
  root: CustomRoot
}} {...others}></Input>;

<Switch
  slots={{
    root: CustomRoot
  }}
  randomProp="1"
  randomProp2="2"
  randomProp3="3"
  slotProps={{ root: { className: 'root' } }}
/>;

<Badge
  slots={{
    badge: CustomBadge,
    root: CustomRoot
  }}
  randomProp="1"
  randomProp2="2"
  randomProp3="3"
  slotProps={{ badge: { className: 'badge' } }} />;

<Input slots={{
  root: 'a'
}} href='url'></Input>;
