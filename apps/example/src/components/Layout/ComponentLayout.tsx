import React, { useLayoutEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Menu from '../Menu';
// style
import styles from './styles/index.module.less';

function ComponentLayout() {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTop = document.body.scrollTop = 0;
  }, [location.pathname]);

  return (
    <AnimatePresence>
      <div className={styles['app-container']}>
        <Menu />
        <Outlet />
      </div>
    </AnimatePresence>
  );
}
export default ComponentLayout;
