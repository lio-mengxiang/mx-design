import React, { FC } from 'react';
import { ErrorPageProps } from './interface';
import styles from './style/index.module.less';

export const ErrorPage: FC<ErrorPageProps> = (props) => {
  const { title, des, img, children } = props;
  return (
    <div className={styles['error-page-container']}>
      <div className={styles['error-page-icon']}>{img}</div>
      <span>{title}</span>
      <span>{des}</span>
      <div className={styles['error-page-button']}>{children}</div>
    </div>
  );
};
