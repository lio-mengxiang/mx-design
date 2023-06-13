import { NoIcon } from '../locale';

const code = `
import { Alert, Space } from '@mx-design/web';

function App() {
  return (
    <Space direction="vertical">
      <Alert showIcon={false} type="info" content="Here is an info text" />
      <Alert showIcon={false} type="warning" title="Warning" content="Here is a warning text" />
    </Space>
  );
}
`;

export const noIcon = {
  code,
  namespace: NoIcon,
};
