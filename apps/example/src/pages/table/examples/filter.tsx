import { Filter } from '../locale';

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
function App() {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      width: 174,
      filterDropdown: ({ value, setFilterValue, close }) => {
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
                    setFilterValue(state);
                    close();
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
      onFilter: (value, row) => (value ? row.name.indexOf(value) !== -1 : true),
    },
    {
      title: 'Salary',
      dataIndex: 'salary',
      width: 140,
    },
    {
      title: 'Job',
      dataIndex: 'job',
      filterDropdown: ({ value, setFilterValue, close }) => {
        const [state, setState] = React.useState(value || []);

        return (
          <div style={{ padding: '12px 16px' }}>
            <Space direction="vertical" size="0">
              <CheckboxGroup
                options={options}
                onChange={(value) => {
                  setState(value);
                }}
                value={state}
                direction="vertical"
              />
              <Space>
                <Button
                  type="brand"
                  onClick={() => {
                    if(Array.isArray(state)) {
                      state.length === 0 ? setFilterValue(undefined) : setFilterValue(state);
                    }
                    close();
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
      onFilter: (value, row) => value.includes(row.job),
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

  return <Table columns={columns} data={data} />;
}`;

export const filter = {
  code,
  namespace: Filter,
};
