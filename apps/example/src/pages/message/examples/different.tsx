import { Different } from '../locale';

const code = `
import { MessageStore, Space, Button } from '@mx-design/web';

function App() {
  return (
    <Space>
      <Button
        onClick={() => {
          MessageStore.add({
            type: 'info',
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
            content: 'This is an success message!',
          });
        }}
        status="success"
      >
        Success Message
      </Button>
      <Button
        onClick={() => {
          MessageStore.add({
            type: 'error',
            content: 'This is an error message!',
          });
        }}
        status="error"
      >
        Error Message
      </Button>
      <Button
        onClick={() => {
          MessageStore.add({
            type: 'loading',
            content: 'This is an loading message!',
          });
        }}
        status="default"
      >
        Loading Message
      </Button>
    </Space>
  );
};`;

export const different = {
  code,
  namespace: Different,
};
