import { Custom } from '../locale';

const code = `
import { MessageStore, Space, Button, IconSmile, IconSun } from '@mx-design/web';

function App() {
  return (
    <Space>
      <Button
        onClick={() => {
          MessageStore.add({
            type: 'info',
            icon: <IconSmile size="18px" />,
            content: 'This is an info message!',
          });
        }}
      >
        Info Message
      </Button>
      <Button
        onClick={() => {
          MessageStore.add({
            type: 'warning',
            icon: <IconStop size="18px" />,
            content: 'This is an warning message!',
          });
        }}
        status="warning"
      >
        Warning Message
      </Button>
      <Button
        onClick={() => {
          MessageStore.add({
            type: 'success',
            icon: <IconSun size="18px" />,
            content: 'This is an success message!',
          });
        }}
        status="success"
      >
        Success Message
      </Button>
    </Space>
  );
};`;

export const custom = {
  code,
  namespace: Custom,
};
