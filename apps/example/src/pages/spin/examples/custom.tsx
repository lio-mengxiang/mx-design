import { Custom } from '../locale';

const code = `
import { Spin, IconLoading } from '@mx-design/web';

function App() {
  return (
    <Spin loading={true} size={30} element={<IconFavorite spin />} block={false}>
      <div
        style={{ width: 360, }}
      >
      An operating system (OS) is system software that manages computer hardware and software resources, and provides common services for computer programs.
      </div>
    </Spin>
  );
}`;

export const custom = {
  code,
  namespace: Custom,
};
