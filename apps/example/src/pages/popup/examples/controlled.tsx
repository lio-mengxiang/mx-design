import { Controlled } from '../locale';

const code = `
import { Popup, Button } from '@mx-design/web';

function App() {
  const [visible, setVisible] = React.useState(true);

  return (
    <Popup content={() => "This is the popup content"} trigger="context-menu" placement="right" visible={visible}>
      <Button onClick={()=> setVisible(!visible)}>一直显示(Always show)</Button>
    </Popup>
  );
}`;

export const controlled = {
  code,
  namespace: Controlled,
};
