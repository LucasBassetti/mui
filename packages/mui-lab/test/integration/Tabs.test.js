import * as React from 'react';
import { expect } from 'chai';
import { createRenderer } from '@temp-mui-internal/test-utils';
import Tab from '@temp-mui/material/Tab';
import TabContext from '@temp-mui/lab/TabContext';
import TabList from '@temp-mui/lab/TabList';
import TabPanel from '@temp-mui/lab/TabPanel';

describe('<TabContext /> integration', () => {
  const { render } = createRenderer();

  it('wires up aria attributes', () => {
    const { getAllByRole, setProps } = render(
      <TabContext value="0">
        <TabList>
          <Tab label="label one" value="0" />
          <Tab label="label two" value="1" />
        </TabList>
        <TabPanel value="0" />
        <TabPanel value="1" />
      </TabContext>,
    );

    const [tabOne, tabTwo] = getAllByRole('tab');

    expect(tabOne).to.have.attribute('aria-selected', 'true');
    expect(tabTwo).to.have.attribute('aria-selected', 'false');
    let activePanel = document.getElementById(tabOne.getAttribute('aria-controls'));
    expect(activePanel).not.toBeInaccessible();
    expect(activePanel).toHaveAccessibleName('label one');

    setProps({ value: '1' });

    expect(tabOne).to.have.attribute('aria-selected', 'false');
    expect(tabTwo).to.have.attribute('aria-selected', 'true');
    activePanel = document.getElementById(tabTwo.getAttribute('aria-controls'));
    expect(activePanel).not.toBeInaccessible();
    expect(activePanel).toHaveAccessibleName('label two');
  });
});
