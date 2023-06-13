import { ReactNode } from 'react';

export type ClassName = { [className: string]: any } | ClassName[] | string;
export type TNode<T = undefined> = T extends undefined ? ReactNode : ReactNode | ((props: T) => ReactNode);
