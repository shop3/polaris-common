import React from 'react';
import { Card, Page } from '@shopify/polaris';

import { PlanCard } from '../../src';

export default {
  title: 'Common/Plan Card',
  component: PlanCard,
};

const Template = () => (
  <Page narrowWidth>
    <Card>
      <PlanCard
        name="SILVER PLAN"
        recurringPrice={50}
        currencyCode="USD"
        recurringInterval="ANNUAL"
        trialDays={7}
        usageCappedAmount={5}
        usageTerms="This is a silver plan"
        paymentsMode='oneTimePrice'
        oneTimePrice={100}
      />
    </Card>
  </Page>
);

export const Example: any = Template.bind({});
