import React from 'react';
import { motion } from 'framer-motion';
import { IconArrowLeft, IconArrowRight } from '@mx-design/web';
import { btn_variants } from '../constants';
import styles from '../styles/index.module.less';

export function CollapseBtn({ isOpen, setIsOpen }) {
  return (
    <motion.button
      animate={isOpen ? 'open' : 'closed'}
      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
      initial={{ x: 247 }}
      variants={btn_variants}
      onClick={() => setIsOpen(!isOpen)}
      className={styles['menu-collapse-btn']}
    >
      {isOpen ? <IconArrowLeft size="18px" /> : <IconArrowRight size="18px" />}
    </motion.button>
  );
}
