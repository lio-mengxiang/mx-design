import { Basic } from '../locale';

const code = `
import { Tooltip, Button } from '@mx-design/web';

function App() {
  return (
    <Tooltip content={() => "This is a tooltip box"}>
      <Button>Hover me</Button>
    </Tooltip>
  )
}`;

export const basic = {
  code,
  namespace: Basic,
};
