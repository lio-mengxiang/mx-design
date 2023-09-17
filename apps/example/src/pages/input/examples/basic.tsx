import { Basic } from '../locale';

const code = `
import { Input } from '@mx-design/web';

function App() {
  return <Input style={{ width: 350 }} placeholder="Please Enter something" />;
}`;

export const basic = {
  code,
  namespace: Basic,
};
