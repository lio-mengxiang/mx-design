import { Basic } from '../locale';

const code = `
import { Space } from '@mx-design/web';

function App() {
  return (
    <Space>
      <Button>You are so good</Button>
      <Button>You are so handsome</Button>
      <Button>You are so pretty</Button>
    </Space>
  );
}`;

export const basic = {
  code,
  namespace: Basic,
};
