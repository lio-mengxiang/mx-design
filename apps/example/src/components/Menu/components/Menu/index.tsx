import React from 'react';
import { motion } from 'framer-motion';
import { menu_variants } from '../../constants';
import { useLocale } from '@/locale/useLocal/useLocal';
import { NAME_SPACE_SITE_MENU } from '../../locale';
import { useNavigate, useLocation } from 'react-router-dom';
import { handleNavigate } from './utils';
import { cs } from '@mx-design/web-utils';
import './styles/menu.component.less';

export function Menu({ isOpen, menuList }) {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [local] = useLocale<typeof NAME_SPACE_SITE_MENU>({ namespace: NAME_SPACE_SITE_MENU });

  return (
    <motion.div
      animate={isOpen ? 'open' : 'closed'}
      variants={menu_variants}
      className="mx-menu thin-scroll"
      transition={{ damping: 0, stiffness: 0, duration: 0.2 }}
    >
      <div className="mx-menu-inner-container">
        {menuList.map((menu, index) => {
          return (
            <div className="mx-menu-group" key={index}>
              <div className="mx-menu-title">{local[menu.title]}</div>
              {menu.children.map((child, index) => {
                return (
                  <div
                    onClick={handleNavigate({ navigate, path: child.path })}
                    className={cs('mx-menu-item', {
                      'mx-menu-selected': pathname === child.path,
                    })}
                    style={{ marginLeft: '8px' }}
                    key={index}
                  >
                    {local[child.title]}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}
