import React from 'react';

import { EmptyStateErrorBoundary } from '../../src';

export default {
  title: 'Errors/Empty State Error Boundary',
  component: EmptyStateErrorBoundary,
};

const ThrowsError = () => {
  throw new Error('Error message');
};

const Template = () => (
  <EmptyStateErrorBoundary>
    <ThrowsError />
  </EmptyStateErrorBoundary>
);

export const Example: any = Template.bind({});
