import React, { useContext } from 'react';
import { DARK, LIGHT } from '@/utils/setTheme/constants';
import { ConfigContext } from '@/components/ConfigProvider';
import { IconMoon, IconSun } from '@mx-design/web';
import styles from '../styles/index.module.less';

export function SelectTheme() {
  const { theme, setTheme } = useContext(ConfigContext);

  const handleTheme = () => {
    if (theme === LIGHT) {
      return setTheme(DARK);
    }

    if (theme === DARK) {
      return setTheme(LIGHT);
    }
  };
  return (
    <div onClick={handleTheme} className={styles['navbar-right-icon']}>
      {theme === LIGHT && <IconMoon style={{ color: 'var()' }} />}
      {theme === DARK && <IconSun />}
    </div>
  );
}
