import React from 'react';
import { Stack, Button, Icon, DisplayText, Card } from '@shopify/polaris';
import { CircleInformationMajor, CircleTickMajor } from '@shopify/polaris-icons';

type PlanCardProps = {
  name: string;
  recurringPrice: number;
  currencyCode: string;
  recurringInterval: string;
  trialDays: number;
  usageCappedAmount: number;
  usageTerms: string;
  paymentsMode: string;
  oneTimePrice: number;
};

const PlanCard: React.FC<PlanCardProps> = ({
  name,
  recurringPrice,
  currencyCode,
  recurringInterval,
  trialDays,
  usageCappedAmount,
  usageTerms,
  paymentsMode,
  oneTimePrice,
}) => {
  return (
    <Card>
      <Stack vertical={true} alignment="fill">
        <Stack distribution="center">
          <DisplayText size="large">{name}</DisplayText>
        </Stack>
        <Card.Section>
          <Stack vertical={true} alignment="fill">
            <Stack distribution="center">
              <DisplayText size="extraLarge">{paymentsMode==="recuringPrice" ? recurringPrice : oneTimePrice + currencyCode}</DisplayText>
            </Stack>
            <Card.Section>
              <Stack alignment="center" distribution="center" spacing="baseTight">
                <DisplayText size="small">{paymentsMode==="recuringPrice" ? recurringInterval : "OneTimePurchase"}</DisplayText>
                <Icon source={CircleInformationMajor} />
              </Stack>
            </Card.Section>
            <Button fullWidth size="large" primary>
              Buy now
            </Button>
            <Stack distribution="center">
              <DisplayText size="small">Free Enterprise Edition trial: {trialDays}</DisplayText>
            </Stack>
          </Stack>
        </Card.Section>
        <Card.Section>
          <DisplayText size="small">usageCappedAmount: {usageCappedAmount}</DisplayText>
          <Card.Section>
            <Stack alignment="center" spacing="baseTight">
              <Icon source={CircleTickMajor} />
              <DisplayText size="small">{usageTerms}</DisplayText>
            </Stack>
          </Card.Section>
        </Card.Section>
      </Stack>
    </Card>
  );
};

export default PlanCard;
export type { PlanCardProps };
