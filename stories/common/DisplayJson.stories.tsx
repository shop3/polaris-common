import React from 'react';
import { LegacyCard, Page } from '@shopify/polaris';

import { DisplayJson } from '../../src';

export default {
  title: 'Common/Display Json',
  component: DisplayJson,
};

const Template = () => (
  <Page narrowWidth>
    <LegacyCard sectioned>
      <DisplayJson data={{ text: 'hello world', number: 0.01, boolean: true }} />
    </LegacyCard>
  </Page>
);

export const Example: any = Template.bind({});
