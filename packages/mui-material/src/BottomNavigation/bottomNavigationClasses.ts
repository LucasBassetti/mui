import generateUtilityClasses from '@temp-mui/utils/generateUtilityClasses';
import generateUtilityClass from '@temp-mui/utils/generateUtilityClass';

export interface BottomNavigationClasses {
  /** Styles applied to the root element. */
  root: string;
}

export type BottomNavigationClassKey = keyof BottomNavigationClasses;

export function getBottomNavigationUtilityClass(slot: string): string {
  return generateUtilityClass('MuiBottomNavigation', slot);
}

const bottomNavigationClasses: BottomNavigationClasses = generateUtilityClasses(
  'MuiBottomNavigation',
  ['root'],
);

export default bottomNavigationClasses;
