import { FloatingLayer } from '../locale';

const code = `
import { Tooltip, Button } from '@mx-design/web';

function App() {
  const colors = [{
    background: '#165DFF',
    color: '#fff'
  },
  {
    background: '#722ED1',
    color: '#fff'
  }];
  return (
    <Space>
      <Tooltip overlayInnerStyle={colors[0]} content="This is a tooltip box">
        <Button style={colors[0]}>#165DFF</Button>
      </Tooltip>
      <Tooltip  overlayInnerStyle={colors[1]} content="This is a tooltip box">
        <Button style={colors[1]}>#722ED1</Button>
      </Tooltip>
    </Space>
  );
}`;

export const floatingLayer = {
  code,
  namespace: FloatingLayer,
};
