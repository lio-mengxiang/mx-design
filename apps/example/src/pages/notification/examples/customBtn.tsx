import { CustomBtn } from '../locale';

const code = `
import { useNotification, Space, Button } from '@mx-design/web';

function App() {
  const Notification = useNotification();

  function updateNotification() {
    const id = Notification.add({
      title: 'Notification',
      type: 'info',
      content: 'This is a notification!',
      duration: null,
      btn: (
        <span>
          <Button
            status='default'
            onClick={() => Notification.remove(id)}
            style={{ margin: '0 12px' }}
          >
            Cancel
          </Button>
          <Button onClick={() => Notification.remove(id)}>
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
