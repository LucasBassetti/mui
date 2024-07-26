import generateUtilityClasses from '@temp-mui/utils/generateUtilityClasses';
import generateUtilityClass from '@temp-mui/utils/generateUtilityClass';

export interface DialogTitleClasses {
  /** Styles applied to the root element. */
  root: string;
}

export type DialogTitleClassKey = keyof DialogTitleClasses;

export function getDialogTitleUtilityClass(slot: string): string {
  return generateUtilityClass('MuiDialogTitle', slot);
}

const dialogTitleClasses: DialogTitleClasses = generateUtilityClasses('MuiDialogTitle', ['root']);

export default dialogTitleClasses;
