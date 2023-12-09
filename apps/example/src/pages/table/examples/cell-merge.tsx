import { CellMerge } from '../locale';

const code = `
import { Table } from '@mx-design/web';

function isPlainObject(value) {
  return Object.prototype.toString.call(value) === '[object Object]';
}

function App() {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      width: 174,
      render: (col, record, index) => {
        if (isPlainObject(record.name)) {
          const valueObj = record.name;
          return {
            children: valueObj.children,
            props: valueObj.props,
          };
        }
        return col;
      },
    },
    {
      title: 'Salary',
      dataIndex: 'salary',
      width: 100,
    },
    {
      title: 'Address',
      dataIndex: 'address',
      width: '40%',
      render: (col, record, index) => {
        if (isPlainObject(record.address)) {
          const valueObj = record.address;
          return {
            children: valueObj.children,
            props: valueObj.props,
          };
        }
        if (col) return col;
        return {
          props: {
            colSpan: 0,
            rowSpan: 0,
          },
        };
      },
    },
    {
      title: 'Email',
      dataIndex: 'email',
      width: '60%',
    },
  ];
  const data = [
    {
      key: '1',
      name: 'Jane Doe',
      salary: 23000,
      address: {
        children: '32 Park Road, London',
        props: {
          rowSpan: 3,
        },
      },
      email: 'jane.doe@example.com',
    },
    {
      key: '2',
      name: 'Alisa Ross',
      salary: 25000,
      email: 'alisa.ross@example.com',
    },
    {
      key: '3',
      name: 'Kevin Sandra',
      salary: 22000,
      email: 'kevin.sandra@example.com',
    },
    {
      key: '4',
      name: 'Ed Hellen',
      salary: 17000,
      address: '42 Park Road, London',
      email: 'ed.hellen@example.com',
    },
    {
      key: '5',
      name: {
        children: 'William Smith',
        props: {
          colSpan: 2,
        },
      },
      salary: 27000,
      address: '62 Park Road, London',
    },
  ];

  return (
    <Table
      columns={columns}
      data={data}
      pagination={false}
      border={{
        wrapper: true,
        cell: true,
      }}
    />
  );
}`;

export const cellMerge = {
  code,
  namespace: CellMerge,
};
