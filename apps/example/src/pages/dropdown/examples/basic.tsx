import { Basic } from '../locale';

const code = `
import { Dropdown, Message, Button } from '@mx-design/web';

function App() {
  const Message = useMessage();
  const droplist = [
    {
      uid: 1,
      title: 'ChengDu',
      children: [
        {
          uid: 5,
          title: 'XiAn'
        },
        {
          uid: 6,
          title: 'DongBei'
        }
      ]
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
    Message.add({
      type: 'success',
      content: \`选中【\${key}】\`
    });
  };

  return (
    <Space>
      <Dropdown droplist={droplist} onClick={clickHandler}>
        <Button>Hover me</Button>
      </Dropdown>
      <Button.Group>
        <Button type="brand">Publish</Button>
        <Dropdown droplist={droplist} onClick={clickHandler}>
          <Button type="brand" icon={<IconArrowBottom />} />
        </Dropdown>
      </Button.Group>
      <Dropdown droplist={droplist} disabled>
        <Button>Hover me</Button>
      </Dropdown>
    </Space>
  )
}`;

export const basic = {
  code,
  namespace: Basic,
};
