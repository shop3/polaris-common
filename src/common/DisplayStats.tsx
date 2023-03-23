import React from 'react';
import { Text, Icon, LegacyStack } from '@shopify/polaris';
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
    <LegacyStack>
      {stats.map((stat, i) => (
        <LegacyStack.Item key={i} fill>
          <LegacyStack vertical alignment="center" distribution="center" spacing="extraTight">
            {stat.icon && <Icon source={getIcon(stat.icon) || ''} backdrop />}
            <Text variant="headingLg" as="h5">{stat.value}</Text>
            <Text variant="headingXs" as="h6">{stat.label}</Text>
          </LegacyStack>
        </LegacyStack.Item>
      ))}
    </LegacyStack>
  );
};

function getIcon(name: string) {
  for (const [key, icon] of Object.entries(icons)) {
    if (key === name) return icon;
  }
}

export default DisplayStats;
export type { DisplayStatsProps };
