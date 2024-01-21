import { GetDisabledStatus } from '../locale';

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
