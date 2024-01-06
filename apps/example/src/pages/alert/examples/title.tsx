import { Title } from '../locale';

const code = `
import { Alert, Space } from '@mx-design/web';

function App() {
  return (
    <Space direction="vertical">
      <Alert type="info" title="Info" content="Here is an info text" />
      <Alert type="warning" title="Warning" content="Here is a warning text" />

      <Alert type="success" title="Success" content="Here is a success text" />
      <Alert type="error" title="Error" content="Here is an error text" />
    </Space>
  );
}
`;

export const title = {
  code,
  namespace: Title,
};
