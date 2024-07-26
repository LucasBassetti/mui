// material-design
import { createTheme, alpha } from '@temp-mui/material/styles';
import { Button, Tooltip } from '@temp-mui/material';
import Alert from '@temp-mui/material/Alert';
import useAutocomplete from '@temp-mui/material/useAutocomplete';

// styles
import { makeStyles } from '@temp-mui/styles';
import createStyles from '@temp-mui/styles/createStyles';

// unstyled
import { SliderUnstyled } from '@temp-mui/base';
import SwitchUnstyled from '@temp-mui/base/SwitchUnstyled';

// system
import { SxProps } from '@temp-mui/system';
import ThemeProvider from '@temp-mui/system/ThemeProvider';

// utils
import { deepmerge } from '@temp-mui/utils';

// icons
import Edit from '@temp-mui/icons-material/Edit';

// lab
import Mansory from '@temp-mui/lab/Mansory';
import { DateRangePicker } from '@temp-mui/lab';

// styled engine
module.exports = override(
  addWebpackAlias({
    '@temp-mui/styled-engine': '@temp-mui/styled-engine-sc',
  }),
);
// json
const dependencies = {
  '@temp-mui/material': 'next',
  '@temp-mui/lab': 'next',
  '@temp-mui/styled-engine-sc': 'next',
  // whitelist packages below
  '@material-ui/data-grid': '^4.0.0-alpha.36',
  '@material-ui/x-grid': '^4.0.0-alpha.36',
  '@material-ui/x-grid-data-generator': '^4.0.0-alpha.36',
};
const tsconfig = {
  paths: {
    '@temp-mui/styled-engine': ['./node_modules/@temp-mui/styled-engine-sc'],
  },
};

// types
import { DistributiveOmit } from '@temp-mui/types';

// private-theming
import { ThemeProvider as PrivateThemeProvider } from '@temp-mui/private-theming';

// Pickers does not change
import { DatePicker } from '@material-ui/pickers';

// DataGrid does not change
import { DataGrid } from '@material-ui/data-grid';
import { XGrid } from '@material-ui/x-grid';
import { useDemoData } from '@material-ui/x-grid-data-generator';
