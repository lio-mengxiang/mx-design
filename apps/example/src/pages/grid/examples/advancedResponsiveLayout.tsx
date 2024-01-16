import { AdvancedResponsiveLayout } from '../locale';

const code = `
import { Row, Col } from '@mx-design/web';

const App = () => {
  return (
    <div style={{ width: '100%' }}>
      <Row className='grid-demo'>
        <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
          Col
        </Col>
        <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
          Col
        </Col>
        <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
          Col
        </Col>
      </Row>
    </div>
  );
}`;

export const advancedResponsiveLayout = {
  code,
  namespace: AdvancedResponsiveLayout,
};
