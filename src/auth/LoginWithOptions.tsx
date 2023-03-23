import React from 'react';
import { Avatar, LegacyCard, ResourceItem, ResourceList, Text } from '@shopify/polaris';
import { Shop } from './types';

type Props = {
  options: Shop[];
  onLogin: (domain: string) => void;
};

const LoginWithOptions: React.FC<Props> = ({ options, onLogin }) => {
  return (
    <LegacyCard>
      <ResourceList
        resourceName={{ singular: 'shop', plural: 'shops' }}
        items={options || []}
        renderItem={(item, id) => (
          <ResourceItem
            id={id}
            onClick={() => onLogin(item.domain)}
            media={<Avatar initials={item.name.substring(0, 2)} />}
          >
            <Text variant="headingLg" as="h3">{item.name}</Text>
            <p>{item.domain}</p>
          </ResourceItem>
        )}
      />
    </LegacyCard>
  );
};

export default LoginWithOptions;
