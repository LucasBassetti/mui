'use client';
/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';

let warnedOnce = false;

const warn = () => {
  if (!warnedOnce) {
    console.warn(
      [
        'MUI: The StaticDateTimePicker component was moved from `@temp-mui/lab` to `@temp-mui/x-date-pickers`.',
        '',
        "You should use `import { StaticDateTimePicker } from '@temp-mui/x-date-pickers'`",
        "or `import { StaticDateTimePicker } from '@temp-mui/x-date-pickers/StaticDateTimePicker'`",
        '',
        'More information about this migration on our blog: https://mui.com/blog/lab-date-pickers-to-mui-x/.',
      ].join('\n'),
    );

    warnedOnce = true;
  }
};

type StaticDateTimePickerComponent = (<TDate>(
  props: StaticDateTimePickerProps<TDate> & React.RefAttributes<HTMLDivElement>,
) => JSX.Element) & { propTypes?: any };

/**
 * @deprecated The StaticDateTimePicker component was moved from `@temp-mui/lab` to `@temp-mui/x-date-pickers`. More information about this migration on our blog: https://mui.com/blog/lab-date-pickers-to-mui-x/.
 * @ignore - do not document.
 */
const StaticDateTimePicker = React.forwardRef(function DeprecatedStaticDateTimePicker() {
  warn();

  return null;
}) as StaticDateTimePickerComponent;

export default StaticDateTimePicker;

export type StaticDateTimePickerProps<TDate> = Record<any, any>;
