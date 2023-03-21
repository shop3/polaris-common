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
          recurringPrice={50}
          currencyCode="USD"
          recurringInterval="Every 30 days"
          trialDays={7}
          usageCappedAmount={5}
          usageTerms="This is a silver plan"
          paymentsMode='recuringPrice'
          oneTimePrice={100}
        />
      </Card.Section>
      <Card.Section>
        <PlanCard
          name="SILVER PLAN"
          recurringPrice={500}
          currencyCode="USD"
          recurringInterval="Every year"
          trialDays={7}
          usageCappedAmount={5}
          usageTerms="This is a silver plan"
          paymentsMode='recuringPrice'
          oneTimePrice={100}
        />
      </Card.Section>
      <Card.Section>
        <PlanCard
          name="SILVER PLAN"
          recurringPrice={500}
          currencyCode="USD"
          recurringInterval="Every year"
          trialDays={7}
          usageCappedAmount={0}
          usageTerms="This is a silver plan"
          paymentsMode='oneTimePrice'
          oneTimePrice={700}
        />
      </Card.Section>
    </Stack>
  </Page>
);

export const Example: any = Template.bind({});
