import { Basic } from '../locale';

const code = `
import { Dropdown, Message, Button } from '@mx-design/web';

function App() {
  const Message = useMessage();
  const droplist = [
    {
      uid: 1,
      title: 'Beijing'
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
    Message.add({
      type: 'success',
      content: \`选中【\${key}】\`
    });
  };

  const More = React.forwardRef((props, ref) => {
    const { visible, ...rest } = props;

    return (
      <div {...rest} ref={ref} style={{ display: 'flex', alignItems: 'center' }}>
        更多{' '}
        <IconArrowBottom style={{ transform: visible ? 'rotate(180deg)' : 'none', transition: 'transform 0.1s linear', marginLeft: '2px' }} />
      </div>
    );
  });
       
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
      <Dropdown droplist={droplist} onClick={clickHandler}>
        <Button type="text"><IconEllipsis /></Button>
      </Dropdown>
      <Dropdown droplist={droplist} onClick={clickHandler} addVisibleStatus>
        <More />
      </Dropdown>
      <Dropdown droplist={droplist} onClick={clickHandler} disabled>
        <Button type="text" disabled>Disabled DropDown</Button>
      </Dropdown>
    </Space>
  )
}`;

export const basic = {
  code,
  namespace: Basic,
};
