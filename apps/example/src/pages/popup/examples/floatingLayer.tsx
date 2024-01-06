import { FloatingLayer } from '../locale';

const code = `
import { Popup, Button } from '@mx-design/web';

function App() {
  return (
    <Space direction='vertical'>
      <Space>
        <Popup
          content={() => "浮层拥有自定义类名，可以自定义浮层样式"}
          overlayClassName="custom-popup"
          placement="bottom"
        >
          <Button variant="outline">自定义浮层类名（Custom overlay class name）</Button>
        </Popup>
        <Popup
          content={() => "浮层宽度是固定的，不会随内容变化而变化（Popup width is fixed）"}
          overlayInnerStyle={{ width: '350px', textAlign: 'center' }}
          placement="bottom"
        >
          <Button variant="outline">固定浮层宽度（Popup width is fixed）</Button>
        </Popup>
      </Space>
      <Space>
        <Popup
          content={() => "可以设置浮层最大宽度，当内容超出最大宽度时，文本内容才会换行"}
          overlayStyle={{ maxWidth: '250px' }}
          placement="bottom"
        >
          <Button variant="outline">浮层最大宽度（Maximum width of popup）</Button>
        </Popup>
        <Popup
          content={() => "overlayInnerStyle 作为函数使用，可以让浮层内容和触发元素同宽"}
          overlayInnerStyle={(triggerElem) => ({ width: + triggerElem.offsetWidth + 'px' })}
          placement="bottom"
        >
          <Button variant="outline">浮层和触发元素同宽（Same width as the trigger element）</Button>
        </Popup>
      </Space>
    </Space>
  );
}`;

export const floatingLayer = {
  code,
  namespace: FloatingLayer,
};
