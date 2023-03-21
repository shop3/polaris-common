import React from 'react';
import { Stack, Card, Page } from '@shopify/polaris';

import { PlanCard } from '../../src';

export default {
  title: 'Common/Plan Card',
  component: PlanCard,
};

const Template = () => (
  <Page fullWidth>
    <Stack wrap distribution="center">
      <Card.Section>
        <PlanCard
          name="SILVER PLAN"
          currencyCode="USD"
          paymentsMode="recuringPrice"
          recurringPrice={50}
          recurringInterval="EVERY_30_DAYS"
          usageCappedAmount={5}
          usageTerms="This is a silver plan"
          trialDays={7}
        />
      </Card.Section>
      <Card.Section>
        <PlanCard
          name="SILVER PLAN"
          currencyCode="USD"
          paymentsMode="recuringPrice"
          recurringPrice={500}
          recurringInterval="ANNUAL"
          usageCappedAmount={5}
          usageTerms="This is a silver plan"
          trialDays={7}
        />
      </Card.Section>
      <Card.Section>
        <PlanCard
          name="SILVER PLAN"
          currencyCode="USD"
          paymentsMode="oneTimePrice"
          oneTimePrice={700}
          usageCappedAmount={0}
          usageTerms="This is a silver plan"
          trialDays={7}
        />
      </Card.Section>
    </Stack>
  </Page>
);

export const Example: any = Template.bind({});
