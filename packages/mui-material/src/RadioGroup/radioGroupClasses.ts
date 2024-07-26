import generateUtilityClasses from '@temp-mui/utils/generateUtilityClasses';
import generateUtilityClass from '@temp-mui/utils/generateUtilityClass';
import { FormGroupClasses } from '../FormGroup';

export type RadioGroupClassKey = keyof FormGroupClasses;

export type RadioGroupClasses = FormGroupClasses;

export function getRadioGroupUtilityClass(slot: string): string {
  return generateUtilityClass('MuiRadioGroup', slot);
}

const radioGroupClasses: RadioGroupClasses = generateUtilityClasses('MuiRadioGroup', [
  'root',
  'row',
  'error',
]);

export default radioGroupClasses;
