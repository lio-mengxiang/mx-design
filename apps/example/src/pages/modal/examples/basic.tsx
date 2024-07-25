import { Basic } from '../locale';

const code = `
import { ModalStore, Button } from '@mx-design/web';

function App() {
  return (
    <Button
      onClick={() => {
        const modalId = ModalStore.add({
          title: 'Modal Title',
          content: (
            <div>
              You can customize modal body text by the current situation. This modal will be closed immediately once you press the OK
              button.
            </div>
          ),
          visible: true,
          onCancel: () => ModalStore.remove(modalId),
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
