import { Align } from '../locale';

const code = `
import { Space } from '@mx-design/web';

function App() {
  return (
    <Space align='start'>
      <div style={{ background: 'orange', height: '42px',padding: '12px', color: '#fff', borderRadius: '8px' }}>You are so good</div>
      <div style={{ background: '#ff5900', height: '32px',padding: '12px', color: '#fff', borderRadius: '8px' }}>You are so good</div>
      <Button status='default'>You are so pretty</Button>
    </Space>
  );
}`;

export const align = {
  code,
  namespace: Align,
};
