import type { ReactNode } from 'react';

export interface GridLayoutProps {
  columns: number | string;
  rows?: number | string;
  gap?: string;
  areas?: string[];
  minRowHeight?: string;
  alignContent?: string;
  justifyContent?: string;
  flow?: string;
  height?: string;
  style?: Record<string, any>;
  children: ReactNode;
  className?: any;
}

export interface CellProps {
  width?: number;
  height?: number;
  area?: string;
  middle?: boolean;
  style?: Record<string, any>;
  left?: number;
  top?: number;
  children: ReactNode;
  className?: any;
}
