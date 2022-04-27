import React, { useCallback, useState } from 'react';
import { ActionList, Button, Card, Collapsible, Heading, Icon, Stack } from '@shopify/polaris';
import { ChevronDownMinor, ChevronUpMinor } from '@shopify/polaris-icons';

interface CollapsibleSectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

const CollapsibleSection: React.FC<CollapsibleSectionProps> = ({ id, title, children }) => {
  const [open, setOpen] = useState(false);

  const handleToggle = useCallback(() => {
    setOpen((open) => !open);
  }, []);

  return (
    <>
      <ActionList
        items={[
          {
            content: (<Heading>{title}</Heading>) as any,
            suffix: <Icon source={open ? ChevronUpMinor : ChevronDownMinor} />,
            onAction: handleToggle,
          },
        ]}
      />
      <Collapsible id={id} open={open} transition={{ duration: '500ms', timingFunction: 'ease-in-out' }} expandOnPrint>
        <div className="Polaris-Card__Section" style={{ paddingTop: 'var(--p-space-1)' }}>
          <Card.Subsection>{children}</Card.Subsection>
          <Card.Subsection>
            <Stack distribution="center">
              <Button plain onClick={handleToggle} ariaControls={id} ariaExpanded={open}>
                Show less
              </Button>
            </Stack>
          </Card.Subsection>
        </div>
      </Collapsible>
    </>
  );
};

export default CollapsibleSection;
export type { CollapsibleSectionProps };
