import generateUtilityClasses from '@temp-mui/utils/generateUtilityClasses';
import generateUtilityClass from '@temp-mui/utils/generateUtilityClass';

export interface CardClasses {
  /** Styles applied to the root element. */
  root: string;
}

export type CardClassKey = keyof CardClasses;

export function getCardUtilityClass(slot: string): string {
  return generateUtilityClass('MuiCard', slot);
}

const cardClasses: CardClasses = generateUtilityClasses('MuiCard', ['root']);

export default cardClasses;
