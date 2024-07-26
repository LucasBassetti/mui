import * as React from 'react';
import { expect } from 'chai';
import { createRenderer } from '@temp-mui-internal/test-utils';
import Typography from '@temp-mui/material/Typography';
import Timeline from '@temp-mui/lab/Timeline';
import TimelineItem from '@temp-mui/lab/TimelineItem';
import TimelineContent, { timelineContentClasses as classes } from '@temp-mui/lab/TimelineContent';
import describeConformance from '../../test/describeConformance';

describe('<TimelineContent />', () => {
  const { render } = createRenderer();

  describeConformance(<TimelineContent />, () => ({
    classes,
    inheritComponent: Typography,
    render,
    muiName: 'MuiTimelineContent',
    refInstanceof: window.HTMLDivElement,
    skip: ['componentProp', 'componentsProp', 'themeVariants'],
  }));

  it('should have positionLeft class when inside of a left-positioned timeline', () => {
    const { getByText } = render(
      <Timeline position="left">
        <TimelineContent>content</TimelineContent>
      </Timeline>,
    );

    expect(getByText('content')).to.have.class(classes.positionLeft);
  });

  it('should have positionRight class when inside of a right-positioned timeline', () => {
    const { getByText } = render(
      <Timeline position="right">
        <TimelineContent>content</TimelineContent>
      </Timeline>,
    );

    expect(getByText('content')).to.have.class(classes.positionRight);
  });

  it('should have positionLeft class when inside of a left-positioned timeline and a left-positioned item', () => {
    const { getByText } = render(
      <Timeline position="left">
        <TimelineItem position="left">
          <TimelineContent>content</TimelineContent>
        </TimelineItem>
      </Timeline>,
    );

    expect(getByText('content')).to.have.class(classes.positionLeft);
  });

  it('should have positionLeft class when inside of a right-positioned timeline and a left-positioned item', () => {
    const { getByText } = render(
      <Timeline position="right">
        <TimelineItem position="left">
          <TimelineContent>content</TimelineContent>
        </TimelineItem>
      </Timeline>,
    );

    expect(getByText('content')).to.have.class(classes.positionLeft);
  });

  it('should have positionRight class when inside of a left-positioned timeline and a right-positioned item', () => {
    const { getByText } = render(
      <Timeline position="left">
        <TimelineItem position="right">
          <TimelineContent>content</TimelineContent>
        </TimelineItem>
      </Timeline>,
    );

    expect(getByText('content')).to.have.class(classes.positionRight);
  });

  it('should have positionRight class when inside of a right-positioned timeline and a right-positioned item', () => {
    const { getByText } = render(
      <Timeline position="right">
        <TimelineItem position="right">
          <TimelineContent>content</TimelineContent>
        </TimelineItem>
      </Timeline>,
    );

    expect(getByText('content')).to.have.class(classes.positionRight);
  });
});
