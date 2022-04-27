import React from 'react';
import { DisplayText, Icon, Stack, TextStyle } from '@shopify/polaris';
import * as icons from '@shopify/polaris-icons';

type DisplayStatsProps = {
  stats: Array<{
    icon?: string;
    label: string;
    value: string;
  }>;
};

const DisplayStats: React.FC<DisplayStatsProps> = ({ stats }) => {
  return (
    <Stack>
      {stats.map((stat, i) => (
        <Stack.Item key={i} fill>
          <Stack vertical alignment="center" distribution="center" spacing="extraTight">
            {stat.icon && <Icon source={getIcon(stat.icon) || ''} backdrop />}
            <DisplayText size="large">{stat.value}</DisplayText>
            <TextStyle variation="subdued">{stat.label}</TextStyle>
          </Stack>
        </Stack.Item>
      ))}
    </Stack>
  );
};

function getIcon(name: string) {
  for (const [key, icon] of Object.entries(icons)) {
    if (key === name) return icon;
  }
}

export default DisplayStats;
export type { DisplayStatsProps };
