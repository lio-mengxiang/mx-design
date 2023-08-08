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
              You can customize modal body text by the current situation. This modal will be closed immediately once you press the OK
              button.
            </div>
          ),
          visible: true,
          footer: <Button onClick={() => Modal.remove(modalId)}>customize Button</Button>
        });
      }}
    >
      Open Modal
    </Button>
    </Space>
  );
}`;

export const footer = {
  code,
  namespace: Footer,
};
