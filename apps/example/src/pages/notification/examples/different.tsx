import { Different } from '../locale';

const code = `
import { useNotification, Space, Button } from '@mx-design/web';

function App() {
  const Notification = useNotification();
  return (
    <Space>
      <Button
        onClick={() => {
          Notification.add({
            title: 'Title',
            type: 'info',
            content: 'This is an info notification!',
          });
        }}
      >
        Info Notification
      </Button>
      <Button
        onClick={() => {
          Notification.add({
            title: 'Title',
            type: 'warning',
            content: 'This is an warning notification!',
          });
        }}
        status="warning"
      >
        Warning Notification
      </Button>
      <Button
        onClick={() => {
          Notification.add({
            title: 'Title',
            type: 'success',
            content: 'This is an success notification!',
          });
        }}
        status="success"
      >
        Success Notification
      </Button>
      <Button
        onClick={() => {
          Notification.add({
            title: 'Title',
            type: 'error',
            content: 'This is an error notification!',
          });
        }}
        status="error"
      >
        Error Notification
      </Button>
      <Button
        onClick={() => {
          Notification.add({
            title: 'Title',
            type: 'loading',
            content: 'This is an loading notification!',
          });
        }}
        status="default"
      >
        Loading Notification
      </Button>
    </Space>
  );
};`;

export const different = {
  code,
  namespace: Different,
};
