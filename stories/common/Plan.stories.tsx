import React from 'react';
import { Card, Page } from '@shopify/polaris';

import { PlanCard } from '../../src';

export default {
  title: 'Common/Plan Card',
  component: PlanCard,
};

const Template = () => (
  <Page narrowWidth>
    <PlanCard
      backgroundColor="#ebf5ff"
      color="#9e6aef"
      priceColor="#4a49ff"
      name="silver plan"
      recurringPrice={50}
      currencyCode="USD"
      recurringInterval="ANNUAL"
      trialDays={7}
      usageCappedAmount={5}
      usageTerms="This is a silver plan"
    />
  </Page>
);

export const Example: any = Template.bind({});
