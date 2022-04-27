import React from 'react';
import { Card, Page } from '@shopify/polaris';
import { StarFilledMinor } from '@shopify/polaris-icons';

import { ClickableSection } from '../../src';

export default {
  title: 'Common/Clickable Section',
  component: ClickableSection,
};

const Template = () => (
  <Page narrowWidth>
    <Card>
      <ClickableSection icon={StarFilledMinor} content="Test Clickable Section" />
    </Card>
  </Page>
);

export const Example: any = Template.bind({});
