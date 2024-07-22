import { Position } from '../locale';

const code = `
import { Dropdown, MessageStore, Button } from '@mx-design/web';

function App() {
  const droplist = [
    {
      uid: 1,
      title: 'ChengDu',
    },
    {
      uid: 2,
      title: 'XiAn'
    },
    {
      uid: 3,
      title: 'DongBei'
    },
    {
      uid: 4,
      title: 'GuangXi'
    }
  ]
  const clickHandler = (key) => {
    MessageStore.add({
      type: 'success',
      content: \`选中【\${key}】\`
    });
  };

  return (
    <Space direction="vertical" size="24px">
      <Space size="24px">
        <Dropdown placement="left" droplist={droplist} onClick={clickHandler}>
          <Button type="brand" status="default">Left</Button>
        </Dropdown>
        <Dropdown placement="left-start" droplist={droplist} onClick={clickHandler}>
          <Button type="brand" status="default">Left-start</Button>
        </Dropdown>
        <Dropdown placement="left-end" droplist={droplist} onClick={clickHandler}>
          <Button type="brand" status="default">Left-end</Button>
        </Dropdown>
        <Dropdown placement="right" droplist={droplist} onClick={clickHandler}>
          <Button type="brand" status="default">Right</Button>
        </Dropdown>
        <Dropdown placement="right-start" droplist={droplist} onClick={clickHandler}>
          <Button type="brand" status="default">Right-start</Button>
        </Dropdown>
        <Dropdown placement="right-end" droplist={droplist} onClick={clickHandler}>
          <Button type="brand" status="default">Right-end</Button>
        </Dropdown>
      </Space>
      <Space size="24px">
        <Dropdown placement="top" droplist={droplist} onClick={clickHandler}>
          <Button type="brand" status="default">Top</Button>
        </Dropdown>
        <Dropdown placement="top-start" droplist={droplist} onClick={clickHandler}>
          <Button type="brand" status="default">Top-start</Button>
        </Dropdown>
        <Dropdown placement="top-end" droplist={droplist} onClick={clickHandler}>
          <Button type="brand" status="default">Top-end</Button>
        </Dropdown>
        <Dropdown placement="bottom" droplist={droplist} onClick={clickHandler}>
          <Button type="brand" status="default">Bottom</Button>
        </Dropdown>
        <Dropdown placement="bottom-start" droplist={droplist} onClick={clickHandler}>
          <Button type="brand" status="default">Bottom-start</Button>
        </Dropdown>
        <Dropdown placement="bottom-end" droplist={droplist} onClick={clickHandler}>
          <Button type="brand" status="default">Bottom-end</Button>
        </Dropdown>
      </Space>
    </Space>
  )
}`;

export const position = {
  code,
  namespace: Position,
};
