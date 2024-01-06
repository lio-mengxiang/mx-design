import { BackEndFilter } from '../locale';

const code = `
import { Table, Input } from '@mx-design/web';
const CheckboxGroup = Checkbox.Group;

const options = [
  {
    label: 'programmer',
    value: 'programmer',
  },
  {
    label: 'cook',
    value: 'cook',
  },
  {
    label: 'athletes',
    value: 'athletes',
  },
];
const miniBtnStyle = { fontSize: '12px', padding: '0 11px', height: '24px' };

const data = [
  {
    key: '1',
    name: 'Jane Doe',
    salary: 23000,
    job: 'programmer',
    email: 'jane.doe@example.com',
  },
  {
    key: '2',
    name: 'Alisa Ross',
    salary: 25000,
    job: 'cook',
    email: 'alisa.ross@example.com',
  },
  {
    key: '3',
    name: 'Kevin Sandra',
    salary: 22000,
    job: 'programmer',
    email: 'kevin@example.com',
  },
  {
    key: '4',
    name: 'Ed Hellen',
    salary: 17000,
    job: 'athletes',
    email: 'ed.hellen@example.com',
  },
  {
    key: '5',
    name: 'William Smith',
    salary: 27000,
    job: 'athletes',
    email: 'william@example.com',
  },
];

function App() {
  const [name, setName] = React.useState('');
  const [tableData, setTableData] = React.useState(data)
  /**
   * @zh 我们用 postRequest 来模拟后端处理过程
   * @en you can request back-end service
   */
  const postRequest = ({ name }) =>
    new Promise((res) => {
      setTimeout(() => {
        setTableData(data.filter((row) => (name ? row.name.indexOf(name) !== -1 : true)));
      res();
    }, 0);
  });

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      width: 174,
      filteredValue: name,
      filterDropdown: ({ value, close }) => {
        const [state, setState] = React.useState(value || '');
        return (
          <div style={{ padding: '12px 16px' }}>
            <Space direction="vertical" size="16px">
              <Input.Search
                allowClear
                value={state}
                placeholder="Search name"
                onChange={(value) => {
                  setState(value);
                }}
              />
              <Space>
                <Button
                  type="brand"
                  onClick={() => {
                    /**
                     * @zh 我们用 postRequest 来模拟后端请求
                     * @en you can request back-end service
                     */
                    postRequest({
                      name: state
                    }).then(() => {
                      setName(state);
                      close();
                    })
                  }}
                  themeStyle={miniBtnStyle}
                >
                  Confirm
                </Button>
                <Button
                  type="outline"
                  status="default"
                  onClick={() => {
                    close();
                  }}
                  themeStyle={miniBtnStyle}
                >
                  Cancel
                </Button>
              </Space>
            </Space>
          </div>
        );
      },
    },
    {
      title: 'Salary',
      dataIndex: 'salary',
      width: 140,
    },
    {
      title: 'Job',
      dataIndex: 'job',
      width: '40%',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      width: '60%',
    },
  ];

  return <Table columns={columns} data={tableData} />;
}`;

export const backEndFilter = {
  code,
  namespace: BackEndFilter,
};
