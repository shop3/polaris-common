import React from 'react';
import { LegacyCard, Page } from '@shopify/polaris';

import { CollapsibleSection } from '../../src';

export default {
  title: 'Common/Collapsible Section',
  component: CollapsibleSection,
};

const Template = () => (
  <Page narrowWidth>
    <LegacyCard>
      <CollapsibleSection id="collapsible-id" title="Test Collapsible">
        <p>This is a test text</p>
      </CollapsibleSection>
    </LegacyCard>
  </Page>
);

export const Example: any = Template.bind({});
