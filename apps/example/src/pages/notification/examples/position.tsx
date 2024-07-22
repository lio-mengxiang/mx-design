import { Position } from '../locale';

const code = `
import { Button } from '@mx-design/web';

function App() {
  return (
    <Space direction="vertical">
      <Space>
        <Button
          status="warning"
          onClick={() => {
            NotificationStore.add({
              type: 'warning',
              title: 'Notification',
              position: 'top-left',
              content: 'This is an info Notification!',
            });
          }}
        >
          Top Left
        </Button>
        <Button
          status="success"
          onClick={() => {
            NotificationStore.add({
              type: 'success',
              title: 'Notification',
              position: 'top',
              content: 'This is an info Notification!',
            });
          }}
        >
          Top
        </Button>
        <Button
          status="default"
          onClick={() => {
            NotificationStore.add({
              type: 'loading',
              title: 'Notification',
              position: 'top-right',
              content: 'This is an info Notification!',
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
            NotificationStore.add({
              type: 'warning',
              title: 'Notification',
              position: 'bottom-left',
              content: 'This is an info Notification!',
            });
          }}
        >
          Bottom Left
        </Button>
        <Button
          status="success"
          onClick={() => {
            NotificationStore.add({
              type: 'success',
              title: 'Notification',
              position: 'bottom',
              content: 'This is an info Notification!',
            });
          }}
        >
          Bottom
        </Button>
        <Button
          status="default"
          onClick={() => {
            NotificationStore.add({
              type: 'loading',
              title: 'Notification',
              position: 'bottom-right',
              content: 'This is an info Notification!',
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
