let warnedOnce = false;

const warn = () => {
  if (!warnedOnce) {
    console.warn(
      [
        'MUI: The AdapterLuxon class was moved from `@temp-mui/lab` to `@temp-mui/x-date-pickers`',
        '',
        "You should use `import { AdapterLuxon } from '@temp-mui/x-date-pickers/AdapterLuxon'`",
        '',
        'More information about this migration on our blog: https://mui.com/blog/lab-date-pickers-to-mui-x/.',
      ].join('\n'),
    );

    warnedOnce = true;
  }
};

/**
 * @deprecated The AdapterLuxon class was moved from `@temp-mui/lab` to `@temp-mui/x-date-pickers`. More information about this migration on our blog: https://mui.com/blog/lab-date-pickers-to-mui-x/.
 */
export default class AdapterLuxon {
  constructor() {
    warn();
  }
}
