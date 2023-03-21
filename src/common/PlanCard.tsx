import React from 'react';
import { Stack, Button, Icon, DisplayText, Card } from '@shopify/polaris';

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
              <DisplayText size="extraLarge">{paymentsMode==="recuringPrice" ? recurringPrice + currencyCode : oneTimePrice + currencyCode}</DisplayText>
            </Stack>
            <Card.Section>
              <Stack alignment="center" distribution="center" spacing="baseTight">
                <DisplayText size="small">{paymentsMode==="recuringPrice" ? recurringInterval : "One time purchase"}</DisplayText>
              </Stack>
            </Card.Section>
            <Button fullWidth size="large" primary>
              Buy now
            </Button>
            <Stack vertical={true}>
              <h5>Free Enterprise Edition trial: {trialDays}</h5>
              {usageCappedAmount > 0 ? (
                <h5 style={{paddingTop:-2}}>Additional charges may apply</h5>
                ) : ( <></>)
              }
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
