import React from 'react';
import { Card, Page } from '@shopify/polaris';

import { DisplayStats } from '../../src';

export default {
  title: 'Common/Display Stats',
  component: DisplayStats,
};

const Template = () => (
  <Page narrowWidth>
    <Card sectioned>
      <DisplayStats
        stats={[
          {
            icon: 'ProductsMajor',
            label: 'Products',
            value: '200',
          },
          {
            icon: 'OrdersMajor',
            label: 'Orders',
            value: '3.550',
          },
          {
            icon: 'BalanceMajor',
            label: 'Earnings',
            value: '124.000',
          },
        ]}
      />
    </Card>
  </Page>
);

export const Example: any = Template.bind({});
