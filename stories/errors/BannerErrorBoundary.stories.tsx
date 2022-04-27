import React from 'react';
import { Page } from '@shopify/polaris';

import { BannerErrorBoundary } from '../../src';

export default {
  title: 'Errors/Banner Error Boundary',
  component: BannerErrorBoundary,
};

const ThrowsError = () => {
  throw new Error('Error message');
};

const Template = () => (
  <Page narrowWidth>
    <BannerErrorBoundary>
      <ThrowsError />
    </BannerErrorBoundary>
  </Page>
);

export const Example: any = Template.bind({});
