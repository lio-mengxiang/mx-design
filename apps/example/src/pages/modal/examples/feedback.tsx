import { Feedback } from '../locale';

const code = `
import { useModal, Button, Space } from '@mx-design/web';

function App() {
  const Modal = useModal();
  return (
    <Space>
      <Button
        onClick={() => {
          const modalId = Modal.add({
            title: 'Info Modal Title',
            type: 'info',
            content: <div>Info Modal</div>,
            visible: true,
            hideCancelBtn: true,
            onCancel: () => Modal.remove(modalId),
            onOk: () => Modal.remove(modalId),
          });
        }}
      >
        Info Modal
      </Button>
      <Button
        type="brand"
        status="warning"
        onClick={() => {
          const modalId = Modal.add({
            title: 'Warning Modal Title',
            type: 'warning',
            content: <div>Warning Modal</div>,
            visible: true,
            hideCancelBtn: true,
            onCancel: () => Modal.remove(modalId),
            onOk: () => Modal.remove(modalId),
          });
        }}
      >
        Warning
      </Button>
      <Button
        type="brand"
        status="error"
        onClick={() => {
          const modalId = Modal.add({
            title: 'Error Modal Title',
            type: 'error',
            content: <div>Error Modal</div>,
            visible: true,
            hideCancelBtn: true,
            onCancel: () => Modal.remove(modalId),
            onOk: () => Modal.remove(modalId),
          });
        }}
      >
        Error
      </Button>

      <Button
        type="brand"
        status="success"
        onClick={() => {
          const modalId = Modal.add({
            title: 'Error Modal Title',
            type: 'success',
            content: <div>Success Modal</div>,
            visible: true,
            hideCancelBtn: true,
            onCancel: () => Modal.remove(modalId),
            onOk: () => Modal.remove(modalId),
          });
        }}
      >
        Success
      </Button>
    </Space>
  );
}`;

export const feedback = {
  code,
  namespace: Feedback,
};
