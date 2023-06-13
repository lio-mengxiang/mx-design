import { Size } from '../locale';

const code = `
import { Spin, Space } from '@arco-design/web-react';

function App() {
  return (
    <Space size={40}>
      <Spin size={20} />
      <Spin size={30} />
      <Spin size={40} />
    </Space>
  );
};`;

export const size = {
  code,
  namespace: Size,
};
