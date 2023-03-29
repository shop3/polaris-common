import React from 'react';
import { LegacyStack, Text, Thumbnail } from '@shopify/polaris';
import { NoteMajor } from '@shopify/polaris-icons';

type MediaProps = {
  url: string;
  name: string;
  size: number;
  mime: string;
};

const Media: React.FC<MediaProps> = ({ url, name, size, mime }) => (
  <LegacyStack>
    <Thumbnail source={isImage(mime) ? url : NoteMajor} alt={name} />
    <div>
      <Text variant='bodyMd' as='p'>{name}</Text>
      <Text variant='bodySm' as='p'>{size} KB</Text>
    </div>
  </LegacyStack>
);

function isImage(mime: string): boolean {
  switch (mime) {
    case 'image/png':
    case 'image/jpeg':
    case 'image/webp':
    case 'image/svg+xml':
      return true;
    default:
      return false;
  }
}

export default Media;
export type { MediaProps };
