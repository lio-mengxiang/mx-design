import { MutableRefObject } from 'react';
import { findNode } from './findNode';
import { AnchorProps } from '../interface';
import { addLink } from './addLink';

interface ISetActiveLink {
  hash: string;
  linkMap: MutableRefObject<Map<string, HTMLElement>>;
  wrapperRef: MutableRefObject<HTMLDivElement>;
  currentLink: string;
  setCurrentLink: (updater: any) => Promise<string>;
  onChange?: AnchorProps['onChange'];
}

export function setActiveLink({ hash, linkMap, wrapperRef, currentLink, setCurrentLink, onChange }: ISetActiveLink) {
  if (!hash || !wrapperRef.current) return;

  if (!linkMap.current.has(hash)) {
    const node = findNode(wrapperRef.current, `a[data-href='${hash}']`);
    node && addLink(linkMap, hash, node);
  }

  const node = linkMap.current.get(hash);

  if (node && hash !== currentLink) {
    setCurrentLink(hash).then(() => {
      onChange?.(hash, currentLink);
    });
  }
}
