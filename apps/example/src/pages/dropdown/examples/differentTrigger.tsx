import { DifferentTrigger } from '../locale';

const code = `
import { Dropdown, Message, Button } from '@mx-design/web';

function App() {
  const Message = useMessage();
  const droplist = [
    {
      uid: 1,
      title: 'ChengDu',
    },
    {
      uid: 2,
      title: 'XiAn',
    },
    {
      uid: 3,
      title: 'DongBei',
    },
    {
      uid: 4,
      title: 'GuangXi',
    }
  ]

  return (
    <Space size='28px'>
      <Dropdown trigger="click" droplist={droplist}>
        <Button>Click me</Button>
      </Dropdown>
      <Dropdown trigger="click" droplist={droplist}>
        <Button>Click me</Button>
      </Dropdown>
      <Dropdown trigger="context-menu" droplist={droplist}>
        <Button>Right Click</Button>
      </Dropdown>
    </Space>
  )
}`;

export const differentTrigger = {
  code,
  namespace: DifferentTrigger,
};
