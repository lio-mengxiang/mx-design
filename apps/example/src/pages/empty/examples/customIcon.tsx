import { CustomIcon } from '../locale';

const code = `
import { Empty, IconSuccessFilling } from '@mx-design/web';

function App() {
  return (
    <Empty
      icon={
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            color: '#34a853',
            justifyContent: 'center',
          }}
        >
          <IconSuccessFilling />
        </div>
      }
      description='No data, please reload!'
    />
  );
};`;

export const customIcon = {
  code,
  namespace: CustomIcon,
};
