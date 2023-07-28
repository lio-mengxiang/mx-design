import React, { useContext } from 'react';
import { IconMoon, IconSun } from '@mx-design/web';
import { DARK, LIGHT } from '@/utils/setTheme/constants';
import { ConfigContext } from '@/components/ConfigProvider';
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
      {theme === LIGHT && <IconMoon size="20px" />}
      {theme === DARK && <IconSun size="20px" />}
    </div>
  );
}
