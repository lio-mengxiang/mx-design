import React from 'react';
import {
  Basic,
  BackEndMultiSort,
  NestedTable,
  Filter,
  ExpandRow,
  UncontrolledPagination,
  SingleSort,
  BackEndSingleSort,
  BackEndFilter,
  MultiSort,
  TreeData,
  CustomCell,
  FixedColumn,
  FixedHeader,
  GroupColumns,
  CellMerge,
} from './constants';

export const en_us_table = {
  [Basic]: {
    title: 'Basic',
    desc: (
      <>
        In order to get more efficient rendering speed with <code className="mx-code">table</code>, the
        <code className="mx-code">table</code> component is set <code className="mx-code">table-layout</code>
        property to <code className="mx-code">fixed</code>, so it is strongly recommended to add
        <code className="mx-code">width</code> property to each item when setting columns. Otherwise the remaining space will be divided
        equally
      </>
    ),
  },
  [Filter]: {
    title: 'Front-end filter',
    desc: (
      <>
        <li style={{ marginBottom: 16 }}>
          Configuring Column's <code className="mx-code">filterDropdown</code> and <code className="mx-code">onFilter</code> can filter the
          table data
        </li>
        <li style={{ marginBottom: 16 }}>
          <code className="mx-code">filterDropdown</code> returns the filter component to be rendered and receives three parameters:
          <code className="mx-code">value</code>(the current filtered value)、<code className="mx-code">setFilterValue</code>(a function
          that sets the current filtered value. If the current filtered value is set to undefined or an empty string, which is regarded as
          not filtering any data) and <code className="mx-code">close</code>(a function that closes the filter drop-down box)
        </li>
        <li style={{ marginBottom: 16 }}>
          <code className="mx-code">onFilter</code> is a function that represents how to filter table data and accepts two parameters:{' '}
          <code className="mx-code">value</code>(the filtered value of the current column) and <code className="mx-code">row</code>(the data
          of the current row)
        </li>
        <li style={{ marginBottom: 16 }}>
          if you want to set default filter value, you can set<code className="mx-code">defaultFilters</code> parameter. You should know
          that
          <code className="mx-code">defaultFilters</code>和<code className="mx-code">setFilterValue</code> parameter is uncontrolled mode
          and front-end filtering
        </li>
      </>
    ),
  },
  [BackEndFilter]: {
    title: 'Back-end filter',
    desc: (
      <>
        If you want to use the backend service to filter data, you need set method named
        <code className="mx-code">setFilterValue</code>, it enable controlled mode to filer data.You should remember not to mix controlled
        and uncontrolled modes
      </>
    ),
  },
  [SingleSort]: {
    title: 'Front-end sort',
    desc: (
      <div>
        <li style={{ marginBottom: 16 }}>
          You need to specify the <code className="mx-code">sorter</code> function, specify the sorting rule, and
          <code className="mx-code">sortType</code> , The type must be one of the following three types, used to specify which sorting
          functions are displayed，<code className="mx-code">ascend</code>、<code className="mx-code">descend</code>、
          <code className="mx-code">all</code>(include ascend and descend, this is default value)
        </li>
        <li>
          you can set <code className="mx-code">defaultSortOrder</code>to set default sort direction.it is uncontrolled mode
        </li>
      </div>
    ),
  },
  [BackEndSingleSort]: {
    title: 'Back-end sort',
    desc: (
      <>
        <li style={{ marginBottom: 16 }}>
          You need to specify <code className="mx-code">sortOrder</code> property to set sort direction.
          <code className="mx-code">HandleAscendSort</code> and <code className="mx-code">handleDescendSort</code> function can listen
          Sorting changes when you click the ascending order icon and the descending order icon
        </li>
        <li style={{ marginBottom: 16 }}>Remember not to mix it with the uncontrolled mode above</li>
      </>
    ),
  },
  [MultiSort]: {
    title: 'Front-end multiple columns sort',
    desc: (
      <>
        <li style={{ marginBottom: 16 }}>
          <code className="mx-code">column.sorter</code> supports passing in an object.The multiple property of the object represent
          multi-column sorting.The <code className="mx-code">multiple</code> property is of type number. The larger the number, the higher
          the sorting priority. The <code className="mx-code">compare</code> property determine the collation of table data
        </li>
        <li style={{ marginBottom: 16 }}>
          you can specify <code className="mx-code">column.defaultSortOrder</code>property to set default sort order
        </li>
      </>
    ),
  },
  [BackEndMultiSort]: {
    title: 'Disabled',
    desc: 'The disabled state of the button',
  },
  [UncontrolledPagination]: {
    title: 'Uncontrolled pagination',
    desc: (
      <>
        We usually use backend pagination, it is recommended to implement the page turning logic yourself, because each product has its own
        page turning logic.
      </>
    ),
  },
  [ExpandRow]: {
    title: 'Expand row',
    desc: (
      <>
        When the content is too long, you can set the expanded row by <code className="mx-code">expandedRowRender</code>. If the return
        value is <code className="mx-code">null</code>, the expand button will not be rendered.
      </>
    ),
  },
  [NestedTable]: {
    title: 'Nested table',
    desc: <>Examples of nested tables, click the expand button to display the sub tables in the expanded area</>,
  },
  [TreeData]: {
    title: 'Tree data',
    desc: (
      <>
        There is a <code className="mx-code">children</code> field in <code className="mx-code">data</code>, or set as a custom field by
        <code className="mx-code">childrenColumnName</code> to display tree data
      </>
    ),
  },
  [CustomCell]: {
    title: 'Custom cell content',
    desc: (
      <>
        The content of the cell can be customized through the <code className="mx-code">render</code> field in columns
      </>
    ),
  },
  [FixedColumn]: {
    title: 'Fixed column',
    desc: (
      <>
        Set how many columns to the left are fixed through <code className="mx-code">leftFixedColumnsLength</code>. 通过 Set how many
        columns to the right are fixed through <code className="mx-code">rightFixedColumnsLength</code>
        .You must set column width, otherwise it will use default width. Note: You should use it with
        <code className="mx-code">
          scroll=
          {'{ x: number }'}
        </code>{' '}
        ，and there needs to be one column in columns without setting the width，otherwise there will be style problems。
      </>
    ),
  },
  [FixedHeader]: {
    title: 'Fixed Header',
    desc: (
      <>
        If you set <code className="mx-code">scroll={'{ y: xxx }'}</code> and the height of table exceeds the y value you set, the table
        header fixed
      </>
    ),
  },
  [GroupColumns]: {
    title: 'Group columns',
    desc: (
      <>
        <code className="mx-code">children</code> can be nested in columns for group columns
      </>
    ),
  },
  [CellMerge]: {
    title: 'Cell merge',
    desc: (
      <>
        If the data you pass <code className="mx-code">plainObject</code>, which <code className="mx-code">children</code>
        represents the content of attribute rendering, <code className="mx-code">props</code> can pass in{' '}
        <code className="mx-code">rowSpan</code> and <code className="mx-code">colSpan</code> represents the number of vertical and
        horizontal cells to be merged. The reason for this is that if you want to merge cells, the backend data will generally use a
        document database (a type of non-relational database storage)
      </>
    ),
  },
};
