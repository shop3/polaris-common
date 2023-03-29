import React from 'react';
import { Columns, Box, Page } from '@shopify/polaris';

import { PlanCard } from '../../src';

export default {
  title: 'Common/Plan Card',
  component: PlanCard,
};

const Template = () => (
  <Page fullWidth>
    <Columns gap="4" columns={3}>
      <Box></Box>
      <Box>
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
      </Box>
      <Box></Box>
    </Columns>
  </Page>
);

export const Example: any = Template.bind({});
