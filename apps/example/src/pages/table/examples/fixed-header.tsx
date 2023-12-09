import { FixedHeader } from '../locale';

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
      key: '4',
      name: 'John Smith',
      salary: 24000,
      address: '28 Park Road, London',
      email: 'john.smith@example.com',
    },
    {
      key: '5',
      name: 'Emily Johnson',
      salary: 26000,
      address: '29 Park Road, London',
      email: 'emily.johnson@example.com',
    },
    {
      key: '6',
      name: 'Michael Brown',
      salary: 27000,
      address: '30 Park Road, London',
      email: 'michael.brown@example.com',
    },
    {
      key: '8',
      name: 'Sophia Davis',
      salary: 21000,
      address: '33 Park Road, London',
      email: 'sophia.davis@example.com',
    },
    {
      key: '9',
      name: 'William Wilson',
      salary: 28000,
      address: '34 Park Road, London',
      email: 'william.wilson@example.com',
    },
    {
      key: '10',
      name: 'Olivia Thompson',
      salary: 23000,
      address: '36 Park Road, London',
      email: 'olivia.thompson@example.com',
    },
    {
      key: '11',
      name: 'James Taylor',
      salary: 25000,
      address: '37 Park Road, London',
      email: 'james.taylor@example.com',
    },
    {
      key: '12',
      name: 'Ava Martinez',
      salary: 22000,
      address: '38 Park Road, London',
      email: 'ava.martinez@example.com',
    },
    {
      key: '13',
      name: 'Liam Anderson',
      salary: 29000,
      address: '39 Park Road, London',
      email: 'liam.anderson@example.com',
    },
    {
      key: '14',
      name: 'Emma Thomas',
      salary: 24000,
      address: '40 Park Road, London',
      email: 'emma.thomas@example.com',
    },
  ];

  return <Table columns={columns} data={data} scroll={{ y: 172 }} />;
}`;

export const fixedHeader = {
  code,
  namespace: FixedHeader,
};
