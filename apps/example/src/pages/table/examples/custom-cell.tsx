import { CustomCell } from '../locale';

const code = `
import { Table, Tag } from '@mx-design/web';

function App() {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      width: 174,
      render: (text) => <Tag type="light" status="brand">{text}</Tag>, 
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
      address: '32 Park Road, London',
      email: 'jane.doe@example.com',
    },
    {
      key: '2',
      name: 'Alisa Ross',
      salary: 25000,
      address: '35 Park Road, London',
      email: 'alisa.ross@example.com',
    },
    {
      key: '3',
      name: 'Kevin Sandra',
      salary: 22000,
      address: '31 Park Road, London',
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
      name: 'William Smith',
      salary: 27000,
      address: '62 Park Road, London',
      email: 'william.smith@example.com',
    },
  ];

  return <Table columns={columns} data={data} />;
}`;

export const customCell = {
  code,
  namespace: CustomCell,
};
