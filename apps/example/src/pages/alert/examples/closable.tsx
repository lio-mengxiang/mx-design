import { Closable } from '../locale';

const code = `
import { Alert, Space } from '@mx-design/web';

function App() {
  return (
    <Space direction='vertical'>
      <Alert closable type="info" content="Here is an info text" />
      <Alert closable type="warning" title="Warning" content="Here is a warning text" />
      <Alert closable type="success" content="Here is a success text" />
      <Alert closable type="error" title="Error" content="Here is an error text" />
    </Space>
  );
}`;

export const closable = {
  code,
  namespace: Closable,
};
