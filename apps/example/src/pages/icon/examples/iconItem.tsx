import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import copy from 'copy-to-clipboard';
import { useMessage } from '@mx-design/web';
import styles from '../style/index.module.less';

function IconItem({ Icon, Item }) {
  const controls = useAnimation();

  const Message = useMessage();

  const handleHover = () => {
    controls.start({ scale: 1.2 });
  };

  const handleHoverEnd = () => {
    controls.start({ scale: 1 });
  };

  const handleClick = (Item) => {
    copy(`<${Item} />`) &&
      Message.add({
        type: 'success',
        content: `copy success <${Item} /> `,
      });
  };

  return (
    <motion.div onClick={() => handleClick(Item)} onMouseEnter={handleHover} onMouseLeave={handleHoverEnd} className={styles['icon-item']}>
      <motion.div animate={controls}>
        <Icon size="2em" />
      </motion.div>
      <span className={styles['icon-item-text']}>{Item}</span>
    </motion.div>
  );
}

export default IconItem;
