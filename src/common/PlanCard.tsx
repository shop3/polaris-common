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
  buttonText?: string;
  onClick?: () => void;
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
  buttonText,
  onClick,
}) => {
  const currency = getCurrency(currencyCode);
  const { price, interval } = getPriceAndInterval(paymentsMode, recurringPrice, recurringInterval, oneTimePrice);

  return (
    <LegacyCard sectioned>
      <LegacyCard.Subsection>
        <LegacyStack vertical spacing="tight">
          <Text variant="headingSm" color="subdued" as="p">
            {String(name).toUpperCase()}
          </Text>
          <LegacyStack vertical spacing="extraTight">
            <Text variant="heading3xl" as="p">
              {currency + price + '/' + interval}
            </Text>
            {usageCappedAmount && usageCappedAmount > 0 ? (
              <Text variant="headingXs" color="subdued" as="p">
                Additional charges may apply
              </Text>
            ) : null}
          </LegacyStack>
        </LegacyStack>
      </LegacyCard.Subsection>
      <LegacyCard.Subsection>
        <LegacyStack vertical spacing="loose">
          <Text variant="headingSm" color="subdued" as="p">
            {usageTerms}
          </Text>
          <Button primary size="large" fullWidth onClick={onClick}>
            {buttonText || 'Buy now'}
          </Button>
        </LegacyStack>
      </LegacyCard.Subsection>
    </LegacyCard>
  );
};

export default PlanCard;
export type { PlanCardProps };

function getCurrency(currencyCode: string) {
  switch (currencyCode) {
    case 'USD':
      return '$';
    case 'EUR':
      return '€';
    default:
      return '';
  }
}

function getPriceAndInterval(
  paymentsMode: string,
  recurringPrice?: number,
  recurringInterval?: string,
  oneTimePrice?: number
) {
  switch (paymentsMode) {
    case 'recuringPrice':
      switch (recurringInterval) {
        case 'EVERY_30_DAYS':
          return {
            price: recurringPrice,
            interval: 'month',
          };
        case 'ANNUAL':
          return {
            price: recurringPrice,
            interval: 'year',
          };
        default:
          return {
            price: 0,
            interval: '',
          };
      }
    case 'oneTimePrice':
      return {
        price: oneTimePrice,
        interval: 'once',
      };
    default:
      return {
        price: 0,
        interval: '',
      };
  }
}
