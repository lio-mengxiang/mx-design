import { Controlled } from '../locale';

const code = `
import { Popup, Button } from '@mx-design/web';

function App() {
  const [visible, setVisible] = React.useState(true);

  return (
    <div id="wrapper">
      <Popup content={() => "This is the popup content"} trigger="context-menu" placement="right" attach={document.getElementById('wrapper')} visible={visible}>
        <Button onClick={()=> setVisible(!visible)}>一直显示(Always show)</Button>
      </Popup>
    </div>
  );
}`;

export const controlled = {
  code,
  namespace: Controlled,
};
