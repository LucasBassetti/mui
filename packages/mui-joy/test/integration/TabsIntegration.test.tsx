import * as React from 'react';
import { expect } from 'chai';
import { createRenderer } from '@temp-mui-internal/test-utils';
import Tabs from '@temp-mui/joy/Tabs';
import TabList from '@temp-mui/joy/TabList';
import Tab from '@temp-mui/joy/Tab';
import TabPanel from '@temp-mui/joy/TabPanel';

describe('Joy <Tabs />', () => {
  const { render } = createRenderer();

  it('display first tab', () => {
    const { getByText, queryByText } = render(
      <Tabs>
        <TabList>
          <Tab>1</Tab>
          <Tab>2</Tab>
        </TabList>
        <TabPanel>Panel 1</TabPanel>
        <TabPanel value={1}>Panel 2</TabPanel>
      </Tabs>,
    );

    expect(getByText('Panel 1')).toBeVisible();
    expect(queryByText('Panel 2')).to.equal(null);
  });
});
