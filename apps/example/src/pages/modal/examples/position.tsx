import { Position } from '../locale';

const code = `
import { useModal, Space, Button } from '@mx-design/web';

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
                Display a modal dialog at 50px to top
              </div>
            ),
            visible: true,
            themeStyle: { '--modal-top': '50px' },
            onCancel: () => Modal.remove(modalId),
          });
        }}
      >
        Display a modal dialog at 50px to top
      </Button>
      <Button
        onClick={() => {
          const modalId = Modal.add({
            title: 'Modal Title',
            content: (
              <div>
                Vertically centered modal dialog
              </div>
            ),
            visible: true,
            themeStyle: { '--modal-top': 'calc(50% - 104px)' },
            onCancel: () => Modal.remove(modalId),
          });
        }}
      >
        Vertically centered modal dialog
      </Button>
    </Space>
  );
}`;

export const position = {
  code,
  namespace: Position,
};
