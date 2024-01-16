import { IntervalOfGrid } from '../locale';

const code = `
import { Space, Button } from '@mx-design/web';

const App = () => {
  return (
    <div style={{ width: '100%' }}>
      <Row gutter={24}>
        <Col span={6}>
          <div style={{ background: 'var(--brand-color-4)',padding: '12px', color: '#fff' }}>col - 6</div>
        </Col>
        <Col span={6}>
          <div style={{ background: 'var(--brand-color-6)',padding: '12px', color: '#fff' }}>col - 6</div>
        </Col>
        <Col span={6}>
          <div style={{ background: 'var(--brand-color-4)',padding: '12px', color: '#fff' }}>col - 6</div>
        </Col>
        <Col span={6}>
          <div style={{ background: 'var(--brand-color-6)',padding: '12px', color: '#fff' }}>col - 6</div>
        </Col>
      </Row>
    </div>
  );
}`;

export const intervalOfGrid = {
  code,
  namespace: IntervalOfGrid,
};
