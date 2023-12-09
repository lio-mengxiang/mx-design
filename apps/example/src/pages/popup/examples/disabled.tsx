import { Disabled } from '../locale';

const code = `
import { Popup, Button } from '@mx-design/web';

function App() {
  return (
    <Popup trigger="hover" disabled showArrow content={() => "This is the popup content"}>
      <Button>Hover me</Button>
    </Popup>
  );
}`;

export const disabled = {
  code,
  namespace: Disabled,
};
