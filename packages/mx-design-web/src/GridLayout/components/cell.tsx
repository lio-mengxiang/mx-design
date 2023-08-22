import React from 'react';
// type
import type { CellProps } from '../interface';

const middleStyle = (middle) => {
  if (middle) {
    return {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    };
  }
};

function Cell({ width = 1, height = 1, area, middle, style = {}, left, top, children, className }: CellProps) {
  const mergeStyle: Record<string, any> = {
    minWidth: 0,
    // @zh 设置网格元素跨越多少列
    // @en Set how many columns a grid element spans
    gridColumnEnd: `span ${width}`,
    // @zh 设置网格元素跨越多少行
    // @en Sets how many rows a grid element spans
    gridRowEnd: `span ${height}`, // grid-row-start
    // @zh 定义了网格元素从哪一列开始
    // @en Defines which column the grid element starts from
    gridColumnStart: left,
    // @zh 定义了网格元素从哪一行开始
    // @en Defines which row the grid element starts from
    gridRowStart: top,
    ...middleStyle(middle),
    ...style,
  };
  if (area) mergeStyle.gridArea = area;
  return (
    <div className={className} style={mergeStyle}>
      {children}
    </div>
  );
}

const CellComponent = React.memo<CellProps>(Cell);
CellComponent.displayName = 'Cell';

export { CellComponent as Cell };
