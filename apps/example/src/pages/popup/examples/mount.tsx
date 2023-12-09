import { Mount } from '../locale';

const code = `
import { Popup, Button } from '@mx-design/web';

function App() {
  return (
    <Space>
      <Popup
        trigger="click"
        content={() => "通过id选择器选择父节点(Select parent node by id selector)"}
        attach='#app'
      >
        <Button>点击查看id为app的元素(Click to view the element whose id is app)</Button>
      </Popup>
    </Space>
  );
}`;

export const mount = {
  code,
  namespace: Mount,
};
