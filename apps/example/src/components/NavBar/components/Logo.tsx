import React from 'react';
import { IconLogo } from '../../Logo';
import styles from '../styles/index.module.less';

export function Logo() {
  return (
    <div className={styles['navbar-space-horizontal']}>
      <IconLogo />
    </div>
  );
}
