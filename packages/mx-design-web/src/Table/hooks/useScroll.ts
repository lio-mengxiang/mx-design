import { MutableRefObject, useCallback, useEffect, useRef, useState } from 'react';
import { debounce, off, on, throttle } from '@mx-design/web-utils';
import { getRootDomElement, resetTableClassName, setFixedColumnsClassList, setTableFixedClassName } from '../utils';
import { LEFT, RIGHT } from '../constants';
// type
import { InternalColumnProps, TableProps } from '../interface';

export function useScroll<T>({
  hasFixedColumn,
  scroll,
  prefixCls,
  refTable,
  hasFixedColumnLeft,
  hasFixedColumnRight,
  refTableBody,
  refTableHead,
  refTableFoot,
  fixedHeader,
  refTableNF,
  flattenColumns,
}: {
  hasFixedColumn: boolean;
  scroll: TableProps<T>['scroll'];
  prefixCls: string;
  refTable: MutableRefObject<HTMLDivElement>;
  hasFixedColumnLeft: boolean;
  hasFixedColumnRight: boolean;
  refTableBody: MutableRefObject<HTMLElement>;
  refTableHead: MutableRefObject<HTMLElement>;
  refTableFoot: MutableRefObject<HTMLDivElement>;
  fixedHeader: boolean;
  refTableNF: MutableRefObject<HTMLTableElement>;
  flattenColumns: InternalColumnProps[];
}) {
  const lastScrollLeft = useRef<number>(0);
  // state
  const [tableViewWidth, setTableViewWidth] = useState<number>(0);

  /**
   * @zh 设置column fix 相关的css, 以及获取当前body的宽度（包含滚动条）
   * @en set css about fixed column, and get body's current width including the scroll bar
   */
  function resizeHandler() {
    setFixedColumnClassNames();
    const root = getRootDomElement(refTable);
    if (root && (hasFixedColumn || scroll?.x)) {
      const ele = root.querySelector(`.${prefixCls}-body`) || root.querySelector(`.${prefixCls}-content-inner`);
      const tableViewWidth = ele.getBoundingClientRect().width;
      setTableViewWidth(tableViewWidth);
    }
  }

  const throttleResizeHandler = debounce(resizeHandler, 100);

  /**
   * @zh 设置column fix 相关的css
   * @en set css about fixed column
   */
  function setFixedColumnClassNames() {
    if (hasFixedColumn || scroll?.x) {
      // div container
      const table = refTable.current as HTMLElement;

      if (table) {
        if (hasFixedColumnLeft) {
          setTableFixedClassName(table.classList, `${prefixCls}-has-fixed-col-left`);
        }
        if (hasFixedColumnRight) {
          setTableFixedClassName(table.classList, `${prefixCls}-has-fixed-col-right`);
        }
      }

      setPositionClassNames();
    }
  }

  /**
   * @zh 判断tbody此时滚动条是否在左边缘，中间或者右边缘
   * @en To jude if the scroll bar is on the left, middle, or right edge of tbody
   */
  const setPositionClassNames = useCallback(
    throttle(
      () => {
        const table = refTable.current as HTMLElement;
        const tbody = (fixedHeader ? refTableBody.current : refTableNF.current?.parentNode) as HTMLElement;
        if (tbody) {
          const { scrollLeft } = tbody;
          const alignLeft = scrollLeft === 0;

          // if scrollbar in the right edge
          const alignRight = scrollLeft + 1 >= tbody.children[0].getBoundingClientRect().width - tbody.clientWidth;
          if (alignLeft && alignRight) {
            setFixedColumnsClassList(table.classList, `${prefixCls}-scroll-position-both`, prefixCls);
          } else if (alignLeft) {
            setFixedColumnsClassList(table.classList, `${prefixCls}-scroll-position-${LEFT}`, prefixCls);
          } else if (alignRight) {
            setFixedColumnsClassList(table.classList, `${prefixCls}-scroll-position-${RIGHT}`, prefixCls);
          } else {
            setFixedColumnsClassList(table.classList, `${prefixCls}-scroll-position-middle`, prefixCls);
          }
        } else {
          table && resetTableClassName(table.classList, prefixCls);
        }
      },
      100,
      { trailing: true }
    ),
    [refTable.current, refTableBody.current, fixedHeader]
  );

  /**
   * @zh 同步 tbody， thead, tfoot的scrollLeft
   * @en Synchronize scrollLeft of tbody, thead, tfoot
   */
  function tableScrollHandler(e) {
    const { target } = e;
    const tbody = refTableBody.current as HTMLElement;
    const theadScrollContainer = refTableHead.current?.parentNode as HTMLElement;
    const tfoot = refTableFoot.current;
    if (target.scrollLeft !== lastScrollLeft.current) {
      if (theadScrollContainer) {
        theadScrollContainer.scrollLeft = target.scrollLeft;
      }
      if (tbody) {
        tbody.scrollLeft = target.scrollLeft;
      }
      if (tfoot) {
        tfoot.scrollLeft = target.scrollLeft;
      }
      setFixedColumnClassNames();
    }
    lastScrollLeft.current = e.target.scrollLeft;
  }

  // isFixedHeader = false
  function tableScrollHandlerNF(e) {
    const { target } = e;
    const table = refTableNF.current as HTMLElement;
    if (target.scrollLeft !== lastScrollLeft.current) {
      table.scrollLeft = target.scrollLeft;
      setFixedColumnClassNames();
    }
    lastScrollLeft.current = e.target.scrollLeft;
  }

  /**
   * @zh 绑定 tbody， thead, tfoot 的 scroll 事件，绑定 window 的 resize 事件
   * @en Bind the scroll events of tbody, thead, tfoot, and bind the resize event of window
   */
  useEffect(() => {
    resizeHandler();
    on(window, 'resize', throttleResizeHandler);

    const tableHead = refTableHead.current;
    const tableBody = refTableBody.current;
    const tableFoot = refTableFoot.current;

    if (tableBody) {
      on(tableBody, 'scroll', tableScrollHandler);
    }

    const theadScrollContainer = tableHead?.parentNode;

    if (tableHead) {
      if (theadScrollContainer) {
        on(theadScrollContainer, 'scroll', tableScrollHandler);
      }
    }

    if (tableFoot) {
      on(tableFoot, 'scroll', tableScrollHandler);
    }

    return () => {
      off(window, 'resize', throttleResizeHandler);

      if (tableBody) {
        off(tableBody, 'scroll', tableScrollHandler);
      }

      if (theadScrollContainer) {
        off(theadScrollContainer, 'scroll', tableScrollHandler);
      }

      if (tableFoot) {
        off(tableFoot, 'scroll', tableScrollHandler);
      }
    };
  }, [hasFixedColumnLeft, hasFixedColumnRight, scroll?.x, scroll?.y, flattenColumns.length]);

  return { tableViewWidth, tableScrollHandlerNF };
}
