import { GetDisabledStatus } from '../locale';

const code = `
import { Dropdown, MessageStore, Button } from '@mx-design/web';

function App() {
  const droplist = [
    {
      uid: 1,
      title: 'Beijing',
    },
    {
      uid: 2,
      title: 'Chengdu',
      children: [
        {
          uid: 5,
          title: 'ShuangLiu'
        },
        {
          uid: 6,
          title: 'WUHou'
        }
      ]
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

  const Demo = React.forwardRef((props, ref) => {
    const { visible, disabled, ...rest } = props;

    return (
      <div {...rest} ref={ref} style={{ display: 'flex', alignItems: 'center', color: disabled ? 'var(--text-color-disabled)' : 'none' }}>
        更多{' '}
        <IconArrowBottom style={{ transform: visible ? 'rotate(180deg)' : 'none', transition: 'transform 0.1s linear', marginLeft: '2px' }} />
      </div>
    );
  });
       
  return (
    <Space>
      <Dropdown droplist={droplist} onClick={clickHandler} addVisibleStatus>
        <Demo />
      </Dropdown>
      <Dropdown droplist={droplist} onClick={clickHandler} addVisibleStatus disabled>
        <Demo />
      </Dropdown>
    </Space>
  )
}`;

export const getDisabledStatus = {
  code,
  namespace: GetDisabledStatus,
};
