import { CustomPic } from '../locale';

const code = `
import { Empty, Button } from '@mx-design/web';

function App() {
  return (
    <Empty
      imgSrc='https://pic1.zhimg.com/v2-9a344d6cdd66f3fa4c3edfcb3b6faf1e_1440w.jpg?source=172ae18b.png'
      description={<Button>Refresh</Button>}
    />
  );
};`;

export const customPic = {
  code,
  namespace: CustomPic,
};
