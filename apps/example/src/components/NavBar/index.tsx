import React from 'react';
import { Space } from '@mx-design/web';
import { cs } from '@mx-design/web-utils';
import styles from './styles/index.module.less';
import { GithubLink, Logo, SelectLang, SelectTheme } from './components';
import PageNav from '../PageNav/nav';

function NavBar() {
  return (
    <div className={styles['navbar-container']}>
      <Space>
        <Logo />
        <div className={styles['navbar-author']}>组件和教程还在补充中, 欢迎微信加群交流(wechat)：a2298613245</div>
      </Space>
      <Space size={28} className={cs(styles['navbar-space-horizontal'], styles['navbar-right-content'])}>
        <PageNav />
        <GithubLink />
        <SelectLang />
        <SelectTheme />
      </Space>
    </div>
  );
}
export default NavBar;
