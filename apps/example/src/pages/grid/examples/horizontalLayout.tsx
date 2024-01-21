import { HorizontalLayout } from '../locale';

const code = `
import { Button } from '@mx-design/web';

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
        容器左排列
      </p>
      <Row className='grid-demo' justify='start' style={rowStyle}>
        <Col span={4}>
          <div>col - 4</div>
        </Col>
        <Col span={4}>
          <div>col - 4</div>
        </Col>
        <Col span={4}>
          <div>col - 4</div>
        </Col>
        <Col span={4}>
          <div>col - 4</div>
        </Col>
      </Row>
      <p style={titleStyle}>
        容器居中排列
      </p>
      <Row className='grid-demo' justify='center' style={rowStyle}>
        <Col span={4}>
          <div>col - 4</div>
        </Col>
        <Col span={4}>
          <div>col - 4</div>
        </Col>
        <Col span={4}>
          <div>col - 4</div>
        </Col>
        <Col span={4}>
          <div>col - 4</div>
        </Col>
      </Row>
      <p style={titleStyle}>
        容器右排列
      </p>
      <Row className='grid-demo' justify='end' style={rowStyle}>
        <Col span={4}>
          <div>col - 4</div>
        </Col>
        <Col span={4}>
          <div>col - 4</div>
        </Col>
        <Col span={4}>
          <div>col - 4</div>
        </Col>
        <Col span={4}>
          <div>col - 4</div>
        </Col>
      </Row>
      <p style={titleStyle}>
        容器分散排列
      </p>
      <Row className='grid-demo' justify='space-around' style={rowStyle}>
        <Col span={4}>
          <div>col - 4</div>
        </Col>
        <Col span={4}>
          <div>col - 4</div>
        </Col>
        <Col span={4}>
          <div>col - 4</div>
        </Col>
        <Col span={4}>
          <div>col - 4</div>
        </Col>
      </Row>
      <p style={titleStyle}>
        容器等距排列
      </p>
      <Row className='grid-demo' justify='space-between' style={rowStyle}>
        <Col span={4}>
          <div>col - 4</div>
        </Col>
        <Col span={4}>
          <div>col - 4</div>
        </Col>
        <Col span={4}>
          <div>col - 4</div>
        </Col>
        <Col span={4}>
          <div>col - 4</div>
        </Col>
      </Row>
    </div>
  );
}`;

export const horizontalLayout = {
  code,
  namespace: HorizontalLayout,
};
