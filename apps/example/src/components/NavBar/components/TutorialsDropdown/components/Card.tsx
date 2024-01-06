import React from 'react';
import { cs } from '@mx-design/web-utils';
import styles from '../styles/index.module.less';

export function Card({ Icon, title, text, onClick, onClickMenuItem, isLast }) {
  return (
    <div
      className={cs(styles.card, { [styles.bottom]: !isLast })}
      onClick={() => {
        onClick();
        onClickMenuItem();
      }}
    >
      <Icon className={styles.icon} />
      <div className={styles['content-conatiner']}>
        <span className={styles.title}>{title}</span>
        <div className={styles.text}>{text}</div>
      </div>
    </div>
  );
}
