import { PushPull } from '../locale';

const code = `
import { Space, Button } from '@mx-design/web';

const App = () => {
  return (
    <div style={{ width: '100%' }}>
      <Row
        className='grid-demo'
        style={{ marginBottom: 16, backgroundColor: 'var(--color-fill-2)' }}
      >
        <Col span={18} push={6}>
          col - 18 | push - 6
        </Col>
        <Col span={6} pull={18}>
          col - 6 | pull - 18
        </Col>
      </Row>
    </div>
  );
}`;

export const pushPull = {
  code,
  namespace: PushPull,
};
