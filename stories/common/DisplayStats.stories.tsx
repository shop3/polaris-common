import React from 'react';
import { LegacyCard, Page } from '@shopify/polaris';

import { DisplayStats } from '../../src';

export default {
  title: 'Common/Display Stats',
  component: DisplayStats,
};

const Template = () => (
  <Page narrowWidth>
    <LegacyCard sectioned>
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
    </LegacyCard>
  </Page>
);

export const Example: any = Template.bind({});
