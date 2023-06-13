import { Dynamic } from '../locale';

const code = `
import { Popup, Button } from '@mx-design/web';

function App() {
  const [visible] = React.useState(true);
  const [spanVisible, setVisible] = React.useState(false);
  const [content, setContent] = React.useState('This is the popup content');
  const btnClicksRef = React.useRef(0);

  const toggleContent = () => {
    btnClicksRef.current += 1;
    const showMore = btnClicksRef.current % 2 !== 0;
    setVisible(showMore);
    setContent(\`This is the popup content\${showMore ? '，There are many, many, many, many....' : ''}\`);
  };

  return (
    <Popup content={content} trigger="context-menu" placement="right" visible={visible}>
      <Button onClick={toggleContent}>Click to change content{spanVisible && <span>，click again</span>}</Button>
    </Popup>
  );
}`;

export const dynamic = {
  code,
  namespace: Dynamic,
};
