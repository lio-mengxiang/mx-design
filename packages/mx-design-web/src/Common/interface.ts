import { ReactNode } from 'react';

export type MNode<T = undefined> = T extends undefined ? ReactNode : ReactNode | ((props: T) => ReactNode);
