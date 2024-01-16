import { VerticalLayout } from '../locale';

const code = `
import { Button, IconArrowBottom } from '@mx-design/web';

const rowStyle = {
  marginBottom: 40,
  backgroundColor: 'var(--bg-color-component)'
};
const titleStyle = {
  fontSize: 12,
  color: '#141f33',
};

const App = () => {
  return (
    <div style={{ width: '100%' }}>
      <p style={titleStyle}>
        垂直顶部对齐
      </p>
      <Row className='grid-demo' align='start' style={rowStyle}>
        <Col span={6} style={{ height: 90, lineHeight: '90px' }}>
          <div>col - 6</div>
        </Col>
        <Col span={6} style={{ height: 48, lineHeight: '48px' }}>
          <div>col - 6</div>
        </Col>
        <Col span={6} style={{ height: 120, lineHeight: '120px' }}>
          <div>col - 6</div>
        </Col>
        <Col span={6} style={{ height: 60, lineHeight: '60px' }}>
          <div>col - 6</div>
        </Col>
      </Row>
      <p style={titleStyle}>
        垂直居中对齐
      </p>
      <Row className='grid-demo' align='center' style={rowStyle}>
        <Col span={6} style={{ height: 90, lineHeight: '90px' }}>
          <div>col - 6</div>
        </Col>
        <Col span={6} style={{ height: 48, lineHeight: '48px' }}>
          <div>col - 6</div>
        </Col>
        <Col span={6} style={{ height: 120, lineHeight: '120px' }}>
          <div>col - 6</div>
        </Col>
        <Col span={6} style={{ height: 60, lineHeight: '60px' }}>
          <div>col - 6</div>
        </Col>
      </Row>
      <p style={titleStyle}>
        垂直底部对齐
      </p>
      <Row className='grid-demo' align='end' style={rowStyle}>
        <Col span={6} style={{ height: 90, lineHeight: '90px' }}>
          <div>col - 6</div>
        </Col>
        <Col span={6} style={{ height: 48, lineHeight: '48px' }}>
          <div>col - 6</div>
        </Col>
        <Col span={6} style={{ height: 120, lineHeight: '120px' }}>
          <div>col - 6</div>
        </Col>
        <Col span={6} style={{ height: 60, lineHeight: '60px' }}>
          <div>col - 6</div>
        </Col>
      </Row>
    </div>
  );
};`;

export const verticalLayout = {
  code,
  namespace: VerticalLayout,
};
