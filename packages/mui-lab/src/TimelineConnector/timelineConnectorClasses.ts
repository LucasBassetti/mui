import generateUtilityClass from '@temp-mui/utils/generateUtilityClass';
import generateUtilityClasses from '@temp-mui/utils/generateUtilityClasses';

export interface TimelineConnectorClasses {
  /** Styles applied to the root element. */
  root: string;
}

export type TimelineConnectorClassKey = keyof TimelineConnectorClasses;

export function getTimelineConnectorUtilityClass(slot: string): string {
  return generateUtilityClass('MuiTimelineConnector', slot);
}

const timelineConnectorClasses: TimelineConnectorClasses = generateUtilityClasses(
  'MuiTimelineConnector',
  ['root'],
);

export default timelineConnectorClasses;
