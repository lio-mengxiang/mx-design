import { Tip } from '../locale';

const code = `
import { Spin } from '@arco-design/web-react';

function App() {
  return (
    <Spin tip='This may take a while...' loading block={false}>
      <div style={{ width: 360 }}>
        ByteDance's core product, Toutiao ('Headlines'), is a content platform in China and around
        the world. Toutiao started out as a news recommendation engine and gradually evolved into a
        platform delivering content in various formats.
      </div>
    </Spin>
  );
}`;

export const tip = {
  code,
  namespace: Tip,
};
