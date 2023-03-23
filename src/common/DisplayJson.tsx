import React from 'react';
import { LegacyStack, Text } from '@shopify/polaris';

interface DisplayJsonProps {
  data: any;
  renderItems?: (value: any) => React.ReactNode | undefined;
}

const DisplayJson: React.FC<DisplayJsonProps> = ({ data, renderItems }) => {
  return (
    <LegacyStack vertical spacing="baseTight">
      {Object.entries(data || {}).map(([k, v], i) => (
        <LegacyStack key={i} spacing="extraTight" distribution="equalSpacing" alignment="center">
          <Text variant="headingMd" as="h6">{k}</Text>
          {(renderItems && renderItems(v)) || <RenderValue value={v} />}
        </LegacyStack>
      ))}
    </LegacyStack>
  );
};

const RenderValue: React.FC<{ value: any }> = ({ value }) => {
  switch (true) {
    case React.isValidElement(value):
      return value;
    case typeof value.toString === 'function':
      return <p>{value.toString()}</p>;
    default:
      return <p>{JSON.stringify(value)}</p>;
  }
};

export default DisplayJson;
export type { DisplayJsonProps };
