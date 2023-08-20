import React, { forwardRef, useRef } from 'react';
import { Button, IconArrowBottom } from '@mx-design/web';
import { cs } from '@mx-design/web-utils';
import { useLocale } from '@/locale/useLocal/useLocal';
import { NAME_SPACE_NAV_BAR } from '../locale';
import styles from '../styles/index.module.less';

function TutorialsButton(props, ref) {
  const { visible, ...rest } = props;
  const [local] = useLocale<typeof NAME_SPACE_NAV_BAR>({ namespace: NAME_SPACE_NAV_BAR });

  return (
    <Button type="text" status="default" {...rest} ref={ref}>
      {local.TutorialTitle}
      <IconArrowBottom
        className={cs(styles.arrow, {
          [styles.rotate180]: visible,
        })}
      />
    </Button>
  );
}

const TutorialsButtonComponent = forwardRef(TutorialsButton);
export { TutorialsButtonComponent as TutorialsButton };
