import React from 'react';
import { ActionList, Text, Icon, IconSource } from '@shopify/polaris';
import { ChevronRightMinor } from '@shopify/polaris-icons';

interface ClickableSectionProps {
  icon?: string | IconSource;
  content: string;
  url?: string;
  external?: boolean;
  onAction?: () => void;
}

const ClickableSection: React.FC<ClickableSectionProps> = ({ icon, content, url, external, onAction }) => {
  return (
    <ActionList
      items={[
        {
          icon: icon,
          content: (<Text variant="headingMd" as="h3">{content}</Text>) as any,
          suffix: <Icon source={ChevronRightMinor} />,
          url: url,
          external: external,
          onAction: onAction,
        },
      ]}
    />
  );
};

export default ClickableSection;
export type { ClickableSectionProps };
