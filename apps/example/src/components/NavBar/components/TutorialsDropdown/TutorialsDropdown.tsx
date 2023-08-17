import React from 'react';
import styles from './index.module.less';

export function TutorialsDropdown(props) {
  return (
    <div>
      <div
        className={styles.card}
        style={{
          margin: '0 auto',
          padding: '18px 20px',
          display: 'flex',
          alignItems: 'center',
          borderBottom: '1px solid var(--border-level-1-color)',
        }}
      >
        <div>
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            stroke="var(--brand-color)"
            strokeWidth={2}
            fill="none"
            className={styles.text}
            style={{
              display: 'flex',
              padding: '6px',
              boxSizing: 'border-box',
              alignItems: 'center',
              justifyContent: 'left',
              marginRight: 16,
              background: 'var(--brand-color-1)',
              borderRadius: '8px',
            }}
          >
            <rect x="4" y="8" width="40" height="32" rx="2" fill="none" strokeLinejoin="round" />
            <path d="M12 18L19 24L12 30" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M23 32H36" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div style={{ fontSize: '12px', lineHeight: 1.8 }}>
          <span style={{ fontWeight: 800, fontSize: '14px' }}>组件库Cli工具教程</span>
          <div>如何将组件库开发和打包环境配置沉淀为cli工具</div>
        </div>
      </div>
      <div
        className={styles.card}
        style={{
          margin: '0 auto',
          padding: '18px 20px',
          display: 'flex',
          alignItems: 'center',
        }}
        onClick={props?.onClickMenuItem}
      >
        <div>
          <svg
            stroke="var(--brand-color)"
            strokeWidth={2}
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            style={{
              display: 'flex',
              padding: '6px',
              boxSizing: 'border-box',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: 16,
              background: 'var(--brand-color-1)',
              borderRadius: '8px',
            }}
          >
            <path d="M17 11L24 4L31 11L24 18L17 11Z" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M30 25L37 18L44 25L37 32L30 25Z" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M17 37L24 30L31 37L24 44L17 37Z" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M4 24L11 17L18 24L11 31L4 24Z" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div style={{ fontSize: '12px', lineHeight: 1.8 }}>
          <span style={{ fontWeight: 800, fontSize: '14px' }}>组件库各个组件教程</span>
          <div>每个组件的实现思路</div>
        </div>
      </div>
    </div>
  );
}
