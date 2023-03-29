import { LegacyStack, SkeletonBodyText, SkeletonThumbnail } from '@shopify/polaris';
import React from 'react';

const SkeletonMedia: React.FC = () => (
  <LegacyStack>
    <SkeletonThumbnail />
    <div style={{ marginTop: '0.8rem', width: '9rem' }}>
      <SkeletonBodyText lines={2} />
    </div>
  </LegacyStack>
);

export default SkeletonMedia;
