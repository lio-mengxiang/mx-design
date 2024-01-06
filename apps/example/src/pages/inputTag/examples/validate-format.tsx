import { ValidateFormat } from '../locale';

const code = `
import { Space, InputTag, useMessage } from '@mx-design/web';

function App() {
  const Message = useMessage();
  return (
    <Space>
      <InputTag
        allowClear
        style={{ width: 350 }}
        placeholder="Please input"
        validate={(v) => {
          if (!v || v.length < 3) {
            Message.add({
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
          Message.add({
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
