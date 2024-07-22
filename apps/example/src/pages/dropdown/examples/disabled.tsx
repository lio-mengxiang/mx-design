import { Disabled } from '../locale';

const code = `
import { Dropdown, MessageStore, Button } from '@mx-design/web';

function App() {
  const droplist = [
    {
      uid: 1,
      title: 'ChengDu',
      divider: true,
    },
    {
      uid: 2,
      title: 'XiAn',
    },
    {
      uid: 3,
      title: 'DongBei',
      divider: true,
    },
    {
      uid: 4,
      title: 'GuangXi',
      disabled: true
    }
  ]
  const clickHandler = (key) => {
    MessageStore.add({
      type: 'success',
      content: \`选中【\${key}】\`
    });
  };

  return (
    <Space>
      <Dropdown droplist={droplist} onClick={clickHandler}>
        <Button>Hover me</Button>
      </Dropdown>
    </Space>
  )
}`;

export const disabled = {
  code,
  namespace: Disabled,
};
