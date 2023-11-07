import { Space, Button } from '@mx-design/web';
import { Basic } from '../locale';

const code = `
import { Space, Button } from '@mx-design/web';

function App() {
  return (
    <Space>
      <Button type="brand">Brand</Button>
      <Button type="outline">Outline</Button>
      <Button type="text">Text</Button>
    </Space>
  );
}`;

export const basic = {
  code,
  namespace: Basic,
};
// function App() {
//   // const columns = [
//   //   {
//   //     title: 'Name',
//   //     dataIndex: 'name',
//   //     width: 200,
//   //   },
//   //   {
//   //     title: 'Salary',
//   //     dataIndex: 'salary',
//   //   },
//   //   {
//   //     title: 'Address',
//   //     dataIndex: 'address',
//   //   },
//   //   {
//   //     title: 'Email',
//   //     dataIndex: 'email',
//   //     width: 220,
//   //   },
//   // ];
//   // const data = [
//   //   {
//   //     key: '1',
//   //     name: 'Jane Doe',
//   //     salary: 23000,
//   //     address: '32 Park Road, London',
//   //     email: 'jane.doe@example.com',
//   //   },
//   //   {
//   //     key: '2',
//   //     name: 'Alisa Ross',
//   //     salary: 25000,
//   //     address: '35 Park Road, London',
//   //     email: 'alisa.ross@example.com',
//   //   },
//   //   {
//   //     key: '3',
//   //     name: 'Kevin Sandra',
//   //     salary: 22000,
//   //     address: '31 Park Road, London',
//   //     email: 'kevin.sandra@example.com',
//   //   },
//   //   {
//   //     key: '4',
//   //     name: 'Ed Hellen',
//   //     salary: 17000,
//   //     address: '42 Park Road, London',
//   //     email: 'ed.hellen@example.com',
//   //   },
//   //   {
//   //     key: '5',
//   //     name: 'William Smith',
//   //     salary: 27000,
//   //     address: '62 Park Road, London',
//   //     email: 'william.smith@example.com',
//   //   },
//   // ];
//   const columns = [
//     {
//       title: 'Name',
//       dataIndex: 'name',
//       width: 80,
//     },
//     {
//       title: 'User Info',
//       children: [
//         {
//           title: 'Birthday',
//           dataIndex: 'birthday',
//         },
//         {
//           title: 'Address',
//           children: [
//             {
//               title: 'City',
//               dataIndex: 'city',
//             },
//             {
//               title: 'Road',
//               dataIndex: 'road',
//             },
//             {
//               title: 'No.',
//               dataIndex: 'no',
//             },
//           ],
//         },
//       ],
//     },
//     {
//       title: 'Information',
//       children: [
//         {
//           title: 'Email',
//           dataIndex: 'email',
//         },
//         {
//           title: 'Phone',
//           dataIndex: 'phone',
//         },
//       ],
//     },
//     {
//       title: 'Salary',
//       dataIndex: 'salary',
//       fixed: 'right',
//       width: 80,
//     },
//     {
//       title: 'Gender',
//       dataIndex: 'gender',
//       fixed: 'right',
//       width: 110,
//     },
//   ];
//   const data = [
//     {
//       key: '1',
//       name: 'Jane Doe',
//       salary: 23000,
//       birthday: '1994-04-21',
//       city: 'London',
//       road: 'Park',
//       no: '34',
//       phone: '12345678',
//       email: 'jane.doe@example.com',
//       gender: 'female',
//     },
//     {
//       key: '2',
//       name: 'Alisa Ross',
//       salary: 25000,
//       birthday: '1994-05-21',
//       city: 'London',
//       road: 'Park',
//       no: '37',
//       phone: '12345678',
//       email: 'alisa.ross@example.com',
//       gender: 'female',
//     },
//     {
//       key: '3',
//       name: 'Kevin Sandra',
//       salary: 22000,
//       birthday: '1992-02-11',
//       city: 'Paris',
//       road: 'Arco',
//       no: '67',
//       phone: '12345678',
//       email: 'kevin.sandra@example.com',
//       gender: 'male',
//     },
//     {
//       key: '4',
//       name: 'Ed Hellen',
//       salary: 17000,
//       birthday: '1991-06-21',
//       city: 'London',
//       road: 'Park',
//       no: '317',
//       phone: '12345678',
//       email: 'ed.hellen@example.com',
//       gender: 'female',
//     },
//     {
//       key: '5',
//       name: 'William Smith',
//       salary: 27000,
//       birthday: '1996-08-21',
//       city: 'Paris',
//       road: 'Park',
//       no: '114',
//       phone: '12345678',
//       email: 'william.smith@example.com',
//       gender: 'male',
//     },
//   ];
//   return (
//     <Table
//       columns={columns}
//       scroll={{
//         x: 1200,
//         y: 1000,
//       }}
//       rowSelection={{
//         type: 'checkbox',
//       }}
//       border={{
//         wrapper: true,
//         cell: true,
//       }}
//       data={data}
//       leftFixedColumnsLength={1}
//       rightFixedColumnsLength={2}
//     />
//   );
// }
