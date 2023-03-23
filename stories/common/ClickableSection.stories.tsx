import React from 'react';
import { LegacyCard, Page } from '@shopify/polaris';
import { StarFilledMinor } from '@shopify/polaris-icons';

import { ClickableSection } from '../../src';

export default {
  title: 'Common/Clickable Section',
  component: ClickableSection,
};

const Template = () => (
  <Page narrowWidth>
    <LegacyCard>
      <ClickableSection icon={StarFilledMinor} content="Test Clickable Section" />
    </LegacyCard>
  </Page>
);

export const Example: any = Template.bind({});
