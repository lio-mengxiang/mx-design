import React, { useLayoutEffect } from 'react';
import styles from './styles/index.module.less';

function Mask(props) {
  useLayoutEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);
  return <div className={styles['page-nav-container']}>{props.children}</div>;
}
export default Mask;
