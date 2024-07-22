import { Close } from '../locale';

const code = `
import { MessageStore, Button, Space } from '@mx-design/web';

function App() {
  return (
    <Space>
      <Button
        onClick={() => {
          MessageStore.add({
            id: 'aa',
            type: 'info',
            content: 'This is an info message!',
          });
        }}
      >
        Open Message
      </Button>
      <Button
        status="default"
        onClick={() => {
          MessageStore.remove('aa');
        }}
      >
        Close Message
      </Button>
    </Space>
  );
}`;

export const close = {
  code,
  namespace: Close,
};
