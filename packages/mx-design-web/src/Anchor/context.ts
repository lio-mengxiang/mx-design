import React, { createContext } from 'react';

interface AnchorContext {
  currentLink: string;
  onLinkClick: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => void;
  linkMap: React.MutableRefObject<Map<string, HTMLElement>>;
}

export default createContext<AnchorContext>({
  currentLink: '',
  onLinkClick: () => {},
  linkMap: { current: new Map() },
});
