import { Basic } from '../locale';

const code = `
import { Affix, Button } from '@mx-design/web';

function App() {
  const [top, setTop] = React.useState(150);

  const handleClick = () => {
    setTop(top + 10);
  };

  return (
    <Affix offsetTop={top} offsetBottom={10}>
      <Button onClick={handleClick}>固钉</Button>
    </Affix>
  );
}`;

export const basic = {
  code,
  namespace: Basic,
};
