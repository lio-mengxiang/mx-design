import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './styles/index.module.less';
import { CollapseBtn, Menu } from './components';
import { variants } from './constants';

function MenuContainer({ menuList }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <motion.div
      animate={isOpen ? 'open' : 'closed'}
      variants={variants}
      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
      className={styles['menu-container']}
    >
      <Menu isOpen={isOpen} menuList={menuList} />
      <CollapseBtn isOpen={isOpen} setIsOpen={setIsOpen} />
    </motion.div>
  );
}

export default MenuContainer;
