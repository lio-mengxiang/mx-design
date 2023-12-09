import { BackEndMultiSort } from '../locale';

const code = `
import { Table } from '@mx-design/web';

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

const sortFns = (sortDirectionA, sortDirectionB) => [
  {
    sortFn: (a, b) => {
      if(!sortDirectionA) return 0;
      if (sortDirectionA === 'ascend') return a.scoreA - b.scoreA;
      if (sortDirectionA === 'descend') return b.scoreA - a.scoreA;
    },
  },
  {
    sortFn: (a, b) => {
      if(!sortDirectionB) return 0;
      if (sortDirectionB === 'ascend') return a.scoreB - b.scoreB;
      if (sortDirectionB === 'descend') return b.scoreB - a.scoreB;
    },
  },
];


function App() {
  const [sortOder, setSortOrder] = React.useState({});
  const [tableData, setTableData] = React.useState(data);
  /**
   * @zh 我们用 postRequest 来模拟后端处理过程
   * @en you can request back-end service
   */
  const postRequest = ({ scoreA, scoreB }) =>
    new Promise((res) => {
      setTimeout(() => {
        if (!scoreA && !scoreB) {
          setTableData(data);
          return res();
        }
        const compareSorter = sortFns(scoreA, scoreB);
        const newTableData = [...data].sort((a, b) => {
          for (let i = 0; i < compareSorter.length; i++) {
            const { sortFn } = compareSorter[i];
            const result = sortFn(a, b);
            if (result !== 0) return result;
          }
          return 0;
        });
        setTableData(newTableData);
        res();
      }, 0);
    });

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
    },
    {
      title: 'Score A',
      dataIndex: 'scoreA',
      sortOrder: sortOder.scoreA,
      handleAscendSort(currentDirection) {
        if (currentDirection !== 'ascend') {
          postRequest({
            scoreA: 'ascend',
            scoreB: sortOder.scoreB,
          }).then(() => {
            setSortOrder({
              scoreA: 'ascend',
              scoreB: sortOder.scoreB,
            });
          });
        } else {
          postRequest({
            scoreB: sortOder.scoreB,
          }).then(() => {
            setSortOrder({
              scoreB: sortOder.scoreB,
            });
          });
        }
      },
      handleDescendSort(currentDirection) {
        if (currentDirection !== 'descend') {
          postRequest({
            scoreA: 'descend',
            scoreB: sortOder.scoreB,
          }).then(() => {
            setSortOrder({
              scoreA: 'descend',
              scoreB: sortOder.scoreB,
            });
          });
        } else {
          postRequest({
            scoreB: sortOder.scoreB,
          }).then(() => {
            setSortOrder({
              scoreB: sortOder.scoreB,
            });
          });
        }
      },
      sorter: {
        multiple: 3,
      },
    },
    {
      title: 'Score B',
      dataIndex: 'scoreB',
      sortOrder: sortOder.scoreB,
      handleAscendSort(currentDirection) {
        if (currentDirection !== 'ascend') {
          /**
           * @zh 我们用 postRequest 来模拟后端请求
           * @en you can request back-end service
           */
          postRequest({
            scoreA: sortOder.scoreA,
            scoreB: 'ascend',
          }).then(() => {
            setSortOrder({
              scoreA: sortOder.scoreA,
              scoreB: 'ascend',
            });
          });
        } else {
          postRequest({
            scoreB: sortOder.scoreA,
          }).then(() => {
            setSortOrder({
              scoreB: sortOder.scoreA,
            });
          });
        }
      },
      handleDescendSort(currentDirection) {
        if (currentDirection !== 'descend') {
          postRequest({
            scoreA: sortOder.scoreA,
            scoreB: 'descend',
          }).then(() => {
            setSortOrder({
              scoreA: sortOder.scoreA,
              scoreB: 'descend',
            });
          });
        } else {
          postRequest({
            scoreA: sortOder.scoreA,
          }).then(() => {
            setSortOrder({
              scoreA: sortOder.scoreA,
            });
          })
        };
      },
      sorter: {
        multiple: 2,
      },      
    },
    {
      title: 'Score C',
      dataIndex: 'scoreC',
    }
  ];
  return <Table columns={columns} data={tableData} />;
}`;

export const backEndMultiSort = {
  code,
  namespace: BackEndMultiSort,
};
