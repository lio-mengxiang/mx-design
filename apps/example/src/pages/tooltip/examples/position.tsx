import { Position } from '../locale';

const code = `
import { Tooltip, Button } from '@mx-design/web';

function App() {
  const styles = {
    container: {
      margin: '0 auto',
      width: '500px',
      height: '260px',
      position: 'relative',
    },
    placementTop: {
      position: 'absolute',
      top: '0',
      left: '42%',
    },
    placementTopLeft: {
      position: 'absolute',
      top: '0',
      left: '70px',
    },
    placementTopRight: {
      position: 'absolute',
      top: '0',
      right: '70px',
    },
    placementBottom: {
      position: 'absolute',
      bottom: '0',
      left: '42%',
    },
    placementBottomLeft: {
      position: 'absolute',
      bottom: '0',
      left: '70px',
      width: '120px',
    },
    placementBottomRight: {
      position: 'absolute',
      bottom: '0',
      right: '70px',
    },
    placementLeft: {
      position: 'absolute',
      left: '0',
      top: '42%',
    },
    placementLeftTop: {
      position: 'absolute',
      left: '0',
      top: '50px',
    },
    placementLeftBottom: {
      position: 'absolute',
      left: '0',
      bottom: '50px',
    },
    placementRight: {
      position: 'absolute',
      right: '0',
      top: '42%',
    },
    placementRightTop: {
      position: 'absolute',
      right: '0',
      top: '50px',
    },
    placementRightBottom: {
      position: 'absolute',
      right: '0',
      bottom: '50px',
    },
  };
  return (
    <div style={styles.container}>
      <Tooltip content={() => "这是Tooltip内容"} placement="top" showArrow>
        <Button style={styles.placementTop}>top</Button>
      </Tooltip>
      <Tooltip content={() => "这是Tooltip内容 top-start"} placement="top-start" showArrow>
        <Button style={styles.placementTopLeft}>top-start</Button>
      </Tooltip>
      <Tooltip content={() => "这是Tooltip内容 top-end"} placement="top-end" showArrow>
        <Button style={styles.placementTopRight}>top-end</Button>
      </Tooltip>
      <Tooltip content={() => "这是Tooltip内容"} placement="bottom" showArrow>
        <Button style={styles.placementBottom}>bottom</Button>
      </Tooltip>
      <Tooltip content={() => "这是Tooltip内容 bottom-start"} placement="bottom-start" showArrow>
        <Button style={styles.placementBottomLeft}>bottom-start</Button>
      </Tooltip>
      <Tooltip content={() => "这是Tooltip内容 bottom-end"} placement="bottom-end" showArrow>
        <Button style={styles.placementBottomRight}>bottom-end</Button>
      </Tooltip>
      <Tooltip content={() => "这是Tooltip内容"} placement="left" showArrow>
        <Button style={styles.placementLeft}>left</Button>
      </Tooltip>
      <Tooltip
        content={() => "这是Tooltip内容   left-start"}
        placement="left-start"
        overlayStyle={{ width: '140px' }}
        showArrow
      >
        <Button style={styles.placementLeftTop}>left-start</Button>
      </Tooltip>
      <Tooltip
        content={() => "这是Tooltip内容 left-end"}
        placement="left-end"
        overlayStyle={{ width: '140px' }}
        showArrow
      >
        <Button style={styles.placementLeftBottom}>left-end</Button>
      </Tooltip>
      <Tooltip content={() => "这是Tooltip内容"} placement="right" showArrow>
        <Button style={styles.placementRight}>right</Button>
      </Tooltip>
      <Tooltip
        content={() => "这是Tooltip内容 right-start"}
        placement="right-start"
        overlayStyle={{ width: '140px' }}
        showArrow
      >
        <Button style={styles.placementRightTop}>right-start</Button>
      </Tooltip>
      <Tooltip
        content={() => "这是Tooltip内容 right-end"}
        placement="right-end"
        overlayStyle={{ width: '140px' }}
        showArrow
      >
        <Button style={styles.placementRightBottom}>right-end</Button>
      </Tooltip>
    </div>
  );
}`;

export const position = {
  code,
  namespace: Position,
};
