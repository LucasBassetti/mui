// the codemod should transform only Joy UI components;
import { List as JoyList } from '@temp-mui/joy';
import JoyCard from '@temp-mui/joy/Card';
import RadioGroup from '@temp-mui/joy/RadioGroup';
import CustomComponent from 'components/Custom';

<div>
  <JoyCard row />
  <JoyList row />
  <RadioGroup row={true} />
  <CustomComponent row />
</div>;
