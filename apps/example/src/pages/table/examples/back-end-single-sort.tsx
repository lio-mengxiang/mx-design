import { BackEndSingleSort } from '../locale';

const code = `
import { Table, Input } from '@mx-design/web';
const data = [
  {
    key: '1',
    name: 'A',
    age: 18,
    scoreA: 100,
    scoreB: 60,
    scoreC: 70,
  },
  {
    key: '2',
    name: 'B',
    age: 17,
    scoreA: 100,
    scoreB: 90,
    scoreC: 80,
  },
  {
    key: '3',
    name: 'C',
    age: 19,
    scoreA: 100,
    scoreB: 70,
    scoreC: 60,
  },
  {
    key: '4',
    name: 'D',
    age: 15,
    scoreA: 80,
    scoreB: 70,
    scoreC: 100,
  },
  {
    key: '5',
    name: 'E',
    age: 20,
    scoreA: 80,
    scoreB: 70,
    scoreC: 90,
  },
];

function App() {
  const [sortOder, setSortOrder] = React.useState({});
  const [tableData, setTableData] = React.useState(data);
  /**
   * @zh 我们用 postRequest 来模拟后端处理过程
   * @en you can request back-end service
   */
  const postRequest = ({ age }) => new Promise(res => {
    setTimeout(() => {
      if(!age){
        setTableData(data);
        return res();
      }
      if(age === 'ascend') {
        setTableData(data.slice(0).sort((a, b) => a.age - b.age));
        return res();
      }
      if(age === 'descend') {
        setTableData(data.slice(0).sort((a, b) => b.age - a.age));
        return res();
      }
    }, 0)
  });

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      sortOrder: sortOder.age,
      handleAscendSort(currentDirection) {
        console.log('currentDirection: ', currentDirection);
        if (currentDirection !== 'ascend') {
          /**
           * @zh 我们用 postRequest 来模拟后端请求
           * @en you can request back-end service
           */
          postRequest({
            age: 'ascend',
          }).then(() => {
            setSortOrder({
              age: 'ascend',
            });
          })          
        } else {
          postRequest({}).then(() => {
            setSortOrder({});
          })
        }
      },
      handleDescendSort(currentDirection) {
        if (currentDirection !== 'descend') {
          postRequest({
            age: 'descend',
          }).then(() => {
            setSortOrder({
              age: 'descend',
            });
          })    
        } else {
          postRequest({}).then(() => {
            setSortOrder({});
          })
        }
      },
    },
    {
      title: 'Score A',
      dataIndex: 'scoreA',
    },
    {
      title: 'Score B',
      dataIndex: 'scoreB',
    },
    {
      title: 'Score C',
      dataIndex: 'scoreC',
    },
  ];

  return <Table columns={columns} data={tableData} />;
}`;

export const backEndSingleSort = {
  code,
  namespace: BackEndSingleSort,
};
