import React from 'react';
import { Dropdown } from '@mx-design/web';
import { TutorialsDropdown } from './TutorialsDropdown';
import { TutorialsButton } from './TutorialsButton';
import { useStore } from '../hooks.ts';

export function DropdownButton() {
  const { lists } = useStore();

  return (
    <Dropdown
      popupProps={{
        zIndex: 1001,
        themeStyle: { '--dropdown-border-radius': '8px', '--popup-content-margin': '8px' },
        placement: 'bottom',
        popperOptions: {
          strategy: 'fixed',
        },
      }}
      visibleStatus
      customElement={<TutorialsDropdown lists={lists} />}
    >
      <TutorialsButton />
    </Dropdown>
  );
}
