import React, { createRef, useEffect } from 'react';
import { Anchor } from '@mx-design/web';
import styles from './styles/index.module.less';

function MenuContainer({ titleList }) {
  const anchorRef = createRef<any>();

  useEffect(() => {
    anchorRef.current?.onScroll();
  }, [anchorRef]);

  return (
    <div className={styles['anchor-list']}>
      <div className={styles['anchor-list_fixed']}>
        <Anchor lineless ref={anchorRef} affix={false} offset={-100} items={titleList} />
      </div>
    </div>
  );
}

export default MenuContainer;
