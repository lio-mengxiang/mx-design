import { CustomBtn } from '../locale';

const code = `
import { NotificationStore, Space, Button } from '@mx-design/web';

function App() {
  function updateNotification() {
    const id = NotificationStore.add({
      title: 'Notification',
      type: 'info',
      content: 'This is a notification!',
      duration: null,
      btn: (
        <span>
          <Button
            status='default'
            onClick={() => NotificationStore.remove(id)}
            style={{ margin: '0 12px' }}
          >
            Cancel
          </Button>
          <Button onClick={() => NotificationStore.remove(id)}>
            Ok
          </Button>
        </span>
      ),
    });
  }

  return (
    <Button onClick={updateNotification}>
      Open Notification
    </Button>
  );
};`;

export const customBtn = {
  code,
  namespace: CustomBtn,
};
