import { Basic } from '../locale';

const code = `
import { useModal, Button } from '@mx-design/web';

function App() {
  const Modal = useModal();
  return (
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
          onCancel: () => Modal.remove(modalId),
        });
      }}
    >
      Open Modal
    </Button>
  );
}`;

export const basic = {
  code,
  namespace: Basic,
};
