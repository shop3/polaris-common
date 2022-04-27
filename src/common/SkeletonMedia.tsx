import { SkeletonBodyText, SkeletonThumbnail, Stack } from '@shopify/polaris';
import React from 'react';

const SkeletonMedia: React.FC = () => (
  <Stack>
    <SkeletonThumbnail />
    <div style={{ marginTop: '0.8rem', width: '9rem' }}>
      <SkeletonBodyText lines={2} />
    </div>
  </Stack>
);

export default SkeletonMedia;
