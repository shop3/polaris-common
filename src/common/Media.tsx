import React from 'react';
import { Caption, Stack, TextStyle, Thumbnail } from '@shopify/polaris';
import { NoteMajor } from '@shopify/polaris-icons';

type MediaProps = {
  url: string;
  name: string;
  size: number;
  mime: string;
};

const Media: React.FC<MediaProps> = ({ url, name, size, mime }) => (
  <Stack>
    <Thumbnail source={isImage(mime) ? url : NoteMajor} alt={name} />
    <div>
      <TextStyle>{name}</TextStyle>
      <Caption>{size} KB</Caption>
    </div>
  </Stack>
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
