import React from 'react';
import { baseAnchorLinkProps } from '../interface';
import Link from '../link';

export function createNestedLink(items?: baseAnchorLinkProps[]) {
  return Array.isArray(items)
    ? items.map((item) => (
        <Link {...item} key={item.key || item.href}>
          {createNestedLink(item.children)}
        </Link>
      ))
    : null;
}
