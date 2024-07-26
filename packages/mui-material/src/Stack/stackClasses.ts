import generateUtilityClasses from '@temp-mui/utils/generateUtilityClasses';
import { StackClasses } from '@temp-mui/system';
import generateUtilityClass from '@temp-mui/utils/generateUtilityClass';

export type { StackClassKey } from '@temp-mui/system';
export type { StackClasses };

export function getStackUtilityClass(slot: string): string {
  return generateUtilityClass('MuiStack', slot);
}

const stackClasses: StackClasses = generateUtilityClasses('MuiStack', ['root']);

export default stackClasses;
