import React from 'react';
import styles from './styles/index.module.less';

export function DemoBlock(props) {
  const { title, children, desc, namespace } = props;
  return (
    <div>
      <h3 className={styles['demo-title']} id={namespace}>
        {title}
      </h3>
      <div className={styles['demo-desc']}>{desc}</div>
      <div className={styles['demo-container']}>{children}</div>
    </div>
  );
}
