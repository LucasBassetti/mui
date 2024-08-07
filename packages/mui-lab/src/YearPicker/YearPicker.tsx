'use client';
/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';

let warnedOnce = false;

const warn = () => {
  if (!warnedOnce) {
    console.warn(
      [
        'MUI: The YearPicker component was moved from `@temp-mui/lab` to `@temp-mui/x-date-pickers`.',
        '',
        "You should use `import { YearPicker } from '@temp-mui/x-date-pickers'`",
        "or `import { YearPicker } from '@temp-mui/x-date-pickers/YearPicker'`",
        '',
        'More information about this migration on our blog: https://mui.com/blog/lab-date-pickers-to-mui-x/.',
      ].join('\n'),
    );

    warnedOnce = true;
  }
};

type YearPickerComponent = (<TDate>(
  props: YearPickerProps<TDate> & React.RefAttributes<HTMLDivElement>,
) => JSX.Element) & { propTypes?: any };

/**
 * @deprecated The YearPicker component was moved from `@temp-mui/lab` to `@temp-mui/x-date-pickers`. More information about this migration on our blog: https://mui.com/blog/lab-date-pickers-to-mui-x/.
 * @ignore - do not document.
 */
const YearPicker = function DeprecatedYearPicker() {
  warn();

  return null;
} as any as YearPickerComponent;

export default YearPicker;

export const yearPickerClasses = {};

export const getYearPickerUtilityClass = (slot: string): string => {
  warn();
  return '';
};

export type YearPickerClasses = any;
export type YearPickerClassKey = any;
export type YearPickerProps<TDate> = Record<any, any>;
