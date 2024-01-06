import { Split } from '../locale';

const code = `
import { Space } from '@mx-design/web';

function App() {
  return (
    <Space split={<span style={{ marginRight: '8px', color: '#ddd' }}>/</span>}>
      <div>Link 1</div>
      <div>Link 2</div>
      <div>Link 3</div>
    </Space>
  );
}`;

export const split = {
  code,
  namespace: Split,
};
