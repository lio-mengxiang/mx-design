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
      <Icon className={styles.text} />
      <div style={styles['content-conatiner']}>
        <span>{title}</span>
        <div style={styles.text}>{text}</div>
      </div>
    </div>
  );
}
