import React from 'react';
import { Stack, Button, Icon, DisplayText, Card } from '@shopify/polaris';

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
    <Card>
      <Stack vertical={true} alignment="fill">
        <Stack distribution="center">
          <DisplayText size="large">{name}</DisplayText>
        </Stack>
        <Card.Section>
          <Stack vertical={true} alignment="fill">
            <Stack distribution="center">
              <DisplayText size="extraLarge">
                {paymentsMode === 'recuringPrice' ? recurringPrice : oneTimePrice} {currencyCode}
              </DisplayText>
            </Stack>
            <Card.Section>
              <Stack alignment="center" distribution="center" spacing="baseTight">
                <DisplayText size="small">
                  {paymentsMode === 'recuringPrice'
                    ? recurringInterval === 'EVERY_30_DAYS'
                      ? 'Every 30 days'
                      : 'Every year'
                    : 'One time purchase'}
                </DisplayText>
              </Stack>
            </Card.Section>
            <Button fullWidth size="large" primary>
              Buy now
            </Button>
            <Stack vertical={true}>
              <h5>Free Enterprise Edition trial: {trialDays}</h5>
              {usageCappedAmount > 0 ? <h5 style={{ paddingTop: -2 }}>Additional charges may apply</h5> : null}
              <h5>{usageTerms}</h5>
            </Stack>
          </Stack>
        </Card.Section>
      </Stack>
    </Card>
  );
};

export default PlanCard;
export type { PlanCardProps };
