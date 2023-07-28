import React, { useContext } from 'react';
import { EN_US, ZN_CH } from '@/locale/constants';
import { ConfigContext } from '@/components/ConfigProvider/configProvider';
import styles from '../styles/index.module.less';

export function SelectLang() {
  const { lang, setLang } = useContext(ConfigContext);

  const handleLang = () => {
    if (lang === ZN_CH) {
      return setLang(EN_US);
    }

    if (lang === EN_US) {
      return setLang(ZN_CH);
    }
  };

  return (
    <div className={styles['navbar-right-lang']} onClick={handleLang}>
      {lang === ZN_CH && <span>English</span>}
      {lang === EN_US && <span>简体中文</span>}
    </div>
  );
}
