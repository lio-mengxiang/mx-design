import { GroupColumns } from '../locale';

const code = `
import { Table } from '@mx-design/web';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    width: 140,
  },
  {
    title: 'User Info',
    children: [
      {
        title: 'Birthday',
        dataIndex: 'birthday',
      },
      {
        title: 'Address',
        children: [
          {
            title: 'City',
            dataIndex: 'city',
          },
          {
            title: 'Road',
            dataIndex: 'road',
          },
          {
            title: 'No.',
            dataIndex: 'no',
          },
        ],
      },
    ],
  },
  {
    title: 'Information',
    children: [
      {
        title: 'Email',
        dataIndex: 'email',
      },
      {
        title: 'Phone',
        dataIndex: 'phone',
      },
    ],
  },
  {
    title: 'Salary',
    dataIndex: 'salary',
    width: 120,
  },
  {
    title: 'Gender',
    dataIndex: 'gender',
    width: 110,
  },
];
const data = [
  {
    key: '1',
    name: 'Jane Doe',
    salary: 23000,
    birthday: '1994-04-21',
    city: 'London',
    road: 'Park',
    no: '34',
    phone: '12345678',
    email: 'jane.doe@example.com',
    gender: 'female',
  },
  {
    key: '2',
    name: 'Alisa Ross',
    salary: 25000,
    birthday: '1994-05-21',
    city: 'London',
    road: 'Park',
    no: '37',
    phone: '12345678',
    email: 'alisa.ross@example.com',
    gender: 'female',
  },
  {
    key: '3',
    name: 'Kevin Sandra',
    salary: 22000,
    birthday: '1992-02-11',
    city: 'Paris',
    road: 'Arco',
    no: '67',
    phone: '12345678',
    email: 'kevin.sandra@example.com',
    gender: 'male',
  },
  {
    key: '4',
    name: 'Ed Hellen',
    salary: 17000,
    birthday: '1991-06-21',
    city: 'London',
    road: 'Park',
    no: '317',
    phone: '12345678',
    email: 'ed.hellen@example.com',
    gender: 'female',
  },
  {
    key: '5',
    name: 'William Smith',
    salary: 27000,
    birthday: '1996-08-21',
    city: 'Paris',
    road: 'Park',
    no: '114',
    phone: '12345678',
    email: 'william.smith@example.com',
    gender: 'male',
  },
];

function App() {
  return (
    <Table
      leftFixedColumnsLength={1}
      rightFixedColumnsLength={2}
      expandedRowRender={(record) => \`\${record.name}'s address is \${record.address}\`}
      rowSelection={{}}
      scroll={{
        x: 1200,
      }}
      border={{
        wrapper: true,
        cell: true,
      }}
      columns={columns}
      data={data}
    />
  );
}`;

export const groupColumns = {
  code,
  namespace: GroupColumns,
};
