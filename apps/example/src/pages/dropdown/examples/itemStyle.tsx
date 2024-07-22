import { ItemStyle } from '../locale';

const code = `
import { Dropdown, Button } from '@mx-design/web';

function App() {
  const droplist = [
    {
      uid: 1,
      title: 'My Account',
      divider: true,
      style: { fontWeight: 600 },
    },
    {
      uid: 2,
      title: <>Profile <span style={{ fontSize: '12px', opacity: 0.6 }}>⇧⌘P</span></>,
      style: { width: '100%', display: 'flex', justifyContent: 'space-between' },
    },
    {
      uid: 3,
      title: <>Setting <span style={{ fontSize: '12px', opacity: 0.6 }}>⌘S</span></>,
      style: { width: '100%', display: 'flex', justifyContent: 'space-between' },
      divider: true,
    },
    {
      uid: 4,
      title:  <>Delete <IconAshbin style={{ opacity: 0.6 }} /></>,
      style: { width: '100%',color: 'var(--error-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }
    }
  ]

  return (
    <Space>
      <Dropdown droplist={droplist} style={{ width: '220px' }}>
        <Button>Hover me</Button>
      </Dropdown>
    </Space>
  )
}`;

export const itemStyle = {
  code,
  namespace: ItemStyle,
};
