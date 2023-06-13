import React from 'react';
import styles from './styles/index.module.less';
import { Logo, SelectLang, SelectTheme } from './components';
import { Space } from '@mx-design/web';
import { cs } from '@mx-design/web-utils';

function NavBar() {
  return (
    <div className={styles['navbar-container']}>
      <Space>
        <Logo />
        <div className={styles['navbar-author']}>交流微信：a2298613245</div>
      </Space>
      <Space size={28} className={cs(styles['navbar-space-horizontal'], styles['navbar-right-content'])}>
        <SelectLang />
        <SelectTheme />
      </Space>
    </div>
  );
}
export default NavBar;
