import { Loading } from '../locale';

const code = `
import { Button } from '@mx-design/web';

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
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 110px)',
        rowGap: 24,
        columnGap: 24,
        marginLeft: 24,
      }}
    >
      <Button type="brand" loading>
        Loading
      </Button>
      <Button type="outline" loading>
        Loading
      </Button>
      <Button type="text" loading>
        Loading
      </Button>

      <Button type="brand" loading={loading1} onClick={onClickBtn1}>
        Click Me
      </Button>
      <Button type="brand" loading={loading2} onClick={onClickBtn2}>
        {!loading2 && <IconAdd />}Click Me
      </Button>
    </div>
  );
}`;

export const loading = {
  code,
  namespace: Loading,
};
