import MuiError from '@temp-mui/internal-babel-macros/MuiError.macro';

export default function withTheme() {
  throw new MuiError(
    'MUI: withTheme is no longer exported from @temp-mui/material/styles.\n' +
      'You have to import it from @temp-mui/styles.\n' +
      'See https://mui.com/r/migration-v4/#mui-material-styles for more details.',
  );
}
