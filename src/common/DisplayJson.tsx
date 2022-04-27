import React from 'react';
import { Stack, Subheading } from '@shopify/polaris';

interface DisplayJsonProps {
  data: any;
  renderItems?: (value: any) => React.ReactNode | undefined;
}

const DisplayJson: React.FC<DisplayJsonProps> = ({ data, renderItems }) => {
  return (
    <Stack vertical spacing="baseTight">
      {Object.entries(data || {}).map(([k, v], i) => (
        <Stack key={i} spacing="extraTight" distribution="equalSpacing" alignment="center">
          <Subheading>{k}</Subheading>
          {(renderItems && renderItems(v)) || <RenderValue value={v} />}
        </Stack>
      ))}
    </Stack>
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
