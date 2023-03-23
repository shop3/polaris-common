import React from 'react';
import { LegacyStack, Button, Text, LegacyCard } from '@shopify/polaris';

type PlanCardProps = {
  name: string;
  currencyCode: string;
  paymentsMode: string;
  recurringPrice?: number;
  recurringInterval?: string;
  oneTimePrice?: number;
  usageCappedAmount: number;
  usageTerms: string;
  trialDays: number;
};

const PlanCard: React.FC<PlanCardProps> = ({
  name,
  currencyCode,
  paymentsMode,
  recurringPrice,
  recurringInterval,
  oneTimePrice,
  usageCappedAmount,
  usageTerms,
  trialDays,
}) => {
  return (
    <LegacyCard>
      <LegacyStack vertical={true} alignment="fill">
        <LegacyStack distribution="center">
          <Text variant="heading3xl" as="h2">{name}</Text>
        </LegacyStack>
        <LegacyCard.Section>
          <LegacyStack vertical={true} alignment="fill">
            <LegacyStack distribution="center">
            <Text variant="heading4xl" as="h1">
                {paymentsMode === 'recuringPrice' ? recurringPrice : oneTimePrice} {currencyCode}
              </Text>
            </LegacyStack>
            <LegacyCard.Section>
              <LegacyStack alignment="center" distribution="center" spacing="baseTight">
              <Text variant="headingXl" as="h4">
                  {paymentsMode === 'recuringPrice'
                    ? recurringInterval === 'EVERY_30_DAYS'
                      ? 'Every 30 days'
                      : 'Every year'
                    : 'One time purchase'}
                </Text>
              </LegacyStack>
            </LegacyCard.Section>
            <Button fullWidth size="large" primary>
              Buy now
            </Button>
            <LegacyStack vertical={true}>
              <Text variant="headingMd" as="h5">Free Enterprise Edition trial: {trialDays}</Text>
              {usageCappedAmount > 0 ? <Text variant="headingMd" as="h5">Additional charges may apply</Text> : null}
              <Text variant="headingMd" as="h5">{usageTerms}</Text>
            </LegacyStack>
          </LegacyStack>
        </LegacyCard.Section>
      </LegacyStack>
    </LegacyCard>
  );
};

export default PlanCard;
export type { PlanCardProps };
