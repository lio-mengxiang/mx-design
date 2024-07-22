import { ValidateFormat } from '../locale';

const code = `
import { Space, InputTag, MessageStore } from '@mx-design/web';

function App() {
  return (
    <Space>
      <InputTag
        allowClear
        style={{ width: 350 }}
        placeholder="Please input"
        validate={(v) => {
          if (!v || v.length < 3) {
            MessageStore.add({
              type: 'error',
              content: 'length of value should be greater than 3',
            });

            return false;
          }

          return true;
        }}
      />
      <InputTag
        allowClear
        style={{ width: 350 }}
        placeholder="Format user input"
        validate={(v) => {
          return { word: v };
        }}
        onChange={(value) => {
          MessageStore.add({
            type: 'info',
            content: \`Paramster of onChange: \${JSON.stringify(value)}\`,
          });
        }}
      />
    </Space>
  );
}`;

export const validateFormat = {
  code,
  namespace: ValidateFormat,
};
