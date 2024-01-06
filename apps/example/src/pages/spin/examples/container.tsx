import { Container } from '../locale';

const code = `
import { Spin, Button, Space } from '@mx-design/web';

function App() {
  const [loading, setLoading] = React.useState(true);
  return (
    <>
      <Button
        style={{ display: 'block', marginBottom: 24, }}
        onClick={() => setLoading(!loading)}
      >
        {\`Loading: \${loading}\`}
      </Button>
      <Space>
        <Spin loading={loading}>
          <div
            style={{ width: '100%', paddingRight: '24px', boxSizing: 'border-box' }}
          >
          An operating system (OS) is system software that manages computer hardware and software resources, and provides common services for computer programs.
          </div>
        </Spin>
        <Spin loading={loading}>
          <div
            style={{ width: '100%', }}
            title='Arco Card'
            extra={<span> More </span>}
          >
          An operating system (OS) is system software that manages computer hardware and software resources, and provides common services for computer programs.
          </div>
        </Spin>
      </Space>
      <Spin
        loading={loading}
        style={{ display: 'block', marginTop: 48, }}
      >
        <div>
        An operating system (OS) is system software that manages computer hardware and software resources, and provides common services for computer programs.
        </div>
      </Spin>
    </>
  );
}`;

export const container = {
  code,
  namespace: Container,
};
