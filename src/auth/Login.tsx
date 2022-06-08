import React, { useState } from 'react';
import { Button, Stack } from '@shopify/polaris';
import _ from 'lodash';
import LoginNoOptions from './LoginNoOptions';
import LoginWithOptions from './LoginWithOptions';
import { Shop } from './types';

type Props = {
  options?: Shop[];
  onLogin?: (domain: string) => void;
};

const Login: React.FC<Props> = ({ options = [], onLogin = () => undefined }) => {
  const [isNewShop, setIsNewShop] = useState(false);

  if (!isNewShop && _.isArray(options) && !_.isEmpty(options)) {
    return (
      <Stack vertical>
        <LoginWithOptions {...{ options, onLogin }} />
        <Stack distribution="center">
          <Button plain onClick={() => setIsNewShop(true)}>
            Login with another shop
          </Button>
        </Stack>
      </Stack>
    );
  }

  return <LoginNoOptions {...{ onLogin }} />;
};

export default Login;
