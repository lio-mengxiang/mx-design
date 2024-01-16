import { ResponsiveLayout } from '../locale';

const code = `
import { Button } from '@mx-design/web';

const App = () => {
  return (
    <Row className='grid-demo'>
      <Col xs={2} sm={4} md={6} lg={8} xl={10} xxl={8}>
        Col
      </Col>
      <Col xs={20} sm={16} md={12} lg={8} xl={4} xxl={8}>
        Col
      </Col>
      <Col xs={2} sm={4} md={6} lg={8} xl={10} xxl={8}>
        Col
      </Col>
    </Row>
  );
}`;

export const responsiveLayout = {
  code,
  namespace: ResponsiveLayout,
};
