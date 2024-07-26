let warnedOnce = false;

const warn = () => {
  if (!warnedOnce) {
    console.warn(
      [
        'MUI: The AdapterDateFns class was moved from `@temp-mui/lab` to `@temp-mui/x-date-pickers`',
        '',
        "You should use `import { AdapterDateFns } from '@temp-mui/x-date-pickers/AdapterDateFns'`",
        '',
        'More information about this migration on our blog: https://mui.com/blog/lab-date-pickers-to-mui-x/.',
      ].join('\n'),
    );

    warnedOnce = true;
  }
};

/**
 * @deprecated The AdapterDateFns class was moved from `@temp-mui/lab` to `@temp-mui/x-date-pickers`. More information about this migration on our blog: https://mui.com/blog/lab-date-pickers-to-mui-x/.
 */
export default class AdapterDateFns {
  constructor() {
    warn();
  }
}
