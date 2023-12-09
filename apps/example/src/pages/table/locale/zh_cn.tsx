import React from 'react';
import {
  Basic,
  BackEndMultiSort,
  UncontrolledPagination,
  Filter,
  ExpandRow,
  BackEndSingleSort,
  SingleSort,
  BackEndFilter,
  MultiSort,
  NestedTable,
  TreeData,
  CustomCell,
  CellMerge,
  FixedColumn,
  FixedHeader,
  GroupColumns,
} from './constants';

export const zh_cn_table = {
  [Basic]: {
    title: '基本用法',
    desc: (
      <>
        为了更高效的 <code className="mx-code">table</code> 渲染速度，<code className="mx-code">table</code>组件设置了{' '}
        <code className="mx-code">table-layout</code>
        属性的值为 <code className="mx-code">fixed</code>，所以强烈建议设置 columns 时，每一项加上<code className="mx-code">width</code>
        属性，否则将平分剩余空间
      </>
    ),
  },
  [Filter]: {
    title: '前端筛选',
    desc: (
      <>
        <li style={{ marginBottom: 16 }}>
          配置 Column 的 <code className="mx-code">filterDropdown</code> 和 <code className="mx-code">onFilter</code> 可以对表格进行筛选
        </li>
        <li style={{ marginBottom: 16 }}>
          <code className="mx-code">filterDropdown</code>返回要渲染的<code className="mx-code">filter</code> 组件，接收三个参数
          <code className="mx-code">value</code>（当前筛选的值）、<code className="mx-code">setFilterValue</code>
          (设置当前要筛选的值的函数, 如果设置当前筛选的值为undefined或者空字符串，视为不筛选任何数据) 、
          <code className="mx-code">close</code>(关闭筛选下拉框的函数)
        </li>
        <li style={{ marginBottom: 16 }}>
          <code className="mx-code">onFilter</code>
          表示如何对table数据筛选的函数，接受两个参数<code className="mx-code">value</code>(当前列筛选的值)
          <code className="mx-code">row</code>(当前行的数据)
        </li>
        <li style={{ marginBottom: 16 }}>
          如果想设置默认筛选项，请设置<code className="mx-code">defaultFilters</code>，切记，<code className="mx-code">defaultFilters</code>
          和<code className="mx-code">setFilterValue</code>属于非受控模式的前端筛选功能
        </li>
      </>
    ),
  },
  [BackEndFilter]: {
    title: '后端筛选',
    desc: (
      <>
        如果你想请求后端服务来筛选，并设置筛选icon为选中态，你需要设置
        <code className="mx-code">setFilterValue</code>参数，表示对筛选功能启用受控模式，切记不要把受控模式和非受控模式混用。
      </>
    ),
  },
  [SingleSort]: {
    title: '前端单列排序',
    desc: (
      <div>
        <li style={{ marginBottom: 16 }}>
          需要指定<code className="mx-code">sorter</code>函数, 指定排序规则，并且<code className="mx-code">sortType</code>
          类型必须是以下三种,用来指定展示哪些排序功能：
          <code className="mx-code">ascend</code>(升序)、<code className="mx-code">descend</code>(降序)、
          <code className="mx-code">all</code>(包含升序和降序)
        </li>
        <li>
          其中<code className="mx-code">defaultSortOrder</code>用来指定初始化的默认排序方式, 属于非受控模式
        </li>
      </div>
    ),
  },
  [BackEndSingleSort]: {
    title: '后端单列排序',
    desc: (
      <>
        <li style={{ marginBottom: 16 }}>
          需要指定<code className="mx-code">sortOrder</code>(排序方向), 并且<code className="mx-code">handleAscendSort</code>和
          <code className="mx-code">handleDescendSort</code>分别监听点击升序图标和降序图标的回调函数
        </li>
        <li style={{ marginBottom: 16 }}>切记，不要跟上面的非受控模式混用</li>
      </>
    ),
  },
  [MultiSort]: {
    title: '前端多列排序',
    desc: (
      <>
        <li style={{ marginBottom: 16 }}>
          <code className="mx-code">column.sorter</code> 支持传入一个对象，指定该对象的 <code className="mx-code">multiple</code>
          属性可以实现多列排序的效果。<code className="mx-code">multiple为number</code>类型，数字越大代表排序优先级越高。 指定该对象的
          <code className="mx-code">compare</code>属性来确定排序规则
        </li>
        <li style={{ marginBottom: 16 }}>
          指定 <code className="mx-code">column.defaultSortOrder</code>属性可以设置默认的排序次序
        </li>
      </>
    ),
  },
  [BackEndMultiSort]: {
    title: '后端多列排序',
    desc: '按钮的禁用状态',
  },
  [UncontrolledPagination]: {
    title: '非受控翻页',
    desc: (
      <>
        通过设置<code className="mx-code">loading</code>可以让一个按钮处于加载中状态。处于加载中状态的按钮不会触发点击事件
      </>
    ),
  },
  [ExpandRow]: {
    title: '展开行',
    desc: (
      <>
        当内容过长，可以通过<code className="mx-code">expandedRowRender</code>设置展开行。如果返回值是
        <code className="mx-code">null</code>，不会渲染展开按钮
      </>
    ),
  },
  [NestedTable]: {
    title: '嵌套表格',
    desc: <>嵌套子表格的例子，点击展开按钮可以在展开区域展示子表格</>,
  },
  [TreeData]: {
    title: '树形数据展示',
    desc: (
      <>
        树形数据展示的例子，<code className="mx-code">data</code> 里有 <code className="mx-code">children</code> 字段, 或者通过
        <code className="mx-code">childrenColumnName</code>
        设置成自定义字段。<code className="mx-code">警告</code>
        如果选用父子联动的check效果，因组件要考虑很多种用户使用场景，为了兼顾这些场景，所以算法性能较差，如果你希望获得很高的性能，建议用受控逻辑（传入
        selectedRowKeys）实现
      </>
    ),
  },
  [CustomCell]: {
    title: '自定义单元格内容',
    desc: (
      <>
        通过 columns 中的 <code className="mx-code">render</code> 字段，可以自定义单元格的内容
      </>
    ),
  },
  [FixedColumn]: {
    title: '固定列',
    desc: (
      <>
        通过 <code className="mx-code">leftFixedColumnsLength</code> 设置固定左边多少列。 通过{' '}
        <code className="mx-code">rightFixedColumnsLength</code> 设置固定右边多少列。一定注意要设置宽度，否则会使用默认宽度。 注意： 要配合{' '}
        <code className="mx-code">
          scroll=
          {'{ x: number }'}
        </code>{' '}
        使用，columns 中需要有一列不设置宽度，自适应，不然会有样式问题。
      </>
    ),
  },
  [FixedHeader]: {
    title: '固定表头',
    desc: (
      <>
        当你设置 <code className="mx-code">scroll={'{ y: xxx }'}</code> 并且表格数据高度超过了你设置的y值，则自动表头固定
      </>
    ),
  },
  [GroupColumns]: {
    title: '表头分组',
    desc: (
      <>
        columns 内可以嵌套 <code className="mx-code">children</code>，用于表头分组
      </>
    ),
  },
  [CellMerge]: {
    title: '单元格合并',
    desc: (
      <>
        如果你传的数据是 <code className="mx-code">plainObject</code> ,其中 <code className="mx-code">children</code>
        代表属性渲染的内容，<code className="mx-code">props</code> 可以传入 <code className="mx-code">rowSpan</code> 和{' '}
        <code className="mx-code">colSpan</code>, 这么做的原因是如果要合并单元格，后端一般会用文档型数据库（非关系型数据库存储的一种）
      </>
    ),
  },
};
