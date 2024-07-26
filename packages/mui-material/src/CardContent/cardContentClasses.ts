import generateUtilityClasses from '@temp-mui/utils/generateUtilityClasses';
import generateUtilityClass from '@temp-mui/utils/generateUtilityClass';

export interface CardContentClasses {
  /** Styles applied to the root element. */
  root: string;
}

export type CardContentClassKey = keyof CardContentClasses;

export function getCardContentUtilityClass(slot: string): string {
  return generateUtilityClass('MuiCardContent', slot);
}

const cardContentClasses: CardContentClasses = generateUtilityClasses('MuiCardContent', ['root']);

export default cardContentClasses;
