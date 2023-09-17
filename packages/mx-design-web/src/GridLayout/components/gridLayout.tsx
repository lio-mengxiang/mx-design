// inspire by styled-css-grid.js
import React, { useContext } from 'react';
import { useMergeProps } from '@mx-design/hooks';
import { frGetter, formatAreas } from '../utils';
import { ConfigContext } from '../../ConfigProvider';
// type
import { GridLayoutProps } from '../interface';

const defaultProps = {
  gap: '8px',
  flow: 'row',
  height: 'auto',
};

function GridLayout(baseProps: GridLayoutProps, ref) {
  const { componentConfig } = useContext(ConfigContext);
  const props = useMergeProps<GridLayoutProps>(baseProps, defaultProps, componentConfig?.GridLayout);
  const { columns, height, gap, areas, alignContent, rows, justifyContent, flow, children, style, className, ...rest } = props;

  const mergeStyle: Record<string, any> = {
    display: 'grid',
    // @zh 设置容器高度
    // @en set container height
    height,
    // @zh 设置容器内元素是从左往右（默认），还是从上到下
    // @en Set whether the elements in the container are from left to right (default) or from top to bottom
    gridAutoFlow: flow,
    // @zh 当传递一个数字时，它是指定行数的简写，平分高度，自适应。如果是字符串，就以字符串当做值，例如:100px
    // eslint-disable-next-line max-len
    // @en When passed a number, it is a shorthand for specifying the number of rows, bisects the height, and adapts. If it is a string, use the string as the value, for example: 100px
    gridTemplateRows: frGetter(rows),
    // @zh 当传递一个数字时，它是指定列数的简写，平分宽度，自适应。如果是字符串，就以字符串当做值，例如:100px
    // eslint-disable-next-line max-len
    // @en When passed a number, it is a shorthand for specifying the number of columns, bisects the width, and adapts. If it is a string, use the string as the value, for example: 100px
    gridTemplateColumns: frGetter(columns),
    gap,
    // @zh 传递一个字符串数组，例如 [“a a”，“b c”]。 默认不提供
    // @en Pass an array of strings, for example [" a a ", "b c"]. Not provided by default.
    gridTemplateAreas: formatAreas(areas), // 。
    // @zh 决定整个内容区域在容器里面的水平位置(左中右)
    // @en Determines the horizontal position of the entire content area inside the container (left-center-right)
    justifyContent,
    // @zh 决定整个内容区域的垂直位置(上中下)
    // @en Determines the vertical position of the entire content area (top, middle, bottom)
    alignContent,
    ...style,
  };

  return (
    <div {...rest} className={className} style={mergeStyle} ref={ref}>
      {children}
    </div>
  );
}

const GridLayoutComponent = React.forwardRef(GridLayout);

GridLayoutComponent.displayName = 'GridLayout';

export { GridLayoutComponent as GridLayout };
