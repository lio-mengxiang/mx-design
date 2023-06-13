import { CustomStyle } from '../locale';

const code = `
import { useNotification, Button } from '@mx-design/web';

function App() {
  const Notification = useNotification();
  return (
    <Button
      onClick={() => {
        Notification.add({
          type: 'info',
          closable: true,
          style: { width: 500 },
          title: 'Notification',
          content: 'This is an info notification!'
        });
      }}
    >
      Open Notification
    </Button>
  );
};`;

export const customStyle = {
  code,
  namespace: CustomStyle,
};
