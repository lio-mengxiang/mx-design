import { CustomContent } from '../locale';

const code = `
import { Radio, Space } from '@mx-design/web';

function App() {
  const Card = ({ item, checked }) => {
    const customCheckboxCard = {
      padding: '10px 16px',
      border: '1px solid #ddd',
      borderRadius: '4px',
      width: '250px',
      boxSizing: 'border-box',
      border: \`1px solid \${checked ? 'var(--brand-color)' : '#ddd'}\`,
      color: checked ? 'var(--brand-color)' : ''
    }

    return (
      <div style={customCheckboxCard} key={item}>
        <strong>Checkbox Card {item}</strong>
        <div>this is a text</div>
      </div>
    )
  }

  const tagStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    boxSizing: 'border-box',
    height: '24px',
    padding: '0 8px',
    border: '1px solid transparent',
    backgroundColor: 'var(--bg-color-container-active)',
    borderRadius: '4px',
    fontSize: '12px',
    fontWeight: 500,
    lineHeight: '22px'
  }
  return (
    <div>
      <div
        style={{ marginBottom: 20 }}
      >
        <Radio.Group defaultValue={['Beijing']} >
          {['Beijing', 'Shanghai', 'Guangzhou'].map((item) => {
            return (
              <Radio key={item} value={item} style={tagStyle}>
                {({ checked }) => {
                  return (
                    <div key={item} style={{ color: checked ? 'var(--warning-color-active)' : '' }}>
                      {item}
                    </div>
                  );
                }}
              </Radio>
            );
          })}
        </Radio.Group>
      </div>
      <Radio.Group defaultValue={[1]}>
        {[1, 2].map((item) => {
          return (
            <Radio key={item} value={item}>
              {({ checked }) => {
                return <Card item={item} checked={checked} />;
              }}
            </Radio>
          );
        })}
      </Radio.Group>
    </div>
  );
};`;

export const customContent = {
  code,
  namespace: CustomContent,
};
