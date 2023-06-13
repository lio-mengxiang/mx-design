import { Basic } from '../locale';

const code = `
import { IconSmile } from '@mx-design/web';

function App() {
  return (
    <Space>
      <IconSmile size="2em" />
      <IconSmile size="2em" style={{ color: '#8a2be2' }} />
    </Space>
  )
}`;

export const basic = {
  code,
  namespace: Basic,
};
