import React from 'react';
import { Card, Page } from '@shopify/polaris';

import { DisplayJson } from '../../src';

export default {
  title: 'Common/Display Json',
  component: DisplayJson,
};

const Template = () => (
  <Page narrowWidth>
    <Card sectioned>
      <DisplayJson data={{ text: 'hello world', number: 0.01, boolean: true }} />
    </Card>
  </Page>
);

export const Example: any = Template.bind({});
