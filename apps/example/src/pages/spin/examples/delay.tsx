import { Delay } from '../locale';

const code = `
import { Spin, Button } from '@arco-design/web-react';

function App() {
  const [loading, setLoading] = React.useState(true);
  return (
    <>
      <Button style={{ display: 'block', marginBottom: 24 }} onClick={() => setLoading(!loading)}>
        {\`Loading: \${loading}\`}
      </Button>
      <Spin delay={500} loading={loading} block={false}>
        <div
          style={{ width: 360 }}
        >
          An operating system (OS) is system software that manages computer hardware and software resources, and provides common services for computer programs..
        </div>
      </Spin>
    </>
  );
}`;

export const delay = {
  code,
  namespace: Delay,
};
