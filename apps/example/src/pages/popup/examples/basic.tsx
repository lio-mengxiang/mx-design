import { Basic } from '../locale';

const code = `
import { Popup, Button } from '@mx-design/web';

function App() {
  return (
    <Popup trigger="hover" content="This is a popup box">
      <Button>Hover me</Button>
    </Popup>
  )
}`;

export const basic = {
  code,
  namespace: Basic,
};
