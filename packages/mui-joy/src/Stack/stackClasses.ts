import { StackClasses } from '@temp-mui/system';
import { generateUtilityClass, generateUtilityClasses } from '../className';

export type { StackClassKey } from '@temp-mui/system';
export type { StackClasses };

export function getStackUtilityClass(slot: string): string {
  return generateUtilityClass('MuiStack', slot);
}

const stackClasses: StackClasses = generateUtilityClasses('MuiStack', ['root']);

export default stackClasses;
