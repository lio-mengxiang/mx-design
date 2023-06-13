import { Custom } from '../locale';

const code = `
import { Alert, Space, IconSmileFilling, IconHelpFilling } from '@mx-design/web';

function App() {
  return (
    <Space direction="vertical">
      <Alert icon={<IconSmileFilling size="18px" />} type="info" content="Here is an info text" />
      <Alert icon={<IconHelpFilling size="18px" />} type="warning" title="Warning" content="Here is a warning text" />
    </Space>
  );
}
`;

export const custom = {
  code,
  namespace: Custom,
};
