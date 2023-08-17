import React, { useContext } from 'react';
import { EN_US, ZH_CN } from '@/locale/constants';
import { ConfigContext } from '@/components/ConfigProvider/configProvider';
import styles from '../styles/index.module.less';

export function SelectLang() {
  const { lang, setLang } = useContext(ConfigContext);

  const handleLang = () => {
    if (lang === ZH_CN) {
      return setLang(EN_US);
    }

    if (lang === EN_US) {
      return setLang(ZH_CN);
    }
  };

  return (
    <div className={styles['navbar-right-lang']} onClick={handleLang}>
      {lang === ZH_CN && <span>English</span>}
      {lang === EN_US && <span>简体中文</span>}
    </div>
  );
}
