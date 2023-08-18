import React from 'react';
import { Dropdown } from '@mx-design/web';
import { TutorialsDropdown } from './TutorialsDropdown';
import { useLocale } from '@/locale/useLocal/useLocal';
import { NAME_SPACE_NAV_BAR } from '../locale';

export function DropdownButton() {
  const [local] = useLocale<typeof NAME_SPACE_NAV_BAR>({ namespace: NAME_SPACE_NAV_BAR });

  return (
    <Dropdown
      popupProps={{
        zIndex: 1001,
        themeStyle: { '--dropdown-border-radius': '8px', '--popup-content-margin': '16px' },
        trigger: 'click',
        placement: 'bottom',
        popperOptions: {
          strategy: 'fixed',
        },
      }}
      customElement={<TutorialsDropdown />}
    >
      {local.TutorialTitle}
    </Dropdown>
  );
}
