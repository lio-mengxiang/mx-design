import { Loading } from '../locale';

const code = `
import { Space, Button } from '@mx-design/web';

function App() {
  const [loading1, setLoading1] = React.useState(false);
  const [loading2, setLoading2] = React.useState(false);

  function onClickBtn1(e) {
    setLoading1(true);
    setTimeout(() => {
      setLoading1(false);
    }, 4000);
  }

  function onClickBtn2(e) {
    setLoading2(true);
    setTimeout(() => {
      setLoading2(false);
    }, 4000);
  }
  return (
    <div
      style={{
        display: 'flex',
        gap: 16,
      }}
    >
      <Space direction="vertical" size={16}>
        <Button type="brand" loading>
          Loading
        </Button>
        <Button type="outline" loading>
          Loading
        </Button>
        <Button type="text" loading>
          Loading
        </Button>
      </Space>

      <Space direction="vertical" size={16}>
        <Button type="brand" loading={loading1} onClick={onClickBtn1}>
          Click Me
        </Button>
        <Button type="brand" loading={loading2} onClick={onClickBtn2}>
          {!loading2 && <IconAdd />}Click Me
        </Button>
      </Space>
    </div>
  );
}`;

export const loading = {
  code,
  namespace: Loading,
};
