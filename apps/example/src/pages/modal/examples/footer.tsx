import { Footer } from '../locale';

const code = `
import { ModalStore, Button, Space } from '@mx-design/web';

function App() {
  return (
    <Space>
      <Button
        onClick={() => {
          const modalId = ModalStore.add({
            title: 'Modal Title',
            content: (
              <div>
                You can customize modal footer
              </div>
            ),
            visible: true,
            onCancel: () => ModalStore.remove(modalId),
            footer: <Button onClick={() => ModalStore.remove(modalId)}>OK</Button>
          });
        }}
      >
        Open Modal with customized footer
      </Button>
      <Button
        onClick={() => {
          const modalId = ModalStore.add({
            title: 'Modal Title',
            content: (
              <div>
                You can customize modal footer
              </div>
            ),
            visible: true,
            footerAlign: 'left',
            onCancel: () => ModalStore.remove(modalId),
            footer: <Button onClick={() => ModalStore.remove(modalId)}>I'm left</Button>
          });
        }}
      >
         Open Modal with customized footer
      </Button>
      <Button
        onClick={() => {
          const modalId = ModalStore.add({
            title: 'Modal Title',
            content: (
              <div>
                You can customize modal footer
              </div>
            ),
            visible: true,
            onCancel: () => ModalStore.remove(modalId),
            footer: null
          });
        }}
      >
        Open Modal without footer
      </Button>
    </Space>
  );
}`;

export const footer = {
  code,
  namespace: Footer,
};
