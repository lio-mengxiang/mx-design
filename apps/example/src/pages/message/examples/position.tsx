import { Position } from '../locale';

const code = `
import { MessageStore, Button } from '@mx-design/web';

function App() {
  return (
    <Space direction="vertical">
      <Space>
        <Button
          status="warning"
          onClick={() => {
            MessageStore.add({
              type: 'warning',
              position: 'top-left',
              content: 'This is an info message!',
            });
          }}
        >
          Top Left
        </Button>
        <Button
          status="success"
          onClick={() => {
            MessageStore.add({
              type: 'success',
              position: 'top',
              content: 'This is an info message!',
            });
          }}
        >
          Top
        </Button>
        <Button
          status="default"
          onClick={() => {
            MessageStore.add({
              type: 'loading',
              position: 'top-right',
              content: 'This is an info message!',
            });
          }}
        >
          Top Right
        </Button>
      </Space>
      <Space>
        <Button
          status="warning"
          onClick={() => {
            MessageStore.add({
              type: 'warning',
              position: 'bottom-left',
              content: 'This is an info message!',
            });
          }}
        >
          Bottom Left
        </Button>
        <Button
          status="success"
          onClick={() => {
            MessageStore.add({
              type: 'success',
              position: 'bottom',
              content: 'This is an info message!',
            });
          }}
        >
          Bottom
        </Button>
        <Button
          status="default"
          onClick={() => {
            MessageStore.add({
              type: 'loading',
              position: 'bottom-right',
              content: 'This is an info message!',
            });
          }}
        >
          Bottom Right
        </Button>
      </Space>
    </Space>
  );
}`;

export const position = {
  code,
  namespace: Position,
};
