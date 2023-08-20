import { Footer } from '../locale';

const code = `
import { useModal, Button, Space } from '@mx-design/web';

function App() {
  const Modal = useModal();
  return (
    <Space>
      <Button
        onClick={() => {
          const modalId = Modal.add({
            title: 'Modal Title',
            content: (
              <div>
                You can customize modal footer
              </div>
            ),
            visible: true,
            onCancel: () => Modal.remove(modalId),
            footer: <Button onClick={() => Modal.remove(modalId)}>OK</Button>
          });
        }}
      >
        Open Modal with customized footer
      </Button>
      <Button
        onClick={() => {
          const modalId = Modal.add({
            title: 'Modal Title',
            content: (
              <div>
                You can customize modal footer
              </div>
            ),
            visible: true,
            footerAlign: 'left',
            onCancel: () => Modal.remove(modalId),
            footer: <Button onClick={() => Modal.remove(modalId)}>I'm left</Button>
          });
        }}
      >
         Open Modal with customized footer
      </Button>
      <Button
        onClick={() => {
          const modalId = Modal.add({
            title: 'Modal Title',
            content: (
              <div>
                You can customize modal footer
              </div>
            ),
            visible: true,
            onCancel: () => Modal.remove(modalId),
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
