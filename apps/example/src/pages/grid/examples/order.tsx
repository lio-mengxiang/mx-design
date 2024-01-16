import { Order } from '../locale';

const code = `
import { Row, Col } from '@mx-design/web';

const App = () => {
  return (
    <div style={{ width: '100%' }}>
      <Row className='grid-demo'>
        <Col span={6} order={4}>
          <div>1 col-order-4</div>
        </Col>
        <Col span={6} order={3}>
          <div>2 col-order-3</div>
        </Col>
        <Col span={6} order={2}>
          <div>3 col-order-2</div>
        </Col>
        <Col span={6} order={1}>
          <div>4 col-order-1</div>
        </Col>
      </Row>
    </div>
  );
}`;

export const order = {
  code,
  namespace: Order,
};
