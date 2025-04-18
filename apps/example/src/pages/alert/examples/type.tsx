import { Type } from '../locale';

const code = `
import { Alert } from '@mx-design/web';

function App() {
  return (
    <Space direction='vertical'>
      <Alert type="info" content="Here is an info text" />
      <Alert type="warning" content="Here is a warning text" />
      <Alert type="success" content="Here is a success text" />
      <Alert type="error" content="Here is an error text" />
      <Alert type="loading" content="Here is an loading text" />
    </Space>
  );
}`;

export const type = {
  code,
  namespace: Type,
};
