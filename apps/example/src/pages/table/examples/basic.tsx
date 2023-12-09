import { Basic } from '../locale';

const code = `
import { Table } from '@mx-design/web';

function App() {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      width: 174,
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
      key: '7',
      name: 'Kevin Sandra',
      salary: 22000,
      address: '31 Park Road, London',
      email: 'kevin.sandra@example.com',
    },
  ];

  return <Table columns={columns} data={data} />;
}`;

export const basic = {
  code,
  namespace: Basic,
};
