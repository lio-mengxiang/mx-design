import { TreeData } from '../locale';

const code = `
import { Table, Radio, Space } from '@mx-design/web';

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
    children: [
      {
        key: '1-1',
        name: 'Christina',
        address: '332 Park Road, London',
        email: 'christina@example.com',
      },
    ],
  },
  {
    key: '2',
    name: 'Alisa Ross',
    salary: 25000,
    address: '35 Park Road, London',
    email: 'alisa.ross@example.com',
    children: [
      {
        key: '2-1',
        name: 'Ed Hellen',
        salary: 17000,
        address: '42 Park Road, London',
        email: 'ed.hellen@example.com',
        children: [
          {
            key: '2-1-1',
            name: 'Eric Miller',
            salary: 23000,
            address: '67 Park Road, London',
            email: 'eric.miller@example.com',
          },
          {
            key: '2-1-2',
            name: 'Tom Jerry',
            salary: 666,
            address: '67 Park Road, London',
            email: 'tom.jerry@example.com',
          },
        ],
      },
      {
        key: '2-2',
        name: 'William Smith',
        salary: 27000,
        address: '62 Park Road, London',
        email: 'william.smith@example.com',
      },
      {
        key: '2-3',
        name: 'George Bush',
        salary: 24000,
        address: '62 Park Road, London',
        email: 'george.bush@example.com',
      },
    ],
  },
  {
    key: '7',
    name: 'Kevin Sandra',
    salary: 22000,
    address: '31 Park Road, London',
    email: 'kevin.sandra@example.com',
  },
];

const RadioGroup = Radio.Group;

function App() {
  const [checkStrictly, setCheckStrictly] = React.useState(false);

  return (
    <Space direction="vertical">
      <RadioGroup type="button" value={checkStrictly} onChange={(checked) => setCheckStrictly(checked)}>
        <Radio value={false}>not checkStrictly</Radio>
        <Radio value>checkStrictly</Radio>
      </RadioGroup>
      <Table
        rowSelection={{
          type: 'checkbox',
          onChange: (selectedRowKeys, selectedRows) => {
            console.log(selectedRowKeys, selectedRows);
          },
          checkStrictly,
        }}
        columns={columns}
        data={data}
      />
    </Space>
  );
}`;

export const treeData = {
  code,
  namespace: TreeData,
};
