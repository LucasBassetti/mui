let warnedOnce = false;

// To remove in v6
export default function createStyles(styles) {
  if (!warnedOnce) {
    console.warn(
      [
        'MUI: createStyles from @temp-mui/material/styles is deprecated.',
        'Please use @temp-mui/styles/createStyles',
      ].join('\n'),
    );

    warnedOnce = true;
  }
  return styles;
}
