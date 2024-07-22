import { CustomStyle } from '../locale';

const code = `
import { NotificationStore, Button } from '@mx-design/web';

function App() {
  return (
    <Button
      onClick={() => {
        NotificationStore.add({
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
