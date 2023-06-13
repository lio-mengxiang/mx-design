import React, { createRef, useEffect } from 'react';
import styles from './styles/index.module.less';
import { Anchor } from '@mx-design/web';

function MenuContainer({ titleList }) {
  const anchorRef = createRef<any>();

  useEffect(() => {
    anchorRef.current?.onScroll();
  }, [location.pathname]);

  return (
    <div className={styles['anchor-list']}>
      <div className={styles['anchor-list_fixed']}>
        <Anchor lineless ref={anchorRef} affix={false} offset={-100} items={titleList}></Anchor>
      </div>
    </div>
  );
}

export default MenuContainer;
