import React from 'react';
import { Page } from '@shopify/polaris';

import { Login } from '../../src';

export default {
  title: 'Auth/Login',
  component: Login,
};

const Template = (props: any) => (
  <Page narrowWidth>
    <Login {...props} />
  </Page>
);

export const NoOptions: any = Template.bind({});

NoOptions.args = {
  options: undefined,
};

export const WithOptions: any = Template.bind({});

WithOptions.args = {
  options: [
    {
      id: 1,
      name: 'Shop Example 1',
      domain: 'shop-example-1.myshopify.com',
    },

    {
      id: 2,
      name: 'Shop Example 2',
      domain: 'shop-example-2.myshopify.com',
    },
  ],
};
