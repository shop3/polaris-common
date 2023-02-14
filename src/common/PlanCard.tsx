import React from 'react';
import { Stack, Button, Icon } from '@shopify/polaris';
import { CircleInformationMajor, CircleTickMajor } from '@shopify/polaris-icons';

type PlanCardProps = {
  backgroundColor: string;
  color: string;
  priceColor: string;
  name: string;
  recurringPrice: number;
  currencyCode: string;
  recurringInterval: string;
  trialDays: number;
  usageCappedAmount: number;
  usageTerms: string;
};

const PlanCard: React.FC<PlanCardProps> = ({
  backgroundColor,
  color,
  priceColor,
  name,
  recurringPrice,
  currencyCode,
  recurringInterval,
  trialDays,
  usageCappedAmount,
  usageTerms,
}) => {
  return (
    <div
      style={{
        paddingTop: '40px',
        paddingLeft: '15px',
        paddingBottom: '20px',
        paddingRight: '15px',
        borderRadius: '5px',
        background: backgroundColor,
        width: '500px',
      }}
    >
      <Stack vertical={true} alignment="fill">
        <h1 style={{ textTransform: 'uppercase', textAlign: 'center', fontSize: '40px', color: color }}>{name}</h1>
        <div
          style={{
            height: '300px',
            width: '100%',
            marginTop: '15px',
            background: '#FFF',
            borderRadius: '5px',
            padding: '40px',
          }}
        >
          <Stack vertical={true} alignment="fill">
            <h1 style={{ color: priceColor, textAlign: 'center', fontSize: '43px' }}>
              {recurringPrice + currencyCode}
            </h1>
            <div style={{ marginTop: '25px', marginBottom: '5px', display: 'flex', justifyContent: 'center' }}>
              <Stack alignment="center" spacing="baseTight">
                <h1 style={{ textAlign: 'center', fontSize: '15px' }}>{recurringInterval}</h1>
                <Icon source={CircleInformationMajor} />
              </Stack>
            </div>
            <Button fullWidth size="large" primary>
              Buy now
            </Button>
            <h1 style={{ textAlign: 'center', color: color, margin: '13px' }}>
              Free Enterprise Edition trial: {trialDays}
            </h1>
          </Stack>
        </div>
        <div style={{ textAlign: 'left', marginTop: '32px', paddingLeft: '14px' }}>
          <h1 style={{ textTransform: 'uppercase', color: color }}>usageCappedAmount: {usageCappedAmount}</h1>
          <div style={{ marginTop: '17px', marginBottom: '17px' }}>
            <Stack alignment="center">
              <Icon source={CircleTickMajor} />
              <h1 style={{ marginLeft: '16px' }}>{usageTerms}</h1>
            </Stack>
          </div>
        </div>
      </Stack>
    </div>
  );
};

export default PlanCard;
export type { PlanCardProps };
