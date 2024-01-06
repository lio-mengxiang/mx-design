import { DifferentTrigger } from '../locale';

const code = `
import { Popup, Button } from '@mx-design/web';

function App() {
  return (
    <Space>
      <Popup trigger="hover" showArrow content={() => "Hover me"}>
        <Button>Hover me</Button>
      </Popup>
      <Popup trigger="click" showArrow content={() => "Click me"}>
        <Button onClick={() => console.log('Custom events')}>Click me</Button>
      </Popup>
      <Popup trigger="context-menu" showArrow content={() => "Right click"}>
        <Button>Right click</Button>
      </Popup>
    </Space>
  );
}`;

export const differentTrigger = {
  code,
  namespace: DifferentTrigger,
};
