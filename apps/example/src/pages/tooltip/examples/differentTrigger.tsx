import { DifferentTrigger } from '../locale';

const code = `
import { Tooltip, Button } from '@mx-design/web';

function App() {
  return (
    <Space>
      <Tooltip trigger="hover" showArrow content="Hover me">
        <Button>Hover me</Button>
      </Tooltip>
      <Tooltip themeStyle={{ '--popup-wrapper-color': 'red' }} trigger="click" showArrow content="Click me">
        <Button onClick={() => console.log('Custom events')}>Click me</Button>
      </Tooltip>
      <Tooltip trigger="context-menu" showArrow content="Right click">
        <Button>Right click</Button>
      </Tooltip>
    </Space>
  );
}`;

export const differentTrigger = {
  code,
  namespace: DifferentTrigger,
};
