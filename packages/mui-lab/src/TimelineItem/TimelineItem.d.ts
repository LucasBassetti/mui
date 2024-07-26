import * as React from 'react';
import { SxProps } from '@temp-mui/system';
import { Theme } from '@temp-mui/material/styles';
import { InternalStandardProps as StandardProps } from '@temp-mui/material';
import { TimelineItemClasses } from './timelineItemClasses';

export interface TimelineItemProps extends StandardProps<React.HTMLAttributes<HTMLDivElement>> {
  /**
   * The position where the timeline's item should appear.
   */
  position?: 'left' | 'right' | 'alternate' | 'alternate-reverse';
  /**
   * The content of the component.
   */
  children?: React.ReactNode;
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<TimelineItemClasses>;
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx?: SxProps<Theme>;
}

/**
 *
 * Demos:
 *
 * - [Timeline](https://mui.com/material-ui/react-timeline/)
 *
 * API:
 *
 * - [TimelineItem API](https://mui.com/material-ui/api/timeline-item/)
 */
export default function TimelineItem(props: TimelineItemProps): JSX.Element;
