import { TriggerMode } from '../locale';

const code = `
import { Popup, Button } from '@mx-design/web';

function App() {
  return (
    <Space>
      <Popup trigger="hover" showArrow content="This is a popup box">
        <Button variant="outline">Default child element to trigger</Button>
      </Popup>
      <Popup triggerElement={<Button>use triggerElement to trigger</Button>} showArrow content="This is a popup box"></Popup>
    </Space>
  );
}`;

export const triggerMode = {
  code,
  namespace: TriggerMode,
};
