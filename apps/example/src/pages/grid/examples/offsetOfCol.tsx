import { OffsetOfCol } from '../locale';

const code = `
import { Row, Col } from '@mx-design/web';

const App = () => {
  return (
    <div style={{ width: '100%' }}>
      <Row
        className='grid-demo'
        style={{ marginBottom: 16, backgroundColor: 'var(--bg-color-component)' }}
      >
        <Col span={3}>col - 3</Col>
        <Col span={8} offset={13}>
          col - 8 | offset - 13
        </Col>
      </Row>
      <Row
        className='grid-demo'
        style={{ marginBottom: 16, backgroundColor: 'var(--bg-color-component)' }}
      >
        <Col span={6} offset={3}>
          col - 6 | offset - 3
        </Col>
        <Col span={6} offset={0}>
          col - 6 | offset - 0
        </Col>
      </Row>
      <Row className='grid-demo' style={{ backgroundColor: 'var(--bg-color-component)' }}>
        <Col span={12} offset={8}>
          col - 12 | offset - 8
        </Col>
      </Row>
    </div>
  );
}`;

export const offsetOfCol = {
  code,
  namespace: OffsetOfCol,
};
