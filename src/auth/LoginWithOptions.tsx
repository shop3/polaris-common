import React from 'react';
import { Avatar, Card, ResourceItem, ResourceList, TextStyle } from '@shopify/polaris';
import { Shop } from './types';

type Props = {
  options: Shop[];
  onLogin: (domain: string) => void;
};

const LoginWithOptions: React.FC<Props> = ({ options, onLogin }) => {
  return (
    <Card>
      <ResourceList
        resourceName={{ singular: 'shop', plural: 'shops' }}
        items={options || []}
        renderItem={(item, id) => (
          <ResourceItem
            id={id}
            onClick={() => onLogin(item.domain)}
            media={<Avatar initials={item.name.substring(0, 2)} />}
          >
            <h3>
              <TextStyle variation="strong">{item.name}</TextStyle>
            </h3>
            <p>{item.domain}</p>
          </ResourceItem>
        )}
      />
    </Card>
  );
};

export default LoginWithOptions;
