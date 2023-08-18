import React from 'react';
import styles from '../styles/index.module.less';

export function Card({ Icon, title, text, onClick, onClickMenuItem }) {
  return (
    <div
      className={styles.card}
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
