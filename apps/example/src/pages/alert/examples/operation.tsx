import { Operation } from '../locale';

const code = `
import { Alert } from '@mx-design/web';

function App() {
  return <Alert content='Here is an example text.' operation={<span style={{ marginLeft: '8px', cursor: 'pointer' }}>Button</span>} />;
}`;

export const operation = {
  code,
  namespace: Operation,
};
