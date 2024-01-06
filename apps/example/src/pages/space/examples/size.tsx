import { Size } from '../locale';

const code = `
import { Space } from '@mx-design/web';

function App() {
  return (
    <Space size="24px">
      <Button>You are so good</Button>
      <Button>You are so handsome</Button>
      <Button>You are so pretty</Button>
    </Space>
  );
}`;

export const size = {
  code,
  namespace: Size,
};
