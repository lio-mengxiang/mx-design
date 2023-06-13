import React from 'react';
import { IconM, IconDesign, Space } from '@mx-design/web';
import styles from './styles/index.module.less';

export function IconLogo() {
  return (
    <Space size={4}>
      <IconM size="42px" className={styles['logo-m']} />
      <IconDesign size="78px" className={styles['logo-design']} />
    </Space>
  );
}

IconLogo.displayName = 'IconLogo';
