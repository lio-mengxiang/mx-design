import React from 'react';
import AnchorList from '../AnchorList';
import { motion } from 'framer-motion';
import { initial, exit, animate } from './constants';
// style
import styles from './styles/index.module.less';

function ComponentInnerLayout({ children, titleList }) {
  return (
    <motion.div style={{ display: 'flex', width: '100%' }} transition={{ dur: 0.4 }} initial={initial} animate={animate} exit={exit}>
      <div className={styles['content-container']}>{children}</div>
      <AnchorList titleList={titleList} />
    </motion.div>
  );
}
export default ComponentInnerLayout;
